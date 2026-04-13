"use client";

/**
 * HeroContent — DA-14/15
 * Text + CTA layer above the R3F canvas. Three.js lazy-loaded.
 */

import dynamic from "next/dynamic";
import AnimatedTagline from "./AnimatedTagline";
import MagneticButton from "@/components/ui/MagneticButton";
import { BRAND, CTA } from "@/lib/constants";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function HeroContent() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      <HeroScene />
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)] pb-24 pt-40">
        <p className="mb-8 font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)]">
          {BRAND.name} · a boutique engineering studio
        </p>
        <AnimatedTagline primary={BRAND.tagline} />
        <p
          className="mt-10 max-w-2xl font-body text-[var(--color-fg-1)]"
          style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-snug)" }}
        >
          We build the parts of your site that the template can&apos;t. Next.js,
          React Three Fiber, GSAP — reviewed by senior engineers, benchmarked
          against Lighthouse 90+, accessible by default.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <MagneticButton href="#contact" variant="primary">
            {CTA.primary}
          </MagneticButton>
          <MagneticButton href="#portfolio" variant="ghost">
            {CTA.secondary}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
