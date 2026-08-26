import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { TechStack } from "@/components/sections/TechStack";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SchematicGround, TraceRule } from "@/components/ui/Schematic";
import { Marker, Section, SectionHead } from "@/components/ui/Section";

import { TECH_GROUPS } from "@/lib/services";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Technologies — Modern tools for scalable software products",
  description:
    "Barakode uses proven tools, frameworks, and cloud technologies to build web apps, mobile apps, SaaS platforms, internal systems, and AI-powered workflows.",
  path: "/technologies",
});

const SELECTION_CRITERIA = [
  {
    title: "Product requirements",
    body: "What the software actually has to do, before anyone argues about frameworks.",
  },
  {
    title: "Scalability needs",
    body: "Expected load, growth curve, and where the system will strain first.",
  },
  {
    title: "Budget and timeline",
    body: "A stack you can ship on schedule beats a stack that is theoretically better.",
  },
  {
    title: "Integration needs",
    body: "What it has to talk to, and how well those tools are documented.",
  },
  {
    title: "Security requirements",
    body: "Data sensitivity, access control, compliance obligations, and audit needs.",
  },
  {
    title: "Maintenance needs",
    body: "How often it changes, and who is on the hook when something breaks at 2am.",
  },
  {
    title: "Team familiarity",
    body: "Yours as much as ours. A stack your team cannot maintain is a liability.",
  },
  {
    title: "Long-term roadmap",
    body: "What you plan to add in a year, and whether this choice makes that easy or expensive.",
  },
];

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        marker="Technologies"
        heading="Modern technologies for"
        accent="scalable software products"
        trail="."
        body="Barakode uses proven tools, frameworks, and cloud technologies to build web apps, mobile apps, SaaS platforms, internal systems, and AI-powered workflows."
        primary={{ label: "Discuss Your Tech Stack", href: "/contact?intent=tech-stack" }}
        secondary={{ label: "View Our Work", href: "/case-studies" }}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Technologies", path: "/technologies" },
        ]}
        meta={[
          { label: "Categories", value: `${TECH_GROUPS.length}` },
          { label: "Selection driven by", value: "Product goals, not trends" },
          { label: "Handover", value: "Documented, so your team can maintain it" },
        ]}
      />

      {/* ═══ PHILOSOPHY ═════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="phil-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <Reveal>
              <Marker>Philosophy</Marker>
              <h2 id="phil-heading" className="mt-5 max-w-[16ch] text-d2 text-text">
                The right stack depends on the product,{" "}
                <span className="text-accent-ink">not trends.</span>
              </h2>
            </Reveal>
            <Reveal kind="right">
              <p className="measure text-lead text-text-2">
                We choose technology based on product goals, user needs, scalability,
                maintainability, integrations, team requirements, and long-term support.
              </p>
              <p className="measure mt-5 text-text-3">
                If a simpler tool does the job, we will say so. Choosing something more interesting
                than the problem requires is how projects end up expensive to run.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ THE STACK ══════════════════════════════════════════════════════ */}
      <TechStack
        marker="Stack"
        heading="What we build"
        accent="with"
        surface="sunken"
      />

      {/* ═══ HOW WE CHOOSE ══════════════════════════════════════════════════ */}
      <Section surface="ink" aria-labelledby="choose-heading">
        <SchematicGround grid={38} nodes={152} mask="radial" />
        <div className="shell relative">
          <Reveal>
            <SectionHead
              id="choose-heading"
              tone="dark"
              marker="Selection"
              lead="How we choose"
              accent="the stack"
              intro="Eight inputs, weighed together. Team familiarity and maintenance cost carry as much weight as raw capability."
            />
          </Reveal>

          <RevealGroup
            as="dl"
            className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule-dark bg-rule-dark sm:grid-cols-2 lg:grid-cols-4"
          >
            {SELECTION_CRITERIA.map((c, i) => (
              <RevealItem key={c.title} as="div">
                <div className="flex h-full flex-col gap-3 bg-ink-900 p-6">
                  <TraceRule tone="dark" className="w-9" />
                  <span className="font-mono text-[0.6875rem] text-signal tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <dt className="font-display text-[1rem] leading-snug font-semibold text-white">
                    {c.title}
                  </dt>
                  <dd className="text-[0.8125rem] leading-relaxed text-ontext-3">{c.body}</dd>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ INTEGRATIONS ═══════════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="integ-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <Marker>Integrations</Marker>
              <h2 id="integ-heading" className="mt-5 max-w-[17ch] text-d2 text-text">
                We connect products with the tools{" "}
                <span className="text-accent-ink">businesses already use.</span>
              </h2>
              <p className="measure mt-7 text-lead text-text-2">
                From CRMs and payment gateways to AI APIs, dashboards, email tools, and internal
                systems, Barakode builds integrations that help products work smoothly inside the
                business.
              </p>
            </Reveal>

            <Reveal kind="right">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {TECH_GROUPS.find((g) => g.group === "Integrations")!.items.map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-rule bg-paper-raised px-4 py-3 text-[0.9375rem] text-text-2 shadow-e1"
                  >
                    <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {i}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <FinalCta
        marker="Next step"
        heading="Need help choosing the right"
        accent="technology direction?"
        body="Tell us what you are building and we will help you identify the right stack and architecture."
        primary={{ label: "Discuss Your Tech Stack", href: "/contact?intent=tech-stack" }}
        secondary={{ label: "Book a Strategy Call", href: "/contact?intent=strategy-call" }}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Technologies", path: "/technologies" },
        ])}
      />
    </>
  );
}
