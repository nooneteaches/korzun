import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/projects";

/**
 * Главная. Три раскладки:
 * - Mobile (default): stack колонкой, всё вертикально.
 * - md (tablet): grid 3 колонки, фото row-span (то что было).
 * - lg+ (desktop): landscape 16:9 макет — фото занимает всю правую половину,
 *   слева grid из 3 колонок × 4 рядов.
 */
export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-paper px-3 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-[1400px] border border-ink/30 bg-paper">
        {/*
          Grid config:
          - mobile: 1 col
          - md: 3 col (photo row-span)
          - lg: 6 col — 3 контентных + 3 под фото (photo col-span 3 row-span 4)
        */}
        <div
          className="
            grid
            md:grid-cols-[1fr_1.35fr_1.05fr]
            lg:grid-cols-[1fr_1.35fr_1.35fr_1.7fr]
            lg:min-h-[1100px]
          "
        >
          {/* ── Row 1 · col 1 · Философия ── */}
          <Cell borderR borderB>
            <Label>Моя философия</Label>
            <div className="mt-3 font-hand text-[42px] leading-[0.95] text-accent lg:text-[54px]">
              делать всё
              <br />
              интересным
            </div>
          </Cell>

          {/* ── Row 1 · col 2-3 · Роль + Софт ── */}
          <Cell borderR borderB colSpanMd={1} colSpanLg={2}>
            <Label>Предприниматель — активно осваиваю ИИ</Label>
            <div className="mt-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-soft">Софт</div>
              <div className="mt-3 flex flex-wrap gap-6">
                <SoftIcon icon={<ClaudeIcon />} label="Claude Code" />
                <SoftIcon icon={<CodexIcon />} label="Codex" />
                <SoftIcon icon={<MidjourneyIcon />} label="Midjourney" />
              </div>
            </div>
          </Cell>

          {/* ── Фото · md: col 3 rowspan 3 · lg: col 4 rowspan 4 ── */}
          <div className="relative hidden bg-paper border-b border-ink/30 md:col-start-3 md:row-span-3 md:block md:min-h-[720px] lg:col-start-4 lg:row-span-4 lg:min-h-[1100px]">
            <Image
              src="/portrait-raw.png"
              alt="Александр Корзун"
              fill
              className="object-contain object-center"
              priority
              sizes="(min-width:1024px) 30vw, 30vw"
            />
          </div>
          {/* Mobile-only фото (сжатое) */}
          <div className="relative col-span-full h-[420px] border-b border-ink/30 md:hidden">
            <Image
              src="/portrait-raw.png"
              alt="Александр Корзун"
              fill
              className="object-contain object-top"
              priority
              sizes="100vw"
            />
          </div>

          {/* ── Row 2 · Имя ── */}
          <Cell borderR borderB>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Александр
              <br />
              Корзун
            </h1>
          </Cell>

          {/* ── Row 2 · Приветствие ── */}
          <Cell borderR borderB colSpanMd={1} colSpanLg={2}>
            <p className="max-w-md text-[15px] leading-relaxed text-ink-soft lg:mt-6">
              Привет! Меня зовут Александр, я из Москвы.
            </p>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
              В данный момент ищу интересные для себя проекты и реализую свои.
            </p>
          </Cell>

          {/* ── Row 3 · Последние работы (широкая на все 3 контентные колонки) ── */}
          <Cell borderR borderB colSpanMd={2} colSpanLg={3}>
            <Label>Последние работы</Label>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {PROJECTS.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group flex items-center justify-between border border-ink/25 bg-paper px-4 py-3 transition hover:border-accent"
                >
                  <div>
                    <div className="text-[15px] font-bold text-ink">{p.name}</div>
                    <div className="text-xs text-ink-dim">{p.tagline}</div>
                  </div>
                  <span className="text-lg text-ink-dim transition group-hover:translate-x-0.5 group-hover:text-accent">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </Cell>

          {/* ── Row 4 · Интересы ── */}
          <Cell borderR>
            <Label>Интересы</Label>
            <ul className="mt-4 space-y-1.5 text-[14px] text-ink-soft">
              <li>Продуктовые запуски</li>
              <li>Спорт: футбол, теннис, единоборства</li>
              <li>Знакомства и коммьюнити</li>
              <li>Творчество, живопись</li>
              <li>AI-инструменты</li>
            </ul>
          </Cell>

          {/* ── Row 4 · Языки ── */}
          <Cell borderR>
            <Label>Языки</Label>
            <div className="mt-4 space-y-3">
              <LangBar label="Русский" value={100} />
              <LangBar label="Английский" value={60} />
            </div>
          </Cell>

          {/* ── Row 4 · Контакты ── */}
          <Cell>
            <div className="flex flex-col justify-end gap-2 text-[14px]">
              <ContactRow icon="phone" text="+7 926 083 91 89" href="tel:+79260839189" />
              <ContactRow icon="tg" text="@alekorzun" href="https://t.me/alekorzun" />
              <ContactRow icon="mail" text="avkorzun@me.com" href="mailto:avkorzun@me.com" />
            </div>
          </Cell>
        </div>
      </div>

      <footer className="mx-auto mt-6 max-w-[1400px] text-center text-xs text-ink-dim">
        © {new Date().getFullYear()} · Александр Корзун · Москва
      </footer>
    </main>
  );
}

// ── Grid cell ──

function Cell({
  children,
  borderR,
  borderB,
  colSpanMd,
  colSpanLg,
}: {
  children: React.ReactNode;
  borderR?: boolean;
  borderB?: boolean;
  colSpanMd?: 1 | 2 | 3;
  colSpanLg?: 1 | 2 | 3;
}) {
  const csMd =
    colSpanMd === 2 ? "md:col-span-2"
    : colSpanMd === 3 ? "md:col-span-3"
    : "";
  const csLg =
    colSpanLg === 2 ? "lg:col-span-2"
    : colSpanLg === 3 ? "lg:col-span-3"
    : "";
  const br = borderR ? "md:border-r md:border-ink/30" : "";
  const bb = borderB ? "border-b border-ink/30" : "";
  return <div className={`p-6 sm:p-8 lg:p-10 ${csMd} ${csLg} ${br} ${bb}`}>{children}</div>;
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-bold uppercase tracking-[0.16em] text-ink">
      {children}
    </div>
  );
}

// ── Bits ──

function LangBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-soft">{label}</span>
      </div>
      <div className="h-3 overflow-hidden border border-ink/50 bg-paper">
        <div className="h-full bg-accent" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function ContactRow({ icon, text, href }: { icon: "phone" | "tg" | "mail"; text: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-3 py-0.5 text-ink transition hover:text-accent">
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ink/40 text-ink-soft">
        {icon === "phone" && (
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
        )}
        {icon === "tg" && (
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2L11 13" />
            <path d="M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        )}
        {icon === "mail" && (
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        )}
      </span>
      {text}
    </a>
  );
}

function SoftIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl">
        {icon}
      </div>
      <span className="text-[11px] text-ink-soft">{label}</span>
    </div>
  );
}

function ClaudeIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d97656]">
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor">
        <g>
          <rect x="15" y="4" width="2" height="8" rx="1" />
          <rect x="15" y="20" width="2" height="8" rx="1" />
          <rect x="4" y="15" width="8" height="2" rx="1" />
          <rect x="20" y="15" width="8" height="2" rx="1" />
          <rect x="6.5" y="6.5" width="8" height="2" rx="1" transform="rotate(45 10.5 7.5)" />
          <rect x="17.5" y="6.5" width="8" height="2" rx="1" transform="rotate(-45 21.5 7.5)" />
          <rect x="6.5" y="23.5" width="8" height="2" rx="1" transform="rotate(-45 10.5 24.5)" />
          <rect x="17.5" y="23.5" width="8" height="2" rx="1" transform="rotate(45 21.5 24.5)" />
        </g>
      </svg>
    </div>
  );
}

function CodexIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0f9d76]">
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor">
        <path d="M16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16 8.82 3 16 3zm0 4a9 9 0 100 18 9 9 0 000-18zm-3 5.5l4.5 3.5-4.5 3.5v-7z" />
      </svg>
    </div>
  );
}

function MidjourneyIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink/20 bg-white">
      <svg viewBox="0 0 40 40" className="h-8 w-8 text-ink" fill="currentColor">
        <path d="M8 20c0-6 5-11 12-11s12 5 12 11v2H8v-2z" />
        <path d="M8 24l4 6h16l4-6H8z" />
        <path d="M18 6h4v6h-4z" />
      </svg>
    </div>
  );
}
