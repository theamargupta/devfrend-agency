"use client";

/**
 * PageTransition — wraps route children with an enter animation.
 * Uses framer-motion so App Router transitions feel considered, not abrupt.
 * For route-change veils (slide-over) we'll layer AnimatePresence in
 * a template.tsx in a follow-up; this is the per-page baseline.
 */

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 },
};

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={variants}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.30, 1] }}
    >
      {children}
    </motion.div>
  );
}
