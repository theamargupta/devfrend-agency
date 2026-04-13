import { BRAND, SOCIAL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-surface-3)] bg-[var(--color-surface-0)]">
      <div className="mx-auto grid w-full max-w-[var(--container-max)] grid-cols-1 gap-10 px-[var(--gutter)] py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-sm uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-0)]">
            {BRAND.name} <span className="text-[var(--color-accent-400)]">/</span> agency
          </p>
          <p
            className="mt-4 max-w-sm font-body text-[var(--color-fg-1)]"
            style={{ fontSize: "var(--text-base)", lineHeight: "var(--leading-snug)" }}
          >
            {BRAND.tagline}
          </p>
        </div>
        <nav className="md:col-span-3" aria-label="Footer">
          <p className="mb-3 font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)]">
            Site
          </p>
          <ul className="grid gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-sm text-[var(--color-fg-1)] hover:text-[var(--color-fg-0)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-4">
          <p className="mb-3 font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)]">
            Elsewhere
          </p>
          <ul className="grid gap-2">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-body text-sm text-[var(--color-fg-1)] hover:text-[var(--color-fg-0)]"
                >
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--color-surface-3)] py-6">
        <div className="mx-auto flex w-full max-w-[var(--container-max)] items-center justify-between px-[var(--gutter)] font-mono text-xs uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-3)]">
          <span>© {new Date().getFullYear()} {BRAND.fullName}</span>
          <span>{BRAND.location}</span>
        </div>
      </div>
    </footer>
  );
}
