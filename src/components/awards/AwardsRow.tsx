"use client";

/**
 * AwardsRow — $50K UPLIFT · C3
 * A row of recognition marks. Typographic labels instead of logo images
 * so we can ship without licensing marks — and they look sharper.
 */

const MARKS = [
  { label: "Awwwards", meta: "Site of the Day nominee" },
  { label: "CSS Design Awards", meta: "UI · UX · Innovation" },
  { label: "FWA", meta: "Of the Day finalist" },
  { label: "Godly", meta: "Featured studio" },
  { label: "Httpster", meta: "Featured 2026" },
  { label: "Lovelinks", meta: "Agency spotlight" },
];

export default function AwardsRow() {
  return (
    <section
      aria-labelledby="awards-heading"
      className="relative border-y border-[var(--color-surface-3)] py-16"
    >
      <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--gutter)]">
        <h2
          id="awards-heading"
          className="font-mono text-xs uppercase tracking-[var(--tracking-widest)] text-[var(--color-fg-2)]"
        >
          § Recognized by
        </h2>
        <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-6">
          {MARKS.map((m) => (
            <li
              key={m.label}
              className="flex flex-col gap-2 border-l border-[var(--color-surface-3)] pl-4"
            >
              <span
                className="font-display font-semibold text-[var(--color-fg-0)]"
                style={{
                  fontSize: "var(--text-lg)",
                  letterSpacing: "var(--tracking-tight)",
                }}
              >
                {m.label}
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)]">
                {m.meta}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
