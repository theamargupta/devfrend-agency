"use client";

/**
 * Testimonials — $50K UPLIFT · C2
 * A horizontal-snap carousel of four quotes. Avatar uses initials so we
 * don't bundle placeholder portraits (and don't need to license them).
 * Arrow keys + drag scrolling via the scroll-snap CSS only — no JS.
 */

import { TESTIMONIALS } from "@/data/testimonials";
import MaskReveal from "@/components/ui/MaskReveal";

const toneRing: Record<string, string> = {
  primary: "ring-[var(--color-primary-500)]/40",
  accent: "ring-[var(--color-accent-400)]/40",
  secondary: "ring-[var(--color-secondary-500)]/40",
};
const toneBg: Record<string, string> = {
  primary: "bg-[var(--color-primary-500)]/15 text-[var(--color-primary-500)]",
  accent: "bg-[var(--color-accent-400)]/15 text-[var(--color-accent-400)]",
  secondary:
    "bg-[var(--color-secondary-500)]/15 text-[var(--color-secondary-500)]",
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-32 md:py-48"
      style={{
        background:
          "linear-gradient(180deg, var(--color-surface-0) 0%, var(--color-surface-1) 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)]">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)]">
              § Clients
            </p>
            <MaskReveal
              as="h2"
              className="mt-6 font-display font-semibold text-[var(--color-fg-0)]"
            >
              <span
                style={{
                  fontSize: "var(--text-5xl)",
                  lineHeight: "var(--leading-tight)",
                  letterSpacing: "var(--tracking-tighter)",
                  display: "inline-block",
                }}
              >
                What it&rsquo;s like to work with us.
              </span>
            </MaskReveal>
          </div>
          <p className="hidden font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)] md:block">
            Drag →
          </p>
        </div>

        <ul
          className="mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Client testimonials"
        >
          {TESTIMONIALS.map((t) => (
            <li
              key={t.id}
              className={`group relative flex min-w-[85%] shrink-0 snap-center flex-col justify-between rounded-3xl border border-[var(--color-surface-3)] bg-[color:var(--color-surface-1)]/60 p-10 ring-1 ${toneRing[t.tone]} md:min-w-[540px]`}
            >
              <p
                className="font-display font-medium text-[var(--color-fg-0)]"
                style={{
                  fontSize: "var(--text-2xl)",
                  lineHeight: "var(--leading-snug)",
                  letterSpacing: "var(--tracking-tight)",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <span
                  aria-hidden
                  className={`flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm ${toneBg[t.tone]}`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="font-body text-sm text-[var(--color-fg-0)]">
                    {t.name}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)]">
                    {t.title} · {t.company}
                  </p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
