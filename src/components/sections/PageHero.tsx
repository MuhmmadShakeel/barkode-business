import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Marker } from "@/components/ui/Section";
import { Glow, SchematicGround } from "@/components/ui/Schematic";
import { cn } from "@/lib/utils";

export type Crumb = { name: string; path: string };

/**
 * The standard interior page hero. Dark anchor surface so every page opens the
 * way the homepage does, then hands off to the light reading canvas below.
 */
export function PageHero({
  marker,
  heading,
  accent,
  trail,
  body,
  primary,
  secondary,
  crumbs,
  aside,
  meta,
}: {
  marker: string;
  heading: string;
  accent?: string;
  trail?: string;
  body: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  crumbs?: Crumb[];
  /** Optional visual occupying the right column. */
  aside?: React.ReactNode;
  /** Optional key/value strip beneath the copy. */
  meta?: { label: string; value: React.ReactNode }[];
}) {
  const twoUp = Boolean(aside);
  return (
    <section
      data-surface="dark"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-950 pt-[calc(4.5rem+clamp(1.5rem,1rem+3vw,2.75rem))] pb-[clamp(2rem,1.25rem+3vw,3.5rem)] text-center text-ontext"
    >
      <SchematicGround grid={42} nodes={168} mask="bottom" />
      <Glow className="top-[-16rem] left-[-8rem]" size={620} />

      <div className="shell-wide relative">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center justify-center gap-1 font-mono text-[0.6875rem] tracking-[0.06em] text-ontext-4">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight aria-hidden className="size-3 opacity-50" />}
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" className="text-ontext-2">
                      {c.name}
                    </span>
                  ) : (
                    <Link href={c.path} className="transition-colors hover:text-white">
                      {c.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div
          className={cn(
            "grid gap-x-14 gap-y-12",
            twoUp && "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center",
          )}
        >
          <div className="flex flex-col items-center">
            <Marker tone="dark">{marker}</Marker>
            <h1 className="mt-6 max-w-[17ch] text-d1 text-white">
              {heading}
              {accent && (
                <>
                  {" "}
                  <span className="text-accent-bright">{accent}</span>
                </>
              )}
              {trail}
            </h1>
            <p className="measure mt-7 text-lead text-ontext-2">{body}</p>

            {(primary || secondary) && (
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                {primary && (
                  <Button href={primary.href} variant="onDark" size="lg" arrow>
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button href={secondary.href} variant="onDarkGhost" size="lg">
                    {secondary.label}
                  </Button>
                )}
              </div>
            )}

            {meta && meta.length > 0 && (
              <dl className="mt-11 grid w-full gap-x-8 gap-y-5 border-t border-rule-dark pt-8 sm:grid-cols-2 lg:grid-cols-3">
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt className="font-mono text-marker font-medium tracking-[0.16em] text-ontext-4 uppercase">
                      {m.label}
                    </dt>
                    <dd className="mt-2 text-sm text-ontext-2">{m.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          {aside && <div className="relative">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
