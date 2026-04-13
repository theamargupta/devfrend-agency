"use client";

/**
 * AboutSection — DA-22
 */

import { useEffect, useRef } from "react";
import Timeline from "./Timeline";
import { scrollReveal } from "@/lib/animations";

export default function AboutSection() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    return scrollReveal(ref.current, { stagger: 0.09 });
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-[var(--color-surface-0)] py-28 md:py-40"
    >
      <div className="mx-auto grid w-full max-w-[var(--container-max)] grid-cols-1 gap-12 px-[var(--gutter)] md:grid-cols-12">
        <header className="md:col-span-4">
          <p
            data-reveal
            className="mb-6 font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)]"
          >
            § About
          </p>
          <h2
            data-reveal
            className="font-display font-semibold text-[var(--color-fg-0)]"
            style={{
              fontSize: "var(--text-4xl)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            Built by engineers, not templates.
          </h2>
          <p
            data-reveal
            className="mt-6 font-body text-[var(--color-fg-1)]"
            style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-snug)" }}
          >
            Twelve years of shipping production frontend. Senior-only team.
            You talk to the person writing the code.
          </p>
        </header>

        <div className="md:col-span-8">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
