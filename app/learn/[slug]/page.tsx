import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  lessons,
  getLessonBySlug,
  getAllLessonSlugs,
  getDifficultyLabel,
} from "@/lib/lessons";
import type { Lesson, CodeExample, Concept, Step } from "@/lib/lessons";

export function generateStaticParams() {
  return getAllLessonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} — เรียนรู้`,
    description: lesson.description,
  };
}

const difficultyColor: Record<string, string> = {
  beginner: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  advanced: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
};

export default async function LessonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();

  const idx = lessons.findIndex((l) => l.slug === slug);
  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Back */}
        <Link
          href="/learn"
          className="animate-fade-in mb-8 inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-colors hover:text-violet-800 dark:text-violet-400 dark:hover:text-violet-300"
        >
          ← กลับหน้าเรียนรู้
        </Link>

        {/* Hero */}
        <header className="animate-fade-in">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-6xl">{lesson.icon}</span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${difficultyColor[lesson.difficulty]}`}
                >
                  {getDifficultyLabel(lesson.difficulty)}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                  ⏱ {lesson.estimatedTime}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                  {lesson.categoryIcon} {lesson.category}
                </span>
              </div>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {lesson.title}
              </h1>
              <p className="mt-1 text-lg font-medium text-slate-500 dark:text-slate-400">
                {lesson.titleEn}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
            {lesson.description}
          </p>
        </header>

        {/* Content */}
        <div className="mt-12 space-y-8">
          {/* What Is It */}
          <Section title="มันคืออะไร?" icon="🤔" delay="1">
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              {lesson.whatIsIt}
            </p>
          </Section>

          {/* Why Learn */}
          <Section title="ทำไมต้องเรียน?" icon="💡" delay="2">
            <ul className="space-y-3">
              {lesson.whyLearn.map((reason, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                    ✓
                  </span>
                  {reason}
                </li>
              ))}
            </ul>
          </Section>

          {/* Key Concepts */}
          <Section title="หัวใจสำคัญที่ต้องรู้" icon="🎯" delay="3">
            <div className="grid gap-4 sm:grid-cols-2">
              {lesson.keyConcepts.map((concept, i) => (
                <ConceptCard key={i} concept={concept} />
              ))}
            </div>
          </Section>

          {/* Getting Started */}
          <Section title="เริ่มต้นยังไง?" icon="🚀" delay="4">
            <ol className="space-y-4">
              {lesson.gettingStarted.map((step, i) => (
                <StepItem key={i} step={step} index={i} />
              ))}
            </ol>
          </Section>

          {/* Code Examples */}
          {lesson.codeExamples.length > 0 && (
            <Section title="ตัวอย่างโค้ด" icon="💻" delay="5">
              <div className="space-y-6">
                {lesson.codeExamples.map((example, i) => (
                  <CodeBlock key={i} example={example} />
                ))}
              </div>
            </Section>
          )}

          {/* Practice Projects */}
          <Section title="โปรเจกต์ฝึกมือ" icon="🛠️" delay="6">
            <div className="grid gap-3 sm:grid-cols-2">
              {lesson.practiceProjects.map((project, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-slate-200/60 bg-white/50 p-4 dark:border-slate-700/50 dark:bg-slate-800/30"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-sm font-bold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                    {i + 1}
                  </span>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{project}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Tips */}
          <Section title="Tips จากอาจารย์" icon="🎓" delay="6">
            <ul className="space-y-3">
              {lesson.tips.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-slate-700 dark:text-slate-300"
                >
                  <span className="mt-0.5 text-lg">💡</span>
                  {tip}
                </li>
              ))}
            </ul>
          </Section>

          {/* Related Careers */}
          {lesson.relatedCareers.length > 0 && (
            <Section title="สายอาชีพที่ใช้ทักษะนี้" icon="👔" delay="6">
              <div className="flex flex-wrap gap-2">
                {lesson.relatedCareers.map((careerSlug) => (
                  <Link
                    key={careerSlug}
                    href={`/careers/${careerSlug}`}
                    className="rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 transition-colors hover:bg-violet-200 dark:bg-violet-500/15 dark:text-violet-300 dark:hover:bg-violet-500/25"
                  >
                    {careerSlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} →
                  </Link>
                ))}
              </div>
            </Section>
          )}
        </div>

        {/* Prev / Next */}
        <nav className="animate-slide-up mt-14 grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/learn/${prev.slug}`}
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
              href={`/learn/${next.slug}`}
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

function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-700/30 dark:bg-slate-700/20">
      <div className="flex items-center gap-2">
        <span className="text-xl">{concept.icon}</span>
        <h3 className="font-semibold text-slate-900 dark:text-white">{concept.title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {concept.description}
      </p>
    </div>
  );
}

function StepItem({ step, index }: { step: Step; index: number }) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white dark:bg-violet-500">
        {index + 1}
      </span>
      <div>
        <p className="font-semibold text-slate-900 dark:text-white">{step.step}</p>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{step.detail}</p>
      </div>
    </li>
  );
}

function CodeBlock({ example }: { example: CodeExample }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
        {example.title}
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/60 bg-slate-900 p-4 dark:border-slate-700/50">
        <pre className="text-sm leading-relaxed text-slate-100">
          <code>{example.code}</code>
        </pre>
      </div>
      <p className="mt-3 rounded-lg bg-blue-50 p-3 text-sm text-blue-800 dark:bg-blue-500/10 dark:text-blue-300">
        💡 {example.explanation}
      </p>
    </div>
  );
}
