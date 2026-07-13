import { createFileRoute } from "@tanstack/react-router";
import { WaCta } from "@/components/wa-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Тестовая неделя маркетинга для клиник — 50 000 ₸" },
      {
        name: "description",
        content:
          "7 дней внедрений в вашей клинике: находим слабые места и запускаем систему привлечения платных пациентов. Кейс: +13 000 000 ₸ выручки.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Тестовая неделя маркетинга для медицинских клиник",
          provider: { "@type": "Person", name: "Юрий Валерьевич" },
          areaServed: "KZ",
          description:
            "7 дней глубокой работы с клиникой: аудит, стратегия, контент, реклама, аналитика, план роста.",
          offers: {
            "@type": "Offer",
            price: "50000",
            priceCurrency: "KZT",
          },
        }),
      },
    ],
  }),
  component: LandingPage,
});

function Check({ variant = "aqua" }: { variant?: "aqua" | "navy" }) {
  const color = variant === "navy" ? "text-brand" : "text-accent-aqua";
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 shrink-0 stroke-[3] ${color}`}
      fill="none"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0 stroke-[3] text-rose-400"
      fill="none"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function SectionWrap({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-16 ${className}`}>
      <div className="mx-auto max-w-[520px]">{children}</div>
    </section>
  );
}

function LandingPage() {
  const problems = [
    "Неправильное предложение",
    "Нет пакетов лечения",
    "Слабые сценарии",
    "Администратор теряет пациентов",
    "Нет аналитики",
    "Никто не понимает, какая реклама приносит деньги",
  ];

  const days = [
    { n: 1, t: "Аудит клиники", d: "Проверяем текущую рекламу, объявления, посадочные страницы и точки потерь." },
    { n: 2, t: "Анализ конкурентов", d: "Показываем, почему пациенты выбирают другие клиники." },
    { n: 3, t: "Контент", d: "Пишем сценарии для видео, статичных креативов и каруселей." },
    { n: 4, t: "Подготовка и запуск рекламы", d: "Создаём рекламные кампании и запускаем рекламу." },
    { n: 5, t: "Аналитика", d: "Настраиваем контроль обращений с рекламы." },
    { n: 6, t: "Рекомендации", d: "Считаем первые результаты." },
    { n: 7, t: "Финальная встреча", d: "Показываем: что нашли, что внедрили, что делать дальше." },
  ];

  const outcomes = [
    "Полную картину маркетинга клиники",
    "План роста выручки",
    "Новые рекламные офферы",
    "Сценарии рекламы",
    "План продвижения",
    "Понимание, куда уходят деньги",
    "Приоритетные задачи на ближайшие 30 дней",
  ];

  const forWhom = [
    "Стоматологии",
    "Косметологии",
    "Реабилитационные центры",
    "Многопрофильные клиники",
    "Медицинские центры",
    "Частные врачи",
  ];

  return (
    <main className="bg-brand text-ink pb-0">
      {/* 1 HERO */}
      <section className="relative overflow-hidden bg-gradient-hero px-6 pt-14 pb-12">
        <div className="pattern-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-[520px]">
          <span className="inline-flex items-center rounded-full border border-accent-aqua/40 bg-brand-soft/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-accent-aqua">
            Маркетинг для медицинских клиник
          </span>

          <h1
            className="mt-6 text-[34px] font-bold leading-[1.05] tracking-tight text-white"
          >
            Тестовая неделя маркетинга для медицинской клиники{" "}
            <span className="text-accent-aqua">всего за 50 000 ₸</span>
          </h1>

          <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
            За 7 дней полностью погружаемся в работу вашей клиники, находим точки потери пациентов, запускаем рекламу и показываем, что именно нужно изменить, чтобы получать больше платных пациентов.
          </p>

          {/* Expert mini card */}
          <div className="mt-7 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
            <img
              src="/yuri.jpg"
              alt="Юрий Валерьевич"
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-full border-2 border-accent-aqua object-cover"
            />
            <div className="min-w-0">
              <p className="text-sm font-bold text-white leading-tight">Юрий Валерьевич</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-wide text-brand-soft">
                Эксперт по маркетингу клиник · 5+ лет
              </p>
            </div>
          </div>

          {/* Offer card */}
          <div className="relative mt-6 overflow-hidden rounded-3xl bg-white p-6 text-brand shadow-card">
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent-aqua/15 blur-2xl" />
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-soft">
              Специальное предложение
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold tracking-tight text-brand">50 000 ₸</span>
              <span className="text-xs font-medium text-brand/60">стоимость участия</span>
            </div>

            <ul className="mt-6 space-y-3 text-[14.5px] font-semibold text-brand-mid">
              <li className="flex items-start gap-3"><Check variant="navy" /><span>Работаем с вашей клиникой 7 дней</span></li>
              <li className="flex items-start gap-3"><Check variant="navy" /><span>Не просто аудит, а реальные внедрения</span></li>
              <li className="flex items-start gap-3"><Check variant="navy" /><span>В конце недели результаты и план что делать дальше</span></li>
            </ul>

            <div className="mt-7">
              <WaCta className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-[15px] font-bold text-white transition-transform active:scale-[0.98]">
                Записаться на тестовую неделю
              </WaCta>
            </div>
          </div>
        </div>
      </section>

      {/* 2 PROBLEMS */}
      <SectionWrap className="bg-surface-2">
        <h2 className="text-[26px] font-bold leading-tight tracking-tight text-white">
          Почему мы предлагаем сначала тестовую неделю?
        </h2>
        <p className="mt-4 text-[15px] italic leading-relaxed text-ink-muted">
          Потому что большинство клиник думают, что проблема в рекламе. На самом деле деньги теряются намного раньше.
        </p>

        <ul className="mt-8 space-y-3">
          {problems.map((t) => (
            <li
              key={t}
              className="flex items-center gap-4 rounded-xl border border-white/5 bg-brand-mid/20 p-4 text-[14.5px] font-medium text-slate-200 transition-colors hover:border-accent-aqua/20"
            >
              <Cross />
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-accent-aqua/20 bg-accent-aqua/5 p-4 text-[14px] leading-relaxed text-white">
          <span className="text-lg leading-none" aria-hidden>⚡</span>
          <span>Поэтому мы сначала разбираем систему, а потом запускаем рекламу.</span>
        </div>
      </SectionWrap>

      {/* 3 CASE */}
      <SectionWrap>
        <div className="relative overflow-hidden rounded-3xl border border-brand-soft/30 bg-gradient-case p-6 shadow-brand">
          <span className="inline-flex rounded-md bg-accent-aqua px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand">
            Кейс · Реабилитация
          </span>
          <h2 className="mt-4 text-[28px] font-bold leading-tight tracking-tight text-white">
            Как центр реабилитации получил
          </h2>
          <div className="mt-2 font-display text-4xl font-bold text-accent-aqua">
            +13 000 000 ₸
          </div>
          <p className="mt-1 text-sm text-white/60">
            дополнительной выручки при том же рекламном бюджете
          </p>

          <div className="mt-8 grid grid-cols-1 gap-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-soft">Запрос</p>
              <p className="mt-1 text-[14px] leading-snug text-slate-200">
                «Нам нужен SMM, чтобы было больше пациентов.» После диагностики стало понятно, что SMM тут не поможет.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-soft">Что сделали</p>
              <ul className="mt-2 space-y-2 text-[14px] text-slate-200">
                {[
                  "Упаковали услуги",
                  "Собрали пакеты лечения",
                  "Настроили аналитику",
                  "Подготовили сценарии для видео",
                  "Запустили рекламу",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2"><Check /><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 rounded-2xl bg-brand-deep/60 p-1">
            {[
              { label: "Заявок", value: "415" },
              { label: "Диагностик", value: "107" },
              { label: "Новых пациентов", value: "29" },
              { label: "Средний чек", value: "350k ₸" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/5 bg-brand p-4 text-center">
                <p className="text-[10px] uppercase tracking-wider text-white/40">{item.label}</p>
                <p className="mt-1 font-display text-xl font-bold tracking-tight text-white tabular-nums">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrap>

      {/* 4 MANIFESTO */}
      <section className="bg-accent-aqua px-6 py-20 text-brand">
        <div className="mx-auto max-w-[520px] space-y-10 text-center">
          {[
            { n: "01. Не сразу продаём договор", d: "Не предлагаем сразу договор на год." },
            { n: "02. Сначала — доказательства", d: "Показываем, как работает наша система именно на вашей клинике." },
            { n: "03. Решение за вами", d: "После недели вы сами принимаете решение продолжать работу или нет." },
          ].map((m) => (
            <div key={m.n} className="space-y-3">
              <h3 className="font-display text-[26px] font-bold leading-tight tracking-tight">{m.n}</h3>
              <p className="px-2 text-sm font-medium opacity-80">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 EXPERT */}
      <section className="bg-white px-6 py-16 text-brand">
        <div className="mx-auto max-w-[520px]">
          <div className="mb-8 aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <img
              src="/yuri.jpg"
              alt="Юрий Валерьевич — эксперт по маркетингу медицинских клиник"
              width={768}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-soft">
            Кто проводит тестовую неделю
          </p>
          <h2 className="mt-2 font-display text-[30px] font-bold tracking-tight text-brand">
            Юрий Валерьевич
          </h2>
          <p className="mt-1 text-sm font-semibold text-brand-mid">
            Эксперт по маркетингу медицинских клиник
          </p>

          <ul className="mt-6 space-y-3 border-t border-slate-200 pt-6 text-[14.5px] text-brand-mid">
            {[
              "Более 5 лет в медицинском маркетинге",
              "Более 50 клиник работают по нашей системе",
              "Коммерческий директор медицинского центра",
              "Отвечаю за увеличение количества платных пациентов",
              "Работаю только с медицинскими клиниками и частными врачами",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check variant="navy" /><span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 DAYS TIMELINE */}
      <SectionWrap>
        <h2 className="text-[26px] font-bold tracking-tight text-white">
          Что входит в тестовую неделю
        </h2>
        <p className="mt-2 text-[14px] text-ink-muted">7 дней глубокой работы с вашей клиникой</p>

        <ol className="relative mt-10 space-y-9">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
          {days.map((d, i) => (
            <li key={d.n} className="relative pl-9">
              <div
                className={
                  "absolute left-0 top-0.5 h-[15px] w-[15px] rounded-full " +
                  (i === 0
                    ? "bg-accent-aqua shadow-[0_0_15px_rgba(92,189,185,0.6)]"
                    : "border-2 border-brand bg-brand-mid")
                }
                aria-hidden="true"
              />
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-aqua">
                День {d.n}
              </p>
              <h3 className="mt-1 text-[16px] font-bold leading-tight text-white">{d.t}</h3>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink-muted">{d.d}</p>
            </li>
          ))}
        </ol>
      </SectionWrap>

      {/* 7 DELIVERABLES */}
      <SectionWrap className="bg-surface-2">
        <h2 className="text-[26px] font-bold tracking-tight text-white">
          Что вы получите через 7 дней
        </h2>
        <div className="mt-8 space-y-4">
          {outcomes.map((t, i) => (
            <div key={t} className="flex items-start gap-4">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent-aqua/10 font-display text-xs font-bold text-accent-aqua tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="pt-0.5 text-[14.5px] text-slate-200">{t}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 8 FOR WHOM */}
      <SectionWrap>
        <h2 className="text-[26px] font-bold tracking-tight text-white">Для кого подходит</h2>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {forWhom.map((t) => (
            <div
              key={t}
              className="aspect-[5/3] rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-accent-aqua/20 hover:bg-white/10"
            >
              <div className="mb-2 h-1 w-8 rounded-full bg-accent-aqua" />
              <p className="text-[13.5px] font-bold leading-tight text-white">{t}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* 9 PRICE */}
      <SectionWrap>
        <div className="relative overflow-hidden rounded-3xl bg-white p-8 text-center text-brand shadow-card">
          <div className="pointer-events-none absolute -top-24 -right-24 h-52 w-52 rounded-full bg-accent-aqua/15 blur-3xl" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-soft">
            Стоимость
          </p>
          <div className="mt-3 font-display text-5xl font-bold tracking-tight text-brand">
            50 000 ₸
          </div>
          <p className="mt-3 text-sm text-brand/60">Тестовая неделя маркетинга клиники</p>

          <p className="mt-6 text-[14px] leading-relaxed text-brand-mid">
            В течение недели полностью погружаемся в работу вашей клиники и готовим систему роста.
          </p>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-accent-aqua/30 bg-accent-aqua/10 p-4 text-left text-[13.5px] leading-relaxed text-brand">
            <span className="text-lg leading-none" aria-hidden>💡</span>
            <p>
              Если после тестовой недели вы решите продолжить сотрудничество — стоимость недели засчитывается в оплату основного проекта.
            </p>
          </div>

          <div className="mt-6">
            <WaCta className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-6 py-4 text-[15px] font-bold text-white transition-transform active:scale-[0.98]">
              Записаться на тестовую неделю
            </WaCta>
          </div>
        </div>
      </SectionWrap>

      {/* 10 FAQ */}
      <SectionWrap className="bg-surface-2">
        <h2 className="text-[26px] font-bold tracking-tight text-white">Частые вопросы</h2>
        <Accordion type="single" collapsible className="mt-6 space-y-0">
          {[
            {
              q: "За 7 дней будут пациенты?",
              a: "Главная цель недели — провести глубокую подготовку, внедрить ключевые изменения и дать клинике готовую систему для роста. В зависимости от этапа работ и готовности клиники первые обращения могут появиться уже в процессе.",
            },
            {
              q: "Это аудит?",
              a: "Нет. Мы не ограничиваемся рекомендациями — вместе с вами начинаем внедрение.",
            },
            {
              q: "Вы работаете по всему Казахстану?",
              a: "Да. Работаем онлайн с клиниками и частными врачами по всему Казахстану.",
            },
          ].map((item, i) => (
            <AccordionItem
              key={i}
              value={`q${i}`}
              className="border-b border-white/10"
            >
              <AccordionTrigger className="py-5 text-left text-[15px] font-bold text-white hover:no-underline hover:text-accent-aqua transition-colors [&[data-state=open]]:text-accent-aqua">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[14px] leading-relaxed text-ink-muted">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionWrap>

      {/* 11 FINAL CTA */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16">
        <div className="pattern-dots absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-[520px] text-center">
          <h2 className="font-display text-[30px] font-bold leading-[1.1] tracking-tight text-white">
            Готовы проверить, сможет ли ваша клиника получать больше платных пациентов?
          </h2>
          <p className="mt-5 text-[14.5px] leading-relaxed text-ink-muted">
            За 7 дней покажем, где клиника теряет деньги, подготовим маркетинговую систему и составим план дальнейшего роста.
          </p>
          <p className="mt-5 text-[13px] text-ink-muted">
            Оставьте заявку — свяжемся с вами и согласуем старт тестовой недели.
          </p>
          <div className="mt-8">
            <WaCta className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-accent-aqua px-6 py-5 text-[15px] font-bold text-brand shadow-aqua transition-transform active:scale-[0.98]">
              Забронировать тестовую неделю
            </WaCta>
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-left text-[13px] leading-relaxed text-ink-muted">
            <span className="shrink-0 text-lg leading-none" aria-hidden>🛡</span>
            <span>
              Если по итогам недели вы не получите конкретный план внедрения, новые рекламные материалы и список точек роста для вашей клиники — вернём деньги.
            </span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 px-6 py-6 text-center text-[11px] uppercase tracking-[0.2em] text-ink-muted">
        Юрий Валерьевич · Маркетинг для медицинских клиник
      </footer>
    </main>
  );
}
