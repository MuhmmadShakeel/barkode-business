import { cn } from "@/lib/utils";

/**
 * SCROLL REVEAL — CSS-first, JS-enhanced.
 *
 * These are plain server-rendered elements carrying a `data-reveal` attribute.
 * The hidden state lives in CSS behind `.js-motion`, which is only set once an
 * inline script confirms JS is running, and `RevealObserver` flips
 * `data-revealed` as each element enters the viewport.
 *
 * The consequence that matters: with JS disabled, broken, or still loading,
 * every word on the page is readable. Nothing here is the carrier of meaning —
 * the motion is entirely additive. That also means no Framer Motion runtime is
 * shipped for the ~50 static pages that only need entrance motion.
 */

type Kind = "rise" | "flat" | "left" | "right";

type Tag = "div" | "li" | "article" | "section" | "header" | "figure" | "dt" | "dd" | "span";

export function Reveal({
  children,
  className,
  kind = "rise",
  /** Stagger index — multiplied by 68ms for the transition delay. */
  index,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  kind?: Kind;
  index?: number;
  as?: Tag;
}) {
  return (
    <Tag
      data-reveal={kind}
      className={cn(className)}
      style={index ? ({ ["--reveal-i" as string]: index } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

/**
 * Container for a staggered set. It does not animate itself — it hands each
 * `RevealItem` its position so the CSS delay produces the cascade.
 */
export function RevealGroup({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "dl";
}) {
  return (
    <Tag className={className} data-reveal-group="">
      {children}
    </Tag>
  );
}

export function RevealItem({
  children,
  className,
  kind = "rise",
  index,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  kind?: Kind;
  index?: number;
  as?: Tag;
}) {
  return (
    <Tag
      data-reveal={kind}
      data-reveal-item=""
      className={cn(className)}
      style={index ? ({ ["--reveal-i" as string]: index } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
