import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80),
  phone: z.string().trim().min(6, "Укажите номер телефона").max(30),
  utm: z.string().max(2000).optional(),
  pageUrl: z.string().max(500).optional(),
  // Meta Conversions API deduplication + matching signals (sent from the browser)
  eventId: z.string().max(100).optional(),
  fbp: z.string().max(200).optional(),
  fbc: z.string().max(400).optional(),
  userAgent: z.string().max(500).optional(),
});

function formatPhoneForWa(raw: string): string {
  const digits = raw.replace(/\D+/g, "");
  // Kazakhstan/Russia local format starting with 8 -> 7
  if (digits.length === 11 && digits.startsWith("8")) {
    return "7" + digits.slice(1);
  }
  return digits;
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** SHA-256 hex via Web Crypto (works in both Node 18+ and edge runtimes). */
async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

type CapiInput = {
  name: string;
  phone: string;
  eventId?: string;
  fbp?: string;
  fbc?: string;
  userAgent?: string;
  pageUrl?: string;
  clientIp?: string;
};

/**
 * Sends the "Lead" event to Meta via the Conversions API (server-to-server).
 * Never throws: tracking must not break lead submission.
 */
async function sendMetaCapiLead(input: CapiInput): Promise<void> {
  const PIXEL_ID = process.env.META_PIXEL_ID;
  const TOKEN = process.env.META_CAPI_TOKEN;
  if (!PIXEL_ID || !TOKEN) {
    // CAPI not configured — silently skip (browser pixel still fires).
    return;
  }

  try {
    const phoneDigits = formatPhoneForWa(input.phone);
    const firstName = input.name.trim().split(/\s+/)[0]?.toLowerCase() ?? "";

    const userData: Record<string, unknown> = {};
    if (phoneDigits) userData.ph = [await sha256Hex(phoneDigits)];
    if (firstName) userData.fn = [await sha256Hex(firstName)];
    if (input.fbp) userData.fbp = input.fbp;
    if (input.fbc) userData.fbc = input.fbc;
    if (input.userAgent) userData.client_user_agent = input.userAgent;
    if (input.clientIp) userData.client_ip_address = input.clientIp;

    const event: Record<string, unknown> = {
      event_name: "Lead",
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      user_data: userData,
    };
    if (input.eventId) event.event_id = input.eventId;
    if (input.pageUrl) event.event_source_url = input.pageUrl;

    const body: Record<string, unknown> = { data: [event] };
    if (process.env.META_TEST_EVENT_CODE) {
      body.test_event_code = process.env.META_TEST_EVENT_CODE;
    }

    const res = await fetch(
      `https://graph.facebook.com/v21.0/${PIXEL_ID}/events?access_token=${encodeURIComponent(TOKEN)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );
    if (!res.ok) {
      const text = await res.text();
      console.error(`Meta CAPI failed [${res.status}]: ${text}`);
    }
  } catch (error) {
    console.error("Meta CAPI error", error);
  }
}

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => InputSchema.parse(data))
  .handler(async ({ data }) => {
    // Отправляем заявку напрямую в Telegram Bot API (без шлюза Lovable).
    // TELEGRAM_API_KEY — это токен бота от @BotFather (вида 123456789:ABC-DEF...).
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_API_KEY;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram env missing", {
        hasToken: !!TELEGRAM_BOT_TOKEN,
        hasChat: !!TELEGRAM_CHAT_ID,
      });
      throw new Error("Server is not configured");
    }

    const waDigits = formatPhoneForWa(data.phone);
    const waUrl = waDigits
      ? `https://wa.me/${waDigits}?text=${encodeURIComponent(
          `Здравствуйте, ${data.name}! Вы оставили заявку на разбор клиники.`,
        )}`
      : "";

    const nowKz = new Date().toLocaleString("ru-RU", {
      timeZone: "Asia/Almaty",
      dateStyle: "short",
      timeStyle: "short",
    });

    const lines = [
      "<b>🔥 Новая заявка на тестовую неделю</b>",
      "",
      `<b>Дата:</b> ${escapeHtml(nowKz)} (Алматы)`,
      `<b>Имя:</b> ${escapeHtml(data.name)}`,
      `<b>Телефон:</b> ${escapeHtml(data.phone)}`,
      "",
      `<b>UTM:</b> ${escapeHtml(data.utm || "—")}`,
      `<b>Страница:</b> ${escapeHtml(data.pageUrl || "—")}`,
    ];
    if (waUrl) {
      lines.push("", `<a href="${waUrl}">📱 Написать в WhatsApp</a>`);
    }

    const text = lines.join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      },
    );

    if (!response.ok) {
      const body = await response.text();
      console.error(`Telegram sendMessage failed [${response.status}]: ${body}`);
      throw new Error("Не удалось отправить заявку. Попробуйте ещё раз.");
    }
    const payload = (await response.json()) as { ok?: boolean; description?: string };
    if (!payload.ok) {
      console.error(`Telegram sendMessage ok=false: ${payload.description ?? "unknown"}`);
      throw new Error("Не удалось отправить заявку. Попробуйте ещё раз.");
    }

    // Server-side Lead to Meta (deduplicated with the browser pixel via event_id).
    // Non-blocking: failures here never affect the user's submission.
    await sendMetaCapiLead({
      name: data.name,
      phone: data.phone,
      eventId: data.eventId,
      fbp: data.fbp,
      fbc: data.fbc,
      userAgent: data.userAgent,
      pageUrl: data.pageUrl,
    });

    return { success: true as const };
  });
