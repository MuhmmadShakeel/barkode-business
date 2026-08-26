import { cn } from "@/lib/utils";

/**
 * A visible "awaiting verified content" annotation.
 *
 * The brief bans invented statistics, testimonials, awards and client logos,
 * and asks for explicit placeholders in their place. Rather than hiding the
 * gap or filling it with plausible fiction, this renders it as a deliberate
 * editorial slot — legible to a visitor as "not yet published", and legible to
 * whoever maintains the site as "fill this in".
 *
 * Every one disappears the moment a real value is supplied.
 */
export function Pending({
  children,
  tone = "light",
  className,
  block = false,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
  /** Full-width slot rather than an inline chip. */
  block?: boolean;
}) {
  return (
    <span
      data-pending
      className={cn(
        "font-mono text-xs tracking-[0.06em]",
        block
          ? "flex items-center gap-3 rounded-[var(--radius-sm)] border border-dashed px-4 py-3.5"
          : "inline-flex items-center gap-2 rounded-[var(--radius-xs)] border border-dashed px-2.5 py-1",
        tone === "dark"
          ? "border-white/22 bg-white/4 text-ontext-3"
          : "border-rule-strong bg-paper-sunken text-text-3",
        className,
      )}
    >
      <svg
        aria-hidden
        viewBox="0 0 12 12"
        className={cn("size-2.5 shrink-0", tone === "dark" ? "text-ontext-4" : "text-text-4")}
      >
        <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 2" />
      </svg>
      {children}
    </span>
  );
}

/**
 * A whole section standing in for content that is being prepared — used where
 * the brief calls for an empty state instead of fabricated proof.
 */
export function PendingPanel({
  heading,
  body,
  action,
  tone = "light",
  className,
}: {
  heading: string;
  body: string;
  action?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-lg)] border border-dashed px-6 py-10 sm:px-10 sm:py-14",
        tone === "dark" ? "border-white/18 bg-white/4" : "border-rule-strong bg-paper-sunken",
        className,
      )}
    >
      <div
        aria-hidden
        className="schematic-grid pointer-events-none absolute inset-0 -z-10 opacity-70 mask-radial"
        style={{ ["--grid-size" as string]: "26px" }}
      />
      <div className="measure">
        <h3 className={cn("text-d3", tone === "dark" ? "text-white" : "text-text")}>{heading}</h3>
        <p className={cn("mt-4", tone === "dark" ? "text-ontext-2" : "text-text-2")}>{body}</p>
        {action && <div className="mt-7">{action}</div>}
      </div>
    </div>
  );
}
