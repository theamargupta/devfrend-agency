"use client";

/**
 * BentoCard — DA-19
 * Case-study tile for the bento grid. Hover-reveals a gradient wash + CTA
 * overlay. Click navigates to /work/[slug].
 */

import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

const spanClasses: Record<CaseStudy["span"], string> = {
  "1x1": "md:col-span-3 md:row-span-3",
  "2x1": "md:col-span-6 md:row-span-3",
  "1x2": "md:col-span-3 md:row-span-6",
  "2x2": "md:col-span-6 md:row-span-6",
};

const accentGradient: Record<CaseStudy["accent"], string> = {
  primary:
    "radial-gradient(70% 60% at 100% 0%, rgba(61,75,255,0.30) 0%, rgba(5,5,7,0) 60%)",
  accent:
    "radial-gradient(70% 60% at 100% 0%, rgba(168,245,0,0.25) 0%, rgba(5,5,7,0) 60%)",
  secondary:
    "radial-gradient(70% 60% at 100% 0%, rgba(255,122,92,0.25) 0%, rgba(5,5,7,0) 60%)",
};

export default function BentoCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      data-reveal
      data-cursor="magnet"
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--color-surface-3)] bg-[color:var(--color-surface-1)]/70 p-8 backdrop-blur-xl transition-colors hover:border-[var(--color-accent-400)]/60 ${spanClasses[study.span]}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: accentGradient[study.accent] }}
      />
      <header className="relative flex items-baseline justify-between">
        <span className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)]">
          {study.sector} · {study.year}
        </span>
        <span
          className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        >
          View →
        </span>
      </header>
      <div className="relative mt-16">
        <h3
          className="font-display font-semibold text-[var(--color-fg-0)]"
          style={{
            fontSize: "var(--text-3xl)",
            lineHeight: "var(--leading-tight)",
            letterSpacing: "var(--tracking-tight)",
          }}
        >
          {study.title}
        </h3>
        <p
          className="mt-3 max-w-md font-body text-[var(--color-fg-1)]"
          style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-snug)" }}
        >
          {study.tagline}
        </p>
      </div>
    </Link>
  );
}
