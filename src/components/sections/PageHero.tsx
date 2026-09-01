import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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
  showMarker = true,
  below,
  minimalBackdrop = false,
  headingClassName,
  className,
  backgroundImage,
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
  showMarker?: boolean;
  /** Optional full-width content rendered beneath the hero copy. */
  below?: React.ReactNode;
  /** Pure navbar-matched dark treatment without decorative gold graphics. */
  minimalBackdrop?: boolean;
  headingClassName?: string;
  className?: string;
  backgroundImage?: { src: string; alt: string };
}) {
  const twoUp = Boolean(aside);
  return (
    <section
      data-surface="dark"
      className={cn("hero-reveal relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-950 pt-[calc(4.5rem+clamp(1.5rem,1rem+3vw,2.75rem))] pb-[clamp(2rem,1.25rem+3vw,3.5rem)] text-center text-ontext", className)}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      )}
      {backgroundImage && <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/35" />}
      {!minimalBackdrop && <SchematicGround grid={42} nodes={168} mask="bottom" />}
      {!minimalBackdrop && <Glow className="top-[-16rem] left-[-8rem]" size={620} />}
      {minimalBackdrop && !backgroundImage && (
        <div className="pointer-events-none absolute inset-0 bg-ink-950" />
      )}

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
          <Reveal className={cn("flex flex-col items-center", twoUp && "lg:items-start lg:text-left")}>
            {showMarker && <Marker tone="dark">{marker}</Marker>}
            <h1 className={cn("site-hero-heading max-w-[17ch] text-d1 text-white", showMarker && "mt-6", headingClassName)}>
              {heading}
              {accent && (
                <>
                  {" "}
                  <span className="text-accent-bright">{accent}</span>
                </>
              )}
              {trail}
            </h1>
            <p className={cn("measure mt-7 text-lead text-ontext-2", twoUp && "lg:ml-0")}>{body}</p>

            {(primary || secondary) && (
              <div className={cn("mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap", twoUp && "lg:justify-start")}>
                {primary && (
                  <Button href={primary.href} variant="onDark" size="lg" className="w-full sm:w-auto" arrow>
                    {primary.label}
                  </Button>
                )}
                {secondary && (
                  <Button href={secondary.href} variant="onDarkGhost" size="lg" className="w-full sm:w-auto">
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
          </Reveal>

          {aside && <div className="relative">{aside}</div>}
        </div>
        {below && <div className="mt-8 sm:mt-10">{below}</div>}
      </div>
    </section>
  );
}
