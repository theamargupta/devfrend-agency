"use client";

/**
 * LenisProvider — wires Lenis smooth-scroll globally.
 * Mounts once in layout.tsx and drives ScrollTrigger + scroll-linked anims.
 * Respects prefers-reduced-motion (disables smoothing entirely).
 */

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 4), // easeOutQuart
      smoothWheel: true,
      // `lenis` v1 API — options narrowed to the stable set we actually use.
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
