import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkGhost";
type Size = "md" | "lg" | "sm";

const base =
  "group/btn relative inline-flex max-w-full items-center justify-center gap-2.5 font-medium " +
  "rounded-[var(--radius-sm)] whitespace-nowrap select-none " +
  "max-[359px]:h-auto max-[359px]:min-h-11 max-[359px]:whitespace-normal max-[359px]:py-3 max-[359px]:text-center max-[359px]:leading-snug " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-200 " +
  "[transition-timing-function:var(--ease-expo)] " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-45";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-ink-950 shadow-[0_1px_2px_rgba(12,12,12,.12),0_8px_20px_-6px_rgba(200,146,42,.42)] " +
    "hover:bg-accent-bright hover:shadow-[0_2px_4px_rgba(12,12,12,.14),0_14px_30px_-8px_rgba(200,146,42,.5)]",
  secondary:
    "bg-paper-raised text-text border border-rule-strong shadow-e1 " +
    "hover:border-accent hover:text-accent-ink hover:shadow-e2",
  ghost:
    "text-text-2 hover:text-accent-ink hover:bg-accent-soft border border-transparent",
  onDark:
    "bg-white text-ink-900 shadow-[0_2px_6px_rgba(0,0,0,.3),0_14px_34px_-10px_rgba(0,0,0,.55)] " +
    "hover:bg-accent-soft",
  onDarkGhost:
    "text-white border border-white/22 backdrop-blur-[2px] " +
    "hover:border-white/55 hover:bg-white/8",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[0.875rem]",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-[3.25rem] px-6.5 text-[1rem]",
};

export type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
  className?: string;
  /** Adds the travelling arrow affordance. */
  arrow?: boolean;
  /** Fills the container — mobile CTAs are full width per the brief. */
  block?: boolean;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  arrow = false,
  block = false,
  ...rest
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], block && "w-full", className);

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 shrink-0 transition-transform duration-300 [transition-timing-function:var(--ease-expo)] group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
