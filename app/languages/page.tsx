import type { Metadata } from "next";
import Link from "next/link";
import { languages, tierInfo } from "@/lib/languages";

export const metadata: Metadata = {
  title: "ภาษาโปรแกรมที่ต้องรู้ — Programming Languages",
  description:
    "รวมภาษาโปรแกรมที่สำคัญที่สุดในโลก เรียงตามความสำคัญ อธิบายเป็นภาษาไทย พร้อม code ตัวอย่าง",
};

const demandColor: Record<string, string> = {
  "สูงมาก": "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  "สูง": "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  "ปานกลาง": "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  "เฉพาะทาง": "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
};

const tierOrder = ["must-know", "high-demand", "specialized", "rising-star"] as const;

export default function LanguagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Hero */}
        <header className="animate-fade-in text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            ภาษาโปรแกรมที่ Dev ต้องรู้
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            รวมภาษาโปรแกรมที่สำคัญที่สุดในโลก เรียงจาก &quot;ต้องรู้&quot; ไปจนถึง
            &quot;ดาวรุ่ง&quot; — พร้อมอธิบายว่าใช้ทำอะไร ทำไมต้องเรียน
            และตัวอย่างโค้ดจริง
          </p>
        </header>

        {/* Stats */}
        <div className="animate-slide-up mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">
              {languages.length}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">ภาษา</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">4</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">ระดับความสำคัญ</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">Code</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">ตัวอย่างโค้ดจริง</p>
          </div>
        </div>

        {/* Tier Legend */}
        <div className="animate-slide-up mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tierOrder.map((key) => {
            const t = tierInfo[key];
            return (
              <div
                key={key}
                className={`rounded-xl border-2 ${t.color} bg-white/60 p-4 dark:bg-slate-800/40`}
              >
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                  {t.icon} {t.label}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {t.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tier Sections */}
        {tierOrder.map((tier) => {
          const tierLangs = languages.filter((l) => l.tier === tier);
          if (tierLangs.length === 0) return null;
          const t = tierInfo[tier];

          return (
            <section key={tier} className="mt-16">
              <h2 className="animate-fade-in mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
                <span className="text-3xl">{t.icon}</span>
                {t.label}
                <span className="text-base font-normal text-slate-400 dark:text-slate-500">
                  {t.labelEn}
                </span>
              </h2>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {tierLangs.map((lang) => (
                  <Link
                    key={lang.slug}
                    href={`/languages/${lang.slug}`}
                    className={`group flex flex-col rounded-2xl border-2 ${t.color} bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800/50`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-4xl">{lang.icon}</span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${demandColor[lang.demandLevel]}`}
                      >
                        {lang.demandLevel}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                      {lang.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                      {lang.year} &middot; {lang.creator.split("(")[0].trim()}
                    </p>
                    <p className="mt-3 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                      {lang.tagline}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {lang.usedFor.slice(0, 3).map((u) => (
                        <span
                          key={u}
                          className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400"
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-4">
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        {lang.salary}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-transform group-hover:translate-x-1 dark:text-violet-400">
                        ดูรายละเอียด →
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
            เลือกภาษาแล้ว อยากรู้ว่าเรียนอะไรต่อ?
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            ดูบทเรียนทั้งหมดที่อธิบายทักษะตั้งแต่พื้นฐานจนถึงขั้นสูง
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
            >
              ดูบทเรียน →
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-300 px-6 py-3 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-50 dark:border-violet-700 dark:text-violet-300 dark:hover:bg-violet-500/10"
            >
              ดูสายอาชีพ →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
