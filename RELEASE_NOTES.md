# Release Notes

## v2.0.0 — UX/UI Revamp & Code Quality Overhaul

**Date:** 22 February 2026

A complete redesign of the personal profile page with senior-level Next.js best practices and a modern UI/UX overhaul.

---

### Layout & Configuration (`layout.tsx`)

- Changed `lang` from `"en"` to `"th"` to match the Thai content
- Replaced **Geist** font with **Kanit** — a modern Thai Google Font with weights 300–700 and `display: "swap"` for performance
- Updated page title to `กันติชา ไชยชนะ | โปรไฟล์` (was `"Create Next App"`)
- Added meaningful meta description in Thai
- Added **Open Graph** metadata for rich link previews when shared on social media
- Added `suppressHydrationWarning` on `<body>` to prevent browser extension conflicts (e.g. Grammarly)

### Styling (`globals.css`)

- Refined light/dark mode color palette (`#fafafa` / `#020617` backgrounds)
- Added custom **fade-in** and **slide-up** CSS animations using Tailwind v4 `@theme` directive
- Set Kanit as the primary font via `--font-sans` CSS variable
- Added `-webkit-font-smoothing` and `-moz-osx-font-smoothing` for crisp text rendering

### Profile Page (`page.tsx`)

#### Code Quality

- Added **TypeScript `Profile` interface** for type-safe profile data
- Replaced raw `<img>` with **Next.js `<Image>`** component (optimized loading, `priority` for above-fold image)
- Removed all **inline styles** — now 100% Tailwind CSS utility classes
- Used **semantic HTML** elements: `<header>`, `<main>`, `<section>`, `<footer>`, with `aria-label` for accessibility
- Extracted **reusable components**: `Card`, `Stat`, `Divider` — clean, composable, and fully typed
- Fixed **invalid HTML**: replaced `<p>` tags inside `<ul>` with proper list markup
- Profile data separated from rendering logic as a typed constant

#### UX/UI Design

- **Gradient background**: Violet-to-rose gradient (light mode) / deep slate (dark mode)
- **Hero section**: Profile image with animated glowing gradient ring, large name, nickname in accent color, history items as pill badges
- **Stats bar**: Age, gender, and birthday displayed as prominent centered metrics with vertical dividers
- **Card grid**: Glassmorphism cards with `backdrop-blur`, translucent backgrounds, and hover lift animation (`hover:-translate-y-0.5` + shadow transition)
- **Color-coded tags**: Amber pills for favorite foods, emerald pills for hobbies — visually distinct sections
- **Full dark mode** support via `prefers-color-scheme` media query
- **Fully responsive**: Mobile-first layout that scales from phone to desktop (`sm:` and `lg:` breakpoints)
- **Entrance animations**: Staggered fade-in and slide-up effects on page load
- **Footer**: Minimal credit line ("สร้างด้วย Next.js & Tailwind CSS")

---

### Before vs After

| Aspect | Before | After |
|---|---|---|
| Styling | Inline `style={{}}` | Tailwind CSS utilities |
| Image | Raw `<img>` tag | Next.js `<Image>` (optimized) |
| Font | Geist (Latin only) | Kanit (Thai + Latin) |
| TypeScript | No types | `Profile` interface |
| HTML | `<p>` inside `<ul>`, flat markup | Semantic `<header>`, `<section>`, `<footer>` |
| Dark mode | CSS variables only | Full Tailwind dark mode with gradient backgrounds |
| Responsive | None | Mobile-first with `sm:` / `lg:` breakpoints |
| Animations | None | Fade-in + slide-up entrance, hover effects |
| SEO | Default metadata | Thai title, description, Open Graph tags |
| Layout | Plain unstyled list | Gradient hero, stats bar, glassmorphism cards |
