export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  initials: string;
  tone: "primary" | "accent" | "secondary";
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The attention to detail is on another level. We spent six weeks briefing a different agency and got further with Devfrend in the first working session.",
    name: "Priya M.",
    title: "Head of Design",
    company: "B2B SaaS, Series B",
    initials: "PM",
    tone: "accent",
  },
  {
    id: "t2",
    quote:
      "Every other agency shipped a template. Devfrend shipped a product. The engineering is honestly better than what we have in-house.",
    name: "Jordan K.",
    title: "CTO",
    company: "Developer tools, seed",
    initials: "JK",
    tone: "primary",
  },
  {
    id: "t3",
    quote:
      "The site converted 2.3\u00d7 better than the one it replaced. Same copy, same offer, better craft.",
    name: "Lena F.",
    title: "Founder",
    company: "Creative studio, NYC",
    initials: "LF",
    tone: "secondary",
  },
  {
    id: "t4",
    quote:
      "They treat the site the way a product team treats a product. It's still improving six months after launch.",
    name: "Marcus A.",
    title: "VP Marketing",
    company: "Fintech, Series C",
    initials: "MA",
    tone: "accent",
  },
];
