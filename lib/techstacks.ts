export interface StackTool {
  name: string;
  role: string;
  why: string;
  alternatives: string[];
  level: "must" | "recommended" | "optional";
}

export interface StackLayer {
  layer: string;
  icon: string;
  tools: StackTool[];
}

export interface TechStackDomain {
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  color: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  timeToLearn: string;
  salaryRange: string;
  expertAdvice: string;
  layers: StackLayer[];
  learningPath: { step: string; duration: string; detail: string }[];
  realWorldProject: { name: string; description: string; techUsed: string[] }[];
  mustReadResources: { name: string; type: string; url: string }[];
  commonMistakes: string[];
  interviewTopics: string[];
}

export const domains: TechStackDomain[] = [
  // ─── FRONTEND WEB ───
  {
    name: "Frontend Web Developer",
    slug: "frontend",
    icon: "🎨",
    tagline: "สร้างหน้าเว็บสวยๆ ที่ผู้ใช้เห็นและใช้งาน",
    description: "Frontend Developer คือคนที่สร้างทุกอย่างที่ผู้ใช้เห็นบนหน้าเว็บ — จาก UI design แปลงเป็นโค้ด ทำให้เว็บ interactive, responsive, เร็ว และ accessible ตลาดงานกว้างมาก ทุกบริษัทต้องมี frontend dev",
    color: "border-blue-300 dark:border-blue-700",
    difficulty: "beginner",
    timeToLearn: "6-12 เดือน (เริ่มทำงานได้)",
    salaryRange: "18,000 - 120,000+ บาท/เดือน",
    expertAdvice: "\"เริ่มจาก HTML/CSS ให้แน่นก่อน อย่ารีบไป React — ถ้าพื้นฐานดี ไปต่อเร็วมาก ทำ project จริงตั้งแต่เดือนแรก อย่าดู tutorial อย่างเดียว\"",
    layers: [
      {
        layer: "ภาษาพื้นฐาน",
        icon: "📝",
        tools: [
          { name: "HTML", role: "โครงสร้างของหน้าเว็บ", why: "ทุกหน้าเว็บเริ่มจาก HTML — เป็นพื้นฐานที่ต้องรู้ก่อนอื่นใด", alternatives: [], level: "must" },
          { name: "CSS", role: "ตกแต่งหน้าเว็บ สี ขนาด layout", why: "ทำให้เว็บสวย responsive ขาด CSS หน้าเว็บจะเป็นแค่ข้อความขาวดำ", alternatives: [], level: "must" },
          { name: "JavaScript", role: "ทำให้เว็บ interactive ได้", why: "ภาษาเดียวที่รันในเบราว์เซอร์ ทำ click, animation, fetch data ทุกอย่าง", alternatives: [], level: "must" },
          { name: "TypeScript", role: "JavaScript + Type Safety", why: "มาตรฐานของโปรเจกต์ขนาดกลาง-ใหญ่ ลด bug ได้เยอะ autocomplete ดีขึ้น 10 เท่า", alternatives: [], level: "must" },
        ],
      },
      {
        layer: "Framework",
        icon: "⚛️",
        tools: [
          { name: "React", role: "สร้าง UI แบบ component-based", why: "ใช้กันมากที่สุด ตลาดงานกว้าง ecosystem ใหญ่ เรียนแล้วไปต่อ Next.js ได้เลย", alternatives: ["Vue", "Svelte", "Angular"], level: "must" },
          { name: "Next.js", role: "React framework แบบเต็มรูปแบบ", why: "SSR, SSG, API routes, file-based routing ครบ — เป็นมาตรฐานของ React production", alternatives: ["Remix", "Nuxt (Vue)", "SvelteKit"], level: "must" },
        ],
      },
      {
        layer: "Styling",
        icon: "🎨",
        tools: [
          { name: "Tailwind CSS", role: "Utility-first CSS framework", why: "เร็วที่สุด ไม่ต้องตั้งชื่อ class เป็นมาตรฐานใหม่ของ frontend", alternatives: ["CSS Modules", "Styled Components", "Sass"], level: "must" },
          { name: "Figma", role: "ดู design จาก designer", why: "ต้องอ่าน design ได้ inspect สี ขนาด spacing export assets", alternatives: ["Sketch", "Adobe XD"], level: "recommended" },
        ],
      },
      {
        layer: "State Management",
        icon: "🔄",
        tools: [
          { name: "React useState/useContext", role: "State management ในตัว React", why: "พอสำหรับแอปเล็ก-กลาง เรียนรู้ก่อนใช้ library อื่น", alternatives: [], level: "must" },
          { name: "Zustand / TanStack Query", role: "State management ขั้นสูง", why: "Zustand สำหรับ client state, TanStack Query สำหรับ server state — ทั้งคู่ง่ายกว่า Redux", alternatives: ["Redux Toolkit", "Jotai", "Recoil"], level: "recommended" },
        ],
      },
      {
        layer: "Testing",
        icon: "🧪",
        tools: [
          { name: "Vitest / Jest", role: "Unit testing", why: "ทดสอบฟังก์ชัน component แยก — ป้องกัน bug ก่อน deploy", alternatives: [], level: "recommended" },
          { name: "Playwright", role: "E2E testing", why: "ทดสอบเหมือนผู้ใช้จริง — คลิก กรอก ตรวจสอบหน้าจอ", alternatives: ["Cypress"], level: "recommended" },
        ],
      },
      {
        layer: "Tools & DevOps",
        icon: "🔧",
        tools: [
          { name: "Git + GitHub", role: "Version control", why: "ต้องรู้ 100% — ทุกบริษัทใช้ Git ทุกวัน", alternatives: ["GitLab"], level: "must" },
          { name: "VS Code / Cursor", role: "Code editor", why: "Editor หลักของ frontend dev มี extension ครบ", alternatives: ["WebStorm"], level: "must" },
          { name: "Vercel", role: "Deploy เว็บ", why: "Deploy Next.js ง่ายที่สุด push แล้วเสร็จ", alternatives: ["Netlify", "Cloudflare Pages"], level: "recommended" },
          { name: "ESLint + Prettier", role: "Code quality", why: "จัดโค้ดให้สวย ตรวจ error อัตโนมัติ", alternatives: ["Biome"], level: "must" },
        ],
      },
    ],
    learningPath: [
      { step: "HTML + CSS พื้นฐาน", duration: "2-4 สัปดาห์", detail: "สร้างหน้าเว็บ static ได้ เข้าใจ Box Model, Flexbox, Grid, Responsive" },
      { step: "JavaScript", duration: "4-6 สัปดาห์", detail: "Variables, Functions, DOM manipulation, Async/Await, Fetch API" },
      { step: "React + TypeScript", duration: "4-6 สัปดาห์", detail: "Components, JSX, Props, State, Hooks, TypeScript basics" },
      { step: "Next.js + Tailwind CSS", duration: "3-4 สัปดาห์", detail: "App Router, Server Components, Layouts, API Routes, Tailwind" },
      { step: "Git + Deploy + Portfolio", duration: "2-3 สัปดาห์", detail: "Git workflow, GitHub, deploy ขึ้น Vercel, สร้าง portfolio website" },
      { step: "สมัครงาน", duration: "2-4 สัปดาห์", detail: "ทำ project 2-3 ชิ้น ฝึก interview เตรียม resume" },
    ],
    realWorldProject: [
      { name: "Portfolio Website", description: "เว็บแนะนำตัวเอง แสดงผลงาน ใช้สมัครงานจริง", techUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"] },
      { name: "E-commerce Product Page", description: "หน้าสินค้า ตะกร้า filter search ราคา responsive", techUsed: ["React", "TypeScript", "Tailwind", "TanStack Query", "REST API"] },
      { name: "Dashboard Admin", description: "หน้า admin ดู analytics ตาราง กราฟ CRUD", techUsed: ["Next.js", "TypeScript", "Recharts", "Prisma", "PostgreSQL"] },
    ],
    mustReadResources: [
      { name: "React.dev (Official)", type: "Documentation", url: "https://react.dev" },
      { name: "Next.js Learn", type: "Interactive Course", url: "https://nextjs.org/learn" },
      { name: "web.dev by Google", type: "Best Practices", url: "https://web.dev" },
      { name: "Frontend Masters", type: "Video Course", url: "https://frontendmasters.com" },
    ],
    commonMistakes: [
      "ข้ามพื้นฐาน HTML/CSS ไป React เลย — พอเจอปัญหา layout แก้ไม่ได้",
      "ดู tutorial มาก แต่ไม่ทำ project เอง — ทำเอง 1 ชิ้น ดีกว่าดู 10 คอร์ส",
      "ใช้ Redux ทั้งที่ไม่จำเป็น — useState + TanStack Query พอสำหรับแอปส่วนใหญ่",
      "ไม่ใช้ TypeScript — ยิ่งโปรเจกต์ใหญ่ ยิ่งต้องใช้ ฝืนเรียนตั้งแต่แรก",
      "ไม่สนใจ Performance — ภาพไม่ optimize, ไม่ lazy load, bundle ใหญ่",
      "ไม่เรียนรู้ Git — ถ้าใช้ Git ไม่เป็น ทำงานเป็นทีมไม่ได้",
    ],
    interviewTopics: ["React Hooks (useState, useEffect, useMemo)", "Virtual DOM & Reconciliation", "CSS Flexbox/Grid", "Async/Await & Promises", "REST API + HTTP Methods", "TypeScript (Interface, Generics)", "Performance Optimization (lazy loading, memoization)", "Accessibility basics"],
  },

  // ─── BACKEND ───
  {
    name: "Backend Developer",
    slug: "backend",
    icon: "🔧",
    tagline: "สร้าง API, Business Logic, จัดการ Database",
    description: "Backend Developer คือคนที่สร้างทุกอย่าง \"หลังฉาก\" — API ที่ frontend เรียกใช้, business logic, authentication, database, file upload ทุกแอปต้องมี backend เป็นกระดูกสันหลัง",
    color: "border-emerald-300 dark:border-emerald-700",
    difficulty: "intermediate",
    timeToLearn: "8-14 เดือน",
    salaryRange: "20,000 - 140,000+ บาท/เดือน",
    expertAdvice: "\"เข้าใจ HTTP, REST, Database ให้ลึกก่อน — framework จะเปลี่ยน แต่พื้นฐานเหล่านี้ใช้ได้ตลอดชีวิต ทำ CRUD ให้คล่อง แล้วค่อยไป authentication, authorization, caching\"",
    layers: [
      {
        layer: "ภาษา",
        icon: "📝",
        tools: [
          { name: "Node.js (JavaScript/TypeScript)", role: "Runtime สำหรับ JavaScript บน server", why: "ถ้ารู้ JS อยู่แล้ว ไม่ต้องเรียนภาษาใหม่ ecosystem ใหญ่ ตลาดงานกว้าง", alternatives: ["Python", "Go", "Java"], level: "must" },
          { name: "Python", role: "ภาษาอ่านง่าย เด่นด้าน data/AI", why: "ถ้าสนใจ data/AI ด้วย Python ดีที่สุด FastAPI เร็วมาก", alternatives: ["Node.js", "Go"], level: "recommended" },
          { name: "Go", role: "ภาษาเร็ว concurrent ดี", why: "เงินเดือนสูง เหมาะ microservices, DevOps tools ตลาดงานโต", alternatives: ["Rust", "Java"], level: "optional" },
        ],
      },
      {
        layer: "Framework",
        icon: "🏗️",
        tools: [
          { name: "Express.js / Fastify", role: "Web framework สำหรับ Node.js", why: "Express เรียนง่ายสุด Fastify เร็วกว่า — เริ่มจาก Express แล้วค่อยย้าย", alternatives: ["Hono", "Koa"], level: "must" },
          { name: "NestJS", role: "Enterprise Node.js framework", why: "โครงสร้างชัดเจนเหมือน Angular/Spring Boot เหมาะโปรเจกต์ใหญ่", alternatives: ["Adonis.js"], level: "recommended" },
          { name: "FastAPI (Python)", role: "Python web framework ที่เร็วที่สุด", why: "Auto docs (Swagger), type validation ด้วย Pydantic, async support", alternatives: ["Django", "Flask"], level: "recommended" },
        ],
      },
      {
        layer: "Database",
        icon: "🗃️",
        tools: [
          { name: "PostgreSQL", role: "Relational Database หลัก", why: "ดีที่สุดสำหรับ production — feature เยอะ reliable ฟรี ใช้กับ ORM ได้ทุกตัว", alternatives: ["MySQL", "SQLite (dev)"], level: "must" },
          { name: "Redis", role: "In-memory cache + session", why: "เร็วมาก ใช้ cache data, session storage, rate limiting, queue", alternatives: ["Memcached"], level: "recommended" },
          { name: "MongoDB", role: "NoSQL Document Database", why: "เก็บข้อมูล flexible schema ดี สำหรับบาง use case", alternatives: ["DynamoDB", "Firestore"], level: "optional" },
        ],
      },
      {
        layer: "ORM & Query",
        icon: "🔗",
        tools: [
          { name: "Prisma", role: "TypeScript ORM", why: "Type-safe, migration ง่าย, Prisma Studio ดู data ได้ เป็นมาตรฐานใหม่ของ Node.js", alternatives: ["Drizzle ORM", "TypeORM", "Sequelize"], level: "must" },
          { name: "SQL ตรงๆ", role: "เขียน query เอง", why: "ต้องเข้าใจ SQL จริง — ORM ช่วยได้ แต่ optimize ต้องรู้ SQL", alternatives: [], level: "must" },
        ],
      },
      {
        layer: "Authentication & Security",
        icon: "🔒",
        tools: [
          { name: "JWT + bcrypt", role: "Token-based authentication", why: "ต้องเข้าใจ auth flow — register, login, token, refresh token, password hashing", alternatives: ["Session-based auth"], level: "must" },
          { name: "NextAuth.js / Lucia", role: "Auth library", why: "ไม่ต้องเขียน auth เอง — OAuth, email login, session ครบ", alternatives: ["Clerk", "Auth0", "Supabase Auth"], level: "recommended" },
        ],
      },
      {
        layer: "DevOps & Deploy",
        icon: "🚀",
        tools: [
          { name: "Docker", role: "Containerization", why: "\"เครื่องผมรันได้\" ไม่มีอีก — package app + dependencies ไว้ด้วยกัน", alternatives: ["Podman"], level: "must" },
          { name: "Docker Compose", role: "รัน multi-container", why: "รัน app + database + redis ด้วยคำสั่งเดียว docker compose up", alternatives: [], level: "must" },
          { name: "GitHub Actions", role: "CI/CD", why: "ทดสอบ + deploy อัตโนมัติทุก push ฟรีสำหรับ public repo", alternatives: ["GitLab CI", "Jenkins"], level: "recommended" },
        ],
      },
    ],
    learningPath: [
      { step: "HTTP, REST API, JSON", duration: "1-2 สัปดาห์", detail: "เข้าใจ HTTP methods, status codes, request/response, headers" },
      { step: "Node.js + Express + TypeScript", duration: "3-4 สัปดาห์", detail: "สร้าง REST API, routing, middleware, error handling" },
      { step: "PostgreSQL + Prisma", duration: "3-4 สัปดาห์", detail: "SQL basics, schema design, CRUD, relations, migrations" },
      { step: "Authentication (JWT)", duration: "2-3 สัปดาห์", detail: "Register, login, hashing, JWT, middleware auth, roles" },
      { step: "Docker + Deploy", duration: "2-3 สัปดาห์", detail: "Dockerfile, Docker Compose, deploy to DigitalOcean/Railway" },
      { step: "Testing + CI/CD", duration: "2 สัปดาห์", detail: "Unit test, integration test, GitHub Actions pipeline" },
    ],
    realWorldProject: [
      { name: "REST API for Blog", description: "API สำหรับ blog — CRUD posts, comments, auth, pagination", techUsed: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT"] },
      { name: "E-commerce API", description: "API สำหรับร้านค้าออนไลน์ — products, cart, orders, payment", techUsed: ["NestJS", "PostgreSQL", "Redis", "Stripe", "Docker"] },
      { name: "Chat API with WebSocket", description: "Real-time chat — rooms, messages, online status", techUsed: ["Node.js", "Socket.io", "Redis", "PostgreSQL"] },
    ],
    mustReadResources: [
      { name: "Node.js Best Practices", type: "GitHub Repo", url: "https://github.com/goldbergyoni/nodebestpractices" },
      { name: "Prisma Docs", type: "Documentation", url: "https://www.prisma.io/docs" },
      { name: "PostgreSQL Tutorial", type: "Tutorial", url: "https://www.postgresqltutorial.com" },
    ],
    commonMistakes: [
      "ไม่ validate input — ต้อง validate ทุก request ไม่เชื่อข้อมูลจาก client",
      "เก็บ password เป็น plain text — ต้อง hash ด้วย bcrypt เสมอ",
      "ไม่จัดการ error — ต้องมี global error handler + meaningful error messages",
      "ไม่ใช้ environment variables — อย่า hardcode secrets ในโค้ด",
      "Query N+1 — ดึงข้อมูลใน loop แทนที่จะ JOIN หรือ include",
      "ไม่เขียน test — เขียน test ตั้งแต่แรก ประหยัดเวลา debug ได้เยอะ",
    ],
    interviewTopics: ["REST API Design (HTTP methods, status codes)", "Database Design (normalization, relations, indexes)", "Authentication (JWT, OAuth, sessions)", "SQL (JOIN, GROUP BY, subqueries)", "Docker basics", "System Design basics (caching, load balancing)", "Error Handling patterns", "Security (CORS, XSS, SQL Injection)"],
  },

  // ─── FULL-STACK ───
  {
    name: "Full-Stack Developer",
    slug: "fullstack",
    icon: "🔄",
    tagline: "ทำได้ทั้ง Frontend + Backend — ครบจบในคนเดียว",
    description: "Full-Stack Developer ทำได้ทั้ง frontend และ backend — เป็นที่ต้องการมากใน startup และทีมเล็ก เพราะคนเดียวสร้าง feature ตั้งแต่ UI จนถึง database ได้ Next.js ทำให้ full-stack ง่ายขึ้นมากเพราะรวม frontend + backend ไว้ในที่เดียว",
    color: "border-violet-300 dark:border-violet-700",
    difficulty: "intermediate",
    timeToLearn: "10-16 เดือน",
    salaryRange: "20,000 - 150,000+ บาท/เดือน",
    expertAdvice: "\"เรียน frontend ให้คล่องก่อน แล้วค่อยขยายไป backend — Next.js ช่วยเรื่องนี้มาก เพราะ API routes + Server Components ทำ backend ได้เลย อย่าพยายามเก่งทุกอย่างพร้อมกัน เน้น 1 ด้านก่อน แล้วค่อยขยาย\"",
    layers: [
      {
        layer: "The Meta-Framework",
        icon: "⚡",
        tools: [
          { name: "Next.js (App Router)", role: "Full-stack React framework", why: "frontend + backend ในที่เดียว — Server Components, API Routes, SSR, SSG ครบ เป็นมาตรฐาน full-stack สมัยใหม่", alternatives: ["Remix", "SvelteKit", "Nuxt"], level: "must" },
        ],
      },
      {
        layer: "Frontend Layer",
        icon: "🎨",
        tools: [
          { name: "React + TypeScript", role: "UI library + type safety", why: "หัวใจของ Next.js — ต้องเข้าใจ components, hooks, state ให้ดี", alternatives: [], level: "must" },
          { name: "Tailwind CSS", role: "Styling", why: "เร็ว สวย ไม่ต้องเขียน CSS แยก", alternatives: ["CSS Modules"], level: "must" },
          { name: "React Hook Form + Zod", role: "Form handling + validation", why: "จัดการ form ซับซ้อน validate ทั้ง client + server ด้วย schema เดียว", alternatives: ["Formik"], level: "recommended" },
        ],
      },
      {
        layer: "Backend Layer",
        icon: "🔧",
        tools: [
          { name: "Next.js API Routes / Server Actions", role: "Backend ใน Next.js", why: "เขียน backend logic ได้เลยในโปรเจกต์เดียว ไม่ต้องสร้าง server แยก", alternatives: ["tRPC"], level: "must" },
          { name: "Prisma", role: "Database ORM", why: "Type-safe ORM ที่ดีที่สุดสำหรับ TypeScript full-stack", alternatives: ["Drizzle"], level: "must" },
          { name: "NextAuth.js v5", role: "Authentication", why: "Auth ครบวงจรใน Next.js — OAuth, credentials, session management", alternatives: ["Clerk", "Lucia"], level: "recommended" },
        ],
      },
      {
        layer: "Database & Storage",
        icon: "🗃️",
        tools: [
          { name: "PostgreSQL", role: "Primary database", why: "database หลักสำหรับ production — reliable, feature-rich, ฟรี", alternatives: ["MySQL", "PlanetScale"], level: "must" },
          { name: "Vercel Postgres / Supabase", role: "Managed database", why: "Database สำเร็จรูป ไม่ต้อง setup เอง มี free tier", alternatives: ["Neon", "Railway"], level: "recommended" },
          { name: "Uploadthing / Cloudinary", role: "File upload & storage", why: "จัดการ file upload, image optimization ไม่ต้อง setup S3 เอง", alternatives: ["AWS S3"], level: "optional" },
        ],
      },
      {
        layer: "Deploy & Hosting",
        icon: "🚀",
        tools: [
          { name: "Vercel", role: "Deploy Next.js", why: "สร้าง Next.js มา deploy ที่นี่ดีที่สุด push to GitHub = deploy", alternatives: ["Netlify", "Railway"], level: "must" },
          { name: "Docker", role: "Containerization", why: "ถ้า deploy ที่อื่น (AWS, DigitalOcean) Docker ช่วยให้ consistent", alternatives: [], level: "recommended" },
        ],
      },
    ],
    learningPath: [
      { step: "HTML + CSS + JavaScript", duration: "4-6 สัปดาห์", detail: "พื้นฐาน web สร้างหน้าเว็บ static + interactive ได้" },
      { step: "React + TypeScript", duration: "4-6 สัปดาห์", detail: "Components, Hooks, State, Props, TypeScript basics" },
      { step: "Next.js + Tailwind CSS", duration: "3-4 สัปดาห์", detail: "App Router, Layouts, Server Components, API Routes, Tailwind" },
      { step: "PostgreSQL + Prisma", duration: "3-4 สัปดาห์", detail: "SQL, schema design, CRUD, relations, Server Actions + Prisma" },
      { step: "Auth + Deploy", duration: "2-3 สัปดาห์", detail: "NextAuth.js, Vercel deployment, environment variables" },
      { step: "ทำ Full-Stack Project จริง", duration: "4-6 สัปดาห์", detail: "สร้างแอปตั้งแต่ต้น — design → code → deploy → ใส่ portfolio" },
    ],
    realWorldProject: [
      { name: "SaaS Dashboard", description: "แอป SaaS มี auth, dashboard, billing, settings", techUsed: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind", "NextAuth", "Stripe"] },
      { name: "Social Media Clone", description: "แอปเหมือน Twitter/Threads — post, like, follow, feed", techUsed: ["Next.js", "Prisma", "PostgreSQL", "Uploadthing", "Vercel"] },
      { name: "Project Management Tool", description: "เหมือน Trello/Linear — boards, tasks, drag & drop, collaboration", techUsed: ["Next.js", "Prisma", "PostgreSQL", "Pusher (real-time)", "Tailwind"] },
    ],
    mustReadResources: [
      { name: "Next.js Documentation", type: "Official Docs", url: "https://nextjs.org/docs" },
      { name: "T3 Stack", type: "Full-Stack Template", url: "https://create.t3.gg" },
      { name: "Theo's YouTube", type: "Video", url: "https://youtube.com/@t3dotgg" },
    ],
    commonMistakes: [
      "ไม่แยก Server vs Client Component — ใส่ 'use client' ทุกที่ ทำให้ bundle ใหญ่",
      "ไม่ใช้ Server Actions — ยังเขียน API routes แบบเดิมทั้งที่ Server Actions ง่ายกว่า",
      "ไม่ validate input ทั้ง client + server — ต้อง validate ทั้ง 2 ฝั่งด้วย Zod",
      "Deploy ก่อนทำ auth — ต้องทำ auth ก่อน เพื่อป้องกัน data leak",
      "ไม่จัดการ loading/error states — ต้องมี loading.tsx, error.tsx ทุก route",
    ],
    interviewTopics: ["React Server Components vs Client Components", "Next.js App Router (layouts, loading, error)", "REST API vs Server Actions", "Database design (Prisma schema)", "Authentication flow", "Deployment strategies", "Performance (caching, ISR, streaming)"],
  },

  // ─── MOBILE ───
  {
    name: "Mobile App Developer",
    slug: "mobile",
    icon: "📱",
    tagline: "สร้างแอปมือถือ iOS / Android",
    description: "Mobile Developer สร้างแอปที่รันบน iPhone และ Android — เลือกได้ว่าจะทำ native (Swift/Kotlin) หรือ cross-platform (React Native/Flutter) ที่เขียนโค้ดเดียวใช้ได้ทั้ง 2 platform",
    color: "border-rose-300 dark:border-rose-700",
    difficulty: "intermediate",
    timeToLearn: "8-14 เดือน",
    salaryRange: "20,000 - 140,000+ บาท/เดือน",
    expertAdvice: "\"ถ้ารู้ JavaScript แล้ว React Native เริ่มง่ายสุด — ถ้าเน้น UI สวย performance ดี Flutter เป็นตัวเลือกที่ดี ถ้าอยากเงินเดือนสูง native (Swift/Kotlin) ยังเป็นที่ต้องการมาก\"",
    layers: [
      {
        layer: "Cross-Platform (แนะนำเริ่มต้น)",
        icon: "🔄",
        tools: [
          { name: "React Native + Expo", role: "Cross-platform ด้วย JavaScript/TypeScript", why: "รู้ React แล้ว ต่อยอดได้เลย Expo ทำให้ง่ายขึ้นมาก ไม่ต้อง setup native", alternatives: ["Flutter"], level: "recommended" },
          { name: "Flutter + Dart", role: "Cross-platform ด้วย Dart", why: "UI สวยมาก performance ดี Hot Reload เร็ว community โตเร็ว", alternatives: ["React Native"], level: "recommended" },
        ],
      },
      {
        layer: "Native (เฉพาะ Platform)",
        icon: "📱",
        tools: [
          { name: "Swift + SwiftUI", role: "iOS native", why: "ประสิทธิภาพดีที่สุดบน iPhone ใช้ SwiftUI ทำ UI ง่าย", alternatives: ["UIKit"], level: "optional" },
          { name: "Kotlin + Jetpack Compose", role: "Android native", why: "ภาษาหลักของ Android ที่ Google รับรอง Compose ทำ UI ง่าย", alternatives: ["Java"], level: "optional" },
        ],
      },
      {
        layer: "Backend & Services",
        icon: "☁️",
        tools: [
          { name: "Firebase", role: "Backend-as-a-Service", why: "Auth, Firestore, Push Notification, Analytics ครบไม่ต้องเขียน backend", alternatives: ["Supabase", "AWS Amplify"], level: "recommended" },
          { name: "REST API / GraphQL", role: "เชื่อมกับ backend ที่มีอยู่", why: "ถ้ามี backend team แยก ก็เชื่อมผ่าน API", alternatives: [], level: "must" },
        ],
      },
      {
        layer: "Testing & Deploy",
        icon: "🚀",
        tools: [
          { name: "App Store / Play Store", role: "Publish แอป", why: "ต้องเข้าใจ process สมัคร dev account review guideline metadata", alternatives: [], level: "must" },
          { name: "EAS Build (Expo)", role: "Build & deploy อัตโนมัติ", why: "Build iOS/Android ได้โดยไม่ต้องมี Mac (cloud build)", alternatives: ["Fastlane", "Codemagic"], level: "recommended" },
        ],
      },
    ],
    learningPath: [
      { step: "JavaScript/TypeScript หรือ Dart", duration: "3-4 สัปดาห์", detail: "เรียนภาษาพื้นฐานให้คล่อง" },
      { step: "React Native (Expo) หรือ Flutter", duration: "4-6 สัปดาห์", detail: "Components, Navigation, State, Styling, Lists" },
      { step: "API + Data Management", duration: "3-4 สัปดาห์", detail: "Fetch API, local storage, state management, offline mode" },
      { step: "Native Features", duration: "2-3 สัปดาห์", detail: "Camera, Location, Push Notifications, Permissions" },
      { step: "Build + Publish", duration: "2-3 สัปดาห์", detail: "Build app, submit to App Store / Play Store, handle reviews" },
    ],
    realWorldProject: [
      { name: "Todo App with Auth", description: "แอป Todo มี login, CRUD, sync ข้ามเครื่อง", techUsed: ["React Native", "Expo", "Firebase Auth", "Firestore"] },
      { name: "Food Delivery UI", description: "UI เหมือน Grab Food — ร้านอาหาร เมนู ตะกร้า แผนที่", techUsed: ["Flutter", "Google Maps API", "REST API"] },
      { name: "Fitness Tracker", description: "นับก้าว บันทึกออกกำลังกาย กราฟสถิติ", techUsed: ["React Native", "Expo", "Health API", "Charts"] },
    ],
    mustReadResources: [
      { name: "React Native Docs", type: "Documentation", url: "https://reactnative.dev" },
      { name: "Expo Documentation", type: "Documentation", url: "https://docs.expo.dev" },
      { name: "Flutter Docs", type: "Documentation", url: "https://docs.flutter.dev" },
    ],
    commonMistakes: [
      "ไม่ test บนเครื่องจริง — simulator ไม่เหมือนเครื่องจริง 100%",
      "ไม่สนใจ performance — list ยาวๆ ต้องใช้ FlatList/VirtualizedList",
      "ไม่จัดการ navigation ดี — stack, tab, drawer ต้องวางให้ดี",
      "Ignore platform differences — iOS กับ Android มี UX convention ต่างกัน",
    ],
    interviewTopics: ["Component lifecycle", "Navigation patterns", "State management", "API integration", "Performance optimization", "Push notifications", "App Store deployment process"],
  },

  // ─── DATA ENGINEERING ───
  {
    name: "Data Engineer",
    slug: "data-engineering",
    icon: "🔄",
    tagline: "สร้าง Data Pipeline — ทำให้ข้อมูลพร้อมใช้งาน",
    description: "Data Engineer สร้างท่อส่งข้อมูล (data pipeline) — ดึงข้อมูลจากหลายแหล่ง แปลง ทำความสะอาด แล้วเก็บใน data warehouse ให้ Data Analyst/Scientist ใช้วิเคราะห์ เป็นสายที่เงินเดือนสูงและขาดแคลนมาก",
    color: "border-cyan-300 dark:border-cyan-700",
    difficulty: "advanced",
    timeToLearn: "12-18 เดือน",
    salaryRange: "22,000 - 160,000+ บาท/เดือน",
    expertAdvice: "\"SQL ต้องเก่งมากจริงๆ — 70% ของงาน Data Engineer คือ SQL แล้วเรียน Python + Cloud ให้คล่อง เริ่มจาก ETL ง่ายๆ ก่อน แล้วค่อยไป Spark, Airflow, Streaming\"",
    layers: [
      {
        layer: "ภาษา",
        icon: "📝",
        tools: [
          { name: "SQL", role: "Query + Transform data", why: "ภาษาหลักของ Data Engineer — ต้องเก่ง JOIN, Window Functions, CTEs", alternatives: [], level: "must" },
          { name: "Python", role: "Scripting + ETL", why: "เขียน pipeline, ใช้ Pandas, PySpark, Airflow ทุกอย่างใช้ Python", alternatives: [], level: "must" },
        ],
      },
      {
        layer: "Data Warehouse",
        icon: "🏢",
        tools: [
          { name: "BigQuery (GCP)", role: "Serverless data warehouse", why: "เร็วมาก ไม่ต้อง manage server จ่ายตาม query ฟรี 1 TB/เดือน", alternatives: ["Snowflake", "Redshift (AWS)", "Databricks"], level: "must" },
          { name: "dbt", role: "Transform data ใน warehouse", why: "เขียน SQL แล้ว version control ได้ test data quality ได้ เป็นมาตรฐานใหม่", alternatives: [], level: "recommended" },
        ],
      },
      {
        layer: "ETL / Pipeline",
        icon: "🔧",
        tools: [
          { name: "Apache Airflow", role: "Workflow orchestration", why: "จัดลำดับ task ให้รัน pipeline อัตโนมัติ schedule ได้ retry ได้", alternatives: ["Prefect", "Dagster", "Mage"], level: "must" },
          { name: "Apache Spark / PySpark", role: "Big data processing", why: "ประมวลผลข้อมูลขนาดใหญ่ (TB-PB) ได้ distributed computing", alternatives: ["Pandas (small data)", "Polars"], level: "recommended" },
        ],
      },
      {
        layer: "Streaming",
        icon: "📡",
        tools: [
          { name: "Apache Kafka", role: "Real-time data streaming", why: "ส่ง event/message real-time ระหว่างระบบ ใช้ในระบบ e-commerce, banking, IoT", alternatives: ["AWS Kinesis", "Google Pub/Sub", "RabbitMQ"], level: "recommended" },
        ],
      },
      {
        layer: "Cloud & Infra",
        icon: "☁️",
        tools: [
          { name: "AWS / GCP", role: "Cloud platform", why: "Data Engineer ต้องใช้ cloud — S3, BigQuery, Glue, Dataflow ขึ้นกับบริษัท", alternatives: ["Azure"], level: "must" },
          { name: "Docker", role: "Containerization", why: "Package pipeline ใส่ container deploy ได้ทุกที่", alternatives: [], level: "must" },
          { name: "Terraform", role: "Infrastructure as Code", why: "สร้าง cloud resources ด้วยโค้ด version control ได้", alternatives: ["Pulumi"], level: "optional" },
        ],
      },
    ],
    learningPath: [
      { step: "SQL ขั้นสูง", duration: "4-6 สัปดาห์", detail: "JOIN, Subqueries, CTEs, Window Functions, Performance tuning" },
      { step: "Python + Pandas", duration: "3-4 สัปดาห์", detail: "Data manipulation, file I/O, API calls, basic ETL" },
      { step: "Cloud (GCP/AWS) + BigQuery", duration: "4-6 สัปดาห์", detail: "Cloud storage, data warehouse, basic pipeline" },
      { step: "Airflow + dbt", duration: "4-6 สัปดาห์", detail: "Orchestration, scheduling, data transformation, testing" },
      { step: "Spark + Kafka", duration: "4-6 สัปดาห์", detail: "Big data processing, streaming, distributed computing" },
    ],
    realWorldProject: [
      { name: "Sales Data Pipeline", description: "ดึงข้อมูลจาก CSV/API → transform → load เข้า BigQuery → สร้าง dashboard", techUsed: ["Python", "Airflow", "BigQuery", "dbt", "Looker/Metabase"] },
      { name: "Real-time Event Pipeline", description: "รับ event จาก web app → Kafka → process → store + alert", techUsed: ["Kafka", "Python", "PostgreSQL", "Docker"] },
    ],
    mustReadResources: [
      { name: "Fundamentals of Data Engineering (Book)", type: "Book", url: "https://www.oreilly.com/library/view/fundamentals-of-data/9781098108298/" },
      { name: "dbt Documentation", type: "Documentation", url: "https://docs.getdbt.com" },
      { name: "Apache Airflow Docs", type: "Documentation", url: "https://airflow.apache.org/docs/" },
    ],
    commonMistakes: [
      "ไม่ monitor pipeline — ต้องรู้เมื่อ pipeline fail ก่อนที่ business จะรู้",
      "ไม่ test data quality — ต้องตรวจสอบ null, duplicates, schema changes",
      "ไม่ document schema — คนใน team ต้องรู้ว่า column แต่ละตัวหมายถึงอะไร",
      "ทำ pipeline ซับซ้อนเกินไป — เริ่มง่ายๆ ก่อน แล้วค่อย optimize",
    ],
    interviewTopics: ["SQL (Window Functions, CTEs, performance)", "ETL vs ELT", "Data modeling (Star Schema, Snowflake)", "Airflow DAGs", "Spark basics", "Data quality & testing", "Cloud data services (BigQuery, S3, Redshift)"],
  },

  // ─── DEVOPS ───
  {
    name: "DevOps Engineer",
    slug: "devops",
    icon: "☁️",
    tagline: "สร้าง Pipeline, จัดการ Infrastructure, ทำให้ Deploy เร็วและเสถียร",
    description: "DevOps Engineer เชื่อม Development กับ Operations — สร้าง CI/CD pipeline, จัดการ cloud infrastructure, monitoring, security ทำให้ทีม dev deploy ได้เร็ว บ่อย และเสถียร เป็นสายที่ขาดแคลนมากและเงินเดือนสูง",
    color: "border-amber-300 dark:border-amber-700",
    difficulty: "advanced",
    timeToLearn: "12-18 เดือน",
    salaryRange: "22,000 - 160,000+ บาท/เดือน",
    expertAdvice: "\"เริ่มจาก Linux + Networking ให้แน่น แล้วต่อ Docker → CI/CD → Cloud → Kubernetes — อย่าข้ามไป K8s เลย ต้องเข้าใจ container ให้ดีก่อน Certification (AWS/GCP) ช่วยได้มากจริงๆ\"",
    layers: [
      {
        layer: "พื้นฐาน",
        icon: "🖥️",
        tools: [
          { name: "Linux (Ubuntu)", role: "OS หลักของ server", why: "90% ของ server ในโลกรัน Linux — ต้องใช้ command line คล่อง", alternatives: [], level: "must" },
          { name: "Networking", role: "เข้าใจ network", why: "DNS, TCP/IP, HTTP, SSL, Load Balancer, Firewall — ต้องเข้าใจ", alternatives: [], level: "must" },
          { name: "Bash / Shell Scripting", role: "Automation scripts", why: "เขียน script อัตโนมัติ setup server, deploy, backup", alternatives: ["Python scripting"], level: "must" },
        ],
      },
      {
        layer: "Containerization",
        icon: "🐳",
        tools: [
          { name: "Docker", role: "Container", why: "พื้นฐานของ DevOps สมัยใหม่ — package app ทำงานเหมือนกันทุกที่", alternatives: ["Podman"], level: "must" },
          { name: "Docker Compose", role: "Multi-container", why: "รัน app + dependencies ด้วย config เดียว", alternatives: [], level: "must" },
          { name: "Kubernetes", role: "Container orchestration", why: "จัดการ container จำนวนมาก — auto-scaling, self-healing, rolling updates", alternatives: ["Docker Swarm", "Nomad"], level: "recommended" },
        ],
      },
      {
        layer: "CI/CD",
        icon: "🔄",
        tools: [
          { name: "GitHub Actions", role: "CI/CD pipeline", why: "ฟรี ใช้ง่าย อยู่ใน GitHub เลย เหมาะสำหรับเริ่มต้น", alternatives: ["GitLab CI", "Jenkins", "CircleCI"], level: "must" },
          { name: "ArgoCD", role: "GitOps CD", why: "Deploy Kubernetes ด้วย Git — push config แล้ว K8s อัปเดตอัตโนมัติ", alternatives: ["Flux"], level: "optional" },
        ],
      },
      {
        layer: "Infrastructure as Code",
        icon: "📄",
        tools: [
          { name: "Terraform", role: "สร้าง cloud ด้วยโค้ด", why: "สร้าง server, database, network ด้วยโค้ด version control ได้", alternatives: ["Pulumi", "CloudFormation (AWS)", "CDK"], level: "must" },
          { name: "Ansible", role: "Configuration management", why: "ตั้งค่า server อัตโนมัติ — ติดตั้ง software, config, deploy", alternatives: ["Chef", "Puppet"], level: "recommended" },
        ],
      },
      {
        layer: "Monitoring & Observability",
        icon: "📊",
        tools: [
          { name: "Prometheus + Grafana", role: "Metrics + Dashboard", why: "ดู CPU, RAM, request rate, error rate ในรูปกราฟสวยๆ", alternatives: ["Datadog", "New Relic"], level: "must" },
          { name: "ELK Stack / Loki", role: "Log management", why: "รวม logs จากทุก service ค้นหา debug ได้ง่าย", alternatives: ["Datadog Logs"], level: "recommended" },
        ],
      },
      {
        layer: "Cloud",
        icon: "☁️",
        tools: [
          { name: "AWS", role: "Cloud provider หลัก", why: "ตลาดงานเยอะที่สุด EC2, S3, RDS, ECS/EKS ครบ", alternatives: ["GCP", "Azure"], level: "must" },
        ],
      },
    ],
    learningPath: [
      { step: "Linux + Networking + Bash", duration: "4-6 สัปดาห์", detail: "Command line, SSH, systemd, DNS, TCP/IP, scripting" },
      { step: "Docker + Docker Compose", duration: "3-4 สัปดาห์", detail: "Images, containers, volumes, networks, multi-stage builds" },
      { step: "CI/CD (GitHub Actions)", duration: "2-3 สัปดาห์", detail: "Build, test, deploy pipeline, secrets, matrix builds" },
      { step: "Cloud (AWS) + Terraform", duration: "6-8 สัปดาห์", detail: "EC2, S3, RDS, VPC, IAM, Terraform basics" },
      { step: "Kubernetes", duration: "4-6 สัปดาห์", detail: "Pods, Deployments, Services, Ingress, Helm, RBAC" },
      { step: "Monitoring (Prometheus + Grafana)", duration: "2-3 สัปดาห์", detail: "Metrics, dashboards, alerts, log aggregation" },
    ],
    realWorldProject: [
      { name: "Full CI/CD Pipeline", description: "Push code → lint → test → build Docker → deploy to staging → approve → prod", techUsed: ["GitHub Actions", "Docker", "AWS ECS", "Terraform"] },
      { name: "Kubernetes Cluster", description: "Setup K8s cluster, deploy app, auto-scaling, monitoring", techUsed: ["Kubernetes", "Helm", "Prometheus", "Grafana", "ArgoCD"] },
    ],
    mustReadResources: [
      { name: "The DevOps Handbook", type: "Book", url: "https://itrevolution.com/the-devops-handbook/" },
      { name: "Kubernetes Documentation", type: "Documentation", url: "https://kubernetes.io/docs/" },
      { name: "Terraform Tutorials", type: "Tutorial", url: "https://developer.hashicorp.com/terraform/tutorials" },
    ],
    commonMistakes: [
      "ข้ามพื้นฐาน Linux ไป Kubernetes — ต้องเข้าใจ OS ก่อน",
      "ไม่ใช้ IaC — คลิกสร้างใน console ทำซ้ำไม่ได้ version control ไม่ได้",
      "ไม่ตั้ง monitoring ตั้งแต่แรก — ต้องรู้ก่อน user ว่าระบบมีปัญหา",
      "Over-engineering — ไม่ต้องใช้ K8s ทุกโปรเจกต์ docker compose พอสำหรับงานเล็ก",
      "ไม่ทำ security — IAM, secrets management, network policy ต้องทำตั้งแต่แรก",
    ],
    interviewTopics: ["Linux commands + troubleshooting", "Docker (Dockerfile, multi-stage, networking)", "CI/CD pipeline design", "Kubernetes (Pods, Services, Deployments, Ingress)", "Terraform basics", "Networking (DNS, Load Balancer, SSL)", "Monitoring (Prometheus, Grafana)", "Cloud services (EC2, S3, RDS, VPC)", "Security (IAM, secrets, firewall)"],
  },
];

export function getDomainBySlug(slug: string): TechStackDomain | undefined {
  return domains.find((d) => d.slug === slug);
}

const difficultyLabel: Record<string, string> = {
  beginner: "เริ่มต้นได้เลย",
  intermediate: "ต้องมีพื้นฐาน",
  advanced: "ขั้นสูง",
};
export function getDifficultyLabel(d: string): string {
  return difficultyLabel[d] ?? d;
}
