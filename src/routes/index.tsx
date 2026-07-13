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

function Check() {
  return (
    <div className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand shadow-sm">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3 stroke-[3]" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function Cross() {
  return (
    <div className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive shadow-sm">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3 stroke-[3]" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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

function LandingPage() {
  const days = [
    { n: 1, t: "Аудит клиники", d: "Проверяем текущую рекламу, объявления, посадочные страницы и точки потерь" },
    { n: 2, t: "Анализ конкурентов", d: "Показываем, почему пациенты выбирают другие клиники.\n" },
    { n: 3, t: "Контент", d: "Пишем сценарии для видео, статичных креативов и каруселей." },
    { n: 4, t: "Подготовка и запуск рекламы", d: "Создаём рекламные кампании\u00a0\nи запускаем рекламу" },
    { n: 5, t: "Аналитика", d: "Настраиваем контроль обращений с рекламы\u00a0" },
    { n: 6, t: "Рекомендации", d: "Считаем первые результаты." },
    { n: 7, t: "Финальная встреча", d: "Показываем: что нашли, что внедрили, что делать дальше." },
  ];

  return (
    <main className="pb-24">
      {/* 1 HERO */}
      <Section className="relative overflow-hidden pt-12">
        <div className="bg-gradient-hero absolute inset-0 -z-10" aria-hidden="true" />
        <span className="inline-flex items-center rounded-full bg-brand-soft px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand border border-brand/10">
          Маркетинг для медицинских клиник
        </span>
        <h1 className="mt-5 text-[28px] font-extrabold leading-[1.15] text-ink sm:text-3xl tracking-tight">
          Тестовая неделя маркетинга для медицинской клиники
          <span className="text-brand font-black block mt-2">всего за&nbsp; 50 000 ₸</span>
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
          За 7 дней полностью погружаемся в работу вашей клиники, находим точки потери пациентов, запускаем рекламу и показываем, что именно нужно изменить, чтобы получать больше платных пациентов.
        </p>

        <div className="mt-6 flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/90 p-4 shadow-card backdrop-blur-md transition-all duration-300 hover:shadow-lg">
          <img
            src="/yuri.jpg"
            alt="Юрий Валерьевич"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-brand/15 shadow-sm"
          />
          <div>
            <div className="text-sm font-extrabold text-ink leading-tight">Юрий Валерьевич</div>
            <div className="text-xs text-ink-muted mt-0.5">Эксперт по маркетингу клиник · 5+ лет</div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-brand/15 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-lg ring-1 ring-brand/5">
          <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">
            
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-ink tracking-tight"></span>
            <span className="text-sm text-ink-muted"></span>
          </div>
          <ul className="mt-5 space-y-3.5 text-[15px] text-ink">
            <li className="flex items-start gap-3"><Check /> <span>Работаем с вашей клиникой 7 дней</span></li>
            <li className="flex items-start gap-3"><Check /> <span>Не просто аудит, а реальные внедрения</span></li>
            <li className="flex items-start gap-3"><Check /> <span>В конце недели результаты и план что делать дальше</span></li>
          </ul>
          <div className="mt-6">
            <WaCta>Записаться на тестовую неделю</WaCta>
          </div>
        </div>
      </Section>

      {/* 2 PROBLEM */}
      <Section className="bg-surface-2">
        <h2 className="text-2xl font-extrabold leading-tight text-ink tracking-tight">
          Почему мы предлагаем сначала тестовую неделю?
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
          Потому что большинство клиник думают, что проблема в рекламе. На самом деле деньги теряются намного раньше.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Неправильное предложение",
            "Нет пакетов лечения",
            "Слабые сценарии",
            "Администратор теряет пациентов",
            "Нет аналитики",
            "Никто не понимает, какая реклама приносит деньги",
          ].map((t) => (
            <li key={t} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 text-[15px] font-medium text-ink shadow-sm transition-all duration-200 hover:translate-x-1 hover:border-brand/20 hover:shadow">
              <Cross /> <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-xl border border-destructive/10 bg-destructive/5 p-4 text-[15px] font-semibold text-ink leading-relaxed flex items-start gap-3.5 shadow-sm">
          <span className="text-lg shrink-0" aria-hidden>⚠️</span>
          <span>Поэтому мы сначала разбираем систему, а потом запускаем рекламу.</span>
        </div>
      </Section>

      {/* 3 CASE */}
      <Section>
        <div className="text-xs font-semibold uppercase tracking-wider text-brand">Реальный кейс</div>
        <h2 className="mt-2 text-2xl font-extrabold text-ink tracking-tight">Как центр реабилитации получил +13 000 000 ₸ при том же рекламном бюджете</h2>

        <div className="mt-5 rounded-xl border-l-4 border-l-gold border border-border bg-surface-2/60 p-4 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Запрос</div>
          <p className="mt-1 text-[15px] font-medium text-ink">«Нам нужен SMM, чтобы было больше пациентов.»</p>
          <p className="mt-3 text-[14px] text-ink-muted leading-relaxed">
            После диагностики стало понятно, что SMM тут не поможет.
          </p>
        </div>

        <div className="mt-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Что сделали после разбора
          </div>
          <ul className="mt-3 space-y-3 text-[15px] text-ink">
            {[
              "Упаковали услуги",
              "Собрали пакеты лечения",
              "Настроили аналитику",
              "Подготовили сценарии для видео",
              "Запустили рекламу",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1"><Check /> <span>{t}</span></li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-2xl border border-border/80 bg-card p-5 shadow-card transition-all duration-300 hover:shadow-lg">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand">Результат</div>
          <dl className="mt-4 grid grid-cols-2 gap-3">
            {[
              { label: "Заявок", value: "415" },
              { label: "Оплаченных диагностик", value: "107" },
              { label: "Новых пациентов", value: "29" },
              { label: "Средний чек", value: "350 000 ₸" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-border/60 bg-surface-2/30 p-3 shadow-sm hover:border-brand/10 hover:bg-surface-2/50 transition-all duration-200">
                <dt className="text-[10px] font-bold text-ink-muted uppercase tracking-wider">{item.label}</dt>
                <dd className="mt-0.5 text-2xl font-black text-ink tracking-tight">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 rounded-xl bg-brand p-4 text-brand-foreground shadow-brand transition-all duration-300 hover:scale-[1.01]">
            <div className="text-xs font-bold uppercase tracking-wider text-gold">
              Дополнительная выручка
            </div>
            <div className="mt-1 text-3xl font-black tracking-tight text-brand-foreground">+13 000 000 ₸</div>
          </div>
        </div>
      </Section>

      {/* 4 MANIFESTO */}
      <Section className="relative overflow-hidden bg-brand text-brand-foreground">
        <div className="pattern-dots absolute inset-0 -z-10 text-brand-foreground opacity-30" aria-hidden="true" />
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight">
          Именно поэтому мы создали тестовую неделю
        </h2>
        <div className="mt-5 space-y-3.5 text-[15px] leading-relaxed">
          {[
            "Не предлагаем сразу договор на год",
            "Сначала показываем, как работает наша система именно на вашей клинике.",
            "После недели вы сами принимаете решение продолжать работу или нет.",
          ].map((text, idx) => (
            <div key={idx} className="flex gap-3 items-start bg-white/10 p-3.5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-200 hover:bg-white/15">
              <span className="text-gold text-lg shrink-0 leading-none">✦</span>
              <p className="text-brand-foreground/95">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5 EXPERT */}
      <Section className="bg-surface-2">
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Кто проводит тестовую неделю</h2>
        <div className="mt-5 overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-lg">
          <div className="relative overflow-hidden aspect-square w-full group">
            <img
              src="/yuri.jpg"
              alt="Юрий Валерьевич — эксперт по маркетингу медицинских клиник"
              width={768}
              height={768}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <div className="text-xl font-extrabold text-ink">Юрий Валерьевич</div>
            <p className="mt-1 text-[14px] font-medium text-brand">
              Эксперт по маркетингу медицинских клиник
            </p>
            <ul className="mt-5 space-y-3 text-[15px] text-ink border-t border-border/60 pt-5">
              {[
                "Более 5 лет в медицинском маркетинге",
                "Более 50 клиник работают по нашей системе",
                "Коммерческий директор медицинского центра",
                "Отвечаю за увеличение количества платных пациентов",
                "Работаю только с медицинскими клиниками и частными врачами",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 transition-all duration-200 hover:translate-x-0.5"><Check /> <span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 6 DAYS */}
      <Section>
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Что входит в тестовую неделю</h2>
        <ol className="mt-8 space-y-6 border-l-2 border-brand/20 pl-6 ml-2">
          {days.map((d) => (
            <li key={d.n} className="relative pl-1 group">
              <span className="absolute -left-[35px] top-0.5 grid h-6 w-6 place-items-center rounded-full bg-brand text-[11px] font-extrabold text-brand-foreground shadow-brand ring-4 ring-background transition-transform duration-300 group-hover:scale-110">
                {d.n}
              </span>
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand leading-none">
                День {d.n}
              </div>
              <div className="mt-1 text-[17px] font-bold text-ink leading-tight group-hover:text-brand transition-colors duration-200">{d.t}</div>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink-muted whitespace-pre-line">{d.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 7 OUTCOMES */}
      <Section className="bg-surface-2">
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Что вы получите через 7 дней</h2>
        <ul className="mt-6 space-y-3">
          {[
            "Полную картину маркетинга клиники",
            "План роста выручки",
            "Новые рекламные офферы",
            "Сценарии рекламы",
            "План продвижения",
            "Понимание, куда уходят деньги",
            "Приоритетные задачи на ближайшие 30 дней",
          ].map((t) => (
            <li key={t} className="flex items-center gap-3.5 rounded-xl border border-border bg-card p-3.5 text-[15px] font-medium text-ink shadow-sm transition-all duration-200 hover:translate-x-1 hover:border-brand/20 hover:shadow">
              <Check /> <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 8 FOR WHOM */}
      <Section className="bg-surface-2">
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Для кого подходит</h2>
        <ul className="mt-5 grid grid-cols-2 gap-3">
          {[
            "Стоматологии",
            "Косметологии",
            "Реабилитационные центры",
            "Многопрофильные клиники",
            "Медицинские центры",
            "Частные врачи",
          ].map((t) => (
            <li key={t} className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3.5 text-[14px] font-bold text-ink hover:border-brand/20 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200">
              <span className="text-brand font-extrabold text-lg leading-none shrink-0">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 9 PRICE */}
      <Section>
        <div className="relative rounded-3xl bg-card p-[1px] shadow-card group transition-all duration-300 hover:shadow-lg">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/20 via-gold/15 to-brand/5 group-hover:from-brand/35 group-hover:via-gold/25 group-hover:to-brand/10 transition-all duration-300" aria-hidden="true" />
          <div className="relative rounded-3xl bg-card p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-brand">Стоимость</div>
            <h2 className="mt-1.5 text-2xl font-extrabold text-ink tracking-tight">Тестовая неделя маркетинга</h2>
            <div className="mt-4 text-5xl font-black text-brand tracking-tight">50 000 ₸</div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              В течение недели полностью погружаемся в работу вашей клиники и готовим систему роста.
            </p>
            <div className="mt-4 rounded-xl border border-brand/20 bg-brand-soft/60 p-4 text-[14px] leading-relaxed text-ink flex gap-3">
              <span className="text-brand text-lg shrink-0" aria-hidden>💡</span>
              <p>Если после тестовой недели вы решите продолжить сотрудничество стоимость недели засчитывается в оплату основного проекта.</p>
            </div>
            <div className="mt-6">
              <WaCta>Записаться на тестовую неделю</WaCta>
            </div>
          </div>
        </div>
      </Section>

      {/* 10 FAQ */}
      <Section className="bg-surface-2">
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Частые вопросы</h2>
        <Accordion type="single" collapsible className="mt-5 space-y-3">
          <AccordionItem value="q1" className="border border-border/80 bg-card rounded-xl px-4 shadow-sm overflow-hidden transition-all hover:border-brand/25">
            <AccordionTrigger className="text-left text-[15px] font-bold text-ink py-4 hover:no-underline hover:text-brand transition-colors duration-250">
              За 7 дней будут пациенты?
            </AccordionTrigger>
            <AccordionContent className="text-[14.5px] leading-relaxed text-ink-muted pb-4">
              Главная цель недели — провести глубокую подготовку, внедрить ключевые изменения и дать клинике готовую систему для роста. В зависимости от этапа работ и готовности клиники первые обращения могут появиться уже в процессе.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2" className="border border-border/80 bg-card rounded-xl px-4 shadow-sm overflow-hidden transition-all hover:border-brand/25">
            <AccordionTrigger className="text-left text-[15px] font-bold text-ink py-4 hover:no-underline hover:text-brand transition-colors duration-250">
              Это аудит?
            </AccordionTrigger>
            <AccordionContent className="text-[14.5px] leading-relaxed text-ink-muted pb-4">
              Нет. Мы не ограничиваемся рекомендациями — вместе с вами начинаем внедрение.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3" className="border border-border/80 bg-card rounded-xl px-4 shadow-sm overflow-hidden transition-all hover:border-brand/25">
            <AccordionTrigger className="text-left text-[15px] font-bold text-ink py-4 hover:no-underline hover:text-brand transition-colors duration-250">
              Вы работаете по всему Казахстану?
            </AccordionTrigger>
            <AccordionContent className="text-[14.5px] leading-relaxed text-ink-muted pb-4">
              Да. Работаем онлайн с клиниками и частными врачами по всему Казахстану.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* 11 FINAL CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-2xl border border-brand/15 bg-brand-soft p-6 shadow-card">
          <div className="pattern-dots absolute inset-0 -z-10 text-brand/5" aria-hidden="true" />
          <h2 className="text-2xl font-extrabold leading-tight text-ink tracking-tight">
            Готовы проверить, сможет ли ваша клиника получать больше платных пациентов?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            За 7 дней покажем, где клиника теряет деньги, подготовим маркетинговую систему и составим план дальнейшего роста.
          </p>
          <div className="mt-5 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-brand tracking-tight"></span>
            <span className="text-sm text-ink-muted"></span>
          </div>
          <p className="mt-4 text-[14px] text-ink-muted">
            Оставьте заявку свяжемся с вами и согласуем старт тестовой недели.
          </p>
          <div className="mt-5">
            <WaCta>Записаться на тестовую неделю</WaCta>
          </div>
          <div className="mt-5 flex gap-3 rounded-xl bg-card p-4 text-[13px] leading-relaxed text-ink border border-brand/10 shadow-sm">
            <span className="text-lg shrink-0" aria-hidden>🛡</span>
            <span className="text-ink-muted">
              Если по итогам недели вы не получите конкретный план внедрения, новые рекламные материалы и список точек роста для вашей клиники — вернём деньги.
            </span>
          </div>
        </div>
      </Section>

      <footer className="px-5 pb-6 pt-4 text-center text-[12px] text-ink-muted border-t border-border/40 mt-8 max-w-[520px] mx-auto">
        Юрий Валерьевич · Маркетинг для медицинских клиник ·
      </footer>
    </main>
  );
}

