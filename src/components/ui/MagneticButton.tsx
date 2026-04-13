"use client";

/**
 * MagneticButton — DA-15
 * Cursor-attracted CTA. Ring in CustomCursor grows when hovering any a/button,
 * this component additionally translates the element toward the cursor on
 * mouse-over with a spring return.
 */

import { forwardRef, useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { MOTION } from "@/lib/constants";

interface MagneticButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "ghost";
  strength?: number;
}

const base =
  "relative inline-flex h-14 items-center justify-center rounded-full px-8 font-body font-medium transition-colors will-change-transform";

const variants = {
  primary:
    "bg-[var(--color-accent-400)] text-[var(--color-surface-0)] hover:bg-[var(--color-accent-300)]",
  ghost:
    "border border-[var(--color-surface-4)] text-[var(--color-fg-0)] hover:bg-[var(--color-surface-2)]",
} as const;

const MagneticButton = forwardRef<HTMLAnchorElement, MagneticButtonProps>(
  function MagneticButton(
    { children, variant = "primary", strength = 0.28, className = "", ...rest },
    _ref
  ) {
    const localRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
      const el = localRef.current;
      if (!el) return;

      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) return;

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * strength;
        const dy = (e.clientY - cy) * strength;
        gsap.to(el, {
          x: dx,
          y: dy,
          duration: 0.4,
          ease: MOTION.ease.outExpo,
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.35)",
        });
      };

      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
      };
    }, [strength]);

    return (
      <a
        ref={localRef}
        data-cursor="magnet"
        className={`${base} ${variants[variant]} ${className}`}
        {...rest}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }
);

export default MagneticButton;
