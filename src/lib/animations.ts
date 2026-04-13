/**
 * Shared GSAP setup + scroll-reveal helpers.
 * Registers ScrollTrigger once and exposes a few hook-friendly utilities.
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Reveal children of `el` on scroll into view.
 * Targets are discovered via the `[data-reveal]` attribute.
 */
export function scrollReveal(el: HTMLElement, options?: { stagger?: number }) {
  const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!targets.length) return () => {};

  const tween = gsap.fromTo(
    targets,
    { y: 36, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power4.out",
      stagger: options?.stagger ?? 0.08,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}
