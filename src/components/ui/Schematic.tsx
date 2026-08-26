import { cn } from "@/lib/utils";

/**
 * Decorative ground for the visual world: the coordinate grid, node lattice
 * and edge traces the mark implies. Always aria-hidden, always behind content,
 * always faded at the edges so it never competes with type.
 */
export function SchematicGround({
  className,
  grid = 34,
  nodes = 136,
  mask = "radial",
}: {
  className?: string;
  grid?: number;
  nodes?: number | false;
  mask?: "radial" | "bottom" | "none";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10",
        mask === "radial" && "mask-radial",
        mask === "bottom" && "mask-b",
        className,
      )}
    >
      <div
        className="schematic-grid absolute inset-0"
        style={{ ["--grid-size" as string]: `${grid}px` }}
      />
      {nodes !== false && (
        <div
          className="schematic-nodes absolute inset-0"
          style={{ ["--node-size" as string]: `${nodes}px` }}
        />
      )}
    </div>
  );
}

/**
 * A hairline rule with a node dot on it — the connective tissue between
 * sections and list items. Reads as a schematic bus line, not a border.
 */
export function TraceRule({
  className,
  tone = "light",
  orientation = "horizontal",
}: {
  className?: string;
  tone?: "light" | "dark";
  orientation?: "horizontal" | "vertical";
}) {
  const line = tone === "dark" ? "bg-rule-dark" : "bg-rule";
  const node = tone === "dark" ? "bg-signal" : "bg-accent";
  if (orientation === "vertical") {
    return (
      <span aria-hidden className={cn("relative block w-px", line, className)}>
        <span className={cn("absolute top-0 left-1/2 size-1.5 -translate-x-1/2 rounded-full", node)} />
      </span>
    );
  }
  return (
    <span aria-hidden className={cn("relative block h-px", line, className)}>
      <span className={cn("absolute top-1/2 left-0 size-1.5 -translate-y-1/2 rounded-full", node)} />
    </span>
  );
}

/**
 * Corner brackets — the registration marks of a technical drawing. Used to
 * frame the things that matter most on a page.
 */
export function Registration({
  className,
  tone = "light",
  size = 14,
}: {
  className?: string;
  tone?: "light" | "dark";
  size?: number;
}) {
  const c = tone === "dark" ? "border-white/25" : "border-rule-strong";
  const s = { width: size, height: size };
  return (
    <span aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      <span className={cn("absolute top-0 left-0 border-t border-l", c)} style={s} />
      <span className={cn("absolute top-0 right-0 border-t border-r", c)} style={s} />
      <span className={cn("absolute bottom-0 left-0 border-b border-l", c)} style={s} />
      <span className={cn("absolute right-0 bottom-0 border-r border-b", c)} style={s} />
    </span>
  );
}

/** A soft field of accent light. Offset and blurred — never a flat halo. */
export function Glow({
  className,
  color = "accent",
  size = 560,
}: {
  className?: string;
  color?: "accent" | "signal";
  size?: number;
}) {
  return (
    <span
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 rounded-full blur-[110px]", className)}
      style={{
        width: size,
        height: size,
        background:
          color === "accent"
            ? "radial-gradient(circle, rgba(200,146,42,.30) 0%, rgba(200,146,42,0) 68%)"
            : "radial-gradient(circle, rgba(226,184,92,.24) 0%, rgba(226,184,92,0) 68%)",
      }}
    />
  );
}
