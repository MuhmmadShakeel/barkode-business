import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SchematicGround, TraceRule } from "@/components/ui/Schematic";
import { Marker, Section, SectionHead } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

import { SERVICES } from "@/lib/services";
import { ENGAGEMENT_MODELS, FAQ_PREVIEW } from "@/lib/content";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services — Software Product Development & AI Automation",
  description:
    "Barakode helps startups and growing businesses build scalable products, improve existing systems, and automate manual workflows through structured product engineering.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        marker="Services"
        heading="Software product development and"
        accent="AI automation services"
        trail="."
        body="Barakode helps startups and growing businesses build scalable products, improve existing systems, and automate manual workflows through structured product engineering."
        primary={{ label: "Discuss Your Project", href: "/contact" }}
        secondary={{ label: "View Our Work", href: "/case-studies" }}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      {/* ═══ INTRODUCTION ═══════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="intro-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <Marker>Overview</Marker>
              <h2 id="intro-heading" className="mt-5 max-w-[16ch] text-d2 text-text">
                From idea to launch, automation, and{" "}
                <span className="text-accent-ink">long-term support.</span>
              </h2>
            </Reveal>
            <Reveal kind="right">
              <p className="measure text-lead text-text-2">
                Whether you are building a new MVP, scaling an existing platform, replacing manual
                operations, or adding AI into your workflow, Barakode helps you plan, design, build,
                deploy, and improve the right software system.
              </p>
              <nav aria-label="Jump to a service" className="mt-8">
                <ul className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <a
                        href={`#${s.slug}`}
                        className="inline-flex items-center gap-2 rounded-[var(--radius-xs)] border border-rule bg-paper-raised px-3 py-1.5 text-xs font-medium text-text-2 shadow-e1 transition-[border-color,color] duration-200 hover:border-accent/40 hover:text-accent-ink"
                      >
                        <ServiceIcon name={s.icon} className="size-3.5 text-accent" />
                        {s.shortTitle}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ SIX DETAILED SERVICE SECTIONS ══════════════════════════════════ */}
      <Section surface="sunken" flush className="pb-section">
        <SchematicGround grid={32} nodes={false} mask="radial" className="opacity-60" />
        <div className="shell relative">
          <ul>
            {SERVICES.map((s, i) => (
              <li
                key={s.slug}
                id={s.slug}
                className="scroll-mt-28 border-b border-rule py-section-tight last:border-b-0"
              >
                <Reveal>
                  <article className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                    {/* Left — identity */}
                    <div className="lg:sticky lg:top-28 lg:self-start">
                      <div className="flex items-center gap-4">
                        <span className="grid size-12 shrink-0 place-items-center rounded-[var(--radius-sm)] border border-accent/25 bg-accent-soft text-accent">
                          <ServiceIcon name={s.icon} className="size-5" />
                        </span>
                        <span className="font-mono text-xs text-text-4 tabular-nums">
                          Service {String(i + 1).padStart(2, "0")} / 06
                        </span>
                      </div>

                      <h2 className="mt-6 max-w-[16ch] text-d3 text-text">{s.title}</h2>

                      <dl className="mt-7 flex flex-col gap-5">
                        <div>
                          <dt className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                            Who it is for
                          </dt>
                          <dd className="measure mt-2 text-sm text-text-2">{s.audience}</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                            Problem it solves
                          </dt>
                          <dd className="measure mt-2 text-sm text-text-2">{s.problem}</dd>
                        </div>
                      </dl>

                      <Button href={s.href} size="md" className="mt-8" arrow>
                        {s.cta.replace("Explore ", "Explore ")}
                      </Button>
                    </div>

                    {/* Right — what we deliver */}
                    <div className="flex flex-col gap-6">
                      <div className="rounded-[var(--radius-md)] border border-rule bg-paper-raised p-6 shadow-e1 sm:p-7">
                        <h3 className="font-mono text-marker font-medium tracking-[0.16em] text-accent-ink uppercase">
                          What Barakode delivers
                        </h3>
                        <p className="measure mt-4 text-text-2">{s.delivers}</p>
                      </div>

                      <div className="rounded-[var(--radius-md)] border border-rule bg-paper-raised p-6 shadow-e1 sm:p-7">
                        <h3 className="font-mono text-marker font-medium tracking-[0.16em] text-accent-ink uppercase">
                          Key features
                        </h3>
                        <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                          {s.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-sm text-text-2">
                              <Check
                                aria-hidden
                                className="mt-[0.1875rem] size-3.5 shrink-0 text-accent"
                                strokeWidth={2.4}
                              />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ═══ HOW THESE WORK TOGETHER ════════════════════════════════════════ */}
      <Section surface="ink" aria-labelledby="together-heading">
        <SchematicGround grid={38} nodes={152} mask="radial" />
        <div className="shell relative">
          <Reveal>
            <SectionHead
              id="together-heading"
              tone="dark"
              align="center"
              marker="One partner"
              lead="One product engineering partner for"
              accent="the full build cycle"
              intro="Barakode can support one part of the project or the full lifecycle, from product planning and design to development, AI automation, deployment, maintenance, and scaling."
            />
          </Reveal>

          <Reveal className="mt-14">
            <ol className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule-dark bg-rule-dark sm:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "Plan", d: "Discovery, scope, architecture, and the roadmap that follows." },
                { t: "Design", d: "Flows, wireframes, UI, and a prototype you can click through." },
                { t: "Build", d: "Frontend, backend, mobile, AI workflows, integrations, QA." },
                { t: "Operate", d: "Deployment, monitoring, maintenance, and feature growth." },
              ].map((p, i) => (
                <li key={p.t} className="flex flex-col gap-3 bg-ink-900 p-6">
                  <TraceRule tone="dark" className="w-9" />
                  <span className="font-mono text-[0.6875rem] text-signal tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[1.0625rem] font-semibold text-white">{p.t}</h3>
                  <p className="text-[0.8125rem] leading-relaxed text-ontext-3">{p.d}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      {/* ═══ SUGGESTED ENGAGEMENT MODELS ════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="models-heading">
        <div className="shell">
          <Reveal>
            <SectionHead
              id="models-heading"
              marker="How we work together"
              lead="Suggested"
              accent="engagement models"
              intro="Pick the shape of the engagement first — the scope conversation is much easier once the model is settled."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" as="ul">
            {ENGAGEMENT_MODELS.map((m) => (
              <RevealItem key={m.slug} as="li" className="h-full">
                <Link
                  href={`/engagement-models#${m.slug}`}
                  className="group/m flex h-full flex-col rounded-[var(--radius-md)] border border-rule bg-paper-raised p-6 shadow-e1 transition-[border-color,box-shadow,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-1 hover:border-accent/35 hover:shadow-e2"
                >
                  <h3 className="font-display text-[1.0625rem] font-semibold text-text">
                    {m.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-3">{m.bestFor}</p>
                  <span className="mt-5 flex items-center justify-between gap-3 border-t border-rule pt-4">
                    <span className="font-mono text-[0.6875rem] text-text-4">{m.timeline}</span>
                    <ArrowRight
                      aria-hidden
                      className="size-4 text-accent transition-transform duration-300 [transition-timing-function:var(--ease-expo)] group-hover/m:translate-x-1"
                    />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ FAQ PREVIEW ════════════════════════════════════════════════════ */}
      <Section surface="sunken" aria-labelledby="faq-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <Marker>Questions</Marker>
              <h2 id="faq-heading" className="mt-5 max-w-[14ch] text-d2 text-text">
                Before you <span className="text-accent-ink">get in touch.</span>
              </h2>
              <Button href="/faq" variant="secondary" size="md" className="mt-8" arrow>
                Read all FAQs
              </Button>
            </Reveal>
            <Reveal kind="right">
              <Accordion items={FAQ_PREVIEW} defaultOpen={0} />
            </Reveal>
          </div>
        </div>
      </Section>

      <FinalCta
        marker="Next step"
        heading="Have a product or workflow"
        accent="to build?"
        body="Tell us what you are working on and we will help you identify the best technical path."
        primary={{ label: "Discuss Your Project", href: "/contact" }}
        secondary={{ label: "Book a Strategy Call", href: "/contact?intent=strategy-call" }}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}
