import { ArrowRight, Check } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Registration, SchematicGround, TraceRule } from "@/components/ui/Schematic";
import { Marker, Section, SectionHead } from "@/components/ui/Section";

import { ENGAGEMENT_MODELS, FAQ_CATEGORIES } from "@/lib/content";
import { JsonLd, breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Engagement Models — Flexible ways to work with Barakode",
  description:
    "Structured engagement models for product builds, AI automation, and ongoing support. Custom quotes after discovery — no misleading fixed-price tables.",
  path: "/engagement-models",
});

const PRICING_FAQS = FAQ_CATEGORIES.find((c) => c.id === "pricing")!.items;

export default function EngagementModelsPage() {
  return (
    <>
      <PageHero
        marker="Engagement Models"
        heading="Flexible engagement models for product builds, AI automation, and"
        accent="ongoing support"
        trail="."
        body="Every software project has a different level of complexity. We offer structured engagement models so you can start with the right level of planning, development, automation, or long-term support."
        primary={{ label: "Find the Right Model", href: "/contact?intent=engagement-model" }}
        secondary={{ label: "Book a Strategy Call", href: "/contact?intent=strategy-call" }}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Engagement Models", path: "/engagement-models" },
        ]}
        meta={[
          { label: "Models", value: `${ENGAGEMENT_MODELS.length}, from a focused sprint to a standing team` },
          { label: "Shortest", value: "AI Automation Sprint — 2 to 6 weeks" },
          { label: "Pricing", value: "Custom quote after discovery" },
        ]}
      />

      {/* ═══ CHOOSER ════════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="chooser-heading">
        <div className="shell">
          <Reveal>
            <div className="flex items-center gap-5">
              <TraceRule className="w-14" />
              <h2
                id="chooser-heading"
                className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase"
              >
                Start here — which one is you?
              </h2>
            </div>
          </Reveal>

          <RevealGroup as="ul" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {ENGAGEMENT_MODELS.map((m) => (
              <RevealItem key={m.slug} as="li">
                <a
                  href={`#${m.slug}`}
                  className="group/c flex h-full flex-col justify-between gap-5 rounded-[var(--radius-md)] border border-rule bg-paper-raised p-5 shadow-e1 transition-[border-color,box-shadow,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-1 hover:border-accent/40 hover:shadow-e2"
                >
                  <span className="text-[0.9375rem] leading-snug font-medium text-text">
                    {m.trigger}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] tracking-[0.06em] text-accent-ink">
                    {m.name}
                    <ArrowRight
                      aria-hidden
                      className="size-3 transition-transform duration-300 [transition-timing-function:var(--ease-expo)] group-hover/c:translate-x-1"
                    />
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ THE MODELS ═════════════════════════════════════════════════════ */}
      <Section surface="sunken" aria-label="Engagement models in detail">
        <SchematicGround grid={30} nodes={false} mask="radial" className="opacity-60" />
        <div className="shell relative">
          <ul className="flex flex-col gap-6">
            {ENGAGEMENT_MODELS.map((m, i) => (
              <li key={m.slug} id={m.slug} className="scroll-mt-28">
                <Reveal>
                  <article className="relative grid gap-x-12 gap-y-8 rounded-[var(--radius-lg)] border border-rule bg-paper-raised p-7 shadow-e1 transition-[border-color,box-shadow] duration-400 hover:border-accent/25 hover:shadow-e2 sm:p-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,0.85fr)]">
                    <Registration size={18} />

                    {/* Identity */}
                    <div>
                      <span className="font-mono text-[0.6875rem] text-text-4 tabular-nums">
                        {String(i + 1).padStart(2, "0")} / {String(ENGAGEMENT_MODELS.length).padStart(2, "0")}
                      </span>
                      <h2 className="mt-3 text-d3 text-text">{m.name}</h2>
                      <p className="measure mt-4 text-[0.9375rem] leading-relaxed text-text-2">
                        <span className="font-medium text-text">Best for: </span>
                        {m.bestFor}
                      </p>
                    </div>

                    {/* Included */}
                    <div>
                      <h3 className="font-mono text-marker font-medium tracking-[0.16em] text-accent-ink uppercase">
                        Included
                      </h3>
                      <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                        {m.included.map((inc) => (
                          <li key={inc} className="flex items-start gap-2.5 text-sm text-text-2">
                            <Check
                              aria-hidden
                              className="mt-[0.1875rem] size-3.5 shrink-0 text-accent"
                              strokeWidth={2.4}
                            />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Terms */}
                    <div className="flex flex-col justify-between gap-6 rounded-[var(--radius-md)] border border-rule bg-paper-sunken p-5">
                      <dl className="flex flex-col gap-4">
                        <div>
                          <dt className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                            Typical timeline
                          </dt>
                          <dd className="mt-1.5 text-sm text-text-2">{m.timeline}</dd>
                        </div>
                        <div>
                          <dt className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                            Pricing
                          </dt>
                          <dd className="mt-1.5 text-sm text-text-2">{m.pricing}</dd>
                        </div>
                      </dl>
                      <Button href={m.cta.href} size="md" arrow block>
                        {m.cta.label}
                      </Button>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ═══ PRICING NOTE ═══════════════════════════════════════════════════ */}
      <Section surface="ink" aria-labelledby="pricing-heading">
        <SchematicGround grid={38} nodes={152} mask="radial" />
        <div className="shell relative">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <Reveal>
              <Marker tone="dark">Pricing</Marker>
              <h2 id="pricing-heading" className="mt-5 max-w-[17ch] text-d2 text-white">
                Why we do not use{" "}
                <span className="text-accent-bright">one-size-fits-all pricing.</span>
              </h2>
            </Reveal>
            <Reveal kind="right">
              <p className="measure text-lead text-ontext-2">
                Software scope depends on features, integrations, users, platforms, data, security
                needs, and long-term goals. Instead of showing misleading fixed prices, we review
                your project and recommend the right scope, timeline, and engagement model.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {[
                  "Features",
                  "Integrations",
                  "Users & roles",
                  "Platforms",
                  "Data",
                  "Security needs",
                  "Long-term goals",
                ].map((f) => (
                  <li
                    key={f}
                    className="rounded-[var(--radius-xs)] border border-rule-dark-strong px-2.5 py-1 font-mono text-xs text-ontext-2"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ FAQ ════════════════════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="faq-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <Marker>Questions</Marker>
              <h2 id="faq-heading" className="mt-5 max-w-[14ch] text-d2 text-text">
                About <span className="text-accent-ink">pricing and scope.</span>
              </h2>
              <Button href="/faq" variant="secondary" size="md" className="mt-8" arrow>
                All FAQs
              </Button>
            </Reveal>
            <Reveal kind="right">
              <Accordion items={PRICING_FAQS} defaultOpen={0} />
            </Reveal>
          </div>
        </div>
      </Section>

      <FinalCta
        marker="Next step"
        heading="Not sure which model fits"
        accent="your project?"
        body="Share your project goals and we will recommend the best starting point."
        primary={{ label: "Find the Right Model", href: "/contact?intent=engagement-model" }}
        secondary={{ label: "Book a Strategy Call", href: "/contact?intent=strategy-call" }}
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Engagement Models", path: "/engagement-models" },
          ]),
          faqSchema(PRICING_FAQS),
        ]}
      />
    </>
  );
}
