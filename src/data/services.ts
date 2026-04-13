/**
 * Services data — DA-16/DA-18
 * Four service pillars. Each has short (card) and long (horizontal deep-dive)
 * copy so DA-16 and DA-18 share one source of truth.
 */

export interface Service {
  id: string;
  number: string;
  title: string;
  short: string;
  long: string;
  deliverables: string[];
  stack: string[];
}

export const SERVICES: Service[] = [
  {
    id: "interactive-web",
    number: "01",
    title: "Interactive websites",
    short:
      "Marketing sites that feel like product — scroll-linked, 3D-accented, built in Next.js.",
    long: "We take a Figma file and turn it into a site where every interaction is designed, measured, and reviewed. Scroll-linked motion, WebGL scenes, magnetic CTAs — the kind of work that gets linked on Awwwards because the motion is good, not decorative.",
    deliverables: [
      "Figma → production Next.js build",
      "R3F scenes under 120 kB gzipped",
      "GSAP ScrollTrigger pinning + scrub",
      "Lighthouse 90+ verified on 3G throttle",
    ],
    stack: ["Next.js", "React Three Fiber", "GSAP", "Framer Motion", "Lenis"],
  },
  {
    id: "design-engineering",
    number: "02",
    title: "Design engineering",
    short:
      "A design system in code. Tokens, primitives, docs — the bedrock your team can ship against for years.",
    long: "We embed for 4–8 weeks and leave behind a typed, themed, documented design system. Tokens as CSS variables, primitives in TypeScript, motion specs with codified easings, a Storybook that plays double duty as the team's living style guide.",
    deliverables: [
      "Design tokens (JSON + CSS + Tailwind)",
      "Primitive component library (TypeScript)",
      "Motion + a11y specifications",
      "Storybook with interaction tests",
    ],
    stack: ["TypeScript", "Tailwind v4", "Storybook", "Radix", "Stitches"],
  },
  {
    id: "performance-a11y",
    number: "03",
    title: "Performance & a11y audits",
    short:
      "A 10-day deep dive. We come back with a report, a PR, and numbers to defend.",
    long: "We profile your site on real devices under real network conditions, fix the top 20% that moves 80% of the metrics, and ship a PR with before/after Lighthouse + axe-core diffs. No vague recommendations — we leave code.",
    deliverables: [
      "Lighthouse before/after report",
      "axe-core audit + WCAG 2.1 AA diff",
      "Prioritized fix PR with perf budget",
      "4-week follow-up review call",
    ],
    stack: ["Lighthouse", "axe-core", "WebPageTest", "Chrome DevTools"],
  },
  {
    id: "launch-partner",
    number: "04",
    title: "Launch partner",
    short:
      "For founders shipping v1. A senior engineer on your team, end to end, until you're live.",
    long: "We pair with your designer (or ours) and take the site from blank repo to devfrend.com. You get one senior engineer, full-time for 6–12 weeks, shipping in your codebase, reviewing your PRs, writing your README.",
    deliverables: [
      "Full-time engineer for 6–12 weeks",
      "Site live on Vercel / Cloudflare",
      "Analytics + observability wired",
      "Handoff doc + runbook",
    ],
    stack: ["Next.js", "Vercel", "PostHog", "Sentry", "Turborepo"],
  },
];

export const STATS = [
  { value: 47, suffix: "+", label: "shipped projects" },
  { value: 94, suffix: "",  label: "avg. Lighthouse perf" },
  { value: 12, suffix: "+", label: "years senior exp" },
  { value: 100, suffix: "%", label: "WCAG 2.1 AA" },
];

export const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "React Three Fiber",
  "GSAP",
  "Framer Motion",
  "Tailwind v4",
  "Three.js",
  "Lenis",
  "Vercel",
  "PostHog",
  "Sentry",
  "Cal.com",
  "Resend",
  "Storybook",
];
