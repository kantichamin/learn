import type { Metadata } from "next";
import Link from "next/link";
import { cloudProviders, serviceCategories } from "@/lib/cloud";

export const metadata: Metadata = {
  title: "Cloud Providers — AWS, GCP, Azure, Vercel, DigitalOcean",
  description: "เปรียบเทียบ Cloud Provider ยอดนิยม อธิบายเป็นภาษาไทยพร้อมตัวอย่างจริง ใช้ทำอะไรได้บ้าง เริ่มต้นอย่างไร",
};

export default function CloudPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Hero */}
        <header className="animate-fade-in text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Cloud Provider ที่ Dev ต้องรู้
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            เปรียบเทียบ AWS, GCP, Azure, Vercel, DigitalOcean — แต่ละตัวเด่นอะไร
            เหมาะกับใคร ใช้ทำอะไร อธิบายด้วยตัวอย่างจริงเป็นภาษาไทย
          </p>
        </header>

        {/* Stats */}
        <div className="animate-slide-up mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">{cloudProviders.length}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Providers</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {cloudProviders.reduce((a, p) => a + p.services.length, 0)}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Services</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">Free</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">ทุกตัวมี Free Tier</p>
          </div>
        </div>

        {/* What is Cloud? */}
        <section className="animate-slide-up mt-14">
          <h2 className="mb-5 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">☁️</span>
            Cloud คืออะไร? ทำไม Dev ต้องรู้?
          </h2>
          <div className="rounded-2xl border-2 border-slate-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/50">
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <strong>Cloud Computing</strong> คือการเช่าคอมพิวเตอร์ / server / database / storage
              ผ่านอินเทอร์เน็ต แทนที่จะซื้อเครื่องจริงมาวางในออฟฟิศ — เปรียบเทียบง่ายๆ
              คือแทนที่จะซื้อรถ ก็เรียก Grab แทน ใช้เมื่อไหร่ก็จ่ายเมื่อนั้น
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { icon: "💰", title: "จ่ายตามใช้จริง", desc: "ไม่ต้องลงทุนซื้อ server ล่วงหน้า ใช้เท่าไหร่จ่ายเท่านั้น ปิดเมื่อไม่ใช้ได้" },
                { icon: "📈", title: "Scale ได้ทันที", desc: "มี user เพิ่ม? เพิ่ม server ใน 1 นาที ไม่ต้องรอซื้อเครื่อง 3 เดือน" },
                { icon: "🌏", title: "ใช้ได้ทั่วโลก", desc: "Deploy แอปใกล้ user ทุกที่ในโลก — ไทย สิงคโปร์ อเมริกา ยุโรป" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-slate-50 p-4 dark:bg-slate-900/40">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories Intro */}
        <section className="mt-14">
          <h2 className="mb-5 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">📦</span>
            Cloud Services มีอะไรบ้าง?
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {serviceCategories.map((cat) => (
              <div
                key={cat.key}
                className="rounded-xl border border-slate-200/60 bg-white/60 p-3 text-center dark:border-slate-700/40 dark:bg-slate-800/40"
              >
                <span className="text-2xl">{cat.icon}</span>
                <p className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300">{cat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mt-14">
          <h2 className="mb-5 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">⚖️</span>
            เปรียบเทียบ Cloud Providers
          </h2>
          <div className="overflow-x-auto rounded-2xl border-2 border-slate-200/80 bg-white/70 backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/50">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="px-4 py-3 font-semibold text-slate-900 dark:text-white">Provider</th>
                  <th className="px-4 py-3 font-semibold text-slate-900 dark:text-white">Market Share</th>
                  <th className="px-4 py-3 font-semibold text-slate-900 dark:text-white">จุดเด่น</th>
                  <th className="px-4 py-3 font-semibold text-slate-900 dark:text-white">Free Credit</th>
                  <th className="px-4 py-3 font-semibold text-slate-900 dark:text-white">เหมาะกับ</th>
                </tr>
              </thead>
              <tbody>
                {cloudProviders.map((p) => (
                  <tr key={p.slug} className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">
                      <Link href={`/cloud/${p.slug}`} className="hover:text-violet-600 dark:hover:text-violet-400">
                        {p.icon} {p.name.split("(")[0].trim()}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{p.marketShare}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{p.bestFor[0]}</td>
                    <td className="px-4 py-3 text-emerald-600 dark:text-emerald-400">{p.freeTrialCredit.split("—")[0].trim()}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{p.bestFor.slice(0, 2).join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Provider Cards */}
        <section className="mt-14">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">🏢</span>
            รายละเอียดแต่ละ Provider
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cloudProviders.map((p) => (
              <Link
                key={p.slug}
                href={`/cloud/${p.slug}`}
                className={`group flex flex-col rounded-2xl border-2 ${p.color} bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800/50`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{p.icon}</span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-400">
                    {p.services.length} services
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {p.name.split("(")[0].trim()}
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {p.marketShare} &middot; ก่อตั้ง {p.founded}
                </p>
                <p className="mt-3 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                  {p.tagline}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {p.bestFor.slice(0, 3).map((b) => (
                    <span
                      key={b}
                      className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-xs text-emerald-600 dark:text-emerald-400">
                    {p.freeTrialCredit.split("—")[0].trim()}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-transform group-hover:translate-x-1 dark:text-violet-400">
                    ดูรายละเอียด →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Choose */}
        <section className="mt-14">
          <h2 className="mb-5 flex items-center gap-2.5 text-2xl font-bold text-slate-900 dark:text-white">
            <span className="text-3xl">🤔</span>
            เลือก Cloud ยังไงดี?
          </h2>
          <div className="space-y-3">
            {[
              { scenario: "เพิ่งเริ่มเรียน Cloud", recommend: "DigitalOcean", reason: "ง่ายที่สุด ราคาถูก tutorials ดี เหมาะเรียนรู้พื้นฐาน" },
              { scenario: "ทำ Portfolio / Side Project เว็บ Next.js", recommend: "Vercel", reason: "ฟรี deploy ง่ายสุดในโลก push แล้วเสร็จ" },
              { scenario: "หางานบริษัทไทย", recommend: "AWS", reason: "ตลาดงานเยอะที่สุด cert มีค่ามาก บริษัทส่วนใหญ่ใช้" },
              { scenario: "ทำงานด้าน Data / AI", recommend: "GCP", reason: "BigQuery + Vertex AI ดีที่สุด $300 credit ลองได้เยอะ" },
              { scenario: "องค์กรใหญ่ใช้ Microsoft", recommend: "Azure", reason: "เชื่อม Active Directory, Office 365, Teams ได้ราบรื่น" },
              { scenario: "Startup ที่ต้อง Ship เร็ว", recommend: "Vercel + DigitalOcean", reason: "Frontend: Vercel / Backend: DigitalOcean App Platform ง่ายและถูก" },
            ].map((item) => (
              <div
                key={item.scenario}
                className="rounded-xl border-l-4 border-violet-400 bg-white/70 py-3 pl-4 pr-4 dark:border-violet-500 dark:bg-slate-800/50"
              >
                <p className="text-sm font-bold text-slate-900 dark:text-white">{item.scenario}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  แนะนำ: <span className="font-semibold text-violet-600 dark:text-violet-400">{item.recommend}</span> — {item.reason}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="animate-slide-up mt-20 rounded-2xl border border-violet-200/60 bg-gradient-to-r from-violet-100/50 to-rose-100/50 p-8 text-center shadow-sm dark:border-violet-800/50 dark:from-violet-950/50 dark:to-rose-950/50">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            เรียนรู้ DevOps & Cloud เพิ่มเติม
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            ดูบทเรียน Docker, CI/CD, Deployment และทักษะ Cloud ที่จำเป็น
          </p>
          <Link
            href="/learn"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
          >
            ดูบทเรียนทั้งหมด →
          </Link>
        </section>
      </main>
    </div>
  );
}
