import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HomeFlowLines } from "@/components/sections/HomeFlowLines";
import { CTA } from "@/lib/site";
import { getTranslations } from "next-intl/server";

/** The homepage opening, kept server-rendered for resilient content. */
export async function Hero() {
  const t = await getTranslations("hero");
  const cta = await getTranslations("cta");
  return (
    <section
      data-surface="dark"
      className="home-hero relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-950 pt-[5rem] text-ontext lg:pt-[5.25rem]"
    >
      <HomeFlowLines />

      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,7,0.82)_0%,rgba(5,6,7,0.58)_42%,rgba(5,6,7,0.12)_78%,rgba(5,6,7,0.25)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,7,0.18)_0%,transparent_34%,rgba(5,6,7,0.58)_100%)]" />
        <div
          className="schematic-grid absolute inset-0 opacity-35"
          style={{
            ["--grid-size" as string]: "52px",
            ["--grid-line" as string]: "rgba(255,255,255,0.04)",
          }}
        />
      </div>

      <div className="shell-wide hero-reveal relative z-10 w-full py-8 sm:py-10">
        <div className="mx-auto max-w-[54rem]">
          <div className="flex flex-col items-center text-center">
            <Reveal as="header" index={0}>
              <h1 className="text-d1 text-white">
                <span className="block">{t("headingFirst")}</span>
                <span className="block text-accent-bright">{t("headingSecond")}</span>
              </h1>
            </Reveal>

            <Reveal index={1}>
              <p className="mt-6 text-lead text-ontext-2">
                <span className="block">{t("leadFirst")}</span>
                <span className="block">{t("leadSecond")}</span>
              </p>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ontext-3 sm:text-base">
                {t("detail")}
              </p>
            </Reveal>

            <Reveal index={3} className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <Button href={CTA.primary.href} variant="onDark" size="lg" className="w-full sm:w-auto" arrow>
                <span className="max-[359px]:hidden">{cta("discovery")}</span>
                <span className="hidden max-[359px]:inline">{t("smallCta")}</span>
              </Button>
              <Button href={CTA.secondary.href} variant="onDarkGhost" size="lg" className="w-full sm:w-auto">
                {cta("viewWork")}
              </Button>
            </Reveal>
            <Reveal index={4}>
              <p className="mt-4 text-xs text-ontext-3">
                {t("reassurance")}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 z-10 h-px bg-white/12" />
    </section>
  );
}
