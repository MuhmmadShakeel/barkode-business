import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/lib/site";

/** The homepage opening, kept server-rendered for resilient content. */
export function Hero() {
  return (
    <section
      data-surface="dark"
      className="relative isolate flex h-[100svh] items-center overflow-hidden bg-ink-950 pt-[5rem] text-ontext lg:pt-[5.25rem]"
    >
      <div className="absolute inset-0 -z-20" aria-hidden>
        <video
          className="h-full w-full object-cover object-[58%_center] sm:object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero/business-partnership-poster.jpg"
        >
          <source src="/videos/business-partnership-hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-ink-950/48" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,13,24,0.98)_0%,rgba(8,13,24,0.9)_38%,rgba(8,13,24,0.32)_72%,rgba(8,13,24,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,13,24,0.3)_0%,transparent_34%,rgba(8,13,24,0.72)_100%)]" />
        <div
          className="schematic-grid absolute inset-0 opacity-35"
          style={{
            ["--grid-size" as string]: "52px",
            ["--grid-line" as string]: "rgba(255,255,255,0.04)",
          }}
        />
      </div>

      <div className="shell-wide hero-reveal relative w-full py-8 sm:py-10">
        <div className="mx-auto max-w-[54rem]">
          <div className="flex flex-col items-center text-center">
            <Reveal as="header" index={0}>
              <h1 className="text-d1 text-white">
                <span className="block">Software built to</span>
                <span className="block text-accent-bright">move business forward.</span>
              </h1>
            </Reveal>

            <Reveal index={1}>
              <p className="mt-6 text-lead text-ontext-2">
                <span className="block">We design and build scalable digital products,</span>
                <span className="block">business systems, and AI workflows.</span>
              </p>
            </Reveal>

            <Reveal index={2} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button href={CTA.primary.href} variant="onDark" size="lg" arrow>
                {CTA.primary.label}
              </Button>
              <Button href={CTA.secondary.href} variant="onDarkGhost" size="lg">
                {CTA.secondary.label}
              </Button>
            </Reveal>
          </div>
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-white/12" />
    </section>
  );
}
