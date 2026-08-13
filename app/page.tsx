import Link from "next/link";

type Project = {
  name: string;
  role: string;
  desc: string;
  tags: string[];
  status: "live" | "mvp" | "paused" | "plan";
  url?: string;
};

const CURRENT: Project[] = [
  {
    name: "PickAppMe",
    role: "Founder",
    desc: "Дейтинг-приложение для кальянных, баров и лаунжей — знакомства прямо в месте, где ты сидишь. PWA, потом App Store.",
    tags: ["Dating", "HoReCa", "PWA", "ЮKassa"],
    status: "live",
    url: "https://pickappme.ru",
  },
  {
    name: "Posporty",
    role: "Founder",
    desc: "Маркетплейс мест на футбольных матчах в Москве. Организатор публикует матч, игроки записываются и платят.",
    tags: ["Marketplace", "Sport", "Supabase", "React"],
    status: "mvp",
    url: "https://posporty.ru",
  },
  {
    name: "Korzun на холстах",
    role: "Owner",
    desc: "Бренд картин. Дешёвая AI-генерация сюжетов + массовая выкладка на маркетплейсах + агрессивная реклама. Подпись «Корзун» на каждом холсте.",
    tags: ["Art", "AI", "E-commerce", "Ozon"],
    status: "live",
  },
  {
    name: "AllSew Studio",
    role: "Founder",
    desc: "AI-генератор карточек товара для швейных выкроек. Один клик — готовая инфографика с моделями, размерами, инструкцией.",
    tags: ["AI", "SaaS", "fal.ai"],
    status: "mvp",
    url: "https://allsew-studio.vercel.app",
  },
  {
    name: "МячМетч",
    role: "Owner",
    desc: "Побочный спорт-сервис, работает на Vercel.",
    tags: ["Sport", "Web"],
    status: "live",
    url: "https://matchmatch-web.vercel.app",
  },
  {
    name: "IvanChick",
    role: "Advisor",
    desc: "Теннисные корты и модель монетизации. Revenue-калькулятор + первый лендинг.",
    tags: ["Sport", "Tennis", "Calculator"],
    status: "mvp",
  },
];

const SIDE: Project[] = [
  {
    name: "fight-it — «Давай выйдем?»",
    role: "Founder",
    desc: "PWA спарринг-клуб для поиска соперника на ринг. Underground эстетика, магнитная петличка.",
    tags: ["Sport", "PWA", "Community"],
    status: "paused",
  },
  {
    name: "Voice",
    role: "Founder",
    desc: "Личный голосовой архив: запись → транскрипция → база знаний в Obsidian. Замена Plaud/Limitless на своей инфраструктуре.",
    tags: ["AI", "PWA", "Deepgram"],
    status: "mvp",
  },
  {
    name: "spyrat.ru",
    role: "Client project",
    desc: "Отдельный сайт клиента, разворачивание на Timeweb CDN с SSL через acme.sh.",
    tags: ["Web", "DevOps"],
    status: "live",
    url: "https://spyrat.ru",
  },
];

const FUTURE: Project[] = [
  {
    name: "AI-платформа РФ",
    role: "Founder",
    desc: "Единый доступ к любой нейросети из РФ. Токенная модель + магазин AI-приложений + школа для детей, предпринимателей и энтузиастов.",
    tags: ["AI", "Platform", "EdTech"],
    status: "plan",
  },
  {
    name: "Личный бренд + YouTube",
    role: "Media",
    desc: "Формат: представил идею → реализовал через платформу → нейросеть управляет исполнителями → новый продукт каждые 1-2 недели.",
    tags: ["Media", "Personal Brand"],
    status: "plan",
  },
];

const SKILLS = [
  {
    group: "Продукт",
    items: [
      "Product ownership от идеи до MVP",
      "Валидация гипотез через быстрые прототипы",
      "Юнит-экономика и модели маркетплейсов (B2B, B2C, P2P)",
      "UX-мышление, mobile-first",
    ],
  },
  {
    group: "AI-стек",
    items: [
      "ChatGPT, Claude, Codex — операционная работа",
      "Midjourney, Weavy, fal.ai — визуал и генерация",
      "Deepgram — транскрипция",
      "Промпт-инжиниринг для команд и продуктов",
    ],
  },
  {
    group: "Индустрии",
    items: [
      "HoReCa: кальянные, бары, лаунжи",
      "Спорт: футбол, теннис, единоборства",
      "Творчество: искусство, дизайн товаров",
      "E-commerce: Ozon, планы на WB и ЯндексМаркет",
    ],
  },
  {
    group: "Инфраструктура",
    items: [
      "Работа с ИП, ЮKassa, split-платежи",
      "Vercel, Supabase, GitHub-first workflow",
      "Работа с командами разработки через Claude Code",
      "Копирайт под маркетплейсы и стор-листинги",
    ],
  },
];

const STATUS_LABEL: Record<Project["status"], { label: string; className: string }> = {
  live: { label: "Live", className: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30" },
  mvp: { label: "MVP", className: "bg-accent/15 text-accent ring-accent/30" },
  paused: { label: "Pause", className: "bg-zinc-500/15 text-fg-soft ring-zinc-500/30" },
  plan: { label: "План", className: "bg-fuchsia-500/15 text-fuchsia-400 ring-fuchsia-500/30" },
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <Hero />
      <About />
      <ProjectsSection title="Сейчас в работе" items={CURRENT} />
      <ProjectsSection title="Параллельные проекты" items={SIDE} />
      <ProjectsSection title="Планы" items={FUTURE} />
      <SkillsSection />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <header className="mb-16 sm:mb-24">
      <div className="text-xs uppercase tracking-[0.2em] text-fg-dim">Александр Корзун</div>
      <h1 className="mt-3 text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
        Предприниматель,<br />
        <span className="text-accent">запускаю сервисы</span> в спорте,
        знакомствах и творчестве.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-soft">
        Москва. Работаю с ИИ каждый день — генерирую идеи, строю MVP,
        валидирую гипотезы. От картин на маркетплейсах до маркетплейса
        мест на футбольных матчах.
      </p>
      <div className="mt-8 flex flex-wrap gap-3 text-sm">
        <Chip>ИП · MSK</Chip>
        <Chip>Продуктовые запуски</Chip>
        <Chip>AI-first</Chip>
        <Chip>Партнёрства HoReCa / спорт</Chip>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="mb-20 sm:mb-28">
      <SectionTitle>О себе</SectionTitle>
      <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-fg-soft">
        <p>
          Я строю сервисы там, где вижу трение между людьми и деньгами.
          Кальянная, где парни хотят познакомиться, но некому подойти.
          Футбольное поле, где 3 игрока отменились и матч под угрозой.
          Швея, у которой отличные выкройки, но карточки товара делаются вручную.
        </p>
        <p>
          Мой рабочий стек — идея, AI, быстрый MVP, ранние пользователи.
          Я не пишу код сам, но собираю продукты за дни, а не месяцы.
          Иногда это лендинг, иногда — полноценный маркетплейс с эквайрингом.
        </p>
        <p>
          Открыт к партнёрствам: HoReCa-заведения, стадионы, инвесторы
          в ранние стадии, консалтинг по AI-стеку в бизнесе.
        </p>
      </div>
    </section>
  );
}

function ProjectsSection({ title, items }: { title: string; items: Project[] }) {
  return (
    <section className="mb-16 sm:mb-24">
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((p) => <ProjectCard key={p.name} p={p} />)}
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const status = STATUS_LABEL[p.status];
  const inner = (
    <>
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
        <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ring-1 ${status.className}`}>
          {status.label}
        </span>
      </div>
      <div className="mt-1 text-xs uppercase tracking-widest text-fg-dim">{p.role}</div>
      <p className="mt-3 text-[15px] leading-relaxed text-fg-soft">{p.desc}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className="rounded-md border border-border bg-bg-elev-2 px-2 py-0.5 text-[11px] text-fg-dim">
            {t}
          </span>
        ))}
      </div>
      {p.url && (
        <div className="mt-4 text-sm text-accent-soft group-hover:text-accent">
          {p.url.replace(/^https?:\/\//, "")} →
        </div>
      )}
    </>
  );

  if (p.url) {
    return (
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col rounded-2xl border border-border bg-bg-elev p-5 transition hover:border-accent/50"
      >
        {inner}
      </a>
    );
  }
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-bg-elev p-5">
      {inner}
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="mb-20 sm:mb-28">
      <SectionTitle>Что умею</SectionTitle>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {SKILLS.map((s) => (
          <div key={s.group} className="rounded-2xl border border-border bg-bg-elev p-5">
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              {s.group}
            </h4>
            <ul className="mt-3 space-y-2 text-[15px] text-fg-soft">
              {s.items.map((it) => (
                <li key={it} className="flex gap-2">
                  <span className="text-fg-dim">·</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="mb-16 sm:mb-24">
      <SectionTitle>Связаться</SectionTitle>
      <p className="mt-4 text-[17px] leading-relaxed text-fg-soft">
        Проще всего — Telegram. Обсудим партнёрство,
        консалтинг по AI или инвестиционную возможность.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <ContactLink href="https://t.me/nooneteaches" label="Telegram" hint="@nooneteaches" />
        <ContactLink href="https://github.com/nooneteaches" label="GitHub" hint="@nooneteaches" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border pt-8 text-sm text-fg-dim">
      © {new Date().getFullYear()} · Александр Корзун · Москва
    </footer>
  );
}

// helpers

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {children}
      </div>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-bg-elev px-3 py-1 text-fg-soft">
      {children}
    </span>
  );
}

function ContactLink({ href, label, hint }: { href: string; label: string; hint: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-border bg-bg-elev px-4 py-3 transition hover:border-accent/50"
    >
      <span className="font-semibold">{label}</span>
      <span className="text-sm text-fg-dim group-hover:text-accent-soft">{hint}</span>
      <span className="ml-1 text-fg-dim group-hover:text-accent">→</span>
    </a>
  );
}
