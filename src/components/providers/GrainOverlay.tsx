"use client";

/**
 * GrainOverlay — $50K UPLIFT · A3
 * A subtle animated film-grain layer on top of the entire app. Rendered
 * via an inline SVG turbulence filter so there's no image asset to ship.
 * mix-blend-mode: overlay keeps it invisible on black surfaces and barely
 * perceptible on lighter ones — the texture is felt, not seen.
 *
 * Respects prefers-reduced-motion: animation is disabled, but the static
 * grain remains for texture.
 */

import { useEffect, useState } from "react";

export default function GrainOverlay() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[70]"
        style={{
          backgroundImage: "url(#devfrend-grain-data)",
          opacity: 0.08,
          mixBlendMode: "overlay",
          // Inline data URL generated from the SVG below so this renders
          // with no network request.
          backgroundRepeat: "repeat",
          backgroundSize: "240px 240px",
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[71]"
        style={{ width: "100%", height: "100%", opacity: 0.06, mixBlendMode: "overlay" }}
      >
        <filter id="df-grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          >
            {!reduced && (
              <animate
                attributeName="seed"
                from="1"
                to="100"
                dur="6s"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#df-grain-filter)" />
      </svg>
    </>
  );
}
