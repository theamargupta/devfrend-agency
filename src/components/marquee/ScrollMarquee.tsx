"use client";

/**
 * ScrollMarquee — $50K UPLIFT · B1
 * A giant typographic section where the words translate horizontally as
 * the viewport scrolls past. Two rows move in opposite directions. This
 * is the "big typography slab" that separates hero from services on
 * Awwwards-tier sites.
 *
 * Uses GSAP ScrollTrigger with `scrub`. Reduced-motion leaves the rows
 * static (still readable, just not animated).
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOP = [
  "Engineering",
  "·",
  "Interactive",
  "·",
  "Accessible",
  "·",
  "Fast",
  "·",
];
const BOTTOM = [
  "Next.js",
  "·",
  "WebGL",
  "·",
  "GSAP",
  "·",
  "Framer Motion",
  "·",
];

export default function ScrollMarquee() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const rowA = root.querySelector<HTMLDivElement>("[data-row='a']");
      const rowB = root.querySelector<HTMLDivElement>("[data-row='b']");
      if (!rowA || !rowB) return;

      gsap.to(rowA, {
        xPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      gsap.to(rowB, {
        xPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      aria-hidden
      className="relative flex select-none flex-col gap-2 overflow-hidden py-32 md:py-48"
      style={{
        background:
          "linear-gradient(180deg, var(--color-surface-0) 0%, var(--color-surface-1) 50%, var(--color-surface-0) 100%)",
      }}
    >
      <div
        data-row="a"
        className="flex whitespace-nowrap font-display font-semibold"
        style={{
          fontSize: "clamp(5rem, 14vw, 16rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
          color: "var(--color-fg-0)",
          willChange: "transform",
        }}
      >
        {[...TOP, ...TOP, ...TOP].map((w, i) => (
          <span key={`a-${i}`} className="mr-[0.35em]">
            {w}
          </span>
        ))}
      </div>
      <div
        data-row="b"
        className="flex whitespace-nowrap font-display font-semibold"
        style={{
          fontSize: "clamp(5rem, 14vw, 16rem)",
          lineHeight: 0.9,
          letterSpacing: "-0.04em",
          color: "transparent",
          WebkitTextStroke: "1.5px var(--color-accent-400)",
          willChange: "transform",
          transform: "translateX(-25%)",
        }}
      >
        {[...BOTTOM, ...BOTTOM, ...BOTTOM].map((w, i) => (
          <span key={`b-${i}`} className="mr-[0.35em]">
            {w}
          </span>
        ))}
      </div>
    </section>
  );
}
