"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { tools, toolCategories, searchTools, type DevTool } from "@/lib/tools";

const pricingLabel: Record<string, { text: string; className: string }> = {
  free: { text: "ฟรี", className: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300" },
  freemium: { text: "ฟรี+", className: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300" },
  "open-source": { text: "Open Source", className: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300" },
  paid: { text: "Paid", className: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300" },
};

export default function ToolsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let results = searchTools(query);
    if (activeCategory) {
      results = results.filter((t) => t.category === activeCategory);
    }
    return results;
  }, [query, activeCategory]);

  const grouped = useMemo(() => {
    if (query || activeCategory) return null;
    const map = new Map<string, DevTool[]>();
    for (const t of tools) {
      const list = map.get(t.category) || [];
      list.push(t);
      map.set(t.category, list);
    }
    return map;
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Hero */}
        <header className="animate-fade-in text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            เครื่องมือที่ Dev ใช้ทุกวัน
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            รวมเครื่องมือจริงที่นักพัฒนาซอฟต์แวร์ใช้ในการทำงาน — Editor, Terminal,
            Git, API, Database, DevOps, AI และอื่นๆ พร้อมวิธีใช้งานเบื้องต้น
          </p>
        </header>

        {/* Stats */}
        <div className="animate-slide-up mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">{tools.length}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">เครื่องมือ</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{toolCategories.length}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">หมวดหมู่</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">Real</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">ใช้งานจริง</p>
          </div>
        </div>

        {/* Search */}
        <div className="animate-slide-up mt-10">
          <div className="relative mx-auto max-w-2xl">
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหาเครื่องมือ... เช่น VS Code, Docker, Postman"
              className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-4 text-base text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-violet-500 dark:focus:ring-violet-500/20"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-300"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !activeCategory
                ? "bg-violet-600 text-white shadow-sm dark:bg-violet-500"
                : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
            }`}
          >
            ทั้งหมด
          </button>
          {toolCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(activeCategory === cat.key ? null : cat.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === cat.key
                  ? "bg-violet-600 text-white shadow-sm dark:bg-violet-500"
                  : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        {(query || activeCategory) && (
          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
            พบ <span className="font-semibold text-violet-600 dark:text-violet-400">{filtered.length}</span> เครื่องมือ
            {query && (
              <span>
                {" "}สำหรับ &quot;<span className="font-medium text-slate-700 dark:text-slate-300">{query}</span>&quot;
              </span>
            )}
          </p>
        )}

        {/* Grouped / Filtered display */}
        {grouped
          ? toolCategories.map((cat) => {
              const catTools = grouped.get(cat.key);
              if (!catTools || catTools.length === 0) return null;
              return (
                <section key={cat.key} className="mt-12">
                  <h2 className="mb-5 flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
                    <span className="text-2xl">{cat.icon}</span>
                    {cat.label}
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      {catTools.length}
                    </span>
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {catTools.map((t) => (
                      <ToolCard key={t.slug} tool={t} />
                    ))}
                  </div>
                </section>
              );
            })
          : (
            <div className="mt-10">
              {filtered.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((t) => (
                    <ToolCard key={t.slug} tool={t} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center">
                  <p className="text-5xl">🔍</p>
                  <p className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-400">
                    ไม่พบเครื่องมือที่ค้นหา
                  </p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
                    ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่
                  </p>
                </div>
              )}
            </div>
          )}

        {/* Footer CTA */}
        <section className="animate-slide-up mt-20 rounded-2xl border border-violet-200/60 bg-gradient-to-r from-violet-100/50 to-rose-100/50 p-8 text-center shadow-sm dark:border-violet-800/50 dark:from-violet-950/50 dark:to-rose-950/50">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            อยากเรียนรู้ทักษะที่ใช้กับเครื่องมือเหล่านี้?
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            ดูบทเรียนทั้งหมดที่อธิบายทักษะ Dev ตั้งแต่พื้นฐานจนถึงขั้นสูง
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

function ToolCard({ tool }: { tool: DevTool }) {
  const pricing = pricingLabel[tool.pricing];
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex flex-col rounded-2xl border-2 border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-800/50 dark:hover:border-violet-600"
    >
      <div className="flex items-start justify-between">
        <span className="text-4xl">{tool.icon}</span>
        {pricing && (
          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${pricing.className}`}>
            {pricing.text}
          </span>
        )}
      </div>
      <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{tool.name}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">{tool.tagline}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {tool.platforms.slice(0, 3).map((p) => (
          <span
            key={p}
            className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400"
          >
            {p}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-4 flex items-center justify-end">
        <span className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-transform group-hover:translate-x-1 dark:text-violet-400">
          รายละเอียด →
        </span>
      </div>
    </Link>
  );
}
