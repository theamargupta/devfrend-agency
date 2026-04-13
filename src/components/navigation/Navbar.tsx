"use client";

/**
 * Navbar — DA-15
 * Sticky, translucent nav with scroll-progress bar + hide-on-scroll-down.
 */

import { useEffect, useRef, useState } from "react";
import { BRAND, NAV_LINKS, CTA } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const lastYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? Math.min(1, y / docH) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${pct})`;
      }
      setScrolled(y > 24);
      setHidden(y > lastYRef.current && y > 160);
      lastYRef.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed left-0 right-0 top-0 z-50 transition-transform duration-500",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.30, 1)" }}
    >
      <div
        className={[
          "mx-auto flex w-full max-w-[var(--container-max)] items-center justify-between px-[var(--gutter)] py-4 transition-colors",
          scrolled
            ? "backdrop-blur-xl bg-[color:var(--color-surface-0)]/60 border-b border-[var(--color-surface-3)]"
            : "bg-transparent",
        ].join(" ")}
      >
        <a
          href="#top"
          data-cursor="magnet"
          className="font-mono text-sm uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-0)]"
        >
          {BRAND.name}
          <span className="mx-2 text-[var(--color-accent-400)]">/</span>
          <span className="text-[var(--color-fg-1)]">agency</span>
        </a>

        <nav className="hidden gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="magnet"
              className="font-body text-sm text-[var(--color-fg-1)] transition-colors hover:text-[var(--color-fg-0)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <MagneticButton
          href="#contact"
          variant="primary"
          className="hidden md:inline-flex h-11 px-5 text-sm"
        >
          {CTA.contact}
        </MagneticButton>
      </div>

      <div
        ref={progressRef}
        aria-hidden
        className="h-px origin-left bg-[var(--color-accent-400)]"
        style={{ transform: "scaleX(0)", transition: "transform 80ms linear" }}
      />
    </header>
  );
}
