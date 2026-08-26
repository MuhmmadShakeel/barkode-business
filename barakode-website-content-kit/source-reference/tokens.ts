/**
 * Design Tokens & Framer Motion Variants
 * Centralised so all section components animate identically.
 */
import type { Variants } from "framer-motion";

export const COLORS = {
  bgPrimary: "#0A0A0A",
  bgSecondary: "#111111",
  bgCard: "#141414",
  bgMenu: "#0D0D0D",
  bgLight: "#F0EDE8",
  gold: "#C8922A",
  goldLight: "#D4A843",
  glow: "#8B6914",
  white: "#FFFFFF",
  textMuted: "#6B6B6B",
  textSubtle: "#888888",
  divider: "#1F1F1F",
  navbarDivider: "#1A1A1A",
} as const;

export const DURATIONS = {
  micro: 0.2,
  fast: 0.3,
  base: 0.5,
  slow: 0.7,
  hero: 0.8,
} as const;

export const EASINGS = {
  inOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
  out: [0.16, 1, 0.3, 1] as [number, number, number, number],
} as const;

export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  desktop: 1280,
  wide: 1440,
} as const;

export const VIEWPORT = { once: true, margin: "-80px" } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASINGS.inOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASINGS.inOut } },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASINGS.out },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASINGS.out },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const staggerTight: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const projectCard: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASINGS.out },
  },
};
