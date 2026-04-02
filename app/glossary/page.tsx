"use client";

import { useState, useMemo } from "react";
import { glossary, glossaryCategories, searchGlossary, type GlossaryTerm } from "@/lib/glossary";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let results = searchGlossary(query);
    if (activeCategory) {
      results = results.filter((t) => t.category === activeCategory);
    }
    return results;
  }, [query, activeCategory]);

  const grouped = useMemo(() => {
    if (query || activeCategory) return null;
    const map = new Map<string, GlossaryTerm[]>();
    for (const t of glossary) {
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
            คำศัพท์ Tech ที่ต้องรู้
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            รวมคำศัพท์สำคัญในโลก Software Development อธิบายเป็นภาษาไทยแบบเข้าใจง่าย
            ค้นหาได้ทั้งภาษาไทยและอังกฤษ
          </p>
        </header>

        {/* Stats */}
        <div className="animate-slide-up mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-violet-600 dark:text-violet-400">
              {glossary.length}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">คำศัพท์</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {glossaryCategories.length}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">หมวดหมู่</p>
          </div>
          <div className="hidden h-10 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
          <div className="text-center">
            <p className="text-3xl font-bold text-rose-600 dark:text-rose-400">TH</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">อธิบายภาษาไทย</p>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ค้นหาคำศัพท์... เช่น API, อาร์เรย์, database"
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
          {glossaryCategories.map((cat) => (
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
            พบ <span className="font-semibold text-violet-600 dark:text-violet-400">{filtered.length}</span> คำศัพท์
            {query && (
              <span>
                {" "}สำหรับ &quot;<span className="font-medium text-slate-700 dark:text-slate-300">{query}</span>&quot;
              </span>
            )}
          </p>
        )}

        {/* Grouped display */}
        {grouped
          ? glossaryCategories.map((cat) => {
              const terms = grouped.get(cat.key);
              if (!terms || terms.length === 0) return null;
              return (
                <section key={cat.key} className="mt-12">
                  <h2 className="mb-5 flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
                    <span className="text-2xl">{cat.icon}</span>
                    {cat.label}
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                      {terms.length}
                    </span>
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {terms.map((t) => (
                      <TermCard key={t.term} term={t} highlight="" />
                    ))}
                  </div>
                </section>
              );
            })
          : (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {filtered.length > 0 ? (
                filtered.map((t) => <TermCard key={t.term} term={t} highlight={query} />)
              ) : (
                <div className="col-span-2 py-20 text-center">
                  <p className="text-5xl">🔍</p>
                  <p className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-400">
                    ไม่พบคำศัพท์ที่ค้นหา
                  </p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
                    ลองค้นหาด้วยคำอื่น หรือเลือกหมวดหมู่
                  </p>
                </div>
              )}
            </div>
          )}
      </main>
    </div>
  );
}

function TermCard({ term: t, highlight }: { term: GlossaryTerm; highlight: string }) {
  const catMeta = glossaryCategories.find((c) => c.key === t.category);

  return (
    <div className="group rounded-2xl border-2 border-slate-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-violet-300 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/50 dark:hover:border-violet-600">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            <Highlight text={t.term} query={highlight} />
          </h3>
          <p className="mt-0.5 text-sm font-medium text-violet-600 dark:text-violet-400">
            <Highlight text={t.thai} query={highlight} />
          </p>
        </div>
        {catMeta && (
          <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-400">
            {catMeta.icon} {catMeta.label}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        <Highlight text={t.definition} query={highlight} />
      </p>
      {t.example && (
        <div className="mt-3 rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-900/60">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-500">ตัวอย่าง</p>
          <p className="mt-0.5 font-mono text-xs text-slate-700 dark:text-slate-300">{t.example}</p>
        </div>
      )}
    </div>
  );
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="rounded bg-yellow-200 px-0.5 text-inherit dark:bg-yellow-500/30">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
