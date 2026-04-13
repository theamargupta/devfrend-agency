import { BRAND, CTA, NAV_LINKS } from "@/lib/constants";

/**
 * Phase 1 foundation page.
 * This is a deliberately sparse landing surface that exercises the brand
 * tokens + typography scale. Phase 2 (DA-13..DA-15) replaces the hero with
 * the R3F particle field + GSAP SplitText + magnetic CTA.
 */
export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden">
      {/* Subtle radial glow to validate palette tokens render */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(61,75,255,0.25) 0%, rgba(5,5,7,0) 60%)",
        }}
      />

      <header className="mx-auto flex w-full max-w-[var(--container-max)] items-center justify-between px-[var(--gutter)] py-6">
        <span
          className="font-mono text-sm tracking-[var(--tracking-wider)] uppercase text-[var(--color-fg-2)]"
        >
          {BRAND.name}
          <span className="ml-2 text-[var(--color-accent-400)]">/</span>
          <span className="ml-2 text-[var(--color-fg-1)]">agency</span>
        </span>
        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="magnet"
              className="font-body text-sm text-[var(--color-fg-1)] transition-colors hover:text-[var(--color-fg-0)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="mx-auto flex w-full max-w-[var(--container-max)] flex-1 flex-col justify-center px-[var(--gutter)] py-24">
        <p className="mb-6 font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)]">
          Phase 1 · Foundation
        </p>
        <h1
          className="max-w-5xl font-display font-semibold text-[var(--color-fg-0)]"
          style={{
            fontSize: "var(--text-display)",
            lineHeight: "var(--leading-display)",
            letterSpacing: "var(--tracking-tighter)",
          }}
        >
          {BRAND.tagline}
        </h1>
        <p
          className="mt-8 max-w-2xl font-body text-[var(--color-fg-1)]"
          style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-snug)" }}
        >
          A boutique engineering studio shipping interactive, performant,
          accessibility-first websites. Next.js, React Three Fiber, GSAP.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            data-cursor="magnet"
            className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-accent-400)] px-8 font-body font-medium text-[var(--color-surface-0)] transition-transform hover:scale-[1.02]"
          >
            {CTA.primary}
          </a>
          <a
            href="#portfolio"
            data-cursor="magnet"
            className="inline-flex h-14 items-center justify-center rounded-full border border-[var(--color-surface-4)] px-8 font-body text-[var(--color-fg-0)] transition-colors hover:bg-[var(--color-surface-2)]"
          >
            {CTA.secondary}
          </a>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)] py-10 font-mono text-xs text-[var(--color-fg-3)]">
        <span className="uppercase tracking-[var(--tracking-wider)]">
          v0.1 — foundation layer · DA-8 · DA-9 · DA-10 · DA-11 · DA-12
        </span>
      </footer>
    </main>
  );
}
