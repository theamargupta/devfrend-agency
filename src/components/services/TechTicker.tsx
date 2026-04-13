"use client";

/**
 * TechTicker — DA-17
 * Infinite horizontal marquee of tech-stack names.
 * Pure CSS @keyframes; pauses on hover; duplicated content for seamless loop.
 */

import { TECH_STACK } from "@/data/services";

export default function TechTicker() {
  const items = [...TECH_STACK, ...TECH_STACK]; // duplicate for seamless loop

  return (
    <div
      className="relative overflow-hidden border-y border-[var(--color-surface-3)] py-6"
      aria-label="Tools we build with"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-surface-0)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-surface-0)] to-transparent"
      />
      <ul
        className="flex w-max items-center gap-14 whitespace-nowrap"
        style={{ animation: "ticker 40s linear infinite" }}
      >
        {items.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="font-mono text-sm uppercase tracking-[var(--tracking-wider)] text-[var(--color-fg-2)]"
          >
            {item} <span className="ml-10 text-[var(--color-accent-400)]">·</span>
          </li>
        ))}
      </ul>
      <style jsx>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
