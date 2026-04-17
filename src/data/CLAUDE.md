# Data

Source of truth for all marketing copy, project lists, testimonials, etc. Rules:

- All strings live here, not in component JSX.
- Follow `BRAND_VOICE.md` tone for any new copy.
- Types: define and export from the same file.
- Freeze arrays/objects with `as const` where useful for inference.
