export interface ProgrammingLanguage {
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  tier: "must-know" | "high-demand" | "specialized" | "rising-star";
  year: number;
  creator: string;
  paradigm: string[];
  typing: string;
  usedFor: string[];
  popularFrameworks: string[];
  whyLearn: string[];
  pros: string[];
  cons: string[];
  helloWorld: string;
  codeExample: { title: string; code: string };
  salary: string;
  demandLevel: "สูงมาก" | "สูง" | "ปานกลาง" | "เฉพาะทาง";
  relatedCareers: string[];
}

export const tierInfo: Record<string, { label: string; labelEn: string; icon: string; color: string; description: string }> = {
  "must-know": {
    label: "ต้องรู้",
    labelEn: "Must-Know",
    icon: "🔥",
    color: "border-rose-300 dark:border-rose-700",
    description: "ภาษาที่ developer ทุกคนควรรู้อย่างน้อย 1 ตัว — ตลาดงานเยอะ ใช้ได้กว้าง",
  },
  "high-demand": {
    label: "ดีมานด์สูง",
    labelEn: "High Demand",
    icon: "💼",
    color: "border-amber-300 dark:border-amber-700",
    description: "ภาษาที่บริษัทใหญ่ใช้เยอะ เงินเดือนดี งานเยอะ มีอนาคต",
  },
  specialized: {
    label: "เฉพาะทาง",
    labelEn: "Specialized",
    icon: "🎯",
    color: "border-blue-300 dark:border-blue-700",
    description: "ภาษาที่เก่งเฉพาะด้าน — mobile, system, data ใช้เมื่อต้องการ performance หรือ platform เฉพาะ",
  },
  "rising-star": {
    label: "ดาวรุ่ง",
    labelEn: "Rising Star",
    icon: "🌟",
    color: "border-emerald-300 dark:border-emerald-700",
    description: "ภาษาที่กำลังมาแรง ชุมชนโตเร็ว อนาคตสดใส น่าจับตาดู",
  },
};

export const languages: ProgrammingLanguage[] = [
  // ─── TIER: MUST-KNOW ───
  {
    name: "JavaScript",
    slug: "javascript",
    icon: "🟨",
    tagline: "ภาษาของเว็บ — ใช้ได้ทั้ง Frontend, Backend, Mobile, Desktop",
    description: "JavaScript เป็นภาษาที่สำคัญที่สุดในโลก web — ทุกเว็บไซต์ใช้ ทุกเบราว์เซอร์รัน จากที่เคยเป็นแค่ภาษาหน้าเว็บ ตอนนี้ใช้ทำ server (Node.js), มือถือ (React Native), desktop (Electron) ได้หมด ถ้าจะเป็น developer ต้องรู้ JavaScript",
    tier: "must-know",
    year: 1995,
    creator: "Brendan Eich (Netscape)",
    paradigm: ["Multi-paradigm", "Event-driven", "Functional", "Object-oriented"],
    typing: "Dynamic (ไม่ต้องประกาศ type)",
    usedFor: ["Frontend Web", "Backend (Node.js)", "Mobile (React Native)", "Desktop (Electron)", "Serverless", "Game", "IoT"],
    popularFrameworks: ["React", "Next.js", "Vue", "Angular", "Express", "Svelte", "Nest.js"],
    whyLearn: [
      "ภาษาเดียวใช้ได้ทั้ง frontend + backend — Full-Stack",
      "ตลาดงานใหญ่ที่สุด ไม่ว่าบริษัทไหนก็ต้องการ",
      "Ecosystem ใหญ่มาก — npm มี package มากกว่า 2 ล้านตัว",
      "เรียนรู้ง่าย เริ่มต้นได้เร็ว เห็นผลทันทีในเบราว์เซอร์",
      "ชุมชนใหญ่ที่สุดในโลก มีปัญหาอะไร Google แล้วเจอ",
    ],
    pros: [
      "ใช้ได้ทุกที่ — browser, server, mobile, desktop",
      "เริ่มต้นง่าย เปิดเบราว์เซอร์เขียนได้เลย",
      "Ecosystem & community ใหญ่ที่สุด",
      "ได้งานง่าย ตลาดกว้างมาก",
      "Asynchronous programming ดีมาก (async/await)",
    ],
    cons: [
      "Dynamic typing ทำให้เกิด bug ง่าย (ใช้ TypeScript แก้)",
      "มี quirks แปลกๆ เช่น == vs ===, this keyword",
      "Callback hell (แก้ด้วย Promise/async-await)",
      "Runtime errors — error เจอตอนรัน ไม่ใช่ตอน compile",
    ],
    helloWorld: "console.log('สวัสดีชาวโลก');",
    codeExample: {
      title: "Fetch API + Async/Await",
      code: `async function getUsers() {
  const res = await fetch('/api/users');
  const users = await res.json();
  
  users.forEach(user => {
    console.log(\`\${user.name} - \${user.email}\`);
  });
}

getUsers();`,
    },
    salary: "25,000 - 120,000 บาท/เดือน",
    demandLevel: "สูงมาก",
    relatedCareers: ["Frontend Developer", "Full-Stack Developer", "React Developer", "Node.js Developer"],
  },
  {
    name: "TypeScript",
    slug: "typescript",
    icon: "🔷",
    tagline: "JavaScript + Type Safety = โค้ดปลอดภัยขึ้น bug น้อยลง",
    description: "TypeScript คือ JavaScript ที่เพิ่ม type system เข้ามา — บอก compiler ว่าตัวแปรเป็นอะไร ฟังก์ชันรับ-คืนค่าอะไร จับ bug ได้ก่อนรัน ตอนนี้เป็นมาตรฐานของโปรเจกต์ใหญ่ๆ แทบทุกที่ใช้ TypeScript แทน JavaScript ธรรมดา",
    tier: "must-know",
    year: 2012,
    creator: "Microsoft (Anders Hejlsberg)",
    paradigm: ["Multi-paradigm", "Object-oriented", "Functional"],
    typing: "Static (ประกาศ type ชัดเจน)",
    usedFor: ["Frontend Web", "Backend", "Full-Stack", "Library Development", "Enterprise Application"],
    popularFrameworks: ["React + TS", "Next.js", "Angular", "NestJS", "tRPC", "Prisma"],
    whyLearn: [
      "จับ bug ก่อนรัน — compiler บอกผิดตอนเขียน ไม่ใช่ตอน deploy",
      "Autocomplete ดีขึ้น 10 เท่า — IDE รู้ว่า object มี property อะไร",
      "โปรเจกต์ใหญ่ดูแลง่ายขึ้น — refactor ได้มั่นใจ",
      "เป็นมาตรฐานอุตสาหกรรม — Next.js, React, Angular ใช้หมด",
      "เรียนรู้ TypeScript = เข้าใจ JavaScript ลึกขึ้นด้วย",
    ],
    pros: [
      "จับ bug ตอน compile ก่อนถึง production",
      "IntelliSense/autocomplete ดีมาก",
      "Refactoring ปลอดภัย — เปลี่ยนชื่อ/แก้ type แล้ว compiler จับให้",
      "ใช้ feature ของ JavaScript ได้หมด + เพิ่ม type",
      "Generics, Union Types, Utility Types ทรงพลัง",
    ],
    cons: [
      "เรียนรู้ type system ใช้เวลาพอสมควร",
      "โค้ดยาวขึ้นเพราะต้องเขียน type",
      "Config ซับซ้อน (tsconfig.json)",
      "Type gymnastics — type ขั้นสูงอ่านยาก",
    ],
    helloWorld: "const greeting: string = 'สวัสดีชาวโลก';\nconsole.log(greeting);",
    codeExample: {
      title: "Interface + Generic Function",
      code: `interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

async function fetchData<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json() as Promise<T>;
}

const users = await fetchData<User[]>('/api/users');
users.forEach(u => console.log(u.name));`,
    },
    salary: "30,000 - 130,000 บาท/เดือน",
    demandLevel: "สูงมาก",
    relatedCareers: ["Frontend Developer", "Full-Stack Developer", "Software Engineer"],
  },
  {
    name: "Python",
    slug: "python",
    icon: "🐍",
    tagline: "อ่านง่ายเหมือนภาษาอังกฤษ — เด่นด้าน AI, Data, Backend",
    description: "Python เป็นภาษาที่อ่านง่ายที่สุด เหมาะสำหรับมือใหม่ แต่ทรงพลังมาก — ใช้ในงาน AI/ML, Data Science, Automation, Backend, DevOps เป็นภาษา #1 สำหรับ AI และ Data และเป็นภาษาที่สอนกันมากที่สุดในมหาวิทยาลัย",
    tier: "must-know",
    year: 1991,
    creator: "Guido van Rossum",
    paradigm: ["Multi-paradigm", "Object-oriented", "Functional", "Procedural"],
    typing: "Dynamic (ไม่ต้องประกาศ type แต่ใช้ type hints ได้)",
    usedFor: ["AI/Machine Learning", "Data Science", "Backend Web", "Automation/Scripting", "DevOps", "Scientific Computing", "Web Scraping"],
    popularFrameworks: ["Django", "FastAPI", "Flask", "PyTorch", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
    whyLearn: [
      "ภาษา #1 สำหรับ AI, Machine Learning, Data Science",
      "Syntax ง่ายมาก อ่านเหมือนภาษาอังกฤษ เหมาะกับมือใหม่",
      "Library เยอะมาก — ทำอะไรก็มี package ให้ใช้",
      "ใช้ได้ตั้งแต่ script เล็กๆ จนถึง application ขนาดใหญ่",
      "ตลาดงาน AI/Data กำลังเติบโตมาก เงินเดือนสูง",
    ],
    pros: [
      "เรียนรู้ง่ายที่สุด syntax สะอาด อ่านรู้เรื่อง",
      "Library ecosystem ใหญ่มาก — pip มีทุกอย่าง",
      "AI/ML/Data ใช้ Python เป็นหลัก ไม่มีคู่แข่ง",
      "Automation — เขียน script ทำงานอัตโนมัติเร็ว",
      "Cross-platform — รันได้ทุก OS",
    ],
    cons: [
      "ช้ากว่าภาษา compiled อย่าง Go, Rust, C++",
      "GIL (Global Interpreter Lock) ทำ multi-threading จำกัด",
      "ไม่เหมาะกับ mobile app development",
      "Dynamic typing ทำให้ bug หลุดได้ (ใช้ type hints + mypy)",
      "Indentation-based syntax — บางคนไม่ชอบ",
    ],
    helloWorld: "print('สวัสดีชาวโลก')",
    codeExample: {
      title: "FastAPI + Pydantic",
      code: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class User(BaseModel):
    name: str
    email: str
    age: int

@app.post("/users")
async def create_user(user: User):
    return {"message": f"สร้าง {user.name} สำเร็จ"}

@app.get("/users/{user_id}")
async def get_user(user_id: int):
    return {"id": user_id, "name": "สมชาย"}`,
    },
    salary: "30,000 - 150,000 บาท/เดือน",
    demandLevel: "สูงมาก",
    relatedCareers: ["Data Scientist", "ML Engineer", "Backend Developer", "AI Engineer", "DevOps Engineer"],
  },

  // ─── TIER: HIGH-DEMAND ───
  {
    name: "Java",
    slug: "java",
    icon: "☕",
    tagline: "ภาษา Enterprise อันดับ 1 — มั่นคง ปลอดภัย ใช้ในองค์กรใหญ่",
    description: "Java เป็นภาษาที่บริษัทใหญ่ๆ ใช้มากที่สุด — ธนาคาร ประกัน e-commerce ระบบ enterprise ทั้งหลาย \"Write Once, Run Anywhere\" ด้วย JVM ทำให้รันได้ทุก platform เป็นภาษาที่เสถียร เติบโตมากว่า 25 ปี",
    tier: "high-demand",
    year: 1995,
    creator: "James Gosling (Sun Microsystems/Oracle)",
    paradigm: ["Object-oriented", "Concurrent"],
    typing: "Static (ประกาศ type ชัดเจน)",
    usedFor: ["Enterprise Backend", "Android App", "Microservices", "Big Data (Hadoop, Spark)", "Banking/Finance", "E-commerce"],
    popularFrameworks: ["Spring Boot", "Spring Cloud", "Hibernate", "Jakarta EE", "Quarkus", "Micronaut"],
    whyLearn: [
      "บริษัทใหญ่ใช้เยอะมาก — ธนาคาร ประกัน telco ใช้ Java หมด",
      "Spring Boot ทำ microservices ได้ทรงพลัง",
      "เข้าใจ OOP ลึก — design patterns, SOLID ชัดเจน",
      "Ecosystem ใหญ่ มี library สำหรับทุกอย่าง",
      "เงินเดือนสูง โดยเฉพาะ Senior Java Developer",
    ],
    pros: [
      "เสถียรมาก — ระบบขนาดใหญ่เชื่อถือ Java",
      "Platform-independent — JVM รันได้ทุก OS",
      "Performance ดี — JIT compilation เร็ว",
      "Strong typing — จับ bug ตอน compile",
      "Enterprise-ready — security, scalability ครบ",
    ],
    cons: [
      "Verbose — โค้ดยาว boilerplate เยอะ (records แก้ได้บ้าง)",
      "เรียนรู้ช้ากว่า Python — concept เยอะ",
      "Memory ใช้เยอะ (JVM overhead)",
      "Startup time ช้า (GraalVM แก้ได้)",
    ],
    helloWorld: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"สวัสดีชาวโลก\");\n  }\n}",
    codeExample: {
      title: "Spring Boot REST Controller",
      code: `@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.findById(id));
    }

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User saved = userService.save(user);
        return ResponseEntity.status(201).body(saved);
    }
}`,
    },
    salary: "35,000 - 140,000 บาท/เดือน",
    demandLevel: "สูงมาก",
    relatedCareers: ["Backend Developer", "Java Developer", "Android Developer", "Enterprise Architect"],
  },
  {
    name: "C#",
    slug: "csharp",
    icon: "💜",
    tagline: "ภาษาหลักของ Microsoft — เว็บ, เกม (Unity), desktop, cloud",
    description: "C# (ซีชาร์ป) เป็นภาษาจาก Microsoft ที่ออกแบบมาอย่างดี — ใช้ทำเว็บด้วย ASP.NET, เกมด้วย Unity, desktop ด้วย WPF/.NET MAUI, cloud ด้วย Azure ภาษาเดียวทำได้หลายอย่าง syntax ใกล้ Java แต่ทันสมัยกว่า",
    tier: "high-demand",
    year: 2000,
    creator: "Microsoft (Anders Hejlsberg)",
    paradigm: ["Object-oriented", "Functional", "Component-oriented"],
    typing: "Static (strong typing)",
    usedFor: ["Web Backend (ASP.NET)", "Game (Unity)", "Desktop (WPF, MAUI)", "Cloud (Azure)", "Enterprise", "IoT"],
    popularFrameworks: ["ASP.NET Core", "Unity", "Blazor", ".NET MAUI", "Entity Framework", "Xamarin"],
    whyLearn: [
      "ทำเกมด้วย Unity — engine ที่นิยมที่สุดสำหรับ indie games",
      "ASP.NET Core เร็วมาก benchmark สูงกว่า Node.js/Django",
      "ระบบ enterprise ที่ใช้ Microsoft stack ใช้ C# หมด",
      "ภาษาเดียวทำได้ทั้ง web, desktop, mobile, game, cloud",
      "Syntax สะอาด ทันสมัย มี feature ใหม่ทุกปี",
    ],
    pros: [
      "ภาษาออกแบบดี syntax ชัดเจน modern features เยอะ",
      "Performance ดีมาก — ASP.NET Core เร็วติดอันดับ",
      "Unity — ตลาด game dev ใหญ่มาก",
      ".NET ecosystem ครบ — web, desktop, mobile, cloud",
      "LINQ — query data ในโค้ดได้สะดวกมาก",
    ],
    cons: [
      "ผูกกับ Microsoft ecosystem พอสมควร",
      "Game dev (Unity) กับ Web dev (ASP.NET) ต่าง context กัน",
      "Community เล็กกว่า JavaScript/Python ในไทย",
      "Startup ในไทยใช้น้อยกว่า JS/Python",
    ],
    helloWorld: "Console.WriteLine(\"สวัสดีชาวโลก\");",
    codeExample: {
      title: "ASP.NET Core Minimal API",
      code: `var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello from C#!");

app.MapGet("/users/{id}", (int id) =>
    new { Id = id, Name = "สมชาย", Role = "Developer" });

app.MapPost("/users", (User user) =>
    Results.Created($"/users/{user.Id}", user));

app.Run();

record User(int Id, string Name, string Email);`,
    },
    salary: "30,000 - 130,000 บาท/เดือน",
    demandLevel: "สูง",
    relatedCareers: ["Game Developer (Unity)", ".NET Developer", "Backend Developer", "Enterprise Developer"],
  },
  {
    name: "Go (Golang)",
    slug: "go",
    icon: "🐹",
    tagline: "เร็ว ง่าย ทำ concurrent ดี — ภาษาของ DevOps & Microservices",
    description: "Go คือภาษาจาก Google ที่ออกแบบมาให้เรียบง่าย เร็ว และ concurrent ได้ดีมาก — compile เป็น binary ไฟล์เดียว deploy ง่าย ใช้ทำ microservices, CLI tools, DevOps tools เครื่องมือดังๆ อย่าง Docker, Kubernetes, Terraform เขียนด้วย Go ทั้งหมด",
    tier: "high-demand",
    year: 2009,
    creator: "Google (Robert Griesemer, Rob Pike, Ken Thompson)",
    paradigm: ["Concurrent", "Procedural", "Object-oriented (ไม่มี class)"],
    typing: "Static (แต่มี type inference)",
    usedFor: ["Microservices", "DevOps Tools", "CLI Tools", "Cloud Infrastructure", "API Backend", "Networking"],
    popularFrameworks: ["Gin", "Echo", "Fiber", "Chi", "gRPC-Go", "Cobra (CLI)"],
    whyLearn: [
      "Docker, Kubernetes, Terraform เขียนด้วย Go — DevOps ต้องรู้",
      "Goroutines ทำ concurrent ง่ายมาก ไม่ต้อง callback hell",
      "Compile เป็น binary ตัวเดียว deploy ง่ายสุดๆ",
      "เรียนรู้เร็ว — syntax น้อย feature น้อย แต่ทำอะไรก็ได้",
      "เงินเดือนสูง เพราะคนเขียน Go ยังน้อย demand สูง",
    ],
    pros: [
      "เร็วมาก — compile เป็น native code",
      "Concurrency ดีเลิศ — goroutines + channels",
      "เรียนรู้ง่าย — keyword น้อย syntax เรียบง่าย",
      "Deploy ง่าย — binary ตัวเดียว ไม่ต้องติดตั้ง runtime",
      "Standard library ครบ — HTTP server, JSON, crypto",
    ],
    cons: [
      "ไม่มี generics จนกระทั่ง Go 1.18 (ตอนนี้มีแล้ว)",
      "Error handling verbose — if err != nil ทุกบรรทัด",
      "ไม่มี class, inheritance — ใช้ struct + interface แทน",
      "Ecosystem เล็กกว่า JS/Python",
    ],
    helloWorld: "package main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(\"สวัสดีชาวโลก\")\n}",
    codeExample: {
      title: "HTTP Server + Goroutine",
      code: `package main

import (
    "encoding/json"
    "fmt"
    "net/http"
)

type User struct {
    ID   int    \`json:"id"\`
    Name string \`json:"name"\`
}

func getUsers(w http.ResponseWriter, r *http.Request) {
    users := []User{{1, "สมชาย"}, {2, "สมหญิง"}}
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(users)
}

func main() {
    http.HandleFunc("/users", getUsers)
    fmt.Println("Server running on :8080")
    http.ListenAndServe(":8080", nil)
}`,
    },
    salary: "40,000 - 160,000 บาท/เดือน",
    demandLevel: "สูง",
    relatedCareers: ["Backend Developer", "DevOps Engineer", "Cloud Engineer", "Platform Engineer"],
  },
  {
    name: "PHP",
    slug: "php",
    icon: "🐘",
    tagline: "ภาษาของเว็บ — WordPress, Laravel ครองเว็บมากกว่า 75%",
    description: "PHP เป็นภาษา server-side ที่ขับเคลื่อนเว็บไซต์มากที่สุดในโลก — WordPress (40%+ ของเว็บทั้งหมด), Facebook (เดิม), Wikipedia ล้วนใช้ PHP ตัว PHP สมัยใหม่กับ Laravel ดีขึ้นมากจากยุคก่อน",
    tier: "high-demand",
    year: 1995,
    creator: "Rasmus Lerdorf",
    paradigm: ["Multi-paradigm", "Object-oriented", "Procedural"],
    typing: "Dynamic (มี type hints ตั้งแต่ PHP 7+)",
    usedFor: ["Web Backend", "CMS (WordPress, Drupal)", "E-commerce (WooCommerce, Magento)", "API Development"],
    popularFrameworks: ["Laravel", "Symfony", "WordPress", "CodeIgniter", "Livewire"],
    whyLearn: [
      "WordPress ครองเว็บ 40%+ — รู้ PHP = ทำเว็บ WordPress ได้",
      "Laravel เป็น framework ที่ developer experience ดีมาก",
      "งานเยอะมาก โดยเฉพาะ web agency, e-commerce",
      "Hosting ถูก — shared hosting รองรับ PHP หมด",
      "เรียนรู้ง่าย เห็นผลเร็ว เหมาะมือใหม่",
    ],
    pros: [
      "Ecosystem ใหญ่ — WordPress, WooCommerce, Magento",
      "Laravel เป็น framework ที่ดีมาก modern, elegant",
      "Hosting ถูกและง่าย — ทุก hosting รองรับ",
      "PHP 8.x เร็วขึ้นมาก (JIT compiler)",
      "งานเยอะ โดยเฉพาะ freelance",
    ],
    cons: [
      "ชื่อเสีย เพราะ PHP ยุคเก่าโค้ดเละ (สมัยใหม่ดีขึ้นมาก)",
      "Inconsistent function naming (strlen vs str_replace)",
      "ไม่เหมาะกับ real-time application",
      "Community แตกเป็น WordPress กับ Laravel",
    ],
    helloWorld: "<?php\necho 'สวัสดีชาวโลก';\n?>",
    codeExample: {
      title: "Laravel Controller",
      code: `class UserController extends Controller
{
    public function index()
    {
        $users = User::where('active', true)
                     ->orderBy('name')
                     ->paginate(10);

        return response()->json($users);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
        ]);

        $user = User::create($validated);
        return response()->json($user, 201);
    }
}`,
    },
    salary: "20,000 - 90,000 บาท/เดือน",
    demandLevel: "สูง",
    relatedCareers: ["PHP Developer", "WordPress Developer", "Laravel Developer", "Web Developer"],
  },

  // ─── TIER: SPECIALIZED ───
  {
    name: "Rust",
    slug: "rust",
    icon: "🦀",
    tagline: "เร็วเท่า C แต่ปลอดภัยกว่า — อนาคตของ system programming",
    description: "Rust เป็นภาษาที่ developer โหวตว่า \"ชอบที่สุด\" ติดต่อกันหลายปี — เร็วเท่า C/C++ แต่มี ownership system ที่ป้องกัน memory bugs ได้ ใช้สร้าง web browser (Firefox), OS, CLI tools, WebAssembly และ blockchain",
    tier: "specialized",
    year: 2010,
    creator: "Mozilla (Graydon Hoare)",
    paradigm: ["Multi-paradigm", "Concurrent", "Functional", "Procedural"],
    typing: "Static (strong, ownership system)",
    usedFor: ["System Programming", "WebAssembly", "CLI Tools", "Game Engines", "Blockchain", "Embedded", "Network Services"],
    popularFrameworks: ["Actix Web", "Axum", "Rocket", "Tokio", "Tauri", "Bevy (game)"],
    whyLearn: [
      "Performance เท่า C/C++ แต่ memory-safe ไม่มี segfault",
      "ถูกเลือกเข้า Linux kernel — อนาคตสดใส",
      "WebAssembly — เขียน Rust รันในเบราว์เซอร์ได้",
      "Tauri — สร้าง desktop app ที่เบากว่า Electron มาก",
      "Developer satisfaction สูงสุด หลายปีติดต่อกัน",
    ],
    pros: [
      "เร็วเท่า C++ แต่ปลอดภัยกว่ามาก",
      "No garbage collector — predictable performance",
      "Ownership system ป้องกัน data race, memory leak",
      "Cargo — package manager ที่ดีมาก",
      "Community ดี documentation ดี",
    ],
    cons: [
      "เรียนรู้ยาก — ownership, borrowing, lifetime ซับซ้อน",
      "Compile time ช้า",
      "Ecosystem เล็กกว่า JS/Python/Java",
      "ไม่จำเป็นสำหรับงาน web ทั่วไป",
    ],
    helloWorld: "fn main() {\n    println!(\"สวัสดีชาวโลก\");\n}",
    codeExample: {
      title: "Axum Web Server",
      code: `use axum::{routing::get, Json, Router};
use serde::Serialize;

#[derive(Serialize)]
struct User {
    id: u32,
    name: String,
}

async fn get_users() -> Json<Vec<User>> {
    let users = vec![
        User { id: 1, name: "สมชาย".to_string() },
        User { id: 2, name: "สมหญิง".to_string() },
    ];
    Json(users)
}

#[tokio::main]
async fn main() {
    let app = Router::new().route("/users", get(get_users));
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}`,
    },
    salary: "50,000 - 180,000 บาท/เดือน",
    demandLevel: "เฉพาะทาง",
    relatedCareers: ["Systems Engineer", "Blockchain Developer", "Performance Engineer"],
  },
  {
    name: "Swift",
    slug: "swift",
    icon: "🍎",
    tagline: "ภาษาหลักสำหรับสร้าง iOS / macOS app",
    description: "Swift เป็นภาษาจาก Apple สำหรับพัฒนาแอป iOS, macOS, watchOS, tvOS — syntax ทันสมัย ปลอดภัย เร็ว ใช้คู่กับ SwiftUI สร้าง UI ได้สวยงาม ถ้าอยากทำแอป iPhone ต้องรู้ Swift",
    tier: "specialized",
    year: 2014,
    creator: "Apple (Chris Lattner)",
    paradigm: ["Multi-paradigm", "Object-oriented", "Functional", "Protocol-oriented"],
    typing: "Static (strong, type inference)",
    usedFor: ["iOS App", "macOS App", "watchOS", "tvOS", "Server-side (Vapor)"],
    popularFrameworks: ["SwiftUI", "UIKit", "Combine", "Vapor (server)", "Swift Data"],
    whyLearn: [
      "ทางเดียวที่จะสร้าง native iOS app คือ Swift",
      "iOS developer เงินเดือนสูง ตลาดงานดี",
      "SwiftUI ทำ UI ง่ายมาก — declarative เหมือน React",
      "Apple ecosystem ใหญ่ — iPhone, iPad, Mac, Watch, Vision Pro",
      "ภาษาออกแบบดี modern features ครบ",
    ],
    pros: [
      "ออกแบบดี — syntax สะอาด ปลอดภัย",
      "Performance ดี — เร็วใกล้ C",
      "SwiftUI — สร้าง UI ง่าย cross-platform Apple",
      "Xcode playground — ลองโค้ดได้ทันที",
      "Optional types — ป้องกัน null crash",
    ],
    cons: [
      "ใช้ได้แค่ Apple platform",
      "ต้องมี Mac + Xcode ในการพัฒนา",
      "เปลี่ยนแปลงเร็ว — API เก่าถูก deprecate บ่อย",
      "ตลาดงานแคบกว่า JS/Python ในไทย",
    ],
    helloWorld: "print(\"สวัสดีชาวโลก\")",
    codeExample: {
      title: "SwiftUI View",
      code: `import SwiftUI

struct UserListView: View {
    @State private var users: [User] = []
    
    var body: some View {
        NavigationStack {
            List(users) { user in
                HStack {
                    Image(systemName: "person.circle.fill")
                        .foregroundColor(.blue)
                    VStack(alignment: .leading) {
                        Text(user.name).font(.headline)
                        Text(user.email).font(.caption)
                    }
                }
            }
            .navigationTitle("ผู้ใช้งาน")
        }
        .task { users = await fetchUsers() }
    }
}`,
    },
    salary: "35,000 - 140,000 บาท/เดือน",
    demandLevel: "สูง",
    relatedCareers: ["iOS Developer", "Mobile Developer", "Apple Platform Developer"],
  },
  {
    name: "Kotlin",
    slug: "kotlin",
    icon: "🟣",
    tagline: "ภาษาหลักสำหรับ Android — Java ที่ดีกว่า",
    description: "Kotlin เป็นภาษาจาก JetBrains ที่ Google ประกาศให้เป็นภาษาหลักสำหรับ Android — syntax กระชับกว่า Java มาก null-safe, coroutines ดี ใช้ร่วมกับ Java ได้เลย และยังใช้ทำ backend (Ktor) ได้ด้วย",
    tier: "specialized",
    year: 2011,
    creator: "JetBrains",
    paradigm: ["Multi-paradigm", "Object-oriented", "Functional"],
    typing: "Static (type inference, null-safe)",
    usedFor: ["Android App", "Backend (Ktor, Spring)", "Multiplatform (KMP)", "Desktop"],
    popularFrameworks: ["Jetpack Compose", "Ktor", "Spring Boot + Kotlin", "Kotlin Multiplatform"],
    whyLearn: [
      "Google ประกาศให้ Kotlin เป็นภาษาหลักของ Android",
      "กระชับกว่า Java — เขียนโค้ดน้อยลง 30-40%",
      "Null safety ในตัว — ลด NullPointerException",
      "Coroutines — ทำ async ง่ายกว่า Java",
      "Kotlin Multiplatform — share code ระหว่าง Android, iOS, Web",
    ],
    pros: [
      "กระชับ สะอาด เขียนโค้ดน้อยกว่า Java มาก",
      "Null safety — compiler บังคับจัดการ null",
      "100% interop กับ Java — ใช้ Java library ได้หมด",
      "Coroutines ทำ async programming ดีมาก",
      "Jetpack Compose — modern UI toolkit",
    ],
    cons: [
      "Compile time ช้ากว่า Java นิดหน่อย",
      "Community เล็กกว่า Java",
      "Learning curve สำหรับ feature ขั้นสูง เช่น delegation, DSL",
      "Kotlin Multiplatform ยังไม่ mature เท่า Flutter",
    ],
    helloWorld: "fun main() {\n    println(\"สวัสดีชาวโลก\")\n}",
    codeExample: {
      title: "Jetpack Compose UI",
      code: `@Composable
fun UserList(users: List<User>) {
    LazyColumn {
        items(users) { user ->
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(8.dp)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        text = user.name,
                        style = MaterialTheme.typography.titleMedium
                    )
                    Text(
                        text = user.email,
                        style = MaterialTheme.typography.bodySmall
                    )
                }
            }
        }
    }
}`,
    },
    salary: "35,000 - 130,000 บาท/เดือน",
    demandLevel: "สูง",
    relatedCareers: ["Android Developer", "Mobile Developer", "Kotlin Developer"],
  },
  {
    name: "C / C++",
    slug: "c-cpp",
    icon: "⚙️",
    tagline: "ภาษาของ OS, Game Engine, Embedded — เร็วที่สุด",
    description: "C เป็นภาษาพื้นฐานที่ OS (Linux, Windows), database (PostgreSQL), ภาษาอื่นๆ (Python, Node.js) ล้วนเขียนด้วย C ส่วน C++ ใช้สร้าง game engine (Unreal), browser (Chrome), performance-critical software ถ้าอยากเข้าใจคอมพิวเตอร์จริงๆ ต้องรู้ C",
    tier: "specialized",
    year: 1972,
    creator: "Dennis Ritchie (C), Bjarne Stroustrup (C++)",
    paradigm: ["Procedural (C)", "Multi-paradigm (C++)", "Object-oriented"],
    typing: "Static (manual memory management)",
    usedFor: ["Operating Systems", "Game Engines (Unreal)", "Embedded Systems", "Browsers", "Databases", "Compilers"],
    popularFrameworks: ["Unreal Engine", "Qt", "SDL", "OpenGL/Vulkan", "Arduino"],
    whyLearn: [
      "เข้าใจ memory, pointer, CPU ทำงานอย่างไร",
      "ทุกภาษาอื่นถูกสร้างจาก C — รู้ C = เข้าใจทุกภาษา",
      "Game dev ด้วย Unreal Engine ต้องใช้ C++",
      "Embedded, IoT, robotics ใช้ C/C++ เป็นหลัก",
      "Interview ที่บริษัทใหญ่ (FAANG) มักถาม C++ concepts",
    ],
    pros: [
      "เร็วที่สุด — ไม่มี overhead ของ runtime",
      "ควบคุม hardware ได้ตรงๆ — pointer, memory",
      "ใช้ทำ system programming ได้ทุกอย่าง",
      "มาตรฐานอุตสาหกรรมมากว่า 50 ปี",
    ],
    cons: [
      "ยาก — pointer, memory management, segfault",
      "ไม่มี garbage collector — ต้อง free memory เอง",
      "Security issues — buffer overflow, memory leak",
      "C++ ซับซ้อนมาก features เยอะเกิน",
      "Build system ยุ่งยาก (CMake, Makefile)",
    ],
    helloWorld: "#include <stdio.h>\n\nint main() {\n    printf(\"สวัสดีชาวโลก\\n\");\n    return 0;\n}",
    codeExample: {
      title: "C++ Class + Smart Pointer",
      code: `#include <iostream>
#include <memory>
#include <vector>
#include <string>

class User {
public:
    std::string name;
    int age;
    
    User(std::string n, int a) : name(n), age(a) {}
    
    void greet() const {
        std::cout << "สวัสดี ผม " << name 
                  << " อายุ " << age << " ปี" << std::endl;
    }
};

int main() {
    auto user = std::make_unique<User>("สมชาย", 25);
    user->greet();
    
    std::vector<User> team = {{"ก้อง", 22}, {"แจน", 28}};
    for (const auto& u : team) u.greet();
}`,
    },
    salary: "35,000 - 150,000 บาท/เดือน",
    demandLevel: "เฉพาะทาง",
    relatedCareers: ["Game Developer", "Embedded Engineer", "Systems Programmer", "Firmware Engineer"],
  },
  {
    name: "SQL",
    slug: "sql",
    icon: "🗄️",
    tagline: "ภาษาของ Database — ทุก developer ต้องรู้",
    description: "SQL (Structured Query Language) ไม่ใช่ภาษา programming ทั่วไป แต่เป็นภาษาสำหรับจัดการข้อมูลใน database — SELECT, INSERT, UPDATE, DELETE, JOIN ไม่ว่าจะเป็น developer สายไหน ต้องรู้ SQL",
    tier: "specialized",
    year: 1974,
    creator: "IBM (Donald Chamberlin, Raymond Boyce)",
    paradigm: ["Declarative", "Set-based"],
    typing: "Static (database types)",
    usedFor: ["Database Management", "Data Analysis", "Reporting", "Backend Development", "Data Engineering"],
    popularFrameworks: ["PostgreSQL", "MySQL", "SQLite", "SQL Server", "Oracle DB"],
    whyLearn: [
      "ทุกแอปต้องมี database — ทุก developer ต้องรู้ SQL",
      "ดึง วิเคราะห์ รายงานข้อมูลได้อย่างทรงพลัง",
      "JOIN, GROUP BY, Window Functions แก้ปัญหาข้อมูลซับซ้อน",
      "แม้ใช้ ORM ก็ต้องรู้ SQL เพื่อ optimize query",
      "ใช้ได้ตลอดชีวิต — SQL ไม่เคยเปลี่ยนหลักการ",
    ],
    pros: [
      "เรียนรู้ง่าย อ่านเข้าใจง่าย ใกล้ภาษาอังกฤษ",
      "มาตรฐานสากล — ใช้ได้กับทุก relational database",
      "ทรงพลัง — จัดการข้อมูลล้าน rows ได้",
      "ใช้ได้ตลอดชีวิต — ไม่มีวัน deprecated",
    ],
    cons: [
      "ไม่ใช่ general-purpose language — ทำได้แค่จัดการข้อมูล",
      "Syntax แตกต่างเล็กน้อยระหว่าง database",
      "Query ซับซ้อนอ่านยาก",
      "ไม่มี control flow เหมือนภาษาทั่วไป",
    ],
    helloWorld: "SELECT 'สวัสดีชาวโลก' AS greeting;",
    codeExample: {
      title: "JOIN + Aggregation",
      code: `SELECT 
    u.name AS ชื่อ,
    u.email,
    COUNT(o.id) AS จำนวนออเดอร์,
    COALESCE(SUM(o.total), 0) AS ยอดรวม
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.active = true
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 0
ORDER BY ยอดรวม DESC
LIMIT 10;`,
    },
    salary: "25,000 - 120,000 บาท/เดือน",
    demandLevel: "สูงมาก",
    relatedCareers: ["Database Administrator", "Data Analyst", "Data Engineer", "Backend Developer"],
  },
  {
    name: "Dart",
    slug: "dart",
    icon: "🎯",
    tagline: "ภาษาของ Flutter — สร้างแอป cross-platform ด้วยโค้ดเดียว",
    description: "Dart เป็นภาษาจาก Google ที่ใช้คู่กับ Flutter สร้างแอป iOS, Android, Web, Desktop จากโค้ดเดียวกัน — syntax คล้าย Java/C# เรียนง่าย hot reload เห็นผลทันที",
    tier: "specialized",
    year: 2011,
    creator: "Google (Lars Bak, Kasper Lund)",
    paradigm: ["Object-oriented", "Functional"],
    typing: "Static (sound null safety)",
    usedFor: ["Mobile App (Flutter)", "Web App", "Desktop App", "Backend (Dart Frog)"],
    popularFrameworks: ["Flutter", "Dart Frog", "Serverpod"],
    whyLearn: [
      "Flutter — framework cross-platform ที่เติบโตเร็วที่สุด",
      "โค้ดเดียว deploy ได้ทั้ง iOS, Android, Web, Desktop",
      "Hot reload — แก้โค้ดเห็นผลทันทีไม่ต้อง rebuild",
      "Null safety ในตัว — ลด runtime errors",
      "Community โตเร็ว บริษัทในไทยเริ่มใช้ Flutter เยอะขึ้น",
    ],
    pros: [
      "Flutter — cross-platform ที่ performance ดีมาก",
      "Hot reload — developer experience ดีเยี่ยม",
      "Null safety — compiler บังคับจัดการ null",
      "Syntax คุ้นเคย ถ้ารู้ Java/C#/JS เรียนเร็ว",
      "Compile เป็น native code (AOT) เร็ว",
    ],
    cons: [
      "ผูกกับ Flutter เป็นหลัก — นอก Flutter ใช้น้อย",
      "Ecosystem เล็กกว่า JS/Swift/Kotlin",
      "ตลาดงานยังน้อยกว่า native (Swift/Kotlin)",
      "ขนาดแอปใหญ่กว่า native",
    ],
    helloWorld: "void main() {\n  print('สวัสดีชาวโลก');\n}",
    codeExample: {
      title: "Flutter Widget",
      code: `class UserCard extends StatelessWidget {
  final String name;
  final String email;
  
  const UserCard({required this.name, required this.email});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: const CircleAvatar(
          child: Icon(Icons.person),
        ),
        title: Text(name),
        subtitle: Text(email),
        trailing: IconButton(
          icon: const Icon(Icons.message),
          onPressed: () => print('Chat with \$name'),
        ),
      ),
    );
  }
}`,
    },
    salary: "30,000 - 110,000 บาท/เดือน",
    demandLevel: "สูง",
    relatedCareers: ["Flutter Developer", "Mobile Developer", "Cross-Platform Developer"],
  },

  // ─── TIER: RISING STAR ───
  {
    name: "Elixir",
    slug: "elixir",
    icon: "💧",
    tagline: "ทำ real-time ดีที่สุด — สร้างมาสำหรับ concurrency",
    description: "Elixir รันบน Erlang VM (BEAM) ที่ออกแบบมาสำหรับระบบ telecom — fault-tolerant, concurrent, distributed ดีที่สุด ใช้สร้าง chat, real-time app, IoT ที่ต้องรองรับ connection เป็นล้าน Phoenix LiveView ทำ real-time web โดยไม่ต้องเขียน JavaScript",
    tier: "rising-star",
    year: 2011,
    creator: "José Valim",
    paradigm: ["Functional", "Concurrent", "Distributed"],
    typing: "Dynamic (มี Dialyzer สำหรับ type checking)",
    usedFor: ["Real-time Applications", "Chat/Messaging", "IoT", "Distributed Systems", "Web Backend"],
    popularFrameworks: ["Phoenix", "Phoenix LiveView", "Ecto", "Nerves (IoT)", "Nx (ML)"],
    whyLearn: [
      "Concurrency ดีที่สุดในโลก — รองรับ connection เป็นล้าน",
      "Phoenix LiveView — real-time web โดยไม่ต้องเขียน JS",
      "Fault-tolerant — process crash ไม่ทำให้ระบบล่ม",
      "Developer happiness สูง — syntax สวย community ดี",
      "Discord, Pinterest, PepsiCo ใช้ Elixir ใน production",
    ],
    pros: [
      "Concurrency ดีที่สุด — lightweight processes เป็นล้าน",
      "Fault-tolerant — \"let it crash\" philosophy",
      "Phoenix LiveView ลด complexity ของ frontend",
      "Pattern matching ทรงพลัง",
      "Hot code reloading — อัปเดตโค้ดโดยไม่ต้อง restart",
    ],
    cons: [
      "Community เล็ก ตลาดงานน้อย",
      "Functional paradigm — คนที่เคยเขียน OOP ต้องปรับ mindset",
      "Ecosystem เล็ก library น้อยกว่า JS/Python",
      "Dynamic typing ทำให้ debug ยากบางเคส",
    ],
    helloWorld: "IO.puts(\"สวัสดีชาวโลก\")",
    codeExample: {
      title: "Phoenix LiveView",
      code: `defmodule MyAppWeb.CounterLive do
  use MyAppWeb, :live_view

  def mount(_params, _session, socket) do
    {:ok, assign(socket, count: 0)}
  end

  def handle_event("increment", _params, socket) do
    {:noreply, update(socket, :count, &(&1 + 1))}
  end

  def render(assigns) do
    ~H\"\"\"
    <div class="text-center">
      <h1 class="text-4xl"><%= @count %></h1>
      <button phx-click="increment">+1</button>
    </div>
    \"\"\"
  end
end`,
    },
    salary: "45,000 - 160,000 บาท/เดือน",
    demandLevel: "เฉพาะทาง",
    relatedCareers: ["Backend Developer", "Elixir Developer", "Real-time Systems Engineer"],
  },
  {
    name: "Zig",
    slug: "zig",
    icon: "⚡",
    tagline: "C ที่ดีกว่า — ง่ายขึ้น ปลอดภัยขึ้น ไม่ต้อง header files",
    description: "Zig เป็นภาษาใหม่ที่ต้องการแทนที่ C — ง่ายกว่า ปลอดภัยกว่า ไม่มี hidden control flow, ไม่มี hidden allocations, comptime (compile-time execution) ทรงพลัง ใช้เป็น C/C++ build system ได้ด้วย Bun (JS runtime) เขียนด้วย Zig",
    tier: "rising-star",
    year: 2015,
    creator: "Andrew Kelley",
    paradigm: ["Procedural", "Systems"],
    typing: "Static (comptime)",
    usedFor: ["Systems Programming", "Game Development", "Embedded", "Build Systems", "Performance-critical"],
    popularFrameworks: ["Bun (JS runtime)", "TigerBeetle (database)"],
    whyLearn: [
      "Bun (JS runtime เร็วสุด) เขียนด้วย Zig — ชุมชนโตเร็ว",
      "ง่ายกว่า Rust — ไม่มี borrow checker แต่ยัง memory-safe",
      "Comptime — meta-programming ที่ทรงพลังมาก",
      "Interop กับ C code ได้ทันที ไม่ต้อง FFI",
      "Community กำลังเติบโตเร็ว น่าจับตาดู",
    ],
    pros: [
      "ง่ายกว่า Rust — เรียนรู้เร็วกว่า",
      "No hidden allocations, no hidden control flow",
      "Comptime — รันโค้ดตอน compile ได้",
      "Cross-compile ง่ายมาก",
      "C interop ดีเยี่ยม",
    ],
    cons: [
      "ยังไม่ stable — pre-1.0 อาจเปลี่ยนแปลง",
      "Ecosystem เล็กมาก",
      "ตลาดงานแทบไม่มี (ยัง)",
      "Documentation ยังไม่สมบูรณ์",
    ],
    helloWorld: "const std = @import(\"std\");\n\npub fn main() void {\n    std.debug.print(\"สวัสดีชาวโลก\\n\", .{});\n}",
    codeExample: {
      title: "HTTP Server",
      code: `const std = @import("std");

pub fn main() !void {
    var server = std.http.Server.init(.{
        .reuse_address = true,
    });
    defer server.deinit();

    const address = try std.net.Address
        .parseIp("127.0.0.1", 8080);
    try server.listen(address);

    std.debug.print(
        "Server listening on :8080\\n", .{}
    );
}`,
    },
    salary: "50,000 - 180,000 บาท/เดือน",
    demandLevel: "เฉพาะทาง",
    relatedCareers: ["Systems Programmer", "Performance Engineer"],
  },
  {
    name: "Ruby",
    slug: "ruby",
    icon: "💎",
    tagline: "ภาษาแห่งความสุข — Syntax สวย สร้างเว็บเร็วด้วย Rails",
    description: "Ruby เป็นภาษาที่เน้น developer happiness — syntax อ่านเหมือนภาษาอังกฤษ Ruby on Rails เป็น framework ที่ปฏิวัติวงการ web development GitHub, Shopify, Airbnb, Basecamp ล้วนเริ่มต้นด้วย Rails",
    tier: "rising-star",
    year: 1995,
    creator: "Yukihiro Matsumoto (Matz)",
    paradigm: ["Object-oriented", "Functional", "Multi-paradigm"],
    typing: "Dynamic (duck typing)",
    usedFor: ["Web Backend", "Startup MVP", "Automation", "DevOps (Chef, Puppet)", "Prototyping"],
    popularFrameworks: ["Ruby on Rails", "Sinatra", "Hanami", "RSpec", "Sidekiq"],
    whyLearn: [
      "Rails — สร้าง web app เร็วที่สุด MVP ใน 1-2 สัปดาห์",
      "GitHub, Shopify, Airbnb, Basecamp ใช้ Rails",
      "Convention over Configuration — ไม่ต้อง config เยอะ",
      "Syntax สวยที่สุด อ่านเหมือนภาษาอังกฤษ",
      "เหมาะสำหรับ startup ที่ต้องการ ship เร็ว",
    ],
    pros: [
      "Developer happiness — เขียนสนุก อ่านง่าย",
      "Rails — สร้าง web app ได้เร็วมาก",
      "Convention over Configuration — ลด decision fatigue",
      "Community ดี RubyGems มี library เยอะ",
      "Testing culture แข็งแรง — RSpec, Minitest",
    ],
    cons: [
      "ช้ากว่า Go, Java, Node.js (ดีขึ้นใน Ruby 3.x)",
      "ตลาดงานในไทยน้อย (ต่างประเทศยังเยอะ)",
      "Scaling ต้องระวัง — ไม่เหมาะ high-concurrency",
      "Magic มาก — เบื้องหลังทำอะไรเยอะ debug ยาก",
    ],
    helloWorld: "puts 'สวัสดีชาวโลก'",
    codeExample: {
      title: "Rails Controller + Model",
      code: `class UsersController < ApplicationController
  def index
    @users = User.where(active: true)
                 .order(created_at: :desc)
                 .page(params[:page])
    
    render json: @users
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: 422
    end
  end

  private

  def user_params
    params.require(:user)
          .permit(:name, :email, :role)
  end
end`,
    },
    salary: "35,000 - 130,000 บาท/เดือน",
    demandLevel: "ปานกลาง",
    relatedCareers: ["Ruby Developer", "Rails Developer", "Full-Stack Developer"],
  },
];

export function getLanguageBySlug(slug: string): ProgrammingLanguage | undefined {
  return languages.find((l) => l.slug === slug);
}

export function getLanguagesByTier(tier: string): ProgrammingLanguage[] {
  return languages.filter((l) => l.tier === tier);
}
