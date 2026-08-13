import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/projects";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
      {/* Основной блок: слева карточки, справа сквозное фото на всю высоту */}
      <div className="grid gap-4 md:grid-cols-[minmax(0,2.2fr)_minmax(220px,1fr)]">
        <div className="grid gap-4 md:auto-rows-min">
          <div className="grid gap-4 md:grid-cols-[1fr_1.25fr]">
            <CardPhilosophy />
            <CardRole />
          </div>
          <CardName />
          <CardWorks />
        </div>
        <CardPhoto />
      </div>

      {/* Нижний блок: интересы + языки/контакты */}
      <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1.4fr]">
        <CardInterests />
        <CardContacts />
      </div>

      <footer className="mt-10 text-center text-xs text-ink-dim">
        © {new Date().getFullYear()} · Александр Корзун · Москва
      </footer>
    </main>
  );
}

// ── Cards ──

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-border bg-paper-soft/60 p-6 sm:p-7 ${className}`}
    >
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-bold uppercase tracking-[0.14em] text-ink">
      {children}
    </div>
  );
}

function CardPhilosophy() {
  return (
    <Card>
      <Label>Моя философия</Label>
      <div className="mt-3 font-hand text-[42px] leading-[1] text-accent">
        делать всё
        <br />
        интересным
      </div>
    </Card>
  );
}

function CardRole() {
  return (
    <Card>
      <Label>Предприниматель — активно осваиваю ИИ</Label>
      <div className="mt-6">
        <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-soft">Софт</div>
        <div className="mt-3 flex gap-6">
          <SoftIcon icon={<ClaudeIcon />} label="Claude Code" />
          <SoftIcon icon={<CodexIcon />} label="Codex" />
          <SoftIcon icon={<MidjourneyIcon />} label="Midjourney" />
        </div>
      </div>
    </Card>
  );
}

function CardPhoto() {
  return (
    <Card className="relative min-h-[460px] overflow-hidden !p-0 md:min-h-full">
      {/* Обёртка занимает всю высоту правой колонки */}
      <div className="relative h-full min-h-[460px] w-full md:min-h-[900px]">
        <Image
          src="/portrait-raw.png"
          alt="Александр Корзун"
          fill
          className="object-cover object-[center_top]"
          priority
          sizes="(max-width: 768px) 100vw, 30vw"
        />
      </div>
    </Card>
  );
}

function CardName() {
  return (
    <Card>
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Александр
        <br />
        Корзун
      </h1>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
        Привет! Меня зовут Александр, я из Москвы.
      </p>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
        В данный момент ищу интересные для себя проекты и реализую свои.
      </p>
    </Card>
  );
}

function CardWorks() {
  return (
    <Card>
      <Label>Последние работы</Label>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group flex items-center justify-between rounded-xl border border-border bg-paper px-4 py-3 transition hover:border-accent hover:bg-paper-soft"
          >
            <div>
              <div className="text-[15px] font-bold text-ink">{p.name}</div>
              <div className="text-xs text-ink-dim">{p.tagline}</div>
            </div>
            <span className="text-lg text-ink-dim transition group-hover:translate-x-0.5 group-hover:text-accent">→</span>
          </Link>
        ))}
      </div>
    </Card>
  );
}

function CardInterests() {
  return (
    <Card>
      <Label>Интересы</Label>
      <ul className="mt-4 space-y-1.5 text-[14px] text-ink-soft">
        <li>Продуктовые запуски</li>
        <li>Спорт: футбол, теннис, единоборства</li>
        <li>Знакомства и коммьюнити</li>
        <li>Творчество, живопись</li>
        <li>AI-инструменты</li>
      </ul>
    </Card>
  );
}

function CardContacts() {
  return (
    <Card>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <Label>Языки</Label>
          <div className="mt-4 space-y-3">
            <LangBar label="Русский" value={100} />
            <LangBar label="Английский" value={60} />
          </div>
        </div>
        <div className="space-y-2">
          <ContactRow icon="phone" text="+7 926 083 91 89" href="tel:+79260839189" />
          <ContactRow icon="tg" text="@alekorzun" href="https://t.me/alekorzun" />
          <ContactRow icon="mail" text="avkorzun@me.com" href="mailto:avkorzun@me.com" />
        </div>
      </div>
    </Card>
  );
}

function LangBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-soft">{label}</span>
      </div>
      <div className="h-3 overflow-hidden rounded border border-ink/50 bg-paper">
        <div className="h-full bg-accent" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function ContactRow({ icon, text, href }: { icon: "phone" | "tg" | "mail"; text: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-3 rounded-md px-1 py-1 text-[14px] text-ink transition hover:text-accent">
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

// ── Soft icons (inline SVG for reliability) ──

function ClaudeIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#d97656]">
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor">
        {/* stylized burst */}
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
        {/* stylized ship */}
        <path d="M8 20c0-6 5-11 12-11s12 5 12 11v2H8v-2z" />
        <path d="M8 24l4 6h16l4-6H8z" />
        <path d="M18 6h4v6h-4z" />
      </svg>
    </div>
  );
}
