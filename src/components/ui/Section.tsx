import { cn } from "@/lib/utils";

type Surface = "paper" | "sunken" | "raised" | "ink" | "ink-deep";

const surfaceClass: Record<Surface, string> = {
  paper: "bg-paper text-text",
  sunken: "bg-paper-sunken text-text",
  raised: "bg-paper-raised text-text",
  ink: "bg-ink-900 text-ontext",
  "ink-deep": "bg-ink-950 text-ontext",
};

/**
 * A page section. Owns the vertical rhythm and declares its own surface, so
 * every nested component can read `[data-surface]` and pick the right tone
 * without being told.
 */
export function Section({
  children,
  surface = "paper",
  className,
  id,
  tight = false,
  flush = false,
  as: Tag = "section",
  "aria-labelledby": labelledBy,
}: {
  children: React.ReactNode;
  surface?: Surface;
  className?: string;
  id?: string;
  /** Reduced vertical rhythm. */
  tight?: boolean;
  /** No vertical padding at all — the child owns it. */
  flush?: boolean;
  as?: "section" | "div" | "footer" | "aside";
  "aria-labelledby"?: string;
}) {
  const isDark = surface === "ink" || surface === "ink-deep";
  return (
    <Tag
      id={id}
      aria-labelledby={labelledBy}
      data-surface={isDark ? "dark" : "light"}
      className={cn(
        "relative isolate",
        surfaceClass[surface],
        !flush && (tight ? "py-section-tight" : "py-section"),
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * The route marker. The brief specifies an eyebrow above every heading; rather
 * than a decorative label it carries wayfinding — a node glyph plus the section
 * or page name, drawn as a schematic annotation.
 */
export function Marker({
  children,
  tone = "light",
  className,
  as: Tag = "p",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
  as?: "p" | "span" | "div";
}) {
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-marker font-medium uppercase",
        tone === "dark" ? "text-signal" : "text-accent-ink",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "grid size-[1.375rem] shrink-0 place-items-center rounded-full border",
          tone === "dark" ? "border-signal/35" : "border-accent/30",
        )}
      >
        <span
          className={cn(
            "size-1.5 rounded-full motion-safe:[animation:var(--animate-node-pulse)]",
            tone === "dark" ? "bg-signal" : "bg-accent",
          )}
        />
      </span>
      {children}
    </Tag>
  );
}

/**
 * The signature two-tone heading, preserved from the brand: the first phrase in
 * ink, the second in accent. Emphasis by colour, never by gradient.
 */
export function SplitHeading({
  lead,
  accent,
  trail,
  tone = "light",
  level = 2,
  size = "d2",
  className,
  id,
}: {
  lead: string;
  accent?: string;
  trail?: string;
  tone?: "light" | "dark";
  level?: 1 | 2 | 3;
  size?: "d1" | "d2" | "d3";
  className?: string;
  id?: string;
}) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";
  const accentClass = tone === "dark" ? "text-accent-bright" : "text-accent-ink";
  return (
    <Tag
      id={id}
      className={cn(
        size === "d1" && "text-d1",
        size === "d2" && "text-d2",
        size === "d3" && "text-d3",
        tone === "dark" ? "text-white" : "text-text",
        className,
      )}
    >
      {lead}
      {accent && (
        <>
          {" "}
          <span className={accentClass}>{accent}</span>
        </>
      )}
      {trail}
    </Tag>
  );
}

/** Standard section header block: marker → heading → lead paragraph. */
export function SectionHead({
  marker,
  lead,
  accent,
  trail,
  intro,
  tone = "light",
  align = "left",
  level = 2,
  size = "d2",
  id,
  className,
  children,
}: {
  marker?: string;
  lead: string;
  accent?: string;
  trail?: string;
  intro?: React.ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  level?: 1 | 2 | 3;
  size?: "d1" | "d2" | "d3";
  id?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto flex flex-col items-center text-center",
        className,
      )}
    >
      {marker && <Marker tone={tone} className="mb-5">{marker}</Marker>}
      <SplitHeading
        id={id}
        lead={lead}
        accent={accent}
        trail={trail}
        tone={tone}
        level={level}
        size={size}
        className={cn(align === "center" ? "max-w-[22ch]" : "max-w-[19ch]")}
      />
      {intro && (
        <div
          className={cn(
            "mt-6 text-lead",
            align === "center" ? "measure text-balance" : "measure",
            tone === "dark" ? "text-ontext-2" : "text-text-2",
          )}
        >
          {intro}
        </div>
      )}
      {children}
    </div>
  );
}
