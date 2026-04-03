import type { Metadata } from "next";
import Link from "next/link";
import { domains, getDifficultyLabel } from "@/lib/techstacks";

export const metadata: Metadata = {
  title: "Tech Stack ที่ต้องรู้แต่ละสาย — Frontend, Backend, Mobile, Data, DevOps",
  description: "สรุป Tech Stack ที่ developer ต้องรู้ในแต่ละสายงาน พร้อม learning path และ project ตัวอย่าง อธิบายเป็นภาษาไทย",
};

const diffColor: Record<string, string> = {
  beginner: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  intermediate: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  advanced: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
};

export default function TechStacksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Hero */}
        <header className="animate-fade-in text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Tech Stack แต่ละสาย
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            สรุปเครื่องมือ ภาษา framework ที่ต้องรู้ในแต่ละสายงาน —
            พร้อม learning path, project ตัวอย่าง, คำแนะนำจากผู้เชี่ยวชาญ
            และข้อผิดพลาดที่มือใหม่มักทำ
          </p>
        </header>

        {/* Stats */}
        <div className="animate-slide-up mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">{domains.length}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">สายงาน</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {domains.reduce((a, d) => a + d.layers.reduce((b, l) => b + l.tools.length, 0), 0)}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">เครื่องมือ</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">Expert</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">คำแนะนำจริง</p>
          </div>
        </div>

        {/* How to use */}
        <section className="animate-slide-up mt-12">
          <div className="rounded-2xl border-2 border-violet-200/60 bg-violet-50/50 p-6 dark:border-violet-800/50 dark:bg-violet-500/5">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              ใช้หน้านี้อย่างไร?
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2"><span className="text-violet-500">1.</span>เลือกสายงานที่สนใจ — ดูว่าต้องเรียนอะไรบ้าง</li>
              <li className="flex gap-2"><span className="text-violet-500">2.</span>ดู learning path — เรียนตามลำดับจากง่ายไปยาก</li>
              <li className="flex gap-2"><span className="text-violet-500">3.</span>ทำ project ตัวอย่าง — ใส่ portfolio สมัครงานได้เลย</li>
              <li className="flex gap-2"><span className="text-violet-500">4.</span>อ่าน common mistakes — หลีกเลี่ยงข้อผิดพลาดที่มือใหม่ทำ</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="flex items-center gap-1 rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700 dark:bg-rose-500/15 dark:text-rose-300">
                <span className="h-2 w-2 rounded-full bg-rose-500" /> ต้องรู้ (Must)
              </span>
              <span className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/15 dark:text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-500" /> แนะนำ (Recommended)
              </span>
              <span className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                <span className="h-2 w-2 rounded-full bg-slate-400" /> ทางเลือก (Optional)
              </span>
            </div>
          </div>
        </section>

        {/* Domain Cards */}
        <section className="mt-14">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map((domain) => {
              const mustCount = domain.layers.reduce(
                (a, l) => a + l.tools.filter((t) => t.level === "must").length,
                0,
              );
              const totalTools = domain.layers.reduce((a, l) => a + l.tools.length, 0);

              return (
                <Link
                  key={domain.slug}
                  href={`/techstacks/${domain.slug}`}
                  className={`group flex flex-col rounded-2xl border-2 ${domain.color} bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800/50`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-4xl">{domain.icon}</span>
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${diffColor[domain.difficulty]}`}>
                      {getDifficultyLabel(domain.difficulty)}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                    {domain.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                    {domain.tagline}
                  </p>

                  <div className="mt-3 grid grid-cols-3 gap-2">
                    <div className="rounded-lg bg-slate-50 px-2 py-1.5 text-center dark:bg-slate-900/40">
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{mustCount}</p>
                      <p className="text-[10px] text-slate-500">ต้องรู้</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 px-2 py-1.5 text-center dark:bg-slate-900/40">
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{totalTools}</p>
                      <p className="text-[10px] text-slate-500">เครื่องมือ</p>
                    </div>
                    <div className="rounded-lg bg-slate-50 px-2 py-1.5 text-center dark:bg-slate-900/40">
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{domain.learningPath.length}</p>
                      <p className="text-[10px] text-slate-500">ขั้นตอน</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      ⏱ {domain.timeToLearn} &middot; 💰 {domain.salaryRange.split("-")[0].trim()}+
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-end pt-4">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-transform group-hover:translate-x-1 dark:text-violet-400">
                      ดูรายละเอียด →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="animate-slide-up mt-20 rounded-2xl border border-violet-200/60 bg-gradient-to-r from-violet-100/50 to-rose-100/50 p-8 text-center shadow-sm dark:border-violet-800/50 dark:from-violet-950/50 dark:to-rose-950/50">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            เลือกสายแล้ว ไปเรียนรู้ทักษะกัน
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            ดูบทเรียนแต่ละทักษะพร้อมตัวอย่างโค้ดและแบบฝึกหัด
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/learn" className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600">
              ดูบทเรียน →
            </Link>
            <Link href="/languages" className="inline-flex items-center gap-2 rounded-xl border border-violet-300 px-6 py-3 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-50 dark:border-violet-700 dark:text-violet-300 dark:hover:bg-violet-500/10">
              ดูภาษาโปรแกรม →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
