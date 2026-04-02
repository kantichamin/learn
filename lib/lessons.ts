export interface CodeExample {
  language: string;
  title: string;
  code: string;
  explanation: string;
}

export interface Concept {
  title: string;
  description: string;
  icon: string;
}

export interface Step {
  step: string;
  detail: string;
}

export interface Lesson {
  slug: string;
  title: string;
  titleEn: string;
  icon: string;
  category: string;
  categoryIcon: string;
  color: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  description: string;
  whatIsIt: string;
  whyLearn: string[];
  keyConcepts: Concept[];
  gettingStarted: Step[];
  codeExamples: CodeExample[];
  practiceProjects: string[];
  tips: string[];
  relatedCareers: string[];
}

export const categories = [
  { key: "foundation", label: "พื้นฐาน", labelEn: "Foundations", icon: "🧱" },
  { key: "web", label: "เว็บพื้นฐาน", labelEn: "Web Fundamentals", icon: "🌐" },
  { key: "frontend", label: "ฟรอนต์เอนด์", labelEn: "Frontend", icon: "🎨" },
  { key: "backend", label: "แบ็กเอนด์", labelEn: "Backend", icon: "🔧" },
  { key: "database", label: "ฐานข้อมูล", labelEn: "Database", icon: "🗃️" },
  { key: "devops", label: "DevOps & Cloud", labelEn: "DevOps & Cloud", icon: "☁️" },
  { key: "ai", label: "AI & Data", labelEn: "AI & Data", icon: "🤖" },
  { key: "methodology", label: "วิธีการทำงาน", labelEn: "Methodology", icon: "📐" },
  { key: "architecture", label: "สถาปัตยกรรม & แบบแผน", labelEn: "Architecture & Patterns", icon: "🏛️" },
  { key: "practical", label: "ลงมือทำจริง", labelEn: "Practical Implementation", icon: "🔨" },
  { key: "platform", label: "สร้างแอปทุกแพลตฟอร์ม", labelEn: "Cross-Platform Development", icon: "📱" },
  { key: "softskill", label: "Soft Skills & พัฒนาตัวเอง", labelEn: "Soft Skills & Self-Development", icon: "💪" },
];

const difficultyLabel: Record<string, string> = {
  beginner: "เริ่มต้น",
  intermediate: "ปานกลาง",
  advanced: "ขั้นสูง",
};

export function getDifficultyLabel(d: string) {
  return difficultyLabel[d] ?? d;
}

export const lessons: Lesson[] = [
  // ─── FOUNDATIONS ───
  {
    slug: "git",
    title: "Git & Version Control",
    titleEn: "Git & Version Control",
    icon: "🔀",
    category: "foundation",
    categoryIcon: "🧱",
    color: "orange",
    difficulty: "beginner",
    estimatedTime: "1-2 สัปดาห์",
    description:
      "Git คือระบบควบคุมเวอร์ชันที่ช่วยให้คุณติดตามการเปลี่ยนแปลงของโค้ด ทำงานร่วมกับทีมได้อย่างราบรื่น และย้อนกลับได้เสมอ",
    whatIsIt:
      "ลองนึกภาพว่าคุณกำลังเขียนรายงาน แล้วบันทึกเป็น \"รายงาน_v1\", \"รายงาน_v2\", \"รายงาน_final\", \"รายงาน_final_จริงๆ\" — Git ทำหน้าที่เดียวกัน แต่ฉลาดกว่ามาก มันจะเก็บทุกเวอร์ชันของโค้ดคุณโดยอัตโนมัติ ให้คุณย้อนกลับ เปรียบเทียบ และทำงานร่วมกับคนอื่นได้อย่างไม่มีวันสับสน",
    whyLearn: [
      "ทุกบริษัท Tech ใช้ Git — เป็นทักษะที่ขาดไม่ได้",
      "ช่วยป้องกันโค้ดหาย ย้อนกลับได้เสมอ",
      "ทำงานร่วมกับทีมหลายคนพร้อมกันโดยไม่ทับกัน",
      "สร้าง Portfolio บน GitHub เพื่อแสดงผลงาน",
    ],
    keyConcepts: [
      { title: "Repository (Repo)", description: "โฟลเดอร์โปรเจกต์ที่ Git ดูแล เก็บประวัติทุกอย่าง", icon: "📁" },
      { title: "Commit", description: "การ \"บันทึก\" สถานะของโค้ด ณ จุดหนึ่ง เหมือนถ่ายรูปเก็บไว้", icon: "📸" },
      { title: "Branch", description: "แยกสายการพัฒนาออกมาทำงาน เพื่อไม่กระทบโค้ดหลัก", icon: "🌿" },
      { title: "Merge", description: "รวมโค้ดจาก Branch กลับเข้า Branch หลัก", icon: "🤝" },
      { title: "Pull Request (PR)", description: "ขอให้ทีมรีวิวโค้ดก่อนรวมเข้า Branch หลัก", icon: "📝" },
      { title: "Clone / Push / Pull", description: "Clone = คัดลอก, Push = ส่งขึ้น, Pull = ดึงลงมา", icon: "🔄" },
    ],
    gettingStarted: [
      { step: "ติดตั้ง Git", detail: "ดาวน์โหลดจาก git-scm.com หรือใช้ brew install git บน Mac" },
      { step: "สร้าง GitHub Account", detail: "ไปที่ github.com สมัครสมาชิกฟรี — ที่นี่เก็บโค้ดของคุณ" },
      { step: "เรียนรู้คำสั่งพื้นฐาน", detail: "git init, git add, git commit, git push — แค่ 4 คำสั่งก็เริ่มได้" },
      { step: "สร้าง Repo แรก", detail: "ลองสร้าง Repository บน GitHub แล้ว push โค้ดขึ้นไป" },
      { step: "ฝึก Branching", detail: "สร้าง branch ใหม่ ทำงาน แล้ว merge กลับ — ทำซ้ำจนคล่อง" },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "คำสั่ง Git พื้นฐานที่ใช้ทุกวัน",
        code: `# เริ่มโปรเจกต์ใหม่
git init my-project
cd my-project

# เพิ่มไฟล์และ commit
git add .
git commit -m "first commit"

# เชื่อมต่อ GitHub แล้ว push ขึ้นไป
git remote add origin https://github.com/you/my-project.git
git push -u origin main

# สร้าง branch ใหม่สำหรับฟีเจอร์
git checkout -b feature/login-page

# เสร็จแล้ว merge กลับ main
git checkout main
git merge feature/login-page`,
        explanation:
          "นี่คือ workflow พื้นฐานที่คุณจะใช้ทุกวัน: สร้างโปรเจกต์ → commit → push ขึ้น GitHub → สร้าง branch ทำงาน → merge กลับ",
      },
    ],
    practiceProjects: [
      "สร้าง Repository แรกบน GitHub พร้อม README",
      "ลองทำ branch แยก แก้ไข แล้ว merge กลับ",
      "ส่ง Pull Request ให้เพื่อนรีวิว",
      "Contribute ให้โปรเจกต์ Open Source ง่ายๆ (first-contributions)",
    ],
    tips: [
      "เขียน commit message ให้สื่อความหมาย เช่น 'add login form validation'",
      "commit บ่อยๆ อย่ารอจนเยอะ — commit ทีละเรื่อง",
      "ใช้ .gitignore เพื่อไม่ให้ track ไฟล์ที่ไม่จำเป็น",
      "ฝึกใช้ VS Code มี Git integration ที่ดีมาก",
    ],
    relatedCareers: ["developer", "devops", "data-engineer", "ai-engineer"],
  },
  {
    slug: "command-line",
    title: "Command Line & Terminal",
    titleEn: "Command Line & Terminal",
    icon: "⌨️",
    category: "foundation",
    categoryIcon: "🧱",
    color: "slate",
    difficulty: "beginner",
    estimatedTime: "1 สัปดาห์",
    description:
      "Terminal คือเครื่องมือที่ Developer ใช้ทุกวัน — สั่งงานคอมพิวเตอร์ด้วยการพิมพ์คำสั่ง เร็วและทรงพลังกว่าการคลิก",
    whatIsIt:
      "Terminal (หรือ Command Line) คือหน้าจอสีดำที่ให้คุณพิมพ์คำสั่งเพื่อควบคุมคอมพิวเตอร์ แทนที่จะคลิกเมาส์ ฟังดูน่ากลัว แต่จริงๆ แค่รู้ 10-15 คำสั่ง ก็ใช้งานได้คล่องแล้ว คิดว่ามันเหมือนการคุยกับคอมพิวเตอร์ — คุณบอกสิ่งที่ต้องการ มันก็ทำให้",
    whyLearn: [
      "Developer ใช้ Terminal ทุกวัน — ติดตั้ง, รัน, deploy",
      "เร็วกว่าการคลิกหลายเท่า เมื่อคุ้นเคยแล้ว",
      "เครื่องมือ Dev หลายอย่างทำงานผ่าน Terminal เท่านั้น",
      "จำเป็นสำหรับ Git, Docker, Cloud, Server",
    ],
    keyConcepts: [
      { title: "File System Navigation", description: "เดินทางไปมาระหว่างโฟลเดอร์ด้วย cd, ls, pwd", icon: "📂" },
      { title: "File Operations", description: "สร้าง คัดลอก ย้าย ลบไฟล์ด้วย touch, cp, mv, rm", icon: "📄" },
      { title: "Package Managers", description: "ติดตั้งโปรแกรมด้วย apt, brew, npm, pip", icon: "📦" },
      { title: "Permissions", description: "กำหนดสิทธิ์การเข้าถึงไฟล์ด้วย chmod, chown", icon: "🔐" },
      { title: "Pipes & Redirect", description: "ส่งผลลัพธ์จากคำสั่งหนึ่งไปอีกคำสั่ง ด้วย | และ >", icon: "🔗" },
      { title: "Environment Variables", description: "ตัวแปรที่ระบบใช้เก็บค่า เช่น PATH, HOME", icon: "⚙️" },
    ],
    gettingStarted: [
      { step: "เปิด Terminal", detail: "Mac: เปิด Terminal app / Windows: เปิด PowerShell หรือ WSL" },
      { step: "เรียนรู้ ls, cd, pwd", detail: "ลองเดินทางไปมาในโฟลเดอร์ต่างๆ ดูก่อน" },
      { step: "สร้างและจัดการไฟล์", detail: "ใช้ mkdir, touch, cp, mv สร้างโฟลเดอร์และไฟล์" },
      { step: "ติดตั้งโปรแกรม", detail: "ลองใช้ brew (Mac) หรือ apt (Linux) ติดตั้ง Node.js" },
      { step: "ใช้ในชีวิตจริง", detail: "ลองรัน npm create, git clone ผ่าน Terminal" },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "คำสั่ง Terminal ที่ใช้บ่อยที่สุด",
        code: `# ดูว่าอยู่ที่ไหน
pwd

# ดูไฟล์ในโฟลเดอร์
ls -la

# เข้าโฟลเดอร์
cd Documents/my-project

# สร้างโฟลเดอร์ใหม่
mkdir my-app

# สร้างไฟล์ใหม่
touch index.html

# คัดลอกไฟล์
cp index.html backup.html

# ค้นหาข้อความในไฟล์
grep "hello" *.js

# ดูขนาดโฟลเดอร์
du -sh *`,
        explanation:
          "แค่คำสั่งเหล่านี้ก็ใช้งาน Terminal ได้คล่องแล้ว — ฝึกใช้ทุกวันจะเคยชินเร็ว",
      },
    ],
    practiceProjects: [
      "สร้างโครงสร้างโฟลเดอร์โปรเจกต์ทั้งหมดผ่าน Terminal",
      "เขียน shell script ง่ายๆ ที่ทำงานอัตโนมัติ",
      "ใช้ Terminal สร้างและรัน Next.js project ตั้งแต่ต้น",
    ],
    tips: [
      "ใช้ Tab เพื่อ autocomplete ชื่อไฟล์/โฟลเดอร์",
      "ใช้ลูกศรขึ้น-ลงเพื่อเรียกคำสั่งเก่า",
      "ลองใช้ Zsh + Oh My Zsh เพื่อ Terminal ที่สวยและใช้ง่ายขึ้น",
      "อย่ากลัว! ถ้าทำอะไรผิด กด Ctrl+C เพื่อยกเลิก",
    ],
    relatedCareers: ["developer", "devops", "data-engineer", "system-analyst"],
  },
  {
    slug: "data-structures",
    title: "Data Structures & Algorithms",
    titleEn: "Data Structures & Algorithms",
    icon: "🧮",
    category: "foundation",
    categoryIcon: "🧱",
    color: "indigo",
    difficulty: "intermediate",
    estimatedTime: "4-8 สัปดาห์",
    description:
      "โครงสร้างข้อมูลและอัลกอริทึมคือหัวใจของ Computer Science — สอนให้คุณคิดอย่างเป็นระบบและเขียนโค้ดที่มีประสิทธิภาพ",
    whatIsIt:
      "ลองนึกภาพตู้เสื้อผ้า — ถ้าโยนเสื้อเข้าไปมั่วๆ จะหายาก แต่ถ้าจัดเรียงดีๆ (เสื้อแขนยาว, แขนสั้น, กางเกง) จะหาเจอทันที Data Structures คือวิธีจัดเก็บข้อมูล ส่วน Algorithms คือขั้นตอนในการจัดการข้อมูลนั้นอย่างมีประสิทธิภาพ",
    whyLearn: [
      "ใช้สอบสัมภาษณ์งาน Tech ทุกบริษัทใหญ่",
      "ช่วยเขียนโค้ดที่เร็วขึ้น ใช้ memory น้อยลง",
      "พัฒนาทักษะ Problem Solving ให้แข็งแกร่ง",
      "เข้าใจว่าทำไมบางโค้ดช้า บางโค้ดเร็ว",
    ],
    keyConcepts: [
      { title: "Array & Linked List", description: "เก็บข้อมูลเรียงกัน — Array เข้าถึงเร็ว, Linked List เพิ่ม/ลบเร็ว", icon: "📊" },
      { title: "Stack & Queue", description: "Stack = เข้าหลังออกก่อน (LIFO), Queue = เข้าก่อนออกก่อน (FIFO)", icon: "📚" },
      { title: "Hash Map", description: "เก็บข้อมูลแบบ key-value ค้นหาเร็วมาก O(1)", icon: "🗝️" },
      { title: "Tree & Graph", description: "โครงสร้างแบบต้นไม้/เครือข่าย — ใช้ใน DOM, file system, social network", icon: "🌳" },
      { title: "Sorting", description: "เรียงข้อมูล — Bubble, Merge, Quick Sort มีข้อดีต่างกัน", icon: "🔢" },
      { title: "Big O Notation", description: "วัดความเร็วของ Algorithm เช่น O(1), O(n), O(log n)", icon: "⏱️" },
    ],
    gettingStarted: [
      { step: "เรียนรู้ Big O", detail: "เข้าใจวิธีวัดความเร็วของโค้ด — O(1) เร็วสุด, O(n²) ช้า" },
      { step: "เรียน Array & String", detail: "เริ่มจากปัญหา Array ง่ายๆ บน LeetCode (Easy)" },
      { step: "เรียน Hash Map", detail: "ใช้แก้ปัญหาการค้นหาและนับจำนวน — เป็นอาวุธสำคัญ" },
      { step: "เรียน Stack, Queue, Tree", detail: "ค่อยๆ เพิ่มความยากขึ้น ทำวันละ 1-2 ข้อ" },
      { step: "ฝึกสม่ำเสมอ", detail: "ทำ LeetCode / HackerRank อย่างน้อยวันละ 1 ข้อ" },
    ],
    codeExamples: [
      {
        language: "javascript",
        title: "ตัวอย่าง: ใช้ Hash Map หาตัวเลขซ้ำ",
        code: `function findDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) return num; // เจอตัวซ้ำ!
    seen.add(num);
  }

  return -1; // ไม่มีตัวซ้ำ
}

// O(n) — เร็วมาก เพราะ Set.has() เป็น O(1)
console.log(findDuplicate([1, 3, 5, 3, 7])); // 3`,
        explanation:
          "แทนที่จะใช้ 2 loops (O(n²)) เราใช้ Set/Hash Map ทำให้เร็วขึ้นเป็น O(n) — นี่คือพลังของ Data Structure ที่เหมาะสม",
      },
    ],
    practiceProjects: [
      "ทำ LeetCode Easy 30 ข้อแรก",
      "สร้าง Stack ที่ใช้งานจริง (เช่น undo/redo)",
      "Implement Binary Search Tree ด้วยตัวเอง",
      "แก้ปัญหา Two Sum, Valid Parentheses, Merge Sorted Arrays",
    ],
    tips: [
      "อย่าท่องจำ — เข้าใจแนวคิดแล้วฝึกประยุกต์",
      "เริ่มจาก Easy แล้วค่อยขยับไป Medium",
      "วาดรูปอธิบายก่อนเขียนโค้ดเสมอ",
      "ทำเป็นนิสัยฝึกทุกวัน แม้วันละ 1 ข้อก็ดี",
    ],
    relatedCareers: ["developer", "ai-engineer", "system-analyst"],
  },

  // ─── WEB FUNDAMENTALS ───
  {
    slug: "html-css",
    title: "HTML & CSS",
    titleEn: "HTML & CSS",
    icon: "🎨",
    category: "web",
    categoryIcon: "🌐",
    color: "blue",
    difficulty: "beginner",
    estimatedTime: "2-3 สัปดาห์",
    description:
      "HTML คือโครงสร้างของเว็บ CSS คือความสวยงาม — รวมกันเป็นพื้นฐานของทุกเว็บไซต์ที่คุณเห็น",
    whatIsIt:
      "ลองนึกถึงบ้าน — HTML คือโครงสร้าง (ผนัง หลังคา ประตู หน้าต่าง) ส่วน CSS คือการตกแต่ง (สีทาบ้าน ม่าน เฟอร์นิเจอร์) ทุกเว็บไซต์ในโลกใช้ HTML และ CSS ดังนั้นนี่คือจุดเริ่มต้นที่ดีที่สุดสำหรับทุกคน",
    whyLearn: [
      "เป็นพื้นฐานที่ทุกอย่างต่อยอดจาก — React, Vue ล้วนสร้างจาก HTML",
      "สร้างเว็บไซต์ได้ตั้งแต่วันแรกที่เรียน",
      "เข้าใจได้ง่าย เหมาะสำหรับผู้เริ่มต้น",
      "ใช้ทำ Portfolio, Resume Online, Landing Page",
    ],
    keyConcepts: [
      { title: "HTML Elements", description: "Tag ต่างๆ เช่น <h1>, <p>, <div>, <img>, <a> ที่สร้างเนื้อหา", icon: "🏗️" },
      { title: "Semantic HTML", description: "ใช้ tag ที่มีความหมาย เช่น <header>, <nav>, <main>, <footer>", icon: "📐" },
      { title: "CSS Selectors", description: "เลือก element ที่จะตกแต่ง ด้วย class, id, tag name", icon: "🎯" },
      { title: "Box Model", description: "ทุก element เป็นกล่อง มี content, padding, border, margin", icon: "📦" },
      { title: "Flexbox", description: "จัดวาง element ในแนวนอน/แนวตั้งอย่างง่ายดาย", icon: "↔️" },
      { title: "CSS Grid", description: "สร้าง layout แบบตารางที่ซับซ้อนได้ง่าย", icon: "🔲" },
      { title: "Responsive Design", description: "ทำให้เว็บแสดงผลสวยบนทุกหน้าจอ (มือถือ, แท็บเล็ต, PC)", icon: "📱" },
    ],
    gettingStarted: [
      { step: "สร้างไฟล์ HTML แรก", detail: "สร้างไฟล์ index.html แล้วเปิดในเบราว์เซอร์ — เห็นผลทันที" },
      { step: "เรียน HTML Tags", detail: "เรียนรู้ heading, paragraph, image, link, list, form" },
      { step: "เพิ่ม CSS", detail: "ลองเปลี่ยนสี ขนาดตัวอักษร พื้นหลัง — เห็นการเปลี่ยนแปลงทันที" },
      { step: "เรียน Flexbox & Grid", detail: "ฝึกจัด layout — นี่คือสิ่งที่ใช้บ่อยที่สุดใน CSS" },
      { step: "สร้าง Responsive Website", detail: "ใช้ Media Queries ทำให้เว็บสวยบนมือถือด้วย" },
    ],
    codeExamples: [
      {
        language: "html",
        title: "HTML + CSS พื้นฐาน: สร้าง Profile Card",
        code: `<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile Card</title>
  <style>
    .card {
      max-width: 320px;
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      text-align: center;
      font-family: sans-serif;
    }
    .card img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .card h2 { margin: 0.5rem 0 0.25rem; }
    .card p { color: #666; }
    .tags {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }
    .tag {
      background: #e0e7ff;
      color: #4338ca;
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      font-size: 0.875rem;
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="avatar.jpg" alt="Profile">
    <h2>สมชาย ใจดี</h2>
    <p>Frontend Developer</p>
    <div class="tags">
      <span class="tag">HTML</span>
      <span class="tag">CSS</span>
      <span class="tag">React</span>
    </div>
  </div>
</body>
</html>`,
        explanation:
          "ตัวอย่างนี้แสดง HTML สำหรับโครงสร้าง + CSS สำหรับความสวยงาม — ลองคัดลอกไปเปิดในเบราว์เซอร์ดูได้เลย!",
      },
    ],
    practiceProjects: [
      "สร้าง Profile Card ของตัวเอง",
      "Clone หน้า Landing Page ง่ายๆ",
      "สร้าง Portfolio Website แบบ Responsive",
      "ทำแบบฝึกหัด Flexbox Froggy (flexboxfroggy.com)",
    ],
    tips: [
      "เปิด DevTools (F12) ในเบราว์เซอร์เพื่อดูและแก้ไข CSS แบบ real-time",
      "ใช้ Emmet shortcut ใน VS Code — พิมพ์ div.card แล้วกด Tab",
      "อย่าลืม viewport meta tag เพื่อให้ responsive ทำงาน",
      "ดู CSS ของเว็บสวยๆ ผ่าน DevTools เพื่อเรียนรู้เทคนิค",
    ],
    relatedCareers: ["developer", "designer"],
  },
  {
    slug: "javascript",
    title: "JavaScript",
    titleEn: "JavaScript",
    icon: "⚡",
    category: "web",
    categoryIcon: "🌐",
    color: "yellow",
    difficulty: "beginner",
    estimatedTime: "3-4 สัปดาห์",
    description:
      "JavaScript คือภาษาโปรแกรมมิ่งของเว็บ — ทำให้เว็บมีชีวิตชีวา ตั้งแต่ปุ่มกด, animation ไปจนถึง backend server",
    whatIsIt:
      "ถ้า HTML คือโครงสร้าง CSS คือการตกแต่ง JavaScript ก็คือ \"สมอง\" ของเว็บ มันทำให้เว็บตอบสนองต่อผู้ใช้ได้ — กดปุ่มแล้วมีอะไรเกิดขึ้น, โหลดข้อมูลจาก server, แสดง animation และอีกมากมาย JavaScript เป็นภาษาที่ได้รับความนิยมมากที่สุดในโลก!",
    whyLearn: [
      "ภาษาที่ใช้ได้ทั้ง Frontend และ Backend (Full-Stack)",
      "ทุกเบราว์เซอร์รัน JavaScript ได้ ไม่ต้องติดตั้งอะไรเพิ่ม",
      "ตลาดงานกว้างมาก — มี Framework เยอะ (React, Vue, Node.js)",
      "เรียนรู้ง่าย เห็นผลลัพธ์ทันที",
    ],
    keyConcepts: [
      { title: "Variables & Types", description: "let, const สำหรับเก็บข้อมูล — string, number, boolean, array, object", icon: "📝" },
      { title: "Functions", description: "ก้อนโค้ดที่ทำงานซ้ำได้ — function, arrow function =>", icon: "⚙️" },
      { title: "DOM Manipulation", description: "เปลี่ยนแปลงหน้าเว็บผ่าน JavaScript เช่น เพิ่ม/ลบ element", icon: "🖱️" },
      { title: "Events", description: "ตอบสนองการกระทำของผู้ใช้ — click, submit, keypress", icon: "👆" },
      { title: "Async / Await", description: "จัดการกับสิ่งที่ใช้เวลา เช่น โหลดข้อมูลจาก API", icon: "⏳" },
      { title: "Array Methods", description: "map, filter, reduce — เครื่องมือจัดการข้อมูลที่ทรงพลัง", icon: "🔧" },
    ],
    gettingStarted: [
      { step: "เปิด Console", detail: "กด F12 ในเบราว์เซอร์ ไปที่ Console — พิมพ์ JavaScript ได้เลย!" },
      { step: "เรียน Variables & Types", detail: "let name = 'สมชาย'; — เริ่มจากเก็บข้อมูลง่ายๆ" },
      { step: "เรียน Functions", detail: "สร้างฟังก์ชันแรก — function greet(name) { return 'สวัสดี ' + name; }" },
      { step: "เรียน Array Methods", detail: "map, filter, find — ใช้บ่อยมากในการทำงานจริง" },
      { step: "ลองทำ Project", detail: "สร้าง Todo App ง่ายๆ — ฝึกทุกอย่างที่เรียนมา" },
    ],
    codeExamples: [
      {
        language: "javascript",
        title: "JavaScript พื้นฐาน: ตัวแปร, ฟังก์ชัน, Array",
        code: `// ตัวแปร
const name = "สมชาย";
let age = 20;

// ฟังก์ชัน
const greet = (person) => \`สวัสดี \${person}! 👋\`;
console.log(greet(name)); // "สวัสดี สมชาย! 👋"

// Array Methods — ใช้บ่อยมาก!
const scores = [85, 92, 78, 95, 88];

const highScores = scores.filter(s => s >= 90);
// [92, 95]

const doubled = scores.map(s => s * 2);
// [170, 184, 156, 190, 176]

const total = scores.reduce((sum, s) => sum + s, 0);
// 438

// Async — ดึงข้อมูลจาก API
async function fetchUsers() {
  const res = await fetch("https://api.example.com/users");
  const users = await res.json();
  console.log(users);
}`,
        explanation:
          "เริ่มจากตัวแปร ฟังก์ชัน แล้วก้าวไปที่ Array methods และ async — นี่คือ 80% ของสิ่งที่คุณจะใช้ในการทำงานจริง",
      },
    ],
    practiceProjects: [
      "สร้าง Todo List App (เพิ่ม, ลบ, mark เสร็จ)",
      "สร้างเครื่องคิดเลข",
      "สร้าง Quiz App ที่ดึงคำถามจาก API",
      "สร้าง Weather App ดึงข้อมูลสภาพอากาศ",
    ],
    tips: [
      "ใช้ console.log() เยอะๆ เพื่อดูว่าโค้ดทำอะไร",
      "เรียนรู้ Array methods ให้คล่อง — ใช้ทุกวัน",
      "อ่าน MDN Web Docs — แหล่งข้อมูลที่ดีที่สุดสำหรับ JavaScript",
      "อย่าข้ามไป React จนกว่าจะเข้าใจ JavaScript พื้นฐานดีแล้ว",
    ],
    relatedCareers: ["developer", "designer"],
  },
  {
    slug: "typescript",
    title: "TypeScript",
    titleEn: "TypeScript",
    icon: "🔷",
    category: "web",
    categoryIcon: "🌐",
    color: "blue",
    difficulty: "intermediate",
    estimatedTime: "2-3 สัปดาห์",
    description:
      "TypeScript คือ JavaScript + ระบบ Type — ช่วยจับ Bug ก่อนรัน ทำให้โค้ดปลอดภัยขึ้นและทำงานร่วมกับทีมได้ดีขึ้น",
    whatIsIt:
      "TypeScript คือ JavaScript ที่มี \"ยามรักษาความปลอดภัย\" คอยตรวจสอบโค้ดให้ก่อนรัน ถ้าคุณส่งตัวเลขไปให้ฟังก์ชันที่ต้องการ string มันจะเตือนทันที แทนที่จะรอให้พังตอนรัน ทุกบริษัทใหญ่ใช้ TypeScript เพราะช่วยลด Bug ได้เยอะมาก",
    whyLearn: [
      "จับ Bug ได้ตั้งแต่ตอนเขียน ไม่ต้องรอรัน",
      "IDE ช่วย autocomplete ได้ดีขึ้นมาก",
      "โปรเจกต์ใหญ่ต้องใช้ — React, Next.js ใช้ TypeScript เป็นมาตรฐาน",
      "อ่านโค้ดของคนอื่นเข้าใจง่ายขึ้น เพราะเห็น Type ชัดเจน",
    ],
    keyConcepts: [
      { title: "Type Annotations", description: "ประกาศ type ให้ตัวแปร เช่น let age: number = 20", icon: "🏷️" },
      { title: "Interface", description: "กำหนดรูปร่างของ object เช่น interface User { name: string; age: number }", icon: "📋" },
      { title: "Union Types", description: "ตัวแปรเป็นได้หลาย type เช่น string | number", icon: "🔀" },
      { title: "Generics", description: "สร้างฟังก์ชัน/class ที่ทำงานกับ type ใดก็ได้", icon: "🧬" },
      { title: "Type Inference", description: "TypeScript เดา type ให้อัตโนมัติในหลายกรณี", icon: "🧠" },
      { title: "Enum & Literal Types", description: "กำหนดค่าที่เป็นไปได้แบบจำกัด เช่น 'admin' | 'user'", icon: "🎯" },
    ],
    gettingStarted: [
      { step: "เข้าใจ JavaScript ก่อน", detail: "TypeScript ต่อยอดจาก JS ดังนั้นต้องรู้ JS พื้นฐานก่อน" },
      { step: "ติดตั้ง TypeScript", detail: "npm install -g typescript แล้วลองสร้างไฟล์ .ts" },
      { step: "เรียน Basic Types", detail: "string, number, boolean, array, object — เริ่มจากพื้นฐาน" },
      { step: "เรียน Interface", detail: "กำหนดรูปร่างข้อมูล — ใช้บ่อยที่สุดใน TypeScript" },
      { step: "ใช้กับ React/Next.js", detail: "สร้างโปรเจกต์ Next.js ด้วย TypeScript เลย" },
    ],
    codeExamples: [
      {
        language: "typescript",
        title: "TypeScript พื้นฐาน: Type Safety ช่วยจับ Bug",
        code: `// กำหนด Interface สำหรับ User
interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "editor";
}

// ฟังก์ชันที่รับ User — TypeScript ตรวจสอบให้
function getDisplayName(user: User): string {
  return \`\${user.name} (\${user.role})\`;
}

// ✅ ถูกต้อง
const admin: User = {
  id: 1,
  name: "สมชาย",
  email: "somchai@mail.com",
  role: "admin",
};

// ❌ Error! role ต้องเป็น "admin" | "user" | "editor"
// const bad: User = { ...admin, role: "superadmin" };

// Generic Function — ใช้กับ type ใดก็ได้
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

getFirst<number>([1, 2, 3]);     // number
getFirst<string>(["a", "b"]);    // string`,
        explanation:
          "TypeScript บอกเราตั้งแต่ตอนเขียนว่าอะไรผิด — ไม่ต้องรอรันแล้วพัง นี่คือพลังของ Type Safety",
      },
    ],
    practiceProjects: [
      "แปลงโปรเจกต์ JavaScript เดิมเป็น TypeScript",
      "สร้าง Todo App ด้วย TypeScript + React",
      "เขียน API types สำหรับ fetch data",
      "สร้าง utility functions แบบ Generic",
    ],
    tips: [
      "ไม่ต้องใช้ type ทุกที่ — ให้ TypeScript infer ได้หลายจุด",
      "เริ่มจาก strict: false แล้วค่อยเปิด strict ทีหลัง",
      "ใช้ interface สำหรับ object, type สำหรับ union/intersection",
      "อย่าใช้ any มากเกินไป — ถ้าใช้ any ก็ไม่ต่างจาก JavaScript",
    ],
    relatedCareers: ["developer", "system-analyst"],
  },

  // ─── FRONTEND ───
  {
    slug: "react",
    title: "React",
    titleEn: "React",
    icon: "⚛️",
    category: "frontend",
    categoryIcon: "🎨",
    color: "cyan",
    difficulty: "intermediate",
    estimatedTime: "3-5 สัปดาห์",
    description:
      "React คือ UI Library ยอดนิยมที่สุดในโลก สร้างโดย Meta (Facebook) ใช้สร้าง User Interface แบบ Component-based",
    whatIsIt:
      "React เปลี่ยนวิธีสร้างเว็บ แทนที่จะเขียน HTML ทั้งหน้า คุณแบ่งเป็นชิ้นส่วนเล็กๆ เรียกว่า \"Component\" เหมือนตัวต่อ LEGO — แต่ละชิ้นทำงานอิสระ แล้วนำมาประกอบกันเป็นหน้าเว็บ Facebook, Instagram, Netflix, Airbnb ล้วนใช้ React",
    whyLearn: [
      "ได้รับความนิยมสูงสุดในตลาดงาน Frontend",
      "Component-based ทำให้โค้ดจัดการง่าย ใช้ซ้ำได้",
      "Ecosystem ใหญ่มาก มีเครื่องมือและ Library เยอะ",
      "ต่อยอดไปทำ Mobile App ด้วย React Native ได้",
    ],
    keyConcepts: [
      { title: "Components", description: "ชิ้นส่วน UI ที่เป็นอิสระ — เช่น Button, Card, Navbar สร้างครั้งเดียว ใช้ซ้ำได้", icon: "🧩" },
      { title: "JSX", description: "เขียน HTML ภายใน JavaScript — ดูแปลกแต่สะดวกมาก", icon: "✨" },
      { title: "Props", description: "ส่งข้อมูลจาก Component แม่ไป Component ลูก เหมือนพารามิเตอร์", icon: "📨" },
      { title: "State (useState)", description: "ข้อมูลที่เปลี่ยนแปลงได้ เช่น จำนวนไลค์, ค่าในฟอร์ม", icon: "🔄" },
      { title: "useEffect", description: "ทำงานบางอย่างเมื่อ Component โหลดหรือ state เปลี่ยน", icon: "⚡" },
      { title: "Hooks", description: "ฟังก์ชันพิเศษของ React เช่น useState, useEffect, useContext", icon: "🪝" },
    ],
    gettingStarted: [
      { step: "ต้องรู้ JavaScript ก่อน", detail: "โดยเฉพาะ array methods, destructuring, arrow functions" },
      { step: "สร้างโปรเจกต์แรก", detail: "npx create-next-app@latest my-app — เริ่มต้นด้วย Next.js เลยดีกว่า" },
      { step: "เรียน Components & JSX", detail: "สร้าง Component ง่ายๆ เช่น Button, Card" },
      { step: "เรียน useState", detail: "สร้าง counter, toggle, form — ฝึกจัดการ state" },
      { step: "สร้างโปรเจกต์จริง", detail: "Todo App, E-commerce page, Blog — เรียนรู้จากการทำ" },
    ],
    codeExamples: [
      {
        language: "tsx",
        title: "React Component พื้นฐาน: Counter App",
        code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold">{count}</h1>
      <div className="mt-4 flex gap-2 justify-center">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -1
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +1
        </button>
      </div>
    </div>
  );
}`,
        explanation:
          "useState ทำให้ React รู้ว่าข้อมูลเปลี่ยน และ re-render หน้าจอให้อัตโนมัติ นี่คือ \"reactivity\" ที่ทำให้ React พิเศษ",
      },
    ],
    practiceProjects: [
      "สร้าง Todo App ด้วย React",
      "สร้างหน้า E-commerce Product List",
      "สร้าง Weather App ดึงข้อมูลจาก API",
      "สร้าง Blog ด้วย React + Markdown",
    ],
    tips: [
      "คิดเป็น Component — แบ่ง UI ออกเป็นชิ้นเล็กๆ ก่อนเขียนโค้ด",
      "ใช้ React DevTools ในเบราว์เซอร์เพื่อ debug",
      "อย่าเปลี่ยน state ตรงๆ — ใช้ setState เสมอ",
      "เรียนรู้ Next.js ควบคู่ไปด้วย เพราะเป็นมาตรฐานอุตสาหกรรม",
    ],
    relatedCareers: ["developer", "designer"],
  },
  {
    slug: "nextjs",
    title: "Next.js",
    titleEn: "Next.js",
    icon: "▲",
    category: "frontend",
    categoryIcon: "🎨",
    color: "slate",
    difficulty: "intermediate",
    estimatedTime: "3-4 สัปดาห์",
    description:
      "Next.js คือ React Framework ที่เพิ่มพลังให้ React — SSR, Routing, API Routes และอีกมากมาย พร้อม deploy ระดับ production",
    whatIsIt:
      "ถ้า React คือเครื่องยนต์ Next.js ก็คือรถยนต์ที่พร้อมขับ มันเพิ่มทุกอย่างที่คุณต้องการ — ระบบ routing (เปลี่ยนหน้า), server-side rendering (โหลดเร็ว), API routes (backend ในตัว), image optimization และอีกมากมาย เว็บไซต์ที่คุณกำลังดูอยู่นี้ก็สร้างด้วย Next.js!",
    whyLearn: [
      "เป็น React Framework อันดับ 1 ของวงการ",
      "มีทุกอย่างในตัว — Routing, API, SSR, SSG",
      "Performance ดีมาก ด้วย Server Components & Streaming",
      "Deploy ง่ายมากบน Vercel (ฟรี)",
    ],
    keyConcepts: [
      { title: "App Router", description: "ระบบ routing ที่ใช้โครงสร้างโฟลเดอร์ — สร้างโฟลเดอร์ = สร้างหน้าใหม่", icon: "📁" },
      { title: "Server Components", description: "Component ที่รัน server — โหลดข้อมูลได้เลย ไม่ส่ง JS ไปเบราว์เซอร์", icon: "🖥️" },
      { title: "Client Components", description: "Component ที่รันบนเบราว์เซอร์ — สำหรับ interactivity (onClick, useState)", icon: "💻" },
      { title: "API Routes", description: "สร้าง Backend API ใน Next.js เลย ไม่ต้อง server แยก", icon: "🔌" },
      { title: "Layout & Loading", description: "Layout ใช้ร่วมหลายหน้า, Loading แสดง skeleton ขณะโหลด", icon: "🎭" },
      { title: "Server Actions", description: "เรียก server function จาก Client Component ได้โดยตรง", icon: "⚡" },
    ],
    gettingStarted: [
      { step: "ต้องรู้ React ก่อน", detail: "Components, Props, State, Hooks — ต้องเข้าใจก่อนเรียน Next.js" },
      { step: "สร้างโปรเจกต์", detail: "npx create-next-app@latest — เลือก TypeScript, Tailwind CSS, App Router" },
      { step: "เรียน File-based Routing", detail: "สร้างโฟลเดอร์ app/about/page.tsx → เข้าถึงได้ที่ /about" },
      { step: "เรียน Server vs Client", detail: "เข้าใจว่าเมื่อไหร่ใช้ Server Component เมื่อไหร่ใช้ Client" },
      { step: "สร้าง Full-Stack App", detail: "ทำ Blog, Portfolio, หรือ E-commerce ด้วย Next.js" },
    ],
    codeExamples: [
      {
        language: "tsx",
        title: "Next.js App Router: Page + Layout",
        code: `// app/layout.tsx — Layout ที่ใช้ร่วมทุกหน้า
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <nav>LearnDev</nav>
        {children}
      </body>
    </html>
  );
}

// app/page.tsx — Server Component (default)
// สามารถ fetch ข้อมูลได้เลย!
async function getLatestPosts() {
  const res = await fetch("https://api.example.com/posts");
  return res.json();
}

export default async function HomePage() {
  const posts = await getLatestPosts();

  return (
    <main>
      <h1>Latest Posts</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </main>
  );
}`,
        explanation:
          "Next.js ทำให้ทุกอย่างง่าย — Layout ใช้ร่วมหลายหน้า, Server Component โหลดข้อมูลได้เลยไม่ต้อง useEffect",
      },
    ],
    practiceProjects: [
      "สร้าง Portfolio Website แบบ Full-Stack",
      "สร้าง Blog ด้วย Markdown หรือ CMS",
      "สร้าง Dashboard ด้วย API Routes",
      "Clone เว็บยอดนิยม (Twitter, Reddit) แบบย่อส่วน",
    ],
    tips: [
      "ใช้ Server Components เป็น default — ใช้ 'use client' เฉพาะเมื่อจำเป็น",
      "ใช้ loading.tsx เพื่อ UX ที่ดีขณะโหลดข้อมูล",
      "อ่าน Next.js Docs — เขียนดีมากและเข้าใจง่าย",
      "Deploy บน Vercel ฟรี เพื่อให้คนอื่นเห็นผลงาน",
    ],
    relatedCareers: ["developer"],
  },
  {
    slug: "tailwindcss",
    title: "Tailwind CSS",
    titleEn: "Tailwind CSS",
    icon: "🎐",
    category: "frontend",
    categoryIcon: "🎨",
    color: "teal",
    difficulty: "beginner",
    estimatedTime: "1-2 สัปดาห์",
    description:
      "Tailwind CSS คือ Utility-first CSS Framework ที่ให้คุณเขียน style ตรงใน HTML ด้วย class names สั้นๆ — เร็วและ consistent",
    whatIsIt:
      "แทนที่จะเขียน CSS แยกไฟล์แล้วตั้งชื่อ class เอง Tailwind ให้คุณใช้ class สำเร็จรูปเล็กๆ ประกอบกัน เช่น class=\"bg-blue-500 text-white p-4 rounded-lg\" — เห็นปุ๊บรู้เลยว่าหน้าตาจะเป็นยังไง เร็วมากและไม่มีปัญหาชื่อ class ซ้ำ เว็บที่คุณกำลังดูอยู่ก็ใช้ Tailwind CSS!",
    whyLearn: [
      "เขียน CSS เร็วขึ้น 3-5 เท่า",
      "ไม่ต้องคิดชื่อ class — ใช้ utility classes เลย",
      "Design สวยง่าย ด้วยระบบสี ขนาด ระยะห่างที่ consistent",
      "ได้รับความนิยมสูงสุดในปี 2025-2026",
    ],
    keyConcepts: [
      { title: "Utility Classes", description: "class เล็กๆ ที่ทำหน้าที่เดียว เช่น p-4, text-lg, bg-blue-500", icon: "🧰" },
      { title: "Responsive", description: "ใช้ sm:, md:, lg: นำหน้าเพื่อกำหนด style ตามขนาดหน้าจอ", icon: "📱" },
      { title: "Dark Mode", description: "ใช้ dark: นำหน้าเพื่อกำหนด style โหมดมืด", icon: "🌙" },
      { title: "Hover & States", description: "hover:, focus:, active: — กำหนด style ตาม state", icon: "👆" },
      { title: "Flexbox & Grid", description: "flex, grid, gap, items-center — จัด layout ง่ายมาก", icon: "📐" },
      { title: "Customization", description: "ปรับแต่งสี, font, spacing ได้ใน config", icon: "🎨" },
    ],
    gettingStarted: [
      { step: "ลองบน Tailwind Play", detail: "เข้า play.tailwindcss.com — ลองเขียนได้เลยไม่ต้องติดตั้ง" },
      { step: "ติดตั้งในโปรเจกต์", detail: "Next.js มี Tailwind ในตัว — เลือก Yes ตอนสร้างโปรเจกต์" },
      { step: "เรียน Spacing & Colors", detail: "p-4, m-2, bg-blue-500, text-white — เริ่มจากตรงนี้" },
      { step: "เรียน Flexbox", detail: "flex, items-center, justify-between — ใช้บ่อยที่สุด" },
      { step: "สร้าง Components สวยๆ", detail: "ลองสร้าง Card, Button, Navbar ด้วย Tailwind" },
    ],
    codeExamples: [
      {
        language: "html",
        title: "Tailwind CSS: สร้าง Card สวยๆ ใน 1 นาที",
        code: `<div class="mx-auto max-w-sm rounded-2xl border bg-white p-6
            shadow-lg transition-transform hover:-translate-y-1
            dark:border-slate-700 dark:bg-slate-800">

  <div class="flex items-center gap-4">
    <img class="h-12 w-12 rounded-full" src="avatar.jpg" alt="">
    <div>
      <h3 class="font-semibold text-slate-900 dark:text-white">
        สมชาย ใจดี
      </h3>
      <p class="text-sm text-slate-500">Frontend Developer</p>
    </div>
  </div>

  <p class="mt-4 text-slate-600 dark:text-slate-300">
    สร้างเว็บแอปด้วย React และ Next.js
  </p>

  <div class="mt-4 flex gap-2">
    <span class="rounded-full bg-blue-100 px-3 py-1 text-xs
                 font-medium text-blue-700">React</span>
    <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs
                 font-medium text-emerald-700">Next.js</span>
  </div>
</div>`,
        explanation:
          "อ่าน class names แล้วเห็นภาพเลยว่าจะหน้าตายังไง — rounded-2xl (มน), shadow-lg (เงา), hover:-translate-y-1 (ลอยขึ้นเมื่อ hover)",
      },
    ],
    practiceProjects: [
      "สร้าง Landing Page สวยๆ ด้วย Tailwind",
      "Clone หน้า Twitter/X ด้วย Tailwind",
      "สร้าง Dashboard UI ด้วย Grid + Flexbox",
      "ทำ Responsive Navigation Bar",
    ],
    tips: [
      "ติดตั้ง Tailwind CSS IntelliSense ใน VS Code — autocomplete ดีมาก",
      "ใช้ @apply เมื่อ class ยาวเกินไปและใช้ซ้ำบ่อย",
      "ใช้ Tailwind UI (tailwindui.com) เป็นแรงบันดาลใจ",
      "เรียนรู้ระบบ spacing: 1 = 0.25rem, 4 = 1rem, 8 = 2rem",
    ],
    relatedCareers: ["developer", "designer"],
  },

  // ─── BACKEND ───
  {
    slug: "nodejs",
    title: "Node.js",
    titleEn: "Node.js",
    icon: "🟢",
    category: "backend",
    categoryIcon: "🔧",
    color: "green",
    difficulty: "intermediate",
    estimatedTime: "3-4 สัปดาห์",
    description:
      "Node.js ให้คุณใช้ JavaScript เขียน Backend ได้ — สร้าง server, API, เชื่อมต่อ database ด้วยภาษาเดียวกับ Frontend",
    whatIsIt:
      "ปกติ JavaScript ทำงานในเบราว์เซอร์เท่านั้น แต่ Node.js ทำให้ JavaScript ทำงานนอกเบราว์เซอร์ได้ คุณจึงใช้ JavaScript เขียนทั้ง Frontend และ Backend ได้เลย! นั่นหมายความว่าเรียนรู้ภาษาเดียว ทำได้ทุกอย่าง",
    whyLearn: [
      "ใช้ JavaScript ทำ Full-Stack ได้ — ไม่ต้องเรียนภาษาใหม่",
      "NPM มี packages มากกว่า 2 ล้านตัว",
      "เร็วมาก ด้วย Non-blocking I/O",
      "บริษัท Tech ใหญ่ๆ ใช้กันหมด — Netflix, PayPal, LinkedIn",
    ],
    keyConcepts: [
      { title: "NPM / Package Manager", description: "ติดตั้ง library ง่ายๆ ด้วย npm install", icon: "📦" },
      { title: "Express.js", description: "Framework ยอดนิยมสำหรับสร้าง REST API", icon: "🚂" },
      { title: "Middleware", description: "ฟังก์ชันที่ทำงานก่อนถึง route handler — เช่น auth, logging", icon: "🔗" },
      { title: "File System", description: "อ่านเขียนไฟล์ ด้วย fs module", icon: "📁" },
      { title: "Environment Variables", description: "เก็บค่าลับ เช่น API key, database URL ใน .env", icon: "🔐" },
      { title: "Error Handling", description: "จัดการ error อย่างเป็นระบบด้วย try-catch", icon: "🛡️" },
    ],
    gettingStarted: [
      { step: "ติดตั้ง Node.js", detail: "ดาวน์โหลดจาก nodejs.org — แนะนำ LTS version" },
      { step: "สร้างโปรเจกต์แรก", detail: "npm init -y แล้วสร้างไฟล์ index.js" },
      { step: "สร้าง Hello World Server", detail: "ใช้ http module สร้าง server ง่ายๆ" },
      { step: "เรียน Express.js", detail: "npm install express — สร้าง REST API" },
      { step: "เชื่อมต่อ Database", detail: "ใช้ Prisma หรือ Mongoose เชื่อมต่อ DB" },
    ],
    codeExamples: [
      {
        language: "javascript",
        title: "Express.js: สร้าง REST API ง่ายๆ",
        code: `import express from "express";

const app = express();
app.use(express.json());

let todos = [
  { id: 1, title: "เรียน Node.js", done: false },
  { id: 2, title: "สร้าง API", done: false },
];

// GET — ดึง todos ทั้งหมด
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// POST — เพิ่ม todo ใหม่
app.post("/api/todos", (req, res) => {
  const todo = {
    id: todos.length + 1,
    title: req.body.title,
    done: false,
  };
  todos.push(todo);
  res.status(201).json(todo);
});

// DELETE — ลบ todo
app.delete("/api/todos/:id", (req, res) => {
  todos = todos.filter(t => t.id !== Number(req.params.id));
  res.status(204).send();
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});`,
        explanation:
          "แค่ไม่กี่บรรทัดก็สร้าง REST API ที่ GET, POST, DELETE ได้แล้ว — Express ทำให้ทุกอย่างง่าย",
      },
    ],
    practiceProjects: [
      "สร้าง REST API สำหรับ Todo App",
      "สร้าง URL Shortener",
      "สร้าง Authentication API (Login/Register)",
      "สร้าง Chat Server ด้วย WebSocket",
    ],
    tips: [
      "ใช้ nodemon เพื่อ auto-restart เมื่อแก้ไขโค้ด",
      "เก็บ API key ใน .env อย่า commit ขึ้น GitHub",
      "เรียนรู้ async/await ให้คล่อง — ใช้ตลอดใน Node.js",
      "ลองใช้ Prisma ORM แทน raw SQL — ง่ายและปลอดภัยกว่า",
    ],
    relatedCareers: ["developer", "devops"],
  },
  {
    slug: "python",
    title: "Python",
    titleEn: "Python",
    icon: "🐍",
    category: "backend",
    categoryIcon: "🔧",
    color: "yellow",
    difficulty: "beginner",
    estimatedTime: "3-4 สัปดาห์",
    description:
      "Python คือภาษาที่อ่านง่ายที่สุด ใช้ได้หลากหลาย — Web, Data Science, AI, Automation ได้หมด",
    whatIsIt:
      "Python เป็นภาษาที่ออกแบบมาให้อ่านง่ายเหมือนภาษาอังกฤษ ไม่มีวงเล็บปีกกายุ่งเหยิง ใช้ indent (ย่อหน้า) แทน ทำให้โค้ดสะอาดตา Python ใช้ได้ตั้งแต่สร้างเว็บ, วิเคราะห์ข้อมูล, สร้าง AI ไปจนถึงเขียน script อัตโนมัติ",
    whyLearn: [
      "อ่านง่ายที่สุด เหมาะเรียนเป็นภาษาแรก",
      "ใช้ได้หลากหลาย — Web, Data, AI, Automation",
      "เป็นภาษาหลักของ Data Science และ AI/ML",
      "มี Library มากมาย — แทบทุกอย่างมีคนทำไว้ให้แล้ว",
    ],
    keyConcepts: [
      { title: "Variables & Types", description: "ไม่ต้องประกาศ type — x = 10, name = 'สมชาย'", icon: "📝" },
      { title: "Lists & Dictionaries", description: "List = array, Dictionary = object/hash map", icon: "📚" },
      { title: "Functions", description: "def greet(name): return f'สวัสดี {name}'", icon: "⚙️" },
      { title: "Classes", description: "Object-Oriented Programming — สร้าง class และ object", icon: "🏗️" },
      { title: "List Comprehension", description: "[x**2 for x in range(10)] — สร้าง list แบบกระชับ", icon: "✨" },
      { title: "Virtual Environment", description: "แยก dependencies ของแต่ละโปรเจกต์ ไม่ปนกัน", icon: "📦" },
    ],
    gettingStarted: [
      { step: "ติดตั้ง Python", detail: "ดาวน์โหลดจาก python.org — Mac/Linux มีติดตั้งมาแล้ว" },
      { step: "ลอง Python REPL", detail: "พิมพ์ python3 ใน Terminal แล้วลองเขียนโค้ดได้เลย" },
      { step: "เรียนพื้นฐาน", detail: "Variables, if-else, loops, functions — ใช้เวลา 1-2 สัปดาห์" },
      { step: "เรียน Library", detail: "requests (HTTP), pandas (data), flask (web)" },
      { step: "สร้างโปรเจกต์", detail: "สร้าง web scraper, automation script, หรือ API ง่ายๆ" },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Python พื้นฐาน: สะอาด อ่านง่าย",
        code: `# Variables — ไม่ต้องประกาศ type
name = "สมชาย"
age = 20
skills = ["Python", "SQL", "Docker"]

# Function
def introduce(person, person_age):
    return f"สวัสดี! ผม {person} อายุ {person_age} ปี"

print(introduce(name, age))

# List Comprehension — สร้าง list แบบกระชับ
squares = [x**2 for x in range(1, 6)]
# [1, 4, 9, 16, 25]

# Dictionary — เก็บข้อมูลแบบ key-value
student = {
    "name": "สมชาย",
    "gpa": 3.75,
    "courses": ["CS101", "MATH201"]
}

# ดึงข้อมูลจาก API
import requests

response = requests.get("https://api.github.com/users/octocat")
data = response.json()
print(f"GitHub user: {data['login']}")`,
        explanation:
          "Python อ่านง่ายเหมือนภาษาอังกฤษ — ไม่มี ;, ไม่มี {}, ใช้ indent แทน ทำให้โค้ดสะอาดตาอัตโนมัติ",
      },
    ],
    practiceProjects: [
      "สร้าง Web Scraper ดึงข้อมูลจากเว็บ",
      "สร้าง REST API ด้วย FastAPI หรือ Flask",
      "เขียน Script อัตโนมัติ (automation)",
      "วิเคราะห์ข้อมูลด้วย Pandas",
    ],
    tips: [
      "ใช้ virtual environment (venv) ทุกโปรเจกต์",
      "เรียนรู้ f-string — เป็นวิธี format string ที่ดีที่สุด",
      "ลอง Jupyter Notebook สำหรับเรียน Data Science",
      "อ่าน Zen of Python — พิมพ์ import this ใน Python REPL",
    ],
    relatedCareers: ["developer", "data-engineer", "ai-engineer", "devops"],
  },
  {
    slug: "rest-api",
    title: "REST API",
    titleEn: "REST API Design",
    icon: "🔌",
    category: "backend",
    categoryIcon: "🔧",
    color: "violet",
    difficulty: "intermediate",
    estimatedTime: "2 สัปดาห์",
    description:
      "REST API คือวิธีที่แอปพลิเคชันคุยกัน — Frontend ส่ง request, Backend ตอบกลับด้วยข้อมูล ทุกแอปสมัยใหม่ใช้",
    whatIsIt:
      "ลองนึกภาพร้านอาหาร — คุณ (Frontend) สั่งอาหารผ่านพนักงาน (API) ไปที่ครัว (Backend) แล้วพนักงานเอาอาหาร (Data) มาเสิร์ฟให้ API ทำหน้าที่เป็น \"พนักงานเสิร์ฟ\" ที่เชื่อมต่อระหว่าง Frontend กับ Backend",
    whyLearn: [
      "ทุกแอปสมัยใหม่ใช้ API — Mobile, Web, IoT",
      "เข้าใจ API = เข้าใจว่าอินเทอร์เน็ตทำงานยังไง",
      "จำเป็นสำหรับทั้ง Frontend และ Backend Developer",
      "ใช้เชื่อมต่อกับ service ภายนอก เช่น payment, social login",
    ],
    keyConcepts: [
      { title: "HTTP Methods", description: "GET=อ่าน, POST=สร้าง, PUT=อัปเดตทั้งหมด, PATCH=อัปเดตบางส่วน, DELETE=ลบ", icon: "📡" },
      { title: "Status Codes", description: "200=สำเร็จ, 201=สร้างแล้ว, 400=request ผิด, 404=ไม่เจอ, 500=server พัง", icon: "🚦" },
      { title: "Endpoints", description: "URL ที่ใช้เข้าถึงข้อมูล เช่น /api/users, /api/posts/1", icon: "🎯" },
      { title: "Request / Response", description: "ส่ง request ไป รับ response กลับ — ปกติเป็น JSON", icon: "🔄" },
      { title: "Authentication", description: "ยืนยันตัวตน — JWT Token, API Key, OAuth", icon: "🔐" },
      { title: "Pagination", description: "แบ่งข้อมูลเยอะๆ เป็นหน้า เช่น ?page=1&limit=20", icon: "📄" },
    ],
    gettingStarted: [
      { step: "เข้าใจ HTTP", detail: "เรียนรู้ว่า HTTP Methods และ Status Codes ทำงานยังไง" },
      { step: "ลองเรียก API", detail: "ใช้ Postman หรือ fetch() เรียก public API ดู" },
      { step: "สร้าง API แรก", detail: "ใช้ Express.js หรือ Next.js API Routes สร้าง CRUD API" },
      { step: "ใช้ Database", detail: "เชื่อมต่อ API กับ Database จริง (PostgreSQL + Prisma)" },
      { step: "เพิ่ม Authentication", detail: "ใส่ JWT Token เพื่อป้องกัน API" },
    ],
    codeExamples: [
      {
        language: "typescript",
        title: "REST API Design: URL และ HTTP Methods ที่ดี",
        code: `// ✅ RESTful API Design ที่ดี
// GET    /api/users          → ดึง users ทั้งหมด
// GET    /api/users/1        → ดึง user id=1
// POST   /api/users          → สร้าง user ใหม่
// PATCH  /api/users/1        → อัปเดต user id=1
// DELETE /api/users/1        → ลบ user id=1

// Next.js API Route ตัวอย่าง
// app/api/users/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  const users = await db.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();

  const user = await db.user.create({
    data: { name: body.name, email: body.email },
  });

  return NextResponse.json(user, { status: 201 });
}`,
        explanation:
          "RESTful API ใช้ URL (endpoint) + HTTP method บอกว่าจะทำอะไรกับข้อมูล — เข้าใจง่ายและเป็นมาตรฐาน",
      },
    ],
    practiceProjects: [
      "สร้าง CRUD API สำหรับ Blog (posts, comments)",
      "สร้าง API ที่มี Authentication (JWT)",
      "เชื่อมต่อ Frontend กับ API ที่สร้างเอง",
      "เขียน API Documentation ด้วย Swagger",
    ],
    tips: [
      "ใช้ noun ไม่ใช่ verb ใน endpoint เช่น /users ไม่ใช่ /getUsers",
      "Return status code ที่ถูกต้อง — อย่า return 200 ทุกอย่าง",
      "ทดสอบ API ด้วย Postman ก่อน integrate กับ Frontend",
      "ใส่ error handling ที่ดี — return error message ที่ชัดเจน",
    ],
    relatedCareers: ["developer", "system-analyst", "business-analyst"],
  },

  // ─── DATABASE ───
  {
    slug: "sql-database",
    title: "SQL & Database",
    titleEn: "SQL & Relational Database",
    icon: "🗃️",
    category: "database",
    categoryIcon: "🗃️",
    color: "blue",
    difficulty: "beginner",
    estimatedTime: "2-3 สัปดาห์",
    description:
      "Database คือที่เก็บข้อมูลของทุกแอป SQL คือภาษาที่ใช้จัดการข้อมูลในนั้น — ถาม หา เพิ่ม แก้ ลบ",
    whatIsIt:
      "Database คือ \"ตู้เก็บเอกสาร\" แบบดิจิทัล ส่วน SQL คือ \"ภาษา\" ที่ใช้คุยกับตู้นั้น คุณบอกว่า \"ขอข้อมูลลูกค้าที่อายุมากกว่า 20 ปี\" แล้ว Database ก็ดึงมาให้ ทุกแอปในโลกเก็บข้อมูลใน Database — ไม่ว่าจะเป็น LINE, Facebook, Banking App",
    whyLearn: [
      "ทุกแอปต้องมี Database — เป็นทักษะพื้นฐาน",
      "ใช้ได้ทุกสายงาน — Dev, BA, Data, DevOps",
      "SQL เรียนง่าย แต่ทรงพลังมาก",
      "เข้าใจ Database = เข้าใจว่าแอปเก็บข้อมูลยังไง",
    ],
    keyConcepts: [
      { title: "Tables & Rows", description: "ตาราง (Table) เก็บข้อมูล แต่ละแถว (Row) คือข้อมูลหนึ่งรายการ", icon: "📊" },
      { title: "SELECT", description: "ดึงข้อมูล — SELECT * FROM users WHERE age > 20", icon: "🔍" },
      { title: "INSERT / UPDATE / DELETE", description: "เพิ่ม แก้ไข ลบข้อมูลในตาราง", icon: "✏️" },
      { title: "JOIN", description: "เชื่อมข้อมูลจากหลายตาราง — เช่น users + orders", icon: "🔗" },
      { title: "Primary Key & Foreign Key", description: "PK = ID ไม่ซ้ำ, FK = เชื่อมไปตารางอื่น", icon: "🔑" },
      { title: "Index", description: "ทำให้ค้นหาเร็วขึ้น เหมือนสารบัญหนังสือ", icon: "📑" },
    ],
    gettingStarted: [
      { step: "ลองบน SQLite Online", detail: "เข้า sqliteonline.com — เขียน SQL ได้เลยไม่ต้องติดตั้ง" },
      { step: "เรียน SELECT", detail: "ดึงข้อมูลจากตาราง — WHERE, ORDER BY, LIMIT" },
      { step: "เรียน INSERT/UPDATE/DELETE", detail: "เพิ่ม แก้ ลบข้อมูล" },
      { step: "เรียน JOIN", detail: "เชื่อมหลายตาราง — INNER JOIN, LEFT JOIN" },
      { step: "ใช้กับโปรเจกต์จริง", detail: "ใช้ PostgreSQL + Prisma กับ Next.js" },
    ],
    codeExamples: [
      {
        language: "sql",
        title: "SQL พื้นฐาน: CRUD + JOIN",
        code: `-- สร้างตาราง
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  gpa DECIMAL(3,2)
);

-- เพิ่มข้อมูล
INSERT INTO students (name, email, gpa)
VALUES ('สมชาย', 'somchai@mail.com', 3.75);

-- ดึงข้อมูล
SELECT name, gpa FROM students
WHERE gpa >= 3.5
ORDER BY gpa DESC;

-- JOIN — เชื่อม 2 ตาราง
SELECT s.name, c.course_name
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id
WHERE s.gpa >= 3.0;

-- อัปเดต
UPDATE students SET gpa = 3.85 WHERE id = 1;

-- ลบ
DELETE FROM students WHERE id = 1;`,
        explanation:
          "SQL อ่านเหมือนภาษาอังกฤษ — SELECT (เลือก) FROM (จาก) WHERE (ที่) — เรียนรู้ง่ายและใช้งานจริงได้เลย",
      },
    ],
    practiceProjects: [
      "ออกแบบ Database สำหรับ E-commerce (users, products, orders)",
      "เขียน SQL queries วิเคราะห์ข้อมูลนักเรียน",
      "สร้าง API ที่ CRUD ข้อมูลจาก PostgreSQL",
      "ทำแบบฝึกหัดบน sqlzoo.net หรือ SQLBolt",
    ],
    tips: [
      "ฝึก SQL ทุกวัน — ยิ่งเขียนบ่อย ยิ่งคล่อง",
      "เรียนรู้ PostgreSQL — เป็น Database ที่ดีที่สุดสำหรับเริ่มต้น",
      "ใช้ Prisma ORM กับ Next.js — ง่ายและปลอดภัยกว่า raw SQL",
      "วาด ER Diagram ก่อนสร้างตาราง",
    ],
    relatedCareers: ["developer", "data-engineer", "business-analyst", "system-analyst"],
  },

  // ─── DEVOPS & CLOUD ───
  {
    slug: "docker",
    title: "Docker",
    titleEn: "Docker & Containers",
    icon: "🐳",
    category: "devops",
    categoryIcon: "☁️",
    color: "blue",
    difficulty: "intermediate",
    estimatedTime: "2-3 สัปดาห์",
    description:
      "Docker ทำให้แอปของคุณรันได้ทุกที่เหมือนกัน — ไม่มีปัญหา \"เครื่องผมรันได้\" อีกต่อไป",
    whatIsIt:
      "ลองนึกภาพ \"กล่องมหัศจรรย์\" ที่คุณใส่แอป + ทุกอย่างที่แอปต้องการ (Node.js, database, library) ลงไป แล้วกล่องนี้รันได้ทุกที่เหมือนกัน — เครื่องคุณ, เครื่องเพื่อน, server จริง ไม่มีปัญหา \"เครื่องผมรันได้ ทำไมเครื่อง server ไม่ได้\" อีกต่อไป นั่นคือ Docker Container",
    whyLearn: [
      "แก้ปัญหา \"It works on my machine\" ได้ 100%",
      "Deploy แอปง่ายและเร็วมาก",
      "ทุกบริษัท Tech ใช้ Docker",
      "พื้นฐานสำคัญสำหรับ Kubernetes และ Cloud",
    ],
    keyConcepts: [
      { title: "Image", description: "พิมพ์เขียวของ Container — เหมือนสูตรอาหาร สร้างกี่จานก็ได้", icon: "📋" },
      { title: "Container", description: "Instance ที่รันจาก Image — เหมือนจานอาหารที่ปรุงจากสูตร", icon: "📦" },
      { title: "Dockerfile", description: "ไฟล์ที่บอกวิธีสร้าง Image — ติดตั้งอะไร, คัดลอกโค้ดยังไง", icon: "📝" },
      { title: "Docker Compose", description: "รันหลาย Container พร้อมกัน เช่น App + Database + Redis", icon: "🎼" },
      { title: "Volumes", description: "เก็บข้อมูลถาวร — ไม่หายเมื่อ Container ถูกลบ", icon: "💾" },
      { title: "Docker Hub", description: "ที่เก็บ Images สำเร็จรูป — เช่น node, postgres, nginx", icon: "🏪" },
    ],
    gettingStarted: [
      { step: "ติดตั้ง Docker Desktop", detail: "ดาวน์โหลดจาก docker.com — มีให้ทั้ง Mac, Windows, Linux" },
      { step: "รัน Container แรก", detail: "docker run hello-world — ลองรัน Container ดู!" },
      { step: "เขียน Dockerfile", detail: "สร้าง Image สำหรับ Next.js App ของคุณ" },
      { step: "ใช้ Docker Compose", detail: "รัน App + PostgreSQL พร้อมกันด้วย docker-compose up" },
      { step: "Push ไป Docker Hub", detail: "แชร์ Image ของคุณให้ทีมใช้ได้" },
    ],
    codeExamples: [
      {
        language: "dockerfile",
        title: "Dockerfile + Docker Compose สำหรับ Next.js",
        code: `# Dockerfile สำหรับ Next.js
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]

# --- docker-compose.yml ---
# version: "3.8"
# services:
#   app:
#     build: .
#     ports:
#       - "3000:3000"
#     environment:
#       - DATABASE_URL=postgresql://user:pass@db:5432/mydb
#     depends_on:
#       - db
#   db:
#     image: postgres:16
#     environment:
#       POSTGRES_USER: user
#       POSTGRES_PASSWORD: pass
#       POSTGRES_DB: mydb
#     volumes:
#       - pgdata:/var/lib/postgresql/data
# volumes:
#   pgdata:`,
        explanation:
          "Dockerfile บอกวิธีสร้าง Image, Docker Compose รันทั้ง App + Database พร้อมกันด้วยคำสั่งเดียว docker-compose up",
      },
    ],
    practiceProjects: [
      "Containerize แอป Next.js ของคุณ",
      "ตั้ง PostgreSQL ด้วย Docker Compose",
      "สร้าง Development Environment ด้วย Docker",
      "Deploy แอปบน Cloud ด้วย Docker",
    ],
    tips: [
      "ใช้ .dockerignore เพื่อไม่ให้คัดลอก node_modules เข้า Image",
      "ใช้ multi-stage build เพื่อ Image ขนาดเล็ก",
      "ตั้ง volume สำหรับ database เพื่อไม่ให้ข้อมูลหาย",
      "เรียน Docker ก่อน Kubernetes — ทีละขั้น",
    ],
    relatedCareers: ["developer", "devops", "system-analyst"],
  },
  {
    slug: "cicd",
    title: "CI/CD",
    titleEn: "Continuous Integration & Deployment",
    icon: "🔄",
    category: "devops",
    categoryIcon: "☁️",
    color: "green",
    difficulty: "intermediate",
    estimatedTime: "2 สัปดาห์",
    description:
      "CI/CD คือระบบอัตโนมัติที่ทดสอบและ deploy โค้ดให้คุณ — push โค้ดปุ๊บ ทุกอย่างรันให้อัตโนมัติ",
    whatIsIt:
      "ลองนึกภาพว่าทุกครั้งที่คุณ push โค้ดขึ้น GitHub มีหุ่นยนต์ที่จะ: 1) ทดสอบโค้ดให้ 2) ตรวจสอบคุณภาพ 3) สร้าง build 4) deploy ขึ้น server ให้อัตโนมัติ — ไม่ต้องทำอะไรเลย นั่นคือ CI/CD! CI = ทดสอบอัตโนมัติ, CD = deploy อัตโนมัติ",
    whyLearn: [
      "ลดเวลา deploy จากชั่วโมงเหลือนาที",
      "จับ bug ก่อนที่จะถึงมือผู้ใช้",
      "ทุกบริษัท Tech สมัยใหม่ใช้ CI/CD",
      "ทำให้ทีมทำงานร่วมกันได้เร็วขึ้น",
    ],
    keyConcepts: [
      { title: "CI (Continuous Integration)", description: "รัน test อัตโนมัติทุกครั้งที่ push โค้ด — จับ bug เร็ว", icon: "🧪" },
      { title: "CD (Continuous Deployment)", description: "deploy ขึ้น production อัตโนมัติเมื่อ test ผ่าน", icon: "🚀" },
      { title: "Pipeline", description: "ลำดับขั้นตอน: Build → Test → Deploy ที่รันอัตโนมัติ", icon: "🔗" },
      { title: "GitHub Actions", description: "CI/CD ที่อยู่ใน GitHub เลย — ใช้ง่ายและฟรี", icon: "🤖" },
      { title: "Automated Testing", description: "เขียน test แล้ว CI รันให้ทุก push", icon: "✅" },
      { title: "Environment", description: "staging (ทดสอบ) vs production (ใช้จริง)", icon: "🌍" },
    ],
    gettingStarted: [
      { step: "เรียน GitHub Actions", detail: "สร้าง .github/workflows/ci.yml ในโปรเจกต์" },
      { step: "สร้าง Pipeline แรก", detail: "ให้รัน npm test ทุกครั้งที่ push" },
      { step: "เพิ่ม Build Step", detail: "เพิ่ม npm run build เพื่อตรวจสอบว่า build ผ่าน" },
      { step: "เพิ่ม Deploy", detail: "deploy ไป Vercel/Netlify อัตโนมัติเมื่อ merge เข้า main" },
      { step: "ใส่ Notifications", detail: "ให้แจ้งเตือนทาง Slack/Discord เมื่อ pipeline สำเร็จหรือล้มเหลว" },
    ],
    codeExamples: [
      {
        language: "yaml",
        title: "GitHub Actions: CI Pipeline สำหรับ Next.js",
        code: `# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - run: npm ci

      - run: npm run lint

      - run: npm run build

      # ถ้ามี test
      # - run: npm test`,
        explanation:
          "ทุกครั้งที่ push ไป main หรือเปิด PR → GitHub Actions จะ install, lint, build ให้อัตโนมัติ ถ้าพังจะแจ้งเตือน",
      },
    ],
    practiceProjects: [
      "ตั้ง CI Pipeline สำหรับโปรเจกต์ส่วนตัว",
      "เพิ่ม automated testing ใน pipeline",
      "ตั้ง auto-deploy ไป Vercel เมื่อ merge",
      "สร้าง badge แสดงสถานะ build ใน README",
    ],
    tips: [
      "เริ่มจาก Pipeline ง่ายๆ แล้วค่อยเพิ่มขั้นตอน",
      "ใส่ cache เพื่อให้ Pipeline รันเร็วขึ้น",
      "ทดสอบ workflow ใน branch ก่อน merge ไป main",
      "อ่าน GitHub Actions Marketplace — มี actions สำเร็จรูปเยอะมาก",
    ],
    relatedCareers: ["devops", "developer"],
  },
  {
    slug: "cloud",
    title: "Cloud Computing",
    titleEn: "Cloud Computing",
    icon: "☁️",
    category: "devops",
    categoryIcon: "☁️",
    color: "sky",
    difficulty: "intermediate",
    estimatedTime: "4-6 สัปดาห์",
    description:
      "Cloud Computing คือการใช้ server, database, storage ผ่านอินเทอร์เน็ต แทนการซื้อเครื่องเอง — จ่ายตามที่ใช้",
    whatIsIt:
      "แทนที่จะซื้อ server ราคาแพงมาตั้งในออฟฟิศ คุณ \"เช่า\" server ผ่านอินเทอร์เน็ตแทน ใช้มากจ่ายมาก ใช้น้อยจ่ายน้อย เหมือนค่าไฟฟ้า! AWS, Google Cloud, Azure คือบริษัทที่ให้บริการ Cloud ใหญ่ที่สุดในโลก",
    whyLearn: [
      "90%+ ของบริษัทใช้ Cloud — เป็นทักษะที่ต้องมี",
      "ประหยัดกว่าซื้อ server เอง + ยืดหยุ่นสูง",
      "เงินเดือนสายงาน Cloud สูงมาก",
      "เปิดโอกาสสายอาชีพ DevOps, Cloud Engineer",
    ],
    keyConcepts: [
      { title: "IaaS / PaaS / SaaS", description: "Infrastructure / Platform / Software as a Service — ระดับของ Cloud", icon: "🏗️" },
      { title: "Virtual Machines", description: "คอมพิวเตอร์เสมือนที่รันบน Cloud — EC2, Compute Engine", icon: "🖥️" },
      { title: "Serverless", description: "รันโค้ดโดยไม่ต้องจัดการ server — Lambda, Cloud Functions", icon: "⚡" },
      { title: "Object Storage", description: "เก็บไฟล์บน Cloud — S3, Cloud Storage, Blob", icon: "🗄️" },
      { title: "CDN", description: "กระจายเนื้อหาไปทั่วโลก ผู้ใช้โหลดเร็ว — CloudFront, Cloudflare", icon: "🌍" },
      { title: "Auto Scaling", description: "เพิ่ม/ลด server อัตโนมัติตามโหลด", icon: "📈" },
    ],
    gettingStarted: [
      { step: "เริ่มจาก Vercel/Netlify", detail: "Deploy Next.js ฟรี — เข้าใจ concept ของ Cloud ง่ายๆ" },
      { step: "สมัคร AWS Free Tier", detail: "ใช้บริการ AWS ฟรี 12 เดือน สำหรับเรียนรู้" },
      { step: "เรียน Core Services", detail: "EC2, S3, RDS, Lambda — 4 ตัวนี้เป็นพื้นฐาน" },
      { step: "Deploy แอปจริง", detail: "ลอง deploy Next.js บน EC2 หรือ Lambda" },
      { step: "เรียน Infrastructure as Code", detail: "ใช้ Terraform จัดการ Cloud ด้วยโค้ด" },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "Deploy Next.js บน Vercel (ง่ายสุด)",
        code: `# 1. ติดตั้ง Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy! แค่นี้เลย
vercel

# แอปของคุณจะได้ URL เช่น
# https://my-app.vercel.app

# Deploy ไป production
vercel --prod

# ตั้ง Environment Variables
vercel env add DATABASE_URL`,
        explanation:
          "Vercel ทำให้ deploy ง่ายสุดๆ — แค่ 1 คำสั่ง แอปคุณก็ออนไลน์แล้ว นี่คือตัวอย่าง PaaS ที่ดีมาก",
      },
    ],
    practiceProjects: [
      "Deploy แอป Next.js ไป Vercel",
      "ตั้ง PostgreSQL บน Cloud (Supabase / Neon)",
      "สร้าง Serverless Function บน AWS Lambda",
      "ใช้ S3 เก็บรูปภาพที่ user อัปโหลด",
    ],
    tips: [
      "เริ่มจาก PaaS (Vercel, Railway) ก่อนแล้วค่อยเรียน IaaS (AWS EC2)",
      "ระวังค่าใช้จ่าย — ตั้ง billing alerts เสมอ",
      "ใช้ Free Tier ให้คุ้ม — AWS, GCP, Azure ให้ฟรี 12 เดือน",
      "สอบ AWS Cloud Practitioner เป็น cert แรก",
    ],
    relatedCareers: ["devops", "developer", "system-analyst", "data-engineer"],
  },

  // ─── AI & DATA ───
  {
    slug: "machine-learning",
    title: "Machine Learning เบื้องต้น",
    titleEn: "Machine Learning Basics",
    icon: "🧠",
    category: "ai",
    categoryIcon: "🤖",
    color: "purple",
    difficulty: "advanced",
    estimatedTime: "6-8 สัปดาห์",
    description:
      "Machine Learning คือการสอนคอมพิวเตอร์ให้เรียนรู้จากข้อมูล — ไม่ต้องเขียนกฎทุกอย่าง แค่ให้ข้อมูลแล้วมันจะเรียนรู้เอง",
    whatIsIt:
      "ปกติโปรแกรมทั่วไปเราต้องบอกทุกขั้นตอน — \"ถ้า A แล้วทำ B\" แต่ Machine Learning ต่างออกไป เราให้ \"ข้อมูลตัวอย่าง\" จำนวนมาก แล้วคอมพิวเตอร์จะเรียนรู้ pattern เอง เช่น ให้รูปแมว 10,000 รูป มันจะเรียนรู้ว่า \"แมวหน้าตาเป็นยังไง\" แล้วบอกได้ว่ารูปใหม่เป็นแมวหรือไม่",
    whyLearn: [
      "AI กำลังเปลี่ยนโลก — เป็นทักษะแห่งอนาคต",
      "เงินเดือนสูงมาก สำหรับสาย AI/ML",
      "ใช้ได้ทุกอุตสาหกรรม — การเงิน สุขภาพ การตลาด",
      "เข้าใจ AI ที่อยู่รอบตัว เช่น ChatGPT, แนะนำสินค้า",
    ],
    keyConcepts: [
      { title: "Supervised Learning", description: "เรียนรู้จากข้อมูลที่มีคำตอบ — เช่น รูปแมว (✓) รูปหมา (✗)", icon: "🎓" },
      { title: "Unsupervised Learning", description: "หา pattern จากข้อมูลที่ไม่มีคำตอบ — เช่น แบ่งกลุ่มลูกค้า", icon: "🔍" },
      { title: "Neural Networks", description: "โครงข่ายที่จำลองการทำงานของสมอง — พื้นฐานของ Deep Learning", icon: "🧬" },
      { title: "Training & Testing", description: "แบ่งข้อมูล 80/20 — train กับ 80% ทดสอบกับ 20%", icon: "📊" },
      { title: "Features & Labels", description: "Features = ข้อมูลที่ใส่เข้าไป, Labels = คำตอบที่ต้องการ", icon: "🏷️" },
      { title: "Overfitting", description: "โมเดลจำข้อมูล train ดีเกินไป แต่ใช้กับข้อมูลใหม่ไม่ได้", icon: "⚠️" },
    ],
    gettingStarted: [
      { step: "เรียน Python ก่อน", detail: "Python + NumPy + Pandas เป็นพื้นฐานของ ML" },
      { step: "เรียนสถิติพื้นฐาน", detail: "Mean, Median, Standard Deviation, Probability" },
      { step: "เรียน Scikit-learn", detail: "Library ML ที่ใช้ง่ายที่สุด — ลองทำ Classification ง่ายๆ" },
      { step: "ทำโปรเจกต์บน Kaggle", detail: "Kaggle มี dataset และ competition ให้ฝึก" },
      { step: "เรียน Deep Learning", detail: "ใช้ PyTorch หรือ TensorFlow สร้าง Neural Network" },
    ],
    codeExamples: [
      {
        language: "python",
        title: "ML แรกของคุณ: ทำนายดอกไม้ด้วย Scikit-learn",
        code: `from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 1. โหลดข้อมูลดอก Iris
data = load_iris()
X = data.data      # features (กลีบดอก)
y = data.target     # labels (ชนิดดอกไม้)

# 2. แบ่ง train/test 80/20
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 3. สร้างและ train โมเดล
model = RandomForestClassifier()
model.fit(X_train, y_train)

# 4. ทำนายและวัดผล
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2%}")  # ~96.67%`,
        explanation:
          "แค่ไม่กี่บรรทัด คุณก็สร้าง ML model ที่ทำนายชนิดดอกไม้ได้แม่นยำ 96%! Scikit-learn ทำให้ ML เข้าถึงได้ง่าย",
      },
    ],
    practiceProjects: [
      "ทำนายราคาบ้าน (Regression)",
      "จำแนกอีเมลสแปม (Classification)",
      "แบ่งกลุ่มลูกค้า (Clustering)",
      "เข้าร่วม Kaggle Competition ระดับ beginner",
    ],
    tips: [
      "เริ่มจาก ML ธรรมดาก่อน อย่ากระโดดไป Deep Learning",
      "เข้าใจข้อมูลก่อนสร้างโมเดล — EDA สำคัญมาก",
      "ลอง Kaggle Learn — คอร์สฟรีที่ดีมาก",
      "อ่าน paper ไม่เข้าใจก็ไม่เป็นไร — ค่อยๆ เรียนรู้",
    ],
    relatedCareers: ["ai-engineer", "data-engineer"],
  },
  {
    slug: "data-science",
    title: "Data Science & Analytics",
    titleEn: "Data Science & Data Analytics",
    icon: "📊",
    category: "ai",
    categoryIcon: "🤖",
    color: "teal",
    difficulty: "intermediate",
    estimatedTime: "4-6 สัปดาห์",
    description:
      "Data Science คือการเปลี่ยนข้อมูลดิบให้เป็น insight ที่มีคุณค่า — วิเคราะห์ สำรวจ และเล่าเรื่องจากข้อมูลเพื่อตัดสินใจได้ดีขึ้น",
    whatIsIt:
      "ลองนึกภาพว่าคุณเปิดร้านชานมไข่มุก มียอดขาย 1 ปี ข้อมูลมหาศาลแต่อ่านไม่รู้เรื่อง Data Science คือการเอาข้อมูลนั้นมา \"ถาม\" คำถาม: วันไหนขายดี? เมนูไหนกำไรสูงสุด? ช่วงไหนควรลดราคา? ลูกค้ากลุ่มไหนซื้อบ่อย? แล้วแสดงคำตอบเป็นกราฟสวยๆ ที่ผู้บริหารดูแล้วเข้าใจทันที นั่นคือพลังของ Data Science — เปลี่ยนตัวเลขมากมายให้กลายเป็น \"ความเข้าใจ\" ที่ช่วยตัดสินใจได้ดีขึ้น",
    whyLearn: [
      "ทุกบริษัทต้องการคนที่อ่านข้อมูลเป็น — Data Literacy เป็นทักษะแห่งอนาคต",
      "เงินเดือนสาย Data สูงมาก — Data Analyst/Scientist เป็นที่ต้องการมาก",
      "เป็นพื้นฐานก่อนเรียน Machine Learning และ AI",
      "ใช้ได้ทุกสายอาชีพ — Dev, BA, PM, Marketing ล้วนต้องอ่านข้อมูลเป็น",
    ],
    keyConcepts: [
      { title: "Pandas", description: "Library Python สำหรับจัดการข้อมูลในรูปแบบตาราง — อ่าน CSV, กรอง, เรียง, join ข้อมูลได้ง่าย", icon: "🐼" },
      { title: "EDA (Exploratory Data Analysis)", description: "สำรวจข้อมูลก่อนวิเคราะห์ — ดูรูปร่าง, ค่าผิดปกติ, missing values, distribution", icon: "🔍" },
      { title: "Data Visualization", description: "แสดงข้อมูลเป็นกราฟ — bar chart, line chart, heatmap ด้วย Matplotlib/Seaborn/Plotly", icon: "📈" },
      { title: "Statistics", description: "Mean, Median, Standard Deviation, Correlation — พื้นฐานที่ต้องรู้", icon: "🔢" },
      { title: "Data Cleaning", description: "ทำความสะอาดข้อมูล — จัดการ missing values, duplicate, ผิดรูปแบบ", icon: "🧹" },
      { title: "Jupyter Notebook", description: "เครื่องมือเขียนโค้ด + เห็นผลลัพธ์ + กราฟ ในที่เดียว — มาตรฐานของสาย Data", icon: "📓" },
      { title: "Feature Engineering", description: "สร้างตัวแปรใหม่จากข้อมูลที่มี เพื่อให้ ML model ทำงานดีขึ้น", icon: "⚙️" },
    ],
    gettingStarted: [
      { step: "ติดตั้ง Jupyter + Pandas", detail: "pip install jupyter pandas matplotlib seaborn — เครื่องมือหลักของสาย Data" },
      { step: "เรียน Pandas พื้นฐาน", detail: "อ่าน CSV, filter rows, select columns, groupby — ใช้บ่อยที่สุด" },
      { step: "ทำ EDA กับ dataset จริง", detail: "ดาวน์โหลด dataset จาก Kaggle แล้วลองสำรวจ — ถามคำถามกับข้อมูล" },
      { step: "สร้าง Visualization", detail: "สร้างกราฟสวยๆ ด้วย Matplotlib/Seaborn — เริ่มจาก bar chart, scatter plot" },
      { step: "ทำ Project End-to-End", detail: "เลือก dataset → EDA → Cleaning → Analysis → Visualization → สรุปผล" },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Pandas + Visualization: วิเคราะห์ยอดขายร้านกาแฟ",
        code: `import pandas as pd
import matplotlib.pyplot as plt

# อ่านข้อมูล
df = pd.read_csv("coffee_sales.csv")

# ดูข้อมูลเบื้องต้น
print(df.shape)        # (1000, 5) = 1000 แถว, 5 คอลัมน์
print(df.head())       # 5 แถวแรก
print(df.describe())   # สถิติพื้นฐาน
print(df.isnull().sum()) # นับ missing values

# กรองข้อมูล
top_sellers = df[df["sales"] > 100]

# GroupBy — ยอดขายรวมแต่ละเมนู
menu_sales = df.groupby("menu")["sales"].sum().sort_values(ascending=False)
print(menu_sales)

# สร้างกราฟ
fig, axes = plt.subplots(1, 2, figsize=(14, 5))

# Bar Chart — เมนูที่ขายดีที่สุด
menu_sales.plot(kind="bar", ax=axes[0], color="teal")
axes[0].set_title("ยอดขายตามเมนู")
axes[0].set_ylabel("จำนวน (แก้ว)")

# Line Chart — ยอดขายรายเดือน
monthly = df.groupby("month")["sales"].sum()
monthly.plot(kind="line", ax=axes[1], marker="o", color="coral")
axes[1].set_title("ยอดขายรายเดือน")

plt.tight_layout()
plt.savefig("analysis.png")
plt.show()`,
        explanation:
          "แค่ไม่กี่บรรทัดก็อ่านข้อมูล วิเคราะห์ และสร้างกราฟสวยๆ ได้ — นี่คือ workflow หลักของ Data Analyst ทำแบบนี้ทุกวัน",
      },
    ],
    practiceProjects: [
      "วิเคราะห์ข้อมูลโควิดประเทศไทย (จำนวนผู้ติดเชื้อ, vaccination rate)",
      "วิเคราะห์ข้อมูล Spotify Top Songs — เพลงแบบไหนฮิต?",
      "วิเคราะห์ข้อมูล E-Commerce: สินค้าขายดี, ช่วงเวลาขายดี",
      "สร้าง Dashboard ด้วย Streamlit แสดงผลการวิเคราะห์",
      "เข้าร่วม Kaggle \"Getting Started\" competition",
    ],
    tips: [
      "เรียน Pandas ให้คล่อง — เป็นเครื่องมือหลักที่ใช้ทุกวัน",
      "EDA ก่อนเสมอ — อย่ากระโดดไป model ก่อนเข้าใจข้อมูล",
      "กราฟที่ดีต้องเล่าเรื่องได้ — ไม่ใช่แค่สวย แต่ต้องสื่อสาร insight",
      "ใช้ Jupyter Notebook — เหมาะกับ Data Science มากเพราะเห็นผลทันที",
      "ลอง Google Colab — ใช้ Jupyter ฟรีบน Cloud ไม่ต้องติดตั้ง",
    ],
    relatedCareers: ["data-engineer", "ai-engineer", "business-analyst"],
  },
  {
    slug: "deep-learning",
    title: "Deep Learning & Neural Networks",
    titleEn: "Deep Learning & Neural Networks",
    icon: "🧬",
    category: "ai",
    categoryIcon: "🤖",
    color: "violet",
    difficulty: "advanced",
    estimatedTime: "8-12 สัปดาห์",
    description:
      "Deep Learning คือ Machine Learning ขั้นสูง ใช้ Neural Networks หลายชั้นเรียนรู้ pattern ที่ซับซ้อน — เบื้องหลังของ ChatGPT, รู้จำใบหน้า, แปลภาษา",
    whatIsIt:
      "ถ้า Machine Learning เหมือนการสอนเด็กแยก \"แมว\" กับ \"หมา\" ด้วยกฎง่ายๆ (มีหนวด = แมว) Deep Learning เหมือนการสร้าง \"สมอง\" จำลองที่เรียนรู้เองได้ เหมือนเด็กที่ดูรูปแมวหมื่นรูปแล้วเข้าใจเองว่าแมวคืออะไร โดยไม่ต้องบอกกฎ Neural Networks จำลองการทำงานของเซลล์ประสาทในสมอง — มีหลาย \"ชั้น\" (layers) ที่ค่อยๆ เรียนรู้จากง่ายไปยาก ChatGPT, Midjourney, Tesla Autopilot ล้วนใช้ Deep Learning",
    whyLearn: [
      "เบื้องหลังเทคโนโลยี AI ที่เปลี่ยนโลก — ChatGPT, Stable Diffusion, AlphaFold",
      "เงินเดือนสูงที่สุดในวงการ Tech — ML/DL Engineer เป็นที่ต้องการมาก",
      "เข้าใจว่า AI สมัยใหม่ทำงานยังไง ไม่ใช่แค่ใช้เป็น",
      "ต่อยอดไป NLP, Computer Vision, Generative AI ได้",
    ],
    keyConcepts: [
      { title: "Neural Network", description: "โครงข่ายที่ประกอบด้วย neurons หลายชั้น — input layer → hidden layers → output layer", icon: "🧠" },
      { title: "CNN (Convolutional Neural Network)", description: "เก่งเรื่องรูปภาพ — จดจำใบหน้า, ตรวจจับวัตถุ, อ่านตัวอักษร", icon: "📷" },
      { title: "RNN / LSTM", description: "เก่งเรื่องข้อมูลลำดับ — ข้อความ, เสียง, เวลา (time series)", icon: "🔄" },
      { title: "Transformer", description: "สถาปัตยกรรมเบื้องหลัง ChatGPT — ปฏิวัติ NLP ทั้งวงการ ด้วย Attention mechanism", icon: "⚡" },
      { title: "Backpropagation", description: "วิธีที่ neural network เรียนรู้ — ส่ง error ย้อนกลับแล้วปรับ weights", icon: "↩️" },
      { title: "GPU Training", description: "ใช้ GPU แทน CPU เพราะเร็วกว่า 10-100 เท่า สำหรับ matrix operations", icon: "🎮" },
      { title: "Transfer Learning", description: "ใช้โมเดลที่ train แล้ว (pre-trained) มาปรับใช้กับงานเรา — ไม่ต้อง train ใหม่ตั้งแต่ศูนย์", icon: "🔄" },
      { title: "PyTorch", description: "Deep Learning framework ที่นิยมที่สุด — ใช้ง่าย debug ง่าย เป็นมาตรฐานในวงการวิจัย", icon: "🔥" },
    ],
    gettingStarted: [
      { step: "ต้องรู้ ML พื้นฐานก่อน", detail: "เข้าใจ supervised/unsupervised learning, overfitting, train/test split ก่อน" },
      { step: "เรียนคณิตศาสตร์ที่จำเป็น", detail: "Linear Algebra (matrix, vector), Calculus (derivative), Probability — ไม่ต้องเก่งมาก แค่เข้าใจ concept" },
      { step: "เรียน PyTorch", detail: "pytorch.org/tutorials — ลองสร้าง neural network ง่ายๆ" },
      { step: "ทำ Image Classification", detail: "ใช้ CNN จำแนกรูปภาพ — เช่น แยกแมวกับหมา (classic!)" },
      { step: "เรียนรู้ Transformers", detail: "เข้าใจ Attention mechanism — พื้นฐานของ ChatGPT, BERT, GPT ทั้งหมด" },
    ],
    codeExamples: [
      {
        language: "python",
        title: "PyTorch: สร้าง Neural Network แรกของคุณ",
        code: `import torch
import torch.nn as nn
import torch.optim as optim

# 1. สร้าง Neural Network
class SimpleNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.layers = nn.Sequential(
            nn.Linear(4, 16),     # input: 4 features
            nn.ReLU(),            # activation function
            nn.Linear(16, 8),     # hidden layer
            nn.ReLU(),
            nn.Linear(8, 3),      # output: 3 classes
        )

    def forward(self, x):
        return self.layers(x)

# 2. สร้างโมเดลและเตรียม training
model = SimpleNet()
criterion = nn.CrossEntropyLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# 3. Training loop
for epoch in range(100):
    # forward pass
    outputs = model(X_train)
    loss = criterion(outputs, y_train)

    # backward pass + optimize
    optimizer.zero_grad()
    loss.backward()      # backpropagation!
    optimizer.step()

    if (epoch + 1) % 20 == 0:
        print(f"Epoch {epoch+1}, Loss: {loss.item():.4f}")

# 4. ทำนาย
with torch.no_grad():
    predictions = model(X_test)
    predicted_classes = predictions.argmax(dim=1)`,
        explanation:
          "PyTorch ทำให้สร้าง Neural Network เหมือนต่อ LEGO — กำหนด layers, เลือก activation function, แล้ว training loop จะปรับ weights ให้อัตโนมัติผ่าน backpropagation",
      },
    ],
    practiceProjects: [
      "สร้าง Image Classifier ด้วย CNN — แยกรูปแมว/หมา",
      "ทำ Sentiment Analysis ด้วย RNN/LSTM",
      "Fine-tune pre-trained model (ResNet, BERT) กับข้อมูลของคุณ",
      "สร้าง Generative model ง่ายๆ (AutoEncoder, GAN)",
      "ทำโปรเจกต์บน Kaggle ที่ต้องใช้ Deep Learning",
    ],
    tips: [
      "ใช้ Google Colab — GPU ฟรี! ไม่ต้องซื้อการ์ดจอแพงๆ",
      "เริ่มจาก pre-trained models — Transfer Learning ช่วยให้ได้ผลดีเร็ว",
      "เข้าใจ intuition ก่อนสูตรคณิตศาสตร์ — \"ทำไม\" สำคัญกว่า \"สูตร\"",
      "อ่าน \"3Blue1Brown Neural Networks\" บน YouTube — อธิบาย DL ด้วยภาพสวยมาก",
      "ใช้ PyTorch เพราะ debug ง่ายกว่า TensorFlow — เขียนเหมือน Python ปกติ",
    ],
    relatedCareers: ["ai-engineer"],
  },
  {
    slug: "nlp",
    title: "NLP — ประมวลผลภาษา",
    titleEn: "Natural Language Processing",
    icon: "💬",
    category: "ai",
    categoryIcon: "🤖",
    color: "emerald",
    difficulty: "advanced",
    estimatedTime: "6-8 สัปดาห์",
    description:
      "NLP คือการสอนคอมพิวเตอร์ให้ \"เข้าใจ\" ภาษามนุษย์ — เบื้องหลังของ ChatGPT, Google Translate, Siri และทุก AI ที่พูดหรืออ่านภาษาคนได้",
    whatIsIt:
      "มนุษย์เราใช้ภาษาอย่างเป็นธรรมชาติ — เราอ่าน พูด เขียน แปลความ เข้าใจอารมณ์จากข้อความได้ แต่คอมพิวเตอร์เห็นข้อความเป็นแค่ \"ตัวอักษร\" NLP คือศาสตร์ที่สอนคอมพิวเตอร์ให้ \"เข้าใจ\" ภาษาเหมือนมนุษย์ ตั้งแต่แยกคำ (tokenize), เข้าใจความหมาย (embedding), ไปจนถึงสร้างข้อความใหม่ (generation) ChatGPT ที่คุณใช้ทุกวัน คือจุดสูงสุดของ NLP ในปัจจุบัน",
    whyLearn: [
      "ChatGPT, Google Translate, Siri ล้วนใช้ NLP — เป็นหัวใจของ AI ยุคนี้",
      "ข้อมูลส่วนใหญ่ในโลกคือ \"ข้อความ\" — email, chat, review, เอกสาร",
      "สาย AI/NLP เงินเดือนสูงมากและมีงานเยอะ",
      "ต่อยอดไปสร้าง Chatbot, AI Search, Content Generation ได้",
    ],
    keyConcepts: [
      { title: "Tokenization", description: "แบ่งข้อความเป็นชิ้นเล็กๆ (tokens) — \"ฉันชอบแมว\" → [\"ฉัน\", \"ชอบ\", \"แมว\"]", icon: "✂️" },
      { title: "Word Embeddings", description: "แปลงคำเป็นตัวเลข (vector) ที่เก็บความหมาย — \"กษัตริย์\" - \"ชาย\" + \"หญิง\" ≈ \"ราชินี\"", icon: "🔢" },
      { title: "Sentiment Analysis", description: "วิเคราะห์อารมณ์จากข้อความ — \"สินค้าดีมาก\" = Positive, \"แย่สุดๆ\" = Negative", icon: "😊" },
      { title: "Named Entity Recognition (NER)", description: "หาชื่อเฉพาะในข้อความ — คน สถานที่ องค์กร วันที่", icon: "🏷️" },
      { title: "Text Classification", description: "จัดหมวดหมู่ข้อความ — spam/not spam, หมวดข่าว, ประเภทคำร้อง", icon: "📂" },
      { title: "Transformer & Attention", description: "สถาปัตยกรรมที่ปฏิวัติ NLP — ให้โมเดลจดจ่อกับส่วนสำคัญของข้อความ", icon: "⚡" },
      { title: "BERT & GPT", description: "BERT = เข้าใจภาษา (ถาม-ตอบ, ค้นหา), GPT = สร้างภาษา (เขียน, chat)", icon: "🧠" },
    ],
    gettingStarted: [
      { step: "เรียน Python + ML ก่อน", detail: "ต้องรู้ Python, Pandas, Scikit-learn มาก่อน" },
      { step: "เรียน Text Preprocessing", detail: "Tokenization, Stemming, Stop words removal — การเตรียมข้อความ" },
      { step: "ลอง Sentiment Analysis", detail: "ใช้ Hugging Face ทำ sentiment analysis ได้ใน 3 บรรทัด!" },
      { step: "เรียน Hugging Face Transformers", detail: "Library ที่รวม pre-trained NLP models ทั้งหมด — ใช้ง่ายมาก" },
      { step: "Fine-tune BERT/GPT", detail: "ปรับ pre-trained model ให้เหมาะกับข้อมูลภาษาไทย" },
    ],
    codeExamples: [
      {
        language: "python",
        title: "NLP ใน 3 บรรทัด ด้วย Hugging Face",
        code: `from transformers import pipeline

# 1. Sentiment Analysis — วิเคราะห์อารมณ์
sentiment = pipeline("sentiment-analysis")
result = sentiment("I love this product! It's amazing!")
print(result)
# [{'label': 'POSITIVE', 'score': 0.9998}]


# 2. Text Generation — สร้างข้อความ
generator = pipeline("text-generation", model="gpt2")
text = generator("The future of AI is", max_length=50)
print(text[0]["generated_text"])


# 3. Named Entity Recognition — หาชื่อเฉพาะ
ner = pipeline("ner", grouped_entities=True)
entities = ner("Elon Musk is the CEO of Tesla in California")
for e in entities:
    print(f"{e['word']}: {e['entity_group']}")
# Elon Musk: PER
# Tesla: ORG
# California: LOC


# 4. Question Answering — ถาม-ตอบจากเนื้อหา
qa = pipeline("question-answering")
answer = qa(
    question="What is the capital of Thailand?",
    context="Thailand is a country in Southeast Asia. "
            "Its capital is Bangkok, a large city known "
            "for ornate shrines and vibrant street life."
)
print(f"Answer: {answer['answer']}, Score: {answer['score']:.2%}")
# Answer: Bangkok, Score: 97.82%`,
        explanation:
          "Hugging Face ทำให้ NLP ง่ายมาก — แค่ 3 บรรทัดก็ทำ sentiment analysis, text generation, NER, QA ได้เลย ไม่ต้อง train model เอง!",
      },
    ],
    practiceProjects: [
      "สร้าง Sentiment Analyzer สำหรับ review สินค้าภาษาไทย",
      "สร้าง Chatbot ถาม-ตอบจากเอกสาร (Question Answering)",
      "สร้างระบบจัดหมวดหมู่ข่าวอัตโนมัติ (Text Classification)",
      "Fine-tune model สำหรับภาษาไทย ด้วย WangchanBERTa",
      "สร้าง Text Summarizer ที่สรุปบทความยาวๆ ให้สั้น",
    ],
    tips: [
      "ใช้ Hugging Face เป็นจุดเริ่มต้น — มี pre-trained models มากกว่า 200,000 ตัว",
      "NLP ภาษาไทยท้าทายกว่าภาษาอังกฤษ — ไม่มีช่องว่างระหว่างคำ ต้องใช้ word segmentation",
      "ลอง WangchanBERTa — BERT ที่ train กับภาษาไทยโดยเฉพาะ",
      "เริ่มจาก pipeline() ก่อน แล้วค่อยลง deep ไปเรื่อง tokenizer, model architecture",
      "อ่าน paper \"Attention Is All You Need\" — paper ที่เปลี่ยนโลก NLP",
    ],
    relatedCareers: ["ai-engineer", "data-engineer"],
  },
  {
    slug: "llm-prompt-engineering",
    title: "LLMs & Prompt Engineering",
    titleEn: "Large Language Models & Prompt Engineering",
    icon: "🤖",
    category: "ai",
    categoryIcon: "🤖",
    color: "rose",
    difficulty: "intermediate",
    estimatedTime: "2-4 สัปดาห์",
    description:
      "LLM คือ AI ที่เข้าใจและสร้างภาษาได้ เช่น ChatGPT, Claude, Gemini — Prompt Engineering คือศาสตร์ในการ \"สั่ง\" AI ให้ได้ผลลัพธ์ที่ดีที่สุด",
    whatIsIt:
      "LLM (Large Language Model) คือ AI ที่ถูก train กับข้อความมหาศาลจนสามารถเข้าใจและสร้างภาษาได้เหมือนมนุษย์ ChatGPT, Claude, Gemini ล้วนเป็น LLM แต่การได้ผลลัพธ์ที่ดีจาก LLM ขึ้นอยู่กับว่าคุณ \"ถาม\" อย่างไร Prompt Engineering คือศาสตร์ในการเขียนคำสั่ง (prompt) ที่ทำให้ AI ให้ผลลัพธ์ตรงใจที่สุด คิดว่า AI เหมือน intern ที่เก่งมากแต่ต้องบอกให้ชัดเจน — ยิ่งบอกชัด ยิ่งได้งานดี",
    whyLearn: [
      "LLM กำลังเปลี่ยนทุกอุตสาหกรรม — ต้องรู้วิธีใช้ให้เป็น",
      "Prompt Engineering เป็นทักษะที่ทำให้ productive ขึ้น 10 เท่า",
      "Developer ที่ใช้ AI Copilot เป็น ทำงานเร็วกว่ามาก",
      "ต่อยอดไปสร้าง AI Application ได้ (RAG, Agent, Chatbot)",
    ],
    keyConcepts: [
      { title: "LLM Architecture", description: "สร้างจาก Transformer ที่ train กับข้อมูลมหาศาล — GPT-4 มีพารามิเตอร์ล้านล้านตัว", icon: "🏗️" },
      { title: "System Prompt", description: "คำสั่งที่กำหนด \"บทบาท\" ของ AI เช่น \"คุณเป็นอาจารย์สอน Python\"", icon: "🎭" },
      { title: "Few-Shot Prompting", description: "ให้ตัวอย่าง 2-3 อันก่อนถามจริง — AI จะเข้าใจรูปแบบที่ต้องการ", icon: "📝" },
      { title: "Chain of Thought", description: "บอกให้ AI \"คิดทีละขั้น\" — ได้คำตอบที่ถูกต้องมากขึ้นสำหรับปัญหาซับซ้อน", icon: "🔗" },
      { title: "Temperature", description: "ควบคุมความ \"สร้างสรรค์\" — 0 = ตอบตรงๆ, 1 = หลากหลาย/สร้างสรรค์", icon: "🌡️" },
      { title: "Token & Context Window", description: "LLM อ่านข้อมูลเป็น tokens — มี limit ว่าจำได้กี่ token (context window)", icon: "📏" },
      { title: "Hallucination", description: "AI \"แต่งเรื่อง\" ที่ฟังดูน่าเชื่อแต่ไม่จริง — ต้อง verify เสมอ!", icon: "👻" },
      { title: "RAG (Retrieval Augmented Generation)", description: "ให้ AI ค้นข้อมูลจริงก่อนตอบ — ลด hallucination ได้มาก", icon: "🔍" },
    ],
    gettingStarted: [
      { step: "ใช้ ChatGPT/Claude ให้เก่ง", detail: "ฝึกเขียน prompt ที่ชัดเจน — ให้บทบาท ให้บริบท ให้ตัวอย่าง ให้ format ที่ต้องการ" },
      { step: "เรียน Prompt Patterns", detail: "System Prompt, Few-Shot, Chain of Thought, Self-Critique — เทคนิคที่ใช้บ่อย" },
      { step: "ลอง OpenAI API", detail: "สมัคร API key แล้วลอง call API ด้วย Python หรือ JavaScript" },
      { step: "สร้าง Chatbot ง่ายๆ", detail: "ใช้ OpenAI API + Next.js สร้าง chatbot ของตัวเอง" },
      { step: "เรียนรู้ RAG", detail: "สร้างระบบที่ AI ตอบจากเอกสารของคุณ — ไม่ hallucinate" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "Prompt Engineering: จาก Bad → Good",
        code: `## ❌ Bad Prompt
"สรุปข้อมูลนี้ให้หน่อย"
→ ผลลัพธ์: ยาว ไม่ตรงจุด ไม่มีโครงสร้าง

## ✅ Good Prompt (ใช้ Framework: Role + Context + Task + Format)

"คุณเป็นนักวิเคราะห์ข้อมูลที่เก่งเรื่องสรุปสาระสำคัญ
(Role: กำหนดบทบาท)

จากรายงานประจำปีด้านล่างนี้
(Context: ให้บริบท)

สรุปประเด็นสำคัญ 5 ข้อ พร้อมตัวเลขที่เกี่ยวข้อง
(Task: บอกชัดเจนว่าต้องการอะไร)

ตอบในรูปแบบ bullet points ภาษาไทย
แต่ละข้อไม่เกิน 2 บรรทัด"
(Format: กำหนดรูปแบบ output)

## 🔗 Chain of Thought Prompt
"ช่วยวิเคราะห์ว่าราคาหุ้น XYZ จะขึ้นหรือลง
ให้คิดทีละขั้น:
1. วิเคราะห์ปัจจัยพื้นฐาน
2. วิเคราะห์ปัจจัยเทคนิค
3. วิเคราะห์สภาพตลาดรวม
4. สรุปความเห็นพร้อมเหตุผล"

## 📝 Few-Shot Prompt
"แปลชื่อเมนูอาหารไทยเป็นภาษาอังกฤษ:
ตัวอย่าง:
- ผัดกะเพรา → Stir-fried Holy Basil
- ต้มยำกุ้ง → Spicy Shrimp Soup
- ส้มตำ → Green Papaya Salad

แปลคำต่อไปนี้:
- ข้าวมันไก่ →
- แกงเขียวหวาน →
- ข้าวเหนียวมะม่วง →"`,
        explanation:
          "Prompt ที่ดีมี 4 องค์ประกอบ: Role (บทบาท) + Context (บริบท) + Task (งาน) + Format (รูปแบบ) ยิ่งชัดเจน ยิ่งได้ผลลัพธ์ดี",
      },
      {
        language: "typescript",
        title: "ใช้ OpenAI API สร้าง AI Chatbot ด้วย Next.js",
        code: `// app/api/chat/route.ts
import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.7,
    messages: [
      {
        role: "system",
        content: \`คุณเป็นอาจารย์สอน Programming ที่อธิบายง่าย
ตอบเป็นภาษาไทย ใช้ตัวอย่างที่เข้าใจง่าย
ถ้ามีโค้ด ให้ใส่ comment อธิบายทุกบรรทัด\`,
      },
      { role: "user", content: message },
    ],
  });

  return NextResponse.json({
    reply: completion.choices[0].message.content,
  });
}`,
        explanation:
          "แค่ไม่กี่บรรทัดก็สร้าง AI API ที่ตอบคำถามเป็นภาษาไทยได้ — System prompt กำหนดบุคลิกของ AI, temperature กำหนดความสร้างสรรค์",
      },
    ],
    practiceProjects: [
      "สร้าง AI Chatbot สำหรับถาม-ตอบเรื่อง Programming ด้วย Next.js + OpenAI",
      "สร้าง \"AI Resume Reviewer\" ที่วิเคราะห์ resume และให้ feedback",
      "สร้าง Content Generator ที่เขียนบทความจาก outline",
      "สร้าง RAG system ที่ตอบคำถามจากเอกสาร PDF ของคุณ",
      "ทดลอง prompt patterns ต่างๆ กับ ChatGPT แล้วเปรียบเทียบผลลัพธ์",
    ],
    tips: [
      "\"Garbage in, garbage out\" — prompt ไม่ดี ผลลัพธ์ก็ไม่ดี ลงทุนเวลากับ prompt",
      "อย่าเชื่อ AI 100% — ตรวจสอบข้อเท็จจริงเสมอ AI hallucinate ได้",
      "ใช้ System Prompt เพื่อกำหนดบุคลิก + ข้อจำกัดของ AI",
      "temperature ต่ำ (0-0.3) สำหรับงาน factual, สูง (0.7-1.0) สำหรับงาน creative",
      "เรียนรู้ RAG — เป็น pattern ที่สำคัญที่สุดในการสร้าง AI app ที่แม่นยำ",
    ],
    relatedCareers: ["ai-engineer", "developer", "product-owner"],
  },
  {
    slug: "ai-app-development",
    title: "สร้างแอป AI จริง",
    titleEn: "Building AI-Powered Applications",
    icon: "🛠️",
    category: "ai",
    categoryIcon: "🤖",
    color: "blue",
    difficulty: "intermediate",
    estimatedTime: "4-6 สัปดาห์",
    description:
      "เรียนรู้วิธีสร้างแอปพลิเคชันที่ใช้พลัง AI จริงๆ — RAG, AI Chat, Image Generation, Voice AI — ตั้งแต่ idea ถึง production",
    whatIsIt:
      "คุณรู้จัก ChatGPT, Midjourney, GitHub Copilot — แต่จะสร้างแอปแบบนี้เองได้ยังไง? ยุคนี้ไม่ต้อง train model เองแล้ว คุณสามารถใช้ API ของ OpenAI, Anthropic, Google เป็น \"สมอง\" แล้วสร้าง UI/UX ที่ดีกว่ารอบๆ ได้เลย เหมือนคุณไม่ต้องสร้างเครื่องยนต์เอง แค่เอาเครื่องยนต์ดีๆ มาใส่รถที่ออกแบบเอง สิ่งที่สร้างความแตกต่างคือ: จะเอา AI มาแก้ปัญหาอะไร ออกแบบ UX ยังไง และทำให้ reliable ยังไง",
    whyLearn: [
      "AI App คือ startup opportunity ที่ใหญ่ที่สุดในปี 2025-2026",
      "ไม่ต้อง train model เอง — ใช้ API ได้เลย Developer ก็สร้าง AI app ได้",
      "เพิ่มมูลค่าให้ Portfolio มหาศาล — นายจ้างสนใจคนที่สร้าง AI app ได้",
      "ทักษะ AI + Full-Stack = ตำแหน่งงานที่เงินเดือนสูงที่สุด",
    ],
    keyConcepts: [
      { title: "AI SDK (Vercel AI SDK)", description: "Library สำหรับสร้าง AI UI ใน Next.js — streaming, chat interface, tool calling", icon: "📦" },
      { title: "RAG (Retrieval Augmented Generation)", description: "ให้ AI ค้นข้อมูลจาก database ของคุณก่อนตอบ — แม่นยำ ไม่ hallucinate", icon: "🔍" },
      { title: "Vector Database", description: "ฐานข้อมูลที่เก็บ \"ความหมาย\" ของข้อมูล — ค้นหาด้วย semantic search", icon: "🗄️" },
      { title: "Embeddings", description: "แปลงข้อความเป็น vector ตัวเลข — ใช้หาความคล้ายคลึงระหว่างข้อมูล", icon: "🔢" },
      { title: "Streaming Response", description: "แสดงผลลัพธ์ AI ทีละตัวอักษร (เหมือน ChatGPT) — UX ดีกว่ารอจนเสร็จ", icon: "⚡" },
      { title: "Tool Calling / Function Calling", description: "ให้ AI เรียกใช้ฟังก์ชันของเรา — เช่น ค้นหา, คำนวณ, เรียก API", icon: "🔧" },
      { title: "Guardrails", description: "กำหนดขอบเขตว่า AI ทำอะไรได้/ไม่ได้ — ป้องกัน jailbreak, off-topic", icon: "🛡️" },
    ],
    gettingStarted: [
      { step: "สมัคร OpenAI API Key", detail: "ไปที่ platform.openai.com — ได้ credit ฟรีสำหรับเริ่มต้น" },
      { step: "สร้าง AI Chat ง่ายๆ", detail: "ใช้ Vercel AI SDK + Next.js สร้าง chatbot ใน 30 นาที" },
      { step: "เรียนรู้ Streaming", detail: "ให้ AI ตอบทีละตัวอักษร — UX ดีขึ้นมากเพราะไม่ต้องรอ" },
      { step: "สร้าง RAG System", detail: "อัปโหลดเอกสาร → สร้าง embeddings → ให้ AI ตอบจากเอกสารของคุณ" },
      { step: "Deploy AI App", detail: "Deploy ขึ้น Vercel พร้อม environment variables สำหรับ API key" },
    ],
    codeExamples: [
      {
        language: "typescript",
        title: "สร้าง AI Chat ด้วย Vercel AI SDK + Next.js",
        code: `// 1. ติดตั้ง: npm install ai @ai-sdk/openai

// app/api/chat/route.ts — API Route
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: "คุณเป็นผู้ช่วยอัจฉริยะที่ตอบภาษาไทย สุภาพ กระชับ",
    messages,
  });

  return result.toDataStreamResponse();
}


// app/chat/page.tsx — Chat UI
"use client";
import { useChat } from "ai/react";

export default function ChatPage() {
  const { messages, input, handleInputChange, handleSubmit } =
    useChat();

  return (
    <div className="mx-auto max-w-2xl p-4">
      <div className="space-y-4">
        {messages.map((m) => (
          <div
            key={m.id}
            className={m.role === "user"
              ? "text-right"
              : "text-left"}
          >
            <span className="inline-block rounded-lg px-4 py-2
              bg-violet-100 dark:bg-violet-900">
              {m.content}
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="พิมพ์ข้อความ..."
          className="flex-1 rounded-lg border p-3"
        />
        <button className="rounded-lg bg-violet-600 px-6 py-3
          text-white">
          ส่ง
        </button>
      </form>
    </div>
  );
}`,
        explanation:
          "Vercel AI SDK ทำให้สร้าง AI Chat ง่ายมาก — useChat() จัดการ state ทั้งหมดให้ streamText() ส่งผลลัพธ์ทีละตัวอักษร แค่นี้ก็ได้ AI Chatbot ที่ streaming เหมือน ChatGPT!",
      },
      {
        language: "markdown",
        title: "AI App Ideas ที่สร้างได้จริง",
        code: `## 🟢 Easy (1-2 สัปดาห์)
- AI Chat Assistant — ตอบคำถามเฉพาะทาง (กฎหมาย, สุขภาพ, coding)
- AI Resume Builder — กรอกข้อมูลแล้ว AI สร้าง resume ให้
- AI Email Writer — ป้อน bullet points แล้ว AI เขียน email ให้

## 🟡 Medium (2-4 สัปดาห์)
- RAG Document Chat — อัปโหลด PDF แล้วถามตอบจากเนื้อหา
- AI Study Assistant — อ่านหนังสือแล้วสร้าง quiz + flashcard
- AI Code Reviewer — ส่งโค้ดให้ AI รีวิวและแนะนำ

## 🔴 Advanced (4-8 สัปดาห์)
- AI Customer Support — ตอบลูกค้าอัตโนมัติจาก knowledge base
- Multi-modal AI — รับทั้งรูปภาพ + ข้อความ วิเคราะห์ร่วมกัน
- AI Agent — AI ที่ทำงานหลายขั้นตอนเอง (search → analyze → act)`,
        explanation:
          "เลือกโปรเจกต์ที่ \"พอดี\" กับระดับของคุณ — เริ่มจาก Easy แล้วค่อยขยับ ทุกโปรเจกต์เหล่านี้ ใส่ Portfolio ได้เลย",
      },
    ],
    practiceProjects: [
      "สร้าง AI Chat Assistant ด้วย Vercel AI SDK + Next.js",
      "สร้าง RAG System: อัปโหลด PDF → ถามตอบจากเนื้อหา",
      "สร้าง AI Study Helper: paste บทเรียน → สร้าง quiz อัตโนมัติ",
      "สร้าง AI Image Generator UI ด้วย DALL-E API",
      "สร้าง AI Code Explainer: paste โค้ด → AI อธิบายทีละบรรทัด",
    ],
    tips: [
      "เริ่มจาก API-based AI ก่อน — ไม่ต้อง train model เอง ใช้ OpenAI/Anthropic API",
      "Streaming สำคัญมาก — user ไม่ชอบรอ ให้แสดงผลทีละตัวอักษร",
      "RAG คือ pattern ที่สำคัญที่สุดในปี 2025-2026 — เรียนรู้ให้เชี่ยวชาญ",
      "ตั้ง rate limiting และ spending limits — ป้องกัน API cost บานปลาย",
      "AI ไม่ใช่คำตอบของทุกปัญหา — บางทีกฎ if-else ดีกว่า",
    ],
    relatedCareers: ["ai-engineer", "developer", "product-owner"],
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    titleEn: "Computer Vision",
    icon: "👁️",
    category: "ai",
    categoryIcon: "🤖",
    color: "cyan",
    difficulty: "advanced",
    estimatedTime: "6-8 สัปดาห์",
    description:
      "Computer Vision สอนคอมพิวเตอร์ให้ \"เห็น\" — รู้จำใบหน้า, ตรวจจับวัตถุ, อ่านป้ายทะเบียน, ขับรถอัตโนมัติ ล้วนใช้ CV",
    whatIsIt:
      "ลองคิดว่าดวงตามนุษย์ทำอะไรได้บ้าง — จำหน้าคน, อ่านตัวหนังสือ, แยกแมวกับหมา, ประเมินระยะห่าง Computer Vision คือการสอนคอมพิวเตอร์ให้ทำสิ่งเดียวกัน ด้วย Neural Networks (โดยเฉพาะ CNN) ที่เรียนรู้จากรูปภาพหลายล้านรูป Face ID บนมือถือ, Google Lens, Tesla Autopilot, หมอ AI ที่อ่าน X-ray ล้วนใช้ Computer Vision",
    whyLearn: [
      "ใช้ในอุตสาหกรรมมากมาย — การแพทย์, ยานยนต์, ค้าปลีก, security",
      "เงินเดือนสูงมากสำหรับ CV Engineer",
      "มี pre-trained model ให้ใช้ — ไม่ต้อง train จากศูนย์",
      "ผสมกับ LLM ได้ — Multi-modal AI (GPT-4V) วิเคราะห์รูปภาพได้",
    ],
    keyConcepts: [
      { title: "Image Classification", description: "จำแนกว่ารูปภาพคืออะไร — \"นี่คือแมว\" \"นี่คือรถยนต์\"", icon: "🏷️" },
      { title: "Object Detection", description: "หาตำแหน่งวัตถุในรูป — วาดกรอบบอกว่า \"ตรงนี้คือคน ตรงนี้คือรถ\"", icon: "🎯" },
      { title: "Image Segmentation", description: "แบ่งรูปเป็นส่วนๆ — พิกเซลไหนเป็นคน พิกเซลไหนเป็นพื้นหลัง", icon: "🧩" },
      { title: "CNN (Convolutional Neural Networks)", description: "Neural Network ที่ออกแบบมาสำหรับรูปภาพ — จดจำ pattern ตั้งแต่เส้นง่ายๆ จนถึงวัตถุซับซ้อน", icon: "🧬" },
      { title: "Face Recognition", description: "จดจำใบหน้า — Face ID, ระบบ attendance, security camera", icon: "👤" },
      { title: "OCR (Optical Character Recognition)", description: "อ่านตัวอักษรจากรูปภาพ — scan เอกสาร, อ่านป้ายทะเบียน", icon: "📝" },
      { title: "YOLO", description: "You Only Look Once — โมเดลตรวจจับวัตถุ real-time ที่เร็วมาก", icon: "⚡" },
      { title: "Transfer Learning", description: "ใช้ model ที่ train มาแล้ว (ResNet, EfficientNet) ปรับกับข้อมูลของเรา", icon: "🔄" },
    ],
    gettingStarted: [
      { step: "เรียน Python + Deep Learning ก่อน", detail: "ต้องรู้ PyTorch/TensorFlow, Neural Networks พื้นฐาน" },
      { step: "ลอง Image Classification", detail: "ใช้ pre-trained model (ResNet) จำแนกรูปภาพ — Hugging Face หรือ torchvision" },
      { step: "เรียนรู้ CNN", detail: "เข้าใจว่า Convolution, Pooling, Feature Maps ทำงานยังไง" },
      { step: "ลอง Object Detection", detail: "ใช้ YOLOv8 ตรวจจับวัตถุ — ultralytics ติดตั้งง่ายมาก" },
      { step: "ลอง OpenCV", detail: "Library CV ที่ใช้กันมาก — image processing, video analysis" },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Computer Vision ใน Python: 3 ตัวอย่างที่ใช้จริง",
        code: `# 1. 🏷️ Image Classification ด้วย Hugging Face
from transformers import pipeline

classifier = pipeline("image-classification")
result = classifier("cat_photo.jpg")
print(result)
# [{'label': 'Egyptian cat', 'score': 0.94}]


# 2. 🎯 Object Detection ด้วย YOLOv8
from ultralytics import YOLO

model = YOLO("yolov8n.pt")  # โหลด pre-trained model
results = model("street_photo.jpg")

for r in results:
    for box in r.boxes:
        cls = r.names[int(box.cls)]
        conf = float(box.conf)
        print(f"พบ: {cls} (confidence: {conf:.2%})")
# พบ: person (confidence: 95.23%)
# พบ: car (confidence: 89.45%)
# พบ: traffic light (confidence: 78.90%)


# 3. 📝 OCR — อ่านตัวอักษรจากรูป
import easyocr

reader = easyocr.Reader(["th", "en"])
result = reader.readtext("document.jpg")
for (bbox, text, prob) in result:
    print(f"ข้อความ: {text} (confidence: {prob:.2%})")
# ข้อความ: สวัสดีครับ (confidence: 92.50%)`,
        explanation:
          "แต่ละตัวอย่างใช้ pre-trained model — ไม่ต้อง train เอง! Image Classification 1 บรรทัด, Object Detection (YOLO) ไม่กี่บรรทัด, OCR อ่านภาษาไทยได้ด้วย",
      },
    ],
    practiceProjects: [
      "สร้าง Image Classifier: แยกรูปอาหารไทย 10 ชนิด",
      "สร้าง Face Detection App ด้วย OpenCV + webcam",
      "สร้าง OCR App: ถ่ายรูป receipt แล้วอ่านราคาอัตโนมัติ",
      "สร้าง Object Counter: นับจำนวนคน/รถจาก video",
      "ใช้ GPT-4 Vision วิเคราะห์รูปภาพด้วย AI multi-modal",
    ],
    tips: [
      "ใช้ pre-trained models ก่อนเสมอ — Transfer Learning ให้ผลดีกว่า train จากศูนย์",
      "ข้อมูลสำคัญกว่า model — รูปภาพ quality ดี + label ถูก ให้ผลดีกว่า model ซับซ้อน",
      "ใช้ Google Colab ฟรี GPU — train model ได้โดยไม่ต้องซื้อ GPU",
      "YOLOv8 เริ่มต้นง่ายมาก — pip install ultralytics แล้วใช้ได้เลย",
      "ลอง Roboflow สำหรับ label dataset — ทำ annotation ง่ายมาก",
    ],
    relatedCareers: ["ai-engineer"],
  },
  {
    slug: "mlops",
    title: "MLOps",
    titleEn: "MLOps — ML in Production",
    icon: "🔄",
    category: "ai",
    categoryIcon: "🤖",
    color: "orange",
    difficulty: "advanced",
    estimatedTime: "4-6 สัปดาห์",
    description:
      "MLOps คือการนำ ML model ไปใช้จริงใน production — ไม่ใช่แค่ train ใน Jupyter แต่ deploy, monitor, retrain อัตโนมัติ",
    whatIsIt:
      "หลายคน train ML model ใน Jupyter Notebook ได้ accuracy 95% แล้วคิดว่าเสร็จ แต่จริงๆ นั่นคือแค่ 20% ของงาน อีก 80% คือ: จะ deploy model ยังไง? จะ serve prediction ให้ล้านคนพร้อมกันยังไง? ถ้าข้อมูลใหม่เข้ามาแล้ว model ไม่แม่นเหมือนเดิมจะทำยังไง? จะ retrain อัตโนมัติยังไง? MLOps คือศาสตร์ที่ตอบคำถามเหล่านี้ เหมือน DevOps แต่สำหรับ ML — ทำให้ model อยู่ใน production ได้อย่างเสถียร",
    whyLearn: [
      "ML model ที่ deploy ไม่ได้ = ไม่มีค่า — ต้อง production-ready",
      "85% ของ ML projects ไม่เคยถึง production — MLOps แก้ปัญหานี้",
      "เป็นทักษะที่ขาดแคลนมากในตลาด — เงินเดือนสูง",
      "เชื่อมโยงระหว่างสาย Data Science กับ Engineering",
    ],
    keyConcepts: [
      { title: "Model Serving", description: "Deploy model เป็น API ที่รับ request แล้วตอบ prediction — ใช้ FastAPI, TensorFlow Serving, BentoML", icon: "🚀" },
      { title: "Model Registry", description: "เก็บ model ทุกเวอร์ชัน พร้อม metadata — ใช้ MLflow, W&B", icon: "📦" },
      { title: "Feature Store", description: "เก็บ features ที่พร้อมใช้ ไม่ต้องคำนวณซ้ำ — ใช้ Feast, Tecton", icon: "🗄️" },
      { title: "Experiment Tracking", description: "บันทึกทุก experiment: hyperparameters, metrics, artifacts — ใช้ MLflow, W&B", icon: "📊" },
      { title: "Data Drift / Model Drift", description: "เมื่อข้อมูลใหม่ต่างจากข้อมูล train → model ไม่แม่น ต้อง detect และ retrain", icon: "📉" },
      { title: "CI/CD for ML", description: "Pipeline อัตโนมัติ: data → train → evaluate → deploy — ทุกครั้งที่มีข้อมูลใหม่", icon: "🔄" },
      { title: "A/B Testing", description: "ทดสอบ model ใหม่กับเก่า ส่ง traffic ไปทั้งสอง แล้วดูว่าตัวไหนดีกว่า", icon: "🧪" },
      { title: "Monitoring", description: "ดูว่า model ทำงานดีไหมใน production — latency, accuracy, error rate", icon: "📡" },
    ],
    gettingStarted: [
      { step: "เรียน ML + DevOps พื้นฐานก่อน", detail: "ต้อง train model เป็น + เข้าใจ Docker, CI/CD, API" },
      { step: "เรียน MLflow", detail: "Experiment tracking + Model Registry — เครื่องมือ MLOps ที่นิยมที่สุด" },
      { step: "Deploy model ด้วย FastAPI", detail: "สร้าง REST API สำหรับ model prediction" },
      { step: "ใส่ Docker", detail: "Containerize model + API server เพื่อ deploy ได้ทุกที่" },
      { step: "สร้าง Pipeline", detail: "อัตโนมัติ: data เข้า → preprocess → train → evaluate → deploy" },
    ],
    codeExamples: [
      {
        language: "python",
        title: "Deploy ML Model ด้วย FastAPI",
        code: `# model_api.py — ML Model เป็น REST API
from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np

app = FastAPI(title="ML Prediction API")

# โหลด model ที่ train แล้ว
model = joblib.load("model.pkl")

class PredictionInput(BaseModel):
    features: list[float]

class PredictionOutput(BaseModel):
    prediction: int
    probability: float

@app.post("/predict", response_model=PredictionOutput)
def predict(input: PredictionInput):
    X = np.array(input.features).reshape(1, -1)
    pred = model.predict(X)[0]
    prob = model.predict_proba(X).max()
    return PredictionOutput(prediction=int(pred), probability=float(prob))

@app.get("/health")
def health():
    return {"status": "healthy", "model_version": "1.0.0"}

# รัน: uvicorn model_api:app --host 0.0.0.0 --port 8000
# ทดสอบ: curl -X POST http://localhost:8000/predict \\
#         -H "Content-Type: application/json" \\
#         -d '{"features": [5.1, 3.5, 1.4, 0.2]}'`,
        explanation:
          "แปลง ML model เป็น REST API ได้ง่ายๆ ด้วย FastAPI — ทุกแอปเรียกใช้ prediction ผ่าน HTTP ได้เลย พร้อม health check endpoint สำหรับ monitoring",
      },
      {
        language: "python",
        title: "MLflow: Track Experiments & Register Models",
        code: `import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 1. เริ่ม experiment
mlflow.set_experiment("iris-classification")

with mlflow.start_run(run_name="random-forest-v1"):
    # 2. Log parameters
    params = {"n_estimators": 100, "max_depth": 5}
    mlflow.log_params(params)

    # 3. Train model
    model = RandomForestClassifier(**params)
    model.fit(X_train, y_train)

    # 4. Log metrics
    accuracy = accuracy_score(y_test, model.predict(X_test))
    mlflow.log_metric("accuracy", accuracy)

    # 5. Log model
    mlflow.sklearn.log_model(model, "model")

    # 6. Register model (ถ้าดีพอ)
    if accuracy > 0.95:
        mlflow.register_model(
            f"runs:/{mlflow.active_run().info.run_id}/model",
            "iris-classifier"
        )
        print(f"Model registered! Accuracy: {accuracy:.2%}")

# เปิด MLflow UI: mlflow ui
# เข้า http://localhost:5000 ดูผลทุก experiment`,
        explanation:
          "MLflow เก็บทุก experiment ให้ — parameters, metrics, model artifacts ดูย้อนหลังได้ว่า config ไหนให้ผลดีที่สุด และ register model ที่ดีที่สุดเพื่อ deploy",
      },
    ],
    practiceProjects: [
      "Deploy ML model เป็น API ด้วย FastAPI + Docker",
      "ใช้ MLflow track experiments สำหรับ Kaggle competition",
      "สร้าง ML Pipeline: data → train → evaluate → deploy อัตโนมัติ",
      "สร้าง Model Monitoring dashboard ด้วย Streamlit",
      "ทำ A/B test เปรียบเทียบ 2 models ใน production",
    ],
    tips: [
      "\"ML model ที่ไม่ deploy = โปรเจกต์จบ, ML model ที่ deploy ได้ = อาชีพ\"",
      "เริ่มจาก FastAPI + Docker — เป็นวิธี deploy ML model ที่ง่ายที่สุด",
      "Track ทุก experiment ตั้งแต่แรก — คุณจะขอบคุณตัวเองทีหลัง",
      "Model Monitoring สำคัญมาก — model เก่าจะไม่แม่นตลอดไป",
      "เรียนรู้ Docker ให้เก่ง — เป็นพื้นฐานของ MLOps ทั้งหมด",
    ],
    relatedCareers: ["ai-engineer", "data-engineer", "devops"],
  },

  // ─── METHODOLOGY ───
  {
    slug: "agile-scrum",
    title: "Agile & Scrum",
    titleEn: "Agile & Scrum Methodology",
    icon: "🔄",
    category: "methodology",
    categoryIcon: "📐",
    color: "amber",
    difficulty: "beginner",
    estimatedTime: "1-2 สัปดาห์",
    description:
      "Agile คือวิธีทำงานที่ยืดหยุ่น ส่งมอบงานทีละนิดแต่สม่ำเสมอ Scrum คือ framework ที่นิยมที่สุดของ Agile",
    whatIsIt:
      "แทนที่จะวางแผนทุกอย่างล่วงหน้า 6 เดือนแล้วส่งมอบทีเดียว (แบบ Waterfall) Agile ให้ทีมทำงานเป็นรอบสั้นๆ (Sprint) ทีละ 2 สัปดาห์ ส่งมอบงานที่ใช้ได้จริงทุก Sprint แล้วปรับปรุงไปเรื่อยๆ ตามความต้องการของลูกค้า — ยืดหยุ่นกว่ามาก",
    whyLearn: [
      "90% ของบริษัท Tech ใช้ Agile/Scrum",
      "ทำงานเป็นทีมได้มีประสิทธิภาพขึ้น",
      "จำเป็นสำหรับทุกตำแหน่ง — Dev, PM, PO, BA, Design",
      "เปิดทางสู่ตำแหน่ง Scrum Master, PO, PM",
    ],
    keyConcepts: [
      { title: "Sprint", description: "รอบการทำงาน 1-4 สัปดาห์ ที่ส่งมอบผลงานที่ใช้ได้จริง", icon: "🏃" },
      { title: "Product Backlog", description: "รายการฟีเจอร์/งานทั้งหมดที่ต้องทำ เรียงตามความสำคัญ", icon: "📋" },
      { title: "Sprint Planning", description: "เลือกงานจาก Backlog มาทำใน Sprint นี้", icon: "📌" },
      { title: "Daily Standup", description: "ประชุม 15 นาทีทุกเช้า — ทำอะไรเสร็จ จะทำอะไร ติดอะไร", icon: "🗣️" },
      { title: "Sprint Review", description: "Demo ผลงานให้ stakeholder ดูตอนจบ Sprint", icon: "📺" },
      { title: "Retrospective", description: "ทบทวนว่าอะไรดี อะไรต้องปรับปรุง — เรียนรู้จากทุก Sprint", icon: "🔍" },
      { title: "User Stories", description: "\"ในฐานะ [ผู้ใช้] ฉันต้องการ [ฟีเจอร์] เพื่อ [เหตุผล]\"", icon: "📝" },
    ],
    gettingStarted: [
      { step: "อ่าน Agile Manifesto", detail: "agilemanifesto.org — 4 ค่านิยมหลักที่เปลี่ยนวงการ" },
      { step: "เรียนรู้ Scrum Guide", detail: "scrumguides.org — อ่านจบใน 30 นาที" },
      { step: "ลองใช้กับทีม", detail: "ใช้ Scrum กับโปรเจกต์มหาวิทยาลัย — Sprint 1 สัปดาห์" },
      { step: "ใช้เครื่องมือ", detail: "Jira, Trello, หรือ Linear เพื่อจัดการ Backlog" },
      { step: "สอบ Certificate", detail: "PSM I (Professional Scrum Master) เริ่มต้นสายอาชีพ" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "ตัวอย่าง User Story & Sprint Board",
        code: `## User Story ตัวอย่าง
- ในฐานะ ผู้ใช้ใหม่
  ฉันต้องการ สมัครสมาชิกด้วย email
  เพื่อ เข้าใช้งานระบบได้

### Acceptance Criteria:
- [ ] กรอก email, password ได้
- [ ] ตรวจสอบ email ซ้ำ
- [ ] ส่ง email ยืนยัน
- [ ] แสดง error message ที่ชัดเจน

## Sprint Board
| To Do          | In Progress    | Done            |
|----------------|----------------|-----------------|
| สร้างหน้า Login | สร้างหน้า Register | ออกแบบ Database |
| เชื่อม API      |                | สร้าง UI mockup |`,
        explanation:
          "User Story บอกว่า \"ใคร\" ต้องการ \"อะไร\" เพื่อ \"ทำไม\" — Sprint Board แสดงความคืบหน้าของงานใน Sprint",
      },
    ],
    practiceProjects: [
      "ใช้ Scrum กับโปรเจกต์จบ — แบ่งเป็น Sprint",
      "สร้าง Product Backlog สำหรับแอปในฝัน",
      "ฝึกเป็น Scrum Master ในทีมเพื่อน",
      "ใช้ Trello/Jira จัดการงานส่วนตัว",
    ],
    tips: [
      "Agile ไม่ใช่แค่ process — เป็น mindset",
      "Daily Standup ไม่ใช่ report ให้หัวหน้า — เป็นการ sync ทีม",
      "Sprint ไม่ยืดหยุ่น — กำหนดเวลาแล้วต้องยึดตาม",
      "Retrospective สำคัญมาก — ทีมเก่งขึ้นจากตรงนี้",
    ],
    relatedCareers: ["product-owner", "project-manager", "developer", "designer"],
  },
  {
    slug: "system-design",
    title: "System Design",
    titleEn: "System Design",
    icon: "🏛️",
    category: "methodology",
    categoryIcon: "📐",
    color: "indigo",
    difficulty: "advanced",
    estimatedTime: "4-8 สัปดาห์",
    description:
      "System Design คือการออกแบบระบบซอฟต์แวร์ขนาดใหญ่ให้รองรับผู้ใช้หลายล้านคน — เร็ว, เสถียร, ขยายได้",
    whatIsIt:
      "เวลาคุณใช้ LINE ส่งข้อความ เบื้องหลังมีระบบซับซ้อนมาก — server หลายร้อยตัว, database หลายตัว, cache, queue, CDN ทำงานร่วมกัน System Design คือศาสตร์ในการออกแบบระบบเหล่านี้ให้รองรับผู้ใช้หลายล้านคนได้",
    whyLearn: [
      "จำเป็นสำหรับการสัมภาษณ์งาน Senior/Staff Engineer",
      "ช่วยให้คิดเป็นระบบ ไม่ใช่แค่เขียนโค้ด",
      "เข้าใจว่าระบบใหญ่ๆ ทำงานยังไง",
      "พื้นฐานสำหรับตำแหน่ง System Architect, CTO",
    ],
    keyConcepts: [
      { title: "Load Balancer", description: "กระจายโหลดไปหลาย server — ไม่ให้ server ตัวเดียวรับหนักเกินไป", icon: "⚖️" },
      { title: "Caching", description: "เก็บข้อมูลที่ใช้บ่อยไว้ในหน่วยความจำ (Redis) — เร็วขึ้น 100 เท่า", icon: "⚡" },
      { title: "Database Scaling", description: "Replication (คัดลอก), Sharding (แบ่ง) — รองรับข้อมูลเยอะๆ", icon: "🗃️" },
      { title: "Message Queue", description: "คิวงาน (RabbitMQ, Kafka) — จัดการงานหนักแบบ async", icon: "📬" },
      { title: "Microservices", description: "แบ่งระบบเป็น service ย่อยๆ ที่ทำงานอิสระ", icon: "🧩" },
      { title: "CAP Theorem", description: "เลือกได้แค่ 2 จาก 3: Consistency, Availability, Partition tolerance", icon: "🔺" },
    ],
    gettingStarted: [
      { step: "เรียนพื้นฐาน", detail: "Client-Server, HTTP, Database, Caching — ต้องรู้ก่อน" },
      { step: "อ่าน Case Studies", detail: "ศึกษาว่า Netflix, Uber, Twitter ออกแบบระบบยังไง" },
      { step: "ฝึกออกแบบ", detail: "ลองออกแบบ URL Shortener, Chat App, Feed System" },
      { step: "เรียน Distributed Systems", detail: "เข้าใจว่า system หลายเครื่องทำงานร่วมกันยังไง" },
      { step: "Mock Interview", detail: "ฝึกตอบคำถาม System Design กับเพื่อน" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "System Design: URL Shortener (bit.ly)",
        code: `## Requirements
- สร้าง short URL จาก long URL
- Redirect short URL → long URL
- รองรับ 100M URLs/เดือน

## Architecture
┌──────────┐     ┌──────────────┐     ┌──────────┐
│  Client  │────▶│ Load Balancer │────▶│ API Server│
└──────────┘     └──────────────┘     └─────┬────┘
                                            │
                    ┌───────────┐      ┌─────▼────┐
                    │   Cache   │◀────▶│ Database  │
                    │  (Redis)  │      │ (Postgres)│
                    └───────────┘      └──────────┘

## Key Decisions
- ใช้ Base62 encoding สร้าง short code
- Cache URL ที่ใช้บ่อยด้วย Redis
- Database sharding ตาม short code
- Counter service สำหรับ analytics`,
        explanation:
          "System Design เริ่มจาก requirements → ออกแบบ architecture → ตัดสินใจ trade-offs — ฝึกคิดแบบนี้กับทุกระบบ",
      },
    ],
    practiceProjects: [
      "ออกแบบ URL Shortener (bit.ly)",
      "ออกแบบ Chat System (LINE/Messenger)",
      "ออกแบบ News Feed (Facebook/Twitter)",
      "ออกแบบ File Storage (Google Drive)",
    ],
    tips: [
      "เริ่มจาก requirements ก่อนเสมอ — ถามให้ชัดว่าต้องรองรับอะไร",
      "ไม่มีคำตอบที่ถูกต้องคำตอบเดียว — สำคัญคือ trade-offs",
      "อ่าน System Design Interview ของ Alex Xu",
      "วาด diagram เสมอ — ภาพช่วยให้สื่อสารได้ดี",
    ],
    relatedCareers: ["system-analyst", "developer", "devops"],
  },
  {
    slug: "testing",
    title: "Software Testing",
    titleEn: "Software Testing",
    icon: "🧪",
    category: "methodology",
    categoryIcon: "📐",
    color: "green",
    difficulty: "intermediate",
    estimatedTime: "2-3 สัปดาห์",
    description:
      "Testing คือการตรวจสอบว่าโค้ดทำงานถูกต้อง — จับ bug ก่อนที่ผู้ใช้จะเจอ ทำให้มั่นใจทุกครั้งที่ deploy",
    whatIsIt:
      "ลองนึกภาพว่าคุณสร้างสะพาน คุณจะปล่อยให้รถวิ่งผ่านโดยไม่ทดสอบก่อนไหม? Testing คือการทดสอบโค้ดก่อน deploy — ตรวจว่าทุกฟังก์ชันทำงานถูก ไม่มีอะไรพัง เมื่อแก้โค้ดจุดหนึ่งแล้วจุดอื่นไม่เสีย",
    whyLearn: [
      "จับ bug ก่อนที่ผู้ใช้จะเจอ",
      "แก้โค้ดอย่างมั่นใจ — test จะบอกถ้าอะไรพัง",
      "บริษัทใหญ่ให้ความสำคัญกับ testing มาก",
      "ทำให้โค้ดมีคุณภาพและ maintainable",
    ],
    keyConcepts: [
      { title: "Unit Test", description: "ทดสอบฟังก์ชันเดียว แยกจากส่วนอื่น — เร็วและเจาะจง", icon: "🔬" },
      { title: "Integration Test", description: "ทดสอบหลายส่วนทำงานร่วมกัน — เช่น API + Database", icon: "🔗" },
      { title: "E2E Test", description: "ทดสอบทั้งระบบเหมือนผู้ใช้จริง — คลิก กรอก submit", icon: "🖥️" },
      { title: "Test Coverage", description: "วัดว่าโค้ดส่วนไหนถูก test แล้วบ้าง (%)", icon: "📊" },
      { title: "TDD", description: "เขียน test ก่อน แล้วค่อยเขียนโค้ดให้ test ผ่าน", icon: "🔄" },
      { title: "Mocking", description: "จำลองส่วนที่ยังไม่มี เช่น จำลอง API response", icon: "🎭" },
    ],
    gettingStarted: [
      { step: "เรียน Jest/Vitest", detail: "Testing framework ยอดนิยมสำหรับ JavaScript" },
      { step: "เขียน Unit Test แรก", detail: "ทดสอบฟังก์ชัน utility ง่ายๆ ก่อน" },
      { step: "Test React Components", detail: "ใช้ React Testing Library ทดสอบ UI" },
      { step: "เรียน E2E Testing", detail: "ใช้ Playwright หรือ Cypress ทดสอบแอปทั้งหมด" },
      { step: "เพิ่ม Test ใน CI/CD", detail: "ให้ GitHub Actions รัน test ทุก push" },
    ],
    codeExamples: [
      {
        language: "typescript",
        title: "Jest/Vitest: Unit Test ตัวอย่าง",
        code: `import { describe, it, expect } from "vitest";

// ฟังก์ชันที่จะ test
function calculateDiscount(price: number, percent: number) {
  if (percent < 0 || percent > 100) {
    throw new Error("Invalid discount percentage");
  }
  return price - (price * percent) / 100;
}

describe("calculateDiscount", () => {
  it("should calculate 20% discount correctly", () => {
    expect(calculateDiscount(1000, 20)).toBe(800);
  });

  it("should return original price for 0% discount", () => {
    expect(calculateDiscount(500, 0)).toBe(500);
  });

  it("should return 0 for 100% discount", () => {
    expect(calculateDiscount(1000, 100)).toBe(0);
  });

  it("should throw error for invalid percentage", () => {
    expect(() => calculateDiscount(100, -10)).toThrow();
    expect(() => calculateDiscount(100, 150)).toThrow();
  });
});`,
        explanation:
          "Test บอกว่าฟังก์ชันของเราทำงานถูกต้องในทุกกรณี — ถ้าใครแก้โค้ดแล้วพัง test จะจับได้ทันที",
      },
    ],
    practiceProjects: [
      "เพิ่ม Unit Test ให้โปรเจกต์ที่มีอยู่",
      "เขียน Test สำหรับ API endpoints",
      "สร้าง E2E Test สำหรับ Login flow",
      "ตั้งเป้า Test Coverage 80%",
    ],
    tips: [
      "เริ่มจาก Unit Test ก่อน — ง่ายและเร็วที่สุด",
      "Test behavior ไม่ใช่ implementation — test ว่า \"ทำอะไร\" ไม่ใช่ \"ทำยังไง\"",
      "ไม่ต้อง test ทุกอย่าง — focus ที่ส่วนสำคัญและซับซ้อน",
      "ใช้ describe/it ตั้งชื่อ test ให้อ่านเหมือนประโยคภาษาอังกฤษ",
    ],
    relatedCareers: ["developer", "devops"],
  },
  {
    slug: "uiux-design",
    title: "UI/UX Design พื้นฐาน",
    titleEn: "UI/UX Design Fundamentals",
    icon: "🎯",
    category: "methodology",
    categoryIcon: "📐",
    color: "pink",
    difficulty: "beginner",
    estimatedTime: "3-4 สัปดาห์",
    description:
      "UX คือการออกแบบประสบการณ์ ทำให้ใช้ง่าย UI คือการออกแบบหน้าตา ทำให้สวย — รวมกันคือแอปที่ผู้ใช้รัก",
    whatIsIt:
      "UX (User Experience) คือการทำให้แอปใช้ง่าย — ผู้ใช้หาสิ่งที่ต้องการเจอโดยไม่ต้องคิดมาก UI (User Interface) คือการทำให้แอปสวย — สี, ฟอนต์, ปุ่ม, layout ที่ดึงดูดสายตา ทั้งสองอย่างต้องทำงานร่วมกัน แอปสวยแต่ใช้ยาก = ไม่ดี แอปใช้ง่ายแต่น่าเกลียด = ไม่ดี",
    whyLearn: [
      "ทำให้แอปที่คุณสร้างมีคนอยากใช้จริง",
      "Developer ที่เข้าใจ Design ได้เปรียบมาก",
      "ใช้ได้ทั้งสาย Design และ Dev",
      "เพิ่มมูลค่าให้ Portfolio ของคุณ",
    ],
    keyConcepts: [
      { title: "Design Thinking", description: "กระบวนการ: เข้าใจผู้ใช้ → กำหนดปัญหา → สร้าง idea → สร้าง prototype → ทดสอบ", icon: "💡" },
      { title: "Typography", description: "การเลือกและจัดวาง font — ขนาด น้ำหนัก ระยะห่าง", icon: "🔤" },
      { title: "Color Theory", description: "การเลือกสีที่เข้ากัน สร้างอารมณ์ที่ต้องการ", icon: "🎨" },
      { title: "Layout & Spacing", description: "การจัดวาง element — whitespace สำคัญมาก", icon: "📐" },
      { title: "Consistency", description: "ใช้ปุ่ม สี ฟอนต์แบบเดียวกันทั้งแอป — ผู้ใช้ไม่สับสน", icon: "🔄" },
      { title: "Accessibility", description: "ออกแบบให้ทุกคนใช้ได้ รวมถึงผู้พิการ", icon: "♿" },
    ],
    gettingStarted: [
      { step: "เรียนรู้ Figma", detail: "เครื่องมือออกแบบอันดับ 1 — ใช้ฟรี" },
      { step: "ศึกษา Design System", detail: "ดู Material Design (Google), Apple HIG" },
      { step: "วิเคราะห์แอปที่ใช้อยู่", detail: "สังเกตว่าทำไม LINE, Instagram ใช้ง่าย" },
      { step: "ลอง Redesign", detail: "เลือกแอปที่ใช้ยาก แล้วลอง redesign ใหม่" },
      { step: "สร้าง Design System", detail: "กำหนดสี, ฟอนต์, component ที่ใช้ทั้งโปรเจกต์" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "UI/UX Checklist สำหรับ Developer",
        code: `## UX Checklist
- [ ] ผู้ใช้รู้ว่าต้องทำอะไรต่อไหม? (Clear CTA)
- [ ] Error message ชัดเจนและช่วยแก้ปัญหาได้
- [ ] Loading state มี skeleton/spinner
- [ ] กดปุ่มแล้วมี feedback ทันที
- [ ] ฟอร์มมี validation ที่เข้าใจง่าย

## UI Checklist
- [ ] สีไม่เกิน 3-4 สี (primary, secondary, accent, neutral)
- [ ] ฟอนต์ไม่เกิน 2 ตระกูล
- [ ] ระยะห่าง (spacing) สม่ำเสมอ — ใช้ 4px grid
- [ ] ปุ่มใหญ่พอที่จะกดบนมือถือ (44x44px ขั้นต่ำ)
- [ ] Contrast ratio ผ่านมาตรฐาน accessibility`,
        explanation:
          "ใช้ checklist นี้ทุกครั้งที่สร้างหน้าเว็บ — ไม่ต้องเป็น designer ก็ทำ UI/UX ดีได้",
      },
    ],
    practiceProjects: [
      "ออกแบบ Mobile App ใน Figma (3-5 หน้า)",
      "สร้าง Design System สำหรับโปรเจกต์",
      "Redesign แอปที่คุณรู้สึกว่าใช้ยาก",
      "ทำ Usability Test กับเพื่อน 3-5 คน",
    ],
    tips: [
      "Less is more — ลด element ที่ไม่จำเป็นออก",
      "ดู Dribbble, Behance สำหรับแรงบันดาลใจ",
      "Whitespace ไม่ใช่พื้นที่เปล่า — มันช่วยให้อ่านง่าย",
      "ทดสอบกับคนจริง — อย่าเดาว่าผู้ใช้จะทำยังไง",
    ],
    relatedCareers: ["designer", "developer", "product-owner"],
  },

  // ─── SDLC ───
  {
    slug: "sdlc",
    title: "SDLC — วงจรพัฒนาซอฟต์แวร์",
    titleEn: "Software Development Life Cycle",
    icon: "🔁",
    category: "methodology",
    categoryIcon: "📐",
    color: "blue",
    difficulty: "beginner",
    estimatedTime: "2-3 สัปดาห์",
    description:
      "SDLC คือกระบวนการทั้งหมดตั้งแต่ \"คิด\" จนถึง \"ส่งมอบ\" ซอฟต์แวร์ — เหมือนแผนที่ที่บอกว่าต้องทำอะไรก่อนหลัง ทุกทีมต้องรู้",
    whatIsIt:
      "สมมติว่าคุณจะสร้างบ้าน คุณไม่ได้แค่หยิบอิฐมาก่อเลยใช่ไหม? ต้องวางแผนก่อน — ต้องการบ้านแบบไหน เขียนแบบ จ้างช่าง สร้าง ตรวจสอบ แล้วค่อยย้ายเข้าอยู่ การสร้างซอฟต์แวร์ก็เหมือนกัน SDLC คือ \"ขั้นตอนทั้งหมด\" ที่ต้องผ่าน ตั้งแต่ไอเดียแรกจนถึงซอฟต์แวร์ที่พร้อมใช้งาน ถ้าข้ามขั้นตอน ระบบอาจจะพัง เหมือนบ้านที่ลืมทำฐานราก",
    whyLearn: [
      "เข้าใจภาพรวมการพัฒนาซอฟต์แวร์ทั้งหมด — ไม่ใช่แค่เขียนโค้ด",
      "สื่อสารกับทีมได้ดีขึ้น เพราะรู้ว่าใครทำอะไรตอนไหน",
      "ถูกถามในการสัมภาษณ์งานเกือบทุกตำแหน่ง",
      "ช่วยวางแผนโปรเจกต์ได้ดี ไม่หลงทาง",
      "จำเป็นสำหรับทุกสายอาชีพ ไม่ใช่แค่ Developer",
    ],
    keyConcepts: [
      { title: "1. Planning (วางแผน)", description: "ตั้งเป้าหมาย ประเมินความเป็นไปได้ กำหนด scope และงบประมาณ — ถ้าข้ามขั้นนี้ โปรเจกต์มีโอกาสพังสูง", icon: "📋" },
      { title: "2. Requirements (เก็บความต้องการ)", description: "คุยกับลูกค้า/ผู้ใช้ ว่าต้องการอะไร เขียนเป็นเอกสาร — \"ระบบต้องทำอะไรได้บ้าง\"", icon: "📝" },
      { title: "3. Design (ออกแบบ)", description: "ออกแบบ UI/UX, ออกแบบฐานข้อมูล, ออกแบบ Architecture — \"จะสร้างยังไง\"", icon: "🎨" },
      { title: "4. Development (พัฒนา)", description: "เขียนโค้ดจริงตาม Design ที่ออกแบบไว้ — แบ่งงาน, coding standards, code review", icon: "💻" },
      { title: "5. Testing (ทดสอบ)", description: "ทดสอบทุกอย่าง — Unit Test, Integration Test, UAT — หา bug ก่อนผู้ใช้เจอ", icon: "🧪" },
      { title: "6. Deployment (ส่งมอบ)", description: "Deploy ขึ้น server จริง ให้ผู้ใช้เริ่มใช้งาน — CI/CD ช่วยให้ทำได้อัตโนมัติ", icon: "🚀" },
      { title: "7. Maintenance (ดูแลรักษา)", description: "แก้ bug, เพิ่มฟีเจอร์, ปรับปรุง performance — ซอฟต์แวร์ไม่มีวัน \"เสร็จ\" จริงๆ", icon: "🔧" },
    ],
    gettingStarted: [
      { step: "เข้าใจภาพรวม 7 ขั้นตอน", detail: "Plan → Requirements → Design → Develop → Test → Deploy → Maintain — ท่องให้ขึ้นใจ" },
      { step: "เรียนรู้ SDLC Models", detail: "Waterfall (ทำทีละขั้น), Agile (ทำวนรอบ), V-Model (ทดสอบคู่กัน) — แต่ละแบบเหมาะกับงานต่างกัน" },
      { step: "ลองทำกับโปรเจกต์จริง", detail: "เลือกโปรเจกต์ง่ายๆ แล้วทำตาม SDLC ครบทุกขั้นตอน" },
      { step: "ศึกษา Agile SDLC", detail: "Agile เป็น SDLC ที่นิยมที่สุดในปัจจุบัน — เรียนลึกตรงนี้" },
      { step: "ฝึกเขียนเอกสาร", detail: "BRD, SRS, Test Plan — ลองเขียนสำหรับโปรเจกต์จำลอง" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "SDLC Models เปรียบเทียบ",
        code: `## Waterfall (น้ำตก) — ทำทีละขั้น ไม่ย้อนกลับ
Plan → Requirements → Design → Develop → Test → Deploy
✅ เหมาะกับ: งานที่ requirements ชัดเจน เช่น ระบบราชการ
❌ ไม่เหมาะกับ: งานที่เปลี่ยนแปลงบ่อย

## Agile — ทำวนรอบ ปรับเปลี่ยนได้
Sprint 1: [Plan → Design → Dev → Test → Release]
Sprint 2: [Plan → Design → Dev → Test → Release]
Sprint 3: ...
✅ เหมาะกับ: Startup, แอปที่ต้องปรับตาม feedback
❌ ต้องการ: ทีมที่สื่อสารดี, ลูกค้ามีส่วนร่วม

## V-Model — Waterfall + ทดสอบคู่กันทุกขั้น
Requirements ──────── Acceptance Test
  System Design ──── System Test
    Module Design ── Integration Test
      Coding ─────── Unit Test
✅ เหมาะกับ: ระบบที่ต้อง quality สูง เช่น การเงิน, การแพทย์

## DevOps — Agile + Automation + Continuous Delivery
Plan → Code → Build → Test → Release → Deploy → Monitor → Plan
(วนไม่มีสิ้นสุด + อัตโนมัติทุกขั้นตอน)
✅ เหมาะกับ: SaaS, แอปที่ deploy บ่อย`,
        explanation:
          "ไม่มี model ไหนดีที่สุด — ต้องเลือกให้เหมาะกับโปรเจกต์ Agile เป็นที่นิยมที่สุดในปัจจุบัน แต่ Waterfall ก็ยังใช้กับงานบางประเภท",
      },
      {
        language: "markdown",
        title: "ตัวอย่างเอกสาร: Software Requirements Specification (SRS) แบบย่อ",
        code: `# SRS: ระบบจองห้องประชุมออนไลน์

## 1. ภาพรวม
ระบบจองห้องประชุมสำหรับพนักงานบริษัท ABC

## 2. Functional Requirements
- FR-01: ผู้ใช้สามารถดูปฏิทินห้องประชุมทั้งหมด
- FR-02: ผู้ใช้สามารถจองห้องโดยเลือกวัน เวลา
- FR-03: ระบบส่ง email ยืนยันการจอง
- FR-04: ผู้ใช้สามารถยกเลิกการจองได้ก่อน 1 ชั่วโมง
- FR-05: Admin สามารถเพิ่ม/ลบห้องประชุมได้

## 3. Non-Functional Requirements
- NFR-01: ระบบต้องรองรับ 500 คนพร้อมกัน
- NFR-02: หน้าเว็บโหลดภายใน 2 วินาที
- NFR-03: ข้อมูลเข้ารหัส HTTPS

## 4. Tech Stack
Frontend: Next.js + Tailwind CSS
Backend: Next.js API Routes
Database: PostgreSQL + Prisma`,
        explanation:
          "SRS คือเอกสารสำคัญที่สุดในขั้น Requirements — บอกทุกคนว่า \"ระบบต้องทำอะไรได้\" ก่อนเริ่มเขียนโค้ด ถ้าไม่มี SRS ทีมจะเข้าใจไม่ตรงกัน",
      },
    ],
    practiceProjects: [
      "เขียน SRS สำหรับ \"ระบบจัดการหอพัก\" ครบทุกหัวข้อ",
      "ทำโปรเจกต์เล็กๆ ตาม SDLC ครบ 7 ขั้น (เช่น Todo App)",
      "เปรียบเทียบ Waterfall vs Agile โดยทำโปรเจกต์เดียวกัน 2 แบบ",
      "ฝึกเขียน Test Plan สำหรับระบบ E-commerce",
      "วางแผน Sprint Board ด้วย Jira หรือ Trello สำหรับโปรเจกต์จบ",
    ],
    tips: [
      "อย่าข้ามขั้น Planning และ Requirements — 70% ของโปรเจกต์ที่ล้มเหลวเกิดจากตรงนี้",
      "เอกสารไม่จำเป็นต้องยาว — สั้นแต่ชัดเจน ดีกว่ายาวแต่ไม่มีใครอ่าน",
      "Testing ไม่ใช่ขั้นตอนสุดท้าย — ควรทำควบคู่กับ Development",
      "SDLC ไม่ใช่ของตายตัว — ปรับให้เหมาะกับทีมและโปรเจกต์ของคุณ",
      "ฝึกคิดแบบ \"ถ้าผมเป็นผู้ใช้ ผมต้องการอะไร\" ตั้งแต่ขั้น Requirements",
    ],
    relatedCareers: ["project-manager", "business-analyst", "system-analyst", "developer", "product-owner"],
  },

  // ─── ARCHITECTURE & PATTERNS ───
  {
    slug: "solution-architecture",
    title: "Solution Architecture",
    titleEn: "Solution Architecture",
    icon: "🏗️",
    category: "architecture",
    categoryIcon: "🏛️",
    color: "violet",
    difficulty: "advanced",
    estimatedTime: "6-10 สัปดาห์",
    description:
      "Solution Architecture คือศาสตร์ในการออกแบบ \"ภาพใหญ่\" ของระบบ — เลือก technology, กำหนดโครงสร้าง, แก้ปัญหาให้ธุรกิจด้วยเทคโนโลยีที่เหมาะสม",
    whatIsIt:
      "ลองนึกภาพว่าคุณเป็นสถาปนิกที่ออกแบบอาคาร — คุณไม่ได้แค่เลือกว่าจะใช้อิฐหรือปูน แต่คุณต้องคิดทั้งหมด: จะสร้างกี่ชั้น, ระบบไฟฟ้าวางยังไง, น้ำประปาเดินยังไง, รองรับแผ่นดินไหวไหม, ขยายต่อได้ไหม Solution Architect ก็เหมือนกัน — ออกแบบระบบซอฟต์แวร์ทั้งหมดให้ตอบโจทย์ธุรกิจ เลือก technology ที่เหมาะ วางโครงสร้างให้แข็งแกร่ง รองรับการเติบโต และอยู่ในงบประมาณ คนนี้คือ \"ตัวเชื่อม\" ระหว่างฝ่ายธุรกิจกับฝ่ายเทคนิค",
    whyLearn: [
      "เงินเดือนสูงมาก — Solution Architect เป็นหนึ่งในตำแหน่งที่เงินดีที่สุดในวงการ",
      "ช่วยให้คิดเป็นระบบ ไม่ใช่แค่เขียนโค้ด แต่เข้าใจ \"ทำไม\" ถึงเลือกแบบนี้",
      "จำเป็นสำหรับโปรเจกต์ขนาดกลาง-ใหญ่ ที่มีหลาย component",
      "เปิดทางสู่ตำแหน่ง CTO, VP of Engineering",
      "ลดความเสี่ยงที่โปรเจกต์จะล้มเหลวจากการเลือก technology ผิด",
    ],
    keyConcepts: [
      { title: "Architectural Thinking", description: "คิดแบบ \"trade-offs\" — ทุกการตัดสินใจมีข้อดีข้อเสีย ไม่มี \"ดีที่สุด\" มีแต่ \"เหมาะที่สุดกับสถานการณ์\"", icon: "🧠" },
      { title: "Architecture Decision Records (ADR)", description: "บันทึกว่าตัดสินใจอะไร เพราะอะไร มีทางเลือกอะไรบ้าง — สำคัญมากสำหรับทีม", icon: "📝" },
      { title: "Non-Functional Requirements (NFR)", description: "ระบบต้อง \"เร็วแค่ไหน\" \"รองรับกี่คน\" \"ปลอดภัยระดับไหน\" — สิ่งที่กำหนดว่าจะเลือก Architecture แบบไหน", icon: "📊" },
      { title: "Integration Patterns", description: "ระบบต่างๆ คุยกันยังไง — REST, GraphQL, Message Queue, Event-Driven, gRPC", icon: "🔗" },
      { title: "Scalability", description: "ระบบขยายตัวได้ไหม เมื่อผู้ใช้เพิ่มจาก 100 เป็น 100,000 คน", icon: "📈" },
      { title: "Security Architecture", description: "ป้องกันภัยคุกคาม — Authentication, Authorization, Encryption, OWASP", icon: "🔐" },
      { title: "Cost Optimization", description: "เลือก solution ที่คุ้มค่า — ไม่ over-engineer ไม่ under-engineer", icon: "💰" },
      { title: "Technology Evaluation", description: "เปรียบเทียบ technology ก่อนเลือก — Proof of Concept (PoC), benchmark, community support", icon: "⚖️" },
    ],
    gettingStarted: [
      { step: "เก่ง Development ก่อน", detail: "ต้องเขียนโค้ดเป็น เข้าใจ Frontend, Backend, Database จริงๆ ก่อน — Architect ที่ไม่เคยเขียนโค้ดจะออกแบบระบบที่ใช้จริงไม่ได้" },
      { step: "เรียน Architecture Patterns", detail: "Monolith, Microservices, Serverless, Event-Driven — เข้าใจข้อดีข้อเสียของแต่ละแบบ" },
      { step: "ฝึกคิดแบบ Trade-offs", detail: "ทุกครั้งที่เลือก technology ให้ถามตัวเอง: \"ข้อดีคืออะไร? ข้อเสียคืออะไร? มีทางเลือกอื่นไหม?\"" },
      { step: "ศึกษา Case Studies", detail: "อ่านว่า Netflix, Grab, LINE, Shopee ออกแบบระบบยังไง — Engineering Blog ของพวกเขาดีมาก" },
      { step: "ฝึกเขียน Architecture Document", detail: "ลองเขียน ADR, ลองวาด Architecture Diagram ด้วย draw.io หรือ Mermaid" },
      { step: "สอบ Cloud Certificate", detail: "AWS Solutions Architect เป็น cert ที่ได้รับการยอมรับสูง" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "Architecture Decision Record (ADR) ตัวอย่าง",
        code: `# ADR-001: เลือก Database สำหรับระบบ E-Commerce

## สถานะ: ✅ ตัดสินใจแล้ว
## วันที่: 2026-04-01

## บริบท (Context)
ระบบ E-Commerce ที่รองรับ 50,000 users/วัน
ต้องเก็บข้อมูล: สินค้า, คำสั่งซื้อ, ผู้ใช้, ชำระเงิน

## ทางเลือก (Options)
| เกณฑ์            | PostgreSQL    | MongoDB       | MySQL         |
|------------------|---------------|---------------|---------------|
| Relational Data  | ⭐⭐⭐        | ⭐             | ⭐⭐⭐        |
| Performance      | ⭐⭐⭐        | ⭐⭐⭐        | ⭐⭐          |
| JSON Support     | ⭐⭐⭐        | ⭐⭐⭐        | ⭐⭐          |
| Community        | ⭐⭐⭐        | ⭐⭐          | ⭐⭐⭐        |
| ค่าใช้จ่าย Cloud  | ต่ำ           | ปานกลาง       | ต่ำ           |

## การตัดสินใจ (Decision)
เลือก **PostgreSQL** เพราะ:
1. ข้อมูล E-Commerce เป็น relational (users → orders → products)
2. รองรับ JSON column สำหรับข้อมูลยืดหยุ่น
3. Performance ดีมาก + มี community ใหญ่
4. ใช้ Prisma ORM ได้ดี กับ Next.js

## ผลกระทบ (Consequences)
- ✅ ทีมคุ้นเคยกับ SQL ไม่ต้องเรียนใหม่
- ✅ Scale ได้ดีด้วย read replicas
- ⚠️ Schema migration ต้องทำอย่างระวัง`,
        explanation:
          "ADR คือเอกสารที่สำคัญที่สุดของ Architect — บันทึกว่า \"ตัดสินใจอะไร เพราะอะไร\" เพื่อให้ทีมในอนาคตเข้าใจว่าทำไมถึงเลือกแบบนี้ ไม่ต้องเดา",
      },
      {
        language: "markdown",
        title: "Solution Architecture Diagram: ระบบ E-Commerce",
        code: `## Architecture Overview

┌─────────────────────────────────────────────────┐
│                    USERS                         │
│              (Browser / Mobile)                  │
└───────────────────┬─────────────────────────────┘
                    │ HTTPS
                    ▼
┌───────────────────────────────────────┐
│           CDN (CloudFront)            │
│     Static Assets: Images, CSS, JS    │
└───────────────────┬───────────────────┘
                    │
                    ▼
┌───────────────────────────────────────┐
│         Load Balancer (ALB)           │
└──────┬─────────────┬─────────────┬────┘
       ▼             ▼             ▼
┌──────────┐  ┌──────────┐  ┌──────────┐
│ App #1   │  │ App #2   │  │ App #3   │
│ Next.js  │  │ Next.js  │  │ Next.js  │
└────┬─────┘  └────┬─────┘  └────┬─────┘
     │             │             │
     ▼             ▼             ▼
┌────────────────────────────────────┐
│           Redis Cache              │
│    (Session, Product Catalog)      │
└───────────────┬────────────────────┘
                │
                ▼
┌────────────────────────────────────┐
│        PostgreSQL (Primary)        │
│    ┌──────────┐  ┌──────────┐     │
│    │  Replica  │  │  Replica  │    │
│    │  (Read)   │  │  (Read)   │    │
│    └──────────┘  └──────────┘     │
└────────────────────────────────────┘
                │
                ▼
┌────────────────────────────────────┐
│       Object Storage (S3)          │
│     Product Images, Invoices       │
└────────────────────────────────────┘`,
        explanation:
          "นี่คือ Architecture Diagram ระดับ high-level — แสดงให้เห็นว่า request จากผู้ใช้เดินทางผ่านระบบยังไง แต่ละชิ้นทำหน้าที่อะไร Architect ต้องวาดรูปแบบนี้ได้",
      },
    ],
    practiceProjects: [
      "ออกแบบ Architecture สำหรับ \"ระบบจองตั๋วหนัง\" ที่รองรับ 10,000 คนพร้อมกัน",
      "เขียน ADR 3 ฉบับ สำหรับโปรเจกต์ส่วนตัว (Database, Framework, Hosting)",
      "เปรียบเทียบ Monolith vs Microservices สำหรับ Startup App",
      "ออกแบบระบบ Chat ที่รองรับ real-time messaging",
      "ทำ Proof of Concept (PoC) เปรียบเทียบ 2 technologies",
    ],
    tips: [
      "\"ดีที่สุด\" ไม่มีจริง — มีแต่ \"เหมาะที่สุดกับบริบท\" จงเลือกตาม constraints ไม่ใช่ตาม trend",
      "เริ่มจาก Monolith ก่อน — Microservices ไม่ใช่คำตอบของทุกปัญหา อย่า over-engineer",
      "วาด Architecture Diagram ก่อนเขียนโค้ดเสมอ — ภาพหนึ่งภาพแทนคำพูดหนึ่งพันคำ",
      "เรียนรู้จากความผิดพลาด — อ่าน Post-Mortem ของบริษัทใหญ่ (เช่น ทำไม X ล่ม)",
      "Architect ต้องเข้าใจทั้ง business และ technology — ไม่ใช่แค่ฝั่งใดฝั่งหนึ่ง",
      "อย่าลืมเรื่อง cost — ระบบดีแต่แพงเกินงบก็ใช้จริงไม่ได้",
    ],
    relatedCareers: ["system-analyst", "developer", "devops", "project-manager"],
  },
  {
    slug: "software-architecture-patterns",
    title: "Software Architecture Patterns",
    titleEn: "Software Architecture Patterns",
    icon: "🧩",
    category: "architecture",
    categoryIcon: "🏛️",
    color: "cyan",
    difficulty: "intermediate",
    estimatedTime: "3-5 สัปดาห์",
    description:
      "Architecture Patterns คือ \"แบบแปลน\" สำเร็จรูปที่คนมากมายพิสูจน์แล้วว่าใช้ได้ดี — MVC, Microservices, Event-Driven และอื่นๆ",
    whatIsIt:
      "เหมือนกับการสร้างบ้าน มีหลายสไตล์ให้เลือก — บ้านชั้นเดียว (Monolith), ทาวน์เฮ้าส์ (Modular), คอนโดหลายตึก (Microservices) แต่ละแบบเหมาะกับคนละสถานการณ์ Architecture Patterns คือ \"รูปแบบการจัดโครงสร้างซอฟต์แวร์\" ที่คนในวงการใช้กันมานาน และพิสูจน์แล้วว่าแก้ปัญหาได้จริง คุณไม่ต้องคิดเองตั้งแต่ศูนย์ แค่เลือกรูปแบบที่เหมาะกับงานของคุณ",
    whyLearn: [
      "ไม่ต้องคิดโครงสร้างเองตั้งแต่ศูนย์ — มี pattern ให้เลือก",
      "สื่อสารกับทีมได้ง่าย — พูดว่า \"ใช้ MVC\" ทุกคนเข้าใจตรงกัน",
      "จำเป็นสำหรับการสัมภาษณ์งาน Mid-Senior level",
      "ช่วยตัดสินใจว่าโปรเจกต์ควรจัดโครงสร้างแบบไหน",
    ],
    keyConcepts: [
      { title: "MVC (Model-View-Controller)", description: "แยก 3 ส่วน: Model (ข้อมูล), View (หน้าจอ), Controller (ตรรกะ) — เว็บส่วนใหญ่ใช้แนวคิดนี้", icon: "🔺" },
      { title: "Monolithic", description: "ทุกอย่างอยู่ในโปรเจกต์เดียว — เริ่มต้นง่าย แต่ขยายตัวยากเมื่อใหญ่ขึ้น", icon: "🏠" },
      { title: "Microservices", description: "แยกระบบเป็น service เล็กๆ ที่ทำงานอิสระ — ขยายง่าย แต่จัดการยากขึ้น", icon: "🏘️" },
      { title: "Event-Driven", description: "ระบบตอบสนองต่อ \"เหตุการณ์\" — เช่น สั่งซื้อ → ส่ง email → ตัดสต็อก", icon: "⚡" },
      { title: "Serverless", description: "ไม่ต้องจัดการ server เลย — เขียนแค่ function แล้ว Cloud จัดการให้", icon: "☁️" },
      { title: "Layered Architecture", description: "แบ่งเป็นชั้น: Presentation → Business Logic → Data Access → Database", icon: "📚" },
      { title: "Clean Architecture", description: "แยก business logic ออกจาก framework — เปลี่ยน technology ได้โดยไม่กระทบ logic", icon: "💎" },
    ],
    gettingStarted: [
      { step: "เริ่มจาก MVC", detail: "เข้าใจการแบ่ง Model, View, Controller — Next.js ก็ใช้แนวคิดคล้ายๆ กัน" },
      { step: "สร้าง Monolith ให้เป็นก่อน", detail: "ทุกคนควรสร้าง Monolith ให้เก่งก่อน แล้วค่อยเรียน Microservices" },
      { step: "เรียน Layered Architecture", detail: "แบ่งโค้ดเป็นชั้น — ฝึกกับ Express.js หรือ Next.js API Routes" },
      { step: "ศึกษา Microservices", detail: "เข้าใจว่าเมื่อไหร่ควรใช้ เมื่อไหร่ไม่ควร — อ่าน Martin Fowler's articles" },
      { step: "ลอง Event-Driven", detail: "ฝึกใช้ message queue ง่ายๆ เช่น BullMQ กับ Node.js" },
    ],
    codeExamples: [
      {
        language: "typescript",
        title: "Layered Architecture ใน Next.js: แยกชั้นชัดเจน",
        code: `// 📁 lib/db.ts — Data Access Layer
// ดึงข้อมูลจาก Database โดยตรง
import { prisma } from "./prisma";

export async function findAllProducts() {
  return prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function findProductById(id: number) {
  return prisma.product.findUnique({ where: { id } });
}

// 📁 lib/services/product-service.ts — Business Logic Layer
// ตรรกะทางธุรกิจ: ตรวจสอบ, คำนวณ, validate
import { findAllProducts, findProductById } from "../db";

export async function getProductsForDisplay() {
  const products = await findAllProducts();
  return products.map((p) => ({
    ...p,
    displayPrice: \`฿\${p.price.toLocaleString()}\`,
    isOnSale: p.discount > 0,
  }));
}

export async function getProductDetail(id: number) {
  const product = await findProductById(id);
  if (!product) throw new Error("Product not found");
  return {
    ...product,
    finalPrice: product.price * (1 - product.discount / 100),
  };
}

// 📁 app/products/page.tsx — Presentation Layer
// แสดงผลเท่านั้น ไม่มี business logic
import { getProductsForDisplay } from "@/lib/services/product-service";

export default async function ProductsPage() {
  const products = await getProductsForDisplay();
  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>{p.displayPrice}</p>
        </div>
      ))}
    </div>
  );
}`,
        explanation:
          "แยกเป็น 3 ชั้น: Data Access (ดึงข้อมูล) → Service (ตรรกะ) → Page (แสดงผล) ข้อดีคือ: เปลี่ยน Database ได้โดยแก้แค่ชั้น Data Access, ทดสอบ Business Logic ได้ง่าย, โค้ดอ่านง่ายมาก",
      },
      {
        language: "markdown",
        title: "เปรียบเทียบ: เมื่อไหร่ใช้ Pattern ไหน",
        code: `## Monolith ✅
- ทีม 1-10 คน
- โปรเจกต์เริ่มต้น / MVP / Startup
- ต้องการ ship เร็ว
- ตัวอย่าง: Next.js full-stack app

## Microservices ✅
- ทีม 20+ คน (หลายทีมย่อย)
- ระบบใหญ่ที่ต้องขยายแต่ละส่วนแยกกัน
- ต้องการ deploy อิสระ
- ตัวอย่าง: Netflix, Grab, Shopee

## Serverless ✅
- งานที่มี traffic ไม่สม่ำเสมอ (บางทีเยอะ บางทีไม่มี)
- Function เล็กๆ ที่ทำงานเฉพาะอย่าง
- ไม่อยากจัดการ server
- ตัวอย่าง: webhook, image resize, scheduled job

## Event-Driven ✅
- ระบบที่มีหลาย step ต่อเนื่อง
- ต้องการ decouple ระหว่าง services
- ต้องรองรับ async processing
- ตัวอย่าง: สั่งซื้อ → ชำระเงิน → ส่งอีเมล → ตัดสต็อก

## ❌ Anti-Pattern
- ใช้ Microservices กับทีม 3 คน (over-engineering!)
- Monolith ที่มี 500 คน contribute (แก้อะไรก็พัง)
- Serverless สำหรับ long-running jobs (timeout!)`,
        explanation:
          "\"เลือก pattern ตามขนาดทีมและลักษณะงาน ไม่ใช่ตาม trend\" — นี่คือบทเรียนสำคัญที่สุดของ Architecture",
      },
    ],
    practiceProjects: [
      "Refactor โปรเจกต์ Next.js ให้เป็น Layered Architecture",
      "สร้าง API แบบ Clean Architecture (แยก use cases ชัดเจน)",
      "ออกแบบ Microservices สำหรับ \"ระบบส่งอาหาร\" (Order, Restaurant, Delivery, Payment)",
      "สร้าง Event-Driven workflow: สั่งซื้อ → ส่ง email → อัปเดตสต็อก",
      "เปรียบเทียบ Monolith vs Microservices สำหรับโปรเจกต์เดียวกัน",
    ],
    tips: [
      "Start with Monolith, scale with Microservices — เริ่มเล็กก่อนเสมอ",
      "ถ้าทีมเล็กกว่า 10 คน Monolith เกือบจะเป็นคำตอบที่ดีที่สุดเสมอ",
      "แยก \"ชั้น\" ก่อน แยก \"service\" ทีหลัง — Layered Architecture เป็นก้าวแรกที่ดี",
      "อ่าน \"Building Microservices\" ของ Sam Newman — หนังสือที่ดีที่สุดในหัวข้อนี้",
      "อย่าลืมว่า Microservices มีค่าใช้จ่ายสูง — ทั้ง infra, communication, debugging",
    ],
    relatedCareers: ["system-analyst", "developer", "devops"],
  },
  {
    slug: "design-patterns",
    title: "Design Patterns",
    titleEn: "Software Design Patterns",
    icon: "🧬",
    category: "architecture",
    categoryIcon: "🏛️",
    color: "amber",
    difficulty: "intermediate",
    estimatedTime: "4-6 สัปดาห์",
    description:
      "Design Patterns คือ \"สูตรสำเร็จ\" ในการแก้ปัญหาที่เจอบ่อยๆ ในการเขียนโค้ด — เรียนครั้งเดียว ใช้ได้ตลอดชีวิต",
    whatIsIt:
      "ลองนึกถึงการทำอาหาร — คุณไม่ต้องคิดสูตรเองทุกครั้ง มี \"สูตร\" ที่คนก่อนหน้าลองแล้วอร่อย Design Patterns ก็เหมือนกัน — เป็น \"วิธีแก้ปัญหา\" ที่นักพัฒนาหลายล้านคนลองมาแล้วว่าใช้ได้ดี เวลาคุณเจอปัญหาซ้ำๆ แทนที่จะคิดเองใหม่ ก็หยิบ pattern มาใช้ได้เลย มันเหมือนภาษากลางที่ developer ทั่วโลกเข้าใจตรงกัน",
    whyLearn: [
      "แก้ปัญหาได้เร็วขึ้น เพราะมีรูปแบบให้เลือกใช้",
      "สื่อสารกับทีมง่ายขึ้น — พูดว่า \"ใช้ Observer Pattern\" ทุกคนเข้าใจ",
      "เขียนโค้ดที่ยืดหยุ่นและบำรุงรักษาง่ายขึ้น",
      "ถูกถามในการสัมภาษณ์งาน Mid-Senior level",
      "เข้าใจ library ที่ใช้อยู่ลึกขึ้น เพราะมันถูกสร้างจาก patterns เหล่านี้",
    ],
    keyConcepts: [
      { title: "Singleton", description: "สร้าง instance เดียว ใช้ร่วมกันทั้งระบบ — เช่น database connection, config", icon: "1️⃣" },
      { title: "Observer", description: "เมื่อสิ่งหนึ่งเปลี่ยน แจ้งทุกคนที่สนใจอัตโนมัติ — เช่น React state, event listener", icon: "👀" },
      { title: "Factory", description: "สร้าง object โดยไม่ต้องรู้ว่าจะสร้างอะไร — ให้ factory ตัดสินใจให้", icon: "🏭" },
      { title: "Strategy", description: "สลับ algorithm ได้ตอน runtime — เช่น เปลี่ยนวิธีคำนวณค่าส่งตามประเภทสินค้า", icon: "♟️" },
      { title: "Adapter", description: "แปลง interface ที่ไม่เข้ากัน ให้ทำงานร่วมกันได้ — เหมือนปลั๊กแปลงไฟ", icon: "🔌" },
      { title: "Repository", description: "แยกตรรกะการเข้าถึงข้อมูลออกจาก business logic — ทำให้เปลี่ยน database ง่าย", icon: "🗄️" },
      { title: "Dependency Injection", description: "ส่ง dependency จากภายนอกเข้าไป แทนที่จะสร้างเอง — ทดสอบง่ายขึ้นมาก", icon: "💉" },
    ],
    gettingStarted: [
      { step: "เข้าใจ OOP พื้นฐาน", detail: "Class, Interface, Inheritance, Polymorphism — ต้องรู้ก่อน" },
      { step: "เริ่มจาก 5 Patterns ที่ใช้บ่อยที่สุด", detail: "Singleton, Observer, Factory, Strategy, Repository — แค่ 5 ตัวนี้ก็ครอบคลุม 80% ของงาน" },
      { step: "ดูตัวอย่างในภาษาที่คุ้นเคย", detail: "ดู pattern ใน JavaScript/TypeScript ก่อน แล้วค่อยขยายไปภาษาอื่น" },
      { step: "หาในโค้ดที่ใช้อยู่", detail: "React ใช้ Observer, Prisma ใช้ Repository, Next.js ใช้ Factory — ลองหาดู!" },
      { step: "ฝึกใช้ในโปรเจกต์", detail: "เลือก 1 pattern แล้วลองใช้ในโปรเจกต์จริง" },
    ],
    codeExamples: [
      {
        language: "typescript",
        title: "Design Patterns ใน TypeScript: 3 ตัวที่ใช้บ่อยที่สุด",
        code: `// 1️⃣ SINGLETON — Database Connection ตัวเดียวทั้งระบบ
class Database {
  private static instance: Database;
  private constructor() { /* connect to DB */ }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
// Prisma ก็ใช้ pattern นี้! (lib/db.ts ในโปรเจกต์เรา)


// 🏭 FACTORY — สร้าง Notification ตามประเภท
interface Notification {
  send(message: string): void;
}

class EmailNotification implements Notification {
  send(msg: string) { console.log(\`📧 Email: \${msg}\`); }
}

class LineNotification implements Notification {
  send(msg: string) { console.log(\`💬 LINE: \${msg}\`); }
}

function createNotification(type: "email" | "line"): Notification {
  if (type === "email") return new EmailNotification();
  if (type === "line") return new LineNotification();
  throw new Error("Unknown type");
}

const notif = createNotification("line");
notif.send("สวัสดี!"); // 💬 LINE: สวัสดี!


// ♟️ STRATEGY — เปลี่ยนวิธีคำนวณค่าส่ง
interface ShippingStrategy {
  calculate(weight: number): number;
}

const standardShipping: ShippingStrategy = {
  calculate: (weight) => weight * 10, // 10 บาท/กก.
};

const expressShipping: ShippingStrategy = {
  calculate: (weight) => weight * 25 + 50, // 25 บาท/กก. + 50
};

function getShippingCost(
  weight: number,
  strategy: ShippingStrategy
) {
  return strategy.calculate(weight);
}

getShippingCost(2, standardShipping); // 20 บาท
getShippingCost(2, expressShipping);  // 100 บาท`,
        explanation:
          "แต่ละ pattern แก้ปัญหาคนละแบบ: Singleton ป้องกันการสร้างซ้ำ, Factory ซ่อนความซับซ้อนการสร้าง object, Strategy ทำให้เปลี่ยน algorithm ได้ง่าย",
      },
    ],
    practiceProjects: [
      "สร้าง Notification System ที่ส่งได้ทั้ง Email, LINE, SMS (Factory + Strategy)",
      "Refactor โค้ดที่มี if-else เยอะๆ ให้ใช้ Strategy Pattern",
      "สร้าง Repository Pattern สำหรับ Prisma ใน Next.js",
      "สร้าง Event System ด้วย Observer Pattern (เหมือน EventEmitter)",
      "วิเคราะห์โค้ดของ React/Next.js หาว่าใช้ Design Pattern อะไรบ้าง",
    ],
    tips: [
      "อย่าท่องจำ — เข้าใจว่าแต่ละ pattern \"แก้ปัญหาอะไร\" แล้วจะหยิบมาใช้ได้เอง",
      "อย่าใช้ pattern ทุกที่ — ใช้เฉพาะเมื่อมันช่วยให้โค้ดดีขึ้นจริงๆ",
      "เริ่มจาก Singleton, Observer, Factory ก่อน — 3 ตัวนี้ใช้บ่อยที่สุด",
      "อ่าน \"Refactoring Guru\" (refactoring.guru) — อธิบาย patterns ด้วยภาพสวยมาก",
      "Design Patterns ไม่ได้มีแค่ใน OOP — Functional Programming ก็มี patterns ของตัวเอง",
    ],
    relatedCareers: ["developer", "system-analyst"],
  },

  // ─── PRACTICAL IMPLEMENTATION ───
  {
    slug: "building-real-apps",
    title: "สร้างแอปจริงตั้งแต่ศูนย์",
    titleEn: "Building Real Applications from Scratch",
    icon: "🔨",
    category: "practical",
    categoryIcon: "🔨",
    color: "emerald",
    difficulty: "intermediate",
    estimatedTime: "4-8 สัปดาห์",
    description:
      "เรียนรู้กระบวนการสร้างแอปพลิเคชันจริงตั้งแต่ไอเดีย → ออกแบบ → เขียนโค้ด → ทดสอบ → Deploy — ครบทุกขั้นตอนเหมือนทำงานจริง",
    whatIsIt:
      "หลายคนเรียนรู้ React, Node.js, SQL แยกกันแล้ว แต่พอจะ \"รวมทุกอย่างเข้าด้วยกัน\" เป็นแอปจริงสักตัว กลับไม่รู้จะเริ่มยังไง บทเรียนนี้คือ \"สะพานเชื่อม\" ที่พาคุณจากการเรียนรู้ทีละเรื่อง → สร้างแอปจริงที่ใช้ได้ เหมือนกับอาจารย์พาคุณสร้างโปรเจกต์ตั้งแต่ต้นจนจบ บอกทุกขั้นตอนว่าทำอะไร ทำไม และทำยังไง",
    whyLearn: [
      "เปลี่ยนจาก \"เรียนรู้\" เป็น \"ทำได้\" — ฝึกทุกทักษะรวมกัน",
      "สร้าง Portfolio ที่แสดงความสามารถจริง ไม่ใช่แค่ Todo App",
      "เข้าใจ workflow การทำงานจริงในบริษัท",
      "มั่นใจในการสมัครงานเพราะมีผลงานจริง",
      "เรียนรู้วิธีแก้ปัญหาจริงๆ ที่ tutorial ไม่ได้สอน",
    ],
    keyConcepts: [
      { title: "1. กำหนดขอบเขต (Scoping)", description: "เลือกว่าจะสร้างอะไร กำหนดฟีเจอร์หลัก 3-5 อย่าง — อย่าทำทุกอย่างตั้งแต่แรก ทำ MVP ก่อน", icon: "🎯" },
      { title: "2. ออกแบบ (Design)", description: "วาด wireframe, ออกแบบ database schema, กำหนด API endpoints — วางแผนก่อนเขียนโค้ด", icon: "📐" },
      { title: "3. ตั้งโปรเจกต์ (Setup)", description: "สร้างโปรเจกต์ ตั้ง Git, เลือก tech stack, กำหนดโครงสร้างโฟลเดอร์", icon: "⚙️" },
      { title: "4. สร้าง Database (Data Layer)", description: "สร้าง Prisma schema, migrate, seed ข้อมูลทดสอบ", icon: "🗃️" },
      { title: "5. สร้าง API (Backend)", description: "สร้าง API routes, validation, error handling, authentication", icon: "🔌" },
      { title: "6. สร้าง UI (Frontend)", description: "สร้างหน้าเว็บ, form, navigation, responsive design", icon: "🖥️" },
      { title: "7. ทดสอบ (Testing)", description: "เขียน test, ทดสอบ edge cases, ทำ QA ก่อน deploy", icon: "🧪" },
      { title: "8. Deploy & Monitor", description: "Deploy ขึ้น Vercel/Cloud, ตั้ง monitoring, รับ feedback", icon: "🚀" },
    ],
    gettingStarted: [
      { step: "เลือกโปรเจกต์ที่ \"พอดี\"", detail: "ไม่ง่ายเกินไป (Todo) ไม่ยากเกินไป (Facebook) — ลองสร้าง Blog platform, ระบบจองห้อง, หรือ E-commerce เล็กๆ" },
      { step: "เขียน Product Brief 1 หน้า", detail: "สรุปว่า: สร้างอะไร, ใครใช้, ฟีเจอร์หลักคืออะไร, ใช้ technology อะไร" },
      { step: "ออกแบบ Database Schema", detail: "วาด ER Diagram ก่อน แล้วค่อยเขียน Prisma schema" },
      { step: "สร้าง MVP ก่อน", detail: "ทำฟีเจอร์หลักให้ใช้ได้ก่อน ค่อยเพิ่มความสวยงามทีหลัง" },
      { step: "Deploy ตั้งแต่เนิ่นๆ", detail: "Deploy ขึ้น Vercel ตั้งแต่วันแรก — อย่ารอจน \"เสร็จ\" แล้วค่อย deploy" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "Product Brief ตัวอย่าง: ระบบจัดการงานส่วนตัว (Task Manager)",
        code: `# Product Brief: TaskFlow — ระบบจัดการงาน

## 🎯 สิ่งที่จะสร้าง
Web app สำหรับจัดการ tasks ส่วนตัว แบ่งเป็น project

## 👤 ใครใช้
นักศึกษาและ freelancer ที่ต้องการจัดการงานหลายโปรเจกต์

## ✨ ฟีเจอร์หลัก (MVP)
1. สร้าง/แก้ไข/ลบ project
2. สร้าง/แก้ไข/ลบ task ใน project
3. ลาก task ระหว่าง status (To Do / In Progress / Done)
4. Login ด้วย email
5. ดู dashboard สรุปงาน

## 🛠️ Tech Stack
- Framework: Next.js 16 + TypeScript
- Styling: Tailwind CSS
- Database: PostgreSQL + Prisma
- Auth: NextAuth.js
- Deploy: Vercel + Neon (Postgres)

## 📁 Database Schema
- User: id, name, email, password
- Project: id, name, userId
- Task: id, title, description, status, priority, projectId

## 📅 Timeline
- Week 1: Setup + Database + Auth
- Week 2: API Routes + CRUD
- Week 3: UI + Drag & Drop
- Week 4: Testing + Polish + Deploy`,
        explanation:
          "ก่อนเขียนโค้ดแม้แต่บรรทัดเดียว ให้เขียน Product Brief แบบนี้ก่อน — 30 นาทีที่ใช้วางแผนจะช่วยประหยัดเวลาหลายวัน",
      },
      {
        language: "typescript",
        title: "โครงสร้างโปรเจกต์จริง: Next.js Full-Stack",
        code: `// 📁 โครงสร้างโฟลเดอร์แนะนำ
// my-app/
// ├── app/
// │   ├── layout.tsx          ← Root layout
// │   ├── page.tsx            ← Landing page
// │   ├── (auth)/
// │   │   ├── login/page.tsx  ← Login page
// │   │   └── register/page.tsx
// │   ├── dashboard/
// │   │   ├── page.tsx        ← Dashboard
// │   │   └── layout.tsx      ← Dashboard layout (with sidebar)
// │   ├── projects/
// │   │   ├── page.tsx        ← Project list
// │   │   └── [id]/page.tsx   ← Project detail + tasks
// │   └── api/
// │       ├── projects/route.ts    ← CRUD API
// │       └── tasks/route.ts
// ├── components/
// │   ├── ui/                 ← Reusable UI (Button, Card, Input)
// │   ├── task-card.tsx
// │   └── project-list.tsx
// ├── lib/
// │   ├── db.ts               ← Prisma client
// │   ├── auth.ts             ← Auth config
// │   └── validations.ts      ← Zod schemas
// ├── prisma/
// │   └── schema.prisma       ← Database schema
// └── .env                    ← Environment variables

// ─── ขั้นตอนที่ 1: Prisma Schema ─────
// prisma/schema.prisma
// model User {
//   id       Int       @id @default(autoincrement())
//   email    String    @unique
//   name     String
//   projects Project[]
// }
//
// model Project {
//   id     Int    @id @default(autoincrement())
//   name   String
//   user   User   @relation(fields: [userId], references: [id])
//   userId Int
//   tasks  Task[]
// }
//
// model Task {
//   id        Int      @id @default(autoincrement())
//   title     String
//   status    String   @default("todo")
//   project   Project  @relation(fields: [projectId], references: [id])
//   projectId Int
// }

// ─── ขั้นตอนที่ 2: API Route ─────
// app/api/projects/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const projects = await prisma.project.findMany({
    include: { tasks: true, _count: { select: { tasks: true } } },
    orderBy: { id: "desc" },
  });
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const { name, userId } = await req.json();

  if (!name || !userId) {
    return NextResponse.json(
      { error: "name and userId are required" },
      { status: 400 }
    );
  }

  const project = await prisma.project.create({
    data: { name, userId },
  });
  return NextResponse.json(project, { status: 201 });
}`,
        explanation:
          "นี่คือโครงสร้างจริงของโปรเจกต์ Next.js Full-Stack — แบ่งโฟลเดอร์ชัดเจน, เริ่มจาก Database Schema ก่อน แล้วค่อยสร้าง API แล้วค่อยทำ UI",
      },
    ],
    practiceProjects: [
      "สร้าง Blog Platform: เขียนบทความ, แสดง, แก้ไข, ลบ, search",
      "สร้าง E-Commerce: แสดงสินค้า, ตะกร้า, checkout (จำลอง)",
      "สร้าง Task Manager: projects, tasks, drag-and-drop board",
      "สร้าง Social Media: post, like, comment, follow",
      "สร้าง URL Shortener: สร้าง short link, redirect, analytics",
    ],
    tips: [
      "\"Done is better than perfect\" — ทำให้ใช้ได้ก่อน ค่อยทำให้สวยทีหลัง",
      "Deploy ตั้งแต่วันแรก — จะได้เจอปัญหา production ตั้งแต่เนิ่นๆ",
      "ใช้ Git branching — สร้าง branch ต่อ feature อย่าทำใน main ตรงๆ",
      "เขียน README ที่ดี — อธิบายว่าโปรเจกต์ทำอะไร ใช้อะไร รันยังไง",
      "เก็บ .env ไว้ใน .gitignore เสมอ — อย่า commit secrets ขึ้น GitHub!",
      "ถ้าติด ให้พัก 15 นาทีแล้วกลับมาใหม่ — สมองทำงานเบื้องหลังให้",
    ],
    relatedCareers: ["developer", "system-analyst", "product-owner"],
  },
  {
    slug: "clean-code",
    title: "Clean Code & Best Practices",
    titleEn: "Clean Code & Best Practices",
    icon: "✨",
    category: "practical",
    categoryIcon: "🔨",
    color: "sky",
    difficulty: "beginner",
    estimatedTime: "2-3 สัปดาห์",
    description:
      "Clean Code คือการเขียนโค้ดที่มนุษย์อ่านเข้าใจ — ไม่ใช่แค่คอมพิวเตอร์รันได้ แต่คนในทีมอ่านแล้วเข้าใจได้ทันที",
    whatIsIt:
      "ลองนึกภาพว่าคุณอ่านสูตรอาหาร 2 แบบ แบบแรกเขียนว่า \"ใส่ a 2 ถ้วย ผสม b แล้วทำ c\" คุณงง แบบที่สองเขียนว่า \"ใส่แป้ง 2 ถ้วย ผสมไข่ แล้วนวดจนเนียน\" เข้าใจทันที Clean Code ก็แบบเดียวกัน — เขียนโค้ดให้คนอ่านเข้าใจ ตั้งชื่อตัวแปรให้สื่อความหมาย แยกฟังก์ชันให้ทำงานอย่างเดียว จัดระเบียบให้หาง่าย \"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.\" — Martin Fowler",
    whyLearn: [
      "โค้ดถูกอ่านมากกว่าถูกเขียน — 80% ของเวลา dev ใช้ \"อ่าน\" โค้ด",
      "ทำงานร่วมกับทีมได้ดีขึ้น — คนอื่นอ่านโค้ดคุณเข้าใจ",
      "แก้ bug ง่ายขึ้น เพราะโค้ดชัดเจน",
      "ส่งผลดีต่อการสัมภาษณ์งาน — code review ดีมาก",
      "ประหยัดเวลาในระยะยาว — โค้ดสกปรกจะ \"กลับมาหลอกหลอน\" คุณ",
    ],
    keyConcepts: [
      { title: "ตั้งชื่อให้สื่อความหมาย", description: "ใช้ getUserById() แทน fn1(), ใช้ isActive แทน flag — ชื่อดี = ไม่ต้อง comment", icon: "🏷️" },
      { title: "ฟังก์ชันทำงานอย่างเดียว", description: "ฟังก์ชันหนึ่ง ทำหนึ่งอย่าง — ถ้ามีคำว่า \"and\" ในชื่อ ให้แยกออก", icon: "🎯" },
      { title: "DRY (Don't Repeat Yourself)", description: "เจอโค้ดซ้ำ → extract เป็นฟังก์ชัน อย่า copy-paste", icon: "🔄" },
      { title: "KISS (Keep It Simple)", description: "เขียนให้ง่ายที่สุดที่ยังถูกต้อง — อย่า over-engineer", icon: "💋" },
      { title: "Error Handling ที่ดี", description: "จัดการ error อย่างชัดเจน — ไม่ใช่ catch แล้ว ignore", icon: "🛡️" },
      { title: "Code Review Culture", description: "ให้เพื่อนรีวิวโค้ด — เรียนรู้จากกันและกัน โค้ดดีขึ้นเสมอ", icon: "👥" },
    ],
    gettingStarted: [
      { step: "เริ่มจากการตั้งชื่อ", detail: "ทุกครั้งที่สร้างตัวแปร/ฟังก์ชัน ถามตัวเอง: \"คนอื่นอ่านชื่อนี้แล้วรู้ไหมว่ามันคืออะไร?\"" },
      { step: "ฝึกแยกฟังก์ชัน", detail: "ถ้าฟังก์ชันยาวเกิน 20 บรรทัด ลองแยกส่วนออกมา" },
      { step: "อ่าน \"Clean Code\" ของ Robert C. Martin", detail: "หนังสือคลาสสิกที่ developer ทุกคนควรอ่าน" },
      { step: "ลอง Refactor โค้ดเก่า", detail: "หยิบโค้ดที่เขียนเมื่อเดือนก่อน แล้วลอง clean up" },
      { step: "ขอ Code Review", detail: "ส่ง PR ให้เพื่อนรีวิว — เรียนรู้ได้เร็วมาก" },
    ],
    codeExamples: [
      {
        language: "typescript",
        title: "Before & After: Clean Code ในชีวิตจริง",
        code: `// ❌ BEFORE — โค้ดที่อ่านไม่รู้เรื่อง
function proc(d: any[]) {
  let r: any[] = [];
  for (let i = 0; i < d.length; i++) {
    if (d[i].a === true && d[i].p > 0) {
      let t = d[i].p * 0.93;
      r.push({ ...d[i], fp: t });
    }
  }
  return r;
}


// ✅ AFTER — โค้ดที่อ่านแล้วเข้าใจทันที

interface Product {
  name: string;
  price: number;
  isActive: boolean;
}

interface ProductWithDiscount extends Product {
  finalPrice: number;
}

const DISCOUNT_RATE = 0.07; // ลด 7%

function getDiscountedActiveProducts(
  products: Product[]
): ProductWithDiscount[] {
  return products
    .filter((product) => product.isActive && product.price > 0)
    .map((product) => ({
      ...product,
      finalPrice: calculateDiscountedPrice(product.price),
    }));
}

function calculateDiscountedPrice(price: number): number {
  return price * (1 - DISCOUNT_RATE);
}`,
        explanation:
          "โค้ดทั้งสองทำงานเหมือนกัน 100% แต่แบบ After อ่านแล้วเข้าใจใน 5 วินาที ในขณะที่แบบ Before ต้องนั่งไล่ logic ไม่รู้ว่า d, r, a, p, fp คืออะไร",
      },
      {
        language: "typescript",
        title: "ฟังก์ชันที่ดี vs ไม่ดี",
        code: `// ❌ ฟังก์ชันที่ทำหลายอย่างเกินไป
async function handleUserRegistration(data: any) {
  // validate
  if (!data.email) throw new Error("no email");
  if (!data.password) throw new Error("no password");
  if (data.password.length < 8) throw new Error("too short");

  // check duplicate
  const existing = await db.user.findUnique({
    where: { email: data.email }
  });
  if (existing) throw new Error("email exists");

  // hash password
  const hashed = await bcrypt.hash(data.password, 12);

  // create user
  const user = await db.user.create({
    data: { email: data.email, password: hashed }
  });

  // send welcome email
  await sendEmail(data.email, "Welcome!", "ยินดีต้อนรับ...");

  return user;
}


// ✅ แยกเป็นฟังก์ชันเล็กๆ ที่ทำงานอย่างเดียว
async function registerUser(input: RegisterInput) {
  validateRegistration(input);
  await ensureEmailNotTaken(input.email);

  const user = await createUser(input);
  await sendWelcomeEmail(user.email);

  return user;
}

function validateRegistration(input: RegisterInput) {
  if (!input.email) throw new ValidationError("กรุณากรอก email");
  if (!input.password) throw new ValidationError("กรุณากรอกรหัสผ่าน");
  if (input.password.length < 8) {
    throw new ValidationError("รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร");
  }
}

async function ensureEmailNotTaken(email: string) {
  const existing = await db.user.findUnique({ where: { email } });
  if (existing) throw new ConflictError("Email นี้มีคนใช้แล้ว");
}

async function createUser(input: RegisterInput) {
  const hashedPassword = await bcrypt.hash(input.password, 12);
  return db.user.create({
    data: { email: input.email, password: hashedPassword },
  });
}`,
        explanation:
          "registerUser() อ่านเหมือนภาษาอังกฤษ: validate → check email → create user → send email แต่ละขั้นตอนแยกเป็นฟังก์ชัน ทดสอบง่าย แก้ไขง่าย อ่านง่าย",
      },
    ],
    practiceProjects: [
      "Refactor โค้ดเก่าของตัวเองให้ clean ขึ้น (ก่อน/หลัง)",
      "เขียน utility functions ที่ตั้งชื่อดีและมี TypeScript types",
      "ตั้ง ESLint + Prettier ในโปรเจกต์ เพื่อบังคับ coding style",
      "ขอเพื่อน 2-3 คน ทำ Code Review ให้กัน",
      "เขียน Coding Standards ของทีม 1 หน้า",
    ],
    tips: [
      "กฎ Boy Scout: \"ทิ้งโค้ดให้สะอาดกว่าตอนที่พบ\" — แก้เล็กๆ น้อยๆ ทุกครั้งที่ผ่าน",
      "Comment ที่ดีที่สุดคือโค้ดที่ไม่ต้องมี comment — ตั้งชื่อให้ดีแทน",
      "ตั้ง Prettier ให้ format อัตโนมัติ — ไม่ต้องเสียเวลากับ spacing, semicolons",
      "อย่าจม over-clean — ทำให้ \"พอดี\" ไม่ใช่ \"สมบูรณ์แบบ\"",
      "Code Review ไม่ใช่การจับผิด — เป็นการเรียนรู้ร่วมกัน",
    ],
    relatedCareers: ["developer", "system-analyst"],
  },
  {
    slug: "project-workflow",
    title: "Workflow การทำโปรเจกต์จริง",
    titleEn: "Real Project Workflow & Collaboration",
    icon: "🤝",
    category: "practical",
    categoryIcon: "🔨",
    color: "rose",
    difficulty: "beginner",
    estimatedTime: "1-2 สัปดาห์",
    description:
      "เรียนรู้ว่าทีม Dev ทำงานกันจริงๆ ยังไง — จาก ticket ถึง production ใช้เครื่องมืออะไร และ process เป็นยังไง",
    whatIsIt:
      "ใน university คุณอาจจะเขียนโค้ดคนเดียว commit ตรงไป main แต่ในบริษัทจริง มีขั้นตอนมากกว่านั้น — คุณจะได้รับ \"ticket\" (งาน), สร้าง branch, เขียนโค้ด, ส่ง Pull Request, ให้คนรีวิว, แก้ตาม feedback, merge, แล้ว deploy เข้าใจ workflow นี้ก่อนเข้าทำงาน = ไม่ต้องงงในวันแรก",
    whyLearn: [
      "เข้าใจว่าทีม Dev ทำงานยังไง ก่อนเข้าทำงานจริง",
      "ลดความกังวลในวันแรกของการทำงาน",
      "ฝึกนิสัยการทำงานที่ดีตั้งแต่ยังเป็นนักศึกษา",
      "ทำงานร่วมกับทีมโปรเจกต์จบได้มีประสิทธิภาพขึ้น",
    ],
    keyConcepts: [
      { title: "Ticket / Issue", description: "งานแต่ละชิ้นจะถูกสร้างเป็น ticket ใน Jira/Linear — มี title, description, priority, assigned to", icon: "🎫" },
      { title: "Git Branching Strategy", description: "main (production), develop (staging), feature/* (ฟีเจอร์) — ไม่เขียนตรงบน main", icon: "🌿" },
      { title: "Pull Request (PR)", description: "ส่งโค้ดให้ทีมรีวิว ก่อน merge — มี description, screenshots, link ไป ticket", icon: "📬" },
      { title: "Code Review", description: "เพื่อนร่วมทีมอ่านโค้ดให้ comment ข้อเสนอแนะ — เรียนรู้จากกันและกัน", icon: "🔍" },
      { title: "CI/CD Pipeline", description: "ระบบอัตโนมัติที่รัน test + build ทุกครั้งที่ push — ถ้าไม่ผ่านจะ merge ไม่ได้", icon: "🤖" },
      { title: "Sprint Ceremonies", description: "Planning (เลือกงาน), Standup (sync ทุกเช้า), Review (demo), Retro (ปรับปรุง)", icon: "📅" },
      { title: "Definition of Done (DoD)", description: "เกณฑ์ที่บอกว่างาน \"เสร็จ\" แล้ว — โค้ดเสร็จ + test ผ่าน + review แล้ว + deployed", icon: "✅" },
    ],
    gettingStarted: [
      { step: "ตั้ง Git Branching สำหรับโปรเจกต์", detail: "ใช้ main + feature branches — ฝึกสร้าง branch, commit, push, merge" },
      { step: "ฝึกเขียน Pull Request ที่ดี", detail: "เขียน PR description ชัดเจน: อะไรเปลี่ยน, ทำไม, test ยังไง, screenshot" },
      { step: "ลอง Code Review กับเพื่อน", detail: "ให้เพื่อนส่ง PR มา แล้วลองรีวิว — ฝึกให้ comment ที่ constructive" },
      { step: "ใช้ Project Board", detail: "ตั้ง Trello/GitHub Projects เป็น board: Todo → In Progress → Review → Done" },
      { step: "ฝึก Daily Standup", detail: "ทุกเช้าบอกทีม 3 อย่าง: เมื่อวานทำอะไร, วันนี้จะทำอะไร, ติดอะไร" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "Workflow จาก Ticket → Production",
        code: `## 1. 🎫 รับ Ticket
Ticket: TASK-42 "สร้างหน้า Login"
Status: To Do → In Progress

## 2. 🌿 สร้าง Branch
git checkout -b feature/TASK-42-login-page

## 3. 💻 เขียนโค้ด + Commit
git add .
git commit -m "feat: add login page with email validation"
git commit -m "feat: add password strength indicator"
git commit -m "test: add unit tests for login form"

## 4. 📬 สร้าง Pull Request
Title: "feat: add login page (TASK-42)"
Description:
  - สร้างหน้า Login ด้วย email + password
  - มี validation: email format, password 8+ chars
  - เพิ่ม unit test 5 test cases
  - Screenshots: [แนบรูป]

## 5. 🔍 Code Review
Reviewer: @somchai
Comments: "ตรง line 42 ควรใช้ try-catch ครอบ"
→ แก้ไขตาม feedback → Push → Approve ✅

## 6. 🤖 CI/CD ผ่าน
- ✅ Lint passed
- ✅ Tests passed (32/32)
- ✅ Build successful

## 7. 🚀 Merge & Deploy
Merge PR → Auto-deploy to staging → QA ทดสอบ → Deploy to production

## 8. ✅ อัปเดต Ticket
Status: Done
Ticket: TASK-42 ✅ Completed`,
        explanation:
          "นี่คือ workflow จริงที่ developer ทำทุกวัน — จาก ticket → branch → code → PR → review → merge → deploy ฝึกทำแบบนี้ตั้งแต่ยังเป็นนักศึกษาจะดีมาก",
      },
      {
        language: "markdown",
        title: "Pull Request Template ที่ดี",
        code: `## 📝 รายละเอียด
สร้างหน้า Login สำหรับผู้ใช้ทั่วไป (TASK-42)

## ✨ สิ่งที่เปลี่ยนแปลง
- เพิ่ม app/login/page.tsx — หน้า Login
- เพิ่ม lib/validations.ts — email & password validation
- เพิ่ม components/login-form.tsx — Login form component
- เพิ่ม tests สำหรับ validation 5 cases

## 📸 Screenshots
| Before | After |
|--------|-------|
| ไม่มี   | [รูป login page] |

## 🧪 ทดสอบยังไง
1. เข้า /login
2. กรอก email ผิด format → เห็น error message
3. กรอก password < 8 ตัว → เห็น error message
4. กรอกถูกต้อง → redirect ไป /dashboard

## ✅ Checklist
- [x] ทดสอบบน desktop & mobile
- [x] เพิ่ม unit tests
- [x] ไม่มี TypeScript error
- [x] ผ่าน ESLint`,
        explanation:
          "PR ที่ดีต้องบอกได้ว่า \"อะไรเปลี่ยน ทำไมเปลี่ยน ทดสอบยังไง\" — ทำให้ reviewer เข้าใจได้เร็วและรีวิวได้ง่าย",
      },
    ],
    practiceProjects: [
      "ตั้ง GitHub Project Board สำหรับโปรเจกต์จบ ครบทุกคอลัมน์",
      "ทำโปรเจกต์กับเพื่อน 2-3 คน ใช้ branching + PR + code review",
      "เขียน PR Template ของทีมแล้วใส่ใน .github/pull_request_template.md",
      "ฝึก Daily Standup กับทีมโปรเจกต์จบ ทุกวันจันทร์-ศุกร์ 10 นาที",
    ],
    tips: [
      "Commit message ที่ดีเริ่มด้วย: feat:, fix:, test:, docs:, refactor:",
      "PR ควรเล็ก — แก้ทีละเรื่อง review ง่ายกว่า PR ใหญ่ที่แก้ 10 เรื่อง",
      "Code Review ไม่ใช่การจับผิด — เป็นการเรียนรู้ร่วมกัน ให้เคารพกัน",
      "ถ้าติดปัญหา บอกทีมเร็ว — อย่ารอจนหมดเวลา \"ติดอะไร\" คือข้อมูลที่สำคัญ",
      "Definition of Done สำคัญ — \"เสร็จ\" ไม่ใช่แค่เขียนโค้ดจบ ต้อง test + review + deploy ด้วย",
    ],
    relatedCareers: ["developer", "project-manager", "product-owner", "devops"],
  },

  // ─── NETWORKING & SECURITY (foundation) ───
  {
    slug: "networking-http",
    title: "Networking & HTTP",
    titleEn: "Networking, HTTP & How the Internet Works",
    icon: "🌐",
    category: "foundation",
    categoryIcon: "🧱",
    color: "blue",
    difficulty: "beginner",
    estimatedTime: "1-2 สัปดาห์",
    description:
      "เข้าใจว่าอินเทอร์เน็ตทำงานยังไง — HTTP, DNS, TCP/IP คือพื้นฐานที่ Developer ทุกคนต้องรู้ ไม่ว่าจะสร้าง Web, Mobile หรือ Server",
    whatIsIt:
      "ทุกครั้งที่คุณพิมพ์ URL ในเบราว์เซอร์แล้วกด Enter เกิดอะไรขึ้นเบื้องหลังมากมาย — เบราว์เซอร์ถาม DNS ว่า \"google.com อยู่ที่ไหน\" ได้ IP address กลับมา แล้วส่ง HTTP request ไปหา server ที่ IP นั้น server ตอบกลับด้วยหน้าเว็บ ทั้งหมดนี้เกิดขึ้นภายในเสี้ยววินาที เหมือนคุณส่งจดหมาย (request) ไปที่ทำการไปรษณีย์ (DNS) เพื่อหาที่อยู่ แล้วจดหมายถูกส่งไปถึงบ้านปลายทาง (server) แล้วเจ้าของบ้านส่งจดหมายตอบกลับ (response) มา",
    whyLearn: [
      "เข้าใจว่า API, fetch, WebSocket ทำงานยังไง — ไม่ใช่แค่ \"เรียกแล้วได้ data\"",
      "Debug ปัญหา network ได้ — ทำไม API ช้า ทำไม CORS error ทำไม 504 timeout",
      "จำเป็นสำหรับ DevOps, Backend, และการตั้ง server",
      "ถูกถามในการสัมภาษณ์งานเกือบทุกตำแหน่ง",
    ],
    keyConcepts: [
      { title: "HTTP / HTTPS", description: "โปรโตคอลที่เบราว์เซอร์ใช้คุยกับ server — GET ขอข้อมูล, POST ส่งข้อมูล, HTTPS = เข้ารหัสปลอดภัย", icon: "📡" },
      { title: "DNS", description: "แปลงชื่อเว็บ (google.com) เป็น IP address (142.250.x.x) — เหมือนสมุดโทรศัพท์ของอินเทอร์เน็ต", icon: "📒" },
      { title: "TCP/IP", description: "วิธีที่ข้อมูลเดินทางบนอินเทอร์เน็ต — แบ่งเป็น packets ส่งไปแล้วประกอบกลับ", icon: "📦" },
      { title: "Request / Response Cycle", description: "Client ส่ง request → Server ประมวลผล → Server ตอบ response กลับ", icon: "🔄" },
      { title: "Status Codes", description: "2xx=สำเร็จ, 3xx=redirect, 4xx=client ผิด, 5xx=server พัง", icon: "🚦" },
      { title: "Headers & Cookies", description: "ข้อมูลเพิ่มเติมใน request/response — auth token, content-type, session cookies", icon: "📋" },
      { title: "WebSocket", description: "การสื่อสารแบบ real-time สองทาง — ใช้ใน chat, game, live notification", icon: "⚡" },
      { title: "CORS", description: "กลไกที่ป้องกันเว็บอื่นเรียก API ของเรา — เจอ error นี้บ่อยมาก!", icon: "🛡️" },
    ],
    gettingStarted: [
      { step: "เปิด DevTools → Network Tab", detail: "กด F12 ในเบราว์เซอร์ ไปที่ Network — จะเห็นทุก request ที่เบราว์เซอร์ส่ง" },
      { step: "ลอง fetch API", detail: "เปิด Console พิมพ์ fetch('https://api.github.com') แล้วดู response" },
      { step: "เรียนรู้ HTTP Methods", detail: "GET, POST, PUT, DELETE — เข้าใจว่าแต่ละตัวใช้ตอนไหน" },
      { step: "ลอง Postman", detail: "ใช้ Postman ส่ง request ต่างๆ ไป API สาธารณะ — เห็นภาพชัดขึ้น" },
      { step: "ดูว่า DNS ทำงานยังไง", detail: "พิมพ์ nslookup google.com ใน terminal — เห็น IP จริง" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "เกิดอะไรขึ้นเมื่อพิมพ์ URL แล้วกด Enter?",
        code: `## 1. 🔤 พิมพ์ URL
https://www.example.com/products

## 2. 📒 DNS Lookup
เบราว์เซอร์: "example.com อยู่ที่ IP ไหน?"
DNS Server: "อยู่ที่ 93.184.216.34"

## 3. 🤝 TCP Connection (3-way handshake)
Client: SYN → "สวัสดี ขอเชื่อมต่อหน่อย"
Server: SYN-ACK → "ได้ครับ พร้อมแล้ว"
Client: ACK → "ขอบคุณ เริ่มเลย"

## 4. 📡 HTTP Request
GET /products HTTP/2
Host: www.example.com
Accept: text/html
Cookie: session=abc123

## 5. 💻 Server ประมวลผล
- รับ request
- ดึงข้อมูลจาก database
- render HTML

## 6. 📨 HTTP Response
HTTP/2 200 OK
Content-Type: text/html
Content-Length: 1234

<html>...(หน้าเว็บ)...</html>

## 7. 🎨 เบราว์เซอร์ render
- Parse HTML → สร้าง DOM
- โหลด CSS → สร้าง CSSOM
- โหลด JS → execute
- แสดงหน้าเว็บ!

⏱️ ทั้งหมดนี้เกิดขึ้นภายใน ~200-500ms`,
        explanation:
          "ทั้งหมดนี้เกิดขึ้นทุกครั้งที่คุณเปิดเว็บ — เข้าใจ flow นี้แล้วจะ debug ปัญหา network ได้ง่ายมาก",
      },
    ],
    practiceProjects: [
      "เปิด DevTools Network Tab แล้วดูว่าเว็บโปรดของคุณส่ง request อะไรบ้าง",
      "ใช้ Postman เรียก public API 5 ตัว (GitHub, Weather, Pokemon, etc.)",
      "สร้าง API server แล้วลอง handle CORS",
      "ลอง nslookup, ping, traceroute ใน terminal เพื่อดู network path",
    ],
    tips: [
      "Network Tab ใน DevTools คือเพื่อนที่ดีที่สุดในการ debug API",
      "เจอ CORS error? ต้องแก้ที่ server ไม่ใช่ client — ตั้ง Access-Control-Allow-Origin",
      "HTTPS ไม่ใช่ optional อีกต่อไป — ทุกเว็บควรมี SSL certificate",
      "เข้าใจ status codes ช่วยให้ debug เร็วมาก — 403 ≠ 404 ≠ 500",
    ],
    relatedCareers: ["developer", "devops", "system-analyst"],
  },
  {
    slug: "security-fundamentals",
    title: "Security พื้นฐาน",
    titleEn: "Security Fundamentals for Developers",
    icon: "🔒",
    category: "foundation",
    categoryIcon: "🧱",
    color: "red",
    difficulty: "intermediate",
    estimatedTime: "2-3 สัปดาห์",
    description:
      "ความปลอดภัยไม่ใช่เรื่องของทีม security เท่านั้น — Developer ทุกคนต้องรู้เรื่อง XSS, SQL Injection, Authentication และการป้องกันข้อมูลผู้ใช้",
    whatIsIt:
      "ลองนึกภาพว่าคุณสร้างบ้าน (แอป) เสร็จสวยหรู แต่ลืมใส่กุญแจประตู ลืมใส่รั้ว แล้วเขียนรหัสตู้เซฟไว้หน้าตู้ นั่นคือสิ่งที่ developer หลายคนทำ — สร้างแอปเสร็จแต่ไม่ใส่ใจเรื่อง security ผลก็คือ ข้อมูลผู้ใช้รั่วไหล, ถูก hack, เสียหายทั้งเงินและชื่อเสียง ข่าว data breach เกิดขึ้นทุกสัปดาห์ เรียนรู้เรื่อง security ตั้งแต่ตอนนี้ จะช่วยป้องกันปัญหาเหล่านี้ได้",
    whyLearn: [
      "Data breach สร้างความเสียหายมหาศาล — ทั้งเงินและความเชื่อมั่น",
      "Developer เป็นด่านแรกที่ป้องกันภัย — ถ้าเขียนโค้ดไม่ปลอดภัย ระบบก็ไม่ปลอดภัย",
      "กฎหมายคุ้มครองข้อมูล (PDPA, GDPR) บังคับให้ต้องดูแลข้อมูลผู้ใช้",
      "ถูกถามในการสัมภาษณ์งานทุกระดับ",
    ],
    keyConcepts: [
      { title: "XSS (Cross-Site Scripting)", description: "Hacker ฝังโค้ด JavaScript ในหน้าเว็บของเรา — ป้องกันด้วยการ sanitize input ทุกครั้ง", icon: "💉" },
      { title: "SQL Injection", description: "Hacker ส่งคำสั่ง SQL ผ่าน input form — ป้องกันด้วย parameterized queries (Prisma ทำให้อัตโนมัติ)", icon: "🗃️" },
      { title: "Authentication vs Authorization", description: "Authentication = \"คุณเป็นใคร\" (login), Authorization = \"คุณมีสิทธิ์ทำอะไร\" (role/permission)", icon: "🔐" },
      { title: "JWT (JSON Web Token)", description: "Token ที่พิสูจน์ตัวตน — เก็บใน cookie/header ส่งไปกับทุก request", icon: "🎫" },
      { title: "HTTPS & Encryption", description: "เข้ารหัสข้อมูลระหว่างทาง — ไม่มีใครดักฟังได้", icon: "🔏" },
      { title: "Hashing Passwords", description: "อย่าเก็บ password แบบ plain text! ใช้ bcrypt hash ก่อนเก็บเสมอ", icon: "🔑" },
      { title: "Environment Variables", description: "เก็บ API key, database password ใน .env — อย่าเขียนในโค้ด อย่า commit ขึ้น GitHub", icon: "🤫" },
      { title: "OWASP Top 10", description: "รายการช่องโหว่ที่พบบ่อยที่สุด 10 อันดับ — ต้องรู้และป้องกัน", icon: "📋" },
    ],
    gettingStarted: [
      { step: "เรียน OWASP Top 10", detail: "อ่าน owasp.org/Top10 — เข้าใจช่องโหว่ที่พบบ่อยที่สุด" },
      { step: "ลองโจมตีแอปตัวเอง", detail: "ลองพิมพ์ <script>alert('XSS')</script> ในฟอร์ม — ถ้าแสดง alert คือมีช่องโหว่" },
      { step: "ใช้ Prisma/ORM", detail: "ORM ป้องกัน SQL Injection ให้อัตโนมัติ — ดีกว่าเขียน raw SQL" },
      { step: "ตั้ง Authentication", detail: "ใช้ NextAuth.js หรือ Lucia Auth ใน Next.js — อย่าสร้าง auth เองถ้าไม่จำเป็น" },
      { step: "ตรวจสอบ .env", detail: "มั่นใจว่า .env อยู่ใน .gitignore — ลอง git log ดูว่าเคย commit secrets ไหม" },
    ],
    codeExamples: [
      {
        language: "typescript",
        title: "Security Best Practices ในโค้ดจริง",
        code: `// ❌ อันตราย: SQL Injection
// ห้ามทำแบบนี้!
const query = \`SELECT * FROM users WHERE email = '\${email}'\`;
// Hacker ส่ง email = "' OR 1=1 --" → ดึงข้อมูลได้ทั้งหมด!

// ✅ ปลอดภัย: ใช้ Prisma (parameterized)
const user = await prisma.user.findUnique({
  where: { email: email }, // Prisma ป้องกัน injection ให้
});


// ❌ อันตราย: เก็บ password แบบ plain text
await prisma.user.create({
  data: { email, password: "mysecret123" }, // อ่านได้เลย!
});

// ✅ ปลอดภัย: hash ด้วย bcrypt ก่อนเก็บ
import bcrypt from "bcryptjs";
const hashedPassword = await bcrypt.hash(password, 12);
await prisma.user.create({
  data: { email, password: hashedPassword },
});


// ❌ อันตราย: XSS — แสดง HTML จาก user โดยตรง
// <div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ ปลอดภัย: React escape HTML ให้อัตโนมัติ
// <div>{userInput}</div>
// React จะแปลง <script> เป็น text ไม่ให้รัน


// ❌ อันตราย: API key ในโค้ด
const API_KEY = "sk-abc123secret"; // commit ขึ้น GitHub = โดน hack

// ✅ ปลอดภัย: ใช้ environment variable
const API_KEY = process.env.OPENAI_API_KEY;`,
        explanation:
          "ส่วนใหญ่แก้ได้ง่าย — ใช้ ORM แทน raw SQL, hash password ด้วย bcrypt, ไม่ dangerouslySetInnerHTML, เก็บ secrets ใน .env แค่นี้ก็ปลอดภัยขึ้น 90%",
      },
    ],
    practiceProjects: [
      "ตรวจสอบโปรเจกต์ตัวเองว่ามีช่องโหว่ตาม OWASP Top 10 ไหม",
      "สร้างระบบ Login ที่ปลอดภัย ด้วย bcrypt + JWT + HTTPS",
      "ลองใช้ Helmet.js กับ Express เพื่อเพิ่ม security headers",
      "ตรวจสอบว่า .env ไม่เคยถูก commit ขึ้น GitHub (ใช้ git log -p)",
    ],
    tips: [
      "\"อย่า trust user input เด็ดขาด\" — validate ทุกอย่างที่รับจากผู้ใช้",
      "อย่าสร้าง authentication เอง ถ้าไม่จำเป็น — ใช้ library ที่ community ดูแล",
      "ใช้ HTTPS ทุกที่ — Vercel, Netlify ให้ SSL ฟรี",
      "อัปเดต dependencies สม่ำเสมอ — npm audit ตรวจหาช่องโหว่ให้",
      "เก็บ secrets ใน environment variables เสมอ อย่าเขียนลงโค้ด",
    ],
    relatedCareers: ["developer", "devops", "system-analyst"],
  },

  // ─── DEPLOYMENT & SERVER (devops) ───
  {
    slug: "deployment",
    title: "Deployment & Hosting",
    titleEn: "Deployment Strategies & Hosting Guide",
    icon: "🚀",
    category: "devops",
    categoryIcon: "☁️",
    color: "violet",
    difficulty: "intermediate",
    estimatedTime: "2-3 สัปดาห์",
    description:
      "เรียนรู้วิธี deploy แอปขึ้นอินเทอร์เน็ตจริงๆ — ตั้งแต่ Vercel (ง่ายสุด) ไปจนถึง VPS (ควบคุมเองทั้งหมด) ครบทุกวิธี",
    whatIsIt:
      "คุณสร้างแอปเสร็จแล้ว รันบนเครื่องตัวเอง localhost:3000 ได้สวยงาม แต่คนอื่นยังเข้าใช้ไม่ได้ \"Deployment\" คือการนำแอปไปวางบน server จริง เพื่อให้ทุกคนในโลกเข้าถึงได้ เหมือนกับคุณปรุงอาหารเสร็จแล้ว (code) แต่ต้อง \"เสิร์ฟ\" (deploy) ให้ลูกค้า (users) ด้วย วิธี deploy มีหลายระดับ ตั้งแต่ \"กดปุ่มเดียวเสร็จ\" ไปจนถึง \"ตั้ง server เอง\" — แต่ละวิธีเหมาะกับคนละสถานการณ์",
    whyLearn: [
      "แอปที่ deploy ไม่ได้ = ไม่มีค่า — ต้อง deploy ให้คนใช้ได้จริง",
      "สร้าง Portfolio ที่คนอื่นเข้าดูได้ ไม่ใช่แค่ screenshot",
      "เข้าใจ production environment ซึ่งต่างจาก development มาก",
      "จำเป็นสำหรับทุกสายงาน — Dev, DevOps, System Analyst",
    ],
    keyConcepts: [
      { title: "PaaS (Vercel, Netlify, Railway)", description: "Deploy ง่ายสุด แค่ push code → ได้เว็บเลย ไม่ต้องจัดการ server เหมาะกับ: เริ่มต้น, Portfolio, Side project", icon: "🟢" },
      { title: "VPS (DigitalOcean, Linode)", description: "เช่า server เสมือน ควบคุมเองทั้งหมด ต้องติดตั้ง OS, Node.js, Nginx เอง เหมาะกับ: แอปที่ต้องการ control เต็ม", icon: "🖥️" },
      { title: "Container (Docker + Cloud Run)", description: "ใส่แอปใน container แล้ว deploy ได้ทุกที่ เหมาะกับ: ทีมที่ใช้ Docker, microservices", icon: "🐳" },
      { title: "Serverless (Lambda, Edge)", description: "รันโค้ดเป็น function ไม่ต้องจัดการ server จ่ายตามใช้จริง เหมาะกับ: API, webhook, cron jobs", icon: "⚡" },
      { title: "Static Hosting (GitHub Pages)", description: "Deploy เว็บ static (HTML/CSS/JS) ฟรี เหมาะกับ: Portfolio, docs, landing page", icon: "📄" },
      { title: "Domain & SSL", description: "ซื้อ domain (myapp.com) + ตั้ง SSL (HTTPS) ให้แอป", icon: "🔗" },
      { title: "Environment Variables", description: "ตั้งค่า .env บน server — database URL, API keys ต้องไม่อยู่ในโค้ด", icon: "🔐" },
      { title: "Monitoring & Logging", description: "ดูว่าแอปทำงานปกติไหม มี error ไหม ใครใช้อยู่กี่คน", icon: "📊" },
    ],
    gettingStarted: [
      { step: "Deploy ด้วย Vercel (ง่ายสุด)", detail: "สมัคร vercel.com → เชื่อม GitHub → เลือก repo → กด Deploy — แค่นี้!" },
      { step: "ตั้ง Custom Domain", detail: "ซื้อ domain จาก Namecheap/Cloudflare แล้วชี้ไป Vercel" },
      { step: "ตั้ง Environment Variables", detail: "ใส่ DATABASE_URL, API_KEY ใน Vercel Dashboard → Settings → Env Vars" },
      { step: "ลอง Deploy ด้วย Docker", detail: "เขียน Dockerfile → build → push ไป Docker Hub → deploy บน Cloud Run" },
      { step: "ลองตั้ง VPS", detail: "เช่า DigitalOcean $5/เดือน → ติดตั้ง Node.js + Nginx → deploy แอป" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "เปรียบเทียบวิธี Deploy ทั้งหมด",
        code: `## เลือกวิธี Deploy ที่เหมาะกับคุณ

| วิธี              | ความง่าย | ราคา        | Control | เหมาะกับ                  |
|-------------------|----------|-------------|---------|---------------------------|
| Vercel            | ⭐⭐⭐⭐⭐ | ฟรี (Hobby) | ต่ำ     | Next.js, Portfolio, SaaS   |
| Netlify           | ⭐⭐⭐⭐⭐ | ฟรี (Hobby) | ต่ำ     | Static sites, JAMstack     |
| Railway           | ⭐⭐⭐⭐  | $5/เดือน~   | กลาง   | Full-stack + DB           |
| Cloud Run (GCP)   | ⭐⭐⭐   | จ่ายตามใช้   | กลาง   | Docker containers         |
| AWS EC2 / VPS     | ⭐⭐     | $5/เดือน~   | สูง    | ควบคุมเต็ม, enterprise    |
| GitHub Pages      | ⭐⭐⭐⭐⭐ | ฟรี          | ต่ำ     | Static sites, docs        |

## สำหรับนักศึกษา แนะนำ:
1. 🟢 เริ่มจาก Vercel — ฟรี deploy ง่ายสุด
2. 🗃️ Database ใช้ Neon / Supabase — PostgreSQL ฟรี
3. 🌐 Domain ใช้ .me หรือ .dev — ราคาถูก ดู professional`,
        explanation:
          "ไม่ต้องจ่ายเงินเลยก็ deploy แอปจริงได้ — Vercel (hosting) + Neon (database) + Cloudflare (domain) รวมกันครบ",
      },
      {
        language: "bash",
        title: "Deploy Next.js 3 วิธี",
        code: `# ─── วิธี 1: Vercel (ง่ายสุด) ─────
npm i -g vercel
vercel              # deploy preview
vercel --prod       # deploy production
# เสร็จ! ได้ URL: https://my-app.vercel.app

# ─── วิธี 2: Docker + Cloud Run ─────
# สร้าง Dockerfile แล้ว:
docker build -t my-app .
docker tag my-app gcr.io/my-project/my-app
docker push gcr.io/my-project/my-app
gcloud run deploy my-app \\
  --image gcr.io/my-project/my-app \\
  --platform managed \\
  --region asia-southeast1

# ─── วิธี 3: VPS (DigitalOcean) ─────
# SSH เข้า server
ssh root@your-server-ip

# ติดตั้ง Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Clone โปรเจกต์
git clone https://github.com/you/my-app.git
cd my-app
npm ci
npm run build

# ใช้ PM2 รันแอปถาวร
npm i -g pm2
pm2 start npm --name "my-app" -- start
pm2 save
pm2 startup

# ตั้ง Nginx เป็น reverse proxy
# /etc/nginx/sites-available/my-app
# server {
#   listen 80;
#   server_name myapp.com;
#   location / {
#     proxy_pass http://localhost:3000;
#   }
# }`,
        explanation:
          "เริ่มจาก Vercel (1 คำสั่ง) → Docker (ยืดหยุ่นขึ้น) → VPS (ควบคุมเอง) ค่อยๆ ขยับตามความต้องการ",
      },
    ],
    practiceProjects: [
      "Deploy โปรเจกต์ Next.js ขึ้น Vercel พร้อม custom domain",
      "ตั้ง PostgreSQL ฟรีบน Neon แล้วเชื่อมกับ Vercel",
      "Deploy แอปด้วย Docker บน Google Cloud Run",
      "ตั้ง VPS บน DigitalOcean + Nginx + PM2 + SSL",
      "สร้าง CI/CD ที่ auto-deploy เมื่อ push ไป main",
    ],
    tips: [
      "Deploy ตั้งแต่วันแรก — อย่ารอจน \"เสร็จ\" เพราะจะเจอปัญหาตอน deploy ทีหลัง",
      "ตั้ง environment variables ให้ถูกต้อง — error ส่วนใหญ่ตอน deploy มาจาก .env",
      "ใช้ preview deployments — Vercel สร้าง URL ชั่วคราวทุก PR ให้ทดสอบก่อน merge",
      "ตั้ง monitoring ตั้งแต่แรก — ถ้าแอปล่ม คุณควรรู้ก่อนผู้ใช้",
      "อย่าลืม HTTPS — ทุก platform ให้ SSL ฟรีแล้ว",
    ],
    relatedCareers: ["developer", "devops", "system-analyst"],
  },
  {
    slug: "server-linux",
    title: "Server & Linux Administration",
    titleEn: "Server Management & Linux Administration",
    icon: "🖥️",
    category: "devops",
    categoryIcon: "☁️",
    color: "slate",
    difficulty: "intermediate",
    estimatedTime: "3-5 สัปดาห์",
    description:
      "เรียนรู้เรื่อง server จริงๆ — Linux, Nginx, process management, firewall และทุกอย่างที่ต้องรู้เมื่อดูแล server ด้วยตัวเอง",
    whatIsIt:
      "Server คือคอมพิวเตอร์ที่ทำงาน 24/7 เพื่อให้บริการแอปของคุณ ส่วนใหญ่รัน Linux เพราะเสถียรและฟรี เมื่อคุณต้องดูแล server เอง (ไม่ใช่ใช้ Vercel) คุณต้องรู้วิธีติดตั้งโปรแกรม ตั้งค่า web server (Nginx) จัดการ process ตั้ง firewall และ monitor ระบบ เหมือนคุณเป็น \"เจ้าของบ้าน\" ที่ต้องดูแลทุกอย่างเอง — ซ่อมท่อน้ำ ซ่อมไฟ ล็อคประตู",
    whyLearn: [
      "เข้าใจว่าแอปรันอยู่บนอะไร — ไม่ใช่แค่กด deploy แล้วลืม",
      "จำเป็นมากสำหรับ DevOps, Backend Developer, System Admin",
      "แก้ปัญหา production ได้ — เมื่อ server ล่มต้องแก้ได้",
      "ประหยัดเงิน — VPS ราคาถูกกว่า PaaS มากสำหรับแอปใหญ่",
    ],
    keyConcepts: [
      { title: "Linux Distribution", description: "Ubuntu, Debian, CentOS — ระบบปฏิบัติการหลักของ server 90%+", icon: "🐧" },
      { title: "Nginx / Apache", description: "Web server ที่รับ request จากผู้ใช้ แล้วส่งต่อให้แอป — เหมือนพนักงานต้อนรับ", icon: "🌐" },
      { title: "SSH", description: "เข้าถึง server จากระยะไกล อย่างปลอดภัย — ssh user@server-ip", icon: "🔑" },
      { title: "Process Management", description: "จัดการ process ด้วย systemd หรือ PM2 — ให้แอปรัน 24/7 restart อัตโนมัติ", icon: "⚙️" },
      { title: "Firewall (UFW)", description: "กำหนดว่าใครเข้าถึง port ไหนได้ — เปิดแค่ 80, 443, 22", icon: "🔥" },
      { title: "SSL Certificate", description: "เข้ารหัส HTTPS ด้วย Let's Encrypt — ฟรีและอัตโนมัติด้วย Certbot", icon: "🔒" },
      { title: "Monitoring & Logs", description: "ดูสถานะ server (htop, df, free) อ่าน log (journalctl, /var/log)", icon: "📊" },
      { title: "Cron Jobs", description: "ตั้งเวลาให้รันคำสั่งอัตโนมัติ — เช่น backup ทุกคืน, clear cache ทุกชั่วโมง", icon: "⏰" },
    ],
    gettingStarted: [
      { step: "เช่า VPS ตัวแรก", detail: "DigitalOcean / Linode $5/เดือน — เลือก Ubuntu 22.04 LTS" },
      { step: "เรียน SSH", detail: "ssh root@your-ip แล้วลองพิมพ์คำสั่ง Linux — ls, cd, apt install" },
      { step: "ติดตั้ง Node.js + Nginx", detail: "ตั้ง web server ที่ส่ง request ไปยังแอป Node.js ของคุณ" },
      { step: "ตั้ง Firewall", detail: "ufw allow 80, ufw allow 443, ufw allow 22 — เปิดเฉพาะ port ที่จำเป็น" },
      { step: "ตั้ง SSL ด้วย Certbot", detail: "certbot --nginx — ได้ HTTPS ฟรีภายใน 1 นาที" },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "ตั้ง Server ตั้งแต่ศูนย์: Ubuntu + Node.js + Nginx + SSL",
        code: `# 1. SSH เข้า server
ssh root@123.456.789.0

# 2. อัปเดตระบบ
apt update && apt upgrade -y

# 3. สร้าง user ใหม่ (อย่าใช้ root!)
adduser deploy
usermod -aG sudo deploy

# 4. ติดตั้ง Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# 5. ติดตั้ง Nginx
apt install -y nginx

# 6. ตั้ง Firewall
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable

# 7. Clone แอป + Install + Build
su - deploy
git clone https://github.com/you/my-app.git
cd my-app && npm ci && npm run build

# 8. ใช้ PM2 รันแอปถาวร
sudo npm i -g pm2
pm2 start npm --name "my-app" -- start
pm2 save && pm2 startup

# 9. ตั้ง Nginx reverse proxy
# สร้าง /etc/nginx/sites-available/my-app:
# server {
#     server_name myapp.com;
#     location / {
#         proxy_pass http://localhost:3000;
#         proxy_http_version 1.1;
#         proxy_set_header Upgrade $http_upgrade;
#         proxy_set_header Connection 'upgrade';
#         proxy_set_header Host $host;
#     }
# }

sudo ln -s /etc/nginx/sites-available/my-app /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# 10. ตั้ง SSL ฟรี ด้วย Let's Encrypt
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d myapp.com

# เสร็จ! https://myapp.com พร้อมใช้งาน 🎉`,
        explanation:
          "ขั้นตอนทั้งหมดนี้คือการตั้ง production server จริงๆ — ทำครั้งเดียวแล้วจดไว้ ครั้งหลังทำตาม checklist ได้เลย ถ้าอยากอัตโนมัติกว่านี้ ใช้ Docker + CI/CD",
      },
    ],
    practiceProjects: [
      "ตั้ง VPS + Deploy Next.js app ด้วย Nginx + PM2 + SSL",
      "เขียน shell script ที่ auto-deploy เมื่อ push ไป GitHub",
      "ตั้ง cron job ที่ backup database ทุกคืน",
      "ตั้ง monitoring ด้วย uptime-kuma (self-hosted)",
    ],
    tips: [
      "อย่าใช้ root user ทำงานประจำ — สร้าง user แยกที่มี sudo",
      "ตั้ง SSH key แทน password — ปลอดภัยกว่ามาก",
      "ตั้ง auto-update ให้ security patches — unattended-upgrades",
      "backup ก่อน upgrade เสมอ — snapshot ใน DigitalOcean กดได้เลย",
      "ดู log เป็นประจำ — ปัญหาส่วนใหญ่มีเบาะแสใน log",
    ],
    relatedCareers: ["devops", "developer", "system-analyst"],
  },

  // ─── PLATFORM: Mobile, Desktop, PWA ───
  {
    slug: "mobile-app",
    title: "Mobile App Development",
    titleEn: "Mobile App Development",
    icon: "📱",
    category: "platform",
    categoryIcon: "📱",
    color: "blue",
    difficulty: "intermediate",
    estimatedTime: "6-10 สัปดาห์",
    description:
      "เรียนรู้วิธีสร้างแอปมือถือ — React Native (ใช้ JavaScript), Flutter (ใช้ Dart), หรือ Native (Swift/Kotlin) เลือกให้เหมาะกับงาน",
    whatIsIt:
      "แอปมือถือที่คุณใช้ทุกวัน — LINE, TikTok, ธนาคาร — ล้วนต้องมีคนสร้าง มีหลายวิธีสร้างแอปมือถือ: เขียนแยก iOS (Swift) และ Android (Kotlin) ซึ่งได้ performance ดีสุด หรือเขียนครั้งเดียวรันได้ทั้ง iOS + Android ด้วย React Native (JavaScript) หรือ Flutter (Dart) ถ้าคุณเป็น Web Developer อยู่แล้ว React Native คือทางลัดที่ดีที่สุด เพราะใช้ React ที่คุณรู้อยู่แล้ว",
    whyLearn: [
      "คนใช้มือถือมากกว่า desktop — แอปมือถือเข้าถึงคนได้เยอะกว่า",
      "ตลาดงาน Mobile Developer ยังต้องการสูงมาก",
      "React Native ใช้ React ที่คุณรู้อยู่แล้ว — เรียนเพิ่มไม่เยอะ",
      "สร้าง startup ได้ — แอปมือถือเป็น product หลักของบริษัทหลายแห่ง",
    ],
    keyConcepts: [
      { title: "Native (Swift / Kotlin)", description: "เขียนแยก iOS + Android — performance ดีสุด แต่ต้องเขียน 2 โค้ดเบส cost สูง", icon: "🍎" },
      { title: "React Native", description: "ใช้ React + JavaScript สร้างแอปมือถือ — เขียนครั้งเดียวรันทั้ง iOS + Android ดีสำหรับ web dev", icon: "⚛️" },
      { title: "Flutter", description: "ใช้ Dart สร้างแอปสวยมาก — compile เป็น native ทั้ง iOS + Android + Web + Desktop", icon: "🦋" },
      { title: "Expo", description: "Framework สำหรับ React Native — ทำให้เริ่มต้นง่ายมาก ไม่ต้องตั้ง Xcode/Android Studio ก่อน", icon: "📦" },
      { title: "Navigation", description: "ระบบเปลี่ยนหน้าในแอป — Stack, Tab, Drawer แตกต่างจาก web routing", icon: "🧭" },
      { title: "App Store / Play Store", description: "เผยแพร่แอปผ่าน store — ต้องผ่าน review ของ Apple/Google", icon: "🏪" },
      { title: "Push Notifications", description: "ส่ง notification ไปหาผู้ใช้ แม้ไม่ได้เปิดแอป — ใช้ Firebase Cloud Messaging", icon: "🔔" },
    ],
    gettingStarted: [
      { step: "เลือก Framework", detail: "ถ้ารู้ React → React Native + Expo, ถ้าต้องการ UI สวย → Flutter, ถ้าต้องการ performance สุดๆ → Native" },
      { step: "ติดตั้ง Expo (React Native)", detail: "npx create-expo-app my-app → expo start → scan QR code บนมือถือ — เห็นแอปทันที!" },
      { step: "เรียน Mobile UI", detail: "View แทน div, Text แทน p, ScrollView, FlatList — คล้าย React แต่ต่างกันนิดหน่อย" },
      { step: "เรียน Navigation", detail: "ใช้ React Navigation — Stack, Tab, Drawer navigator" },
      { step: "สร้างแอปจริง", detail: "สร้าง Todo App หรือ Weather App แล้ว build เป็น APK/IPA ลองติดตั้งบนมือถือจริง" },
    ],
    codeExamples: [
      {
        language: "tsx",
        title: "React Native + Expo: Hello World",
        code: `// App.tsx — React Native คล้าย React มาก!
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function TodoApp() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, text.trim()]);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App 📝</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="เพิ่มงานใหม่..."
        />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={styles.buttonText}>เพิ่ม</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={todos}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.todo}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, backgroundColor: "#f5f5f5" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  inputRow: { flexDirection: "row", gap: 8, marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: "#ddd",
           borderRadius: 8, padding: 12, backgroundColor: "#fff" },
  button: { backgroundColor: "#7c3aed", borderRadius: 8,
            paddingHorizontal: 20, justifyContent: "center" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  todo: { backgroundColor: "#fff", padding: 16, borderRadius: 8,
          marginBottom: 8 },
});`,
        explanation:
          "ถ้าคุณเขียน React เป็น คุณเขียน React Native ได้เลย! แตกต่างแค่ใช้ View แทน div, Text แทน p, StyleSheet แทน CSS แค่นั้น",
      },
      {
        language: "bash",
        title: "เริ่มต้น React Native ด้วย Expo",
        code: `# 1. สร้างโปรเจกต์
npx create-expo-app@latest my-mobile-app
cd my-mobile-app

# 2. รันแอป
npx expo start

# 3. ดูบนมือถือจริง
# → ติดตั้ง "Expo Go" app บนมือถือ
# → scan QR code ที่แสดงใน terminal
# → เห็นแอปบนมือถือทันที! 🎉

# 4. Build เป็น APK (Android) / IPA (iOS)
npx eas build --platform android
npx eas build --platform ios

# 5. Submit ไป App Store / Play Store
npx eas submit --platform android
npx eas submit --platform ios`,
        explanation:
          "Expo ทำให้เริ่มต้น React Native ง่ายสุดๆ — ไม่ต้องติดตั้ง Xcode หรือ Android Studio ตอนเริ่มต้น scan QR code ก็เห็นแอปบนมือถือเลย",
      },
    ],
    practiceProjects: [
      "สร้าง Todo App ด้วย React Native + Expo",
      "สร้าง Weather App ที่ดึงข้อมูลสภาพอากาศจาก API",
      "สร้าง Chat App ด้วย WebSocket",
      "สร้าง E-Commerce Mobile App (สินค้า, ตะกร้า, checkout)",
      "Build APK แล้วแชร์ให้เพื่อนลองติดตั้ง",
    ],
    tips: [
      "ถ้ารู้ React แล้ว เลือก React Native + Expo — เรียนรู้ได้เร็วที่สุด",
      "ทดสอบบนมือถือจริงเสมอ — Simulator กับมือถือจริงต่างกัน",
      "Mobile UI ≠ Web UI — ปุ่มต้องใหญ่พอกดด้วยนิ้ว, scroll ต้องลื่น",
      "ใช้ Expo Go ตอนพัฒนา — ไม่ต้อง build ใหม่ทุกครั้ง",
      "สมัคร Apple Developer ($99/ปี) เฉพาะตอนจะ submit App Store เท่านั้น",
    ],
    relatedCareers: ["developer"],
  },
  {
    slug: "desktop-app",
    title: "Desktop App Development",
    titleEn: "Desktop Application Development",
    icon: "🖥️",
    category: "platform",
    categoryIcon: "📱",
    color: "indigo",
    difficulty: "intermediate",
    estimatedTime: "4-6 สัปดาห์",
    description:
      "สร้างแอป Desktop ที่รันบน Windows, Mac, Linux ด้วย Electron หรือ Tauri — ใช้ HTML/CSS/JS ที่คุณรู้อยู่แล้ว",
    whatIsIt:
      "แอป Desktop คือโปรแกรมที่ติดตั้งบนคอมพิวเตอร์ เช่น VS Code, Slack, Discord, Figma, Spotify — ทั้งหมดนี้สร้างด้วยเทคโนโลยีเว็บ! Electron (JavaScript) หรือ Tauri (Rust + JavaScript) ช่วยให้คุณใช้ HTML/CSS/JS ที่เขียนเว็บอยู่แล้ว มาสร้างแอป Desktop ได้เลย ไม่ต้องเรียน C++ หรือ C# เหมือนสมัยก่อน",
    whyLearn: [
      "VS Code, Slack, Discord, Figma ล้วนสร้างด้วย Electron/Tauri",
      "ใช้ HTML/CSS/JS/React ที่รู้อยู่แล้ว ไม่ต้องเรียนภาษาใหม่",
      "สร้างเครื่องมือที่ทำงานได้แม้ offline — ไม่ต้องเปิดเบราว์เซอร์",
      "Tauri ใหม่ เร็ว เบา ใช้ memory น้อยกว่า Electron มาก",
    ],
    keyConcepts: [
      { title: "Electron", description: "ใช้ Chromium + Node.js สร้าง desktop app ด้วย HTML/CSS/JS — VS Code, Slack ใช้ Electron", icon: "⚡" },
      { title: "Tauri", description: "ใช้ WebView ของ OS + Rust backend — เร็วกว่า เบากว่า Electron 10 เท่า กำลังมาแรงมาก", icon: "🦀" },
      { title: ".NET MAUI / WPF", description: "Microsoft framework สำหรับ Windows app — ใช้ C# เหมาะกับ enterprise", icon: "🪟" },
      { title: "Main Process vs Renderer", description: "Electron แบ่ง 2 ส่วน: Main (Node.js, จัดการ OS) และ Renderer (หน้าจอ UI)", icon: "🔀" },
      { title: "File System Access", description: "Desktop app เข้าถึงไฟล์ในเครื่องได้ — อ่านไฟล์ เขียนไฟล์ เปิดโฟลเดอร์", icon: "📁" },
      { title: "Native Menu & Tray", description: "สร้างเมนูบาร์, system tray, notification ของ OS ได้", icon: "🔽" },
      { title: "Auto Update", description: "แอปอัปเดตเวอร์ชันใหม่อัตโนมัติเมื่อเปิด", icon: "🔄" },
      { title: "Build & Distribute", description: "สร้าง .exe (Windows), .dmg (Mac), .AppImage (Linux) แจกจ่ายได้", icon: "📦" },
    ],
    gettingStarted: [
      { step: "เลือก Framework", detail: "ถ้าต้องการ ecosystem ใหญ่ → Electron, ถ้าต้องการเร็ว+เบา → Tauri, ถ้า Windows enterprise → .NET" },
      { step: "สร้างด้วย Tauri + Next.js (แนะนำ)", detail: "npm create tauri-app — เลือก React/Next.js เป็น frontend ได้เลย" },
      { step: "เรียน IPC (Inter-Process Communication)", detail: "วิธีที่ frontend คุยกับ backend (OS features) ภายในแอป" },
      { step: "ลองเข้าถึง File System", detail: "อ่าน/เขียนไฟล์จากเครื่องผู้ใช้ — สิ่งที่ web app ทำไม่ได้" },
      { step: "Build & แจกจ่าย", detail: "สร้าง .exe/.dmg แล้วแชร์ให้เพื่อนติดตั้ง" },
    ],
    codeExamples: [
      {
        language: "bash",
        title: "สร้าง Desktop App ด้วย Tauri + React",
        code: `# 1. สร้างโปรเจกต์ Tauri
npm create tauri-app@latest my-desktop-app
# เลือก: React, TypeScript

cd my-desktop-app

# 2. ติดตั้ง dependencies
npm install

# 3. รันในโหมด development
npm run tauri dev
# เปิดหน้าต่าง desktop app ขึ้นมา!

# 4. Build สำหรับ OS ปัจจุบัน
npm run tauri build
# ได้ .exe (Windows) หรือ .dmg (Mac) หรือ .AppImage (Linux)

# ไฟล์ build อยู่ใน: src-tauri/target/release/bundle/`,
        explanation:
          "Tauri ใช้ React/Next.js ที่คุณรู้อยู่แล้วเป็น UI ผสมกับ Rust backend — ได้แอป Desktop ที่เร็ว เบา ใช้ RAM น้อย",
      },
      {
        language: "markdown",
        title: "เปรียบเทียบ: Electron vs Tauri vs .NET",
        code: `## เลือก Framework ที่เหมาะ

| เกณฑ์              | Electron        | Tauri           | .NET (WPF/MAUI) |
|--------------------| --------------- | --------------- | ---------------- |
| ภาษา UI            | HTML/CSS/JS     | HTML/CSS/JS     | XAML + C#        |
| ภาษา Backend       | JavaScript      | Rust            | C#               |
| ขนาดแอป            | 150-300MB       | 5-15MB          | 30-100MB         |
| RAM ที่ใช้          | 150-300MB       | 30-80MB         | 50-150MB         |
| Cross-Platform     | ✅ Win/Mac/Linux | ✅ Win/Mac/Linux | ⚠️ Windows เป็นหลัก |
| ใช้ React ได้       | ✅              | ✅               | ❌               |
| Community          | ⭐⭐⭐⭐⭐       | ⭐⭐⭐⭐         | ⭐⭐⭐            |
| ตัวอย่างแอปดัง     | VS Code, Slack  | (กำลังมาแรง)   | Visual Studio    |

## แนะนำ:
- 🟢 Web dev → Tauri (เร็ว เบา modern)
- 🔵 ต้องการ ecosystem ใหญ่ → Electron
- 🟣 Windows enterprise → .NET MAUI`,
        explanation:
          "Tauri กำลังมาแรงมากเพราะเบาและเร็วกว่า Electron หลายเท่า ถ้าเริ่มใหม่ในปี 2026 แนะนำ Tauri",
      },
    ],
    practiceProjects: [
      "สร้าง Markdown Editor ด้วย Tauri (อ่าน/เขียนไฟล์ .md)",
      "สร้าง File Manager ง่ายๆ ที่ browse ไฟล์ในเครื่อง",
      "สร้าง Pomodoro Timer ที่อยู่ใน system tray",
      "สร้าง Note-taking App แบบ offline-first",
      "Build แอปเป็น .exe/.dmg แล้วแจกเพื่อนลองใช้",
    ],
    tips: [
      "ถ้าไม่จำเป็นต้อง desktop จริงๆ ลอง PWA ก่อน — ง่ายกว่า",
      "Tauri ดีกว่า Electron ในแทบทุกด้าน ยกเว้น ecosystem ที่ยังเล็กกว่า",
      "Desktop app เข้าถึง OS features ได้ — file system, notifications, clipboard, shortcuts",
      "ใช้ auto-update เพื่อให้ user ได้เวอร์ชันใหม่โดยไม่ต้อง download ใหม่",
    ],
    relatedCareers: ["developer"],
  },
  {
    slug: "pwa",
    title: "Progressive Web App (PWA)",
    titleEn: "Progressive Web Apps",
    icon: "📲",
    category: "platform",
    categoryIcon: "📱",
    color: "purple",
    difficulty: "intermediate",
    estimatedTime: "2-3 สัปดาห์",
    description:
      "PWA คือเว็บแอปที่ทำตัวเหมือนแอปมือถือ — ติดตั้งบน home screen ได้, ทำงาน offline ได้, ส่ง push notification ได้ โดยไม่ต้องผ่าน App Store",
    whatIsIt:
      "PWA คือ \"ทางลัด\" ที่ทำให้เว็บไซต์ทำงานเหมือนแอปมือถือ ผู้ใช้สามารถ \"ติดตั้ง\" เว็บของคุณลงบน home screen ได้เหมือนแอปปกติ ใช้งาน offline ได้ ส่ง push notification ได้ โหลดเร็วมาก — แต่ไม่ต้องอัปโหลดขึ้น App Store! Twitter Lite, Starbucks, Pinterest ล้วนเป็น PWA ข้อดีคือ สร้างเว็บเดียว ใช้ได้ทั้งบน browser, มือถือ, และ desktop",
    whyLearn: [
      "สร้างครั้งเดียว ใช้ได้ทุกแพลตฟอร์ม — Web + Mobile + Desktop",
      "ไม่ต้องผ่าน App Store — อัปเดตทันทีเหมือนเว็บ",
      "ทำงาน offline ได้ + โหลดเร็วมาก",
      "ประหยัดค่าใช้จ่ายและเวลาเทียบกับสร้าง native app แยก",
    ],
    keyConcepts: [
      { title: "Service Worker", description: "JavaScript ที่รันเบื้องหลัง — cache ไฟล์, จัดการ offline, push notification", icon: "⚙️" },
      { title: "Web App Manifest", description: "ไฟล์ JSON ที่บอกเบราว์เซอร์ว่าแอปชื่ออะไร, icon อะไร, สีอะไร — ทำให้ \"ติดตั้ง\" ได้", icon: "📋" },
      { title: "Cache API", description: "เก็บไฟล์ในเครื่อง — โหลดเร็วและทำงาน offline ได้", icon: "💾" },
      { title: "Installable", description: "ผู้ใช้กด \"Add to Home Screen\" ได้ — เปิดเหมือนแอปปกติ ไม่มี URL bar", icon: "📲" },
      { title: "Push Notifications", description: "ส่ง notification ไปหา user แม้ไม่ได้เปิดเว็บ", icon: "🔔" },
      { title: "Responsive Design", description: "ต้องสวยบนทุกหน้าจอ — มือถือ, แท็บเล็ต, desktop", icon: "📱" },
    ],
    gettingStarted: [
      { step: "สร้างเว็บด้วย Next.js ก่อน", detail: "PWA ต่อยอดจากเว็บ — สร้างเว็บให้ใช้งานได้ก่อน" },
      { step: "เพิ่ม Manifest", detail: "สร้าง manifest.json กำหนดชื่อแอป, icon, theme color" },
      { step: "เพิ่ม Service Worker", detail: "ใช้ next-pwa หรือ workbox เพื่อ cache ไฟล์อัตโนมัติ" },
      { step: "ทดสอบ Lighthouse", detail: "ใช้ Lighthouse ใน DevTools ตรวจว่าผ่านเกณฑ์ PWA หรือยัง" },
      { step: "ลองติดตั้ง", detail: "เปิดเว็บบนมือถือ แล้วกด \"Add to Home Screen\" — เห็นแอปบน home screen!" },
    ],
    codeExamples: [
      {
        language: "json",
        title: "manifest.json — ทำให้เว็บ \"ติดตั้ง\" ได้",
        code: `{
  "name": "LearnDev — เรียนรู้ Dev",
  "short_name": "LearnDev",
  "description": "แหล่งเรียนรู้สำหรับ Developer",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#7c3aed",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`,
        explanation:
          "แค่มี manifest.json + service worker เบราว์เซอร์จะแสดงปุ่ม \"Install\" ให้ผู้ใช้ติดตั้งเว็บเป็นแอปบนมือถือ/desktop ได้เลย",
      },
      {
        language: "markdown",
        title: "เปรียบเทียบ: PWA vs Native App vs Web App",
        code: `## เลือกแบบไหนดี?

| ความสามารถ          | Web App  | PWA      | React Native | Native   |
|--------------------|----------|----------|-------------|----------|
| ติดตั้งบน Home Screen| ❌       | ✅       | ✅          | ✅       |
| ทำงาน Offline      | ❌       | ✅       | ✅          | ✅       |
| Push Notification  | ❌       | ✅       | ✅          | ✅       |
| Camera / GPS       | ⚠️ จำกัด | ✅       | ✅          | ✅       |
| App Store          | ❌       | ❌       | ✅          | ✅       |
| SEO                | ✅       | ✅       | ❌          | ❌       |
| ความเร็ว Update    | ทันที    | ทันที    | ต้อง review | ต้อง review |
| ค่าพัฒนา           | ต่ำ      | ต่ำ      | กลาง        | สูง      |

## แนะนำ:
- 🟢 Content-heavy, SEO สำคัญ → PWA
- 🔵 ต้องใช้ hardware เยอะ (camera, GPS, BLE) → React Native
- 🟣 ต้องการ performance สูงสุด (game, video) → Native`,
        explanation:
          "PWA เหมาะกับ: เว็บที่อยากให้ทำงานเหมือนแอป + SEO ดี + อัปเดตเร็ว ไม่เหมาะกับ: แอปที่ต้องใช้ hardware มากๆ หรือต้องอยู่บน App Store",
      },
    ],
    practiceProjects: [
      "เปลี่ยนเว็บ Next.js ที่มีอยู่ให้เป็น PWA ด้วย next-pwa",
      "สร้าง Recipe App ที่ทำงาน offline ได้",
      "สร้าง Note-taking PWA ที่เก็บข้อมูลใน IndexedDB",
      "ลองติดตั้ง PWA บนมือถือจริง แล้วใช้งาน offline",
    ],
    tips: [
      "PWA เป็นทางเลือกที่ดีสำหรับ MVP — สร้างเร็ว ใช้ได้ทุก platform",
      "ใช้ Lighthouse ตรวจ PWA score — ต้องได้ 100 จึงจะ installable",
      "Service Worker ซับซ้อน — ใช้ workbox หรือ next-pwa แทนเขียนเอง",
      "ทดสอบ offline จริงๆ — ปิด WiFi แล้วลองเปิดแอป",
      "iOS มีข้อจำกัดกับ PWA มากกว่า Android — push notification เพิ่งรองรับใน iOS 16.4+",
    ],
    relatedCareers: ["developer", "designer"],
  },

  // ─── SOFT SKILLS & SELF-DEVELOPMENT ───
  {
    slug: "typing-speed",
    title: "Typing Speed — พิมพ์เร็วพิมพ์ถูก",
    titleEn: "Typing Speed & Keyboard Mastery",
    icon: "⌨️",
    category: "softskill",
    categoryIcon: "💪",
    color: "emerald",
    difficulty: "beginner",
    estimatedTime: "2-4 สัปดาห์ (ฝึกวันละ 15 นาที)",
    description:
      "การพิมพ์เร็วและถูกต้องคือ \"superpower\" ของ Developer — พิมพ์เร็วขึ้น = คิดไหลลื่นขึ้น เขียนโค้ดเร็วขึ้น สื่อสารเร็วขึ้น ทำทุกอย่างเร็วขึ้น",
    whatIsIt:
      "ลองนึกภาพ 2 คน คนแรกพิมพ์ 30 คำ/นาที (จิ้มทีละนิ้ว ต้องมองแป้น) คนที่สองพิมพ์ 80 คำ/นาที (สัมผัสพิมพ์ ไม่ต้องมองแป้น) คนที่สองพิมพ์เร็วกว่าเกือบ 3 เท่า! ในหนึ่งวัน Developer พิมพ์โค้ด พิมพ์ chat พิมพ์เอกสาร พิมพ์ email รวมแล้วหลายพันคำ ถ้าพิมพ์เร็ว คุณประหยัดเวลาได้วันละ 1-2 ชั่วโมง นั่นคือ 30-60 ชั่วโมง/เดือน! และที่สำคัญกว่าความเร็ว คือเมื่อนิ้วพิมพ์ได้อัตโนมัติ สมองจะว่างไปคิดเรื่อง logic แทน — ไอเดียไหลลื่น ไม่สะดุด",
    whyLearn: [
      "Developer พิมพ์ทุกวัน ทั้งวัน — โค้ด, chat, email, docs ถ้าพิมพ์ช้า = ทำทุกอย่างช้า",
      "พิมพ์เร็ว = คิดไหลลื่น — ไม่ต้องหยุดคิดว่าปุ่มอยู่ไหน สมองจะ focus ที่ logic แทน",
      "ประหยัดเวลา 1-2 ชั่วโมง/วัน — คูณ 365 วัน = ประหยัดได้เป็นเดือน!",
      "Keyboard shortcuts ทำให้ทำงานเร็วขึ้น 10 เท่า — แต่ต้องพิมพ์เป็นก่อน",
      "เป็นทักษะที่ลงทุน 1 เดือน ใช้ได้ตลอดชีวิต",
    ],
    keyConcepts: [
      { title: "Touch Typing (สัมผัสพิมพ์)", description: "พิมพ์โดยไม่ต้องมองแป้น — นิ้วแต่ละนิ้วรับผิดชอบปุ่มที่กำหนด Home Row: ASDF JKL;", icon: "🖐️" },
      { title: "Home Row Position", description: "ตำแหน่งเริ่มต้น: นิ้วซ้าย A S D F, นิ้วขวา J K L ; — นิ้วชี้วางบน F และ J (มีปุ่มนูน)", icon: "🏠" },
      { title: "WPM (Words Per Minute)", description: "ความเร็วพิมพ์วัดเป็นคำ/นาที — 40 WPM = เฉลี่ย, 60 WPM = ดี, 80+ WPM = เร็วมาก", icon: "⚡" },
      { title: "Accuracy ก่อน Speed", description: "พิมพ์ถูกก่อน เร็วทีหลัง — ถ้าพิมพ์ผิดบ่อย ต้องกลับมาแก้ ช้ากว่าเดิม", icon: "🎯" },
      { title: "Keyboard Shortcuts", description: "Ctrl+C/V/Z/S/F, Ctrl+Tab, Alt+Tab — ทำงานเร็วขึ้น 10 เท่าโดยไม่ต้องใช้เมาส์", icon: "⚙️" },
      { title: "VS Code Shortcuts", description: "Ctrl+P (เปิดไฟล์), Ctrl+Shift+P (command), Ctrl+D (เลือกคำซ้ำ), Alt+Up/Down (ย้ายบรรทัด)", icon: "💻" },
    ],
    gettingStarted: [
      { step: "ทดสอบความเร็วปัจจุบัน", detail: "เข้า monkeytype.com หรือ keybr.com แล้ววัด WPM — จดไว้เป็น baseline" },
      { step: "เรียนรู้ Home Row", detail: "วางนิ้วให้ถูกตำแหน่ง ASDF JKL; แล้วฝึกพิมพ์โดยไม่มองแป้น" },
      { step: "ฝึกทุกวัน 15 นาที", detail: "ใช้ keybr.com หรือ typingclub.com ฝึกทุกวัน — ความสม่ำเสมอสำคัญกว่าระยะเวลา" },
      { step: "ฝึกพิมพ์โค้ด", detail: "ใช้ typing.io ฝึกพิมพ์โค้ดจริง — มีอักขระพิเศษ {} [] () ที่ต้องคล่อง" },
      { step: "เรียนรู้ Shortcuts", detail: "จดและฝึก VS Code shortcuts 5 อันที่ใช้บ่อย แล้วเพิ่มทีละ 5 อัน" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "Keyboard Shortcuts ที่ Developer ต้องรู้",
        code: `## 🌐 ทั่วไป (ทุก OS)
Ctrl + C          คัดลอก
Ctrl + V          วาง
Ctrl + X          ตัด
Ctrl + Z          ย้อนกลับ (Undo)
Ctrl + Shift + Z  ทำซ้ำ (Redo)
Ctrl + S          บันทึก
Ctrl + A          เลือกทั้งหมด
Ctrl + F          ค้นหา
Alt + Tab         สลับหน้าต่าง

## 💻 VS Code (ใช้ทุกวัน!)
Ctrl + P          เปิดไฟล์ (พิมพ์ชื่อ)
Ctrl + Shift + P  Command Palette
Ctrl + B          ซ่อน/แสดง Sidebar
Ctrl + \`          เปิด Terminal
Ctrl + D          เลือกคำเดียวกันถัดไป
Alt + ↑/↓         ย้ายบรรทัดขึ้น/ลง
Alt + Shift + ↑/↓ คัดลอกบรรทัด
Ctrl + /          comment/uncomment
Ctrl + Shift + K  ลบบรรทัด
Ctrl + L          เลือกทั้งบรรทัด
Ctrl + Shift + F  ค้นหาทั้งโปรเจกต์

## ⌨️ Terminal
Ctrl + C          หยุดคำสั่ง
Tab               autocomplete
↑ / ↓             คำสั่งก่อนหน้า/ถัดไป
Ctrl + L          เคลียร์หน้าจอ
Ctrl + R          ค้นหาคำสั่งเก่า`,
        explanation:
          "แค่จำ shortcuts 20 อันนี้ คุณจะทำงานเร็วขึ้น 2-3 เท่า เพราะไม่ต้องหยิบเมาส์ ฝึกใช้ทีละ 5 อัน จนชิน แล้วเพิ่มเรื่อยๆ",
      },
      {
        language: "markdown",
        title: "แผนฝึก Touch Typing 4 สัปดาห์",
        code: `## สัปดาห์ 1: Home Row
- วางนิ้วบน ASDF JKL;
- ฝึก keybr.com 15 นาที/วัน
- เป้าหมาย: พิมพ์ Home Row ได้โดยไม่มองแป้น
- อย่ากังวลเรื่องความเร็ว โฟกัสที่ "ไม่มอง"

## สัปดาห์ 2: แถวบน + แถวล่าง
- เพิ่มแถว QWERTY และ ZXCVB
- ฝึก keybr.com 15 นาที/วัน
- เป้าหมาย: พิมพ์ A-Z ได้โดยไม่มองแป้น

## สัปดาห์ 3: ตัวเลข + อักขระพิเศษ
- ฝึก 1234567890 และ !@#$%^&*()
- ฝึก {} [] () "" '' สำหรับเขียนโค้ด
- ใช้ typing.io ฝึกพิมพ์โค้ดจริง

## สัปดาห์ 4: ความเร็ว + โค้ด
- ฝึก monkeytype.com ให้เร็วขึ้น
- ใช้ VS Code shortcuts ในการทำงานจริง
- เป้าหมาย: 50+ WPM, accuracy 95%+

## 📊 เป้าหมายตามระดับ
| ระดับ     | WPM   | สถานะ              |
|-----------|-------|---------------------|
| ช้า       | < 30  | ต้องฝึกด่วน!        |
| เฉลี่ย    | 30-50 | ใช้งานได้           |
| ดี        | 50-70 | เร็วกว่าคนส่วนใหญ่  |
| เร็วมาก  | 70-90 | ระดับ pro           |
| เทพ      | 90+   | top 5% ของโลก      |`,
        explanation:
          "ฝึกแค่วันละ 15 นาที ภายใน 4 สัปดาห์คุณจะพิมพ์ได้โดยไม่ต้องมองแป้นพิมพ์ ลงทุนเวลาน้อยมากแต่ได้ผลตอบแทนตลอดชีวิต",
      },
    ],
    practiceProjects: [
      "ทดสอบ WPM ปัจจุบันแล้วจดไว้ ฝึก 2 สัปดาห์แล้ววัดใหม่",
      "ฝึก keybr.com หรือ monkeytype.com ทุกวัน 15 นาที ติดต่อกัน 30 วัน",
      "ฝึกพิมพ์โค้ดบน typing.io (JavaScript, Python)",
      "จด VS Code shortcuts 10 อัน แล้วฝึกใช้จนเป็นธรรมชาติ",
      "ลองปิดตาพิมพ์ประโยค \"The quick brown fox jumps over the lazy dog\" (มีทุกตัวอักษร)",
    ],
    tips: [
      "อย่ามองแป้นพิมพ์เด็ดขาด — จะช้าในตอนแรกแต่เร็วขึ้นมากในระยะยาว",
      "Accuracy ก่อน Speed เสมอ — พิมพ์ถูก 95%+ ก่อน แล้วความเร็วจะตามมาเอง",
      "ฝึกทุกวัน 15 นาที ดีกว่าฝึกสัปดาห์ละ 2 ชั่วโมง — สมองต้องการ repetition",
      "ลองเปลี่ยนมาใช้ mechanical keyboard — สัมผัสดีขึ้น พิมพ์สนุกขึ้น",
      "เรียนรู้ Vim keybindings ใน VS Code — ยกระดับไปอีกขั้น (แต่ learning curve สูง)",
    ],
    relatedCareers: ["developer", "data-engineer", "ai-engineer", "business-analyst", "system-analyst", "devops", "product-owner", "project-manager", "designer"],
  },
  {
    slug: "english-for-dev",
    title: "ภาษาอังกฤษสำหรับ Developer",
    titleEn: "English for Developers",
    icon: "🇬🇧",
    category: "softskill",
    categoryIcon: "💪",
    color: "blue",
    difficulty: "beginner",
    estimatedTime: "ตลอดชีวิต (แต่เริ่มเห็นผลใน 1-3 เดือน)",
    description:
      "ภาษาอังกฤษไม่ใช่แค่วิชาเรียน แต่คือ \"ประตู\" สู่ความรู้ทั้งโลก — Docs, Stack Overflow, YouTube, งานเงินเดือนสูง ล้วนเป็นภาษาอังกฤษ",
    whatIsIt:
      "ลองนึกภาพว่าความรู้ด้าน programming ทั้งหมดในโลกเป็นมหาสมุทร ภาษาไทยคือแอ่งน้ำเล็กๆ ริมฝั่ง ส่วนภาษาอังกฤษคือมหาสมุทรทั้งหมด Documentation อย่างเป็นทางการของ React, Next.js, Python, AWS ล้วนเป็นภาษาอังกฤษ คำถาม-คำตอบบน Stack Overflow 99% เป็นภาษาอังกฤษ คอร์สเรียนที่ดีที่สุดบน YouTube, Udemy เป็นภาษาอังกฤษ บริษัท tech ระดับโลกที่เงินเดือนสูงใช้ภาษาอังกฤษในการทำงาน ถ้าอ่านภาษาอังกฤษไม่ออก คุณกำลังปิดกั้นตัวเองจากโอกาสมหาศาล",
    whyLearn: [
      "Documentation ทั้งหมดเป็นภาษาอังกฤษ — อ่านไม่ออก = ติดตลอด ต้องรอคนแปล",
      "Stack Overflow / GitHub Issues ตอบเป็นภาษาอังกฤษ — แก้ bug ได้เร็วขึ้น 10 เท่า",
      "งานบริษัทต่างชาติเงินเดือนสูงกว่า 2-5 เท่า — แต่ต้องสื่อสารภาษาอังกฤษได้",
      "คอร์สเรียนดีๆ ส่วนใหญ่เป็นภาษาอังกฤษ — YouTube, Udemy, freeCodeCamp",
      "Open Source community ทั้งโลกใช้ภาษาอังกฤษ — contribute ได้ = เพิ่ม portfolio",
      "AI tools (ChatGPT, Copilot) ให้ผลลัพธ์ดีกว่าเมื่อใช้ภาษาอังกฤษ",
    ],
    keyConcepts: [
      { title: "Reading Docs", description: "อ่าน documentation เป็นทักษะสำคัญที่สุด — เริ่มจาก Next.js docs ที่เขียนง่ายมาก", icon: "📖" },
      { title: "Technical Vocabulary", description: "คำศัพท์ tech ที่ต้องรู้ — deploy, compile, render, fetch, parse, debug, refactor", icon: "📝" },
      { title: "Reading Error Messages", description: "อ่าน error ได้ = แก้ bug ได้ — \"Cannot read property 'x' of undefined\" อ่านแล้วต้องเข้าใจ", icon: "🚨" },
      { title: "Writing in English", description: "เขียน commit message, PR description, email, documentation — ไม่ต้องสมบูรณ์แบบ แค่ชัดเจน", icon: "✍️" },
      { title: "Listening & Speaking", description: "ฟัง YouTube tutorial, ประชุมกับทีมต่างชาติ — ฝึกฟังก่อน พูดทีหลัง", icon: "🎧" },
      { title: "Tech English Patterns", description: "ประโยคที่ใช้บ่อย: \"This function returns...\", \"It throws an error when...\", \"Let's refactor this...\"", icon: "🔄" },
    ],
    gettingStarted: [
      { step: "เปลี่ยนภาษาเครื่องเป็น English", detail: "มือถือ, คอม, VS Code, browser เปลี่ยนเป็นภาษาอังกฤษ — ซึมซับทุกวัน" },
      { step: "อ่าน Docs เป็นภาษาอังกฤษ", detail: "เริ่มจาก Next.js docs — เขียนง่ายมากเหมาะสำหรับฝึกอ่าน เปิด Google Translate ไว้คู่กัน" },
      { step: "ดู YouTube tech เป็นภาษาอังกฤษ", detail: "เปิด subtitle (CC) ไว้ ลอง Fireship, Theo, Web Dev Simplified — พูดชัดฟังง่าย" },
      { step: "เขียน commit message เป็นภาษาอังกฤษ", detail: "เริ่มจาก: feat: add login page, fix: resolve CORS error — สั้นๆ ง่ายๆ ก่อน" },
      { step: "ฝึกทุกวัน 15-30 นาที", detail: "อ่านบทความ tech 1 บทความ/วัน — Dev.to, Medium, CSS-Tricks" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "Tech English ที่ Developer ใช้ทุกวัน",
        code: `## 📖 คำศัพท์ Tech ที่ต้องรู้
| English              | ความหมาย                     | ตัวอย่าง                          |
|---------------------|-----------------------------|------------------------------------|
| deploy              | นำแอปขึ้น server              | "Let's deploy to production"       |
| compile             | แปลงโค้ดเป็นภาษาเครื่อง       | "The code compiled successfully"   |
| render              | แสดงผลบนหน้าจอ              | "React renders the component"      |
| fetch               | ดึงข้อมูล                     | "Fetch data from the API"          |
| parse               | แยกวิเคราะห์ข้อมูล            | "Parse the JSON response"          |
| debug               | หาและแก้ bug                 | "I'm debugging the login issue"    |
| refactor            | ปรับปรุงโค้ดโดยไม่เปลี่ยน behavior | "Let's refactor this function" |
| deprecated          | เลิกใช้แล้ว (ยังใช้ได้แต่ไม่แนะนำ) | "This API is deprecated"      |
| merge               | รวมโค้ดเข้าด้วยกัน            | "Merge this PR into main"          |
| breakpoint          | จุดหยุดเพื่อ debug            | "Set a breakpoint on line 42"      |

## 💬 ประโยคที่ใช้บ่อยใน Code Review
- "Can you add a try-catch here?"
- "This variable name could be more descriptive"
- "Nice refactor! Much cleaner now"
- "Could you add tests for this?"
- "LGTM" (Looks Good To Me = ผ่าน!)

## 🚨 อ่าน Error Messages
"TypeError: Cannot read properties of undefined (reading 'map')"
→ มีค่า undefined อยู่ตรงที่เรียก .map() → ต้อง check ว่าตัวแปรมีค่าก่อน

"Module not found: Can't resolve '@/lib/db'"
→ หาไฟล์ lib/db ไม่เจอ → ตรวจ path และชื่อไฟล์ให้ถูก`,
        explanation:
          "ไม่ต้องเก่งแกรมม่า — แค่รู้คำศัพท์ tech + อ่าน error message ได้ + เขียน commit/PR ได้ ก็เพียงพอสำหรับการทำงานจริง ค่อยๆ พัฒนาขึ้นเรื่อยๆ",
      },
    ],
    practiceProjects: [
      "เปลี่ยนภาษาเครื่องทุกอย่างเป็น English แล้วใช้ 1 เดือน",
      "อ่าน Next.js docs 1 หน้า/วัน แล้วสรุปเป็นภาษาไทย",
      "เขียน README ของโปรเจกต์เป็นภาษาอังกฤษ",
      "ดู YouTube tech channel (Fireship, Theo) 1 คลิป/วัน เปิด subtitle",
      "ตอบคำถามบน Stack Overflow / GitHub Issues เป็นภาษาอังกฤษ",
    ],
    tips: [
      "ไม่ต้องสมบูรณ์แบบ — ภาษาอังกฤษแบบ \"สื่อสารได้\" ก็พอ grammar ผิดบ้างไม่เป็นไร",
      "อ่านก่อน → ฟัง → เขียน → พูด — เรียงจากง่ายไปยาก",
      "ใช้ ChatGPT ช่วยแปลและอธิบาย — ถามว่า \"อธิบาย error นี้เป็นภาษาไทยให้หน่อย\"",
      "ดู YouTube เปิด subtitle ไว้ — ฟังไม่ออกก็อ่าน subtitle ได้",
      "Developer ที่อ่านภาษาอังกฤษได้คล่อง เรียนรู้เร็วกว่าคนอื่น 5-10 เท่า เพราะเข้าถึงข้อมูลได้มากกว่า",
    ],
    relatedCareers: ["developer", "data-engineer", "ai-engineer", "business-analyst", "system-analyst", "devops", "product-owner", "project-manager", "designer"],
  },
  {
    slug: "communication-skills",
    title: "Communication Skills — สื่อสารให้เข้าใจ",
    titleEn: "Communication Skills for Tech Professionals",
    icon: "🗣️",
    category: "softskill",
    categoryIcon: "💪",
    color: "violet",
    difficulty: "beginner",
    estimatedTime: "ฝึกตลอดชีวิต (เริ่มเห็นผลใน 2-4 สัปดาห์)",
    description:
      "เขียนโค้ดเก่งแค่ไหน ถ้าสื่อสารไม่ได้ก็ทำงานไม่สำเร็จ — การสื่อสารที่ดีคือทักษะที่แยก Developer ธรรมดา ออกจาก Developer ที่ทุกทีมอยากได้",
    whatIsIt:
      "หลายคนคิดว่า Developer แค่นั่งเขียนโค้ดเงียบๆ แต่ความจริงไม่ใช่เลย ทุกวันคุณต้อง: อธิบายให้ PM เข้าใจว่าทำไมฟีเจอร์นี้ใช้เวลา 3 สัปดาห์ ถามคำถามกับ BA ให้ชัดเจนว่า requirement คืออะไร เขียน PR description ให้คนรีวิวเข้าใจ บอกทีมใน standup ว่าติดปัญหาอะไร ถ้าคุณสื่อสารไม่ดี PM จะไม่เข้าใจว่าทำไมต้องใช้เวลา ทีมจะไม่รู้ว่าคุณติดอะไร โค้ดจะถูก reject เพราะ reviewer ไม่เข้าใจ Developer ที่สื่อสารเก่ง = เลื่อนตำแหน่งเร็วกว่า 2-3 เท่า",
    whyLearn: [
      "Developer ที่เก่งที่สุดไม่ใช่คนเขียนโค้ดเก่งที่สุด แต่เป็นคนที่ \"เขียนโค้ดเก่ง + สื่อสารเก่ง\"",
      "80% ของปัญหาในโปรเจกต์มาจากการสื่อสาร ไม่ใช่เทคนิค",
      "การเลื่อนตำแหน่งเป็น Senior/Lead ต้องใช้ communication มากกว่า coding",
      "ทำให้ทำงานร่วมกับทีมได้ราบรื่น — ลดความเข้าใจผิด ลดการทำงานซ้ำ",
      "จำเป็นทุกตำแหน่ง ทุกระดับ ทุกสายอาชีพ",
    ],
    keyConcepts: [
      { title: "Active Listening (ฟังอย่างตั้งใจ)", description: "ฟังจนจบก่อนตอบ ถามกลับเพื่อให้แน่ใจว่าเข้าใจถูก — \"ขอสรุปนะ หมายความว่า...ใช่ไหมครับ?\"", icon: "👂" },
      { title: "Explain Like I'm 5 (ELI5)", description: "อธิบายเรื่องซับซ้อนให้คนไม่ใช่สาย tech เข้าใจ — ใช้ analogy, ลดศัพท์เทคนิค", icon: "👶" },
      { title: "Writing Clearly", description: "เขียนให้สั้น ชัด ตรงประเด็น — ทั้ง chat, email, docs, PR description", icon: "✍️" },
      { title: "Asking Good Questions", description: "ถามคำถามที่ดี = ได้คำตอบที่ดี — บอก context, สิ่งที่ลองแล้ว, สิ่งที่คาดหวัง", icon: "❓" },
      { title: "Giving & Receiving Feedback", description: "ให้ feedback ที่ constructive ไม่ใช่ criticize — รับ feedback ด้วย growth mindset", icon: "💬" },
      { title: "Conflict Resolution", description: "เมื่อเห็นไม่ตรงกัน ให้โฟกัสที่ปัญหา ไม่ใช่ตัวบุคคล — \"ผมคิดว่าวิธีนี้ดีกว่าเพราะ...\"", icon: "🤝" },
      { title: "Standup & Meeting Skills", description: "พูดให้กระชับ ตรงประเด็น — \"เมื่อวานทำ... วันนี้จะทำ... ติดตรง...\"", icon: "🗓️" },
    ],
    gettingStarted: [
      { step: "ฝึก \"สรุปก่อนอธิบาย\"", detail: "พูดสรุป 1 ประโยคก่อน แล้วค่อยอธิบายรายละเอียด — \"login มีบัค ผู้ใช้กรอก email ผิดแล้วไม่แสดง error\"" },
      { step: "ฝึกเขียน PR description", detail: "ทุก PR ต้องบอก: อะไรเปลี่ยน ทำไมเปลี่ยน ทดสอบยังไง — ดู template ในบทเรียน Project Workflow" },
      { step: "ฝึกอธิบายเรื่อง tech ให้เพื่อนไม่สาย tech", detail: "ถ้าอธิบายให้แม่เข้าใจได้ = คุณเข้าใจจริง" },
      { step: "ฝึกถามคำถามที่ดี", detail: "ก่อนถาม: ลอง debug เอง 15 นาที → บอก context → บอกสิ่งที่ลองแล้ว → ถาม" },
      { step: "ขอ feedback จากเพื่อน", detail: "หลัง present หรือส่งงาน ถามว่า \"มีอะไรที่ผมปรับปรุงได้ไหม?\"" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "สื่อสารแบบ Developer มืออาชีพ: Before & After",
        code: `## 🚨 ขอความช่วยเหลือ

❌ Bad: "พี่ช่วยหน่อย มันไม่ work"
→ คนอ่านไม่รู้ว่าอะไรไม่ work ต้องถามกลับ เสียเวลา

✅ Good:
"API /api/users return 500 error ตอน POST
ผมลอง check แล้ว:
- Database connection OK (test query ผ่าน)
- Request body ถูก format (ลอง Postman ผ่าน)
- Error log: 'Unique constraint failed on email'
คิดว่าน่าจะเป็นเรื่อง duplicate email check
มีวิธีแนะนำไหมครับ?"

## 📋 รายงานใน Daily Standup

❌ Bad: "เมื่อวานทำหน้า login ครับ"
→ ไม่รู้ว่าเสร็จหรือยัง ติดอะไรไหม วันนี้จะทำอะไร

✅ Good:
"เมื่อวาน: ทำหน้า login เสร็จแล้ว รอ review (PR #42)
วันนี้: จะทำหน้า register ตาม TASK-15
ติด: รอ designer confirm สี primary button"

## 🎤 อธิบายเรื่อง tech ให้ PM

❌ Bad: "ต้อง refactor database schema เพราะ
normalization ไม่ดี มี redundant data ทำให้
query ช้าต้อง denormalize บาง table"
→ PM ไม่เข้าใจ

✅ Good: "ตอนนี้ระบบเก็บข้อมูลซ้ำกันหลายที่
เวลาแก้ต้องแก้หลายจุด เสี่ยงผิดพลาด
ขอเวลา 2 วัน จัดระเบียบใหม่
จะทำให้ระบบเร็วขึ้นและแก้ bug ง่ายขึ้นครับ"`,
        explanation:
          "สังเกตว่า Good version ทุกอัน: ให้ context, ตรงประเด็น, บอกสิ่งที่ลองแล้ว, เสนอทางออก ฝึกสื่อสารแบบนี้ คนจะประทับใจมากและอยากทำงานด้วย",
      },
    ],
    practiceProjects: [
      "เขียน PR description 5 อัน ตาม template: อะไรเปลี่ยน + ทำไม + ทดสอบยังไง",
      "ฝึกอธิบาย \"React ทำงานยังไง\" ให้คนไม่สาย tech เข้าใจใน 2 นาที",
      "ฝึก Daily Standup กับทีมโปรเจกต์จบ ทุกวัน 10 นาที",
      "ขอ feedback จากเพื่อน 3 คน ว่าการสื่อสารของคุณมีจุดไหนปรับปรุงได้",
      "เขียน Technical Blog 1 บทความ อธิบายสิ่งที่เรียนรู้ล่าสุด",
    ],
    tips: [
      "\"สรุปก่อน อธิบายทีหลัง\" — คนไม่มีเวลาฟังยาว บอกประเด็นก่อน 1 ประโยค",
      "ถ้าอธิบายไม่รู้เรื่อง ใช้ analogy — \"มันเหมือนกับ...\" ช่วยได้เยอะมาก",
      "เขียน > พูด สำหรับเรื่องสำคัญ — เขียนเป็นลายลักษณ์อักษร ย้อนกลับมาดูได้",
      "ก่อนถามคำถาม ลอง debug เอง 15 นาทีก่อน — แสดงว่าคุณพยายามแล้ว",
      "Communication ไม่ใช่พรสวรรค์ เป็นทักษะที่ฝึกได้ — ยิ่งฝึก ยิ่งเก่ง",
    ],
    relatedCareers: ["developer", "product-owner", "project-manager", "business-analyst", "system-analyst", "designer", "devops", "data-engineer", "ai-engineer"],
  },
  {
    slug: "teamwork",
    title: "Teamwork & Collaboration",
    titleEn: "Teamwork & Collaboration",
    icon: "🤝",
    category: "softskill",
    categoryIcon: "💪",
    color: "amber",
    difficulty: "beginner",
    estimatedTime: "ฝึกตลอดชีวิต",
    description:
      "ซอฟต์แวร์ไม่มีใครสร้างคนเดียว — Developer, Designer, PM, QA ต้องทำงานร่วมกัน คนที่ทำงานเป็นทีมได้ดี = คนที่ทุกบริษัทอยากจ้าง",
    whatIsIt:
      "สมัยเรียน คุณอาจจะทำโปรเจกต์คนเดียวได้ แต่ในบริษัทจริง ไม่มีใครสร้างซอฟต์แวร์คนเดียว ทีมเล็กสุดก็ยังมี 3-5 คน ทีมใหญ่อาจมี 50-100 คน คุณต้องทำงานกับคนที่คิดไม่เหมือนคุณ ทำงานต่างสไตล์ มี skill ต่างกัน Teamwork ไม่ใช่แค่ \"อยู่ในทีมเดียวกัน\" แต่คือการสร้างผลลัพธ์ที่ดีกว่าที่คนๆ เดียวจะทำได้ ทีมที่ดี 5 คน ทำงานได้มากกว่า 5 คนแยกกัน ส่วนทีมที่แย่ 5 คน ทำงานได้น้อยกว่า 1 คนด้วยซ้ำ",
    whyLearn: [
      "ทุกบริษัททำงานเป็นทีม — ไม่มีใครสร้างซอฟต์แวร์คนเดียว",
      "\"Culture fit\" เป็นเกณฑ์สำคัญในการรับเข้าทำงาน — ไม่ใช่แค่ coding ได้",
      "ทีมที่ดีทำให้งานสนุก ทีมที่แย่ทำให้อยากลาออก — teamwork skill ช่วยสร้างทีมที่ดี",
      "Senior Developer ต้อง mentor คนอื่น — ต้อง collaborate ได้ดีมาก",
      "โปรเจกต์จบในมหาวิทยาลัยคือการฝึก teamwork ที่ดีที่สุด",
    ],
    keyConcepts: [
      { title: "Psychological Safety", description: "สภาพแวดล้อมที่ทุกคนกล้าพูด กล้าถาม กล้าบอกว่าไม่เข้าใจ โดยไม่ถูกตำหนิ — ทีมที่ดีที่สุดมีสิ่งนี้", icon: "🛡️" },
      { title: "Code Review Culture", description: "รีวิวโค้ดคือการเรียนรู้ร่วมกัน ไม่ใช่จับผิด — comment ด้วยความเคารพ", icon: "🔍" },
      { title: "Pair Programming", description: "เขียนโค้ดด้วยกัน 2 คน — คนหนึ่งพิมพ์ คนหนึ่งคิด สลับกัน เรียนรู้จากกันได้เร็ว", icon: "👥" },
      { title: "Knowledge Sharing", description: "แบ่งปันความรู้ในทีม — ไม่กั๊ก เพราะถ้ามีคนเดียวรู้แล้วคนนั้นลาออก = ปัญหาใหญ่", icon: "📢" },
      { title: "Conflict Resolution", description: "เห็นไม่ตรงกันเป็นเรื่องปกติ — สำคัญคือหา solution ร่วมกัน ไม่ใช่เอาชนะ", icon: "⚖️" },
      { title: "Empathy (เข้าอกเข้าใจ)", description: "เข้าใจมุมมองของคนอื่น — designer คิดยังไง PM มีแรงกดดันอะไร tester ห่วงอะไร", icon: "💗" },
      { title: "Documentation & Handoff", description: "เขียน docs ให้คนที่มาทีหลังเข้าใจได้ — โค้ดที่ไม่มี docs = ภาระของทีม", icon: "📄" },
    ],
    gettingStarted: [
      { step: "ทำโปรเจกต์กับเพื่อน 2-3 คน", detail: "ใช้ Git branching + PR + code review — ฝึก collaborate จริงๆ" },
      { step: "ฝึกรับ feedback ด้วย Growth Mindset", detail: "เมื่อคนให้ feedback ให้คิดว่า \"นี่คือโอกาสพัฒนา\" ไม่ใช่ \"เขาจับผิดฉัน\"" },
      { step: "ฝึกให้ feedback ที่ constructive", detail: "ไม่พูดว่า \"โค้ดไม่ดี\" แต่พูดว่า \"ตรงนี้ถ้าแยกเป็นฟังก์ชัน จะอ่านง่ายขึ้น\"" },
      { step: "Pair Programming", detail: "ลองเขียนโค้ดกับเพื่อน 2 คน 1 ชั่วโมง — จะเรียนรู้เยอะมาก" },
      { step: "เขียน Documentation", detail: "เขียน README ที่คนใหม่อ่านแล้วรันโปรเจกต์ได้ใน 10 นาที" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "Code Review: วิธี comment ที่ดี vs ไม่ดี",
        code: `## ❌ Bad Code Review Comments
- "โค้ดห่วย" → ไม่ constructive ไม่บอกว่าปรับยังไง
- "ทำไมไม่ทำแบบที่ผมบอก?" → ดูเป็นการสั่ง
- "..." (ไม่ comment) → ไม่ช่วยอะไร

## ✅ Good Code Review Comments
- "ตรงนี้ถ้าแยกเป็นฟังก์ชัน getActiveUsers()
  จะอ่านง่ายขึ้นนะครับ เพราะทำหน้าที่ชัดเจน"
  → บอกว่าแก้อะไร + เพราะอะไร

- "Nice! ชอบวิธีใช้ reduce ตรงนี้ 👍"
  → ชมสิ่งที่ดี ทำให้คนมีกำลังใจ

- "nit: spacing ตรงนี้ไม่สม่ำเสมอ"
  → "nit" = เรื่องเล็กน้อย ไม่ block merge

- "question: ทำไมถึงเลือก Map แทน object ครับ?
  ถามเพื่อเรียนรู้ ไม่ใช่จับผิด 🙏"
  → ถามด้วยความอยากรู้ ไม่ใช่โจมตี

## 🏆 Code Review Golden Rules
1. Review โค้ด ไม่ใช่ review คน
2. ชมสิ่งที่ดีด้วย ไม่ใช่แค่จับผิด
3. ถ้าไม่เห็นด้วย อธิบายเหตุผล
4. ใช้คำว่า "เราลอง..." แทน "คุณต้อง..."
5. ตอบ PR review ภายใน 24 ชั่วโมง`,
        explanation:
          "Code Review ที่ดีทำให้ทีมเก่งขึ้น Code Review ที่แย่ทำให้ทีมแตก — ความแตกต่างอยู่ที่ \"วิธีพูด\" ไม่ใช่ \"สิ่งที่พูด\"",
      },
    ],
    practiceProjects: [
      "ทำโปรเจกต์จบด้วย Git branching + PR + code review กับทีม",
      "ลอง Pair Programming กับเพื่อน 1 ชั่วโมง แล้วสลับ driver/navigator",
      "เขียน Team Agreement: coding standards, branch naming, PR rules",
      "จัด Knowledge Sharing session: สอนเพื่อนในทีมเรื่องที่คุณเก่ง",
      "เขียน README ที่คนใหม่อ่านแล้ว setup โปรเจกต์ได้ใน 10 นาที",
    ],
    tips: [
      "\"ถ้าอยากไปเร็ว ไปคนเดียว ถ้าอยากไปไกล ไปด้วยกัน\" — African Proverb",
      "ปัญหาในทีมส่วนใหญ่มาจากการสื่อสาร ไม่ใช่ความสามารถ",
      "ให้เกียรติทุกตำแหน่ง — Designer, QA, PM มีคุณค่าเท่ากับ Developer",
      "ถ้าใครถาม ให้ช่วยด้วยความเต็มใจ — วันหนึ่งคุณก็ต้องถามเหมือนกัน",
      "Teamwork ที่ดีต้อง trust — สร้างความไว้วางใจด้วยการทำตามสัญญาและ transparent",
    ],
    relatedCareers: ["developer", "product-owner", "project-manager", "business-analyst", "system-analyst", "designer", "devops", "data-engineer", "ai-engineer"],
  },
  {
    slug: "self-learning",
    title: "Self-Learning & Growth Mindset",
    titleEn: "Self-Learning & Growth Mindset",
    icon: "📚",
    category: "softskill",
    categoryIcon: "💪",
    color: "rose",
    difficulty: "beginner",
    estimatedTime: "ตลอดชีวิต",
    description:
      "เทคโนโลยีเปลี่ยนทุก 2-3 ปี — Developer ที่เรียนรู้ด้วยตัวเองได้ คือ Developer ที่ไม่มีวันตกงาน Growth Mindset คือ \"เชื่อว่าทุกอย่างเรียนรู้ได้\"",
    whatIsIt:
      "ในวงการ Tech ไม่มีใครรู้ทุกอย่าง และสิ่งที่คุณรู้วันนี้ อาจจะ outdated ในอีก 2-3 ปี React เพิ่งเกิดปี 2013, Next.js ปี 2016, ChatGPT ปี 2022 — ทุกอย่างเปลี่ยนเร็วมาก Developer ที่ประสบความสำเร็จไม่ใช่คนที่เก่งที่สุดวันนี้ แต่เป็นคนที่ \"เรียนรู้ได้เร็วที่สุด\" Growth Mindset คือความเชื่อว่า \"ผมยังไม่เก่งเรื่องนี้ แต่ผมเรียนรู้ได้\" ตรงข้ามกับ Fixed Mindset ที่เชื่อว่า \"ผมไม่มีพรสวรรค์ ผมทำไม่ได้\" Developer ที่เก่งที่สุดในโลก ล้วน self-learner ทั้งนั้น",
    whyLearn: [
      "เทคโนโลยีเปลี่ยนทุก 2-3 ปี — ถ้าหยุดเรียน = ตกยุค",
      "มหาวิทยาลัยสอนไม่ทัน — ต้องเรียนรู้ด้วยตัวเองเยอะมาก",
      "คนที่เรียนรู้เร็ว = คนที่ปรับตัวได้ = คนที่ไม่มีวันตกงาน",
      "ข้อมูลฟรีมหาศาล — YouTube, docs, blogs, courses สิ่งที่ขาดคือ \"วิธีเรียนรู้\"",
      "Growth Mindset ไม่ใช่แค่เรื่อง tech — ช่วยทุกด้านของชีวิต",
    ],
    keyConcepts: [
      { title: "Growth vs Fixed Mindset", description: "Growth: \"ยังไม่เป็น แต่เรียนได้\" Fixed: \"ไม่มีพรสวรรค์ ทำไม่ได้\" — เปลี่ยนแค่ mindset ผลลัพธ์เปลี่ยนมหาศาล", icon: "🧠" },
      { title: "Learn by Doing", description: "อ่าน/ดู video 20% ลงมือทำ 80% — ทำโปรเจกต์จริงเรียนรู้ได้เร็วที่สุด", icon: "🔨" },
      { title: "Feynman Technique", description: "ถ้าอธิบายให้เด็ก 5 ขวบเข้าใจได้ = คุณเข้าใจจริง ถ้าอธิบายไม่ได้ = ต้องเรียนเพิ่ม", icon: "👶" },
      { title: "Spaced Repetition", description: "ทบทวนซ้ำเป็นระยะ — วันนี้เรียน พรุ่งนี้ทบทวน สัปดาห์หน้าทบทวนอีก ความจำจะฝังลึก", icon: "🔄" },
      { title: "Comfort Zone Expansion", description: "เรียนรู้สิ่งใหม่ = อยู่นอก comfort zone ตอนแรกจะยาก แต่ค่อยๆ กลายเป็นง่าย", icon: "🌱" },
      { title: "Build in Public", description: "แชร์สิ่งที่เรียนรู้บน blog/social media — สอนคนอื่น = เข้าใจลึกขึ้น + สร้าง network", icon: "📢" },
      { title: "T-shaped Skills", description: "เก่ง 1 อย่างลึกมาก (I) + รู้กว้างหลายอย่าง (—) = รูปตัว T — นายจ้างชอบคนแบบนี้", icon: "🔤" },
    ],
    gettingStarted: [
      { step: "ตั้ง Learning Goal", detail: "เลือก 1 เรื่องที่จะเรียนเดือนนี้ — เช่น \"เรียน React ให้สร้าง Todo App ได้\"" },
      { step: "เลือกแหล่งเรียน 1-2 แหล่ง", detail: "อย่า tutorial hop! เลือก 1 คอร์ส/doc แล้วเรียนจนจบ" },
      { step: "ทำโปรเจกต์จริง", detail: "เรียนได้ 30% แล้วลงมือทำเลย — ไม่ต้องรู้ทุกอย่างก่อน" },
      { step: "สอนคนอื่น", detail: "เขียน blog, สอนเพื่อน, โพสต์ Twitter — การสอนทำให้เข้าใจลึกขึ้น" },
      { step: "ทบทวนและต่อยอด", detail: "จบ 1 เรื่อง แล้วเลือกเรื่องถัดไป — ค่อยๆ สร้าง T-shaped skills" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "วิธีเรียนรู้ Technology ใหม่แบบมีประสิทธิภาพ",
        code: `## 🎯 Framework การเรียนรู้สำหรับ Developer

### Step 1: WHY (30 นาที)
- เทคโนโลยีนี้คืออะไร? แก้ปัญหาอะไร?
- ใครใช้? ใช้กับงานแบบไหน?
- เปรียบเทียบกับที่รู้อยู่ (ต่าง/เหมือนตรงไหน?)

### Step 2: HELLO WORLD (2-3 ชั่วโมง)
- ทำตาม official "Getting Started" guide
- สร้างแอปง่ายๆ ตัวแรกให้ได้
- ❌ อย่าดู 10 video tutorials ก่อนลงมือทำ

### Step 3: BUILD (1-2 สัปดาห์)
- สร้างโปรเจกต์จริงที่ใช้ technology นี้
- เจอปัญหา → Google → Stack Overflow → แก้
- นี่คือตอนที่เรียนรู้จริงๆ!

### Step 4: SHARE (1-2 ชั่วโมง)
- เขียน blog สรุปสิ่งที่เรียนรู้
- push ขึ้น GitHub พร้อม README ดีๆ
- แชร์บน Twitter/LinkedIn

### Step 5: DEEPEN (ต่อเนื่อง)
- อ่าน official docs ลึกขึ้น
- ดู advanced tutorials
- contribute ให้ open source

## ⏱️ เวลาที่ต้องใช้ (โดยประมาณ)
| ระดับ          | เวลา         | ผลลัพธ์                |
|---------------|-------------|-------------------------|
| เข้าใจ concept | 1-2 วัน      | อธิบายได้ว่าคืออะไร      |
| สร้างของได้    | 1-2 สัปดาห์  | ทำ project ง่ายๆ ได้    |
| ใช้งานจริงได้  | 1-3 เดือน    | ทำงาน production ได้    |
| เชี่ยวชาญ     | 6-12 เดือน   | สอนคนอื่นได้            |`,
        explanation:
          "WHY → HELLO WORLD → BUILD → SHARE → DEEPEN นี่คือ framework ที่ผมใช้เรียนทุก technology ใช้ได้กับทุกอย่าง ลองทำตามดูครับ",
      },
    ],
    practiceProjects: [
      "เลือก 1 technology ที่ไม่เคยใช้ แล้วเรียนรู้ด้วย framework WHY → BUILD → SHARE",
      "เขียน blog สรุปสิ่งที่เรียนรู้ 1 บทความ/สัปดาห์ ติดต่อกัน 1 เดือน",
      "สอนเพื่อน 1 คน เรื่องที่คุณเพิ่งเรียนรู้ — ใช้ Feynman Technique",
      "สร้าง \"Learning Journal\" จดทุกวันว่าวันนี้เรียนรู้อะไรใหม่",
      "เข้าร่วม community: Dev.to, Reddit r/webdev, Facebook group สาย dev",
    ],
    tips: [
      "\"ผมยังไม่เป็น\" ≠ \"ผมทำไม่ได้\" → เติม \"yet\" เข้าไป: \"ผมยังไม่เป็น... yet\"",
      "อย่า tutorial hop — เลือก 1 แหล่ง เรียนจนจบ แล้วค่อยเรียนจากแหล่งอื่น",
      "เจอ bug ที่แก้ไม่ได้ ≠ ล้มเหลว → คือการเรียนรู้ที่ดีที่สุด!",
      "Consistency > Intensity — เรียนวันละ 30 นาทีทุกวัน ดีกว่าเรียน 8 ชั่วโมงแล้วหยุด 1 เดือน",
      "เปรียบเทียบกับตัวเองเมื่อ 3 เดือนก่อน ไม่ใช่กับคนอื่น — ทุกคนมี pace ไม่เหมือนกัน",
      "ถ้าท้อ ให้ย้อนดูโค้ดที่เขียนเมื่อ 6 เดือนก่อน — คุณจะเห็นว่าเก่งขึ้นมากแค่ไหน",
    ],
    relatedCareers: ["developer", "product-owner", "project-manager", "business-analyst", "system-analyst", "designer", "devops", "data-engineer", "ai-engineer"],
  },
  {
    slug: "presentation-skills",
    title: "Presentation — การนำเสนอ",
    titleEn: "Presentation Skills",
    icon: "🎤",
    category: "softskill",
    categoryIcon: "💪",
    color: "pink",
    difficulty: "beginner",
    estimatedTime: "2-4 สัปดาห์ (ฝึก 1 ครั้ง/สัปดาห์)",
    description:
      "ไม่ว่าจะ Demo ให้ทีม, Present ให้ผู้บริหาร, หรือสัมภาษณ์งาน — การนำเสนอที่ดีทำให้คนจดจำคุณ ไอเดียดีแค่ไหน ถ้า present ไม่ดี ก็ไม่มีคนฟัง",
    whatIsIt:
      "คุณเขียนโค้ดเก่ง สร้างระบบดีมาก แต่ตอน present ให้ผู้บริหาร คุณพูดติดๆ ขัดๆ สไลด์เต็มไปด้วยตัวหนังสือ ไม่มีใครเข้าใจว่าคุณสร้างอะไร ผลคือ: ไม่ได้งบเพิ่ม ไม่ได้เลื่อนตำแหน่ง ไม่ได้ offer งาน ในทางกลับกัน คนที่ present เก่ง แม้ทำน้อยกว่าแต่คนเห็นผลงาน ได้ยอมรับ ได้โอกาส Presentation ไม่ใช่พรสวรรค์ มันเป็นทักษะที่ฝึกได้ และ Developer ที่ present เก่ง หายากมาก = ได้เปรียบ",
    whyLearn: [
      "Sprint Review/Demo ต้อง present ให้ stakeholder ดูทุก sprint",
      "สัมภาษณ์งานคือการ present ตัวเอง — คนที่ present ดีได้ offer ก่อน",
      "เลื่อนตำแหน่งเป็น Senior/Lead ต้อง present idea ให้ทีมและผู้บริหาร",
      "Presentation ที่ดี = ไอเดียถูกรับ = ได้งบ ได้ทรัพยากร ได้โอกาส",
    ],
    keyConcepts: [
      { title: "Know Your Audience", description: "พูดกับ Developer ≠ พูดกับ CEO — ปรับภาษา ปรับ detail ตามคนฟัง", icon: "👥" },
      { title: "Story Structure", description: "ปัญหา → Solution → ผลลัพธ์ — ทุก presentation ต้องมีเรื่องราว ไม่ใช่แค่ข้อมูล", icon: "📖" },
      { title: "Less Text, More Visual", description: "สไลด์ไม่ใช่เอกสาร — 1 สไลด์ = 1 ไอเดีย ใช้รูป/กราฟ/diagram แทนข้อความยาว", icon: "🖼️" },
      { title: "Demo > Slides", description: "สำหรับ Developer: แสดงของจริง (Live Demo) ทรงพลังกว่าสไลด์ 100 แผ่น", icon: "💻" },
      { title: "Practice, Practice, Practice", description: "ซ้อมอย่างน้อย 3 รอบก่อน present จริง — ซ้อมกับเพื่อน, ซ้อมหน้ากระจก, อัดวิดีโอดู", icon: "🔄" },
      { title: "Handle Q&A", description: "ไม่รู้ = บอกว่าไม่รู้ แต่จะไปหาคำตอบ — ดีกว่าตอบมั่ว", icon: "❓" },
    ],
    gettingStarted: [
      { step: "ดู TED Talk 5 อัน", detail: "สังเกตว่า speaker เปิดยังไง, ใช้ story ยังไง, ปิดยังไง — เรียนรู้จากคนเก่ง" },
      { step: "เตรียม \"Elevator Pitch\" ของตัวเอง", detail: "แนะนำตัวเองใน 30 วินาที: ชื่อ + สิ่งที่ทำ + สิ่งที่สนใจ — ใช้ตอนสัมภาษณ์งาน" },
      { step: "ฝึก Demo โปรเจกต์", detail: "เลือก 1 โปรเจกต์ แล้วฝึก demo ให้เพื่อนดู 5 นาที — ขอ feedback" },
      { step: "สร้างสไลด์แบบ minimal", detail: "1 สไลด์ = 1 ไอเดีย ใช้ font ใหญ่ รูปเยอะ ข้อความน้อย" },
      { step: "ซ้อมอย่างน้อย 3 รอบ", detail: "ซ้อมกับเพื่อน → ซ้อมคนเดียว → อัดวิดีโอดูตัวเอง" },
    ],
    codeExamples: [
      {
        language: "markdown",
        title: "Template: Sprint Demo Presentation สำหรับ Developer",
        code: `## Sprint Demo Template (5-10 นาที)

### 1. เปิด (30 วินาที)
"Sprint นี้ทีมทำ feature Login + Register เสร็จแล้ว
ผมจะ demo ให้ดูสั้นๆ ครับ"

### 2. Context (1 นาที)
- ปัญหา: "ผู้ใช้ต้อง login ด้วย email ถึงจะเข้าใช้ระบบได้"
- Goal: "สร้างหน้า login + register ที่ใช้งานง่าย ปลอดภัย"
- Ticket: TASK-42, TASK-43, TASK-44

### 3. Live Demo (3-5 นาที)
- แสดง happy path: register → login → เข้าหน้า dashboard
- แสดง validation: email ผิด format, password สั้นเกินไป
- แสดง error handling: email ซ้ำ
(เตรียม backup plan: ถ้า demo พัง ใช้ screenshot/video)

### 4. Technical Highlights (1-2 นาที)
- ใช้ NextAuth.js + bcrypt password hashing
- มี rate limiting ป้องกัน brute force
- Unit tests 15 cases ผ่านหมด

### 5. สิ่งที่เรียนรู้ / สิ่งที่จะทำต่อ (1 นาที)
- เรียนรู้: JWT token management
- Sprint หน้า: จะทำ OAuth (Google, GitHub login)

### 6. Q&A
"มีคำถามไหมครับ?"

## 💡 Pro Tips
- เตรียม demo data ไว้ก่อน อย่า demo จากหน้าว่างเปล่า
- ถ้า live demo พัง ใช้ video recording แทน
- จับเวลา — อย่าเกินเวลาที่กำหนด
- พูดช้ากว่าที่คิด — ตอนตื่นเต้นจะพูดเร็วมาก`,
        explanation:
          "Template นี้ใช้ได้ทุก Sprint Demo — Context → Demo → Technical → Next Steps → Q&A ฝึกใช้จนเป็นธรรมชาติ",
      },
    ],
    practiceProjects: [
      "ฝึก \"Elevator Pitch\" แนะนำตัวเอง 30 วินาที — อัดวิดีโอดูตัวเอง",
      "Demo โปรเจกต์ให้เพื่อน 3 คนดู แล้วขอ feedback",
      "สร้างสไลด์ 5 แผ่น present โปรเจกต์ (ปัญหา → solution → demo → tech → สรุป)",
      "ดู TED Talk 5 อัน แล้วจดว่าเปิดยังไง ปิดยังไง",
      "ฝึก present เรื่อง tech ให้คนไม่ใช่สาย tech เข้าใจใน 3 นาที",
    ],
    tips: [
      "เปิดให้น่าสนใจ — \"คุณรู้ไหมว่า 90% ของ bug มาจาก...\" ดีกว่า \"สวัสดีครับ ผมจะ present เรื่อง...\"",
      "ซ้อม 3 รอบก่อน present จริงเสมอ — รอบที่ 1 ติดขัด รอบที่ 2 ดีขึ้น รอบที่ 3 คล่อง",
      "จับเวลาตอนซ้อม — ส่วนใหญ่จะเกินเวลา ต้องตัดเนื้อหาออก",
      "Demo พัง = เรื่องปกติ — เตรียม backup (video, screenshot) ไว้เสมอ",
      "ตอนตื่นเต้น จะพูดเร็วมาก — บังคับตัวเองให้พูดช้าลง หายใจลึกๆ",
      "ไม่รู้คำตอบ = บอกตรงๆ ว่า \"ผมจะไปหาข้อมูลแล้วตอบทีหลังครับ\" — ดูมืออาชีพมาก",
    ],
    relatedCareers: ["developer", "product-owner", "project-manager", "business-analyst", "system-analyst", "designer"],
  },
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getAllLessonSlugs(): string[] {
  return lessons.map((l) => l.slug);
}

export function getLessonsByCategory(category: string): Lesson[] {
  return lessons.filter((l) => l.category === category);
}
