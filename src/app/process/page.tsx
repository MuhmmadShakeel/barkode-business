import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SchematicGround, TraceRule } from "@/components/ui/Schematic";
import { Marker, Section, SectionHead } from "@/components/ui/Section";

import { COLLABORATION_POINTS, PROCESS } from "@/lib/content";
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
      <PageHero
        marker="Our Process"
        heading="A clear product engineering process from"
        accent="idea to launch"
        trail="."
        body="We follow a structured process that helps reduce confusion, control scope, improve communication, and deliver software that supports real business goals."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "Book a Strategy Call", href: "/contact?intent=strategy-call" }}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ]}
        meta={[
          { label: "Steps", value: `${PROCESS.length}, from discovery to long-term support` },
          { label: "You always receive", value: "Written deliverables at every stage" },
          { label: "Scope changes", value: "Quoted before any additional work begins" },
        ]}
      />

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
      <Section surface="sunken" aria-labelledby="timeline-heading">
        <SchematicGround grid={30} nodes={false} mask="radial" className="opacity-60" />
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
      <Section surface="ink" aria-labelledby="collab-heading">
        <SchematicGround grid={38} nodes={152} mask="radial" />
        <div className="shell relative">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <Reveal>
              <Marker tone="dark">Collaboration</Marker>
              <h2 id="collab-heading" className="mt-5 max-w-[15ch] text-d2 text-white">
                Clear communication at{" "}
                <span className="text-accent-bright">every stage.</span>
              </h2>
              <p className="measure mt-7 text-ontext-2">
                Barakode works with clients through structured updates, clear documentation, planned
                meetings, and transparent delivery checkpoints. You should never have to ask what is
                happening.
              </p>
            </Reveal>

            <RevealGroup as="ul" className="grid gap-px self-start overflow-hidden rounded-[var(--radius-md)] border border-rule-dark bg-rule-dark sm:grid-cols-2">
              {COLLABORATION_POINTS.map((c) => (
                <RevealItem key={c} as="li">
                  <div className="flex h-full items-center gap-3.5 bg-ink-900 px-5 py-4">
                    <TraceRule tone="dark" className="w-6 shrink-0" />
                    <span className="text-[0.9375rem] text-ontext-2">{c}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      <FinalCta
        marker="Next step"
        heading="Ready to move from idea to"
        accent="execution?"
        body="Tell us what you are building and we will help you define the next technical step."
        primary={{ label: "Start Your Project", href: "/contact" }}
        secondary={{ label: "Book a Strategy Call", href: "/contact?intent=strategy-call" }}
      />

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
