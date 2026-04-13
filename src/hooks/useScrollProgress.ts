"use client";

/**
 * useScrollProgress — returns document scroll progress 0..1.
 * Used by Navbar and section progress indicators.
 */

import { useEffect, useState } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(docH > 0 ? Math.min(1, y / docH) : 0);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return progress;
}
