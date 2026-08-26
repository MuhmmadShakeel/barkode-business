import { cn } from "@/lib/utils";

/**
 * The Barakode mark — a hexagon of node rings with dashed connectors running
 * from the centre to the two right-hand nodes. Geometry preserved exactly from
 * the brand source; colour is now inherited so it takes the accent.
 *
 * This mark is the seed of the whole visual system: the node dots, the dashed
 * traces and the hairline geometry all reappear as the page's ground.
 */
export function Mark({
  className,
  animated = false,
}: {
  className?: string;
  /** Pulses the centre node and flows the connector dashes. */
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      role="img"
      aria-label="Barakode"
      className={cn("size-8", className)}
    >
      <defs>
        <mask id="bk-mark-holes">
          <rect width="200" height="200" fill="#fff" />
          <circle cx="100" cy="30" r="4.6" fill="#000" />
          <circle cx="160.6" cy="65" r="4.6" fill="#000" />
          <circle cx="160.6" cy="135" r="4.6" fill="#000" />
          <circle cx="100" cy="170" r="4.6" fill="#000" />
          <circle cx="39.4" cy="135" r="4.6" fill="#000" />
          <circle cx="39.4" cy="65" r="4.6" fill="#000" />
          <circle cx="100" cy="100" r="5" fill="#000" />
        </mask>
      </defs>
      <g mask="url(#bk-mark-holes)">
        <path
          d="M100 30 L160.6 65 L160.6 135 L100 170 L39.4 135 L39.4 65 Z"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
        />
        <g
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="1.5 9"
          className={animated ? "motion-safe:[animation:var(--animate-trace-flow)]" : undefined}
        >
          <line x1="100" y1="100" x2="160.6" y2="65" />
          <line x1="100" y1="100" x2="160.6" y2="135" />
        </g>
        <g fill="currentColor">
          <circle cx="100" cy="30" r="10.5" />
          <circle cx="160.6" cy="65" r="10.5" />
          <circle cx="160.6" cy="135" r="10.5" />
          <circle cx="100" cy="170" r="10.5" />
          <circle cx="39.4" cy="135" r="10.5" />
          <circle cx="39.4" cy="65" r="10.5" />
        </g>
        <circle cx="100" cy="100" r="13" fill="currentColor" opacity="0.55" />
      </g>
    </svg>
  );
}

/** Full lockup: mark + two-line wordmark, matching the brand's stacked lockup. */
export function Logo({
  className,
  tone = "light",
  compact = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark
        className={cn(
          "size-8 shrink-0 transition-colors duration-300",
          tone === "dark" ? "text-accent-bright" : "text-accent",
        )}
      />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.0625rem] font-semibold tracking-[0.1em] uppercase",
              tone === "dark" ? "text-white" : "text-text",
            )}
          >
            Barakode
          </span>
          <span
            className={cn(
              "mt-1 font-mono text-[0.5625rem] tracking-[0.3em] uppercase",
              tone === "dark" ? "text-ontext-4" : "text-text-4",
            )}
          >
            Technologies
          </span>
        </span>
      )}
    </span>
  );
}
