import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/db";

interface ProfileData {
  fullname: string;
  nickname: string;
  history: string[];
  gender: string;
  birthday: string;
  age: number;
  favoriteFoods: string[];
  hobbies: string[];
  favoriteArtists: string;
  image: string;
}

const fallbackProfile: ProfileData = {
  fullname: "กันติชา ไชยชนะ",
  nickname: "ซีแกรม",
  history: [
    "เป็นคนเชียงราย",
    "นักศึกษามหาวิทยาลัยเชียงใหม่",
    "คณะวิศวกรรมศาสตร์ สาขาคอมพิวเตอร์",
  ],
  gender: "หญิง",
  birthday: "30 มิถุนายน 2549",
  age: 19,
  favoriteFoods: ["ทะเลเผา", "ชาบูลำฮิม", "ต้มยำ"],
  hobbies: ["อ่านนิยาย", "วาดรูป", "เล่นเกม"],
  favoriteArtists: "ไม่มี",
  image: "/profile.jpg",
};

async function getProfile(): Promise<ProfileData> {
  try {
    const dbProfile = await prisma.profile.findFirst();
    if (dbProfile) return dbProfile;
  } catch {
    // DB not available — use fallback
  }
  return fallbackProfile;
}

export const dynamic = "force-dynamic";

const journeyRoles = [
  {
    role: "Student",
    thai: "นักเรียน / นักศึกษา",
    icon: "🎓",
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-300 dark:border-emerald-700",
    bgGlow: "bg-emerald-500",
    iconBg: "bg-emerald-100 dark:bg-emerald-500/15",
    tagBg: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
    headline: "เริ่มต้นจากศูนย์ — เรียนรู้พื้นฐานให้แน่น",
    description: "ทุกคนเริ่มจากตรงนี้ — ไม่ต้องรู้อะไรมาก่อน แค่มีความอยากเรียนรู้ เริ่มจากพื้นฐาน HTML, CSS, JavaScript แล้วค่อยขยายไปภาษาอื่น เรียนคำศัพท์ เข้าใจเครื่องมือ สร้าง project แรก",
    actions: [
      { label: "เริ่มบทเรียน", href: "/learn", icon: "📚" },
      { label: "เรียนรู้ภาษา", href: "/languages", icon: "💻" },
      { label: "ท่องคำศัพท์", href: "/glossary", icon: "📖" },
    ],
    skills: ["HTML & CSS", "JavaScript", "Git", "Command Line", "Problem Solving"],
    milestone: "สร้าง Portfolio Website ชิ้นแรกได้",
  },
  {
    role: "Trainer",
    thai: "ผู้ฝึกฝน / ฝึกงาน",
    icon: "🧑‍💻",
    color: "from-violet-500 to-purple-500",
    borderColor: "border-violet-300 dark:border-violet-700",
    bgGlow: "bg-violet-500",
    iconBg: "bg-violet-100 dark:bg-violet-500/15",
    tagBg: "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
    headline: "ฝึกฝนทักษะจริง — เลือกสาย สร้าง Project",
    description: "รู้พื้นฐานแล้ว ถึงเวลาเลือกสายที่ใช่ — Frontend, Backend, Full-Stack, Mobile หรือ DevOps? เรียน Tech Stack ที่ต้องรู้ ใช้เครื่องมือจริง ทำ project ที่ใส่ portfolio ได้ แล้วลองฝึกงานกับบริษัทจริง",
    actions: [
      { label: "Tech Stack แต่ละสาย", href: "/techstacks", icon: "🧰" },
      { label: "เครื่องมือ Developer", href: "/tools", icon: "🔧" },
      { label: "Cloud & Deploy", href: "/cloud", icon: "☁️" },
      { label: "หาที่ฝึกงาน", href: "/trainee", icon: "🏢" },
    ],
    skills: ["React / Next.js", "Database", "Docker", "API Design", "Testing"],
    milestone: "ฝึกงานหรือทำ Freelance ได้สำเร็จ",
  },
  {
    role: "Employer",
    thai: "พนักงาน / มืออาชีพ",
    icon: "💼",
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-300 dark:border-amber-700",
    bgGlow: "bg-amber-500",
    iconBg: "bg-amber-100 dark:bg-amber-500/15",
    tagBg: "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
    headline: "ทำงานจริง — เติบโตในสายอาชีพ",
    description: "พร้อมเข้าสู่วงการ — เข้าใจสายอาชีพ เงินเดือน ทักษะที่ต้องมี เรียนรู้วิธีสัมภาษณ์ เจรจาเงินเดือน เติบโตจาก Junior → Senior → Lead สร้าง career path ที่ยั่งยืน",
    actions: [
      { label: "ดูสายอาชีพ", href: "/careers", icon: "🗺️" },
      { label: "เงินเดือน & สวัสดิการ", href: "/salaries", icon: "💰" },
    ],
    skills: ["System Design", "Leadership", "Code Review", "Architecture", "Mentoring"],
    milestone: "ได้งานประจำในบริษัท Tech",
  },
];

export default async function Home() {
  const profile = await getProfile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">

        {/* ───── HERO ───── */}
        <header className="animate-fade-in text-center">
          <div className="relative mx-auto mb-6 h-36 w-36 sm:h-44 sm:w-44">
            <div className="animate-pulse-glow absolute -inset-2 rounded-full bg-gradient-to-tr from-violet-500 to-rose-500 opacity-60 blur-lg" />
            <Image
              src={profile.image}
              alt={`รูปโปรไฟล์ของ ${profile.fullname}`}
              width={176}
              height={176}
              className="relative h-full w-full rounded-full object-cover ring-4 ring-white dark:ring-slate-800"
              priority
            />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {profile.fullname}
          </h1>
          <p className="mt-2 text-lg font-medium text-violet-600 dark:text-violet-400 sm:text-xl">
            &ldquo;{profile.nickname}&rdquo;
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {profile.history.map((item, i) => (
              <span
                key={i}
                className="rounded-full bg-violet-100 px-4 py-1.5 text-sm font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        {/* ───── ABOUT CARDS ───── */}
        <section className="animate-slide-up mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-8 sm:gap-12">
          <Stat value={`${profile.age}`} label="อายุ (ปี)" highlight />
          <Divider />
          <Stat value={profile.gender} label="เพศ" />
          <Divider />
          <Stat value={profile.birthday} label="วันเกิด" />
        </section>

        <section className="animate-slide-up mt-10 grid gap-5 sm:grid-cols-3">
          <MiniCard title="อาหารที่ชอบ" icon="🍜" items={profile.favoriteFoods} color="amber" />
          <MiniCard title="งานอดิเรก" icon="🎨" items={profile.hobbies} color="emerald" />
          <MiniCard title="ศิลปิน" icon="🎵" items={[profile.favoriteArtists]} color="rose" />
        </section>

        {/* ───── JOURNEY HEADER ───── */}
        <section className="mt-24 text-center">
          <p className="animate-fade-in text-sm font-semibold uppercase tracking-widest text-violet-500 dark:text-violet-400">
            Learning Journey
          </p>
          <h2 className="animate-fade-in mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            เส้นทางจาก Student สู่ Professional
          </h2>
          <p className="animate-slide-up mx-auto mt-3 max-w-xl text-base text-slate-600 dark:text-slate-400">
            ทุกคนเริ่มจากศูนย์ — เรียนรู้ทีละขั้น ฝึกฝนทุกวัน แล้ววันหนึ่งจะถึงเป้าหมาย
          </p>

          {/* Step indicators */}
          <div className="animate-scale-in mx-auto mt-8 flex max-w-md items-center justify-between">
            {journeyRoles.map((r, i) => (
              <div key={r.role} className="flex items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-md ${r.iconBg} animate-float`} style={{ animationDelay: `${i * 0.8}s` }}>
                    {r.icon}
                  </span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{r.role}</span>
                </div>
                {i < journeyRoles.length - 1 && (
                  <div className="mx-3 h-0.5 w-12 sm:w-20 rounded-full bg-gradient-to-r from-slate-300 to-slate-200 dark:from-slate-600 dark:to-slate-700" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ───── JOURNEY ROLE CARDS ───── */}
        <section className="mt-16 space-y-20">
          {journeyRoles.map((role, roleIndex) => (
            <div key={role.role} className="relative">
              {/* Connecting line */}
              {roleIndex < journeyRoles.length - 1 && (
                <div className="absolute left-1/2 top-full z-0 hidden h-20 w-0.5 origin-top -translate-x-1/2 bg-gradient-to-b from-slate-300 to-transparent animate-draw-line dark:from-slate-600 sm:block" style={{ animationDelay: `${roleIndex * 0.4 + 0.6}s` }} />
              )}

              <div
                className={`animate-slide-up relative overflow-hidden rounded-3xl border-2 ${role.borderColor} bg-white/70 shadow-lg backdrop-blur-sm dark:bg-slate-800/50`}
                style={{ animationDelay: `${roleIndex * 0.3}s` }}
              >
                {/* Glow accent */}
                <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full ${role.bgGlow} opacity-10 blur-3xl`} />
                <div className={`absolute -bottom-20 -left-20 h-40 w-40 rounded-full ${role.bgGlow} opacity-5 blur-3xl`} />

                {/* Header */}
                <div className={`relative bg-gradient-to-r ${role.color} px-6 py-5 sm:px-8 sm:py-6`}>
                  <div className="flex items-center gap-4">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur-sm">
                      {role.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold text-white backdrop-blur-sm">
                          STEP {roleIndex + 1}
                        </span>
                      </div>
                      <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{role.thai}</h3>
                      <p className="text-sm font-medium text-white/80">{role.headline}</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="relative grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
                  {/* Left: Description + Skills */}
                  <div>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{role.description}</p>

                    {/* Skills */}
                    <div className="mt-5">
                      <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">ทักษะสำคัญ</p>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <span key={skill} className={`rounded-lg px-3 py-1.5 text-xs font-medium ${role.tagBg}`}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Milestone */}
                    <div className="mt-5 flex items-start gap-2 rounded-xl bg-slate-50 p-3 dark:bg-slate-900/40">
                      <span className="text-lg">🏆</span>
                      <div>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400">เป้าหมาย</p>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{role.milestone}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Action Links */}
                  <div className="flex flex-col gap-2.5">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">เริ่มเลย</p>
                    {role.actions.map((action) => (
                      <Link
                        key={action.href}
                        href={action.href}
                        className="group flex items-center gap-3 rounded-xl border border-slate-200/60 bg-white/80 px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-md dark:border-slate-700/40 dark:bg-slate-800/40 dark:hover:border-violet-600"
                      >
                        <span className="text-xl">{action.icon}</span>
                        <span className="flex-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{action.label}</span>
                        <span className="text-sm text-slate-400 transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ───── PLATFORM STATS ───── */}
        <section className="animate-slide-up mt-24">
          <div className="rounded-2xl border border-slate-200/60 bg-gradient-to-r from-violet-50/50 to-rose-50/50 p-8 text-center dark:border-slate-700/40 dark:from-violet-500/5 dark:to-rose-500/5">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
              ทุกอย่างที่ต้องใช้ในการเรียนรู้ — อยู่ที่นี่
            </h2>
            <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              <PlatformStat value="50+" label="บทเรียน" icon="📚" />
              <PlatformStat value="16" label="ภาษา" icon="💻" />
              <PlatformStat value="6" label="สายงาน" icon="🧰" />
              <PlatformStat value="5" label="Cloud" icon="☁️" />
            </div>
            <div className="mt-6">
              <Link
                href="/learn"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-8 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg dark:bg-violet-500 dark:hover:bg-violet-600"
              >
                เริ่มเรียนรู้เลย →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-slate-400 dark:text-slate-500">
          สร้างด้วย Next.js &amp; Tailwind CSS — LearnDev Platform
        </footer>
      </main>
    </div>
  );
}

function Stat({ value, label, highlight = false }: { value: string; label: string; highlight?: boolean }) {
  return (
    <div className="text-center">
      <p className={`text-2xl font-bold sm:text-3xl ${highlight ? "text-violet-600 dark:text-violet-400" : "text-slate-900 dark:text-white"}`}>
        {value}
      </p>
      <p className="mt-1 text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400 sm:text-sm">{label}</p>
    </div>
  );
}

function Divider() {
  return <div className="hidden h-12 w-px bg-slate-200 dark:bg-slate-700 sm:block" />;
}

function MiniCard({ title, icon, items, color }: { title: string; icon: string; items: string[]; color: string }) {
  const colorMap: Record<string, string> = {
    amber: "bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-300",
    emerald: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300",
    rose: "bg-rose-100 text-rose-800 dark:bg-rose-500/10 dark:text-rose-300",
  };
  const tagClass = colorMap[color] ?? colorMap.amber;

  return (
    <div className="group rounded-2xl border border-slate-200/60 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700/50 dark:bg-slate-800/50">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
        <span className="text-xl">{icon}</span>{title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item, i) => (
          <span key={i} className={`rounded-full px-3 py-1 text-xs font-medium ${tagClass}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function PlatformStat({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-white/60 py-4 dark:bg-slate-800/40">
      <span className="text-2xl">{icon}</span>
      <span className="text-xl font-bold text-slate-900 dark:text-white">{value}</span>
      <span className="text-xs text-slate-500 dark:text-slate-400">{label}</span>
    </div>
  );
}
