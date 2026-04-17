---
description: Run a build and report bundle sizes
---

Run `npm run build`. Parse the Next.js build output and report:
- Route-level JS sizes (First Load JS)
- Largest client boundaries
- Any R3F scenes not lazy-loaded (look for static imports of `@react-three/*` in server components or non-dynamic client imports)
