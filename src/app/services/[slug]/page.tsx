import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { ClientCaseCard } from "@/components/ui/CaseCard";
import { Pending } from "@/components/ui/Pending";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Registration, TraceRule } from "@/components/ui/Schematic";
import { Section, SectionHead } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

import { SERVICE_PAGES, getServicePage } from "@/lib/service-pages";
import { getService } from "@/lib/services";
import { ENGAGEMENT_MODELS } from "@/lib/content";
import { CLIENT_CASES, clientCaseInTrack, type TrackId } from "@/lib/case-studies";
import { JsonLd, breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";

/** Which case-study track each service page should surface as proof. */
const PROOF_TRACK: Record<string, TrackId> = {
  "mvp-saas-product-development": "saas-mvp",
  "custom-web-mobile-app-development": "web-mobile",
  "internal-business-systems": "internal-systems",
  "cloud-devops-maintenance": "all",
  "ui-ux-product-design": "all",
};

export function generateStaticParams() {
  return SERVICE_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/services/${page.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getServicePage(slug);
  const service = getService(slug);
  if (!page || !service) notFound();

  const models = ENGAGEMENT_MODELS.filter((m) => page.engagement.models.includes(m.slug));
  const track = PROOF_TRACK[page.slug] ?? "all";
  const proof = CLIENT_CASES.filter((c) => clientCaseInTrack(c, track)).slice(0, 2);

  return (
    <div className="service-detail-page">
      <PageHero
        marker={page.hero.marker}
        heading={page.hero.heading}
        accent={page.hero.accent}
        trail={page.hero.trail}
        body={page.hero.body}
        primary={page.hero.primary}
        secondary={page.hero.secondary}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.shortTitle, path: `/services/${page.slug}` },
        ]}
        meta={[
          { label: "Delivered as", value: models.map((m) => m.name).join(" · ") },
          { label: "Typical timeline", value: models[0]?.timeline ?? "Scoped after discovery" },
          {
            label: "Pricing",
            value: "Custom quote after discovery — no fixed packages.",
          },
        ]}
        showMarker={false}
        minimalBackdrop
        headingClassName="ai-hero-heading"
        className="ai-service-hero service-detail-hero"
      />

      {/* ═══ WHO THIS IS FOR ════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="who-heading" className="service-panel service-detail-panel service-detail-who">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
            <Reveal>
              <span className="service-detail-kicker">01 / Fit</span>
              <h2 id="who-heading" className="max-w-[14ch] text-d2 text-text">
                Who this is <span className="text-accent-ink">for.</span>
              </h2>
            </Reveal>
            <RevealGroup as="ul" className="service-detail-list grid gap-x-8 sm:grid-cols-2">
              {page.audience.map((a) => (
                <RevealItem key={a} as="li" className="flex items-start gap-3 border-b border-black/10 py-4">
                  <Check
                    aria-hidden
                    className="mt-[0.1875rem] size-4 shrink-0 text-accent"
                    strokeWidth={2.2}
                  />
                  <span className="text-[0.9375rem] text-text-2">{a}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* ═══ PROBLEM ════════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="problem-heading" className="service-panel service-detail-panel service-detail-problem border-t border-rule">
        <div className="shell relative">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <span className="service-detail-kicker">02 / Challenge</span>
              <h2 id="problem-heading" className="max-w-[17ch] text-d2 text-text">
                {page.problem.heading}{" "}
                <span className="text-accent-ink">{page.problem.accent}.</span>
              </h2>
              <p className="measure mt-7 text-lead text-text-2">{page.problem.body}</p>
            </Reveal>

            <RevealGroup
              as="ul"
              className="service-detail-problem-list grid self-start sm:grid-cols-2"
            >
              {page.problem.items.map((p) => (
                <RevealItem key={p} as="li">
                  <div className="flex h-full items-start gap-3 border-b border-black/10 px-5 py-4 sm:odd:border-r">
                    <span aria-hidden className="mt-[0.5625rem] size-1 shrink-0 rounded-full bg-danger/70" />
                    <span className="text-sm leading-relaxed text-text-2">{p}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* ═══ WHAT WE BUILD + EXTRAS ═════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="builds-heading" className="service-panel service-detail-panel service-detail-builds border-t border-rule">
        <div className="shell relative">
          <Reveal>
            <span className="service-detail-kicker">03 / Capability</span>
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-[var(--radius-sm)] border border-accent/25 text-accent">
                <ServiceIcon name={service.icon} className="size-5" />
              </span>
              <TraceRule className="w-16" />
            </div>
            <h2 id="builds-heading" className="mt-6 max-w-[18ch] text-d2 text-text">
              {page.builds.heading}
            </h2>
          </Reveal>

          <RevealGroup
            as="ul"
            className="mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3"
           
          >
            {page.builds.items.map((b) => (
              <RevealItem key={b} as="li">
                <span className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-black/10 px-4 py-3 text-[0.9375rem] text-text-2">
                  <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          {page.extra?.map((block) => (
            <div key={block.heading} className="mt-16">
              <Reveal>
                <div className="grid gap-x-14 gap-y-4 border-t border-black/10 pt-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                  <div>
                    <h3 className="text-d3 text-text">{block.heading}</h3>
                    {block.note && (
                      <p className="measure mt-3 text-sm text-text-3">{block.note}</p>
                    )}
                  </div>
                  <ul className="flex flex-wrap gap-2 self-start">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-[var(--radius-xs)] border border-black/10 px-3 py-1.5 text-sm text-text-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ PROCESS ════════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="proc-heading" className="service-panel service-detail-panel service-detail-process border-t border-rule">
        <div className="shell relative">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <Reveal>
              <span className="service-detail-kicker">04 / Delivery</span>
              <h2 id="proc-heading" className="max-w-[14ch] text-d2 text-text">
                {page.process.heading}
              </h2>
              <p className="measure mt-6 text-text-2">
                The same structured route every engagement follows, scoped to this service.
              </p>
              <Button href="/process" variant="secondary" size="md" className="mt-8" arrow>
                See the full process
              </Button>
            </Reveal>

            <RevealGroup as="ol" className="grid gap-x-8 md:grid-cols-2">
              {page.process.steps.map((step, i) => (
                <RevealItem key={step} as="div">
                  <div className="flex items-center gap-5 border-b border-rule py-5 first:border-t">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-black/15 font-mono text-xs text-black/60 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1.0625rem] text-text">{step}</span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* ═══ TECH STACK ═════════════════════════════════════════════════════ */}
      {/* ═══ PROOF ══════════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="proof-heading" className="service-panel service-detail-panel service-detail-proof">
        <div className="shell">
          <Reveal>
            <SectionHead
              id="proof-heading"
              marker="05 / Evidence"
              lead="Related"
              accent="work"
              intro="Real engagements with real screenshots, timelines, and stacks. Nothing here is a stand-in."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 lg:grid-cols-2" as="ul">
            {proof.map((c) => (
              <RevealItem key={c.slug} as="li" className="h-full">
                <ClientCaseCard study={c} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <Pending>[Add verified case study result for this service]</Pending>
              <Button href="/case-studies" variant="ghost" size="sm" arrow>
                All case studies
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ═══ ENGAGEMENT ═════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="eng-heading" className="service-panel service-detail-panel service-detail-engagement border-t border-rule">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <Reveal>
              <span className="service-detail-kicker">06 / Structure</span>
              <h2 id="eng-heading" className="max-w-[15ch] text-d2 text-text">
                How this work is <span className="text-accent-ink">structured.</span>
              </h2>
              <p className="measure mt-6 text-text-2">{page.engagement.note}</p>
            </Reveal>

            <RevealGroup as="ul" className="grid gap-4 sm:grid-cols-2">
              {models.map((m) => (
                <RevealItem key={m.slug} as="li" className="h-full">
                  <Link
                    href={`/engagement-models#${m.slug}`}
                    className="group/em relative flex h-full flex-col rounded-[var(--radius-md)] border border-rule bg-paper-raised p-6 shadow-e1 transition-[border-color,box-shadow,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-1 hover:border-accent/35 hover:shadow-e2"
                  >
                    <Registration />
                    <h3 className="font-display text-[1.0625rem] font-semibold text-text">
                      {m.name}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-3">
                      {m.bestFor}
                    </p>
                    <dl className="mt-5 flex flex-col gap-2 border-t border-rule pt-4 text-xs">
                      <div className="flex justify-between gap-3">
                        <dt className="text-text-4">Timeline</dt>
                        <dd className="text-right text-text-2">{m.timeline}</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-text-4">Pricing</dt>
                        <dd className="text-right text-text-2">{m.pricing}</dd>
                      </div>
                    </dl>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink">
                      Details
                      <ArrowRight
                        aria-hidden
                        className="size-3.5 transition-transform duration-300 [transition-timing-function:var(--ease-expo)] group-hover/em:translate-x-1"
                      />
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: page.metaDescription,
            path: `/services/${page.slug}`,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.shortTitle, path: `/services/${page.slug}` },
          ]),
          faqSchema(page.faqs),
        ]}
      />
    </div>
  );
}
