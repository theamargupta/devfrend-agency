"use client";

/**
 * ContactSection — DA-23 + DA-24
 * Globe + form + Cal.com CTA + FAQ, composed.
 */

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import Faq from "./Faq";
import { BRAND, CTA } from "@/lib/constants";
import { scrollReveal } from "@/lib/animations";

const Globe = dynamic(() => import("@/components/about/Globe"), { ssr: false, loading: () => null });

export default function ContactSection() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    return scrollReveal(ref.current, { stagger: 0.08 });
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-[var(--color-surface-0)] py-28 md:py-40"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)]">
        <header className="mb-16 grid gap-6 md:grid-cols-12">
          <p
            data-reveal
            className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)] md:col-span-3"
          >
            § Contact
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
            Available worldwide. Talking to you within one business day.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div data-reveal className="md:col-span-5">
            <Globe />
            <div className="mt-8 grid gap-3">
              <a
                href={BRAND.calLink}
                target="_blank"
                rel="noreferrer"
                data-cursor="magnet"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-[var(--color-surface-4)] font-body text-[var(--color-fg-0)] transition-colors hover:bg-[var(--color-surface-2)]"
              >
                {CTA.contact} →
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                data-cursor="magnet"
                className="font-mono text-sm uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)] hover:text-[var(--color-fg-0)]"
              >
                or email {BRAND.email}
              </a>
            </div>
          </div>

          <div data-reveal className="md:col-span-7">
            <ContactForm />
          </div>
        </div>

        <div className="mt-28 grid gap-6 md:grid-cols-12">
          <h3
            data-reveal
            className="font-display font-semibold text-[var(--color-fg-0)] md:col-span-4"
            style={{
              fontSize: "var(--text-3xl)",
              lineHeight: "var(--leading-tight)",
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            Questions answered.
          </h3>
          <div className="md:col-span-8">
            <Faq />
          </div>
        </div>
      </div>
    </section>
  );
}
