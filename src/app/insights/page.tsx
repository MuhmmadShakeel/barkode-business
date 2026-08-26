import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Registration, SchematicGround, TraceRule } from "@/components/ui/Schematic";
import { Marker, Section, SectionHead } from "@/components/ui/Section";

import { ARTICLES, INSIGHT_CATEGORIES, INSIGHT_PIPELINE } from "@/lib/content";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Insights — Product engineering, SaaS, and AI automation",
  description:
    "Guides, ideas, and practical advice for founders and businesses building software products, improving workflows, or exploring AI automation.",
  path: "/insights",
});

export default function InsightsPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <PageHero
        marker="Insights"
        heading="Practical insights on product engineering, SaaS, and"
        accent="AI automation"
        trail="."
        body="Explore guides, ideas, and practical advice for founders and businesses building software products, improving workflows, or exploring AI automation."
        primary={{ label: "Explore Articles", href: "#articles" }}
        secondary={{ label: "Book a Strategy Call", href: "/contact?intent=strategy-call" }}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ]}
        meta={[
          { label: "Published", value: `${ARTICLES.length} article${ARTICLES.length === 1 ? "" : "s"}` },
          { label: "In the pipeline", value: `${INSIGHT_PIPELINE.length} planned` },
          { label: "Written by", value: "The engineers doing the work" },
        ]}
      />

      {/* ═══ FEATURED ═══════════════════════════════════════════════════════ */}
      <Section surface="paper" id="articles" tight aria-labelledby="featured-heading">
        <div className="shell">
          <Reveal>
            <Marker>Featured article</Marker>
          </Reveal>

          <Reveal className="mt-7">
            <article className="group/a relative grid overflow-hidden rounded-[var(--radius-xl)] border border-rule bg-paper-raised shadow-e2 transition-[box-shadow,border-color] duration-500 [transition-timing-function:var(--ease-expo)] hover:border-accent/30 hover:shadow-e4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <Registration size={18} />

              <div className="relative aspect-[16/10] overflow-hidden border-b border-rule bg-paper-sunken lg:aspect-auto lg:border-r lg:border-b-0">
                <Image
                  src={featured.cover}
                  alt={featured.coverAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-expo)] group-hover/a:scale-[1.03]"
                />
              </div>

              <div className="p-7 sm:p-10">
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.6875rem] tracking-[0.08em] text-text-4 uppercase">
                  <span className="text-accent-ink">{featured.category}</span>
                  <span aria-hidden className="size-0.5 rounded-full bg-rule-strong" />
                  <time dateTime={featured.date}>{featured.displayDate}</time>
                  <span aria-hidden className="size-0.5 rounded-full bg-rule-strong" />
                  <span className="inline-flex items-center gap-1">
                    <Clock3 aria-hidden className="size-3" strokeWidth={1.8} />
                    {featured.readTime}
                  </span>
                </p>

                <h2 id="featured-heading" className="mt-5 max-w-[18ch] text-d2 text-text">
                  <Link
                    href={`/insights/${featured.slug}`}
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {featured.title}
                  </Link>
                </h2>

                <p className="measure mt-5 text-lead text-text-2">{featured.excerpt}</p>

                <p className="mt-8 flex items-center justify-between gap-4 border-t border-rule pt-6">
                  <span className="text-sm text-text-3">By {featured.author}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink">
                    Read Article
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 transition-transform duration-300 [transition-timing-function:var(--ease-expo)] group-hover/a:translate-x-0.5 group-hover/a:-translate-y-0.5"
                    />
                  </span>
                </p>
              </div>
            </article>
          </Reveal>

          {rest.length > 0 && (
            <RevealGroup className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3" as="ul">
              {rest.map((a) => (
                <RevealItem key={a.slug} as="li" className="h-full">
                  <article className="group/c relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-rule bg-paper-raised shadow-e1 transition-[border-color,box-shadow,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-1 hover:border-accent/35 hover:shadow-e3">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-rule bg-paper-sunken">
                      <Image
                        src={a.cover}
                        alt={a.coverAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 380px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <p className="font-mono text-[0.6875rem] tracking-[0.08em] text-accent-ink uppercase">
                        {a.category}
                      </p>
                      <h3 className="mt-2.5 font-display text-[1.0625rem] leading-snug font-semibold text-text">
                        <Link
                          href={`/insights/${a.slug}`}
                          className="after:absolute after:inset-0 after:content-['']"
                        >
                          {a.title}
                        </Link>
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-2">{a.excerpt}</p>
                      <p className="mt-5 flex items-center gap-3 border-t border-rule pt-4 font-mono text-[0.6875rem] text-text-4">
                        <time dateTime={a.date}>{a.displayDate}</time>
                        <span aria-hidden className="size-0.5 rounded-full bg-rule-strong" />
                        <span>{a.readTime}</span>
                      </p>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </div>
      </Section>

      {/* ═══ CATEGORIES ═════════════════════════════════════════════════════ */}
      <Section surface="sunken" tight aria-labelledby="cats-heading">
        <div className="shell">
          <Reveal>
            <div className="flex items-center gap-5">
              <TraceRule className="w-14" />
              <h2
                id="cats-heading"
                className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase"
              >
                Topics we write about
              </h2>
            </div>
          </Reveal>
          <Reveal className="mt-7">
            <ul className="flex flex-wrap gap-2">
              {INSIGHT_CATEGORIES.map((c) => (
                <li
                  key={c}
                  className="rounded-[var(--radius-xs)] border border-rule bg-paper-raised px-3.5 py-1.5 text-sm text-text-2 shadow-e1"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* ═══ EDITORIAL PIPELINE ═════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="pipeline-heading">
        <SchematicGround grid={30} nodes={false} mask="radial" className="opacity-50" />
        <div className="shell relative">
          <Reveal>
            <SectionHead
              id="pipeline-heading"
              marker="Coming up"
              lead="What we are"
              accent="writing next"
              intro="Rather than padding this page with filler, here is the actual editorial pipeline. Each one is a question we get asked often enough to be worth answering properly."
            />
          </Reveal>

          <RevealGroup as="ol" className="mt-14 grid gap-x-10 gap-y-0 lg:grid-cols-2">
            {INSIGHT_PIPELINE.map((p, i) => (
              <RevealItem key={p.title} as="div">
                <div className="flex items-start gap-5 border-b border-rule py-4">
                  <span
                    aria-hidden
                    className="mt-0.5 font-mono text-xs text-text-4 tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.9375rem] leading-snug text-text-2">{p.title}</p>
                    <p className="mt-1.5 font-mono text-[0.625rem] tracking-[0.08em] text-text-4 uppercase">
                      {p.category}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <FinalCta
        marker="Next step"
        heading="Building a product or"
        accent="exploring automation?"
        body="Read practical insights or talk to us directly about your project."
        primary={{ label: "Book a Strategy Call", href: "/contact?intent=strategy-call" }}
        secondary={{ label: "Send Project Details", href: "/contact" }}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
    </>
  );
}
