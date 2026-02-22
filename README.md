# กันติชา ไชยชนะ | Personal Profile

A personal profile website built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **PostgreSQL** (via Prisma ORM).

---

## Prerequisites

| Method | Requirement |
|---|---|
| Local development | [Node.js 20+](https://nodejs.org/) + [Docker Desktop](https://www.docker.com/products/docker-desktop/) (for PostgreSQL) |
| Full Docker | [Docker Desktop](https://www.docker.com/products/docker-desktop/) only |

---

## Option 1 — Local Development

### 1. Clone and install

```bash
git clone https://github.com/schaisan/learn.git
cd learn
npm install
```

### 2. Set up environment

```bash
cp .env.example .env
```

The default `.env` connects to PostgreSQL at `localhost:5432`. Edit if needed.

### 3. Start PostgreSQL (via Docker)

```bash
docker compose up db -d
```

This starts only the PostgreSQL container. Wait a few seconds for it to become healthy.

### 4. Push database schema

```bash
npx prisma db push
```

### 5. Seed the database

```bash
npx prisma db seed
```

### 6. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Useful Prisma commands

```bash
npx prisma studio    # Open visual database editor at localhost:5555
npx prisma db push   # Sync schema to database
npx prisma db seed   # Seed the database
npx prisma generate  # Regenerate client after schema changes
```

---

## Option 2 — Full Docker (Windows / macOS / Linux)

Everything runs in containers — no Node.js install needed.

### 1. Clone the repository

```bash
git clone https://github.com/schaisan/learn.git
cd learn
```

### 2. Build and run

```bash
docker compose up --build -d
```

This starts both **PostgreSQL** and the **Next.js app**. The app automatically pushes the schema on startup.

### 3. Seed the database

```bash
docker compose exec app node node_modules/prisma/build/index.js db seed
```

### 4. Open the app

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Stop everything

```bash
docker compose down           # Stop containers (data persists)
docker compose down -v        # Stop and delete database data
```

---

## Project Structure

```
├── app/
│   ├── globals.css          # Tailwind theme, animations, dark mode
│   ├── layout.tsx           # Root layout — Kanit font, metadata, SEO
│   └── page.tsx             # Profile page — reads from DB with fallback
├── lib/
│   └── db.ts                # Prisma client singleton
├── prisma/
│   ├── schema.prisma        # Database schema (Profile model)
│   └── seed.ts              # Seed script with profile data
├── public/
│   └── profile.jpg          # Profile image
├── Dockerfile               # Multi-stage production build
├── docker-compose.yml       # PostgreSQL + Next.js app
├── .env.example             # Environment variables template
├── next.config.ts           # Next.js config (standalone output)
├── package.json
└── tsconfig.json
```

## Tech Stack

- **Next.js 16** — App Router, Server Components, `next/image`, `next/font`
- **React 19** — Server Components for direct DB access
- **TypeScript 5** — Type-safe data layer
- **Tailwind CSS 4** — Utility-first styling, dark mode, custom animations
- **PostgreSQL 16** — Relational database
- **Prisma 6** — Type-safe ORM with auto-generated client
- **Docker** — Multi-stage build + Compose for dev/prod parity
