@AGENTS.md

# Devfrend Agency — Marketing Site

## Overview
Marketing + portfolio site for Devfrend Agency. Pure Next.js 16 frontend — no database, no API routes. Heavy 3D/motion: Three.js scenes, GSAP timelines, Lenis smooth scroll, Framer Motion UI.

## Nested Context
When editing these areas, check the local CLAUDE.md:
- `src/app/` — Route and layout conventions
- `src/components/` — Component patterns (R3F, GSAP, Framer Motion)
- `src/lib/` — Helpers, motion utilities
- `src/data/` — Content source of truth for copy/projects
- `BRAND_VOICE.md` and `ACCESSIBILITY.md` are the authoritative references — read before writing copy or UI.

## Tech Stack
- Next.js 16.2.3 (App Router, Turbopack), React 19, TypeScript strict
- Tailwind CSS v4 — CSS-first via `@theme` in `src/app/globals.css`. NO `tailwind.config.js`.
- Three.js 0.183 + `@react-three/fiber` 9 + `@react-three/drei` 10
- GSAP 3.15 + `@gsap/react` 2 — use `useGSAP` hook, NOT raw `useEffect`
- `framer-motion` 12 for UI transitions
- `lenis` 1.3 for smooth scroll (mount once in root layout)

## Commands
```
npm run dev     # Dev server
npm run build   # Production build
npm run lint    # ESLint
```

## Code Conventions
- Server Components by default. `'use client'` only when needed (R3F canvases, GSAP, Framer Motion).
- 3D scenes: isolate in client components, prefer `<Canvas>` with Suspense fallback.
- GSAP: use `useGSAP({ scope })` from `@gsap/react` for cleanup.
- Respect `prefers-reduced-motion` — wrap GSAP/Framer timelines behind this check.
- Accessibility: see `ACCESSIBILITY.md` (WCAG 2.1 AA target).
- Copy: see `BRAND_VOICE.md`.
- Named exports everywhere (except Next.js `page.tsx` / `layout.tsx`).
- No `any`. No `tailwind.config.*`.

## Performance
- Keep initial JS bundle lean. Lazy-load Three.js scenes via `dynamic(() => import(...), { ssr: false })`.
- Use `next/image` for all raster images.
- Use `next/font` (Geist or whatever is wired in layout) — no `<link>` font tags.

## Rules
- No database, no API routes are needed for this project. If you think you need one, stop and ask.
- Never create `tailwind.config.*` — Tailwind v4 uses `@theme` in globals.css.
- Never commit `.env*` files.
