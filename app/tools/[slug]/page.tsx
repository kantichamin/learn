import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, toolCategories, getToolBySlug } from "@/lib/tools";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "ไม่พบเครื่องมือ" };
  return {
    title: `${tool.name} — เครื่องมือ Dev`,
    description: tool.tagline,
  };
}

const pricingBadge: Record<string, { text: string; className: string }> = {
  free: { text: "ฟรี 100%", className: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" },
  freemium: { text: "Free + Premium", className: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300" },
  "open-source": { text: "Open Source", className: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300" },
  paid: { text: "Paid", className: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300" },
};

export default async function ToolDetailPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const catMeta = toolCategories.find((c) => c.key === tool.category);
  const pricing = pricingBadge[tool.pricing];
  const toolIndex = tools.findIndex((t) => t.slug === slug);
  const prev = toolIndex > 0 ? tools[toolIndex - 1] : null;
  const next = toolIndex < tools.length - 1 ? tools[toolIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Breadcrumb */}
        <nav className="animate-fade-in mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/tools" className="hover:text-violet-600 dark:hover:text-violet-400">
            เครื่องมือ Dev
          </Link>
          <span>/</span>
          {catMeta && (
            <>
              <span>{catMeta.icon} {catMeta.label}</span>
              <span>/</span>
            </>
          )}
          <span className="text-slate-700 dark:text-slate-300">{tool.name}</span>
        </nav>

        {/* Header */}
        <header className="animate-fade-in">
          <div className="flex flex-wrap items-start gap-4">
            <span className="text-6xl">{tool.icon}</span>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {tool.name}
              </h1>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">{tool.tagline}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {pricing && (
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${pricing.className}`}>
                    {pricing.text}
                  </span>
                )}
                {tool.platforms.map((p) => (
                  <span
                    key={p}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">{tool.description}</p>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
          >
            เข้าเว็บไซต์ →
          </a>
        </header>

        {/* Why Use */}
        <Section title="ทำไมต้องใช้?" icon="💡">
          <ul className="space-y-3">
            {tool.whyUse.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <span className="mt-0.5 shrink-0 text-emerald-500">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Key Features */}
        <Section title="ฟีเจอร์สำคัญ" icon="⭐">
          <div className="grid gap-3 sm:grid-cols-2">
            {tool.keyFeatures.map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200/60 bg-white/60 p-4 dark:border-slate-700/40 dark:bg-slate-800/40"
              >
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{feature}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Quick Start */}
        <Section title="เริ่มต้นใช้งาน" icon="🚀">
          <ol className="space-y-4">
            {tool.quickStart.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Pro Tips */}
        <Section title="Pro Tips" icon="🎯">
          <div className="space-y-3">
            {tool.proTips.map((tip, i) => (
              <div
                key={i}
                className="rounded-xl border-l-4 border-amber-400 bg-amber-50/60 py-3 pl-4 pr-4 dark:border-amber-500 dark:bg-amber-500/5"
              >
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{tip}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Alternatives */}
        <Section title="ทางเลือกอื่น" icon="🔄">
          <div className="flex flex-wrap gap-2">
            {tool.alternatives.map((alt) => (
              <span
                key={alt}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
              >
                {alt}
              </span>
            ))}
          </div>
        </Section>

        {/* Navigation */}
        <div className="mt-16 flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/tools/${prev.slug}`}
              className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-violet-600 dark:hover:text-violet-400"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              {prev.name}
            </Link>
          ) : <div />}
          {next ? (
            <Link
              href={`/tools/${next.slug}`}
              className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-violet-600 dark:hover:text-violet-400"
            >
              {next.name}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ) : <div />}
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
          >
            ← ดูเครื่องมือทั้งหมด
          </Link>
        </div>
      </main>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section className="animate-slide-up mt-12">
      <h2 className="mb-5 flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
