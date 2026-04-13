"use client";

/**
 * ServiceCard — DA-16
 * Glassmorphism card with scroll-triggered reveal handled by parent section.
 */

import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      data-reveal
      className="group relative flex flex-col gap-6 rounded-3xl border border-[var(--color-surface-3)] bg-[color:var(--color-surface-1)]/60 p-8 backdrop-blur-xl transition-colors hover:border-[var(--color-accent-400)]/60 md:p-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(40% 60% at 0% 0%, rgba(193,255,61,0.08) 0%, rgba(5,5,7,0) 60%)",
        }}
      />
      <header className="flex items-baseline justify-between">
        <span className="font-mono text-sm tracking-[var(--tracking-wider)] text-[var(--color-accent-400)]">
          {service.number}
        </span>
        <span className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)]">
          service
        </span>
      </header>

      <h3
        className="font-display font-semibold text-[var(--color-fg-0)]"
        style={{
          fontSize: "var(--text-2xl)",
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tight)",
        }}
      >
        {service.title}
      </h3>

      <p
        className="font-body text-[var(--color-fg-1)]"
        style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-snug)" }}
      >
        {service.short}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2">
        {service.stack.slice(0, 4).map((s) => (
          <li
            key={s}
            className="rounded-full border border-[var(--color-surface-4)] px-3 py-1 font-mono text-xs text-[var(--color-fg-2)]"
          >
            {s}
          </li>
        ))}
      </ul>
    </article>
  );
}
