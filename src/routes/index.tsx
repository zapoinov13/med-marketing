import { createFileRoute } from "@tanstack/react-router";
import { LeadCta } from "@/components/lead-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Запустим маркетинг вашего бизнеса за 7 дней — 50 000 ₸" },
      {
        name: "description",
        content:
          "За 7 дней подготовим оффер и креативы, запустим таргет и аналитику и получим первые обращения. Стоимость работы — 50 000 ₸.",
      },
      { property: "og:title", content: "Запустим маркетинг вашего бизнеса за 7 дней" },
      {
        property: "og:description",
        content:
          "Оффер, креативы, таргет, аналитика и первые обращения за 7 дней. 50 000 ₸ за работу.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: "/yuri.jpg", fetchpriority: "high" } as unknown as { rel: string; href: string },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Тестовая неделя маркетинга — запуск за 7 дней",
          provider: { "@type": "Person", name: "Юрий Валерьевич" },
          areaServed: "KZ",
          description:
            "За 7 дней: разбор бизнеса, оффер, рекламные креативы, запуск таргета, аналитика и первые обращения.",
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

function Check() {
  return (
    <div className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand shadow-sm">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3 stroke-[3]" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-12 ${className}`}>
      <div className="mx-auto max-w-[520px]">{children}</div>
    </section>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-1.5 text-brand/40" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-[3]" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M6 13l6 6 6-6" />
      </svg>
    </div>
  );
}

function LandingPage() {
  const days = [
    { n: 1, t: "Разбираем бизнес", d: "Понимаем продукт, целевую аудиторию, преимущества и определяем, что будем продвигать." },
    { n: 2, t: "Создаём оффер", d: "Формируем предложение, которое можно использовать в рекламе." },
    { n: 3, t: "Создаём креативы", d: "Подготавливаем рекламные концепции, тексты, сценарии и визуалы." },
    { n: 4, t: "Запускаем таргет", d: "Настраиваем рекламные кампании и запускаем первые объявления." },
    { n: 5, t: "Подключаем аналитику", d: "Настраиваем отслеживание обращений и основных показателей." },
    { n: 6, t: "Получаем первые данные", d: "Смотрим, какие объявления и предложения получают лучший отклик." },
    { n: 7, t: "Показываем результат", d: "Фиксируем первые обращения, результаты тестов и определяем, что масштабировать дальше." },
  ];

  const deliverables = [
    { n: "01", t: "Новый рекламный оффер", d: "Поймём, что именно предлагать клиенту и почему ему стоит обратиться." },
    { n: "02", t: "Готовые рекламные креативы", d: "Подготовим рекламные материалы для тестирования." },
    { n: "03", t: "Запущенный таргет", d: "Настроим рекламные кампании и запустим трафик." },
    { n: "04", t: "Первые обращения", d: "Начнём получать первые заявки и обращения из рекламы." },
    { n: "05", t: "Аналитика", d: "Будем видеть, сколько стоит обращение и какие рекламные связки работают." },
    { n: "06", t: "План масштабирования", d: "Поймём, что оставить, что отключить и куда двигаться дальше." },
  ];

  const niches = [
    { t: "Медицинским клиникам", d: "Новые пациенты и запись на услуги." },
    { t: "Автобизнесу", d: "Сервис, ремонт, продажи и дополнительные услуги." },
    { t: "Сфере услуг", d: "Салоны, студии, ремонт, сервисы и локальный бизнес." },
    { t: "Образованию", d: "Курсы, школы, эксперты и образовательные продукты." },
    { t: "Недвижимости", d: "Заявки от потенциальных покупателей и арендаторов." },
    { t: "B2B", d: "Поиск новых клиентов и обращений от компаний." },
  ];

  const chain = ["Оффер", "Креатив", "Таргет", "Заявка", "Обработка", "Продажа"];

  const included = [
    "Разработка рекламного оффера",
    "Подготовка рекламных креативов",
    "Настройка таргета",
    "Запуск рекламных кампаний",
    "Аналитика обращений",
    "Оптимизация рекламы",
    "Анализ первых результатов",
    "План дальнейшего продвижения",
  ];

  return (
    <main className="pb-24">
      {/* 1 HERO */}
      <Section className="relative overflow-hidden pt-12">
        <div className="bg-gradient-hero absolute inset-0 -z-10" aria-hidden="true" />
        <span className="inline-flex items-center rounded-full bg-brand-soft px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand border border-brand/10">
          Тестовая неделя маркетинга
        </span>
        <h1 className="mt-5 text-[30px] font-extrabold uppercase leading-[1.12] text-ink sm:text-[34px] tracking-tight">
          Запустим маркетинг вашего бизнеса за 7 дней
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
          За неделю подготовим оффер и рекламные креативы, запустим таргет и начнём получать первые обращения.
        </p>

        <div className="mt-6 rounded-3xl border border-brand/15 bg-card p-6 shadow-card ring-1 ring-brand/5 transition-all duration-300 hover:shadow-lg">
          <div className="text-[52px] font-black leading-none text-brand tracking-tight">50 000 ₸</div>
          <div className="mt-3 text-[13px] font-semibold text-ink-muted leading-relaxed">
            7 дней работы · Стратегия · Креативы · Таргет · Аналитика
          </div>
          <div className="mt-6">
            <LeadCta source="hero">Хочу запустить маркетинг</LeadCta>
          </div>
          <p className="mt-3 text-center text-[12px] text-ink-muted">
            Рекламный бюджет оплачивается отдельно.
          </p>
        </div>

        <div className="mt-6 flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/90 p-4 shadow-card backdrop-blur-md">
          <img
            src="/yuri.jpg"
            alt="Юрий Валерьевич"
            width={48}
            height={48}
            loading="eager"
            decoding="async"
            {...({ fetchpriority: "high" } as { fetchpriority: "high" })}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-brand/15 shadow-sm"
          />
          <div>
            <div className="text-sm font-extrabold text-ink leading-tight">Юрий Валерьевич</div>
            <div className="text-xs text-ink-muted mt-0.5">Эксперт по маркетингу и рекламе · 5+ лет</div>
          </div>
        </div>
      </Section>

      {/* 2 DAYS */}
      <Section className="bg-surface-2">
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Что именно мы сделаем</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
          Не будем месяцами «готовить стратегию». Запустим за 7 дней.
        </p>
        <ol className="mt-8 space-y-6 border-l-2 border-brand/20 pl-6 ml-2">
          {days.map((d) => (
            <li key={d.n} className="relative pl-1 group">
              <span className="absolute -left-[35px] top-0.5 grid h-6 w-6 place-items-center rounded-full bg-brand text-[11px] font-extrabold text-brand-foreground shadow-brand ring-4 ring-surface-2 transition-transform duration-300 group-hover:scale-110">
                {d.n}
              </span>
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand leading-none">
                День {d.n}
              </div>
              <div className="mt-1 text-[17px] font-bold text-ink leading-tight group-hover:text-brand transition-colors duration-200">
                {d.t}
              </div>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{d.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 3 DELIVERABLES */}
      <Section>
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Что вы получите за 50 000 ₸</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
          Не просто «настроенный рекламный кабинет». За 7 дней у вас будет:
        </p>
        <div className="mt-6 space-y-3.5">
          {deliverables.map((d) => (
            <div
              key={d.n}
              className="rounded-2xl border border-border/80 bg-card p-5 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <span className="text-[20px] font-black text-brand/30 leading-none tracking-tight shrink-0">
                  {d.n}
                </span>
                <div>
                  <div className="text-[16px] font-extrabold text-ink leading-tight">{d.t}</div>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted">{d.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-7">
          <LeadCta source="deliverables">Запустить маркетинг</LeadCta>
        </div>
      </Section>

      {/* 4 WHY TEST */}
      <Section className="relative overflow-hidden bg-brand text-brand-foreground">
        <div className="pattern-dots absolute inset-0 -z-10 text-brand-foreground opacity-30" aria-hidden="true" />
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight">
          Зачем платить за месяц, если можно сначала протестировать неделю?
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-brand-foreground/90">
          Не нужно сразу отдавать маркетинг на несколько месяцев. Сначала запускаем → получаем первые данные → смотрим результат → принимаем решение.
        </p>

        <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
          <div className="text-center">
            <div className="text-4xl font-black leading-none text-gold tracking-tight">7</div>
            <div className="mt-1 text-[12px] font-semibold uppercase tracking-wider">дней</div>
          </div>
          <div className="text-[13px] font-medium uppercase tracking-wider text-brand-foreground/70">вместо</div>
          <div className="text-[15px] font-bold leading-snug">месяцев ожидания</div>
        </div>

        <p className="mt-6 text-[15px] font-semibold leading-relaxed">
          Вы не покупаете обещания. Вы покупаете неделю реальной работы над маркетингом своего бизнеса.
        </p>
      </Section>

      {/* 5 CASE */}
      <Section>
        <div className="text-xs font-semibold uppercase tracking-wider text-brand">Реальный кейс</div>
        <h2 className="mt-2 text-2xl font-extrabold text-ink tracking-tight">
          Мы уже умеем превращать маркетинг в реальные обращения
        </h2>

        <div className="mt-6 rounded-2xl bg-brand p-6 text-brand-foreground shadow-brand">
          <div className="text-4xl font-black tracking-tight">+13 000 000 ₸</div>
          <div className="mt-2 text-[14px] font-semibold text-gold">дополнительной выручки</div>
          <div className="text-[13px] text-brand-foreground/80">при том же рекламном бюджете</div>
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-3">
          {[
            { label: "Заявок", value: "415" },
            { label: "Оплаченных диагностик", value: "107" },
            { label: "Новых клиентов", value: "29" },
            { label: "Средний чек", value: "350 000 ₸" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border/70 bg-card p-3.5 shadow-sm">
              <dt className="text-[10px] font-bold uppercase tracking-wider text-ink-muted">{item.label}</dt>
              <dd className="mt-0.5 text-2xl font-black tracking-tight text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 text-[14px] leading-relaxed text-ink-muted">
          Пересобрали предложение, запустили новые рекламные связки, настроили аналитику и улучшили путь клиента.
        </p>

        <div className="mt-6">
          <LeadCta source="case">Запустить маркетинг</LeadCta>
        </div>
      </Section>

      {/* 6 FOR WHOM */}
      <Section className="bg-surface-2">
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">
          Если вам нужны новые клиенты — можем протестировать
        </h2>
        <div className="mt-6 space-y-3">
          {niches.map((n) => (
            <div
              key={n.t}
              className="rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:border-brand/25 hover:shadow"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-brand text-lg font-extrabold leading-none shrink-0">•</span>
                <div>
                  <div className="text-[15px] font-bold text-ink leading-tight">{n.t}</div>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ink-muted">{n.d}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7 APPROACH */}
      <Section>
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Не просто запускаем рекламу</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
          Мы связываем всё в одну систему:
        </p>
        <div className="mt-6">
          {chain.map((step, i) => (
            <div key={step}>
              <div className="rounded-xl border border-border bg-card px-4 py-3 text-center text-[15px] font-bold text-ink shadow-sm">
                {step}
              </div>
              {i < chain.length - 1 ? <Arrow /> : null}
            </div>
          ))}
        </div>
        <p className="mt-6 text-[15px] leading-relaxed text-ink">
          Можно привести 100 заявок и не получить ни одной продажи.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
          Поэтому во время тестовой недели смотрим не только на рекламу, но и на то, что происходит с клиентом после заявки.
        </p>
      </Section>

      {/* 8 EXPERT */}
      <Section className="bg-surface-2">
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Маркетингом занимаюсь лично я</h2>
        <div className="mt-5 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          <div className="relative overflow-hidden aspect-square w-full group">
            <img
              src="/yuri.jpg"
              alt="Юрий Валерьевич — эксперт по маркетингу и рекламе"
              width={768}
              height={768}
              loading="lazy"
              className="w-full h-full object-cover object-[center_70%] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <div className="text-xl font-extrabold text-ink">Юрий Валерьевич</div>
            <p className="mt-1 text-[14px] font-medium text-brand">Эксперт по маркетингу и рекламе</p>
            <ul className="mt-5 space-y-3 text-[15px] text-ink border-t border-border/60 pt-5">
              {["5+ лет в маркетинге", "50+ компаний", "Опыт коммерческого директора"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check /> <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] leading-relaxed text-ink-muted">
              Я лично участвую в запуске проекта: от разработки предложения и рекламных креативов до настройки рекламы, аналитики и анализа первых результатов.
            </p>
          </div>
        </div>
      </Section>

      {/* 9 PRICE */}
      <Section>
        <div className="relative rounded-3xl bg-card p-[1px] shadow-card group transition-all duration-300 hover:shadow-lg">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/20 via-gold/15 to-brand/5 transition-all duration-300 group-hover:from-brand/35 group-hover:via-gold/25" aria-hidden="true" />
          <div className="relative rounded-3xl bg-card p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-brand">Стоимость</div>
            <h2 className="mt-1.5 text-2xl font-extrabold uppercase text-ink tracking-tight">
              Тестовая неделя маркетинга
            </h2>
            <div className="mt-4 text-5xl font-black text-brand tracking-tight">50 000 ₸</div>

            <div className="mt-5 text-[12px] font-bold uppercase tracking-wider text-ink-muted">Включено</div>
            <ul className="mt-3 space-y-2.5">
              {included.map((inc) => (
                <li key={inc} className="flex items-start gap-2.5 text-[14px] text-ink">
                  <Check />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-[13px] text-ink-muted">Рекламный бюджет оплачивается отдельно.</p>

            <div className="mt-6">
              <LeadCta source="price_block">Запустить маркетинг за 50 000 ₸</LeadCta>
            </div>
          </div>
        </div>
      </Section>

      {/* 10 HOW TO START */}
      <Section className="bg-surface-2">
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Всего 3 шага</h2>
        <div className="mt-6">
          {[
            { n: "01", t: "Оставляете заявку" },
            { n: "02", t: "Обсуждаем ваш бизнес" },
            { n: "03", t: "Через 7 дней у вас уже запущен маркетинг" },
          ].map((s, i, arr) => (
            <div key={s.n}>
              <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm">
                <span className="text-[20px] font-black text-brand/30 leading-none tracking-tight">{s.n}</span>
                <span className="text-[15px] font-bold text-ink leading-snug">{s.t}</span>
              </div>
              {i < arr.length - 1 ? <Arrow /> : null}
            </div>
          ))}
        </div>
        <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">
          Не презентация. Не теория. Не бесконечный аудит.
        </p>
        <p className="mt-1 text-[15px] font-semibold text-ink">Заходим в работу и запускаем.</p>
      </Section>

      {/* 11 FAQ */}
      <Section>
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Частые вопросы</h2>
        <Accordion type="single" collapsible className="mt-5 space-y-3">
          {[
            {
              q: "Что входит в 50 000 ₸?",
              a: "Вся работа по подготовке и запуску маркетинга на тестовой неделе: оффер, креативы, настройка рекламы, аналитика и оптимизация.",
            },
            {
              q: "Рекламный бюджет входит?",
              a: "Нет. 50 000 ₸ — стоимость работы. Рекламный бюджет оплачивается отдельно.",
            },
            {
              q: "Вы гарантируете клиентов?",
              a: "Мы не обещаем конкретное количество клиентов. Наша задача — за 7 дней запустить рекламу, получить первые данные и обращения и определить рабочие связки.",
            },
            {
              q: "Что будет после недели?",
              a: "Покажем результаты и предложим план дальнейшего масштабирования. Вы сами решаете, продолжать ли работу.",
            },
            {
              q: "Можно работать удалённо?",
              a: "Да, работаем с бизнесом по всему Казахстану.",
            },
          ].map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`q${i}`}
              className="border border-border/80 bg-card rounded-xl px-4 shadow-sm overflow-hidden transition-all hover:border-brand/25"
            >
              <AccordionTrigger className="text-left text-[15px] font-bold text-ink py-4 hover:no-underline hover:text-brand transition-colors duration-250">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[14.5px] leading-relaxed text-ink-muted pb-4">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* 12 FINAL */}
      <Section>
        <div className="relative overflow-hidden rounded-2xl border border-brand/15 bg-brand-soft p-6 shadow-card">
          <div className="pattern-dots absolute inset-0 -z-10 text-brand/5" aria-hidden="true" />
          <h2 className="text-2xl font-extrabold leading-tight text-ink tracking-tight">
            Готовы запустить маркетинг?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            Дайте нам 7 дней — и посмотрим, что можно получить из вашей рекламы.
          </p>
          <div className="mt-4 text-[16px] font-extrabold text-brand">Тестовая неделя — 50 000 ₸</div>
          <div className="mt-6">
            <LeadCta source="final_cta">Запустить маркетинг</LeadCta>
          </div>
          <p className="mt-3 text-center text-[12px] text-ink-muted">
            Количество мест на тестовый запуск ограничено.
          </p>
        </div>
      </Section>

      <footer className="px-5 pb-6 pt-4 text-center text-[12px] text-ink-muted border-t border-border/40 mt-8 max-w-[520px] mx-auto space-y-2">
        <div>Юрий Валерьевич · Маркетинг и реклама для бизнеса</div>
        <div className="flex items-center justify-center gap-3">
          <a href="https://wa.me/77472842595" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">WhatsApp</a>
          <span>·</span>
          <a href="tel:+77472842595" className="text-brand hover:underline">+7 747 284 25 95</a>
        </div>
      </footer>
    </main>
  );
}
