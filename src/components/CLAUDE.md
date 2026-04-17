# Components

Folder layout (create if missing):
- `sections/` — marketing sections (Hero, Features, CTAs) — typically server components
- `three/` — R3F client components, always behind `next/dynamic { ssr: false }`
- `motion/` — Framer Motion wrappers
- `ui/` — shared primitives (Button, Card, etc.)

Rules:
- `'use client'` is a smell on non-interactive components — audit before adding.
- R3F: wrap `<Canvas>` with `<Suspense>`; memoize geometries.
- GSAP: `useGSAP({ scope })` from `@gsap/react`.
