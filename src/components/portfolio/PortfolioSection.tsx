"use client";

/**
 * PortfolioSection — DA-19
 * Bento grid of case studies with scroll-revealed tiles.
 */

import { useEffect, useRef } from "react";
import { CASE_STUDIES } from "@/data/caseStudies";
import BentoCard from "./BentoCard";
import { scrollReveal } from "@/lib/animations";

export default function PortfolioSection() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    return scrollReveal(ref.current, { stagger: 0.08 });
  }, []);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative bg-[var(--color-surface-0)] py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)]">
        <header className="mb-16 grid gap-6 md:grid-cols-12">
          <p
            data-reveal
            className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)] md:col-span-3"
          >
            § Work
          </p>
          <h2
            data-reveal
            className="font-display font-semibold text-[var(--color-fg-0)] md:col-span-9"
            style={{
              fontSize: "var(--text-4xl)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            Five projects we&apos;d happily walk you through line by line.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-5 md:auto-rows-[70px] md:grid-cols-12">
          {CASE_STUDIES.map((s) => (
            <BentoCard key={s.slug} study={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
