"use client";

/**
 * AnimatedTagline — DA-14
 * GSAP-style SplitText-equivalent animation done in vanilla + CSS
 * (Club GSAP's official SplitText is a paid plugin; this replicates the
 * effect with per-char spans + staggered translateY/opacity).
 *
 * Behavior:
 *  - On mount, the primary tagline reveals per-character with a spring.
 *  - Afterwards, the subline cycles through BRAND.tagRotating every 3.2s
 *    with a crossfade + y-shift transition.
 */

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BRAND, MOTION } from "@/lib/constants";

function splitToWords(text: string) {
  return text.split(" ").map((word, w) => ({
    word,
    key: `w-${w}-${word}`,
    chars: Array.from(word).map((char, i) => ({ char, key: `${w}-${i}-${char}` })),
  }));
}

export default function AnimatedTagline({ primary }: { primary: string }) {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const rotatingRef = useRef<HTMLSpanElement | null>(null);

  // One-shot reveal for the primary heading
  useEffect(() => {
    const chars = headingRef.current?.querySelectorAll<HTMLSpanElement>(
      "[data-char]"
    );
    if (!chars) return;
    gsap.fromTo(
      chars,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: MOTION.dur.slow,
        stagger: 0.018,
        ease: MOTION.ease.outExpo,
      }
    );
  }, []);

  // Rotating subline loop
  useEffect(() => {
    const id = window.setInterval(() => {
      setRotatingIndex((i) => (i + 1) % BRAND.tagRotating.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  // Animate the subline on change
  useEffect(() => {
    const el = rotatingRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { yPercent: 100, opacity: 0, filter: "blur(6px)" },
      {
        yPercent: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.52,
        ease: MOTION.ease.outExpo,
      }
    );
  }, [rotatingIndex]);

  const words = splitToWords(primary);

  return (
    <>
      <h1
        ref={headingRef}
        className="max-w-5xl font-display font-semibold text-[var(--color-fg-0)]"
        style={{
          fontSize: "var(--text-display)",
          lineHeight: "var(--leading-display)",
          letterSpacing: "var(--tracking-tighter)",
        }}
        aria-label={primary}
      >
        {words.map(({ word, key, chars }, i) => (
          <span
            key={key}
            className="inline-flex overflow-hidden align-baseline"
            style={{ marginRight: i < words.length - 1 ? "0.28em" : 0 }}
            aria-hidden
          >
            {chars.map(({ char, key: ck }) => (
              <span
                key={ck}
                data-char
                className="inline-block will-change-transform"
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h1>

      <div className="mt-5 h-8 overflow-hidden" aria-live="polite">
        <span
          ref={rotatingRef}
          key={rotatingIndex}
          className="block font-mono text-sm uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)]"
        >
          {BRAND.tagRotating[rotatingIndex]}
        </span>
      </div>
    </>
  );
}
