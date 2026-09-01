import Image from "next/image";

import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Marker, Section, SectionHead } from "@/components/ui/Section";

import { PROCESS } from "@/lib/content";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Our Process — From idea to launch and long-term support",
  description:
    "A structured product engineering process that reduces confusion, controls scope, improves communication, and delivers software that supports real business goals.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <section
        aria-labelledby="process-hero-heading"
        className="hero-reveal relative isolate h-[100svh] overflow-hidden bg-white text-text"
      >
        <div className="shell-wide grid h-full items-center gap-7 pt-24 pb-6 lg:grid-cols-[minmax(0,.83fr)_minmax(0,1.17fr)] lg:gap-6 lg:pt-20">
          <Reveal className="relative z-10 max-w-2xl">
            <h1
              id="process-hero-heading"
              className="max-w-[14ch] font-display text-[clamp(2.35rem,4.8vw,5rem)] leading-[.98] font-semibold tracking-[-.05em] text-text"
            >
              A clear product engineering process from{" "}
              <span className="text-accent-ink">idea to launch.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[clamp(.9375rem,1.35vw,1.125rem)] leading-relaxed text-text-2">
              We follow a structured process that helps reduce confusion, control scope, improve
              communication, and deliver software that supports real business goals.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact" size="md" arrow>
                Start Your Project
              </Button>
              <Button href="/contact?intent=strategy-call" variant="secondary" size="md">
                Book a Strategy Call
              </Button>
            </div>
          </Reveal>

          <Reveal kind="right" className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] opacity-20 lg:pointer-events-auto lg:relative lg:inset-auto lg:h-[min(70svh,46rem)] lg:opacity-100">
            <Image
              src="/images/process/business-process-hero.png"
              alt="Business and product leaders reviewing a structured product engineering workflow"
              fill
              priority
              sizes="58vw"
              className="object-contain object-center"
            />
          </Reveal>
        </div>
      </section>

      {/* ═══ WHY PROCESS MATTERS ════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="why-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <Reveal>
              <Marker>Why it matters</Marker>
              <h2 id="why-heading" className="mt-5 max-w-[16ch] text-d2 text-text">
                Good software needs more than{" "}
                <span className="text-accent-ink">development.</span>
              </h2>
            </Reveal>
            <Reveal kind="right">
              <p className="measure text-lead text-text-2">
                A successful product needs clear requirements, user-focused design, technical
                planning, structured development, testing, deployment, and ongoing improvement. Our
                process keeps the project clear from the first conversation to the final launch.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ FULL TIMELINE ══════════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="timeline-heading">
        <div className="shell relative">
          <Reveal>
            <SectionHead
              id="timeline-heading"
              marker="The full route"
              lead="Eight steps, and what"
              accent="you get from each"
            />
          </Reveal>

          <div className="mt-14">
            <ProcessTimeline detailed />
          </div>
        </div>
      </Section>

      {/* ═══ CLIENT COLLABORATION ═══════════════════════════════════════════ */}
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Process", path: "/process" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Barakode product engineering process",
            description:
              "The structured route Barakode Technologies follows from discovery through to long-term support.",
            url: `${SITE.url}/process`,
            step: PROCESS.map((s, i) => ({
              "@type": "HowToStep",
              position: i + 1,
              name: s.title,
              text: s.what,
            })),
          },
        ]}
      />
    </>
  );
}
