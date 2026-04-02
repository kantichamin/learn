import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { languages, tierInfo, getLanguageBySlug } from "@/lib/languages";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return languages.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lang = getLanguageBySlug(slug);
  if (!lang) return { title: "ไม่พบภาษา" };
  return {
    title: `${lang.name} — ภาษาโปรแกรม`,
    description: lang.tagline,
  };
}

const demandColor: Record<string, string> = {
  "สูงมาก": "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  "สูง": "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  "ปานกลาง": "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  "เฉพาะทาง": "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
};

export default async function LanguageDetailPage({ params }: Props) {
  const { slug } = await params;
  const lang = getLanguageBySlug(slug);
  if (!lang) notFound();

  const tier = tierInfo[lang.tier];
  const langIndex = languages.findIndex((l) => l.slug === slug);
  const prev = langIndex > 0 ? languages[langIndex - 1] : null;
  const next = langIndex < languages.length - 1 ? languages[langIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Breadcrumb */}
        <nav className="animate-fade-in mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/languages" className="hover:text-violet-600 dark:hover:text-violet-400">
            ภาษาโปรแกรม
          </Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-300">{lang.name}</span>
        </nav>

        {/* Header */}
        <header className="animate-fade-in">
          <div className="flex flex-wrap items-start gap-4">
            <span className="text-6xl">{lang.icon}</span>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {lang.name}
              </h1>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">{lang.tagline}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${demandColor[lang.demandLevel]}`}>
                  Demand: {lang.demandLevel}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  {tier.icon} {tier.label}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  ปี {lang.year}
                </span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {lang.description}
          </p>
        </header>

        {/* Quick Info */}
        <div className="animate-slide-up mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard label="ผู้สร้าง" value={lang.creator} />
          <InfoCard label="Typing" value={lang.typing} />
          <InfoCard label="Paradigm" value={lang.paradigm.join(", ")} />
          <InfoCard label="เงินเดือน" value={lang.salary} />
        </div>

        {/* Used For */}
        <Section title="ใช้ทำอะไรได้?" icon="🎯">
          <div className="flex flex-wrap gap-2">
            {lang.usedFor.map((u) => (
              <span
                key={u}
                className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 dark:border-violet-700 dark:bg-violet-500/10 dark:text-violet-300"
              >
                {u}
              </span>
            ))}
          </div>
        </Section>

        {/* Why Learn */}
        <Section title="ทำไมต้องเรียน?" icon="💡">
          <ul className="space-y-3">
            {lang.whyLearn.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <span className="mt-0.5 shrink-0 text-emerald-500">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Popular Frameworks */}
        <Section title="Framework / Library ยอดนิยม" icon="📦">
          <div className="flex flex-wrap gap-2">
            {lang.popularFrameworks.map((f) => (
              <span
                key={f}
                className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700/60"
              >
                {f}
              </span>
            ))}
          </div>
        </Section>

        {/* Hello World */}
        <Section title="Hello World" icon="👋">
          <div className="overflow-hidden rounded-xl bg-slate-900 p-5">
            <pre className="overflow-x-auto text-sm text-slate-300">
              <code>{lang.helloWorld}</code>
            </pre>
          </div>
        </Section>

        {/* Code Example */}
        <Section title={`ตัวอย่างโค้ด: ${lang.codeExample.title}`} icon="💻">
          <div className="overflow-hidden rounded-xl bg-slate-900">
            <div className="border-b border-slate-700/60 px-5 py-3">
              <p className="text-xs font-medium text-slate-400">{lang.codeExample.title}</p>
            </div>
            <div className="p-5">
              <pre className="overflow-x-auto text-sm leading-relaxed text-slate-300">
                <code>{lang.codeExample.code}</code>
              </pre>
            </div>
          </div>
        </Section>

        {/* Pros & Cons */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-6 dark:border-emerald-800 dark:bg-emerald-500/5">
            <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-700 dark:text-emerald-300">
              <span>👍</span> ข้อดี
            </h3>
            <ul className="mt-4 space-y-2.5">
              {lang.pros.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm text-emerald-800 dark:text-emerald-200">
                  <span className="shrink-0">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/50 p-6 dark:border-rose-800 dark:bg-rose-500/5">
            <h3 className="flex items-center gap-2 text-lg font-bold text-rose-700 dark:text-rose-300">
              <span>👎</span> ข้อเสีย
            </h3>
            <ul className="mt-4 space-y-2.5">
              {lang.cons.map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-rose-800 dark:text-rose-200">
                  <span className="shrink-0">-</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related Careers */}
        <Section title="สายอาชีพที่เกี่ยวข้อง" icon="💼">
          <div className="flex flex-wrap gap-2">
            {lang.relatedCareers.map((career) => (
              <span
                key={career}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
              >
                {career}
              </span>
            ))}
          </div>
        </Section>

        {/* Navigation */}
        <div className="mt-16 flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/languages/${prev.slug}`}
              className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-violet-600 dark:hover:text-violet-400"
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              {prev.icon} {prev.name}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/languages/${next.slug}`}
              className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-violet-600 dark:hover:text-violet-400"
            >
              {next.icon} {next.name}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/languages"
            className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
          >
            ← ดูภาษาทั้งหมด
          </Link>
        </div>
      </main>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/60 p-4 dark:border-slate-700/40 dark:bg-slate-800/40">
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</p>
    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
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
