import type { Metadata } from "next";
import Link from "next/link";
import { careerSalaries, salaryCategories, benefitsGuide, salaryFactors } from "@/lib/salaries";

export const metadata: Metadata = {
  title: "เงินเดือนสาย Tech ในไทย — Developer, Data, DevOps, PM",
  description: "ข้อมูลเงินเดือนจริงของสาย tech ในไทย แยกตามตำแหน่งและระดับประสบการณ์ ตั้งแต่ Intern จนถึง VP",
};

const levelColors: Record<string, string> = {
  "Intern / Trainee": "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
  Junior: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  "Mid-level": "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  Senior: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  "Staff / Principal": "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  "Staff+": "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  "Associate PM": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  "Product Manager": "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  "Senior PM / Group PM": "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  "Team Lead": "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  "Engineering Manager": "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  "Director / VP": "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
  "Scrum Master": "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  "Senior SM": "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  "Agile Coach": "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  "Senior / SDET": "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
};

function getBarWidth(max: number): string {
  const highest = 350000;
  return `${Math.min((max / highest) * 100, 100)}%`;
}

export default function SalariesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Hero */}
        <header className="animate-fade-in text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            เงินเดือนสาย Tech ในไทย
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            ข้อมูลเงินเดือนจริงแยกตามตำแหน่งและระดับประสบการณ์ —
            จาก Intern จนถึง VP of Engineering พร้อมสวัสดิการและปัจจัยที่มีผลต่อเงินเดือน
          </p>
          <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">
            * ข้อมูลอ้างอิงจากตลาดงานในกรุงเทพฯ ปี 2024-2025 อาจแตกต่างตามบริษัทและภูมิภาค
          </p>
        </header>

        {/* Stats */}
        <div className="animate-slide-up mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">{careerSalaries.length}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">ตำแหน่ง</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{salaryCategories.length}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">สายงาน</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">THB</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">สกุลเงินบาท</p>
          </div>
        </div>

        {/* Salary by Category */}
        {salaryCategories.map((cat) => {
          const roles = careerSalaries.filter((r) => r.category === cat.key);
          if (roles.length === 0) return null;

          return (
            <section key={cat.key} className="mt-16">
              <h2 className="animate-fade-in mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
                <span className="text-3xl">{cat.icon}</span>
                {cat.label}
              </h2>

              <div className="space-y-6">
                {roles.map((role) => (
                  <div
                    key={role.role}
                    className="rounded-2xl border-2 border-slate-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/50"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {role.icon} {role.role}
                        </h3>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{role.description}</p>
                      </div>
                    </div>

                    {/* Salary bars */}
                    <div className="mt-5 space-y-4">
                      {role.levels.map((lvl) => (
                        <div key={lvl.level}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${levelColors[lvl.level] ?? "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"}`}>
                                {lvl.level}
                              </span>
                              <span className="text-xs text-slate-500 dark:text-slate-400">{lvl.years}</span>
                            </div>
                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                              {lvl.salaryRange} <span className="text-xs font-normal text-slate-400">฿/เดือน</span>
                            </span>
                          </div>
                          <div className="mt-1.5 h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700/50">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-rose-500 transition-all duration-500"
                              style={{ width: getBarWidth(lvl.salaryMax) }}
                            />
                          </div>
                          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{lvl.description}</p>
                        </div>
                      ))}
                    </div>

                    {/* Skills per level */}
                    <details className="mt-4 group">
                      <summary className="cursor-pointer text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400">
                        ดูทักษะที่ต้องมีในแต่ละระดับ ▾
                      </summary>
                      <div className="mt-3 space-y-3">
                        {role.levels.map((lvl) => (
                          <div key={lvl.level} className="rounded-lg bg-slate-50 p-3 dark:bg-slate-900/40">
                            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">{lvl.level}</p>
                            <div className="mt-1.5 flex flex-wrap gap-1.5">
                              {lvl.skills.map((skill) => (
                                <span key={skill} className="rounded-md bg-white px-2 py-0.5 text-xs text-slate-600 ring-1 ring-slate-200/60 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </details>

                    {/* Growth Path */}
                    <div className="mt-4 rounded-lg border border-slate-200/60 bg-slate-50/50 p-3 dark:border-slate-700/40 dark:bg-slate-900/30">
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Career Path</p>
                      <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{role.growthPath}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Salary Factors */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">📊</span>
            ปัจจัยที่มีผลต่อเงินเดือน
          </h2>
          <div className="space-y-3">
            {salaryFactors.map((sf) => (
              <div
                key={sf.factor}
                className="rounded-xl border-l-4 border-violet-400 bg-white/70 py-3 pl-4 pr-4 dark:border-violet-500 dark:bg-slate-800/50"
              >
                <p className="text-sm font-bold text-slate-900 dark:text-white">{sf.factor}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{sf.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">🎁</span>
            สวัสดิการที่นอกเหนือจากเงินเดือน
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefitsGuide.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border-2 border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/50"
              >
                <span className="text-3xl">{b.icon}</span>
                <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{b.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{b.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Negotiation Tips */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">💰</span>
            Tips เจรจาเงินเดือน
          </h2>
          <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-6 dark:border-amber-800 dark:bg-amber-500/5">
            <ul className="space-y-3">
              {[
                "ศึกษา market rate ก่อน — ดูจาก Glassdoor, Levels.fyi, JobsDB",
                "อย่าบอกเงินเดือนปัจจุบัน — ถามว่า \"budget ของตำแหน่งนี้อยู่ที่เท่าไหร่?\"",
                "มีหลาย offer = leverage — สมัครหลายที่พร้อมกัน",
                "เจรจาทั้ง package ไม่ใช่แค่ base salary — bonus, stock, WFH, leave, learning budget",
                "แสดงคุณค่า — บอกว่าคุณทำอะไรให้บริษัทเก่า impact อะไร ไม่ใช่แค่ \"ผมอยากได้เท่านี้\"",
                "ขอเวลาคิด — ไม่ต้องตอบรับ offer ทันที ขอ 2-3 วันได้",
                "Counter offer ได้ — ถ้า offer ต่ำกว่าที่คาดหวัง บอก range ที่ต้องการพร้อมเหตุผล",
                "เขียนลง offer letter — ทุกอย่างที่ตกลงกันต้องอยู่ในเอกสารลายลักษณ์อักษร",
              ].map((tip, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
                  <span className="mt-0.5 shrink-0 font-bold text-amber-600 dark:text-amber-400">{i + 1}.</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="animate-slide-up mt-20 rounded-2xl border border-violet-200/60 bg-gradient-to-r from-violet-100/50 to-rose-100/50 p-8 text-center shadow-sm dark:border-violet-800/50 dark:from-violet-950/50 dark:to-rose-950/50">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            พร้อมเริ่มต้นเส้นทาง Tech หรือยัง?
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            เริ่มจากฝึกงาน เรียนรู้ทักษะ สร้าง portfolio แล้วก้าวไปสู่สายอาชีพที่ต้องการ
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/trainee"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
            >
              ดูโปรแกรมฝึกงาน →
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-300 px-6 py-3 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-50 dark:border-violet-700 dark:text-violet-300 dark:hover:bg-violet-500/10"
            >
              เรียนรู้ทักษะ →
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
