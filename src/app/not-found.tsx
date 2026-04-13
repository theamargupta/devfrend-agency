import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-[var(--gutter)] py-32 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(168,245,0,0.15) 0%, rgba(5,5,7,0) 60%)",
        }}
      />
      <p className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-accent-400)]">
        § 404
      </p>
      <h1
        className="mt-6 max-w-3xl font-display font-semibold text-[var(--color-fg-0)]"
        style={{
          fontSize: "var(--text-5xl)",
          lineHeight: "var(--leading-tight)",
          letterSpacing: "var(--tracking-tighter)",
        }}
      >
        That page took an unscheduled sabbatical.
      </h1>
      <p
        className="mt-6 max-w-xl font-body text-[var(--color-fg-1)]"
        style={{ fontSize: "var(--text-lg)", lineHeight: "var(--leading-snug)" }}
      >
        The URL isn&rsquo;t wired up — probably a typo, a deleted link, or a
        future page we haven&rsquo;t shipped yet.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/"
          data-cursor="magnet"
          className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-accent-400)] px-8 font-body font-medium text-[var(--color-surface-0)] transition-transform hover:scale-[1.02]"
        >
          Back to home
        </Link>
        <a
          href={`mailto:${BRAND.email}`}
          data-cursor="magnet"
          className="inline-flex h-14 items-center justify-center rounded-full border border-[var(--color-surface-4)] px-8 font-body text-[var(--color-fg-0)] transition-colors hover:bg-[var(--color-surface-2)]"
        >
          Email us about it
        </a>
      </div>
    </main>
  );
}
