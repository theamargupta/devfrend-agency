/**
 * Devfrend Agency — Brand & site constants
 * Single source of truth for palette tokens, nav, metadata, and CTAs.
 */

// -----------------------------------------------------------------------------
// Brand identity
// -----------------------------------------------------------------------------
export const BRAND = {
  name: "Devfrend",
  fullName: "Devfrend Agency",
  tagline: "Engineering-grade websites that feel alive.",
  tagRotating: [
    "Engineering-grade websites.",
    "Interfaces that feel alive.",
    "Interactive. Accessible. Fast.",
    "Built by engineers, not templates.",
  ],
  domain: "devfrend.com",
  email: "hello@devfrend.com",
  location: "Remote · Global",
  calLink: "https://cal.com/devfrend/intro",
} as const;

// -----------------------------------------------------------------------------
// Brand palette (mirrors globals.css tokens — for use in TS/R3F/GSAP)
// -----------------------------------------------------------------------------
export const PALETTE = {
  primary: {
    50:  "#eef1ff",
    500: "#3d4bff",
    600: "#2a33e6",
    900: "#0f1359",
  },
  accent: {
    300: "#c1ff3d",
    400: "#a8f500",
    500: "#8ad400",
  },
  secondary: {
    500: "#ff7a5c",
  },
  surface: {
    0: "#050507",
    1: "#0b0c10",
    2: "#121319",
    3: "#1c1d27",
    4: "#2a2b38",
  },
  fg: {
    0: "#f7f8fb",
    1: "#c9ccd6",
    2: "#8a8f9e",
  },
} as const;

// -----------------------------------------------------------------------------
// Motion tokens (mirrors globals.css — for GSAP defaults)
// -----------------------------------------------------------------------------
export const MOTION = {
  ease: {
    outExpo: "power4.out",          // GSAP equivalent of --ease-out-expo
    inOutCubic: "power3.inOut",
    spring: "back.out(1.6)",
  },
  dur: {
    fast: 0.16,
    base: 0.28,
    slow: 0.52,
    page: 0.78,
  },
} as const;

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------
export const NAV_LINKS = [
  { label: "Work",     href: "#portfolio" },
  { label: "Services", href: "#services"  },
  { label: "About",    href: "#about"     },
  { label: "Contact",  href: "#contact"   },
] as const;

// -----------------------------------------------------------------------------
// CTAs — canonical button copy (brand voice — see BRAND_VOICE.md)
// -----------------------------------------------------------------------------
export const CTA = {
  primary:   "Start a project",
  secondary: "See the work",
  contact:   "Book a 20-min call",
  tertiary:  "Peek under the hood",
} as const;

// -----------------------------------------------------------------------------
// Social
// -----------------------------------------------------------------------------
export const SOCIAL = [
  { label: "GitHub",   href: "https://github.com/devfrend" },
  { label: "LinkedIn", href: "https://linkedin.com/in/devfrend" },
  { label: "Twitter",  href: "https://twitter.com/devfrend" },
  { label: "Read.cv",  href: "https://read.cv/devfrend" },
] as const;

// -----------------------------------------------------------------------------
// SEO defaults (will be extended in DA-26)
// -----------------------------------------------------------------------------
export const SEO_DEFAULTS = {
  title: `${BRAND.name} — ${BRAND.tagline}`,
  description:
    "Devfrend is a boutique engineering studio shipping interactive, performant, accessibility-first websites. Next.js · React Three Fiber · GSAP · Framer Motion.",
  keywords: [
    "creative agency",
    "web design agency",
    "Next.js agency",
    "React Three Fiber",
    "WebGL",
    "GSAP",
    "interactive website",
    "portfolio design",
  ],
} as const;
