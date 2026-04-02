import type { Metadata } from "next";
import Link from "next/link";
import { lessons, categories, getDifficultyLabel } from "@/lib/lessons";

export const metadata: Metadata = {
  title: "เรียนรู้ทักษะ Software Development",
  description:
    "เรียนรู้ทักษะที่จำเป็นในสาย Software Development — Git, JavaScript, React, Node.js, SQL, Docker และอีกมากมาย อธิบายง่าย เข้าใจเร็ว",
};

const colorMap: Record<string, string> = {
  orange: "border-orange-200 hover:border-orange-400 dark:border-orange-800 dark:hover:border-orange-500",
  slate: "border-slate-200 hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500",
  indigo: "border-indigo-200 hover:border-indigo-400 dark:border-indigo-800 dark:hover:border-indigo-500",
  blue: "border-blue-200 hover:border-blue-400 dark:border-blue-800 dark:hover:border-blue-500",
  yellow: "border-yellow-200 hover:border-yellow-400 dark:border-yellow-800 dark:hover:border-yellow-500",
  cyan: "border-cyan-200 hover:border-cyan-400 dark:border-cyan-800 dark:hover:border-cyan-500",
  teal: "border-teal-200 hover:border-teal-400 dark:border-teal-800 dark:hover:border-teal-500",
  green: "border-emerald-200 hover:border-emerald-400 dark:border-emerald-800 dark:hover:border-emerald-500",
  violet: "border-violet-200 hover:border-violet-400 dark:border-violet-800 dark:hover:border-violet-500",
  purple: "border-purple-200 hover:border-purple-400 dark:border-purple-800 dark:hover:border-purple-500",
  sky: "border-sky-200 hover:border-sky-400 dark:border-sky-800 dark:hover:border-sky-500",
  amber: "border-amber-200 hover:border-amber-400 dark:border-amber-800 dark:hover:border-amber-500",
  pink: "border-pink-200 hover:border-pink-400 dark:border-pink-800 dark:hover:border-pink-500",
  rose: "border-rose-200 hover:border-rose-400 dark:border-rose-800 dark:hover:border-rose-500",
};

const difficultyColor: Record<string, string> = {
  beginner: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  advanced: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
};

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Hero */}
        <header className="animate-fade-in text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            เรียนรู้ทักษะ Dev
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            ทักษะที่จำเป็นสำหรับสาย Software Development — อธิบายง่าย เข้าใจเร็ว
            เหมือนมีอาจารย์ส่วนตัว เรียนได้ตามจังหวะของตัวเอง
          </p>
        </header>

        {/* Stats */}
        <div className="animate-slide-up mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">{lessons.length}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">บทเรียน</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{categories.length}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">หมวดหมู่</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">ฟรี</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">ทุกบทเรียน</p>
          </div>
        </div>

        {/* Category Sections */}
        {categories.map((cat) => {
          const catLessons = lessons.filter((l) => l.category === cat.key);
          if (catLessons.length === 0) return null;

          return (
            <section key={cat.key} className="mt-16">
              <h2 className="animate-fade-in mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
                <span className="text-3xl">{cat.icon}</span>
                {cat.label}
                <span className="text-base font-normal text-slate-400 dark:text-slate-500">
                  {cat.labelEn}
                </span>
              </h2>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {catLessons.map((lesson) => (
                  <Link
                    key={lesson.slug}
                    href={`/learn/${lesson.slug}`}
                    className={`group rounded-2xl border-2 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800/50 ${colorMap[lesson.color] ?? "border-slate-200 dark:border-slate-700"}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-4xl">{lesson.icon}</span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${difficultyColor[lesson.difficulty]}`}
                      >
                        {getDifficultyLabel(lesson.difficulty)}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                      {lesson.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {lesson.titleEn}
                    </p>
                    <p className="mt-3 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                      {lesson.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        ⏱ {lesson.estimatedTime}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-transform group-hover:translate-x-1 dark:text-violet-400">
                        เริ่มเรียน →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Footer CTA */}
        <section className="animate-slide-up mt-20 rounded-2xl border border-violet-200/60 bg-gradient-to-r from-violet-100/50 to-rose-100/50 p-8 text-center shadow-sm dark:border-violet-800/50 dark:from-violet-950/50 dark:to-rose-950/50">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            พร้อมเริ่มต้นเส้นทาง Developer หรือยัง?
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            ดูสายอาชีพที่เหมาะกับคุณ แล้วเริ่มเรียนทักษะที่ต้องใช้
          </p>
          <Link
            href="/careers"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
          >
            ดูสายอาชีพทั้งหมด →
          </Link>
        </section>
      </main>
    </div>
  );
}
