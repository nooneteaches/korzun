import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, PROJECTS } from "@/lib/projects";

const STATUS_LABEL = {
  live: { label: "Live", cls: "bg-emerald-500/15 text-emerald-700 ring-emerald-600/30" },
  mvp: { label: "MVP", cls: "bg-accent/15 text-accent-dim ring-accent/30" },
  paused: { label: "Pause", cls: "bg-ink/10 text-ink-dim ring-ink/20" },
  plan: { label: "План", cls: "bg-fuchsia-500/15 text-fuchsia-700 ring-fuchsia-500/30" },
} as const;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();

  const status = STATUS_LABEL[project.status];

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1 rounded-full border border-border bg-paper-soft/70 px-3 py-1.5 text-sm text-ink-soft transition hover:border-accent hover:text-accent"
      >
        ← Все проекты
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-baseline gap-3">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{project.name}</h1>
          <span
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider ring-1 ${status.cls}`}
          >
            {status.label}
          </span>
        </div>
        <div className="mt-2 text-sm uppercase tracking-widest text-ink-dim">{project.role}</div>
        <p className="mt-4 text-xl leading-snug text-ink-soft">{project.tagline}</p>
      </header>

      <section className="mt-8 rounded-2xl border border-border bg-paper-soft/60 p-6 sm:p-7">
        <p className="whitespace-pre-line text-[16px] leading-relaxed text-ink">
          {project.description}
        </p>
      </section>

      {project.highlights && project.highlights.length > 0 && (
        <section className="mt-6">
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink">Ключевые вехи</h2>
          <ul className="mt-3 space-y-2 text-[15px] text-ink-soft">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="text-accent">→</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink">Стек и подходы</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-paper px-2.5 py-1 text-[13px] text-ink-soft"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {project.shots && project.shots.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-ink">Скриншоты</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.shots.map((src) => (
              <div
                key={src}
                className="relative aspect-[9/16] overflow-hidden rounded-xl border border-border bg-paper-soft"
              >
                <Image src={src} alt={project.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
            ))}
          </div>
        </section>
      )}

      {project.url && (
        <section className="mt-10">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-accent-dim"
          >
            Открыть проект
            <span>→</span>
          </a>
          <span className="ml-3 text-xs text-ink-dim">{project.url.replace(/^https?:\/\//, "")}</span>
        </section>
      )}

      <footer className="mt-16 border-t border-border pt-6 text-center text-xs text-ink-dim">
        © {new Date().getFullYear()} · Александр Корзун · Москва
      </footer>
    </main>
  );
}
