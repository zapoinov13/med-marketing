import { useServerFn } from "@tanstack/react-start";
import { useState, type ReactNode } from "react";

import { submitLead } from "@/lib/submit-lead.functions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WA_NUMBER = "77472842595";
const WA_DEFAULT_TEXT =
  "Добрый день! Я хочу записаться на неделю маркетинга для мед клиники.";

type Props = {
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  /** Optional context appended to the internal lead source label */
  source?: string;
};

function primaryButtonClass() {
  return "inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-semibold text-brand-foreground shadow-brand transition-transform active:scale-[0.98]";
}

function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\/+^])/g, "\\$1") + "=([^;]*)"),
  );
  return match ? decodeURIComponent(match[1]) : undefined;
}

/** Reads the Meta click id cookie, or rebuilds it from a ?fbclid= URL param. */
function getFbc(): string | undefined {
  const cookie = getCookie("_fbc");
  if (cookie) return cookie;
  if (typeof window === "undefined") return undefined;
  const fbclid = new URLSearchParams(window.location.search).get("fbclid");
  return fbclid ? `fb.1.${Date.now()}.${fbclid}` : undefined;
}

function trackLead(eventId: string) {
  try {
    // eventID lets Meta deduplicate this browser event against the CAPI event.
    window.fbq?.("track", "Lead", {}, { eventID: eventId });
  } catch {
    /* noop */
  }
  try {
    (window as unknown as { dataLayer?: Array<Record<string, unknown>> }).dataLayer?.push({
      event: "generate_lead",
    });
  } catch {
    /* noop */
  }
  try {
    (window as unknown as { ym?: (id: number, action: string, target: string) => void }).ym?.(
      110625855,
      "reachGoal",
      "lead_submitted",
    );
  } catch {
    /* noop */
  }
}

function formatKzPhone(raw: string): string {
  let d = raw.replace(/\D+/g, "");
  // Strip a leading country code (7/8) only when the full 11-digit form was entered/pasted.
  if (d.length === 11 && (d[0] === "7" || d[0] === "8")) d = d.slice(1);
  d = d.slice(0, 10);
  if (d.length === 0) return "";
  let out = "+7 (" + d.slice(0, 3);
  if (d.length >= 3) out += ")";
  if (d.length > 3) out += " " + d.slice(3, 6);
  if (d.length > 6) out += " " + d.slice(6, 8);
  if (d.length > 8) out += " " + d.slice(8, 10);
  return out;
}

export function LeadCta({ children, className, ariaLabel, source }: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const submit = useServerFn(submitLead);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    if (trimmedName.length < 2) {
      setErrorMsg("Пожалуйста, укажите имя");
      return;
    }
    const digits = trimmedPhone.replace(/\D+/g, "");
    const national = digits.length === 11 ? digits.slice(1) : digits;
    if (national.length < 10) {
      setErrorMsg("Введите номер полностью");
      return;
    }
    setStatus("submitting");
    try {
      const utm =
        typeof window !== "undefined"
          ? [window.location.search, source ? `source=${source}` : ""]
              .filter(Boolean)
              .join(" | ")
          : "";
      const pageUrl = typeof window !== "undefined" ? window.location.href : "";
      const eventId =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `lead-${Date.now()}-${Math.random().toString(16).slice(2)}`;
      const fbp = getCookie("_fbp");
      const fbc = getFbc();
      const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : undefined;
      await submit({
        data: {
          name: trimmedName,
          phone: trimmedPhone,
          utm,
          pageUrl,
          eventId,
          fbp,
          fbc,
          userAgent,
        },
      });
      trackLead(eventId);
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Не удалось отправить заявку",
      );
    }
  }

  function reset() {
    setName("");
    setPhone("");
    setStatus("idle");
    setErrorMsg(null);
  }

  const waHref =
    "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_DEFAULT_TEXT);

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) {
          // small delay so success state doesn't flash when closing
          setTimeout(reset, 200);
        }
      }}
    >
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={ariaLabel ?? "Оставить заявку на разбор клиники"}
          className={className ?? primaryButtonClass()}
        >
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[440px] rounded-2xl p-0 overflow-hidden">
        {status === "success" ? (
          <div className="p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand text-3xl">
              ✓
            </div>
            <DialogHeader className="mt-4">
              <DialogTitle className="text-xl font-extrabold text-ink text-center">
                Спасибо за заявку!
              </DialogTitle>
              <DialogDescription className="text-[15px] text-ink-muted leading-relaxed mt-2 text-center">
                Я свяжусь с вами в ближайшее время через WhatsApp, чтобы обсудить
                удобное время для разбора вашей клиники. Будьте на связи.
              </DialogDescription>
            </DialogHeader>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-semibold text-brand-foreground shadow-brand transition-transform active:scale-[0.98]"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.15-.174.199-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.5h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.463 3.203z" />
              </svg>
              Написать в WhatsApp
            </a>
            <p className="mt-3 text-[12px] text-ink-muted">
              Если срочно — напишите сами, отвечу быстрее.
            </p>
          </div>
        ) : (
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold text-ink leading-tight">
                Бесплатный разбор клиники
              </DialogTitle>
              <DialogDescription className="text-[14px] text-ink-muted leading-relaxed mt-2">
                Оставьте контактные данные — свяжусь с вами через WhatsApp и обсудим
                удобное время для разбора.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="mt-5 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="lead-name" className="text-[13px] font-semibold text-ink">
                  Имя
                </Label>
                <Input
                  id="lead-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Как к вам обращаться"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={80}
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="lead-phone" className="text-[13px] font-semibold text-ink">
                  Номер телефона
                </Label>
                <Input
                  id="lead-phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={phone}
                  onChange={(e) => setPhone(formatKzPhone(e.target.value))}
                  maxLength={18}
                  required
                  className="h-12 text-base"
                />
              </div>

              {errorMsg ? (
                <p className="text-[13px] text-destructive font-medium">{errorMsg}</p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-semibold text-brand-foreground shadow-brand transition-transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Отправляем…" : "Отправить заявку"}
              </button>

              <p className="text-center text-[12px] text-ink-muted leading-relaxed">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
