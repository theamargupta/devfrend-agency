"use client";

/**
 * ProcessSection — $50K UPLIFT · C1
 * Sticky left column with the section heading, right column scrolls
 * through 6 process steps. The left pins while the right moves.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS } from "@/data/process";
import MaskReveal from "@/components/ui/MaskReveal";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="process"
      className="relative mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)] py-32 md:py-48"
    >
      <div className="grid gap-16 md:grid-cols-12">
        <aside className="md:col-span-4">
          <div className="md:sticky md:top-32">
            <p className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)]">
              § Process
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
                Seven weeks. No surprises.
              </span>
            </MaskReveal>
            <p
              className="mt-6 max-w-sm font-body text-[var(--color-fg-1)]"
              style={{
                fontSize: "var(--text-lg)",
                lineHeight: "var(--leading-snug)",
              }}
            >
              A fixed-scope, fixed-price engagement. You see everything we
              see — the Figma, the Linear board, the staging URL — from
              week zero.
            </p>
          </div>
        </aside>

        <ol className="md:col-span-8 md:col-start-5">
          {PROCESS.map((step) => (
            <li
              key={step.id}
              data-step
              className="group grid grid-cols-12 gap-4 border-t border-[var(--color-surface-3)] py-10 first:border-t-0"
            >
              <div className="col-span-2 md:col-span-2">
                <span
                  className="font-display font-semibold text-[var(--color-accent-400)]"
                  style={{
                    fontSize: "var(--text-3xl)",
                    letterSpacing: "var(--tracking-tight)",
                  }}
                >
                  {step.number}
                </span>
              </div>
              <div className="col-span-10 md:col-span-7">
                <h3
                  className="font-display font-semibold text-[var(--color-fg-0)]"
                  style={{
                    fontSize: "var(--text-2xl)",
                    letterSpacing: "var(--tracking-tight)",
                  }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 font-body text-[var(--color-fg-1)]">
                  {step.summary}
                </p>
                <p className="mt-4 max-w-xl font-body text-sm text-[var(--color-fg-2)]">
                  {step.detail}
                </p>
              </div>
              <div className="col-span-12 md:col-span-3 md:text-right">
                <span className="font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)]">
                  {step.duration}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
