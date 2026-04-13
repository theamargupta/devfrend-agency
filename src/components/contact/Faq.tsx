"use client";

/**
 * Faq — DA-24
 * Native <details>/<summary> disclosure for zero-JS accessibility.
 */

import { FAQS } from "@/data/faqs";

export default function Faq() {
  return (
    <ul className="grid gap-2">
      {FAQS.map((f) => (
        <li key={f.q} data-reveal>
          <details className="group rounded-2xl border border-[var(--color-surface-3)] bg-[color:var(--color-surface-1)]/50 p-5 backdrop-blur-sm transition-colors hover:border-[var(--color-accent-400)]/40">
            <summary
              className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[var(--color-fg-0)]"
              style={{ fontSize: "var(--text-lg)" }}
            >
              {f.q}
              <span
                aria-hidden
                className="font-mono text-xl text-[var(--color-accent-400)] transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p
              className="mt-4 font-body text-[var(--color-fg-1)]"
              style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-snug)" }}
            >
              {f.a}
            </p>
          </details>
        </li>
      ))}
    </ul>
  );
}
