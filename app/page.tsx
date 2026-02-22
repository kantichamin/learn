import Image from "next/image";
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

export default async function Home() {
  const profile = await getProfile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-slate-50 to-rose-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Hero */}
        <header className="animate-fade-in text-center">
          <div className="relative mx-auto mb-6 h-40 w-40 sm:h-48 sm:w-48">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-violet-500 to-rose-500 opacity-75 blur-md" />
            <Image
              src={profile.image}
              alt={`รูปโปรไฟล์ของ ${profile.fullname}`}
              width={192}
              height={192}
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

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
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

        {/* Stats */}
        <section
          aria-label="ข้อมูลส่วนตัว"
          className="animate-slide-up mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          <Stat value={`${profile.age}`} label="อายุ (ปี)" highlight />
          <Divider />
          <Stat value={profile.gender} label="เพศ" />
          <Divider />
          <Stat value={profile.birthday} label="วันเกิด" />
        </section>

        {/* Cards */}
        <section className="animate-slide-up mt-14 grid gap-6 sm:grid-cols-2">
          <Card title="อาหารที่ชอบ" icon="🍜">
            <div className="flex flex-wrap gap-2">
              {profile.favoriteFoods.map((food, i) => (
                <span
                  key={i}
                  className="rounded-full bg-amber-100 px-3.5 py-1.5 text-sm font-medium text-amber-800 dark:bg-amber-500/10 dark:text-amber-300"
                >
                  {food}
                </span>
              ))}
            </div>
          </Card>

          <Card title="งานอดิเรก" icon="🎨">
            <div className="flex flex-wrap gap-2">
              {profile.hobbies.map((hobby, i) => (
                <span
                  key={i}
                  className="rounded-full bg-emerald-100 px-3.5 py-1.5 text-sm font-medium text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-300"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </Card>

          <Card
            title="ศิลปินที่ชอบ"
            icon="🎵"
            className="sm:col-span-2"
          >
            <p className="text-slate-600 dark:text-slate-300">
              {profile.favoriteArtists}
            </p>
          </Card>
        </section>

        {/* Footer */}
        <footer className="animate-slide-up mt-16 text-center text-sm text-slate-400 dark:text-slate-500">
          สร้างด้วย Next.js &amp; Tailwind CSS
        </footer>
      </main>
    </div>
  );
}

function Stat({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div className="text-center">
      <p
        className={`text-2xl font-bold sm:text-3xl ${
          highlight
            ? "text-violet-600 dark:text-violet-400"
            : "text-slate-900 dark:text-white"
        }`}
      >
        {value}
      </p>
      <p className="mt-1 text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden h-12 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
  );
}

function Card({
  title,
  icon,
  className = "",
  children,
}: {
  title: string;
  icon: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`group rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700/50 dark:bg-slate-800/50 ${className}`}
    >
      <h2 className="mb-4 flex items-center gap-2.5 text-lg font-semibold text-slate-900 dark:text-white">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}
