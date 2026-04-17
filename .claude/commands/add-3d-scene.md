---
description: Scaffold a new React Three Fiber scene
---

Create a new client component under `src/components/three/` wrapping a `<Canvas>`. Rules:
- `'use client'` at the top
- Lazy import via `next/dynamic` with `{ ssr: false }` from the parent
- Provide a Suspense fallback
- Respect `prefers-reduced-motion` (use `useReducedMotion` from framer-motion)
- Dispose geometries/materials on unmount

Scene name / description: $ARGUMENTS
