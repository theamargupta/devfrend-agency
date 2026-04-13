"use client";

/**
 * Counter — DA-17
 * Count-up animation that starts when the element scrolls into view.
 * Uses IntersectionObserver (no GSAP needed); respects reduced motion.
 */

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  to: number;
  suffix?: string;
  durationMs?: number;
}

export default function Counter({ to, suffix = "", durationMs = 1400 }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const runCount = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      if (prefersReduced) {
        setValue(to);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 4);
        setValue(Math.round(eased * to));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            runCount();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, durationMs]);

  return (
    <span
      ref={ref}
      className="font-display font-semibold text-[var(--color-fg-0)] tabular-nums"
      style={{
        fontSize: "var(--text-5xl)",
        letterSpacing: "var(--tracking-tighter)",
        lineHeight: 1,
      }}
    >
      {value}
      {suffix}
    </span>
  );
}
