export interface CloudService {
  name: string;
  thaiName: string;
  category: string;
  description: string;
  realWorldExample: string;
  awsName?: string;
  gcpName?: string;
  azureName?: string;
  pricing: string;
}

export interface CloudProvider {
  name: string;
  slug: string;
  icon: string;
  tagline: string;
  description: string;
  color: string;
  marketShare: string;
  founded: string;
  headquarters: string;
  thaiPresence: string;
  freeTrialCredit: string;
  whyChoose: string[];
  bestFor: string[];
  services: CloudService[];
  realWorldCases: { company: string; useCase: string }[];
  certifications: { name: string; level: string; salary: string }[];
  gettingStarted: string[];
  proTips: string[];
}

export const serviceCategories = [
  { key: "compute", label: "Compute (เซิร์ฟเวอร์)", icon: "🖥️" },
  { key: "storage", label: "Storage (เก็บข้อมูล)", icon: "💾" },
  { key: "database", label: "Database", icon: "🗃️" },
  { key: "network", label: "Network & CDN", icon: "🌐" },
  { key: "serverless", label: "Serverless", icon: "⚡" },
  { key: "container", label: "Container & K8s", icon: "🐳" },
  { key: "ai", label: "AI & ML", icon: "🤖" },
  { key: "devops", label: "DevOps & CI/CD", icon: "🔧" },
  { key: "security", label: "Security & IAM", icon: "🔒" },
  { key: "monitoring", label: "Monitoring", icon: "📊" },
];

export const cloudProviders: CloudProvider[] = [
  {
    name: "Amazon Web Services (AWS)",
    slug: "aws",
    icon: "🟠",
    tagline: "ผู้นำตลาด Cloud อันดับ 1 — มี service ครบที่สุดในโลก",
    description: "AWS เป็น cloud provider ที่ใหญ่ที่สุดในโลก ครองส่วนแบ่งตลาดมากกว่า 30% — เริ่มจาก Amazon ที่ต้องการ infrastructure สำหรับ e-commerce แล้วเปิดให้คนอื่นใช้ มี service มากกว่า 200 ตัว ครบทุกอย่างที่ต้องการ ธนาคาร startup องค์กรใหญ่ในไทยส่วนใหญ่ใช้ AWS",
    color: "border-orange-300 dark:border-orange-700",
    marketShare: "~31% (อันดับ 1)",
    founded: "2006",
    headquarters: "Seattle, USA",
    thaiPresence: "มี AWS Thailand team, Partner Network, มี Bangkok Region ใกล้ๆ (Singapore)",
    freeTrialCredit: "Free Tier 12 เดือน + Always Free services",
    whyChoose: [
      "Service มากที่สุด 200+ ตัว — อยากทำอะไรก็มีหมด",
      "Community & documentation ใหญ่ที่สุด หาข้อมูลง่าย",
      "ตลาดงานเยอะที่สุด — บริษัทส่วนใหญ่ในไทยใช้ AWS",
      "Free Tier ใช้ได้ 12 เดือน เรียนรู้ได้ฟรี",
      "Certification มีค่ามาก เงินเดือนเพิ่ม 20-30%",
      "Region ใกล้ไทย (Singapore, Mumbai) latency ต่ำ",
    ],
    bestFor: ["Startup ที่ต้องการ scale เร็ว", "Enterprise ที่ต้องการ service ครบ", "E-commerce", "FinTech", "Media & Streaming"],
    services: [
      { name: "EC2", thaiName: "เซิร์ฟเวอร์เสมือน", category: "compute", description: "สร้าง virtual server ได้ทันที เลือกขนาด CPU/RAM ได้ จ่ายตามใช้จริง", realWorldExample: "เหมือนเช่าคอมพิวเตอร์ 1 เครื่อง — ต้องการแรงมากก็เพิ่ม RAM/CPU ได้ทันที ไม่ต้องซื้อเครื่องจริง", pricing: "เริ่ม $0.0058/ชม (t4g.nano)" },
      { name: "S3", thaiName: "เก็บไฟล์ไม่จำกัด", category: "storage", description: "เก็บไฟล์ได้ไม่จำกัด — รูป วิดีโอ backup ข้อมูล ทนทาน 99.999999999%", realWorldExample: "เหมือน Google Drive แต่สำหรับแอป — เก็บรูปสินค้า, วิดีโอ, backup database ได้หมด ไม่มีวันเต็ม", pricing: "~$0.023/GB/เดือน" },
      { name: "RDS", thaiName: "Database สำเร็จรูป", category: "database", description: "Database ที่ AWS จัดการให้ — backup, update, scale อัตโนมัติ รองรับ PostgreSQL, MySQL, etc.", realWorldExample: "แทนที่จะติดตั้ง PostgreSQL บน server เอง ให้ AWS ดูแลให้ — backup ทุกวัน, auto-failover เมื่อพัง", pricing: "เริ่ม $0.017/ชม (db.t4g.micro)" },
      { name: "Lambda", thaiName: "รันโค้ดไม่ต้องมี server", category: "serverless", description: "เขียนฟังก์ชัน upload ขึ้นไป AWS รันให้เอง จ่ายเฉพาะตอนที่โค้ดทำงาน", realWorldExample: "เหมือนจ้างคนทำงานเป็นชิ้น — มี order เข้ามา Lambda ก็ประมวลผล ไม่มี order ก็ไม่จ่ายเงิน", pricing: "ฟรี 1 ล้าน requests/เดือน" },
      { name: "CloudFront", thaiName: "CDN ส่งเว็บเร็ว", category: "network", description: "กระจายเว็บไปทั่วโลก ผู้ใช้เปิดเว็บจาก server ที่ใกล้ที่สุด โหลดเร็วมาก", realWorldExample: "เหมือน 7-Eleven — แทนที่จะมีร้านเดียว ก็เปิดสาขาทั่วโลก ลูกค้าไปร้านที่ใกล้ที่สุด", pricing: "เริ่ม $0.085/GB" },
      { name: "ECS / EKS", thaiName: "รัน Container / Kubernetes", category: "container", description: "รัน Docker containers บน AWS — ECS ง่ายกว่า EKS คือ managed Kubernetes", realWorldExample: "เหมือนท่าเรือ container — จัดการ deploy update scale แอปที่อยู่ใน container อัตโนมัติ", pricing: "ECS: จ่ายแค่ EC2/Fargate, EKS: $0.10/ชม + worker nodes" },
      { name: "SageMaker", thaiName: "สร้าง ML Model", category: "ai", description: "Platform สำหรับ build, train, deploy ML models — ครบวงจร notebook ถึง production", realWorldExample: "แทนที่จะ setup GPU server เอง SageMaker จัดให้ — train model, ทำ endpoint, monitor ได้หมด", pricing: "จ่ายตาม instance ที่ใช้ train/host" },
      { name: "IAM", thaiName: "จัดการสิทธิ์", category: "security", description: "กำหนดว่าใครเข้าถึงอะไรได้บ้าง — user, role, policy ละเอียดมาก", realWorldExample: "เหมือนระบบ keycard บริษัท — กำหนดว่าใครเข้าห้องไหนได้ ใครทำอะไรได้", pricing: "ฟรี" },
      { name: "CloudWatch", thaiName: "ดู logs & metrics", category: "monitoring", description: "ดู logs, metrics, alarms ของทุก service — รู้ทันทีเมื่อมีปัญหา", realWorldExample: "เหมือนกล้องวงจรปิด + สัญญาณเตือน — ดูว่าระบบทำงานปกติไหม แจ้งเตือนเมื่อผิดปกติ", pricing: "Free tier มี 10 custom metrics" },
      { name: "CodePipeline", thaiName: "CI/CD อัตโนมัติ", category: "devops", description: "สร้าง pipeline อัตโนมัติ — push code → build → test → deploy ไม่ต้องทำเอง", realWorldExample: "เหมือนสายพานโรงงาน — push code เข้า Git แล้วทุกอย่างจะ test + deploy อัตโนมัติ", pricing: "1 pipeline ฟรี จากนั้น $1/pipeline/เดือน" },
    ],
    realWorldCases: [
      { company: "Netflix", useCase: "Streaming วิดีโอให้ 200+ ล้านคนทั่วโลก ใช้ AWS ทั้ง EC2, S3, CloudFront, DynamoDB" },
      { company: "Airbnb", useCase: "รันแพลตฟอร์มจอง ใช้ EC2, RDS, ElastiCache, S3 รองรับ traffic peak ช่วงวันหยุด" },
      { company: "SCB (ไทย)", useCase: "ระบบ mobile banking, payment gateway ใช้ AWS ทั้ง compute, database, security" },
      { company: "Grab (ไทย)", useCase: "ระบบเรียกรถ, food delivery ใช้ AWS รองรับ real-time location, order processing" },
      { company: "KBTG (ไทย)", useCase: "ระบบ K+ mobile banking ใช้ AWS Kubernetes, microservices, data analytics" },
    ],
    certifications: [
      { name: "Cloud Practitioner", level: "Foundation", salary: "+10,000-20,000 บาท/เดือน" },
      { name: "Solutions Architect Associate", level: "Associate", salary: "+15,000-30,000 บาท/เดือน" },
      { name: "Developer Associate", level: "Associate", salary: "+15,000-25,000 บาท/เดือน" },
      { name: "Solutions Architect Professional", level: "Professional", salary: "+25,000-50,000 บาท/เดือน" },
      { name: "DevOps Engineer Professional", level: "Professional", salary: "+25,000-45,000 บาท/เดือน" },
    ],
    gettingStarted: [
      "สมัคร AWS Free Tier ที่ aws.amazon.com (ใช้บัตรเครดิต แต่ไม่โดนเก็บเงินถ้าอยู่ใน free tier)",
      "เริ่มจาก IAM: สร้าง user แยก อย่าใช้ root account",
      "ลองสร้าง EC2 instance: เลือก Amazon Linux 2 → t2.micro (free tier)",
      "ลอง S3: สร้าง bucket → upload ไฟล์ → ตั้ง permission",
      "ลอง RDS: สร้าง PostgreSQL database → connect จาก app",
      "ลอง Lambda: สร้างฟังก์ชัน Hello World → ทดสอบผ่าน console",
      "เรียน AWS Skill Builder (ฟรี) — มีคอร์สเยอะมาก",
    ],
    proTips: [
      "ตั้ง Billing Alarm ที่ $5 ก่อนเลย — ป้องกันค่าใช้จ่ายเกิน",
      "ใช้ Region Singapore (ap-southeast-1) สำหรับ user ไทย — latency ต่ำสุด",
      "ลบ resources ที่ไม่ใช้ทันที — EBS volumes, Elastic IPs ที่ไม่ attached ยังโดน charge",
      "ใช้ Spot Instances ลดค่า compute ได้ 60-90% สำหรับ workload ที่ interrupt ได้",
      "เรียน AWS Well-Architected Framework — best practices ในการออกแบบระบบ",
      "ใช้ Infrastructure as Code (CloudFormation/Terraform) ตั้งแต่แรก — อย่าคลิกสร้างใน console",
    ],
  },
  {
    name: "Google Cloud Platform (GCP)",
    slug: "gcp",
    icon: "🔵",
    tagline: "Cloud จาก Google — เด่นด้าน Data, AI, Kubernetes",
    description: "GCP เป็น cloud จาก Google ที่ใช้ infrastructure เดียวกับ Google Search, YouTube, Gmail — เด่นเรื่อง Big Data (BigQuery), AI/ML, Kubernetes (Google เป็นคนสร้าง K8s) และ developer experience ที่ดี UX สะอาด ใช้ง่ายกว่า AWS",
    color: "border-blue-300 dark:border-blue-700",
    marketShare: "~11% (อันดับ 3)",
    founded: "2008",
    headquarters: "Mountain View, USA",
    thaiPresence: "มี Google Cloud Thailand team, Partner network, ใช้ Region Singapore/Jakarta",
    freeTrialCredit: "$300 credit ใช้ได้ 90 วัน + Always Free tier",
    whyChoose: [
      "BigQuery — data warehouse ที่เร็วที่สุด query TB ในวินาที",
      "GKE — managed Kubernetes ดีที่สุด (Google สร้าง K8s เอง)",
      "AI/ML — Vertex AI, Gemini API ทรงพลัง",
      "UX ดีกว่า AWS — console ใช้ง่าย สะอาด ค้นหาได้",
      "$300 free credit — ลองใช้ได้เยอะมากภายใน 90 วัน",
      "Firebase — backend สำหรับ mobile/web app ที่ดีที่สุด",
    ],
    bestFor: ["Data & Analytics", "AI/ML workloads", "Kubernetes-heavy teams", "Startup (เครดิตฟรี)", "Mobile app (Firebase)"],
    services: [
      { name: "Compute Engine", thaiName: "เซิร์ฟเวอร์เสมือน", category: "compute", description: "VM เหมือน EC2 — สร้าง server ได้ทันที เลือก CPU/RAM custom ได้ละเอียดมาก", realWorldExample: "เหมือน EC2 ของ AWS แต่จุดเด่นคือ custom machine types — เลือก 3.5 vCPU + 6.5 GB RAM ได้ ไม่ต้องเลือกจาก size สำเร็จรูป", pricing: "เริ่ม $0.006/ชม (e2-micro) — มี always free 1 instance" },
      { name: "Cloud Storage", thaiName: "เก็บไฟล์", category: "storage", description: "เก็บไฟล์เหมือน S3 — มีหลาย storage class ตามความถี่ที่เข้าถึง ถูกลงได้มาก", realWorldExample: "เก็บรูปที่ผู้ใช้ upload ใน Standard class / เก็บ backup ที่ไม่ค่อยเข้าถึงใน Coldline ถูกกว่า 5 เท่า", pricing: "Standard: $0.020/GB/เดือน" },
      { name: "BigQuery", thaiName: "Data Warehouse เร็วสุด", category: "database", description: "Data warehouse serverless — query ข้อมูล TB ในวินาที ไม่ต้อง setup server จ่ายตาม query ที่รัน", realWorldExample: "เหมือนมี data analyst ที่เร็วสุดในโลก — โยนข้อมูลล้าน rows ถาม SQL ได้คำตอบใน 3 วินาที ไม่ต้อง index", pricing: "ฟรี 1 TB query/เดือน จากนั้น $5/TB" },
      { name: "Cloud Run", thaiName: "รัน Container serverless", category: "serverless", description: "Deploy container ได้ทันที ไม่ต้องจัดการ server — scale to zero จ่ายเฉพาะตอนมี request", realWorldExample: "เหมือน Lambda แต่ใช้ Docker container — เขียนแอปปกติ ใส่ Dockerfile แล้ว deploy เลย ไม่มีคนใช้ก็ไม่จ่ายเงิน", pricing: "ฟรี 2 ล้าน requests/เดือน" },
      { name: "GKE", thaiName: "Kubernetes ที่ดีที่สุด", category: "container", description: "Managed Kubernetes จาก Google (คนสร้าง K8s) — auto-upgrade, auto-repair, auto-scaling", realWorldExample: "เหมือน EKS ของ AWS แต่ Google สร้าง Kubernetes เอง ทำให้ GKE ดีกว่า — upgrade อัตโนมัติ ปลอดภัยกว่า", pricing: "Autopilot: จ่ายตาม pod ที่ใช้" },
      { name: "Vertex AI", thaiName: "ML Platform", category: "ai", description: "Platform สำหรับ build, train, deploy ML — รวม AutoML, custom training, model garden, Gemini API", realWorldExample: "ถ้าอยากสร้าง AI app — Vertex AI มี Gemini API (LLM), Vision AI (ดูรูป), NLP ครบหมด ไม่ต้อง train model เอง", pricing: "จ่ายตามใช้ — Gemini API มี free tier" },
      { name: "Cloud SQL", thaiName: "Managed Database", category: "database", description: "Database สำเร็จรูป — PostgreSQL, MySQL, SQL Server ที่ Google ดูแลให้", realWorldExample: "เหมือน RDS ของ AWS — ไม่ต้อง backup เอง update เอง Google ดูแลให้ทั้งหมด", pricing: "เริ่ม $0.015/ชม" },
      { name: "Firebase", thaiName: "Backend สำหรับ App", category: "serverless", description: "Backend-as-a-Service — Auth, Firestore (NoSQL), Storage, Hosting, Cloud Functions ครบในที่เดียว", realWorldExample: "สร้างแอปมือถือ ไม่ต้องเขียน backend เอง — Firebase จัดการ login, database, push notification, hosting ให้หมด", pricing: "Spark plan ฟรี / Blaze plan จ่ายตามใช้" },
    ],
    realWorldCases: [
      { company: "Spotify", useCase: "ใช้ GCP สำหรับ data analytics, personalized playlists ด้วย BigQuery + Dataflow" },
      { company: "Twitter/X", useCase: "ย้ายมา GCP สำหรับ data processing, BigQuery analytics" },
      { company: "Shopee", useCase: "ใช้ GCP BigQuery สำหรับ analytics, Vertex AI สำหรับ recommendation" },
      { company: "Pomelo Fashion (ไทย)", useCase: "ใช้ GCP สำหรับ e-commerce platform, data analytics" },
      { company: "LINE (ไทย)", useCase: "ใช้ Firebase สำหรับบาง service, BigQuery สำหรับ analytics" },
    ],
    certifications: [
      { name: "Cloud Digital Leader", level: "Foundation", salary: "+10,000-15,000 บาท/เดือน" },
      { name: "Associate Cloud Engineer", level: "Associate", salary: "+15,000-25,000 บาท/เดือน" },
      { name: "Professional Cloud Architect", level: "Professional", salary: "+25,000-45,000 บาท/เดือน" },
      { name: "Professional Data Engineer", level: "Professional", salary: "+25,000-45,000 บาท/เดือน" },
      { name: "Professional ML Engineer", level: "Professional", salary: "+30,000-50,000 บาท/เดือน" },
    ],
    gettingStarted: [
      "สมัครที่ cloud.google.com — ได้ $300 credit ใช้ 90 วัน",
      "สร้าง Project: console.cloud.google.com → New Project",
      "ลอง Cloud Run: เขียน app → สร้าง Dockerfile → gcloud run deploy",
      "ลอง BigQuery: เปิด BigQuery → ลอง query public datasets (ฟรี)",
      "ลอง Firebase: สร้างแอป web/mobile → เพิ่ม Auth + Firestore",
      "ติดตั้ง gcloud CLI: brew install google-cloud-sdk",
      "เรียน Google Cloud Skills Boost (ฟรี) — มี hands-on labs",
    ],
    proTips: [
      "ใช้ $300 credit ลองทุก service — credit เยอะมากพอลองได้หมด",
      "BigQuery ฟรี 1 TB/เดือน — ฝึก SQL กับ public datasets ได้เลย",
      "Cloud Run คือ entry point ที่ง่ายที่สุด — deploy container ได้ทันที",
      "ใช้ Firebase สำหรับ side project — Auth + Firestore + Hosting ฟรี",
      "ตั้ง Budget Alert ป้องกันค่าใช้จ่ายเกิน",
      "เรียน BigQuery ให้เก่ง — เป็นทักษะที่ตลาดต้องการมาก",
    ],
  },
  {
    name: "Microsoft Azure",
    slug: "azure",
    icon: "🟦",
    tagline: "Cloud สำหรับ Enterprise — เชื่อมกับ Microsoft ecosystem ดีที่สุด",
    description: "Azure เป็น cloud จาก Microsoft ที่ครองอันดับ 2 ของโลก — เด่นเรื่อง enterprise integration เชื่อมกับ Active Directory, Office 365, Teams ได้สมบูรณ์ องค์กรใหญ่ที่ใช้ Microsoft อยู่แล้วมักเลือก Azure เป็นอันดับแรก และเป็นพันธมิตรหลักกับ OpenAI",
    color: "border-sky-300 dark:border-sky-700",
    marketShare: "~24% (อันดับ 2)",
    founded: "2010",
    headquarters: "Redmond, USA",
    thaiPresence: "มี Microsoft Thailand office, Partner network ใหญ่, มีลูกค้า enterprise เยอะ",
    freeTrialCredit: "$200 credit 30 วัน + Always Free 12 เดือน + Always Free services",
    whyChoose: [
      "เชื่อมกับ Microsoft ecosystem — Active Directory, Office 365, Teams",
      "Azure OpenAI Service — ใช้ GPT-4, DALL-E ใน enterprise ได้ปลอดภัย",
      "Hybrid cloud ดีที่สุด — Azure Arc เชื่อม on-prem กับ cloud",
      "Enterprise compliance ครบ — ISO, SOC, HIPAA, PCI-DSS",
      "องค์กรใหญ่ในไทยหลายแห่งใช้ Azure — ธนาคาร รัฐ telco",
      ".NET / C# developer ใช้ Azure ได้ราบรื่นที่สุด",
    ],
    bestFor: ["Enterprise / องค์กรใหญ่", "Microsoft ecosystem users", "Hybrid cloud", ".NET/C# developers", "AI (Azure OpenAI)"],
    services: [
      { name: "Virtual Machines", thaiName: "เซิร์ฟเวอร์เสมือน", category: "compute", description: "VM เหมือน EC2 — แต่รองรับ Windows Server ดีที่สุด ทำ hybrid กับ on-prem ได้", realWorldExample: "บริษัทที่ใช้ Windows Server อยู่แล้ว ย้ายขึ้น Azure VM ง่ายที่สุด — license เก่าใช้ต่อได้ (Azure Hybrid Benefit)", pricing: "เริ่ม $0.008/ชม (B1ls)" },
      { name: "Blob Storage", thaiName: "เก็บไฟล์", category: "storage", description: "เก็บไฟล์เหมือน S3 — Hot, Cool, Cold, Archive tier ตามความถี่เข้าถึง", realWorldExample: "เก็บไฟล์ทุกประเภท — รูป เอกสาร backup เลือก tier ให้ตรงกับการใช้งาน Archive ถูกสุด", pricing: "Hot: $0.018/GB/เดือน" },
      { name: "Azure SQL", thaiName: "SQL Server บน Cloud", category: "database", description: "Managed SQL Server — ถ้าใช้ SQL Server อยู่แล้ว ย้ายขึ้น Azure SQL ได้ทันที", realWorldExample: "บริษัทที่ใช้ SQL Server on-prem ย้ายขึ้น Azure SQL — performance ดีขึ้น ไม่ต้อง maintain เอง", pricing: "เริ่ม $5/เดือน (Basic)" },
      { name: "Azure Functions", thaiName: "Serverless function", category: "serverless", description: "เหมือน Lambda — รันโค้ดเมื่อมี event ไม่ต้องจัดการ server", realWorldExample: "ส่ง email อัตโนมัติเมื่อมี order ใหม่ — Functions ทำงานเฉพาะตอนมี event ไม่มีก็ไม่จ่าย", pricing: "ฟรี 1 ล้าน executions/เดือน" },
      { name: "AKS", thaiName: "Managed Kubernetes", category: "container", description: "Managed Kubernetes เหมือน GKE/EKS — control plane ฟรี จ่ายแค่ worker nodes", realWorldExample: "รัน microservices บน Kubernetes — Azure จัดการ control plane ให้ จ่ายแค่ server ที่ใช้จริง", pricing: "Control plane ฟรี จ่ายแค่ VMs" },
      { name: "Azure OpenAI", thaiName: "GPT-4 สำหรับ Enterprise", category: "ai", description: "ใช้ GPT-4, GPT-4o, DALL-E, Whisper ใน Azure environment — data ไม่ถูกใช้ train model", realWorldExample: "สร้าง chatbot ลูกค้าด้วย GPT-4 โดยที่ข้อมูลลูกค้าไม่ออกไปไหน — ปลอดภัยกว่าใช้ OpenAI API ตรง", pricing: "จ่ายตาม token ที่ใช้" },
      { name: "Azure DevOps", thaiName: "CI/CD + Project Management", category: "devops", description: "Boards (Jira), Repos (Git), Pipelines (CI/CD), Artifacts — ครบจบในที่เดียว", realWorldExample: "ทีม dev ใช้ Azure DevOps แทน Jira+GitHub+Jenkins — ทุกอย่างอยู่ในระบบเดียว เชื่อมกันง่าย", pricing: "ฟรี 5 users แรก" },
      { name: "Azure AD (Entra ID)", thaiName: "จัดการ Identity", category: "security", description: "Identity & Access Management — SSO, MFA, Conditional Access เชื่อมกับ Office 365", realWorldExample: "พนักงานใช้ account เดียว login ทุกระบบ — Office 365, Azure, แอปบริษัท หมดปัญหาลืม password", pricing: "Free tier มีให้ + Premium P1/P2" },
    ],
    realWorldCases: [
      { company: "LinkedIn", useCase: "เป็นของ Microsoft — ใช้ Azure ทั้ง platform สำหรับ social network มืออาชีพ" },
      { company: "Samsung", useCase: "ใช้ Azure สำหรับ IoT, smart home, connected devices" },
      { company: "ธนาคารกรุงเทพ (BBL)", useCase: "ใช้ Azure สำหรับ core banking modernization, AI-powered services" },
      { company: "ปตท. (PTT)", useCase: "ใช้ Azure สำหรับ digital transformation, data analytics, IoT ในโรงกลั่น" },
      { company: "CP All", useCase: "ใช้ Azure AI + IoT สำหรับ smart retail, inventory management" },
    ],
    certifications: [
      { name: "Azure Fundamentals (AZ-900)", level: "Foundation", salary: "+8,000-15,000 บาท/เดือน" },
      { name: "Azure Administrator (AZ-104)", level: "Associate", salary: "+15,000-25,000 บาท/เดือน" },
      { name: "Azure Developer (AZ-204)", level: "Associate", salary: "+15,000-25,000 บาท/เดือน" },
      { name: "Azure Solutions Architect (AZ-305)", level: "Expert", salary: "+25,000-50,000 บาท/เดือน" },
      { name: "Azure AI Engineer (AI-102)", level: "Associate", salary: "+20,000-40,000 บาท/เดือน" },
    ],
    gettingStarted: [
      "สมัครที่ azure.microsoft.com — ได้ $200 credit 30 วัน",
      "เปิด Azure Portal: portal.azure.com",
      "สร้าง Resource Group: จัดกลุ่ม resources ตาม project",
      "ลอง Azure App Service: deploy web app ง่ายสุด",
      "ลอง Azure Functions: สร้าง HTTP trigger function",
      "ติดตั้ง Azure CLI: brew install azure-cli",
      "เรียน Microsoft Learn (ฟรี) — มี learning path ครบ",
    ],
    proTips: [
      "ใช้ Azure Hybrid Benefit ถ้ามี Windows/SQL license เดิม ประหยัดได้ 40-80%",
      "ใช้ Azure DevOps ฟรี 5 users — ดีกว่า GitHub Actions สำหรับ .NET projects",
      "Azure OpenAI Service — ลองทำ chatbot ด้วย GPT-4 ปลอดภัยกว่า OpenAI ตรง",
      "ใช้ Azure Cost Management ดูค่าใช้จ่ายทุกวัน",
      "Microsoft Learn มีคอร์สฟรีเป็นร้อย + sandbox ลองใช้ได้เลย",
    ],
  },
  {
    name: "Vercel",
    slug: "vercel",
    icon: "▲",
    tagline: "Deploy เว็บ Next.js ง่ายที่สุดในโลก — push แล้วเสร็จ",
    description: "Vercel เป็น platform ที่สร้าง Next.js — deploy เว็บ frontend ง่ายสุดๆ แค่ push code ไป GitHub ก็ deploy อัตโนมัติ มี CDN ทั่วโลก, preview deployments ทุก PR, analytics ในตัว เป็นตัวเลือกอันดับ 1 สำหรับ frontend developer",
    color: "border-slate-300 dark:border-slate-600",
    marketShare: "Frontend platform (ไม่ใช่ IaaS)",
    founded: "2015",
    headquarters: "San Francisco, USA",
    thaiPresence: "ใช้ Edge Network ทั่วโลก รวมถึง Asia regions",
    freeTrialCredit: "Hobby plan ฟรีตลอด — เหมาะสำหรับ personal projects",
    whyChoose: [
      "Deploy Next.js ง่ายที่สุด — push to GitHub = deploy",
      "Preview Deployments — ทุก PR ได้ URL preview อัตโนมัติ",
      "Edge Network — CDN กระจายทั่วโลก เว็บโหลดเร็ว",
      "Serverless Functions — backend ง่ายๆ ทำใน Next.js API routes ได้เลย",
      "Analytics & Speed Insights — ดู performance เว็บในตัว",
      "Hobby plan ฟรี — เหมาะสำหรับ portfolio, side projects",
    ],
    bestFor: ["Next.js / React apps", "Frontend developers", "Portfolio sites", "Startup MVP", "Jamstack sites"],
    services: [
      { name: "Deployments", thaiName: "Deploy อัตโนมัติ", category: "devops", description: "Push code ไป GitHub → Vercel build + deploy อัตโนมัติ ได้ URL ทันที ทุก PR ได้ preview URL", realWorldExample: "เหมือนมีคนทำ CI/CD ให้ — แก้โค้ด push แล้วเว็บอัปเดตภายใน 30 วินาที ไม่ต้อง config อะไรเลย", pricing: "Hobby: ฟรี / Pro: $20/เดือน/คน" },
      { name: "Edge Network", thaiName: "CDN ทั่วโลก", category: "network", description: "Static files และ Edge Functions กระจายไปทุก region — user เปิดเว็บจาก server ใกล้ที่สุด", realWorldExample: "เว็บโหลดเร็วไม่ว่าจะเปิดจากไทย อเมริกา หรือยุโรป — เพราะ content อยู่ใกล้ user ทุกที่", pricing: "รวมใน plan" },
      { name: "Serverless Functions", thaiName: "API ไม่ต้องมี Server", category: "serverless", description: "เขียน API ใน app/api/ ของ Next.js → Vercel deploy เป็น serverless function ให้อัตโนมัติ", realWorldExample: "สร้าง API endpoint เช่น /api/users ใน Next.js — Vercel จัดการ scaling ให้ ไม่มีคนเรียกก็ไม่เสียเงิน", pricing: "Hobby: 100 GB-Hours ฟรี" },
      { name: "Vercel Postgres / KV / Blob", thaiName: "Database & Storage", category: "database", description: "Postgres, Redis (KV), Object Storage (Blob) ใช้ได้เลยจาก Vercel dashboard ไม่ต้อง setup แยก", realWorldExample: "ต้องการ database สำหรับ Next.js app? เพิ่ม Vercel Postgres ได้เลย — connect string มาให้อัตโนมัติ", pricing: "มี free tier ทุกตัว" },
    ],
    realWorldCases: [
      { company: "Vercel.com (ตัวเอง)", useCase: "เว็บ vercel.com + documentation ทั้งหมดรันบน Vercel" },
      { company: "Washington Post", useCase: "ใช้ Next.js + Vercel สำหรับ news website ที่มี traffic สูงมาก" },
      { company: "TikTok", useCase: "เว็บ tiktok.com ใช้ Next.js deploy บน Vercel" },
      { company: "Notion", useCase: "Landing pages + docs ใช้ Next.js + Vercel" },
    ],
    certifications: [],
    gettingStarted: [
      "สมัครที่ vercel.com ด้วย GitHub account",
      "Import repository: Vercel dashboard → New Project → Import Git Repo",
      "Vercel จะ detect ว่าเป็น Next.js → build + deploy อัตโนมัติ",
      "ได้ URL เช่น my-app.vercel.app ทันที",
      "ทุก push / PR จะ deploy อัตโนมัติ",
      "ตั้ง Custom Domain: Settings → Domains → เพิ่ม domain ของตัวเอง",
    ],
    proTips: [
      "ใช้ Hobby plan สำหรับ portfolio / personal project ฟรีตลอด",
      "ทุก PR ได้ Preview URL — แชร์ให้ทีมดูก่อน merge",
      "ใช้ Environment Variables ใน Vercel dashboard แทน .env ใน code",
      "เปิด Speed Insights + Web Analytics ดู performance",
      "ใช้ Vercel Cron Jobs สำหรับ scheduled tasks",
    ],
  },
  {
    name: "DigitalOcean",
    slug: "digitalocean",
    icon: "🌊",
    tagline: "Cloud ที่ง่ายและถูกที่สุด — เหมาะ Developer & Startup",
    description: "DigitalOcean เป็น cloud ที่เน้นความเรียบง่ายและราคาถูก — ไม่มี service เยอะเท่า AWS แต่สิ่งที่มีใช้ง่ายมาก pricing ชัดเจน predictable documentation ดีเยี่ยม เหมาะสำหรับ developer, startup, SME",
    color: "border-blue-300 dark:border-blue-700",
    marketShare: "~3% (อันดับ 4-5 ใน cloud)",
    founded: "2011",
    headquarters: "New York, USA",
    thaiPresence: "มี Singapore datacenter — latency ดีสำหรับ user ไทย",
    freeTrialCredit: "$200 credit ใช้ 60 วัน",
    whyChoose: [
      "ง่ายที่สุด — UX สะอาด ไม่ซับซ้อนเหมือน AWS",
      "ราคาถูกและ predictable — รู้ล่วงหน้าว่าจ่ายเท่าไหร่",
      "Documentation/Tutorials ดีที่สุด — เขียนเข้าใจง่ายมาก",
      "App Platform — deploy app ง่ายเหมือน Vercel",
      "เหมาะสำหรับเรียนรู้ cloud ครั้งแรก",
    ],
    bestFor: ["Startup / SME", "Developer ที่เริ่มเรียน cloud", "Side projects", "Simple web apps", "WordPress hosting"],
    services: [
      { name: "Droplets", thaiName: "เซิร์ฟเวอร์เสมือน", category: "compute", description: "VM เหมือน EC2 แต่ง่ายกว่ามาก — เลือก size, region, OS แล้ว create ได้เลย", realWorldExample: "สร้าง server สำหรับ web app — $4/เดือน ได้ 512MB RAM ถูกที่สุดในตลาด", pricing: "เริ่ม $4/เดือน" },
      { name: "App Platform", thaiName: "Deploy app ง่าย", category: "serverless", description: "PaaS เหมือน Vercel/Heroku — connect GitHub แล้ว deploy อัตโนมัติ", realWorldExample: "ไม่อยากจัดการ server? App Platform deploy ให้เลย — push code แล้วเสร็จ", pricing: "เริ่มฟรี (static) / $5/เดือน (basic)" },
      { name: "Managed Database", thaiName: "Database สำเร็จรูป", category: "database", description: "PostgreSQL, MySQL, Redis, MongoDB managed — backup, update อัตโนมัติ", realWorldExample: "ไม่ต้อง install PostgreSQL เอง DigitalOcean ดูแลให้ — backup ทุกวัน auto-failover", pricing: "เริ่ม $15/เดือน" },
      { name: "Spaces", thaiName: "Object Storage", category: "storage", description: "S3-compatible storage — เก็บไฟล์ มี CDN ในตัว ใช้ S3 SDK ได้เลย", realWorldExample: "เก็บรูป วิดีโอ ไฟล์ที่ user upload — มี CDN ในตัว โหลดเร็วทั่วโลก", pricing: "$5/เดือน (250 GB)" },
      { name: "Kubernetes (DOKS)", thaiName: "Managed Kubernetes", category: "container", description: "Managed Kubernetes ง่ายกว่า EKS/GKE — setup เร็ว ราคาถูก control plane ฟรี", realWorldExample: "อยากลอง Kubernetes? DOKS ถูกที่สุดและง่ายที่สุด — control plane ฟรี จ่ายแค่ worker nodes", pricing: "Control plane ฟรี + worker จาก $12/เดือน" },
    ],
    realWorldCases: [
      { company: "GitLab", useCase: "เคยใช้ DigitalOcean สำหรับ infrastructure ในช่วงแรก" },
      { company: "Hashicorp", useCase: "ใช้ DigitalOcean สำหรับ testing infrastructure" },
      { company: "Startup ไทยหลายราย", useCase: "ใช้ Droplets สำหรับ MVP เพราะราคาถูกและ setup ง่าย" },
    ],
    certifications: [],
    gettingStarted: [
      "สมัครที่ digitalocean.com — ได้ $200 credit 60 วัน",
      "สร้าง Droplet แรก: เลือก Ubuntu → $6/เดือน → Create",
      "SSH เข้า Droplet: ssh root@your-ip",
      "ติดตั้ง Node.js/Python แล้ว deploy app",
      "ลอง App Platform: connect GitHub → deploy อัตโนมัติ",
      "อ่าน DigitalOcean Tutorials — ดีที่สุดในวงการ",
    ],
    proTips: [
      "อ่าน DigitalOcean Community Tutorials — ดีกว่า docs ของ AWS/GCP เยอะ",
      "ใช้ App Platform สำหรับ project ง่ายๆ ไม่ต้องจัดการ server",
      "Droplet $6/เดือน เพียงพอสำหรับ small app + database",
      "ใช้ Spaces CDN แทน CloudFront ถ้าต้องการ CDN ราคาถูก",
      "Managed Database ถูกกว่า AWS RDS มาก",
    ],
  },
];

export function getProviderBySlug(slug: string): CloudProvider | undefined {
  return cloudProviders.find((p) => p.slug === slug);
}
