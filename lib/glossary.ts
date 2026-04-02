export interface GlossaryTerm {
  term: string;
  thai: string;
  category: string;
  definition: string;
  example?: string;
}

export const glossaryCategories = [
  { key: "general", label: "ทั่วไป", icon: "💡" },
  { key: "frontend", label: "Frontend", icon: "🎨" },
  { key: "backend", label: "Backend", icon: "🔧" },
  { key: "database", label: "Database", icon: "🗃️" },
  { key: "devops", label: "DevOps & Cloud", icon: "☁️" },
  { key: "git", label: "Git & Version Control", icon: "🔀" },
  { key: "network", label: "Network & Security", icon: "🌐" },
  { key: "ai", label: "AI & Data", icon: "🤖" },
  { key: "agile", label: "Agile & Process", icon: "📐" },
  { key: "testing", label: "Testing & QA", icon: "🧪" },
];

export const glossary: GlossaryTerm[] = [
  // ─── GENERAL ───
  { term: "Algorithm", thai: "อัลกอริทึม", category: "general", definition: "ขั้นตอนหรือวิธีการแก้ปัญหาอย่างเป็นระบบ เหมือนสูตรอาหารที่บอกว่าต้องทำอะไรก่อนหลัง", example: "Sorting algorithm เรียงข้อมูลจากน้อยไปมาก" },
  { term: "API", thai: "เอพีไอ", category: "general", definition: "Application Programming Interface — ช่องทางที่แอปหนึ่งคุยกับอีกแอปหนึ่ง เหมือนพนักงานเสิร์ฟที่รับ order จากลูกค้าไปส่งครัว", example: "fetch('/api/users') เรียก API เพื่อดึงข้อมูลผู้ใช้" },
  { term: "Argument", thai: "อาร์กิวเมนต์", category: "general", definition: "ค่าที่ส่งเข้าไปในฟังก์ชัน", example: "greet('สมชาย') — 'สมชาย' คือ argument" },
  { term: "Array", thai: "อาร์เรย์", category: "general", definition: "โครงสร้างข้อมูลที่เก็บหลายค่าเรียงกัน เข้าถึงด้วย index (เริ่มจาก 0)", example: "const fruits = ['แอปเปิ้ล', 'กล้วย', 'ส้ม']" },
  { term: "Boolean", thai: "บูลีน", category: "general", definition: "ข้อมูลที่มีค่าได้แค่ true หรือ false — ใช่หรือไม่ใช่", example: "const isLoggedIn = true" },
  { term: "Bug", thai: "บัก", category: "general", definition: "ข้อผิดพลาดในโค้ดที่ทำให้โปรแกรมทำงานไม่ถูกต้อง", example: "\"มี bug ตอน login ถ้ากรอก email ว่าง แอปจะพัง\"" },
  { term: "Cache", thai: "แคช", category: "general", definition: "เก็บข้อมูลไว้ชั่วคราวเพื่อให้เข้าถึงเร็วขึ้น ไม่ต้องไปดึงใหม่ทุกครั้ง", example: "เบราว์เซอร์ cache รูปภาพไว้ ครั้งหน้าเปิดเว็บเร็วขึ้น" },
  { term: "Callback", thai: "คอลแบ็ก", category: "general", definition: "ฟังก์ชันที่ส่งเข้าไปเป็นพารามิเตอร์ของฟังก์ชันอื่น แล้วถูกเรียกทีหลัง", example: "button.addEventListener('click', handleClick)" },
  { term: "Class", thai: "คลาส", category: "general", definition: "พิมพ์เขียวสำหรับสร้าง object — กำหนดว่ามี property และ method อะไรบ้าง", example: "class User { name: string; login() {} }" },
  { term: "CLI", thai: "ซีแอลไอ", category: "general", definition: "Command Line Interface — เครื่องมือที่ใช้ผ่านการพิมพ์คำสั่งใน terminal", example: "npm, git, docker ล้วนเป็น CLI" },
  { term: "Compile", thai: "คอมไพล์", category: "general", definition: "แปลงโค้ดจากภาษาหนึ่งเป็นอีกภาษาหนึ่ง เช่น TypeScript → JavaScript", example: "tsc index.ts คอมไพล์ TypeScript เป็น JavaScript" },
  { term: "Component", thai: "คอมโพเนนต์", category: "general", definition: "ชิ้นส่วน UI ที่เป็นอิสระ สร้างครั้งเดียว ใช้ซ้ำได้หลายที่", example: "<Button>, <Navbar>, <Card> ใน React" },
  { term: "Constant", thai: "ค่าคงที่", category: "general", definition: "ตัวแปรที่กำหนดค่าแล้วเปลี่ยนไม่ได้", example: "const PI = 3.14159" },
  { term: "Debug", thai: "ดีบัก", category: "general", definition: "กระบวนการหาและแก้ไข bug ในโค้ด", example: "\"ผมกำลัง debug ปัญหา login อยู่\"" },
  { term: "Dependency", thai: "ดีเพนเดนซี", category: "general", definition: "Library หรือ package ที่โปรเจกต์ต้องใช้", example: "react, next, prisma คือ dependencies ของโปรเจกต์นี้" },
  { term: "Deploy", thai: "ดีพลอย", category: "general", definition: "นำแอปขึ้นไปรันบน server จริง ให้คนอื่นเข้าใช้งานได้", example: "\"deploy ขึ้น Vercel เรียบร้อยแล้ว\"" },
  { term: "Deprecated", thai: "เลิกใช้แล้ว", category: "general", definition: "ฟีเจอร์ที่ยังใช้ได้แต่ไม่แนะนำ เพราะจะถูกลบในอนาคต", example: "componentWillMount() is deprecated ใน React" },
  { term: "DRY", thai: "ดราย", category: "general", definition: "Don't Repeat Yourself — อย่าเขียนโค้ดซ้ำ ถ้าซ้ำให้แยกเป็นฟังก์ชัน", example: "เจอโค้ดเหมือนกัน 3 ที่ → extract เป็น function" },
  { term: "Environment Variable", thai: "ตัวแปรสภาพแวดล้อม", category: "general", definition: "ค่า config ที่เก็บนอกโค้ด เช่น API key, database URL เก็บในไฟล์ .env", example: "DATABASE_URL=postgresql://user:pass@host/db" },
  { term: "Framework", thai: "เฟรมเวิร์ก", category: "general", definition: "โครงสร้างสำเร็จรูปที่ช่วยสร้างแอป มีกฎและโครงสร้างให้ทำตาม", example: "Next.js, Django, Express เป็น framework" },
  { term: "Function", thai: "ฟังก์ชัน", category: "general", definition: "ก้อนโค้ดที่ทำงานเฉพาะอย่าง เรียกใช้ซ้ำได้", example: "function add(a, b) { return a + b }" },
  { term: "IDE", thai: "ไอดีอี", category: "general", definition: "Integrated Development Environment — โปรแกรมสำหรับเขียนโค้ด มี editor, terminal, debugger ในตัว", example: "VS Code, WebStorm, IntelliJ เป็น IDE" },
  { term: "Interface", thai: "อินเทอร์เฟส", category: "general", definition: "กำหนด \"รูปร่าง\" ของ object ว่าต้องมี property อะไรบ้าง (ใน TypeScript)", example: "interface User { name: string; age: number }" },
  { term: "JSON", thai: "เจสัน", category: "general", definition: "JavaScript Object Notation — รูปแบบข้อมูลที่ใช้แลกเปลี่ยนข้อมูลระหว่างระบบ", example: '{ "name": "สมชาย", "age": 20 }' },
  { term: "Library", thai: "ไลบรารี", category: "general", definition: "ชุดโค้ดสำเร็จรูปที่คนอื่นเขียนไว้ให้เราเรียกใช้ ต่างจาก framework ตรงที่เราเป็นคนเรียก", example: "Axios, Lodash, day.js เป็น library" },
  { term: "Loop", thai: "ลูป", category: "general", definition: "การทำงานซ้ำๆ จนกว่าจะครบเงื่อนไข", example: "for (let i = 0; i < 10; i++) { ... }" },
  { term: "MVP", thai: "เอ็มวีพี", category: "general", definition: "Minimum Viable Product — เวอร์ชันแรกของแอปที่มีฟีเจอร์น้อยที่สุดแต่ใช้ได้จริง", example: "MVP ของ Grab = แค่เรียกรถ + จ่ายเงินสด" },
  { term: "Null / Undefined", thai: "ว่างเปล่า", category: "general", definition: "null = ตั้งใจให้ว่าง, undefined = ยังไม่ได้กำหนดค่า", example: "let x; // undefined vs let x = null; // null" },
  { term: "Object", thai: "อ็อบเจกต์", category: "general", definition: "โครงสร้างข้อมูลที่เก็บเป็นคู่ key-value", example: "const user = { name: 'สมชาย', age: 20 }" },
  { term: "Open Source", thai: "โอเพนซอร์ส", category: "general", definition: "ซอฟต์แวร์ที่เปิดเผยซอร์สโค้ดให้ทุกคนดู แก้ไข และใช้ได้ฟรี", example: "Linux, React, Next.js เป็น open source" },
  { term: "Package", thai: "แพ็กเกจ", category: "general", definition: "ชุดโค้ดที่ถูกบรรจุพร้อมใช้ ติดตั้งผ่าน package manager เช่น npm", example: "npm install axios — ติดตั้ง package axios" },
  { term: "Parameter", thai: "พารามิเตอร์", category: "general", definition: "ตัวแปรที่ประกาศในฟังก์ชันเพื่อรับค่า", example: "function greet(name) {} — name คือ parameter" },
  { term: "Recursion", thai: "รีเคอร์ชัน", category: "general", definition: "ฟังก์ชันที่เรียกตัวเองซ้ำจนกว่าจะถึง base case", example: "function factorial(n) { if (n <= 1) return 1; return n * factorial(n-1); }" },
  { term: "Refactor", thai: "รีแฟกเตอร์", category: "general", definition: "ปรับปรุงโค้ดให้ดีขึ้นโดยไม่เปลี่ยนพฤติกรรม — สะอาดขึ้น เร็วขึ้น อ่านง่ายขึ้น", example: "\"refactor ฟังก์ชันนี้ให้สั้นลง\"" },
  { term: "Runtime", thai: "รันไทม์", category: "general", definition: "ช่วงเวลาที่โปรแกรมกำลังทำงานจริง (ตรงข้ามกับ compile time)", example: "\"error นี้เกิดตอน runtime ไม่ใช่ตอน compile\"" },
  { term: "SDK", thai: "เอสดีเค", category: "general", definition: "Software Development Kit — ชุดเครื่องมือสำหรับสร้างแอปบน platform เฉพาะ", example: "Firebase SDK, AWS SDK, Stripe SDK" },
  { term: "Scope", thai: "สโคป", category: "general", definition: "ขอบเขตที่ตัวแปรสามารถเข้าถึงได้ — global scope, function scope, block scope", example: "ตัวแปรใน if {} เข้าถึงจากข้างนอกไม่ได้ (block scope)" },
  { term: "Syntax", thai: "ซินแทกซ์", category: "general", definition: "กฎการเขียนโค้ดของภาษานั้นๆ — เหมือนไวยากรณ์ของภาษา", example: "Syntax Error: ลืมปิดวงเล็บ, ลืม semicolon" },
  { term: "Type", thai: "ชนิดข้อมูล", category: "general", definition: "ประเภทของข้อมูล — string, number, boolean, array, object", example: "let age: number = 20 (TypeScript)" },
  { term: "Variable", thai: "ตัวแปร", category: "general", definition: "ที่เก็บข้อมูลที่ตั้งชื่อได้ — let เปลี่ยนค่าได้, const เปลี่ยนไม่ได้", example: "let count = 0; const name = 'สมชาย';" },

  // ─── FRONTEND ───
  { term: "CSS", thai: "ซีเอสเอส", category: "frontend", definition: "Cascading Style Sheets — ภาษาที่ใช้ตกแต่งหน้าเว็บ กำหนดสี ขนาด ตำแหน่ง", example: ".button { background: blue; color: white; }" },
  { term: "DOM", thai: "ดอม", category: "frontend", definition: "Document Object Model — โครงสร้างต้นไม้ของ HTML ที่เบราว์เซอร์สร้างขึ้น JavaScript ใช้จัดการ DOM", example: "document.getElementById('title') เข้าถึง DOM element" },
  { term: "Event", thai: "อีเวนต์", category: "frontend", definition: "เหตุการณ์ที่เกิดขึ้นบนหน้าเว็บ เช่น click, submit, keypress", example: "onClick, onSubmit, onChange ใน React" },
  { term: "Flexbox", thai: "เฟล็กซ์บ็อกซ์", category: "frontend", definition: "วิธีจัด layout ใน CSS ที่ยืดหยุ่นได้ ทั้งแนวนอนและแนวตั้ง", example: "display: flex; justify-content: center;" },
  { term: "Hook", thai: "ฮุก", category: "frontend", definition: "ฟังก์ชันพิเศษใน React ที่ให้ใช้ state และ lifecycle ใน function component", example: "useState, useEffect, useContext, useRef" },
  { term: "HTML", thai: "เอชทีเอ็มแอล", category: "frontend", definition: "HyperText Markup Language — ภาษาที่ใช้สร้างโครงสร้างของหน้าเว็บ", example: "<h1>สวัสดี</h1> <p>ย่อหน้า</p>" },
  { term: "JSX / TSX", thai: "เจเอสเอกซ์", category: "frontend", definition: "ไวยากรณ์ที่ให้เขียน HTML ภายใน JavaScript/TypeScript — ใช้ใน React", example: "return <div className='card'>{title}</div>" },
  { term: "Props", thai: "พร็อพส์", category: "frontend", definition: "ข้อมูลที่ส่งจาก component แม่ไป component ลูกใน React", example: "<Card title='สวัสดี' /> — title คือ prop" },
  { term: "Responsive Design", thai: "เรสพอนซีฟ", category: "frontend", definition: "ออกแบบเว็บให้แสดงผลสวยบนทุกขนาดหน้าจอ — มือถือ แท็บเล็ต เดสก์ท็อป", example: "@media (min-width: 768px) { ... }" },
  { term: "SSR", thai: "เอสเอสอาร์", category: "frontend", definition: "Server-Side Rendering — render HTML บน server แล้วส่งไปเบราว์เซอร์ โหลดเร็ว SEO ดี", example: "Next.js Server Components ทำ SSR อัตโนมัติ" },
  { term: "SSG", thai: "เอสเอสจี", category: "frontend", definition: "Static Site Generation — สร้าง HTML ตอน build ไม่ต้อง render ทุก request", example: "generateStaticParams() ใน Next.js" },
  { term: "State", thai: "สเตท", category: "frontend", definition: "ข้อมูลที่เปลี่ยนแปลงได้ใน component เมื่อ state เปลี่ยน UI จะ re-render", example: "const [count, setCount] = useState(0)" },
  { term: "Virtual DOM", thai: "เวอร์ชวลดอม", category: "frontend", definition: "สำเนาของ DOM ที่อยู่ใน memory — React เปรียบเทียบแล้วอัปเดตเฉพาะส่วนที่เปลี่ยน", example: "React ใช้ Virtual DOM ทำให้ re-render เร็วมาก" },

  // ─── BACKEND ───
  { term: "Authentication", thai: "การพิสูจน์ตัวตน", category: "backend", definition: "กระบวนการยืนยันว่า \"คุณเป็นใคร\" — login ด้วย username/password", example: "Login, JWT Token, OAuth" },
  { term: "Authorization", thai: "การกำหนดสิทธิ์", category: "backend", definition: "กระบวนการตรวจสอบว่า \"คุณมีสิทธิ์ทำสิ่งนี้ไหม\" — role, permission", example: "Admin ลบ user ได้ แต่ User ธรรมดาลบไม่ได้" },
  { term: "CORS", thai: "คอร์ส", category: "backend", definition: "Cross-Origin Resource Sharing — กลไกที่ server อนุญาตให้เว็บจาก domain อื่นเรียก API ได้", example: "CORS error เกิดเมื่อ frontend (localhost:3000) เรียก API (localhost:8000)" },
  { term: "CRUD", thai: "ครัด", category: "backend", definition: "Create, Read, Update, Delete — 4 operation พื้นฐานของข้อมูล", example: "POST=Create, GET=Read, PUT=Update, DELETE=Delete" },
  { term: "Endpoint", thai: "เอนด์พอยต์", category: "backend", definition: "URL ที่ใช้เข้าถึง API เฉพาะอย่าง", example: "/api/users, /api/posts/1, /api/auth/login" },
  { term: "JWT", thai: "เจดับเบิลยูที", category: "backend", definition: "JSON Web Token — token ที่ใช้ยืนยันตัวตน ส่งไปกับทุก request", example: "Authorization: Bearer eyJhbGci..." },
  { term: "Middleware", thai: "มิดเดิลแวร์", category: "backend", definition: "ฟังก์ชันที่ทำงานระหว่าง request กับ response — เช่น ตรวจ auth, logging", example: "app.use(cors()); app.use(express.json());" },
  { term: "ORM", thai: "โออาร์เอ็ม", category: "backend", definition: "Object-Relational Mapping — เขียน database query ด้วยโค้ดแทน SQL", example: "Prisma, Sequelize, TypeORM เป็น ORM" },
  { term: "REST", thai: "เรสท์", category: "backend", definition: "Representational State Transfer — รูปแบบการออกแบบ API ที่ใช้ HTTP methods", example: "GET /users, POST /users, DELETE /users/1" },
  { term: "GraphQL", thai: "กราฟคิวแอล", category: "backend", definition: "ภาษาสำหรับ query API ที่ให้ client กำหนดได้ว่าต้องการข้อมูลอะไร", example: "query { user(id: 1) { name, email } }" },
  { term: "WebSocket", thai: "เว็บซ็อกเก็ต", category: "backend", definition: "การสื่อสารแบบ real-time สองทาง ระหว่าง client กับ server", example: "ใช้ใน chat app, live notification, game" },
  { term: "Serverless", thai: "เซิร์ฟเวอร์เลส", category: "backend", definition: "รันโค้ดบน cloud โดยไม่ต้องจัดการ server เอง จ่ายตามใช้จริง", example: "AWS Lambda, Vercel Functions, Cloudflare Workers" },

  // ─── DATABASE ───
  { term: "SQL", thai: "เอสคิวแอล", category: "database", definition: "Structured Query Language — ภาษาสำหรับจัดการข้อมูลใน relational database", example: "SELECT * FROM users WHERE age > 20" },
  { term: "NoSQL", thai: "โนเอสคิวแอล", category: "database", definition: "Database ที่ไม่ใช่ตาราง — เก็บเป็น document, key-value, graph", example: "MongoDB, Redis, DynamoDB" },
  { term: "Primary Key", thai: "คีย์หลัก", category: "database", definition: "คอลัมน์ที่ระบุตัวตนของแต่ละแถวโดยไม่ซ้ำกัน", example: "id INT PRIMARY KEY — ทุกแถวมี id ไม่ซ้ำ" },
  { term: "Foreign Key", thai: "คีย์นอก", category: "database", definition: "คอลัมน์ที่อ้างอิงไป Primary Key ของตารางอื่น — สร้างความสัมพันธ์", example: "user_id ในตาราง orders อ้างอิงไป users.id" },
  { term: "Migration", thai: "ไมเกรชัน", category: "database", definition: "การเปลี่ยนแปลงโครงสร้าง database อย่างเป็นระบบ — เพิ่มตาราง เพิ่มคอลัมน์", example: "npx prisma migrate dev — สร้าง migration" },
  { term: "Schema", thai: "สคีมา", category: "database", definition: "โครงสร้างของ database — กำหนดว่ามีตารางอะไร คอลัมน์อะไร", example: "Prisma schema กำหนด model User { id, name, email }" },
  { term: "Index", thai: "ดัชนี", category: "database", definition: "โครงสร้างที่ช่วยให้ค้นหาข้อมูลเร็วขึ้น เหมือนสารบัญหนังสือ", example: "CREATE INDEX idx_email ON users(email)" },
  { term: "JOIN", thai: "จอยน์", category: "database", definition: "เชื่อมข้อมูลจากหลายตารางเข้าด้วยกัน", example: "SELECT * FROM users JOIN orders ON users.id = orders.user_id" },
  { term: "Transaction", thai: "ทรานแซกชัน", category: "database", definition: "กลุ่ม query ที่ต้องสำเร็จทั้งหมดหรือล้มเหลวทั้งหมด — ป้องกันข้อมูลเสียหาย", example: "โอนเงิน: ตัดจากบัญชี A + เพิ่มบัญชี B ต้องสำเร็จทั้งคู่" },
  { term: "Seed", thai: "ซีด", category: "database", definition: "ใส่ข้อมูลตัวอย่างเข้า database เพื่อใช้ทดสอบ", example: "npx prisma db seed — เพิ่มข้อมูลทดสอบ" },

  // ─── GIT ───
  { term: "Branch", thai: "แบรนช์", category: "git", definition: "สายการพัฒนาที่แยกออกมาจาก main — ทำงานแยกกัน ไม่กระทบกัน", example: "git checkout -b feature/login" },
  { term: "Commit", thai: "คอมมิท", category: "git", definition: "บันทึกสถานะของโค้ด ณ จุดหนึ่ง เหมือนถ่ายรูปเก็บไว้", example: "git commit -m 'add login page'" },
  { term: "Clone", thai: "โคลน", category: "git", definition: "คัดลอก repository จาก remote มาที่เครื่องของเรา", example: "git clone https://github.com/user/repo.git" },
  { term: "Merge", thai: "เมิร์จ", category: "git", definition: "รวมโค้ดจาก branch หนึ่งเข้า branch อื่น", example: "git merge feature/login — รวมเข้า main" },
  { term: "Pull Request (PR)", thai: "พูลรีเควสต์", category: "git", definition: "ขอให้ทีมรีวิวโค้ดก่อนที่จะ merge เข้า branch หลัก", example: "เปิด PR บน GitHub แล้วรอคน approve" },
  { term: "Conflict", thai: "คอนฟลิกต์", category: "git", definition: "เมื่อ 2 คนแก้ไขไฟล์เดียวกันตรงจุดเดียวกัน Git ไม่รู้จะเลือกอันไหน", example: "<<<<<<< HEAD ... ======= ... >>>>>>> feature" },
  { term: "Rebase", thai: "รีเบส", category: "git", definition: "ย้าย base ของ branch ไปจุดใหม่ ทำให้ history สะอาดขึ้น", example: "git rebase main — อัปเดต branch ให้ทันกับ main" },
  { term: "Stash", thai: "สแตช", category: "git", definition: "เก็บงานที่ยังทำไม่เสร็จชั่วคราว เพื่อไปทำอย่างอื่นก่อน", example: "git stash → ทำอย่างอื่น → git stash pop" },

  // ─── DEVOPS ───
  { term: "CI/CD", thai: "ซีไอ/ซีดี", category: "devops", definition: "Continuous Integration/Deployment — ระบบอัตโนมัติที่ test + build + deploy ทุกครั้งที่ push โค้ด", example: "GitHub Actions, GitLab CI, Jenkins" },
  { term: "Container", thai: "คอนเทนเนอร์", category: "devops", definition: "กล่องที่บรรจุแอป + ทุกอย่างที่ต้องใช้ รันได้ทุกที่เหมือนกัน", example: "Docker container ที่มี Node.js + app + dependencies" },
  { term: "Docker", thai: "ด็อกเกอร์", category: "devops", definition: "เครื่องมือสร้างและจัดการ containers — แก้ปัญหา \"เครื่องผมรันได้\"", example: "docker run -p 3000:3000 my-app" },
  { term: "Kubernetes", thai: "คูเบอร์เนทิส", category: "devops", definition: "ระบบจัดการ containers จำนวนมาก — auto-scaling, load balancing, self-healing", example: "kubectl apply -f deployment.yaml" },
  { term: "Nginx", thai: "เอนจินเอกซ์", category: "devops", definition: "Web server ที่ทำหน้าที่ reverse proxy, load balancing, serve static files", example: "ตั้ง Nginx รับ request แล้วส่งต่อให้ Node.js" },
  { term: "Load Balancer", thai: "โหลดบาลานเซอร์", category: "devops", definition: "กระจาย traffic ไปหลาย server ไม่ให้ server ตัวเดียวรับภาระหนัก", example: "AWS ALB กระจาย request ไป 3 app servers" },
  { term: "SSL / TLS", thai: "เอสเอสแอล", category: "devops", definition: "เข้ารหัสข้อมูลระหว่าง browser กับ server ทำให้ HTTPS ปลอดภัย", example: "Let's Encrypt ให้ SSL certificate ฟรี" },
  { term: "Terraform", thai: "เทอราฟอร์ม", category: "devops", definition: "Infrastructure as Code — จัดการ cloud resources ด้วยโค้ดแทนการคลิก", example: "เขียน Terraform แล้ว apply สร้าง server, database, network" },

  // ─── NETWORK & SECURITY ───
  { term: "HTTP", thai: "เอชทีทีพี", category: "network", definition: "HyperText Transfer Protocol — โปรโตคอลที่เบราว์เซอร์ใช้คุยกับ server", example: "GET, POST, PUT, DELETE เป็น HTTP methods" },
  { term: "HTTPS", thai: "เอชทีทีพีเอส", category: "network", definition: "HTTP + SSL/TLS — เข้ารหัสข้อมูลระหว่างทาง ปลอดภัยกว่า HTTP", example: "https://www.google.com (มี 🔒 ในเบราว์เซอร์)" },
  { term: "DNS", thai: "ดีเอ็นเอส", category: "network", definition: "Domain Name System — แปลงชื่อเว็บเป็น IP address", example: "google.com → 142.250.199.110" },
  { term: "IP Address", thai: "ไอพีแอดเดรส", category: "network", definition: "ที่อยู่ของเครื่องบนเครือข่าย เหมือนเลขที่บ้าน", example: "192.168.1.1 (local), 8.8.8.8 (Google DNS)" },
  { term: "Firewall", thai: "ไฟร์วอลล์", category: "network", definition: "ระบบที่กรอง traffic เข้า-ออก server อนุญาตเฉพาะที่กำหนด", example: "ufw allow 80 — เปิดเฉพาะ port 80 (HTTP)" },
  { term: "XSS", thai: "เอกซ์เอสเอส", category: "network", definition: "Cross-Site Scripting — การฝัง script อันตรายในหน้าเว็บ", example: "input ที่ไม่ sanitize ถูกใส่ <script>alert('hack')</script>" },
  { term: "SQL Injection", thai: "เอสคิวแอลอินเจคชัน", category: "network", definition: "การฝังคำสั่ง SQL ผ่าน input ของ user เพื่อโจมตี database", example: "ป้องกันด้วย parameterized queries หรือ ORM" },
  { term: "OAuth", thai: "โอออธ", category: "network", definition: "มาตรฐานที่ให้ login ผ่าน service อื่น โดยไม่ต้องแชร์ password", example: "\"Login with Google\", \"Login with GitHub\"" },
  { term: "Hashing", thai: "แฮชชิง", category: "network", definition: "แปลงข้อมูลเป็นค่า hash ที่ย้อนกลับไม่ได้ — ใช้เก็บ password", example: "bcrypt.hash('mypassword', 12) → $2b$12$..." },

  // ─── AI & DATA ───
  { term: "AI", thai: "เอไอ", category: "ai", definition: "Artificial Intelligence — ระบบที่เลียนแบบความฉลาดของมนุษย์", example: "ChatGPT, Siri, Tesla Autopilot" },
  { term: "Machine Learning", thai: "แมชชีนเลิร์นนิง", category: "ai", definition: "การสอนคอมพิวเตอร์ให้เรียนรู้จากข้อมูล โดยไม่ต้องเขียนกฎทุกอย่าง", example: "สอนให้แยกรูปแมว/หมาจากรูปตัวอย่าง 10,000 รูป" },
  { term: "Deep Learning", thai: "ดีปเลิร์นนิง", category: "ai", definition: "ML ขั้นสูงที่ใช้ Neural Networks หลายชั้น — เบื้องหลังของ ChatGPT", example: "CNN สำหรับรูปภาพ, Transformer สำหรับภาษา" },
  { term: "LLM", thai: "แอลแอลเอ็ม", category: "ai", definition: "Large Language Model — AI ที่เข้าใจและสร้างภาษาได้ เช่น GPT-4, Claude", example: "ChatGPT, Claude, Gemini เป็น LLM" },
  { term: "Prompt", thai: "พรอมต์", category: "ai", definition: "คำสั่งหรือคำถามที่ป้อนให้ AI — prompt ดี = ผลลัพธ์ดี", example: "\"สรุปบทความนี้เป็น 5 bullet points ภาษาไทย\"" },
  { term: "RAG", thai: "อาร์เอจี", category: "ai", definition: "Retrieval Augmented Generation — ให้ AI ค้นข้อมูลจริงก่อนตอบ ลด hallucination", example: "อัปโหลด PDF → AI ตอบคำถามจากเนื้อหาใน PDF" },
  { term: "Embedding", thai: "เอ็มเบดดิง", category: "ai", definition: "แปลงข้อมูล (ข้อความ/รูป) เป็น vector ตัวเลข ที่เก็บ \"ความหมาย\" ไว้", example: "\"แมว\" และ \"cat\" มี embedding ที่ใกล้กัน" },
  { term: "Hallucination", thai: "ฮาลูซิเนชัน", category: "ai", definition: "AI \"แต่งเรื่อง\" ที่ฟังดูน่าเชื่อแต่ไม่เป็นความจริง", example: "AI อ้าง paper ที่ไม่มีอยู่จริง" },
  { term: "Fine-tuning", thai: "ไฟน์ทิวนิง", category: "ai", definition: "ปรับ pre-trained model ให้เชี่ยวชาญเฉพาะทาง ด้วยข้อมูลเพิ่มเติม", example: "Fine-tune GPT ด้วยข้อมูลภาษาไทยเพื่อให้ตอบไทยดีขึ้น" },
  { term: "Token", thai: "โทเคน (AI)", category: "ai", definition: "หน่วยเล็กสุดที่ LLM ประมวลผล — อาจเป็นคำ ส่วนของคำ หรือตัวอักษร", example: "\"Hello world\" ≈ 2 tokens, ภาษาไทยใช้ token มากกว่า" },

  // ─── AGILE ───
  { term: "Agile", thai: "อาจายล์", category: "agile", definition: "วิธีการทำงานที่ยืดหยุ่น ส่งมอบทีละนิดแต่สม่ำเสมอ ปรับเปลี่ยนตาม feedback", example: "ทำงานเป็น Sprint ทีละ 2 สัปดาห์" },
  { term: "Scrum", thai: "สครัม", category: "agile", definition: "Framework ของ Agile ที่นิยมที่สุด มี Sprint, Standup, Review, Retro", example: "Sprint 2 สัปดาห์ + Daily Standup 15 นาที" },
  { term: "Sprint", thai: "สปรินต์", category: "agile", definition: "รอบการทำงาน 1-4 สัปดาห์ ที่ส่งมอบผลงานที่ใช้ได้จริง", example: "Sprint 1: ทำหน้า Login + Register" },
  { term: "Backlog", thai: "แบ็กล็อก", category: "agile", definition: "รายการงานทั้งหมดที่ต้องทำ เรียงตามลำดับความสำคัญ", example: "Product Backlog มี 50 items เรียงจากสำคัญสุดลงมา" },
  { term: "Standup", thai: "สแตนด์อัป", category: "agile", definition: "ประชุมสั้นทุกเช้า 10-15 นาที บอกทีมว่าทำอะไร ติดอะไร", example: "\"เมื่อวานทำ X เสร็จ วันนี้จะทำ Y ติดเรื่อง Z\"" },
  { term: "User Story", thai: "ยูเซอร์สตอรี", category: "agile", definition: "คำอธิบายฟีเจอร์จากมุมมองผู้ใช้: \"ในฐานะ... ฉันต้องการ... เพื่อ...\"", example: "\"ในฐานะลูกค้า ฉันต้องการกรองสินค้าตามราคา เพื่อหาสินค้าที่ตรงงบ\"" },
  { term: "Retrospective", thai: "เรโทรสเปกทีฟ", category: "agile", definition: "ประชุมทบทวนตอนจบ Sprint ว่าอะไรดี อะไรต้องปรับปรุง", example: "\"สิ่งที่ดี: code review เร็ว สิ่งที่ปรับ: deploy ช้า\"" },
  { term: "Kanban", thai: "คัมบัง", category: "agile", definition: "วิธีจัดการงานด้วยบอร์ด: To Do → In Progress → Done", example: "Trello board แบ่ง 3 คอลัมน์" },
  { term: "Stakeholder", thai: "ผู้มีส่วนได้ส่วนเสีย", category: "agile", definition: "คนที่เกี่ยวข้องกับโปรเจกต์ — ลูกค้า ผู้บริหาร ผู้ใช้", example: "Demo ให้ stakeholders ดูทุก Sprint" },

  // ─── TESTING ───
  { term: "Unit Test", thai: "ยูนิตเทสต์", category: "testing", definition: "ทดสอบฟังก์ชันเดียว แยกจากส่วนอื่น — เร็ว เจาะจง", example: "expect(add(1, 2)).toBe(3)" },
  { term: "Integration Test", thai: "อินทิเกรชันเทสต์", category: "testing", definition: "ทดสอบหลายส่วนทำงานร่วมกัน เช่น API + database", example: "ทดสอบว่า POST /api/users สร้าง user ใน DB จริง" },
  { term: "E2E Test", thai: "เอนด์ทูเอนด์", category: "testing", definition: "ทดสอบทั้งระบบเหมือนผู้ใช้จริง — เปิดเบราว์เซอร์ คลิก กรอก", example: "Playwright: page.click('button'), page.fill('input', 'text')" },
  { term: "TDD", thai: "ทีดีดี", category: "testing", definition: "Test-Driven Development — เขียน test ก่อน แล้วค่อยเขียนโค้ดให้ test ผ่าน", example: "เขียน test ก่อน (❌ fail) → เขียนโค้ด → test ผ่าน (✅)" },
  { term: "Mock", thai: "ม็อก", category: "testing", definition: "จำลองส่วนที่ยังไม่มีหรือไม่ต้องการทดสอบจริง เช่น จำลอง API", example: "jest.mock('axios') — จำลอง axios ไม่ให้เรียก API จริง" },
  { term: "Coverage", thai: "คัฟเวอเรจ", category: "testing", definition: "เปอร์เซ็นต์ของโค้ดที่ถูก test แล้ว — 80%+ ถือว่าดี", example: "Jest --coverage → 85% ของโค้ดถูก test" },
  { term: "Assertion", thai: "การยืนยัน", category: "testing", definition: "คำสั่งที่ตรวจว่าผลลัพธ์ตรงกับที่คาดหวังไหม", example: "expect(result).toBe(42) — ผลต้องเท่ากับ 42" },
  { term: "UAT", thai: "ยูเอที", category: "testing", definition: "User Acceptance Testing — ให้ผู้ใช้จริงทดสอบว่าระบบตรงกับความต้องการ", example: "ให้ลูกค้าลองใช้ระบบจริงก่อน go-live" },
];

export function searchGlossary(query: string): GlossaryTerm[] {
  if (!query.trim()) return glossary;
  const q = query.toLowerCase();
  return glossary.filter(
    (t) =>
      t.term.toLowerCase().includes(q) ||
      t.thai.includes(q) ||
      t.definition.includes(q) ||
      t.category.includes(q),
  );
}

export function getGlossaryByCategory(category: string): GlossaryTerm[] {
  return glossary.filter((t) => t.category === category);
}
