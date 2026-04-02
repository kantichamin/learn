export interface TraineeProgram {
  company: string;
  icon: string;
  type: "corporate" | "startup" | "agency" | "bank" | "telco" | "consulting";
  programName: string;
  duration: string;
  paid: boolean;
  salaryRange: string;
  positions: string[];
  requirements: string[];
  benefits: string[];
  applyPeriod: string;
  url: string;
}

export interface TraineeTip {
  title: string;
  icon: string;
  items: string[];
}

export const programTypes = [
  { key: "corporate", label: "องค์กรใหญ่", icon: "🏢" },
  { key: "bank", label: "ธนาคาร/การเงิน", icon: "🏦" },
  { key: "telco", label: "Telco/Tech", icon: "📡" },
  { key: "startup", label: "Startup", icon: "🚀" },
  { key: "consulting", label: "Consulting/SI", icon: "💼" },
  { key: "agency", label: "Agency/Outsource", icon: "🏗️" },
];

export const traineePrograms: TraineeProgram[] = [
  {
    company: "SCB (ไทยพาณิชย์)",
    icon: "🏦",
    type: "bank",
    programName: "SCB Academy / SCB TechX Trainee",
    duration: "3-6 เดือน",
    paid: true,
    salaryRange: "15,000 - 20,000 บาท/เดือน",
    positions: ["Software Engineer Intern", "Data Analyst Intern", "UX/UI Intern", "Product Intern"],
    requirements: ["กำลังศึกษาหรือจบใหม่ปี 3-4", "สาย IT, CS, Engineering หรือที่เกี่ยวข้อง", "มีผลงาน/portfolio จะพิจารณาเป็นพิเศษ", "ภาษาอังกฤษระดับสื่อสารได้"],
    benefits: ["เรียนรู้ระบบ Banking ขนาดใหญ่", "Mentor 1:1 จาก Senior", "โอกาสบรรจุเป็นพนักงานจริง", "ได้ network กับคนใน FinTech"],
    applyPeriod: "ม.ค. - มี.ค. (รอบ 1), ก.ค. - ก.ย. (รอบ 2)",
    url: "https://www.scb.co.th/th/about-us/careers.html",
  },
  {
    company: "KBTG (กสิกร)",
    icon: "🏦",
    type: "bank",
    programName: "KBTG Kampus",
    duration: "3-4 เดือน (summer)",
    paid: true,
    salaryRange: "18,000 - 25,000 บาท/เดือน",
    positions: ["Software Engineer", "Data Engineer", "Mobile Developer", "DevOps", "QA Engineer"],
    requirements: ["นิสิต/นักศึกษาปี 3-4 หรือ ป.โท", "สาย CS, IT, Engineering", "เขียนโปรแกรมได้อย่างน้อย 1 ภาษา", "ผ่านการสอบ coding test"],
    benefits: ["ทำโปรเจกต์จริงกับทีม", "Tech stack ทันสมัย — Kubernetes, Microservices", "เงินเดือนสูงสุดในกลุ่ม banking intern", "โอกาสบรรจุสูง", "อาหารกลางวันฟรี + สวัสดิการดี"],
    applyPeriod: "ก.พ. - เม.ย. ของทุกปี",
    url: "https://www.kbtg.tech",
  },
  {
    company: "AIS",
    icon: "📡",
    type: "telco",
    programName: "AIS Academy / Digital Intelligence Internship",
    duration: "3-6 เดือน",
    paid: true,
    salaryRange: "12,000 - 18,000 บาท/เดือน",
    positions: ["Software Developer", "Data Analyst", "Network Engineer", "Digital Marketing", "Product Management"],
    requirements: ["นิสิต/นักศึกษาปี 3-4", "สาย IT, Telecom, Engineering, Business", "ภาษาอังกฤษพอใช้ได้"],
    benefits: ["ได้เรียนรู้ธุรกิจ Telecom + Digital", "Rotation ไปหลายแผนก", "โอกาสบรรจุเป็นพนักงาน", "สวัสดิการระหว่าง intern"],
    applyPeriod: "ม.ค. - มี.ค.",
    url: "https://www.ais.th/careers",
  },
  {
    company: "True Digital",
    icon: "📡",
    type: "telco",
    programName: "True Digital Park Internship",
    duration: "3-4 เดือน",
    paid: true,
    salaryRange: "12,000 - 18,000 บาท/เดือน",
    positions: ["Frontend Developer", "Backend Developer", "Data Science", "DevOps"],
    requirements: ["กำลังศึกษาระดับ ป.ตรี หรือ ป.โท", "เขียนโปรแกรมได้", "มี passion ด้าน tech"],
    benefits: ["ทำงานใน True Digital Park — co-working ที่ดีที่สุด", "ได้ network กับ startup community", "Mentor จากทีม dev จริง"],
    applyPeriod: "ตลอดปี (rolling)",
    url: "https://www.truedigital.com/careers",
  },
  {
    company: "Agoda",
    icon: "🏢",
    type: "corporate",
    programName: "Agoda Internship Program",
    duration: "3-6 เดือน",
    paid: true,
    salaryRange: "25,000 - 40,000 บาท/เดือน",
    positions: ["Software Engineer Intern", "Data Scientist Intern", "Product Manager Intern", "UX Researcher"],
    requirements: ["กำลังศึกษาหรือจบใหม่ CS, Engineering", "ผ่าน coding interview (LeetCode level)", "ภาษาอังกฤษดี (ทำงานเป็นอังกฤษ)", "มีประสบการณ์ project ส่วนตัว"],
    benefits: ["เงินเดือน intern สูงมาก", "ทำงานกับทีม international", "Tech stack ระดับโลก — Java, Scala, React", "โอกาสบรรจุสูง เงินเดือนเริ่มต้นสูง", "Office ใจกลางกรุงเทพ"],
    applyPeriod: "ก.ย. - พ.ย. (รอบ summer ปีถัดไป)",
    url: "https://careersatagoda.com",
  },
  {
    company: "LINE MAN Wongnai",
    icon: "🏢",
    type: "corporate",
    programName: "LINE MAN Wongnai Internship",
    duration: "3-4 เดือน",
    paid: true,
    salaryRange: "18,000 - 28,000 บาท/เดือน",
    positions: ["Software Engineer", "Mobile Developer", "Backend Engineer", "Data Engineer", "QA Engineer"],
    requirements: ["นิสิต/นักศึกษาปี 3-4 สาย CS/IT", "เขียนโปรแกรมได้ดี", "ผ่าน coding test + interview", "มี portfolio หรือ GitHub"],
    benefits: ["ทำงานกับผลิตภัณฑ์ที่คนไทยใช้จริง", "Tech stack ทันสมัย", "Culture ดี work-life balance", "โอกาสบรรจุ", "อาหารฟรี"],
    applyPeriod: "ม.ค. - มี.ค.",
    url: "https://corporate.lineman.wongnai.com/career",
  },
  {
    company: "2C2P / Omise (Opn)",
    icon: "🏢",
    type: "startup",
    programName: "FinTech Internship",
    duration: "3-6 เดือน",
    paid: true,
    salaryRange: "15,000 - 25,000 บาท/เดือน",
    positions: ["Backend Engineer", "Frontend Engineer", "QA Engineer", "DevOps"],
    requirements: ["สาย CS, IT, Engineering", "เข้าใจ REST API, database", "มี GitHub/portfolio"],
    benefits: ["เรียนรู้ Payment system จริง", "Tech stack ทันสมัย — Go, Ruby, React", "ทีมเล็ก ได้ทำงานจริงเยอะ", "International team"],
    applyPeriod: "ตลอดปี",
    url: "https://www.opn.ooo/th/careers",
  },
  {
    company: "Accenture Thailand",
    icon: "💼",
    type: "consulting",
    programName: "Accenture Graduate Program / Intern",
    duration: "3-12 เดือน",
    paid: true,
    salaryRange: "15,000 - 22,000 บาท/เดือน",
    positions: ["Technology Consultant", "Software Engineer", "Data Analyst", "Cloud Engineer"],
    requirements: ["จบใหม่หรือกำลังศึกษาปี 4", "สาย IT, CS, Business, Engineering", "ภาษาอังกฤษดี", "GPA 2.75+"],
    benefits: ["เรียนรู้ consulting methodology", "ได้ทำงานกับลูกค้าหลายอุตสาหกรรม", "Training program เยอะ", "โอกาสไปต่างประเทศ", "Career path ชัดเจน"],
    applyPeriod: "ม.ค. - เม.ย.",
    url: "https://www.accenture.com/th-en/careers",
  },
];

export const preparationTips: TraineeTip[] = [
  {
    title: "เตรียม Portfolio / GitHub ให้พร้อม",
    icon: "📁",
    items: [
      "สร้างโปรเจกต์ส่วนตัว 2-3 ชิ้น ที่ใช้งานได้จริง",
      "เขียน README อธิบายโปรเจกต์ ปัญหาที่แก้ tech ที่ใช้",
      "Deploy โปรเจกต์ขึ้น Vercel/Netlify ให้เปิดดูได้",
      "มี commit history สม่ำเสมอ — แสดงว่าเขียนโค้ดจริง",
      "ทำ personal website เป็น portfolio ของตัวเอง",
    ],
  },
  {
    title: "ฝึก Coding Interview",
    icon: "💻",
    items: [
      "ฝึก LeetCode — เริ่มจาก Easy 50 ข้อ แล้วค่อยขยับ Medium",
      "เข้าใจ Data Structures: Array, Hash Map, Stack, Queue, Tree",
      "เข้าใจ Algorithms: Sorting, Binary Search, BFS/DFS, Dynamic Programming",
      "ฝึกอธิบายวิธีคิด — พูดไปทำไป (Thinking out loud)",
      "จับเวลา — ข้อละ 20-30 นาที เหมือนสอบจริง",
    ],
  },
  {
    title: "สร้าง Network / Connection",
    icon: "🤝",
    items: [
      "เข้าร่วม community: Thai Programmer, Borntodev, DevMountain",
      "ไป meetup / conference: BKK.js, PyCon Thailand, DevFest",
      "LinkedIn — สร้าง profile ดีๆ connect กับคนในสาย",
      "Twitter/X — follow dev ไทย แชร์สิ่งที่เรียนรู้",
      "สมัคร Discord/Slack group ของ community ที่สนใจ",
      "ทำ open-source — contribute ให้ project ที่ใช้",
      "เขียน blog สรุปสิ่งที่เรียนรู้ — แสดงว่าเรียนรู้ตลอด",
    ],
  },
  {
    title: "เตรียมตัวสัมภาษณ์",
    icon: "🎤",
    items: [
      "เตรียมตอบ \"แนะนำตัวเอง\" ให้กระชับ 1-2 นาที",
      "เตรียมเล่าโปรเจกต์ที่ทำ — ปัญหาอะไร แก้ยังไง เรียนรู้อะไร",
      "ศึกษาบริษัทก่อนสัมภาษณ์ — ทำอะไร ใช้ tech อะไร culture เป็นยังไง",
      "เตรียมคำถามถามกลับ — แสดงว่าสนใจจริง",
      "ฝึก system design เบื้องต้น — ออกแบบ URL shortener, chat app",
      "แต่งตัวสุภาพ มาตรงเวลา ยิ้มแย้ม มั่นใจ",
    ],
  },
  {
    title: "ทักษะที่บริษัทต้องการจริงๆ",
    icon: "🎯",
    items: [
      "เขียนโค้ดได้จริง — ไม่ใช่แค่ copy จาก tutorial",
      "ใช้ Git เป็น — branch, commit, PR, code review",
      "อ่าน document ภาษาอังกฤษได้ — doc ส่วนใหญ่เป็นอังกฤษ",
      "แก้ปัญหาเป็น — debug, google, อ่าน error message",
      "ทำงานเป็นทีมได้ — communicate, ถามเมื่อไม่เข้าใจ",
      "เรียนรู้เร็ว — tech เปลี่ยนตลอด สิ่งสำคัญคือเรียนรู้ได้เร็ว",
      "มี Growth Mindset — ไม่กลัวผิด ไม่กลัวถาม",
    ],
  },
];

export const networkingChannels = [
  { name: "Thai Programmer Association", type: "Community", url: "https://www.thaiprogrammer.org", description: "ชุมชน programmer ไทยที่ใหญ่ที่สุด มี meetup, conference, job board" },
  { name: "Borntodev", type: "Learning Platform", url: "https://www.borntodev.com", description: "แพลตฟอร์มเรียน programming ภาษาไทย มี community และ job matching" },
  { name: "BKK.js", type: "Meetup", url: "https://www.meetup.com/bkk-js", description: "Meetup สำหรับ JavaScript developer ในกรุงเทพ จัดทุกเดือน" },
  { name: "PyCon Thailand", type: "Conference", url: "https://th.pycon.org", description: "Conference ประจำปีของ Python community ในไทย" },
  { name: "Google Developer Group (GDG)", type: "Community", url: "https://gdg.community.dev", description: "Community จาก Google จัด DevFest, Study Jams, meetup" },
  { name: "Creatorsgarten", type: "Community", url: "https://creatorsgarten.org", description: "ชุมชน creator ไทย จัด hackathon, workshop, meetup สนุกมาก" },
  { name: "LinkedIn", type: "Professional Network", url: "https://www.linkedin.com", description: "สร้าง profile, connect กับคนในสาย, หางาน/intern" },
  { name: "Facebook Groups", type: "Social", url: "#", description: "กลุ่ม: สมาคม Programmer ไทย, React Thailand, Node.js Thailand" },
];
