import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cloudProviders, serviceCategories, getProviderBySlug } from "@/lib/cloud";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return cloudProviders.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) return { title: "ไม่พบ Cloud Provider" };
  return { title: `${provider.name} — Cloud Provider`, description: provider.tagline };
}

const levelColor: Record<string, string> = {
  Foundation: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  Associate: "bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  Professional: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  Expert: "bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300",
};

export default async function CloudDetailPage({ params }: Props) {
  const { slug } = await params;
  const provider = getProviderBySlug(slug);
  if (!provider) notFound();

  const idx = cloudProviders.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? cloudProviders[idx - 1] : null;
  const next = idx < cloudProviders.length - 1 ? cloudProviders[idx + 1] : null;

  const groupedServices = new Map<string, typeof provider.services>();
  for (const s of provider.services) {
    const list = groupedServices.get(s.category) || [];
    list.push(s);
    groupedServices.set(s.category, list);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Breadcrumb */}
        <nav className="animate-fade-in mb-8 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/cloud" className="hover:text-violet-600 dark:hover:text-violet-400">Cloud Providers</Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-300">{provider.name.split("(")[0].trim()}</span>
        </nav>

        {/* Header */}
        <header className="animate-fade-in">
          <div className="flex flex-wrap items-start gap-4">
            <span className="text-6xl">{provider.icon}</span>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                {provider.name}
              </h1>
              <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">{provider.tagline}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">{provider.marketShare}</span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">ก่อตั้ง {provider.founded}</span>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">{provider.freeTrialCredit.split("+")[0].trim()}</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">{provider.description}</p>
        </header>

        {/* Quick Info */}
        <div className="animate-slide-up mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard label="สำนักงานใหญ่" value={provider.headquarters} />
          <InfoCard label="Thailand Presence" value={provider.thaiPresence} />
          <InfoCard label="Free Credit" value={provider.freeTrialCredit} />
          <InfoCard label="Services" value={`${provider.services.length} ตัวที่แนะนำ`} />
        </div>

        {/* Why Choose */}
        <Section title="ทำไมต้องเลือก?" icon="💡">
          <ul className="space-y-3">
            {provider.whyChoose.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <span className="mt-0.5 shrink-0 text-emerald-500">✓</span>{item}
              </li>
            ))}
          </ul>
        </Section>

        {/* Best For */}
        <Section title="เหมาะกับ" icon="🎯">
          <div className="flex flex-wrap gap-2">
            {provider.bestFor.map((b) => (
              <span key={b} className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 dark:border-violet-700 dark:bg-violet-500/10 dark:text-violet-300">{b}</span>
            ))}
          </div>
        </Section>

        {/* Services */}
        <Section title="Services สำคัญ" icon="📦">
          {serviceCategories.map((cat) => {
            const svc = groupedServices.get(cat.key);
            if (!svc || svc.length === 0) return null;
            return (
              <div key={cat.key} className="mt-6 first:mt-0">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                  <span>{cat.icon}</span>{cat.label}
                </h4>
                <div className="space-y-3">
                  {svc.map((s) => (
                    <div key={s.name} className="rounded-xl border border-slate-200/60 bg-white/60 p-5 dark:border-slate-700/40 dark:bg-slate-800/40">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h5 className="text-base font-bold text-slate-900 dark:text-white">{s.name}</h5>
                          <p className="text-xs font-medium text-violet-600 dark:text-violet-400">{s.thaiName}</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">{s.pricing}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.description}</p>
                      <div className="mt-3 rounded-lg border-l-4 border-amber-300 bg-amber-50/60 py-2 pl-3 pr-3 dark:border-amber-500 dark:bg-amber-500/5">
                        <p className="text-xs font-medium text-amber-800 dark:text-amber-300">เปรียบเทียบกับชีวิตจริง</p>
                        <p className="mt-0.5 text-xs text-amber-700 dark:text-amber-200">{s.realWorldExample}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </Section>

        {/* Real World Cases */}
        <Section title="บริษัทที่ใช้จริง" icon="🏢">
          <div className="space-y-3">
            {provider.realWorldCases.map((c) => (
              <div key={c.company} className="flex gap-4 rounded-xl border border-slate-200/60 bg-white/60 p-4 dark:border-slate-700/40 dark:bg-slate-800/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                  {c.company.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{c.company}</p>
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{c.useCase}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        {provider.certifications.length > 0 && (
          <Section title="Certifications" icon="🎓">
            <div className="space-y-3">
              {provider.certifications.map((cert) => (
                <div key={cert.name} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200/60 bg-white/60 p-4 dark:border-slate-700/40 dark:bg-slate-800/40">
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${levelColor[cert.level] ?? "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300"}`}>{cert.level}</span>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{cert.name}</p>
                  </div>
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{cert.salary}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Getting Started */}
        <Section title="เริ่มต้นใช้งาน" icon="🚀">
          <ol className="space-y-3">
            {provider.gettingStarted.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">{i + 1}</span>
                <p className="pt-0.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300">{step}</p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Pro Tips */}
        <Section title="Pro Tips" icon="🎯">
          <div className="space-y-3">
            {provider.proTips.map((tip, i) => (
              <div key={i} className="rounded-xl border-l-4 border-amber-400 bg-amber-50/60 py-3 pl-4 pr-4 dark:border-amber-500 dark:bg-amber-500/5">
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">{tip}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Navigation */}
        <div className="mt-16 flex items-center justify-between gap-4">
          {prev ? (
            <Link href={`/cloud/${prev.slug}`} className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-violet-600 dark:hover:text-violet-400">
              <span className="transition-transform group-hover:-translate-x-1">←</span>{prev.icon} {prev.name.split("(")[0].trim()}
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/cloud/${next.slug}`} className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-violet-300 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-violet-600 dark:hover:text-violet-400">
              {next.icon} {next.name.split("(")[0].trim()}<span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ) : <div />}
        </div>
        <div className="mt-8 text-center">
          <Link href="/cloud" className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300">
            ← ดู Cloud Providers ทั้งหมด
          </Link>
        </div>
      </main>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/60 p-4 dark:border-slate-700/40 dark:bg-slate-800/40">
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</p>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section className="animate-slide-up mt-12">
      <h2 className="mb-5 flex items-center gap-2.5 text-xl font-bold text-slate-900 dark:text-white">
        <span className="text-2xl">{icon}</span>{title}
      </h2>
      {children}
    </section>
  );
}
