import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { CaseStudyBrowser } from "@/components/sections/CaseStudyBrowser";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Marker, Section } from "@/components/ui/Section";
import { Registration } from "@/components/ui/Schematic";

import { CLIENT_CASES, FEATURED_CASE, RESEARCH_STUDIES } from "@/lib/case-studies";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies — Real project stories",
  description:
    "Selected projects showing what was built, why it was needed, how Barakode approached the solution, and what was delivered. Verified project details, real screenshots, accurate outcomes.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const f = FEATURED_CASE;

  return (
    <>
      <PageHero
        marker="Case Studies"
        heading="Real project stories, built around"
        accent="business problems"
        trail="."
        body="Explore selected projects showing what was built, why it was needed, how Barakode approached the solution, and what was delivered. Every case study is based on verified project details, real screenshots, and accurate outcomes."
        primary={{ label: "Discuss a Similar Project", href: "/contact" }}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ]}
        meta={[
          { label: "Client engagements", value: `${CLIENT_CASES.length} documented in full` },
          { label: "Engineering studies", value: `${RESEARCH_STUDIES.length}, each with its report` },
          { label: "Invented metrics", value: "None. Verified outcomes only." },
        ]}
      />

      {/* ═══ FEATURED CASE STUDY ════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="featured-heading">
        <div className="shell">
          <Reveal>
            <Marker>Featured engagement</Marker>
          </Reveal>

          <Reveal className="mt-7">
            <article className="group/f relative grid overflow-hidden rounded-[var(--radius-xl)] border border-rule bg-paper-raised shadow-e2 transition-[box-shadow,border-color] duration-500 [transition-timing-function:var(--ease-expo)] hover:border-accent/30 hover:shadow-e4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
              <Registration size={18} />

              <div className="relative aspect-[16/10] overflow-hidden border-b border-rule bg-ink-900 lg:order-2 lg:aspect-auto lg:border-b-0 lg:border-l">
                <Image
                  src={f.cover}
                  alt={f.coverAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-expo)] group-hover/f:scale-[1.03]"
                />
              </div>

              <div className="p-7 sm:p-10 lg:order-1">
                <p className="font-mono text-[0.6875rem] tracking-[0.1em] text-text-4 uppercase">
                  {f.clientType} · {f.industry}
                </p>

                <h2 id="featured-heading" className="mt-4 max-w-[18ch] text-d2 text-text">
                  <Link
                    href={`/case-studies/${f.slug}`}
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {f.name}
                  </Link>
                </h2>

                <p className="measure mt-5 text-lead text-text-2">{f.summary}</p>

                <dl className="mt-8 grid gap-x-8 gap-y-5 border-t border-rule pt-7 sm:grid-cols-2">
                  <div>
                    <dt className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                      Timeline
                    </dt>
                    <dd className="mt-2 text-sm text-text-2 tabular-nums">{f.timeline}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                      Engagement
                    </dt>
                    <dd className="mt-2 text-sm text-text-2">{f.engagementModel}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                      Services delivered
                    </dt>
                    <dd className="mt-2.5 flex flex-wrap gap-1.5">
                      {f.servicesDelivered.map((s) => (
                        <span
                          key={s}
                          className="rounded-[var(--radius-xs)] border border-rule bg-paper-sunken px-2.5 py-1 text-xs text-text-2"
                        >
                          {s}
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink">
                    Read the case study
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 transition-transform duration-300 [transition-timing-function:var(--ease-expo)] group-hover/f:translate-x-0.5 group-hover/f:-translate-y-0.5"
                    />
                  </span>
                  {f.liveUrl && (
                    <a
                      href={f.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 inline-flex items-center gap-1.5 font-mono text-xs text-text-3 underline decoration-rule-strong underline-offset-4 transition-colors hover:text-accent-ink hover:decoration-accent"
                    >
                      <ExternalLink aria-hidden className="size-3.5" strokeWidth={1.7} />
                      View live product
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* ═══ FILTERABLE GRID ════════════════════════════════════════════════ */}
      <Section surface="sunken" aria-label="All work">
        <div className="shell">
          <CaseStudyBrowser />
        </div>
      </Section>

      <FinalCta
        marker="Next step"
        heading="Want to see work related to"
        accent="your project?"
        body="Tell us what you are building and we will share the most relevant examples based on your project type."
        primary={{ label: "Discuss Your Project", href: "/contact" }}
        secondary={{ label: "Book a Strategy Call", href: "/contact?intent=strategy-call" }}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
        ])}
      />
    </>
  );
}
