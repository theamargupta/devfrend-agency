"use client";

/**
 * Preloader — $50K UPLIFT · A2
 * Premium first-visit preloader:
 *  - Fullscreen black overlay
 *  - Counter 0→100 (700ms)
 *  - Brand mark slides in with a clip-path mask reveal
 *  - Overlay splits into two halves and wipes off-screen
 *
 * Only runs on first page-load of the session (sessionStorage flag), so
 * client-side navigations don't re-trigger it. Respects reduced-motion.
 */

import { useEffect, useRef, useState } from "react";

const SESSION_KEY = "devfrend.preloader.seen";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"counting" | "revealing" | "leaving" | "done">(
    "counting",
  );
  const rafRef = useRef<number | null>(null);

  // Decide on mount whether to show.
  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = window.sessionStorage.getItem(SESSION_KEY) === "1";
    if (reduce || seen) {
      setPhase("done");
      return;
    }
    setActive(true);
  }, []);

  // Count up animation.
  useEffect(() => {
    if (!active || phase !== "counting") return;
    const start = performance.now();
    const duration = 900;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setPhase("revealing");
        // hold on 100 briefly, then leave
        setTimeout(() => setPhase("leaving"), 320);
        setTimeout(() => {
          setPhase("done");
          try {
            window.sessionStorage.setItem(SESSION_KEY, "1");
          } catch {
            /* noop */
          }
        }, 1280);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, phase]);

  // Lock scroll while active.
  useEffect(() => {
    if (!active || phase === "done") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active, phase]);

  if (!mounted || !active || phase === "done") return null;

  const leaving = phase === "leaving";
  // Mask reveal on the wordmark: clip-path inset shrinks from 100% to 0 on the right.
  const maskShown = phase === "revealing" || phase === "leaving";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[200]"
      style={{ contain: "strict" }}
    >
      {/* Two halves that wipe apart on leave */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 bg-[#050507] transition-transform duration-[900ms]"
        style={{
          transform: leaving ? "translateY(-101%)" : "translateY(0)",
          transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-[#050507] transition-transform duration-[900ms]"
        style={{
          transform: leaving ? "translateY(101%)" : "translateY(0)",
          transitionTimingFunction: "cubic-bezier(0.76, 0, 0.24, 1)",
          transitionDelay: "80ms",
        }}
      />

      {/* Foreground content — sits above the halves */}
      <div className="relative z-10 flex h-full w-full items-end justify-between px-[var(--gutter)] pb-10">
        {/* Brand mark with mask reveal */}
        <div className="overflow-hidden">
          <div
            className="font-mono text-sm uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-0)]"
            style={{
              transform: maskShown ? "translateY(0)" : "translateY(110%)",
              transition: "transform 700ms cubic-bezier(0.76, 0, 0.24, 1)",
            }}
          >
            Devfrend / Agency
          </div>
        </div>

        {/* Counter */}
        <div
          className="font-display font-semibold tabular-nums text-[var(--color-fg-0)]"
          style={{
            fontSize: "clamp(3rem, 9vw, 9rem)",
            lineHeight: 1,
            letterSpacing: "var(--tracking-tighter)",
            opacity: leaving ? 0 : 1,
            transform: leaving ? "translateY(-30%)" : "translateY(0)",
            transition:
              "opacity 500ms ease, transform 700ms cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          {String(count).padStart(3, "0")}
        </div>
      </div>

      {/* Thin progress line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10">
        <div
          className="h-full bg-[var(--color-accent-400)]"
          style={{
            width: `${count}%`,
            transition: "width 80ms linear",
          }}
        />
      </div>
    </div>
  );
}
