export interface RoleLevel {
  level: string;
  years: string;
  salaryRange: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  skills: string[];
}

export interface CareerSalary {
  role: string;
  icon: string;
  category: string;
  description: string;
  levels: RoleLevel[];
  benefits: string[];
  growthPath: string;
}

export const salaryCategories = [
  { key: "dev", label: "Developer / Engineer", icon: "💻" },
  { key: "data", label: "Data & AI", icon: "📊" },
  { key: "infra", label: "DevOps & Infra", icon: "☁️" },
  { key: "product", label: "Product & Design", icon: "🎨" },
  { key: "management", label: "Management & Lead", icon: "👔" },
  { key: "security", label: "Security & QA", icon: "🔒" },
];

export const careerSalaries: CareerSalary[] = [
  // ─── DEVELOPER / ENGINEER ───
  {
    role: "Frontend Developer",
    icon: "🎨",
    category: "dev",
    description: "สร้างหน้าเว็บ UI/UX ที่ผู้ใช้เห็นและใช้งาน — HTML, CSS, JavaScript, React, Next.js",
    levels: [
      {
        level: "Intern / Trainee",
        years: "0 ปี",
        salaryRange: "10,000 - 18,000",
        salaryMin: 10000,
        salaryMax: 18000,
        description: "เพิ่งเริ่มเรียนรู้ ฝึกงาน ทำโปรเจกต์เล็กๆ ภายใต้การดูแลของ Senior",
        skills: ["HTML/CSS", "JavaScript พื้นฐาน", "React เบื้องต้น", "Git เบื้องต้น"],
      },
      {
        level: "Junior",
        years: "0-2 ปี",
        salaryRange: "18,000 - 35,000",
        salaryMin: 18000,
        salaryMax: 35000,
        description: "ทำ feature เล็กๆ ได้เอง แก้ bug ได้ เรียนรู้ pattern จาก Senior",
        skills: ["React/Next.js", "TypeScript", "Responsive Design", "REST API", "Git workflow"],
      },
      {
        level: "Mid-level",
        years: "2-5 ปี",
        salaryRange: "35,000 - 65,000",
        salaryMin: 35000,
        salaryMax: 65000,
        description: "ทำ feature ซับซ้อนได้เอง ดูแลคุณภาพโค้ด review ให้ Junior ได้",
        skills: ["State Management", "Testing (Jest/Playwright)", "Performance Optimization", "CI/CD", "Design System"],
      },
      {
        level: "Senior",
        years: "5-8 ปี",
        salaryRange: "65,000 - 120,000",
        salaryMin: 65000,
        salaryMax: 120000,
        description: "ออกแบบ architecture ตัดสินใจ tech stack นำทีม mentor Junior/Mid",
        skills: ["Architecture Design", "Tech Leadership", "Performance Expert", "Cross-team Collaboration", "Mentoring"],
      },
      {
        level: "Staff / Principal",
        years: "8+ ปี",
        salaryRange: "120,000 - 200,000+",
        salaryMin: 120000,
        salaryMax: 200000,
        description: "กำหนดทิศทาง tech ขององค์กร แก้ปัญหาระดับ company-wide",
        skills: ["Technical Strategy", "Cross-org Influence", "Innovation", "Hiring & Culture"],
      },
    ],
    benefits: ["Remote work / Hybrid", "Flexible hours", "Learning budget", "Health insurance"],
    growthPath: "Junior → Mid → Senior → Staff/Principal → Engineering Manager / CTO",
  },
  {
    role: "Backend Developer",
    icon: "🔧",
    category: "dev",
    description: "สร้าง API, business logic, จัดการ database, ระบบหลังบ้านที่ขับเคลื่อนแอป",
    levels: [
      {
        level: "Intern / Trainee",
        years: "0 ปี",
        salaryRange: "10,000 - 18,000",
        salaryMin: 10000,
        salaryMax: 18000,
        description: "เรียนรู้การเขียน API เบื้องต้น ทำ CRUD ได้",
        skills: ["Node.js หรือ Python พื้นฐาน", "REST API เบื้องต้น", "SQL พื้นฐาน", "Git"],
      },
      {
        level: "Junior",
        years: "0-2 ปี",
        salaryRange: "20,000 - 40,000",
        salaryMin: 20000,
        salaryMax: 40000,
        description: "สร้าง API ได้ ออกแบบ database ง่ายๆ ได้ เข้าใจ authentication",
        skills: ["Express/NestJS/FastAPI", "PostgreSQL/MySQL", "Authentication (JWT)", "Docker เบื้องต้น", "Testing"],
      },
      {
        level: "Mid-level",
        years: "2-5 ปี",
        salaryRange: "40,000 - 75,000",
        salaryMin: 40000,
        salaryMax: 75000,
        description: "ออกแบบ system ได้ เข้าใจ caching, queue, microservices เบื้องต้น",
        skills: ["System Design", "Redis/Caching", "Message Queue", "Microservices", "CI/CD", "Monitoring"],
      },
      {
        level: "Senior",
        years: "5-8 ปี",
        salaryRange: "75,000 - 140,000",
        salaryMin: 75000,
        salaryMax: 140000,
        description: "ออกแบบ architecture ระดับ production ทำ tech decisions ให้ทีม",
        skills: ["Distributed Systems", "High Availability", "Database Optimization", "Security", "Tech Leadership"],
      },
      {
        level: "Staff / Principal",
        years: "8+ ปี",
        salaryRange: "140,000 - 250,000+",
        salaryMin: 140000,
        salaryMax: 250000,
        description: "กำหนด tech strategy ออกแบบระบบระดับ organization",
        skills: ["Platform Architecture", "Technical Vision", "Cross-team Strategy", "Scalability Expert"],
      },
    ],
    benefits: ["Remote work", "Flexible hours", "Conference budget", "Stock options (startup)"],
    growthPath: "Junior → Mid → Senior → Staff → Principal → VP of Engineering / CTO",
  },
  {
    role: "Full-Stack Developer",
    icon: "🔄",
    category: "dev",
    description: "ทำได้ทั้ง Frontend + Backend — เป็นที่ต้องการมากใน startup และทีมเล็ก",
    levels: [
      { level: "Junior", years: "0-2 ปี", salaryRange: "20,000 - 40,000", salaryMin: 20000, salaryMax: 40000, description: "ทำได้ทั้ง frontend + backend เบื้องต้น deploy ได้", skills: ["React + Node.js", "SQL + NoSQL", "REST API", "Git", "Basic deployment"] },
      { level: "Mid-level", years: "2-5 ปี", salaryRange: "40,000 - 80,000", salaryMin: 40000, salaryMax: 80000, description: "สร้างฟีเจอร์ end-to-end ได้เอง ออกแบบ database schema", skills: ["Next.js", "TypeScript", "Prisma/ORM", "Docker", "Testing", "CI/CD"] },
      { level: "Senior", years: "5-8 ปี", salaryRange: "80,000 - 150,000", salaryMin: 80000, salaryMax: 150000, description: "ออกแบบ architecture ทั้ง stack เลือก tech stack ให้โปรเจกต์", skills: ["System Architecture", "Performance", "Security", "Cloud Services", "Team Lead"] },
      { level: "Staff+", years: "8+ ปี", salaryRange: "150,000 - 250,000+", salaryMin: 150000, salaryMax: 250000, description: "Tech lead ระดับบริษัท กำหนดทิศทาง technical ทั้งองค์กร", skills: ["Technical Strategy", "Platform Design", "Hiring", "Mentoring"] },
    ],
    benefits: ["Startup equity", "Remote work", "Flexible hours", "Learning budget"],
    growthPath: "Junior → Mid → Senior → Tech Lead → CTO",
  },
  {
    role: "Mobile Developer",
    icon: "📱",
    category: "dev",
    description: "สร้างแอปมือถือ iOS / Android — Swift, Kotlin, React Native, Flutter",
    levels: [
      { level: "Junior", years: "0-2 ปี", salaryRange: "20,000 - 40,000", salaryMin: 20000, salaryMax: 40000, description: "สร้างแอปง่ายๆ ได้ เข้าใจ navigation, state, API call", skills: ["Swift/Kotlin หรือ Flutter/React Native", "UI Components", "REST API", "Git"] },
      { level: "Mid-level", years: "2-5 ปี", salaryRange: "40,000 - 80,000", salaryMin: 40000, salaryMax: 80000, description: "สร้างแอปซับซ้อน ทำ offline mode, push notification, payment", skills: ["Advanced UI", "Local Storage", "Push Notification", "CI/CD", "App Store deployment"] },
      { level: "Senior", years: "5-8 ปี", salaryRange: "80,000 - 140,000", salaryMin: 80000, salaryMax: 140000, description: "ออกแบบ architecture, performance optimization, lead ทีม", skills: ["App Architecture", "Performance", "Security", "Platform APIs", "Mentoring"] },
      { level: "Staff+", years: "8+ ปี", salaryRange: "140,000 - 220,000+", salaryMin: 140000, salaryMax: 220000, description: "กำหนด mobile strategy ระดับองค์กร", skills: ["Mobile Platform Strategy", "Cross-platform Decision", "Team Building"] },
    ],
    benefits: ["Device budget", "Remote work", "Conference", "Health insurance"],
    growthPath: "Junior → Mid → Senior → Mobile Lead → Engineering Manager",
  },

  // ─── DATA & AI ───
  {
    role: "Data Analyst",
    icon: "📊",
    category: "data",
    description: "วิเคราะห์ข้อมูลเพื่อหา insight ให้ธุรกิจ — SQL, Excel, Python, BI tools",
    levels: [
      { level: "Junior", years: "0-2 ปี", salaryRange: "18,000 - 35,000", salaryMin: 18000, salaryMax: 35000, description: "ดึงข้อมูล สร้าง report dashboard เบื้องต้น", skills: ["SQL", "Excel/Google Sheets", "Python (Pandas)", "Data Visualization"] },
      { level: "Mid-level", years: "2-5 ปี", salaryRange: "35,000 - 65,000", salaryMin: 35000, salaryMax: 65000, description: "วิเคราะห์เชิงลึก สร้าง dashboard ซับซ้อน เสนอ recommendation", skills: ["Advanced SQL", "Power BI/Tableau", "Statistical Analysis", "A/B Testing"] },
      { level: "Senior", years: "5+ ปี", salaryRange: "65,000 - 120,000", salaryMin: 65000, salaryMax: 120000, description: "นำ data team วาง data strategy ให้ธุรกิจ", skills: ["Data Strategy", "Stakeholder Management", "Advanced Analytics", "Team Lead"] },
    ],
    benefits: ["Remote work", "Learning budget", "Health insurance"],
    growthPath: "Junior Analyst → Senior Analyst → Lead → Head of Analytics / Data Manager",
  },
  {
    role: "Data Scientist",
    icon: "🧬",
    category: "data",
    description: "สร้าง model ML เพื่อทำนาย แนะนำ จำแนก — Python, ML, Statistics",
    levels: [
      { level: "Junior", years: "0-2 ปี", salaryRange: "25,000 - 45,000", salaryMin: 25000, salaryMax: 45000, description: "สร้าง model เบื้องต้น ทำ EDA, feature engineering", skills: ["Python", "Pandas/NumPy", "Scikit-learn", "Statistics", "SQL"] },
      { level: "Mid-level", years: "2-5 ปี", salaryRange: "45,000 - 90,000", salaryMin: 45000, salaryMax: 90000, description: "สร้าง production model ทำ experiment design ใช้ deep learning", skills: ["Deep Learning (PyTorch/TF)", "MLOps เบื้องต้น", "Experiment Design", "Feature Store"] },
      { level: "Senior", years: "5+ ปี", salaryRange: "90,000 - 180,000", salaryMin: 90000, salaryMax: 180000, description: "ออกแบบ ML strategy, นำทีม, publish research", skills: ["ML Architecture", "Research", "Team Leadership", "Business Impact"] },
    ],
    benefits: ["GPU access", "Conference budget", "Research time", "Remote work"],
    growthPath: "Junior DS → Senior DS → Lead DS → Head of AI / Chief Data Officer",
  },
  {
    role: "Data Engineer",
    icon: "🔄",
    category: "data",
    description: "สร้าง data pipeline, ETL, data warehouse — ทำให้ data พร้อมใช้งาน",
    levels: [
      { level: "Junior", years: "0-2 ปี", salaryRange: "22,000 - 40,000", salaryMin: 22000, salaryMax: 40000, description: "สร้าง ETL pipeline ง่ายๆ จัดการ database", skills: ["SQL", "Python", "ETL เบื้องต้น", "Cloud เบื้องต้น"] },
      { level: "Mid-level", years: "2-5 ปี", salaryRange: "40,000 - 80,000", salaryMin: 40000, salaryMax: 80000, description: "ออกแบบ data pipeline ซับซ้อน ใช้ Spark, Airflow", skills: ["Apache Spark", "Airflow", "Data Warehouse", "Streaming (Kafka)", "AWS/GCP"] },
      { level: "Senior", years: "5+ ปี", salaryRange: "80,000 - 160,000", salaryMin: 80000, salaryMax: 160000, description: "ออกแบบ data platform ระดับองค์กร", skills: ["Data Architecture", "Real-time Processing", "Cost Optimization", "Team Lead"] },
    ],
    benefits: ["Cloud credits", "Remote work", "Conference", "Certification budget"],
    growthPath: "Junior DE → Senior DE → Lead → Head of Data Engineering / Data Architect",
  },
  {
    role: "AI / ML Engineer",
    icon: "🤖",
    category: "data",
    description: "นำ ML model ไป deploy production — MLOps, model serving, monitoring",
    levels: [
      { level: "Junior", years: "0-2 ปี", salaryRange: "25,000 - 50,000", salaryMin: 25000, salaryMax: 50000, description: "Deploy model เบื้องต้น สร้าง API สำหรับ model", skills: ["Python", "Docker", "REST API", "ML Frameworks", "Git"] },
      { level: "Mid-level", years: "2-5 ปี", salaryRange: "50,000 - 100,000", salaryMin: 50000, salaryMax: 100000, description: "ออกแบบ ML pipeline, A/B testing, model monitoring", skills: ["MLOps (MLflow, Kubeflow)", "Kubernetes", "Model Optimization", "Feature Store"] },
      { level: "Senior", years: "5+ ปี", salaryRange: "100,000 - 200,000+", salaryMin: 100000, salaryMax: 200000, description: "ออกแบบ AI platform ระดับองค์กร นำ AI strategy", skills: ["AI Platform Architecture", "LLM Integration", "Cost Optimization", "Team Building"] },
    ],
    benefits: ["GPU cluster access", "Research time", "Conference", "Stock options"],
    growthPath: "Junior ML Eng → Senior → Lead → Head of AI / VP of AI",
  },

  // ─── DEVOPS & INFRA ───
  {
    role: "DevOps Engineer",
    icon: "☁️",
    category: "infra",
    description: "สร้าง CI/CD pipeline, จัดการ infrastructure, monitoring — ทำให้ deploy เร็วและเสถียร",
    levels: [
      { level: "Junior", years: "0-2 ปี", salaryRange: "22,000 - 40,000", salaryMin: 22000, salaryMax: 40000, description: "ใช้ Docker, ตั้ง CI/CD เบื้องต้น, จัดการ server", skills: ["Linux", "Docker", "Git/GitHub Actions", "Basic Networking", "Bash scripting"] },
      { level: "Mid-level", years: "2-5 ปี", salaryRange: "40,000 - 85,000", salaryMin: 40000, salaryMax: 85000, description: "ออกแบบ CI/CD pipeline, ใช้ Kubernetes, Infrastructure as Code", skills: ["Kubernetes", "Terraform", "AWS/GCP/Azure", "Monitoring (Grafana)", "Security"] },
      { level: "Senior", years: "5+ ปี", salaryRange: "85,000 - 160,000", salaryMin: 85000, salaryMax: 160000, description: "ออกแบบ platform ระดับองค์กร cost optimization reliability", skills: ["Platform Engineering", "Multi-cloud", "SRE Practices", "Cost Optimization", "Team Lead"] },
    ],
    benefits: ["Remote work", "On-call allowance", "Certification budget", "Conference"],
    growthPath: "Junior DevOps → Senior → Lead → Platform Engineer → VP of Infrastructure",
  },
  {
    role: "Cloud Engineer",
    icon: "🌩️",
    category: "infra",
    description: "ออกแบบและจัดการ cloud infrastructure — AWS, GCP, Azure",
    levels: [
      { level: "Junior", years: "0-2 ปี", salaryRange: "22,000 - 40,000", salaryMin: 22000, salaryMax: 40000, description: "ใช้ cloud services เบื้องต้น EC2, S3, RDS", skills: ["AWS/GCP เบื้องต้น", "Linux", "Networking", "IAM"] },
      { level: "Mid-level", years: "2-5 ปี", salaryRange: "45,000 - 90,000", salaryMin: 45000, salaryMax: 90000, description: "ออกแบบ architecture บน cloud, IaC, cost optimization", skills: ["Multi-service Architecture", "Terraform/CDK", "Serverless", "Security", "Monitoring"] },
      { level: "Senior", years: "5+ ปี", salaryRange: "90,000 - 180,000", salaryMin: 90000, salaryMax: 180000, description: "Cloud architect ระดับองค์กร multi-cloud strategy", skills: ["Solution Architecture", "Multi-cloud", "Compliance", "Cost Management", "Leadership"] },
    ],
    benefits: ["Cloud certification", "Remote work", "Learning budget", "Conference"],
    growthPath: "Junior → Senior → Cloud Architect → Head of Cloud / VP of Engineering",
  },

  // ─── PRODUCT & DESIGN ───
  {
    role: "UX/UI Designer",
    icon: "🎨",
    category: "product",
    description: "ออกแบบ user experience และ interface — Figma, user research, prototyping",
    levels: [
      { level: "Junior", years: "0-2 ปี", salaryRange: "18,000 - 35,000", salaryMin: 18000, salaryMax: 35000, description: "ออกแบบ UI ตาม spec ทำ wireframe prototype", skills: ["Figma", "UI Design", "Wireframing", "Design System เบื้องต้น"] },
      { level: "Mid-level", years: "2-5 ปี", salaryRange: "35,000 - 70,000", salaryMin: 35000, salaryMax: 70000, description: "ทำ user research, สร้าง design system, วิเคราะห์ usability", skills: ["User Research", "Usability Testing", "Design System", "Interaction Design", "Accessibility"] },
      { level: "Senior", years: "5+ ปี", salaryRange: "70,000 - 130,000", salaryMin: 70000, salaryMax: 130000, description: "นำ design team กำหนด design direction ระดับองค์กร", skills: ["Design Strategy", "Design Leadership", "Cross-functional Collaboration", "Mentoring"] },
    ],
    benefits: ["Figma license", "Design tools budget", "Remote work", "Conference"],
    growthPath: "Junior Designer → Senior → Lead Designer → Head of Design / VP of Design",
  },
  {
    role: "Product Manager",
    icon: "📋",
    category: "product",
    description: "กำหนดทิศทางผลิตภัณฑ์ — ประสาน business + tech + design ให้ไปในทางเดียวกัน",
    levels: [
      { level: "Associate PM", years: "0-2 ปี", salaryRange: "25,000 - 45,000", salaryMin: 25000, salaryMax: 45000, description: "ช่วย PM รุ่นพี่ เก็บ requirement เขียน user story", skills: ["Agile/Scrum", "User Story Writing", "Data Analysis", "Communication"] },
      { level: "Product Manager", years: "2-5 ปี", salaryRange: "45,000 - 90,000", salaryMin: 45000, salaryMax: 90000, description: "ดูแลผลิตภัณฑ์ 1-2 ตัว กำหนด roadmap sprint planning", skills: ["Product Strategy", "Roadmapping", "Stakeholder Management", "Metrics/KPIs", "A/B Testing"] },
      { level: "Senior PM / Group PM", years: "5+ ปี", salaryRange: "90,000 - 180,000", salaryMin: 90000, salaryMax: 180000, description: "ดูแลหลาย product lines กำหนด product vision", skills: ["Product Vision", "Business Strategy", "Team Leadership", "Revenue/P&L"] },
    ],
    benefits: ["Stock options", "Remote work", "Conference", "Learning budget"],
    growthPath: "Associate PM → PM → Senior PM → Group PM → VP of Product / CPO",
  },

  // ─── MANAGEMENT & LEAD ───
  {
    role: "Engineering Manager",
    icon: "👔",
    category: "management",
    description: "นำทีม dev — ดูแลคน กระบวนการ delivery ให้ทีมส่งมอบงานได้ดี",
    levels: [
      { level: "Team Lead", years: "3-5 ปี", salaryRange: "50,000 - 90,000", salaryMin: 50000, salaryMax: 90000, description: "นำทีม 3-5 คน ทำ code review sprint planning", skills: ["Technical Leadership", "Code Review", "Sprint Planning", "Mentoring", "1:1 meetings"] },
      { level: "Engineering Manager", years: "5-8 ปี", salaryRange: "90,000 - 160,000", salaryMin: 90000, salaryMax: 160000, description: "นำทีม 5-12 คน ดูแล hiring performance career path", skills: ["People Management", "Hiring", "Performance Review", "Cross-team Coordination", "Budget"] },
      { level: "Director / VP", years: "8+ ปี", salaryRange: "160,000 - 350,000+", salaryMin: 160000, salaryMax: 350000, description: "ดูแลหลายทีม กำหนดทิศทาง engineering ทั้งองค์กร", skills: ["Org Design", "Technical Strategy", "Executive Communication", "Culture Building"] },
    ],
    benefits: ["Stock options", "Company car (Director+)", "Executive health check", "Conference budget"],
    growthPath: "Senior Dev → Team Lead → EM → Director → VP of Engineering / CTO",
  },
  {
    role: "Scrum Master / Agile Coach",
    icon: "📐",
    category: "management",
    description: "ช่วยทีมทำงานแบบ Agile/Scrum ให้มีประสิทธิภาพ — ลด blocker, ปรับปรุง process",
    levels: [
      { level: "Scrum Master", years: "0-3 ปี", salaryRange: "30,000 - 55,000", salaryMin: 30000, salaryMax: 55000, description: "facilitate Sprint ceremonies ช่วย team ลด impediments", skills: ["Scrum Framework", "Facilitation", "Conflict Resolution", "Jira/Tools"] },
      { level: "Senior SM", years: "3-6 ปี", salaryRange: "55,000 - 95,000", salaryMin: 55000, salaryMax: 95000, description: "ดูแลหลายทีม สอน Agile ให้ทั้งองค์กร", skills: ["SAFe/LeSS", "Coaching", "Metrics & Improvement", "Change Management"] },
      { level: "Agile Coach", years: "6+ ปี", salaryRange: "95,000 - 180,000", salaryMin: 95000, salaryMax: 180000, description: "transform องค์กรให้เป็น Agile วาง framework ระดับ enterprise", skills: ["Enterprise Agility", "Organizational Coaching", "Leadership Coaching", "Culture Change"] },
    ],
    benefits: ["Certification budget (CSM, PSM, SAFe)", "Conference", "Remote work"],
    growthPath: "Scrum Master → Senior SM → Agile Coach → Head of Agile / Transformation Lead",
  },

  // ─── SECURITY & QA ───
  {
    role: "QA Engineer / SDET",
    icon: "🧪",
    category: "security",
    description: "ทดสอบซอฟต์แวร์ให้มีคุณภาพ — manual testing, automation, performance testing",
    levels: [
      { level: "Junior", years: "0-2 ปี", salaryRange: "18,000 - 30,000", salaryMin: 18000, salaryMax: 30000, description: "ทดสอบ manual ตาม test cases เรียนรู้ automation", skills: ["Manual Testing", "Test Cases", "Bug Reporting", "SQL เบื้องต้น"] },
      { level: "Mid-level", years: "2-5 ปี", salaryRange: "30,000 - 60,000", salaryMin: 30000, salaryMax: 60000, description: "เขียน automation test ทำ API testing performance testing", skills: ["Playwright/Cypress", "API Testing", "CI/CD Integration", "Performance Testing"] },
      { level: "Senior / SDET", years: "5+ ปี", salaryRange: "60,000 - 120,000", salaryMin: 60000, salaryMax: 120000, description: "ออกแบบ test strategy, framework, quality processes ทั้งองค์กร", skills: ["Test Architecture", "Framework Design", "Quality Strategy", "Team Lead"] },
    ],
    benefits: ["Remote work", "Certification budget", "Testing tools budget"],
    growthPath: "Junior QA → Senior QA → SDET → QA Lead → Head of Quality",
  },
  {
    role: "Security Engineer",
    icon: "🔒",
    category: "security",
    description: "ปกป้องระบบจากภัยคุกคาม — penetration testing, security audit, incident response",
    levels: [
      { level: "Junior", years: "0-2 ปี", salaryRange: "22,000 - 40,000", salaryMin: 22000, salaryMax: 40000, description: "ทำ security scanning เบื้องต้น ศึกษา OWASP Top 10", skills: ["OWASP Top 10", "Linux", "Networking", "Security Tools (Burp Suite)"] },
      { level: "Mid-level", years: "2-5 ปี", salaryRange: "45,000 - 90,000", salaryMin: 45000, salaryMax: 90000, description: "ทำ penetration testing security audit code review", skills: ["Penetration Testing", "Security Audit", "SIEM", "Incident Response", "Cloud Security"] },
      { level: "Senior", years: "5+ ปี", salaryRange: "90,000 - 180,000+", salaryMin: 90000, salaryMax: 180000, description: "ออกแบบ security architecture กำหนด security policy ทั้งองค์กร", skills: ["Security Architecture", "Compliance (ISO 27001, PCI-DSS)", "Risk Management", "Team Lead"] },
    ],
    benefits: ["Bug bounty access", "Certification (CISSP, CEH, OSCP)", "Conference", "Remote work"],
    growthPath: "Junior → Senior → Security Architect → CISO",
  },
];

export const benefitsGuide = [
  { icon: "🏥", title: "ประกันสุขภาพ", description: "บริษัท tech ส่วนใหญ่มีประกันสุขภาพกลุ่ม ครอบคลุม OPD/IPD บางที่รวมทันตกรรม สายตา ครอบครัว" },
  { icon: "🏡", title: "Remote / Hybrid Work", description: "70%+ ของบริษัท tech อนุญาตให้ WFH อย่างน้อย 2-3 วัน/สัปดาห์ บางที่ full remote" },
  { icon: "⏰", title: "Flexible Hours", description: "ไม่ต้องเข้า 9 โมง หลายบริษัทให้เลือกเวลาเริ่มงาน 8-10 โมง ดูที่ผลงานมากกว่าเวลา" },
  { icon: "📚", title: "Learning Budget", description: "งบเรียนรู้ 10,000-50,000 บาท/ปี ใช้ซื้อคอร์ส หนังสือ ไปงาน conference certification" },
  { icon: "🎮", title: "สวัสดิการอื่นๆ", description: "อาหารกลางวันฟรี, snack bar, game room, gym, ลาพักร้อน 10-15 วัน, วันเกิดหยุด" },
  { icon: "📈", title: "โบนัส", description: "โบนัส 1-6 เดือน ขึ้นกับผลงานและผลประกอบการ บางที่มี performance bonus แยก" },
  { icon: "💰", title: "Provident Fund", description: "กองทุนสำรองเลี้ยงชีพ บริษัทสมทบ 3-10% startup บางที่มี ESOP/Stock option แทน" },
  { icon: "🌍", title: "โอกาสต่างประเทศ", description: "บริษัทข้ามชาติมี relocation program ไปสิงคโปร์ ญี่ปุ่น ยุโรป เงินเดือน x2-x5" },
];

export const salaryFactors = [
  { factor: "ขนาดบริษัท", impact: "startup จ่ายน้อยกว่า แต่มี equity/stock option — บริษัทใหญ่จ่ายเยอะกว่า มี สวัสดิการดี" },
  { factor: "อุตสาหกรรม", impact: "FinTech, E-commerce, Agoda/LINE เงินเดือนสูงกว่า agency/outsource 30-50%" },
  { factor: "ภาษาที่ใช้", impact: "Go, Rust, Scala สูงกว่า — PHP, WordPress ต่ำกว่า — JavaScript/Python ปานกลาง-สูง" },
  { factor: "Location", impact: "กรุงเทพสูงกว่าต่างจังหวัด 20-40% — Remote work ต่างประเทศได้เงินเดือนสูงมาก" },
  { factor: "ภาษาอังกฤษ", impact: "ถ้าทำงานกับ international team หรือบริษัทต่างชาติ เงินเดือนสูงกว่า 30-50%" },
  { factor: "Portfolio & GitHub", impact: "มี portfolio ดี open-source contributions เจรจาเงินเดือนได้สูงขึ้น" },
  { factor: "Certification", impact: "AWS/GCP/Azure cert เพิ่มเงินเดือน 10-20% โดยเฉพาะสาย DevOps/Cloud" },
  { factor: "Negotiation", impact: "การเจรจาสำคัญมาก — อย่ารีบตอบรับ offer แรก ถาม range ก่อน counter offer ได้" },
];
