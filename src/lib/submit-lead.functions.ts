import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя").max(80),
  phone: z.string().trim().min(6, "Укажите номер телефона").max(30),
  utm: z.string().max(2000).optional(),
  pageUrl: z.string().max(500).optional(),
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

    return { success: true as const };
  });
