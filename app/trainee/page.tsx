import type { Metadata } from "next";
import Link from "next/link";
import { traineePrograms, preparationTips, networkingChannels, programTypes } from "@/lib/trainee";

export const metadata: Metadata = {
  title: "โปรแกรม Trainee / ฝึกงาน Tech ในไทย",
  description: "คู่มือเข้าโปรแกรม trainee และฝึกงานสาย tech ในบริษัทไทย — เตรียมตัวอย่างไร สมัครที่ไหน สร้าง connection อย่างไร",
};

export default function TraineePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Hero */}
        <header className="animate-fade-in text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Trainee & ฝึกงาน Tech ในไทย
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            คู่มือฉบับสมบูรณ์สำหรับนักศึกษาและจบใหม่ — สมัครที่ไหน เตรียมตัวอย่างไร
            สร้าง connection ยังไง ทักษะอะไรที่บริษัทต้องการจริงๆ
          </p>
        </header>

        {/* Stats */}
        <div className="animate-slide-up mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">{traineePrograms.length}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">โปรแกรม</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{preparationTips.length}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">เคล็ดลับ</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">{networkingChannels.length}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">ช่องทาง Network</p>
          </div>
        </div>

        {/* Why Trainee? */}
        <section className="animate-slide-up mt-16">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">🎯</span>
            ทำไมต้องฝึกงาน / เข้า Trainee Program?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "💼", title: "ประสบการณ์จริง", desc: "ได้ทำงานกับโค้ดจริง ระบบจริง ไม่ใช่แค่ทำ project ในห้องเรียน" },
              { icon: "👨‍🏫", title: "มี Mentor สอน", desc: "Senior Developer คอย guide, code review, สอน best practices" },
              { icon: "🤝", title: "สร้าง Connection", desc: "รู้จักคนในวงการ ได้ reference สำหรับสมัครงานจริง" },
              { icon: "📝", title: "ใส่ Resume ได้", desc: "ประสบการณ์ฝึกงานทำให้ resume ดูดีมาก เหนือกว่าคนที่ไม่มี" },
              { icon: "🎓", title: "โอกาสบรรจุ", desc: "หลายบริษัทเปิดรับพนักงานจาก trainee โดยตรง ไม่ต้องสมัครใหม่" },
              { icon: "🧭", title: "หาทิศทาง", desc: "ลองทำงานจริง เพื่อรู้ว่าชอบสาย frontend, backend, data หรืออะไร" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border-2 border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/50"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-2 text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trainee Programs */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">🏢</span>
            โปรแกรม Trainee / ฝึกงาน ที่น่าสนใจ
          </h2>
          <div className="mb-4 flex flex-wrap gap-2">
            {programTypes.map((pt) => (
              <span
                key={pt.key}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200/60 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700/60"
              >
                {pt.icon} {pt.label}
              </span>
            ))}
          </div>
          <div className="space-y-5">
            {traineePrograms.map((prog) => (
              <div
                key={prog.company}
                className="rounded-2xl border-2 border-slate-200/80 bg-white/70 p-6 backdrop-blur-sm transition-all hover:border-violet-300 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/50 dark:hover:border-violet-600"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {prog.icon} {prog.company}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-violet-600 dark:text-violet-400">
                      {prog.programName}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {prog.paid && (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                        มีค่าตอบแทน
                      </span>
                    )}
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      {prog.duration}
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">ค่าตอบแทน</p>
                    <p className="mt-1 text-sm font-bold text-emerald-600 dark:text-emerald-400">{prog.salaryRange}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">ช่วงรับสมัคร</p>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{prog.applyPeriod}</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">ตำแหน่งที่เปิดรับ</p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {prog.positions.map((p) => (
                      <span key={p} className="rounded-md bg-violet-50 px-2 py-0.5 text-xs text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">คุณสมบัติ</p>
                    <ul className="mt-1.5 space-y-1">
                      {prog.requirements.map((r, i) => (
                        <li key={i} className="flex gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <span className="text-slate-400">•</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">สิ่งที่ได้รับ</p>
                    <ul className="mt-1.5 space-y-1">
                      {prog.benefits.map((b, i) => (
                        <li key={i} className="flex gap-2 text-xs text-slate-600 dark:text-slate-400">
                          <span className="text-emerald-500">✓</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href={prog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
                  >
                    ดูรายละเอียดเพิ่มเติม →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Preparation Tips */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">🚀</span>
            เตรียมตัวอย่างไรให้ได้รับเลือก
          </h2>
          <div className="space-y-6">
            {preparationTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-2xl border-2 border-slate-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/50"
              >
                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                  <span className="text-2xl">{tip.icon}</span>
                  {tip.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {tip.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      <span className="mt-0.5 shrink-0 text-violet-500">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Networking */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">🌐</span>
            สร้าง Connection — รู้จักคนในวงการ
          </h2>
          <p className="mb-6 text-base text-slate-600 dark:text-slate-400">
            ในวงการ tech &quot;รู้จักใคร&quot; สำคัญพอๆ กับ &quot;รู้อะไร&quot; —
            การเข้า community, ไป meetup, ทำ open-source ช่วยให้ได้งานเร็วขึ้นและเรียนรู้เร็วขึ้นมาก
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {networkingChannels.map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border-2 border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm transition-all hover:border-violet-300 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/50 dark:hover:border-violet-600"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{ch.name}</h3>
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-400">
                    {ch.type}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{ch.description}</p>
                <p className="mt-3 text-xs font-medium text-violet-600 transition-transform group-hover:translate-x-1 dark:text-violet-400">
                  เข้าไปดู →
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-16">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">📅</span>
            Timeline แนะนำ — วางแผนล่วงหน้า
          </h2>
          <div className="space-y-4">
            {[
              { period: "ปี 1-2 มหาวิทยาลัย", icon: "📖", items: ["เรียนพื้นฐาน CS, เขียนโปรแกรม", "ทำโปรเจกต์ส่วนตัว 1-2 ชิ้น", "สร้าง GitHub account เริ่ม commit", "เข้า community / Discord group"] },
              { period: "ปี 3 (ก่อนฝึกงาน)", icon: "🎯", items: ["ฝึก LeetCode 30-50 ข้อ Easy", "ทำ portfolio website", "สร้าง LinkedIn profile ให้สมบูรณ์", "ไป meetup / hackathon 1-2 ครั้ง", "ศึกษาบริษัทที่สนใจ เตรียมสมัคร"] },
              { period: "ปี 3-4 (สมัครฝึกงาน)", icon: "📮", items: ["สมัคร trainee program ม.ค.-มี.ค. (รอบ summer)", "เตรียม coding test + สัมภาษณ์", "สมัครหลายที่ อย่ารอที่เดียว", "ฝึกสัมภาษณ์กับเพื่อน (mock interview)"] },
              { period: "ระหว่างฝึกงาน", icon: "💪", items: ["ขยัน ถาม เรียนรู้ ทำตัวเป็น sponge", "จด note สิ่งที่เรียนรู้ทุกวัน", "ขอ feedback จาก mentor สม่ำเสมอ", "สร้าง connection กับคนในทีม", "ถ้าทำดี → อาจได้ offer งานเลย"] },
              { period: "หลังจบ (หางานจริง)", icon: "🎓", items: ["อัปเดต resume + portfolio ด้วยประสบการณ์ฝึกงาน", "ใช้ connection ที่สร้างไว้ ขอ referral", "สมัครหลายบริษัท เจรจาเงินเดือน", "เตรียม system design interview สำหรับบริษัทใหญ่"] },
            ].map((step) => (
              <div
                key={step.period}
                className="rounded-2xl border-2 border-slate-200/80 bg-white/70 p-5 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/50"
              >
                <h3 className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
                  <span className="text-xl">{step.icon}</span>
                  {step.period}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="text-violet-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="animate-slide-up mt-20 rounded-2xl border border-violet-200/60 bg-gradient-to-r from-violet-100/50 to-rose-100/50 p-8 text-center shadow-sm dark:border-violet-800/50 dark:from-violet-950/50 dark:to-rose-950/50">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            อยากรู้ว่าแต่ละสายได้เงินเท่าไหร่?
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            ดูข้อมูลเงินเดือนจริงของสาย tech ในไทย ตั้งแต่ Junior จนถึง Senior
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/salaries"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
            >
              ดูเงินเดือน Tech →
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
