"use client";

/**
 * Timeline — DA-22
 * Scroll-revealed vertical timeline.
 */

import { TIMELINE } from "@/data/timeline";

export default function Timeline() {
  return (
    <ol className="relative grid gap-10 border-l border-[var(--color-surface-3)] pl-10">
      {TIMELINE.map((t) => (
        <li key={t.year} data-reveal className="relative">
          <span
            aria-hidden
            className="absolute -left-[3.25rem] top-1 h-3 w-3 rounded-full bg-[var(--color-accent-400)] ring-4 ring-[var(--color-surface-0)]"
          />
          <div className="mb-1 font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)]">
            {t.year}
          </div>
          <h3
            className="font-display font-semibold text-[var(--color-fg-0)]"
            style={{
              fontSize: "var(--text-xl)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            {t.title}
          </h3>
          <p
            className="mt-2 max-w-xl font-body text-[var(--color-fg-1)]"
            style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-snug)" }}
          >
            {t.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
