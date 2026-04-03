import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { domains, getDomainBySlug, getDifficultyLabel } from "@/lib/techstacks";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);
  if (!domain) return { title: "ไม่พบสายงาน" };
  return { title: `${domain.name} — Tech Stack`, description: domain.tagline };
}

const levelStyle: Record<string, { dot: string; badge: string }> = {
  must: { dot: "bg-rose-500", badge: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300" },
  recommended: { dot: "bg-blue-500", badge: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300" },
  optional: { dot: "bg-slate-400", badge: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400" },
};
const levelLabel: Record<string, string> = { must: "ต้องรู้", recommended: "แนะนำ", optional: "ทางเลือก" };

export default async function TechStackDetailPage({ params }: Props) {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);
  if (!domain) notFound();

  const idx = domains.findIndex((d) => d.slug === slug);
  const prev = idx > 0 ? domains[idx - 1] : null;
  const next = idx < domains.length - 1 ? domains[idx + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Breadcrumb */}
        <nav className="animate-fade-in mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/techstacks" className="hover:text-violet-600 dark:hover:text-violet-400">Tech Stacks</Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-300">{domain.name}</span>
        </nav>

        {/* Header */}
        <header className="animate-fade-in">
          <div className="flex flex-wrap items-start gap-4">
            <span className="text-6xl">{domain.icon}</span>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{domain.name}</h1>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">{domain.tagline}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">⏱ {domain.timeToLearn}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">💰 {domain.salaryRange}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">{getDifficultyLabel(domain.difficulty)}</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">{domain.description}</p>
        </header>

        {/* Expert Advice */}
        <section className="animate-slide-up mt-10">
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-6 dark:border-amber-800 dark:bg-amber-500/5">
            <h3 className="flex items-center gap-2 text-lg font-bold text-amber-800 dark:text-amber-200">
              <span>🧑‍🏫</span> คำแนะนำจากผู้เชี่ยวชาญ
            </h3>
            <p className="mt-3 text-sm italic leading-relaxed text-amber-900 dark:text-amber-100">{domain.expertAdvice}</p>
          </div>
        </section>

        {/* Tech Stack Layers */}
        <Section title="Tech Stack ที่ต้องรู้" icon="🧰">
          <div className="space-y-8">
            {domain.layers.map((layer) => (
              <div key={layer.layer}>
                <h4 className="mb-3 flex items-center gap-2 text-base font-bold text-slate-800 dark:text-slate-200">
                  <span>{layer.icon}</span>{layer.layer}
                </h4>
                <div className="space-y-3">
                  {layer.tools.map((tool) => {
                    const style = levelStyle[tool.level];
                    return (
                      <div key={tool.name} className="rounded-xl border border-slate-200/60 bg-white/60 p-4 dark:border-slate-700/40 dark:bg-slate-800/40">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className={`h-2.5 w-2.5 rounded-full ${style.dot}`} />
                            <h5 className="text-sm font-bold text-slate-900 dark:text-white">{tool.name}</h5>
                          </div>
                          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${style.badge}`}>
                            {levelLabel[tool.level]}
                          </span>
                        </div>
                        <p className="mt-1 text-xs font-medium text-violet-600 dark:text-violet-400">{tool.role}</p>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{tool.why}</p>
                        {tool.alternatives.length > 0 && (
                          <p className="mt-2 text-xs text-slate-500 dark:text-slate-500">
                            ทางเลือกอื่น: {tool.alternatives.join(", ")}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Learning Path */}
        <Section title="Learning Path — เรียนตามลำดับ" icon="🗺️">
          <div className="space-y-4">
            {domain.learningPath.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">{i + 1}</span>
                  {i < domain.learningPath.length - 1 && <div className="mt-1 h-full w-0.5 bg-violet-200 dark:bg-violet-700" />}
                </div>
                <div className="pb-4">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{step.step}</h4>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">{step.duration}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Real World Projects */}
        <Section title="Project ตัวอย่าง — ใส่ Portfolio ได้" icon="🚀">
          <div className="space-y-4">
            {domain.realWorldProject.map((project) => (
              <div key={project.name} className="rounded-xl border border-slate-200/60 bg-white/60 p-5 dark:border-slate-700/40 dark:bg-slate-800/40">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{project.name}</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.techUsed.map((tech) => (
                    <span key={tech} className="rounded-md bg-violet-50 px-2 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Common Mistakes */}
        <Section title="ข้อผิดพลาดที่มือใหม่มักทำ" icon="⚠️">
          <div className="space-y-2.5">
            {domain.commonMistakes.map((mistake, i) => (
              <div key={i} className="rounded-xl border-l-4 border-rose-400 bg-rose-50/60 py-3 pl-4 pr-4 dark:border-rose-500 dark:bg-rose-500/5">
                <p className="text-sm text-rose-900 dark:text-rose-200">{mistake}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Interview Topics */}
        <Section title="หัวข้อสัมภาษณ์ที่มักถูกถาม" icon="🎤">
          <div className="flex flex-wrap gap-2">
            {domain.interviewTopics.map((topic) => (
              <span key={topic} className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700/60">{topic}</span>
            ))}
          </div>
        </Section>

        {/* Resources */}
        <Section title="Resources แนะนำ" icon="📚">
          <div className="grid gap-3 sm:grid-cols-2">
            {domain.mustReadResources.map((res) => (
              <a key={res.name} href={res.url} target="_blank" rel="noopener noreferrer" className="group rounded-xl border border-slate-200/60 bg-white/60 p-4 transition-all hover:border-violet-300 hover:shadow-sm dark:border-slate-700/40 dark:bg-slate-800/40 dark:hover:border-violet-600">
                <p className="text-sm font-bold text-slate-900 dark:text-white">{res.name}</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{res.type}</p>
                <p className="mt-2 text-xs font-medium text-violet-600 transition-transform group-hover:translate-x-1 dark:text-violet-400">เข้าไปดู →</p>
              </a>
            ))}
          </div>
        </Section>

        {/* Navigation */}
        <div className="mt-16 flex items-center justify-between gap-4">
          {prev ? (
            <Link href={`/techstacks/${prev.slug}`} className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-violet-600 dark:hover:text-violet-400">
              <span className="transition-transform group-hover:-translate-x-1">←</span>{prev.icon} {prev.name}
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/techstacks/${next.slug}`} className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-violet-600 dark:hover:text-violet-400">
              {next.icon} {next.name}<span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ) : <div />}
        </div>
        <div className="mt-8 text-center">
          <Link href="/techstacks" className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">← ดู Tech Stack ทุกสาย</Link>
        </div>
      </main>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section className="animate-slide-up mt-12">
      <h2 className="mb-5 flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
        <span className="text-2xl">{icon}</span>{title}
      </h2>
      {children}
    </section>
  );
}
