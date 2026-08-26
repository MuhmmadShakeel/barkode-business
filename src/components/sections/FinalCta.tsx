import { Button } from "@/components/ui/Button";
import { Marker } from "@/components/ui/Section";
import { Glow, SchematicGround } from "@/components/ui/Schematic";
import { CONTACT } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * The closing conversion block. Every page ends on one, with copy specific to
 * that page's reader — never a generic repeated banner.
 */
export function FinalCta({
  marker = "Next step",
  heading,
  accent,
  body,
  primary,
  secondary,
  className,
}: {
  marker?: string;
  heading: string;
  accent?: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  className?: string;
}) {
  return (
    <section
      data-surface="dark"
      className={cn("relative isolate overflow-hidden bg-ink-900 py-section text-ontext", className)}
    >
      <SchematicGround grid={40} nodes={160} mask="radial" />
      <Glow className="top-[-14rem] left-1/2 -translate-x-1/2" size={640} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="shell relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Marker tone="dark">{marker}</Marker>
          <h2 className="mt-5 max-w-[20ch] text-d2 text-white">
            {heading}
            {accent && (
              <>
                {" "}
                <span className="text-accent-bright">{accent}</span>
              </>
            )}
          </h2>
          <p className="measure mt-6 text-lead text-balance text-ontext-2">{body}</p>

          <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={primary.href} variant="onDark" size="lg" arrow block>
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="onDarkGhost" size="lg" block>
                {secondary.label}
              </Button>
            )}
          </div>

          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-mono text-xs text-ontext-4">
            <span>Prefer to message?</span>
            <a
              href={CONTACT.whatsapp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal underline decoration-signal/35 underline-offset-4 transition-colors hover:decoration-signal"
            >
              WhatsApp {CONTACT.whatsapp.display}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
