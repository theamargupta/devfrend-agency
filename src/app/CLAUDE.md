# App Router

- Server Components by default. `'use client'` only for interactive/R3F/GSAP components.
- `layout.tsx` wires `next/font`, Lenis provider, theme provider. Do NOT duplicate providers deeper in the tree.
- Metadata via Next.js `metadata` export — keep per route.
- No API routes in this project.
