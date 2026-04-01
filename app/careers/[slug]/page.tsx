import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { careers, getCareerBySlug, getAllSlugs } from "@/lib/careers";
import type { Career, TechCategory, CareerLevel } from "@/lib/careers";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const career = getCareerBySlug(slug);
  if (!career) return {};
  return {
    title: career.title,
    description: career.description,
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const career = getCareerBySlug(slug);
  if (!career) notFound();

  const idx = careers.findIndex((c) => c.slug === slug);
  const prev = idx > 0 ? careers[idx - 1] : null;
  const next = idx < careers.length - 1 ? careers[idx + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Back */}
        <Link
          href="/careers"
          className="animate-fade-in mb-8 inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-colors hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
        >
          ← กลับไปหน้าสายอาชีพ
        </Link>

        {/* Hero */}
        <header className="animate-fade-in">
          <span className="text-6xl">{career.icon}</span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {career.title}
          </h1>
          <p className="mt-1 text-lg font-medium text-slate-500 dark:text-slate-400">
            {career.titleEn}
          </p>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            {career.description}
          </p>
        </header>

        {/* Content Grid */}
        <div className="mt-12 space-y-8">
          {/* Responsibilities */}
          <Section title="หน้าที่รับผิดชอบ" icon="📌" delay="1">
            <ul className="space-y-2.5">
              {career.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          {/* Skills Row */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Section title="Hard Skills" icon="🛠️" delay="2">
              <SkillTags items={career.hardSkills} variant="hard" />
            </Section>
            <Section title="Soft Skills" icon="💡" delay="3">
              <SkillTags items={career.softSkills} variant="soft" />
            </Section>
          </div>

          {/* Tech Stack */}
          <Section title="Tech Stack / เครื่องมือ" icon="⚡" delay="4">
            <TechStackGrid stacks={career.techStacks} />
          </Section>

          {/* Career Path */}
          <Section title="เส้นทางอาชีพ" icon="🎯" delay="5">
            <CareerTimeline levels={career.careerPath} />
          </Section>

          {/* Tips */}
          <Section title="คำแนะนำสำหรับนักศึกษา" icon="🎓" delay="6">
            <ol className="space-y-3">
              {career.tips.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ol>
          </Section>
        </div>

        {/* Prev / Next Navigation */}
        <nav className="animate-slide-up mt-14 grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/careers/${prev.slug}`}
              className="group rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700/50 dark:bg-slate-800/50"
            >
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                ← ก่อนหน้า
              </span>
              <p className="mt-1 font-semibold text-slate-900 transition-colors group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
                {prev.icon} {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next && (
            <Link
              href={`/careers/${next.slug}`}
              className="group rounded-2xl border border-slate-200/60 bg-white/70 p-5 text-right shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700/50 dark:bg-slate-800/50"
            >
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                ถัดไป →
              </span>
              <p className="mt-1 font-semibold text-slate-900 transition-colors group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400">
                {next.icon} {next.title}
              </p>
            </Link>
          )}
        </nav>
      </main>
    </div>
  );
}

/* ───── Sub-components ───── */

function Section({
  title,
  icon,
  delay,
  children,
}: {
  title: string;
  icon: string;
  delay: string;
  children: React.ReactNode;
}) {
  const animClass =
    {
      "1": "animate-stagger-1",
      "2": "animate-stagger-2",
      "3": "animate-stagger-3",
      "4": "animate-stagger-4",
      "5": "animate-stagger-5",
      "6": "animate-stagger-6",
    }[delay] ?? "animate-slide-up";

  return (
    <div
      className={`${animClass} rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/50`}
    >
      <h2 className="mb-5 flex items-center gap-2.5 text-xl font-semibold text-slate-900 dark:text-white">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function SkillTags({
  items,
  variant,
}: {
  items: string[];
  variant: "hard" | "soft";
}) {
  const cls =
    variant === "hard"
      ? "bg-blue-100 text-blue-800 dark:bg-blue-500/10 dark:text-blue-300"
      : "bg-rose-100 text-rose-800 dark:bg-rose-500/10 dark:text-rose-300";

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((skill, i) => (
        <span
          key={i}
          className={`rounded-full px-3 py-1.5 text-sm font-medium ${cls}`}
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

function TechStackGrid({ stacks }: { stacks: TechCategory[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stacks.map((cat) => (
        <div key={cat.category}>
          <h3 className="mb-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
            {cat.category}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {cat.items.map((item) => (
              <span
                key={item}
                className="rounded-lg bg-slate-100 px-2.5 py-1 text-sm text-slate-700 dark:bg-slate-700/60 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CareerTimeline({ levels }: { levels: CareerLevel[] }) {
  return (
    <div className="relative flex flex-col gap-0 sm:flex-row sm:items-start sm:justify-between">
      {/* Connecting line */}
      <div className="absolute left-3 top-3 hidden h-0.5 w-[calc(100%-24px)] bg-gradient-to-r from-violet-300 to-rose-300 dark:from-violet-700 dark:to-rose-700 sm:block" />
      <div className="absolute left-3 top-0 block h-full w-0.5 bg-gradient-to-b from-violet-300 to-rose-300 dark:from-violet-700 dark:to-rose-700 sm:hidden" />

      {levels.map((level, i) => (
        <div
          key={level.level}
          className="relative flex items-start gap-4 pb-8 last:pb-0 sm:flex-col sm:items-center sm:gap-2 sm:pb-0"
        >
          <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white ring-4 ring-white dark:bg-violet-500 dark:ring-slate-800">
            {i + 1}
          </div>
          <div className="sm:mt-3 sm:text-center">
            <p className="font-semibold text-slate-900 dark:text-white">
              {level.title}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {level.years}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
