import { LeadCta } from "./lead-cta";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 backdrop-blur">
      <div className="mx-auto max-w-[480px]">
        <LeadCta source="sticky_cta">Бесплатный разбор клиники</LeadCta>
      </div>
    </div>
  );
}
