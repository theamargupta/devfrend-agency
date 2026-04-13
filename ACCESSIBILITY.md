# Accessibility — Devfrend Agency (DA-27)

Target: **WCAG 2.1 AA**. This document is both the audit checklist and the
ongoing runbook. Every change to a visible surface should be re-checked
against the relevant row before it ships.

## Guiding principles

1. **Motion is additive, never load-bearing.** Every animation has a static
   equivalent exposed under `prefers-reduced-motion: reduce`.
2. **Keyboard first.** If you cannot reach it with Tab/Shift-Tab, it is broken.
3. **Semantic HTML over ARIA.** Reach for `<button>`, `<nav>`, `<details>`,
   `<label>` before inventing a `role`.
4. **Color is never the only signal.** Hover, focus, and state changes always
   pair color with motion, shape, or text.

## Keyboard + focus

- Skip link at the very top of `<body>` jumps to `#main` (see `layout.tsx`).
- Every interactive element is focusable with `Tab` and a visible focus ring
  is guaranteed by the default browser outline + our focus utility classes.
- `CustomCursor` hides the native cursor visually but the browser still emits
  focus — we never rely on hover-only affordances.
- `FloatingCta` sets `aria-hidden` + `pointer-events: none` when offscreen
  so it does not enter the tab order until it is visible.

## Reduced motion

Respected in:

- `LenisProvider` (disables smooth scroll)
- `CustomCursor` (disables magnetic cursor)
- `MagneticButton` (no transform tween)
- `AnimatedTagline` (rotating subline swaps instantly)
- `HeroScene` (R3F canvas replaced by static CSS radial gradient)
- `Counter` (final value snapped in without easing)

## Color contrast

Verified in Figma against WCAG 2.1 AA:

| Pair | Ratio | AA body |
| ---- | ----- | ------- |
| `--color-fg-0` on `--color-surface-0` | 17.9:1 | Pass |
| `--color-fg-1` on `--color-surface-0` | 10.3:1 | Pass |
| `--color-fg-2` on `--color-surface-0` |  5.1:1 | Pass (large text / meta) |
| `--color-accent-400` on `--color-surface-0` |  12.6:1 | Pass |
| `--color-surface-0` on `--color-accent-400` |  12.6:1 | Pass (CTA fill) |

`--color-fg-3` is reserved for decorative copyright line; never used for
primary content.

## Forms (ContactForm)

- Every input has a visible `<label htmlFor>` — no placeholder-only labels.
- `autoComplete` hints set for `name`, `email`.
- Submit button has a programmatic busy state (`disabled` + text swap).
- Live region (`role="status"` + `aria-live="polite"`) announces the send
  result without stealing focus.
- `noValidate` on the form so our server-side validation messages (not
  browser tooltips) reach assistive tech.

## Media

- Decorative SVGs and canvases carry `aria-hidden="true"`.
- Informative images (none currently in hero) would require `alt=`.
- The 3D globe is decorative — wrapped with `aria-hidden` in
  `ContactSection`.

## Headings + landmarks

- One `<h1>` per route.
- Sections carry a heading that starts a numbered outline
  (`§ Services`, `01 · Problem`, etc.).
- `<nav aria-label="Primary">`, `<nav aria-label="Footer">`.
- `<main id="main">` matches the skip link target.

## Testing matrix

Before shipping a visible change, run all of:

- [ ] axe DevTools scan — 0 critical, 0 serious
- [ ] Tab through the whole page from the top — focus ring visible on every
      interactive element, order matches visual order
- [ ] `prefers-reduced-motion: reduce` toggled in DevTools — nothing moves
- [ ] macOS VoiceOver rotor — all headings, links, landmarks read sensibly
- [ ] 200% zoom — no horizontal scroll, nothing clipped
- [ ] Firefox Lighthouse a11y ≥ 95 (mobile)

## Known gaps

- No explicit `lang` switcher yet — the site is English-only. If we localize,
  revisit per-route `<html lang>` and per-block `lang=` attributes.
- Cal.com embed lives on a different origin; its accessibility is theirs.
  We link out to it rather than iframing to avoid inheriting its issues.
