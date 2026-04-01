import type { Metadata } from "next";
import Link from "next/link";
import { careers, generalSkills } from "@/lib/careers";

export const metadata: Metadata = {
  title: "สายอาชีพ Software Development",
  description:
    "รวมทุกสายอาชีพในวงการ Software Development — PO, PM, BA, SA, Developer, DevOps, UX/UI Designer, Data Engineer, AI Engineer",
};

const colorMap: Record<string, string> = {
  violet: "border-violet-200 hover:border-violet-400 dark:border-violet-800 dark:hover:border-violet-500",
  blue: "border-blue-200 hover:border-blue-400 dark:border-blue-800 dark:hover:border-blue-500",
  amber: "border-amber-200 hover:border-amber-400 dark:border-amber-800 dark:hover:border-amber-500",
  cyan: "border-cyan-200 hover:border-cyan-400 dark:border-cyan-800 dark:hover:border-cyan-500",
  emerald: "border-emerald-200 hover:border-emerald-400 dark:border-emerald-800 dark:hover:border-emerald-500",
  orange: "border-orange-200 hover:border-orange-400 dark:border-orange-800 dark:hover:border-orange-500",
  pink: "border-pink-200 hover:border-pink-400 dark:border-pink-800 dark:hover:border-pink-500",
  teal: "border-teal-200 hover:border-teal-400 dark:border-teal-800 dark:hover:border-teal-500",
  rose: "border-rose-200 hover:border-rose-400 dark:border-rose-800 dark:hover:border-rose-500",
};

const staggerClass = [
  "animate-stagger-1",
  "animate-stagger-2",
  "animate-stagger-3",
  "animate-stagger-4",
  "animate-stagger-5",
  "animate-stagger-6",
  "animate-stagger-7",
  "animate-stagger-8",
  "animate-stagger-9",
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Hero */}
        <header className="animate-fade-in text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            สายอาชีพใน Software Development
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            เส้นทางอาชีพในวงการซอฟต์แวร์มีหลากหลาย ไม่ได้มีแค่เขียนโค้ดอย่างเดียว
            สำรวจแต่ละสายงานเพื่อค้นหาเส้นทางที่เหมาะกับตัวคุณ
          </p>
        </header>

        {/* General Skills */}
        <section className="animate-slide-up mt-14">
          <h2 className="mb-6 text-center text-2xl font-bold text-slate-900 dark:text-white">
            ทักษะพื้นฐานที่ทุกคนควรมี
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/50">
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                🛠️ Hard Skills
              </h3>
              <ul className="space-y-2">
                {generalSkills.hardSkills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-800/50">
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                💡 Soft Skills
              </h3>
              <ul className="space-y-2">
                {generalSkills.softSkills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Career Cards Grid */}
        <section className="mt-16">
          <h2 className="animate-fade-in mb-8 text-center text-2xl font-bold text-slate-900 dark:text-white">
            เลือกสายงานที่สนใจ
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {careers.map((career, i) => (
              <Link
                key={career.slug}
                href={`/careers/${career.slug}`}
                className={`${staggerClass[i] ?? ""} group rounded-2xl border-2 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800/50 ${colorMap[career.color] ?? "border-slate-200 dark:border-slate-700"}`}
              >
                <span className="text-4xl">{career.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {career.title}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {career.titleEn}
                </p>
                <p className="mt-3 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                  {career.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-transform group-hover:translate-x-1 dark:text-violet-400">
                  ดูรายละเอียด →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
