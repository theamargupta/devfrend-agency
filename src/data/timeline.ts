/**
 * Timeline — DA-22 (About section)
 */

export interface TimelineItem {
  year: string;
  title: string;
  body: string;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "2014",
    title: "First production React site",
    body: "Early adopter; learned the hard way that animation is a systems problem, not a styling one.",
  },
  {
    year: "2018",
    title: "Led frontend at a Series B fintech",
    body: "Shipped a design system, a performance budget, and the team's first a11y commitment.",
  },
  {
    year: "2022",
    title: "Started freelancing as Devfrend",
    body: "Two launches in the first six months, both hit Lighthouse 95+ and got linked on Awwwards.",
  },
  {
    year: "2024",
    title: "Incorporated Devfrend Agency",
    body: "Brought on one senior engineer and a motion specialist. Boutique by design.",
  },
  {
    year: "2026",
    title: "Today",
    body: "Shipping the site you're reading. Four services, five case studies, and a voice guide we actually follow.",
  },
];
