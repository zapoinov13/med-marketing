import { createFileRoute } from "@tanstack/react-router";
import { WaCta } from "@/components/wa-cta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Briefcase,
  Building2,
  GraduationCap,
  MapPin,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Приведем клиентов в ваш бизнес — 50 000 ₸" },
      {
        name: "description",
        content:
          "Начните с недели: найдем, где вы теряете клиентов, запустим рекламу и дадим план роста. Кейс: +13 000 000 ₸ выручки.",
      },
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
          name: "Приведем клиентов в ваш бизнес",
          provider: { "@type": "Person", name: "Юрий Валерьевич" },
          areaServed: "KZ",
          description:
            "Начните с недели: аудит, стратегия, реклама, аналитика и план роста для вашего бизнеса.",
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
    { n: 1, t: "Аудит бизнеса", d: "Проверяем текущую рекламу, объявления, посадочные страницы и точки потерь" },
    { n: 2, t: "Анализ конкурентов", d: "Показываем, почему клиенты выбирают конкурентов.\n" },
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
        <h1 className="mt-5 text-[28px] font-extrabold leading-[1.15] text-ink sm:text-3xl tracking-tight">
          Приведем клиентов
          <br />в ваш бизнес
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
          За 7 дней найдём, где вы теряете деньги, запустим рекламу и получим первых клиентов
        </p>

        <div className="mt-6 flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/90 p-4 shadow-card backdrop-blur-md transition-all duration-300 hover:shadow-lg">
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

        <div className="mt-6 rounded-3xl border border-brand/15 bg-card p-6 shadow-card transition-all duration-300 hover:shadow-lg ring-1 ring-brand/5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Бесплатно · 20 минут
          </div>
          <div className="mt-2 text-xl font-extrabold text-ink leading-tight tracking-tight">
            Разбор вашего бизнеса
          </div>
          <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
            покажу, где теряете клиентов и что&nbsp;
            <br />можно исправить в первую очередь.
          </p>
          <ul className="mt-4 space-y-3 text-[15px] text-ink">
            <li className="flex items-start gap-3"><Check /> <span>Разбор текущей рекламы<br />и воронки продаж</span></li>
            <li className="flex items-start gap-3"><Check /> <span>точки роста конкретно<br />для вашего бизнеса</span></li>
            
          </ul>
          <div className="mt-6">
            <WaCta source="hero">Получить разбор</WaCta>
          </div>
          <p className="mt-3 text-center text-[12px] text-ink-muted">
            После разбора можно обсудить сотрудничество
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2.5">
            <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-card/80 p-2.5 text-[12px] font-semibold text-ink shadow-sm">
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand text-[10px]">✓</span>
              Гарантия возврата
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-card/80 p-2.5 text-[12px] font-semibold text-ink shadow-sm">
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand text-[10px]">✓</span>
              5+ лет опыта
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-card/80 p-2.5 text-[12px] font-semibold text-ink shadow-sm">
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand text-[10px]">✓</span>
              50+ компаний
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-border/70 bg-card/80 p-2.5 text-[12px] font-semibold text-ink shadow-sm">
              <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand text-[10px]">✓</span>
              Личное ведение
            </div>
          </div>
        </div>

      </Section>

      {/* 2 PROBLEM */}
      <Section className="bg-surface-2">
        <h2 className="text-2xl font-extrabold leading-tight text-ink tracking-tight">
          Почему клиенты не покупают?
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">
          Кажется, что нужно больше рекламы.{"\u00a0"}<br />
          Обычно деньги теряются раньше:
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Непонятное предложение",
            "Нет пакетов и тарифов",
            "Менеджер теряет заявки",
            "Нет аналитики",
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
        <h2 className="mt-2 text-2xl font-extrabold text-ink tracking-tight">Как один клиент получил&nbsp;<br />+13 000 000 ₸ при том же рекламном бюджете</h2>

        <div className="mt-5 rounded-xl border-l-4 border-l-gold border border-border bg-surface-2/60 p-4 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">Запрос</div>
          <p className="mt-1 text-[15px] font-medium text-ink">«Нам нужен SMM, чтобы было больше клиентов.»</p>
        </div>

        <div className="mt-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
            Что сделали
          </div>
          <ul className="mt-3 space-y-3 text-[15px] text-ink">
            {[
              "Упаковали услуги и тарифы",
              "Настроили аналитику",
              "Запустили рекламу по новым сценариям",
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
              { label: "Новых клиентов", value: "29" },
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

        {/* Короткие кейсы */}
        <div className="mt-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand">Ещё кейсы</div>
          <h3 className="mt-2 text-xl font-extrabold text-ink tracking-tight">Короткие истории клиентов</h3>

          <div className="mt-5 space-y-4">
            {[
              { icon: MapPin, clinic: "Сеть услуг в Алматы", action: "Переупаковали услугу и перезапустили рекламу.", metric: "+42", sub: "клиента за 1 месяц" },
              { icon: Briefcase, clinic: "Сервисная компания", action: "Внедрили скрипт продаж и аналитику.", metric: "×2,3", sub: "конверсия в визит" },
              { icon: GraduationCap, clinic: "Онлайн-школа", action: "Сделали оффер и запустили таргет.", metric: "+5,8M", sub: "₸ за 6 недель" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.clinic} className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-brand/5 transition-transform duration-500 group-hover:scale-150" aria-hidden="true" />
                  <div className="relative flex items-start gap-3.5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-brand">{c.clinic}</div>
                      <p className="mt-1.5 text-[14px] text-ink-muted leading-relaxed">{c.action}</p>
                      <div className="mt-4 inline-flex items-baseline gap-2 rounded-xl bg-brand-soft px-4 py-2.5">
                        <span className="text-xl font-black text-brand tracking-tight">{c.metric}</span>
                        <span className="text-[12px] font-medium text-ink-muted">{c.sub}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 4 MANIFESTO */}
      <Section className="relative overflow-hidden bg-brand text-brand-foreground">
        <div className="pattern-dots absolute inset-0 -z-10 text-brand-foreground opacity-30" aria-hidden="true" />
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight">
          Начинаем с недели
        </h2>
        <div className="mt-5 space-y-3.5 text-[15px] leading-relaxed">
          {[
            "Не предлагаем сразу договор на год",
            "Сначала показываем, как работает наша система именно в вашем бизнесе.",
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
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Кто ведет проект</h2>
        <div className="mt-5 overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-lg">
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
            <p className="mt-1 text-[14px] font-medium text-brand">
              Эксперт по маркетингу и рекламе
            </p>
            <ul className="mt-5 space-y-3 text-[15px] text-ink border-t border-border/60 pt-5">
              {[
                "5+ лет в маркетинге и рекламе",
                "50+ компаний работают по системе",
                "Собственный бизнес",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 transition-all duration-200 hover:translate-x-0.5"><Check /> <span>{t}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 6 DAYS */}
      <Section>
        <h2 className="text-2xl font-extrabold text-ink tracking-tight">Что сделаем за 7 дней</h2>
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
            "Полную картину вашего маркетинга",
            "Новые офферы и рекламу",
            "Понимание, куда уходят деньги",
            "План задач на 30 дней",
          ].map((t) => (
            <li key={t} className="flex items-center gap-3.5 rounded-xl border border-border bg-card p-3.5 text-[15px] font-medium text-ink shadow-sm transition-all duration-200 hover:translate-x-1 hover:border-brand/20 hover:shadow">
              <Check /> <span>{t}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 8 FOR WHOM */}
      <Section className="bg-surface-2">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold text-ink tracking-tight">Для кого подходит</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-muted whitespace-pre-line">
            Работаем с бизнесами, где{"\u00a0"}
            важен каждый клиент
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            {
              title: "Услуги и сервис",
              desc: "Находим клиентов под дорогие услуги",
              icon: Briefcase,
            },
            {
              title: "Онлайн-школы и эксперты",
              desc: "Заполняем воронки продаж",
              icon: GraduationCap,
            },
            {
              title: "Розница и e-commerce",
              desc: "Увеличиваем заявки и покупки",
              icon: ShoppingBag,
            },
            {
              title: "B2B-компании",
              desc: "Приводим целевых партнеров",
              icon: Building2,
            },
            {
              title: "Салоны и студии",
              desc: "Записываем клиентов на услуги",
              icon: Sparkles,
            },
            {
              title: "Локальный бизнес",
              desc: "Привлекаем из вашего города",
              icon: MapPin,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-md"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br from-brand/10 to-gold/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-soft to-brand/10 text-brand shadow-sm">
                  <item.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-3 text-[14px] font-extrabold text-ink leading-tight">{item.title}</h3>
                <p className="mt-1 text-[12px] leading-snug text-ink-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 9 PRICE */}
      <Section>
        <div className="relative rounded-3xl bg-card p-[1px] shadow-card group transition-all duration-300 hover:shadow-lg">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand/20 via-gold/15 to-brand/5 group-hover:from-brand/35 group-hover:via-gold/25 group-hover:to-brand/10 transition-all duration-300" aria-hidden="true" />
          <div className="relative rounded-3xl bg-card p-6">
            <div className="text-xs font-bold uppercase tracking-wider text-brand">Стоимость</div>
            <h2 className="mt-1.5 text-2xl font-extrabold text-ink tracking-tight">Неделя</h2>
            <div className="mt-4 text-5xl font-black text-brand tracking-tight">50 000 ₸</div>

            <ul className="mt-5 space-y-2.5">
              {[
                "Аудит и стратегия",
                "Реклама и креативы",
                "План роста на 30 дней",
              ].map((inc) => (
                <li key={inc} className="flex items-start gap-2.5 text-[14px] text-ink">
                  <Check />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-gold/30 bg-gold/10 p-4 text-[14px] leading-relaxed text-ink flex gap-3">
              <span className="text-gold text-lg shrink-0" aria-hidden>🛡</span>
              <p><span className="font-bold">Гарантия.</span> Нет плана и точек роста — верну 50 000 ₸.</p>
            </div>
            <div className="mt-6">
              <WaCta source="price_block">Начать неделю</WaCta>
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
              За 7 дней будут клиенты?
            </AccordionTrigger>
            <AccordionContent className="text-[14.5px] leading-relaxed text-ink-muted pb-4">
              Главная цель недели — провести глубокую подготовку, внедрить ключевые изменения и дать бизнесу готовую систему для роста. В зависимости от этапа работ и готовности компании первые обращения могут появиться уже в процессе.
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
              Да. Работаем онлайн с бизнесом любой ниши по всему Казахстану.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Section>

      {/* 11 FINAL CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-2xl border border-brand/15 bg-brand-soft p-6 shadow-card">
          <div className="pattern-dots absolute inset-0 -z-10 text-brand/5" aria-hidden="true" />
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand border border-brand/10">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Отвечаю в течение 15 минут
          </div>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-ink tracking-tight">
            Начнём с разбора
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
            20 минут в WhatsApp. Покажу, где вы теряете клиентов. Без обязательств.
          </p>
          <div className="mt-6">
            <WaCta source="final_cta">Получить разбор</WaCta>
          </div>

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

