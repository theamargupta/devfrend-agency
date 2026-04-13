/**
 * FAQs — DA-24
 */

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "What does a typical engagement cost?",
    a: "Our four service shapes range from a fixed-fee $9k audit to a 12-week $70k launch partnership. We send a scoped proposal within 48 hours of the intro call.",
  },
  {
    q: "Do you work with existing design systems?",
    a: "Yes. We prefer embedding in yours. If you don't have one, we can ship a lightweight one as part of the build (see service 02).",
  },
  {
    q: "How small is 'boutique'?",
    a: "Two senior engineers + a network of three specialists (WebGL, motion, a11y) we bring in per project. You talk to the person building it.",
  },
  {
    q: "What don't you do?",
    a: "We don't do WordPress, Shopify themes, Webflow-only builds, or accessibility as a post-hoc retrofit. We'll refer you to people who do those well.",
  },
  {
    q: "How do you handle accessibility?",
    a: "WCAG 2.1 AA from day one. We test with keyboard, screen reader (NVDA + VoiceOver), and axe-core. If we miss something, we fix it on our dime.",
  },
  {
    q: "Can you start this week?",
    a: "Usually. We hold one slot per quarter for a fast-start engagement — book an intro call and we'll tell you if this quarter's slot is still open.",
  },
];
