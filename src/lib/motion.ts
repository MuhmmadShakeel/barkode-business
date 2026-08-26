/**
 * MOTION LANGUAGE
 *
 * One authored idea, applied consistently: content arrives along the signal
 * trace — it settles up into place with the blur coming off, on an exponential
 * ease-out, from an already-visible default so nothing is invisible if JS or
 * motion is unavailable.
 */

import type { Transition, Variants } from "framer-motion";

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_SIGNATURE = [0.32, 0.72, 0, 1] as const;
export const EASE_INOUT = [0.4, 0, 0.2, 1] as const;

export const DURATION = {
  micro: 0.18,
  fast: 0.3,
  base: 0.5,
  slow: 0.72,
  hero: 0.95,
} as const;

export const springSoft: Transition = { type: "spring", stiffness: 220, damping: 32, mass: 0.9 };
export const springSnap: Transition = { type: "spring", stiffness: 420, damping: 34, mass: 0.7 };

/** Standard viewport trigger — fires once, slightly before the element lands. */
export const inView = { once: true, margin: "-12% 0px -8% 0px" } as const;

/** The signature entrance. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.slow, ease: EASE_EXPO },
  },
};

/** Same entrance, no blur — for large images where blur is expensive. */
export const riseFlat: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE_EXPO } },
};

/** Parent that staggers `rise` children. */
export const stagger = (delayChildren = 0, staggerChildren = 0.07): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

/** Horizontal arrival — used where the composition reads left-to-right. */
export const slideIn = (from: "left" | "right" = "left"): Variants => ({
  hidden: { opacity: 0, x: from === "left" ? -30 : 30, filter: "blur(5px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.slow, ease: EASE_EXPO },
  },
});

/** A trace drawing itself along its own path length. */
export const drawTrace: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 1.5, ease: EASE_EXPO }, opacity: { duration: 0.25 } },
  },
};

/** Scale-in for node dots on a trace. */
export const popNode: Variants = {
  hidden: { scale: 0, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.42, ease: EASE_EXPO } },
};
