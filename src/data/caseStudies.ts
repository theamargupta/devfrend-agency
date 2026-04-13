/**
 * Case studies data — DA-20/DA-21
 * 5 real Devfrend projects. Used by PortfolioSection (bento grid) and
 * the dynamic /work/[slug] route (individual project pages).
 */

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  sector: string;
  year: string;
  role: string;
  span: "1x1" | "2x1" | "1x2" | "2x2"; // bento grid span
  accent: "primary" | "accent" | "secondary";
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
  };
  problem: string;
  approach: string[];
  outcome: {
    metric: string;
    value: string;
    narrative: string;
  }[];
  stack: string[];
  quote?: {
    text: string;
    attribution: string;
  };
  nextSlug: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "memory-mcp",
    title: "Memory MCP",
    tagline: "A persistent memory layer for Claude.",
    sector: "Developer tools",
    year: "2026",
    role: "Lead engineering",
    span: "2x2",
    accent: "accent",
    hero: {
      eyebrow: "Open-source · MCP",
      headline: "Giving Claude a long-term memory without a database.",
      subhead:
        "A file-backed memory server that works across sessions, integrates with any MCP host, and ships with zero config.",
    },
    problem:
      "LLM assistants forget everything at the end of a conversation. Teams wanted continuity — remembering the user, the project, the preferences — without standing up a vector DB per user.",
    approach: [
      "Designed a typed memory schema (user, feedback, project, reference) with frontmatter-based storage.",
      "Shipped an MCP server in Node that reads/writes memory files locally.",
      "Wrote a reference client + recall heuristics tuned for agentic workflows.",
    ],
    outcome: [
      {
        metric: "Install time",
        value: "< 60s",
        narrative: "npx one-liner, no services, no secrets.",
      },
      {
        metric: "Recall quality",
        value: "+38%",
        narrative:
          "Internal eval vs. no-memory baseline on multi-session coding tasks.",
      },
      {
        metric: "Stars in wk 1",
        value: "1.2k",
        narrative: "Shared on HN and the MCP community Discord.",
      },
    ],
    stack: ["Node.js", "TypeScript", "MCP SDK", "Zod", "Vitest"],
    nextSlug: "ai-chatbot",
  },
  {
    slug: "ai-chatbot",
    title: "AI Chatbot (Devfrend)",
    tagline: "A white-label chatbot that feels native, not bolted on.",
    sector: "B2B SaaS",
    year: "2025",
    role: "Full-stack",
    span: "2x1",
    accent: "primary",
    hero: {
      eyebrow: "Private beta · SaaS",
      headline: "Shipping a support chatbot teams actually ship with.",
      subhead:
        "A customizable, streaming, RAG-backed chat surface that matches the host product's design system on install.",
    },
    problem:
      "Off-the-shelf chatbot widgets feel like a third-party iframe pasted on. Customers wanted something that looked and behaved like their own product — same fonts, same motion, same a11y.",
    approach: [
      "Built a design-token-aware shell that reads host CSS variables at runtime.",
      "Streamed responses using SSE with graceful fallback; zero layout shift.",
      "Retrieval layer with per-tenant isolation on a single Postgres + pgvector instance.",
    ],
    outcome: [
      {
        metric: "Time to install",
        value: "9 min",
        narrative: "Median for design-engineering tenants.",
      },
      {
        metric: "Deflection",
        value: "62%",
        narrative: "Of previously-human tickets resolved by the bot.",
      },
      {
        metric: "CLS on host",
        value: "0.00",
        narrative: "Verified across 14 tenant sites.",
      },
    ],
    stack: ["Next.js", "Postgres + pgvector", "SSE", "Vercel AI SDK", "Tailwind"],
    quote: {
      text: "We stopped hearing 'is this a third-party widget?' the week we shipped the Devfrend version.",
      attribution: "Design lead, Series B SaaS (name under NDA)",
    },
    nextSlug: "devfrend-mcp",
  },
  {
    slug: "devfrend-mcp",
    title: "Devfrend MCP",
    tagline: "A single MCP for your whole freelance stack.",
    sector: "Internal tools",
    year: "2026",
    role: "Sole engineer",
    span: "1x1",
    accent: "accent",
    hero: {
      eyebrow: "Internal tool · MCP",
      headline: "One MCP that knows every tool I use to run Devfrend.",
      subhead:
        "Jira, Cal.com, Gmail, Stripe, Notion — all behind a single MCP surface I can script against from any AI assistant.",
    },
    problem:
      "Running a one-person studio means switching between 12 apps a day. Each AI assistant needs its own integrations wired up. Duplication everywhere.",
    approach: [
      "Built a single MCP server with a plugin model per tool.",
      "Auth via OAuth device flow, secrets in macOS Keychain.",
      "Published as a private npm package I can pin in any Claude or Cursor config.",
    ],
    outcome: [
      {
        metric: "Daily context switches",
        value: "-71%",
        narrative: "Measured over a two-week baseline.",
      },
      {
        metric: "Tool integrations",
        value: "14",
        narrative: "All behind one MCP entry.",
      },
    ],
    stack: ["TypeScript", "MCP", "OAuth 2.0", "Keychain", "Zod"],
    nextSlug: "openclaw",
  },
  {
    slug: "openclaw",
    title: "OpenClaw",
    tagline: "A scroll-driven product site for a dev-tool launch.",
    sector: "Developer tools",
    year: "2025",
    role: "Design engineering",
    span: "1x2",
    accent: "secondary",
    hero: {
      eyebrow: "Launch site · OSS",
      headline: "A launch site that got 9.4k visitors on day one.",
      subhead:
        "A scroll-driven, GSAP-pinned product story for an open-source CLI, shipped in 11 days from Figma to live.",
    },
    problem:
      "The team had great Figma mocks and a hard launch date. They needed engineering that wouldn't water down the motion or the 3D to hit it.",
    approach: [
      "Pinned horizontal sections driven by GSAP ScrollTrigger scrub.",
      "Lazy-loaded three sequential WebGL scenes; each under 80 kB gzipped.",
      "Dynamic OG images per section, shipped via @vercel/og.",
    ],
    outcome: [
      {
        metric: "Day-one visitors",
        value: "9.4k",
        narrative: "Ranked #3 on HN the day of launch.",
      },
      {
        metric: "Lighthouse perf",
        value: "96",
        narrative: "Mobile, throttled 4G.",
      },
      {
        metric: "Bounce rate",
        value: "22%",
        narrative: "Against a B2B dev-tool benchmark of ~55%.",
      },
    ],
    stack: ["Next.js", "GSAP", "R3F", "@vercel/og", "Tailwind"],
    nextSlug: "invensync",
  },
  {
    slug: "invensync",
    title: "InvenSync",
    tagline: "A dashboard that replaced four spreadsheets.",
    sector: "Logistics",
    year: "2025",
    role: "Full-stack",
    span: "2x1",
    accent: "primary",
    hero: {
      eyebrow: "Internal product",
      headline: "A live-inventory dashboard for a 3PL back-office team.",
      subhead:
        "Real-time sync across four warehouses, built on Postgres + Convex, shipped in six weeks.",
    },
    problem:
      "The operations team was reconciling four spreadsheets daily, each sourced from a different warehouse's CSV export. Errors cost real money.",
    approach: [
      "Convex-backed real-time sync with optimistic UI.",
      "Accessible data-grid primitives built on TanStack Table v8.",
      "RBAC + audit log shipped day-one; SOC2-friendly from the start.",
    ],
    outcome: [
      {
        metric: "Reconciliation time",
        value: "-86%",
        narrative: "From ~4 hrs/day to ~30 min.",
      },
      {
        metric: "Manual errors",
        value: "-97%",
        narrative: "Measured against 3-month baseline.",
      },
    ],
    stack: ["Next.js", "Convex", "TanStack Table", "Zod", "PostHog"],
    quote: {
      text: "This is the first internal tool the team actually asks to use.",
      attribution: "Head of Operations, 3PL partner",
    },
    nextSlug: "memory-mcp",
  },
];
