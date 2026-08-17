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
    <main className="min-h-[100dvh] bg-paper px-3 py-6 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-3xl border border-ink/30 bg-paper">
        <div className="p-6 sm:p-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 border border-ink/25 bg-paper px-3 py-1.5 text-sm text-ink-soft transition hover:border-accent hover:text-accent"
          >
            ← Все проекты
          </Link>

          <header className="mt-8 border-b border-ink/25 pb-8">
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

          <section className="mt-8">
            <p className="whitespace-pre-line text-[17px] leading-relaxed text-ink">
              {project.description}
            </p>
          </section>

          {project.sections?.map((sec) => (
            <section key={sec.title} className="mt-10 border-t border-ink/20 pt-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">{sec.title}</h2>
              {sec.intro && (
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{sec.intro}</p>
              )}
              {sec.paragraphs?.map((p, i) => (
                <p key={i} className="mt-3 text-[15px] leading-relaxed text-ink">
                  {p}
                </p>
              ))}
              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 text-[15px] text-ink">
                  {sec.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1 text-accent">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {project.install && (
            <section className="mt-10 border-t border-ink/20 pt-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">Как установить</h2>
              <div className="mt-4 grid gap-6 md:grid-cols-2">
                {project.install.ios && (
                  <InstallCol title="iOS · Safari" steps={project.install.ios} />
                )}
                {project.install.android && (
                  <InstallCol title="Android · Chrome" steps={project.install.android} />
                )}
              </div>
              {project.install.note && (
                <p className="mt-4 text-[13px] italic text-ink-dim">{project.install.note}</p>
              )}
            </section>
          )}

          {(project.highlights?.length ?? 0) > 0 && !project.sections && (
            <section className="mt-10 border-t border-ink/20 pt-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">Ключевые вехи</h2>
              <ul className="mt-4 space-y-2 text-[15px] text-ink">
                {project.highlights!.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-1 text-accent">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-10 border-t border-ink/20 pt-8">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">Стек и подходы</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="border border-ink/25 bg-paper px-2.5 py-1 text-[13px] text-ink-soft"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {project.links && project.links.length > 0 && (
            <section className="mt-10 border-t border-ink/20 pt-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">Ссылки</h2>
              <div className="mt-4 space-y-2">
                {project.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target={l.url.startsWith("/") ? undefined : "_blank"}
                    rel={l.url.startsWith("/") ? undefined : "noopener noreferrer"}
                    className={`group flex items-center justify-between border px-4 py-3 transition ${
                      l.kind === "primary"
                        ? "border-accent/60 bg-accent/8 hover:bg-accent/12"
                        : "border-ink/25 bg-paper hover:border-accent"
                    }`}
                  >
                    <div>
                      <div className="text-[15px] font-bold text-ink">{l.label}</div>
                      {l.note && (
                        <div className="text-xs text-ink-dim">{l.note}</div>
                      )}
                    </div>
                    <span className="text-lg text-ink-dim transition group-hover:translate-x-0.5 group-hover:text-accent">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}

          {project.shots && project.shots.length > 0 && (
            <section className="mt-10 border-t border-ink/20 pt-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-ink">Скриншоты</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.shots.map((src) => (
                  <div
                    key={src}
                    className="relative aspect-[9/16] overflow-hidden border border-ink/25 bg-paper-soft"
                  >
                    <Image src={src} alt={project.name} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.url && !project.links && (
            <section className="mt-10 border-t border-ink/20 pt-8">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-accent-dim"
              >
                Открыть проект
                <span>→</span>
              </a>
              <span className="ml-3 text-xs text-ink-dim">{project.url.replace(/^https?:\/\//, "")}</span>
            </section>
          )}
        </div>
      </div>

      <footer className="mx-auto mt-6 max-w-3xl text-center text-xs text-ink-dim">
        © {new Date().getFullYear()} · Александр Корзун · Москва
      </footer>
    </main>
  );
}

function InstallCol({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div>
      <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-accent-dim">{title}</h3>
      <ol className="mt-3 space-y-2 text-[14px] text-ink">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 shrink-0 text-accent font-bold tabular-nums">{i + 1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
