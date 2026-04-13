export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  duration: string;
}

export const PROCESS: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    title: "Discovery",
    summary: "We figure out if we're the right fit.",
    detail:
      "A 60-minute working session. You walk us through the product, the audience, and the stakes. We leave with a brief and a rough shape of the engagement.",
    duration: "Week 0",
  },
  {
    id: "concept",
    number: "02",
    title: "Concept",
    summary: "Two directions, not five.",
    detail:
      "Two distinct art-direction routes. Figma, annotated. We present both live, you pick the one that fits — or the hybrid that fell out of the conversation.",
    duration: "Week 1",
  },
  {
    id: "design",
    number: "03",
    title: "Design system",
    summary: "Tokens before pixels.",
    detail:
      "A design system built on CSS custom properties from day one. Every color, radius, easing has a token. Nothing in the file is a one-off.",
    duration: "Week 2",
  },
  {
    id: "build",
    number: "04",
    title: "Build",
    summary: "Engineered, not stitched.",
    detail:
      "Next.js App Router, React Three Fiber for 3D, GSAP for motion. Code reviewed by senior engineers. Every PR ships with a Lighthouse run.",
    duration: "Weeks 3\u20135",
  },
  {
    id: "polish",
    number: "05",
    title: "Polish",
    summary: "Where the $50K lives.",
    detail:
      "Micro-interactions, reduced-motion fallbacks, a11y audit, performance budget. The pass that separates a nice site from a memorable one.",
    duration: "Week 6",
  },
  {
    id: "launch",
    number: "06",
    title: "Launch",
    summary: "Then we hand you the keys.",
    detail:
      "Deploy to Vercel, set up analytics, write the runbook. 30 days of warranty support. Then the repo is yours \u2014 no lock-in, no retainer.",
    duration: "Week 7",
  },
];
