"use client";

/**
 * ServicesSection — DA-16 + DA-17 + DA-18
 *  - Grid of glassmorphism service cards (DA-16)
 *  - Stat counters row (DA-17)
 *  - Tech stack ticker (DA-17)
 *  - Horizontal pin-scroll service deep-dives (DA-18)
 */

import { useEffect, useRef } from "react";
import { SERVICES, STATS } from "@/data/services";
import ServiceCard from "./ServiceCard";
import Counter from "./Counter";
import TechTicker from "./TechTicker";
import { gsap, ScrollTrigger, scrollReveal } from "@/lib/animations";

export default function ServicesSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const horizTrackRef = useRef<HTMLDivElement | null>(null);
  const horizPinRef = useRef<HTMLDivElement | null>(null);

  // Card reveals (DA-16)
  useEffect(() => {
    if (!rootRef.current) return;
    return scrollReveal(rootRef.current, { stagger: 0.1 });
  }, []);

  // Horizontal pin-scroll (DA-18)
  useEffect(() => {
    const pin = horizPinRef.current;
    const track = horizTrackRef.current;
    if (!pin || !track) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const scrollLen = () => track.scrollWidth - window.innerWidth;
      const tween = gsap.to(track, {
        x: () => -scrollLen(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${scrollLen()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
      return () => tween.kill();
    }, pin);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="services"
      ref={rootRef}
      className="relative bg-[var(--color-surface-0)] py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)]">
        <header className="mb-16 grid gap-6 md:grid-cols-12">
          <p
            data-reveal
            className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)] md:col-span-3"
          >
            § Services
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
            Four shapes of engagement. All senior. All accountable to numbers.
          </h2>
        </header>

        {/* Glassmorphism service cards — DA-16 */}
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        {/* Stats row — DA-17 */}
        <div className="mt-28 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} data-reveal className="flex flex-col gap-2">
              <Counter to={stat.value} suffix={stat.suffix} />
              <span className="font-mono text-sm uppercase tracking-[var(--tracking-wide)] text-[var(--color-fg-2)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech ticker — DA-17 */}
      <div className="mt-24">
        <TechTicker />
      </div>

      {/* Horizontal deep-dive — DA-18 */}
      <div
        ref={horizPinRef}
        className="mt-24 h-[100svh] overflow-hidden"
        aria-label="Service deep-dives"
      >
        <div
          ref={horizTrackRef}
          className="flex h-full items-center gap-10 px-[var(--gutter)] will-change-transform"
        >
          <div className="flex min-w-[60vw] max-w-[60vw] flex-col gap-4 pr-10 md:min-w-[40vw] md:max-w-[40vw]">
            <p className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)]">
              § Deep-dive
            </p>
            <h3
              className="font-display font-semibold text-[var(--color-fg-0)]"
              style={{
                fontSize: "var(--text-3xl)",
                lineHeight: "var(--leading-tight)",
                letterSpacing: "var(--tracking-tight)",
              }}
            >
              Scroll sideways. Each service, in plain English, with what we hand back.
            </h3>
          </div>
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="flex h-[72vh] min-w-[80vw] max-w-[80vw] flex-col justify-between rounded-3xl border border-[var(--color-surface-3)] bg-[color:var(--color-surface-1)]/50 p-10 backdrop-blur-xl md:min-w-[52vw] md:max-w-[52vw]"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-sm text-[var(--color-accent-400)]">
                  {s.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)]">
                  {s.title.split(" ").slice(-1)[0]}
                </span>
              </div>
              <h4
                className="mt-6 font-display font-semibold text-[var(--color-fg-0)]"
                style={{
                  fontSize: "var(--text-3xl)",
                  lineHeight: "var(--leading-tight)",
                  letterSpacing: "var(--tracking-tight)",
                }}
              >
                {s.title}
              </h4>
              <p
                className="mt-6 max-w-lg font-body text-[var(--color-fg-1)]"
                style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-snug)" }}
              >
                {s.long}
              </p>
              <div className="mt-8 grid gap-2">
                <p className="font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)]">
                  Deliverables
                </p>
                <ul className="grid gap-1 font-body text-sm text-[var(--color-fg-1)]">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="text-[var(--color-accent-400)]">⟶</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
