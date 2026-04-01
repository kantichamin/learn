export interface TechCategory {
  category: string;
  items: string[];
}

export interface CareerLevel {
  level: string;
  title: string;
  years: string;
}

export interface Career {
  slug: string;
  title: string;
  titleEn: string;
  icon: string;
  color: string;
  description: string;
  responsibilities: string[];
  hardSkills: string[];
  softSkills: string[];
  techStacks: TechCategory[];
  careerPath: CareerLevel[];
  tips: string[];
}

export const careers: Career[] = [
  {
    slug: "product-owner",
    title: "Product Owner (PO)",
    titleEn: "Product Owner",
    icon: "🚀",
    color: "violet",
    description:
      "Product Owner คือผู้รับผิดชอบในการกำหนดทิศทางของผลิตภัณฑ์ ทำหน้าที่เป็นตัวแทนของลูกค้าและผู้ใช้งาน เพื่อสร้างสินค้าที่ตอบโจทย์ตลาดและสร้างคุณค่าให้ธุรกิจ",
    responsibilities: [
      "กำหนดวิสัยทัศน์และกลยุทธ์ของผลิตภัณฑ์",
      "จัดลำดับความสำคัญของ Product Backlog",
      "เขียน User Stories และกำหนด Acceptance Criteria",
      "ทำงานร่วมกับทีม Development และ Stakeholders",
      "วิเคราะห์ข้อมูลผู้ใช้และตัดสินใจเกี่ยวกับฟีเจอร์",
      "วางแผน Sprint และ Release",
    ],
    hardSkills: [
      "Product Roadmap Planning",
      "User Story Writing",
      "Data Analytics & Metrics",
      "A/B Testing",
      "Wireframing & Prototyping",
      "Agile & Scrum Framework",
      "Market Research",
      "Competitive Analysis",
    ],
    softSkills: [
      "การตัดสินใจ (Decision Making)",
      "การสื่อสารกับ Stakeholders",
      "การคิดเชิงกลยุทธ์",
      "ความเป็นผู้นำ",
      "การเจรจาต่อรอง",
      "การจัดลำดับความสำคัญ",
      "ความเข้าใจในมุมมองผู้ใช้ (Empathy)",
    ],
    techStacks: [
      { category: "Product Management", items: ["Jira", "Trello", "Asana", "Linear"] },
      { category: "Analytics", items: ["Google Analytics", "Mixpanel", "Amplitude", "Hotjar"] },
      { category: "Design & Prototype", items: ["Figma", "Miro", "Whimsical"] },
      { category: "Communication", items: ["Slack", "Notion", "Confluence"] },
    ],
    careerPath: [
      { level: "1", title: "Associate PO", years: "0-2 ปี" },
      { level: "2", title: "Product Owner", years: "2-5 ปี" },
      { level: "3", title: "Senior PO", years: "5-8 ปี" },
      { level: "4", title: "Head of Product / CPO", years: "8+ ปี" },
    ],
    tips: [
      "เริ่มจากการเรียนรู้ Agile/Scrum ให้เข้าใจอย่างลึกซึ้ง",
      "ฝึกเขียน User Stories ที่ชัดเจนและวัดผลได้",
      "เรียนรู้การอ่านข้อมูลและ Metrics เพื่อตัดสินใจ",
      "ลองสร้างผลิตภัณฑ์ส่วนตัว (Side Project) เพื่อฝึกประสบการณ์",
      "เข้าใจเทคโนโลยีพื้นฐานเพื่อสื่อสารกับทีม Dev ได้",
    ],
  },
  {
    slug: "project-manager",
    title: "Project Manager (PM)",
    titleEn: "Project Manager",
    icon: "📋",
    color: "blue",
    description:
      "Project Manager คือผู้ดูแลภาพรวมของโปรเจกต์ทั้งหมด ตั้งแต่การวางแผน จัดสรรทรัพยากร ติดตามความคืบหน้า ไปจนถึงส่งมอบงานตรงเวลาและตามงบประมาณ",
    responsibilities: [
      "วางแผนโปรเจกต์และกำหนด Timeline",
      "จัดสรรทรัพยากรและบริหารทีม",
      "ติดตามความคืบหน้าและจัดการความเสี่ยง",
      "สื่อสารกับ Stakeholders และรายงานสถานะ",
      "บริหารงบประมาณและขอบเขตงาน",
      "แก้ไขปัญหาและอุปสรรคที่เกิดขึ้นระหว่างโปรเจกต์",
    ],
    hardSkills: [
      "Project Planning & Scheduling",
      "Risk Management",
      "Budget Management",
      "Agile / Scrum / Kanban",
      "Waterfall Methodology",
      "Resource Allocation",
      "Quality Assurance Process",
      "Change Management",
    ],
    softSkills: [
      "ความเป็นผู้นำ (Leadership)",
      "การสื่อสารที่มีประสิทธิภาพ",
      "การแก้ปัญหาเฉพาะหน้า",
      "การบริหารเวลา",
      "การเจรจาต่อรอง",
      "การทำงานเป็นทีม",
      "ความสามารถในการจัดการความขัดแย้ง",
    ],
    techStacks: [
      { category: "Project Management", items: ["Jira", "MS Project", "Monday.com", "Asana"] },
      { category: "Methodology", items: ["Scrum", "Kanban", "SAFe", "PRINCE2"] },
      { category: "Documentation", items: ["Confluence", "Notion", "Google Workspace"] },
      { category: "Communication", items: ["Slack", "Microsoft Teams", "Zoom"] },
    ],
    careerPath: [
      { level: "1", title: "Project Coordinator", years: "0-2 ปี" },
      { level: "2", title: "Project Manager", years: "2-5 ปี" },
      { level: "3", title: "Senior PM / Program Manager", years: "5-8 ปี" },
      { level: "4", title: "Director of PMO / VP", years: "8+ ปี" },
    ],
    tips: [
      "สอบ PMP หรือ Scrum Master Certificate เพื่อเพิ่มโอกาสในสายงาน",
      "ฝึกการ Estimate เวลาและจัดการ Scope ให้เชี่ยวชาญ",
      "เรียนรู้การใช้เครื่องมือ PM อย่างน้อย 2-3 ตัว",
      "สร้างทักษะ Soft Skills ให้แข็งแกร่ง โดยเฉพาะ Communication",
      "ลองเป็น Scrum Master หรือ Team Lead ในโปรเจกต์มหาวิทยาลัย",
    ],
  },
  {
    slug: "business-analyst",
    title: "Business Analyst (BA)",
    titleEn: "Business Analyst",
    icon: "📊",
    color: "amber",
    description:
      "Business Analyst คือสะพานเชื่อมระหว่างฝ่ายธุรกิจกับฝ่ายเทคนิค ทำหน้าที่วิเคราะห์ความต้องการ แปลง Business Requirements เป็น Technical Requirements ที่ทีมพัฒนาเข้าใจ",
    responsibilities: [
      "รวบรวมและวิเคราะห์ความต้องการจาก Stakeholders",
      "เขียน Business Requirements Document (BRD)",
      "สร้าง Process Flow และ Use Case Diagram",
      "วิเคราะห์ Gap Analysis ระหว่างระบบปัจจุบันและระบบใหม่",
      "ทดสอบ UAT ร่วมกับผู้ใช้งาน",
      "นำเสนอ Solution ให้กับทีมและผู้บริหาร",
    ],
    hardSkills: [
      "Requirements Gathering & Analysis",
      "Business Process Modeling (BPMN)",
      "Use Case / User Story Writing",
      "Data Analysis & SQL",
      "UML Diagrams",
      "Wireframing",
      "UAT Testing",
      "Domain Knowledge",
    ],
    softSkills: [
      "การวิเคราะห์เชิงวิพากษ์ (Critical Thinking)",
      "การสื่อสารกับทั้งฝ่ายธุรกิจและเทคนิค",
      "การตั้งคำถามที่ดี",
      "การนำเสนอ (Presentation)",
      "ความใส่ใจในรายละเอียด",
      "ความสามารถในการสรุปข้อมูลซับซ้อน",
    ],
    techStacks: [
      { category: "Documentation", items: ["Confluence", "Notion", "Google Docs"] },
      { category: "Diagramming", items: ["Lucidchart", "Draw.io", "Visio", "Miro"] },
      { category: "Data Analysis", items: ["SQL", "Excel / Google Sheets", "Power BI", "Tableau"] },
      { category: "Prototype", items: ["Figma", "Balsamiq", "Axure"] },
    ],
    careerPath: [
      { level: "1", title: "Junior BA", years: "0-2 ปี" },
      { level: "2", title: "Business Analyst", years: "2-5 ปี" },
      { level: "3", title: "Senior BA / Lead BA", years: "5-8 ปี" },
      { level: "4", title: "BA Manager / Product Owner", years: "8+ ปี" },
    ],
    tips: [
      "ฝึกเขียน Requirements ที่ชัดเจนและครบถ้วน",
      "เรียน SQL พื้นฐานเพื่อดึงข้อมูลวิเคราะห์ได้ด้วยตัวเอง",
      "ฝึกวาด Flowchart และ Diagram ให้คล่อง",
      "สอบ CBAP หรือ CCBA เพื่อเพิ่มความน่าเชื่อถือ",
      "เข้าใจ Domain ของธุรกิจที่ทำงานด้วยให้ลึกซึ้ง",
    ],
  },
  {
    slug: "system-analyst",
    title: "System Analyst (SA)",
    titleEn: "System Analyst",
    icon: "🧩",
    color: "cyan",
    description:
      "System Analyst คือผู้เชี่ยวชาญในการออกแบบระบบ วิเคราะห์ความต้องการเชิงเทคนิค ออกแบบ Architecture และเป็นตัวกลางระหว่าง BA กับทีม Developer ในการแปลงความต้องการเป็นระบบจริง",
    responsibilities: [
      "วิเคราะห์และออกแบบ System Architecture",
      "เขียน Technical Specification Document",
      "ออกแบบ Database Schema และ API",
      "ประเมินเทคโนโลยีที่เหมาะสมกับโปรเจกต์",
      "ทำ Code Review และดูแลคุณภาพของระบบ",
      "แก้ไขปัญหาเชิงเทคนิคที่ซับซ้อน",
    ],
    hardSkills: [
      "System Design & Architecture",
      "Database Design (SQL / NoSQL)",
      "API Design (REST / GraphQL)",
      "UML & Technical Diagrams",
      "Programming (อย่างน้อย 1-2 ภาษา)",
      "Security & Performance Optimization",
      "Cloud Architecture (AWS / GCP / Azure)",
      "Integration Patterns",
    ],
    softSkills: [
      "การคิดเชิงระบบ (Systems Thinking)",
      "การวิเคราะห์ปัญหาเชิงลึก",
      "การสื่อสารเรื่องเทคนิคให้เข้าใจง่าย",
      "การทำงานร่วมกับหลายทีม",
      "ความสามารถในการตัดสินใจเชิงเทคนิค",
      "การจัดการความซับซ้อน",
    ],
    techStacks: [
      { category: "Design Tools", items: ["Draw.io", "Lucidchart", "PlantUML", "Mermaid"] },
      { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
      { category: "API Tools", items: ["Swagger / OpenAPI", "Postman", "GraphQL Playground"] },
      { category: "Cloud", items: ["AWS", "Google Cloud", "Azure", "Docker"] },
    ],
    careerPath: [
      { level: "1", title: "Junior SA / Developer", years: "0-3 ปี" },
      { level: "2", title: "System Analyst", years: "3-6 ปี" },
      { level: "3", title: "Senior SA / Solution Architect", years: "6-10 ปี" },
      { level: "4", title: "Enterprise Architect / CTO", years: "10+ ปี" },
    ],
    tips: [
      "เริ่มจากการเป็น Developer ก่อน เพื่อเข้าใจการทำงานจริงของระบบ",
      "ฝึกออกแบบ Database และ API ให้รองรับการขยายตัว",
      "เรียนรู้ Design Patterns และ Architecture Patterns",
      "ศึกษา Cloud Services เพราะระบบสมัยใหม่ส่วนใหญ่อยู่บน Cloud",
      "อ่าน Case Study ของระบบใหญ่ ๆ เช่น Netflix, Uber, LINE",
    ],
  },
  {
    slug: "developer",
    title: "Software Developer",
    titleEn: "Software Developer / Engineer",
    icon: "💻",
    color: "emerald",
    description:
      "Software Developer คือหัวใจของทีมพัฒนาซอฟต์แวร์ ทำหน้าที่เขียนโค้ด ออกแบบระบบ ทดสอบ และดูแลรักษาแอปพลิเคชันให้ทำงานได้อย่างมีประสิทธิภาพ ครอบคลุมทั้ง Frontend, Backend และ Full-Stack",
    responsibilities: [
      "เขียนโค้ดที่สะอาด มีคุณภาพ และทดสอบได้",
      "ออกแบบและพัฒนาฟีเจอร์ใหม่ตาม Requirements",
      "เขียน Unit Test และ Integration Test",
      "ทำ Code Review ให้เพื่อนร่วมทีม",
      "แก้ไข Bug และปรับปรุงประสิทธิภาพระบบ",
      "เรียนรู้เทคโนโลยีใหม่ ๆ อยู่เสมอ",
    ],
    hardSkills: [
      "Programming Languages (JavaScript/TypeScript, Python, Java, Go)",
      "Frontend (React, Next.js, Vue, Angular)",
      "Backend (Node.js, Express, NestJS, Django, Spring)",
      "Database (SQL & NoSQL)",
      "Version Control (Git)",
      "Testing (Unit, Integration, E2E)",
      "API Development (REST, GraphQL)",
      "Data Structures & Algorithms",
    ],
    softSkills: [
      "การแก้ปัญหาอย่างเป็นระบบ (Problem Solving)",
      "การเรียนรู้ด้วยตัวเอง (Self-Learning)",
      "การทำงานเป็นทีม",
      "การสื่อสารเรื่องเทคนิค",
      "ความอดทนและความละเอียดรอบคอบ",
      "การจัดการเวลา",
      "Growth Mindset",
    ],
    techStacks: [
      { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "Go", "Rust"] },
      { category: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind CSS", "HTML/CSS"] },
      { category: "Backend", items: ["Node.js", "Express", "NestJS", "Django", "Spring Boot"] },
      { category: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma"] },
      { category: "Tools", items: ["Git", "GitHub", "VS Code", "Docker", "Postman"] },
    ],
    careerPath: [
      { level: "1", title: "Junior Developer", years: "0-2 ปี" },
      { level: "2", title: "Mid-level Developer", years: "2-5 ปี" },
      { level: "3", title: "Senior Developer / Tech Lead", years: "5-8 ปี" },
      { level: "4", title: "Staff Engineer / Architect / CTO", years: "8+ ปี" },
    ],
    tips: [
      "สร้าง Portfolio บน GitHub ด้วยโปรเจกต์จริง ๆ",
      "ฝึก Data Structures & Algorithms ผ่าน LeetCode หรือ HackerRank",
      "เรียนรู้ Git อย่างเชี่ยวชาญ — branching, merge, rebase",
      "อ่าน Clean Code และเขียนโค้ดที่คนอื่นอ่านเข้าใจ",
      "Contribute ให้ Open Source เพื่อเรียนรู้จากโค้ดจริง",
    ],
  },
  {
    slug: "devops",
    title: "DevOps Engineer",
    titleEn: "DevOps Engineer",
    icon: "⚙️",
    color: "orange",
    description:
      "DevOps Engineer คือผู้เชื่อมโยงระหว่างทีม Development และ Operations ทำให้กระบวนการ Build, Test และ Deploy เป็นไปอย่างอัตโนมัติ รวดเร็ว และเชื่อถือได้ ดูแลระบบ Infrastructure ทั้งหมด",
    responsibilities: [
      "ออกแบบและดูแล CI/CD Pipeline",
      "จัดการ Infrastructure บน Cloud (AWS / GCP / Azure)",
      "เขียน Infrastructure as Code (IaC)",
      "ตั้งค่า Monitoring, Logging และ Alerting",
      "ดูแลความปลอดภัยของระบบ (Security)",
      "ทำ Containerization ด้วย Docker และ Kubernetes",
    ],
    hardSkills: [
      "Linux System Administration",
      "CI/CD (GitHub Actions, GitLab CI, Jenkins)",
      "Cloud Platforms (AWS, GCP, Azure)",
      "Docker & Kubernetes",
      "Infrastructure as Code (Terraform, Ansible)",
      "Monitoring (Prometheus, Grafana, Datadog)",
      "Scripting (Bash, Python)",
      "Networking & Security",
    ],
    softSkills: [
      "การแก้ปัญหาภายใต้ความกดดัน",
      "ความละเอียดรอบคอบ",
      "การทำงานข้ามทีม (Cross-functional)",
      "การสื่อสารเรื่อง Infrastructure",
      "การเรียนรู้เทคโนโลยีใหม่อย่างรวดเร็ว",
      "ความรับผิดชอบสูง (On-call Culture)",
    ],
    techStacks: [
      { category: "Cloud", items: ["AWS", "Google Cloud", "Azure", "DigitalOcean"] },
      { category: "Containers", items: ["Docker", "Kubernetes", "Helm", "Docker Compose"] },
      { category: "CI/CD", items: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"] },
      { category: "IaC", items: ["Terraform", "Ansible", "Pulumi", "CloudFormation"] },
      { category: "Monitoring", items: ["Prometheus", "Grafana", "Datadog", "ELK Stack"] },
    ],
    careerPath: [
      { level: "1", title: "Junior DevOps / SysAdmin", years: "0-2 ปี" },
      { level: "2", title: "DevOps Engineer", years: "2-5 ปี" },
      { level: "3", title: "Senior DevOps / SRE", years: "5-8 ปี" },
      { level: "4", title: "Platform Engineer / Head of Infra", years: "8+ ปี" },
    ],
    tips: [
      "เรียน Linux ให้เชี่ยวชาญ — นี่คือพื้นฐานที่สำคัญที่สุด",
      "ตั้ง Home Lab หรือใช้ Free Tier ของ Cloud เพื่อฝึก",
      "เริ่มจาก Docker แล้วค่อยขยับไป Kubernetes",
      "เขียน CI/CD Pipeline สำหรับโปรเจกต์ส่วนตัว",
      "สอบ AWS / GCP Certification เพื่อเพิ่มโอกาสในการทำงาน",
    ],
  },
  {
    slug: "designer",
    title: "UX/UI Designer",
    titleEn: "UX/UI Designer",
    icon: "🎨",
    color: "pink",
    description:
      "UX/UI Designer คือผู้ออกแบบประสบการณ์และหน้าตาของผลิตภัณฑ์ดิจิทัล ทำให้แอปหรือเว็บไซต์ใช้งานง่าย สวยงาม และตอบโจทย์ผู้ใช้ UX เน้นที่ประสบการณ์ ส่วน UI เน้นที่ภาพลักษณ์",
    responsibilities: [
      "วิจัยผู้ใช้งาน (User Research) และสร้าง Persona",
      "ออกแบบ Wireframe, Mockup และ Prototype",
      "สร้าง Design System และ Component Library",
      "ทำ Usability Testing กับผู้ใช้จริง",
      "ทำงานร่วมกับ Developer เพื่อส่งมอบ Design ที่ Implement ได้",
      "สร้าง Visual Design ที่สวยงามและสอดคล้องกับ Brand",
    ],
    hardSkills: [
      "UI Design (Layout, Typography, Color Theory)",
      "UX Research & User Testing",
      "Wireframing & Prototyping",
      "Design Systems",
      "Interaction Design & Micro-animation",
      "Responsive Design",
      "Accessibility (WCAG)",
      "Basic HTML/CSS Understanding",
    ],
    softSkills: [
      "ความเข้าอกเข้าใจผู้ใช้ (Empathy)",
      "ความคิดสร้างสรรค์",
      "การรับ Feedback อย่างเปิดกว้าง",
      "การนำเสนอและอธิบาย Design Decision",
      "ความใส่ใจในรายละเอียด",
      "การทำงานร่วมกับ Developer",
      "การคิดเชิงระบบ (Design Thinking)",
    ],
    techStacks: [
      { category: "Design", items: ["Figma", "Sketch", "Adobe XD", "Framer"] },
      { category: "Prototype", items: ["Figma Prototype", "InVision", "Principle", "ProtoPie"] },
      { category: "Research", items: ["Maze", "Hotjar", "UserTesting", "Google Forms"] },
      { category: "Handoff", items: ["Zeplin", "Figma Dev Mode", "Storybook"] },
    ],
    careerPath: [
      { level: "1", title: "Junior Designer", years: "0-2 ปี" },
      { level: "2", title: "UX/UI Designer", years: "2-5 ปี" },
      { level: "3", title: "Senior Designer / Design Lead", years: "5-8 ปี" },
      { level: "4", title: "Head of Design / Design Director", years: "8+ ปี" },
    ],
    tips: [
      "สร้าง Portfolio ที่แสดง Process ไม่ใช่แค่ผลงานสุดท้าย",
      "ฝึกออกแบบ UI ทุกวัน — Daily UI Challenge",
      "เรียนรู้ Figma ให้เชี่ยวชาญ เพราะเป็นเครื่องมือหลักของอุตสาหกรรม",
      "ศึกษา Design System ของบริษัทใหญ่ เช่น Material Design, Apple HIG",
      "เข้าใจ HTML/CSS พื้นฐานจะช่วยให้ทำงานกับ Dev ได้ดีขึ้น",
    ],
  },
  {
    slug: "data-engineer",
    title: "Data Engineer",
    titleEn: "Data Engineer",
    icon: "🗄️",
    color: "teal",
    description:
      "Data Engineer คือผู้สร้างและดูแลระบบ Data Pipeline ที่รวบรวม แปลง และจัดเก็บข้อมูลจำนวนมหาศาล เพื่อให้ทีม Data Science และ Analytics นำข้อมูลไปใช้งานได้อย่างมีประสิทธิภาพ",
    responsibilities: [
      "ออกแบบและสร้าง Data Pipeline (ETL/ELT)",
      "จัดการ Data Warehouse และ Data Lake",
      "ทำ Data Quality Checks และ Data Validation",
      "ปรับปรุงประสิทธิภาพของ Query และ Pipeline",
      "ทำงานร่วมกับ Data Scientist และ Analyst",
      "ดูแล Data Governance และ Security",
    ],
    hardSkills: [
      "SQL ขั้นสูง (Window Functions, CTEs, Optimization)",
      "Python / Scala",
      "ETL/ELT Frameworks",
      "Data Warehouse (BigQuery, Snowflake, Redshift)",
      "Apache Spark / Kafka / Airflow",
      "Cloud Data Services",
      "Data Modeling (Star Schema, Snowflake Schema)",
      "Version Control & CI/CD for Data",
    ],
    softSkills: [
      "การคิดเชิงวิเคราะห์",
      "ความละเอียดรอบคอบกับข้อมูล",
      "การสื่อสารกับทีม Data และ Business",
      "การแก้ปัญหาเชิงระบบ",
      "ความอดทนกับปัญหา Data ที่ซับซ้อน",
      "การจัดการเวลาและลำดับความสำคัญ",
    ],
    techStacks: [
      { category: "Languages", items: ["SQL", "Python", "Scala", "Java"] },
      { category: "Processing", items: ["Apache Spark", "Apache Kafka", "dbt", "Apache Beam"] },
      { category: "Orchestration", items: ["Apache Airflow", "Dagster", "Prefect", "Luigi"] },
      { category: "Storage", items: ["BigQuery", "Snowflake", "Redshift", "Delta Lake", "S3"] },
      { category: "Tools", items: ["Docker", "Git", "Terraform", "Great Expectations"] },
    ],
    careerPath: [
      { level: "1", title: "Junior Data Engineer", years: "0-2 ปี" },
      { level: "2", title: "Data Engineer", years: "2-5 ปี" },
      { level: "3", title: "Senior Data Engineer / Lead", years: "5-8 ปี" },
      { level: "4", title: "Staff Engineer / Head of Data", years: "8+ ปี" },
    ],
    tips: [
      "เรียน SQL ให้เก่งมาก — นี่คือทักษะหลักของ Data Engineer",
      "ฝึก Python สำหรับ Data Processing (Pandas, PySpark)",
      "ลองสร้าง ETL Pipeline ง่าย ๆ ด้วย Airflow หรือ dbt",
      "เข้าใจ Cloud Services โดยเฉพาะ BigQuery หรือ Snowflake",
      "ศึกษา Data Modeling เพราะเป็นรากฐานของระบบ Data ที่ดี",
    ],
  },
  {
    slug: "ai-engineer",
    title: "AI/ML Engineer",
    titleEn: "AI / Machine Learning Engineer",
    icon: "🧠",
    color: "rose",
    description:
      "AI/ML Engineer คือผู้พัฒนาระบบปัญญาประดิษฐ์และ Machine Learning ตั้งแต่การเตรียมข้อมูล สร้างโมเดล ไปจนถึงการ Deploy โมเดลให้ใช้งานได้จริงในระบบ Production",
    responsibilities: [
      "เตรียมและทำความสะอาดข้อมูลสำหรับ Training",
      "สร้างและ Train Machine Learning Models",
      "ประเมินผลและปรับปรุง Model Performance",
      "Deploy โมเดลขึ้น Production (MLOps)",
      "วิจัยและทดลองเทคนิค AI ใหม่ ๆ",
      "ทำงานร่วมกับ Data Engineer และ Product Team",
    ],
    hardSkills: [
      "Python (NumPy, Pandas, Scikit-learn)",
      "Deep Learning (PyTorch, TensorFlow)",
      "Machine Learning Algorithms",
      "NLP / Computer Vision / LLMs",
      "MLOps (MLflow, Kubeflow, W&B)",
      "Statistics & Mathematics",
      "Data Preprocessing & Feature Engineering",
      "Cloud AI Services (AWS SageMaker, Vertex AI)",
    ],
    softSkills: [
      "การคิดเชิงวิทยาศาสตร์ (Scientific Thinking)",
      "ความอยากรู้อยากเห็นและชอบทดลอง",
      "การอ่านและเข้าใจ Research Paper",
      "การสื่อสารผลลัพธ์ให้ Non-technical เข้าใจ",
      "ความอดทนกับการ Train Model",
      "การทำงานร่วมกับทีมข้ามสายงาน",
    ],
    techStacks: [
      { category: "Languages", items: ["Python", "R", "Julia", "SQL"] },
      { category: "ML Frameworks", items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"] },
      { category: "MLOps", items: ["MLflow", "Kubeflow", "W&B", "DVC", "BentoML"] },
      { category: "Cloud AI", items: ["AWS SageMaker", "Google Vertex AI", "Azure ML", "OpenAI API"] },
      { category: "Data", items: ["Pandas", "NumPy", "Apache Spark", "Jupyter Notebook"] },
    ],
    careerPath: [
      { level: "1", title: "Junior ML Engineer / Data Scientist", years: "0-2 ปี" },
      { level: "2", title: "ML Engineer", years: "2-5 ปี" },
      { level: "3", title: "Senior ML Engineer / ML Lead", years: "5-8 ปี" },
      { level: "4", title: "Principal Engineer / Head of AI", years: "8+ ปี" },
    ],
    tips: [
      "เรียนคณิตศาสตร์และสถิติให้แน่น (Linear Algebra, Probability, Calculus)",
      "เริ่มจาก ML พื้นฐาน ก่อนกระโดดไป Deep Learning",
      "ทำโปรเจกต์จริงและเผยแพร่บน GitHub / Kaggle",
      "อ่าน Research Paper และลอง Implement ด้วยตัวเอง",
      "เรียนรู้ MLOps เพราะการ Deploy Model สำคัญไม่แพ้การสร้าง Model",
    ],
  },
];

export const generalSkills = {
  hardSkills: [
    "Git & Version Control",
    "Command Line / Terminal",
    "การอ่านและเขียน Documentation",
    "Basic Networking (HTTP, DNS, TCP/IP)",
    "Database พื้นฐาน (SQL)",
    "API Concepts (REST, GraphQL)",
    "Basic Cloud Concepts",
    "Cybersecurity พื้นฐาน",
  ],
  softSkills: [
    "Problem Solving — คิดวิเคราะห์แก้ปัญหาอย่างเป็นระบบ",
    "Communication — สื่อสารทั้งเขียนและพูดให้ชัดเจน",
    "Teamwork — ทำงานร่วมกับผู้อื่นได้อย่างมีประสิทธิภาพ",
    "Self-Learning — เรียนรู้ด้วยตัวเองจากแหล่งข้อมูลต่าง ๆ",
    "Time Management — บริหารเวลาและจัดลำดับงาน",
    "Adaptability — ปรับตัวกับเทคโนโลยีและสถานการณ์ใหม่ ๆ",
    "Critical Thinking — ตั้งคำถามและประเมินข้อมูลอย่างมีเหตุผล",
    "English — ภาษาอังกฤษเป็นสิ่งจำเป็นในวงการ Tech",
  ],
};

export function getCareerBySlug(slug: string): Career | undefined {
  return careers.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return careers.map((c) => c.slug);
}
