import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Download, ExternalLink } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { CaseStudyBrowser } from "@/components/sections/CaseStudyBrowser";
import { Button } from "@/components/ui/Button";
import { Pending } from "@/components/ui/Pending";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Registration, SchematicGround, TraceRule } from "@/components/ui/Schematic";
import { Marker, Section, SectionHead } from "@/components/ui/Section";

import {
  CLIENT_CASES,
  RESEARCH_STUDIES,
  allCaseSlugs,
  getClientCase,
  getResearchStudy,
  type ClientCase,
  type ResearchStudy,
} from "@/lib/case-studies";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return allCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = getClientCase(slug);
  if (client) {
    return buildMetadata({
      title: `${client.name} — Case Study`,
      description: client.summary,
      path: `/case-studies/${slug}`,
      image: client.cover,
      type: "article",
    });
  }
  const study = getResearchStudy(slug);
  if (study) {
    return buildMetadata({
      title: `${study.title} — Engineering Study`,
      description: study.tagline,
      path: `/case-studies/${slug}`,
      image: study.cover ?? undefined,
      type: "article",
    });
  }
  return {};
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const client = getClientCase(slug);
  if (client) return <ClientCaseView study={client} />;

  const study = getResearchStudy(slug);
  if (study) return <ResearchView study={study} />;

  notFound();
}

/* ══════════════════════════════════════════════════════════════════════════
   CLIENT ENGAGEMENT — the brief's Individual Case Study Template
   ══════════════════════════════════════════════════════════════════════════ */

function ClientCaseView({ study }: { study: ClientCase }) {
  return (
    <>
      <PageHero
        marker="Case Study"
        heading={study.headline}
        body={study.summary}
        primary={{ label: "Discuss a Similar Project", href: "/contact" }}
        secondary={
          study.liveUrl ? { label: "View Live Product", href: study.liveUrl } : undefined
        }
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.name, path: `/case-studies/${study.slug}` },
        ]}
        minimalBackdrop
      />

      {/* ═══ PROJECT OVERVIEW CARD ══════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="overview-heading">
        <div className="shell">
          <Reveal>
            <h2 id="overview-heading" className="sr-only">
              Project overview
            </h2>
            <div className="relative rounded-[var(--radius-lg)] border border-rule bg-paper-raised p-7 shadow-e2 sm:p-9">
              <Registration size={18} />
              <dl className="grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { k: "Project", v: study.name },
                  { k: "Client type", v: study.clientType },
                  { k: "Industry", v: study.industry },
                  { k: "Timeline", v: study.timeline },
                  { k: "Engagement model", v: study.engagementModel },
                  {
                    k: "Live product",
                    v: study.liveUrl ? (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-accent-ink underline decoration-accent/35 underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {new URL(study.liveUrl).hostname.replace("www.", "")}
                        <ExternalLink aria-hidden className="size-3.5" strokeWidth={1.7} />
                      </a>
                    ) : (
                      <Pending>[Not publicly listed]</Pending>
                    ),
                  },
                  {
                    k: "Services",
                    v: study.servicesDelivered.join(" · "),
                    span: true,
                  },
                ].map((row) => (
                  <div key={row.k} className={row.span ? "sm:col-span-2" : undefined}>
                    <dt className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                      {row.k}
                    </dt>
                    <dd className="mt-2 text-[0.9375rem] leading-relaxed text-text-2">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ═══ HERO SCREENSHOT ════════════════════════════════════════════════ */}
      <Section surface="paper" flush className="pb-section-tight">
        <div className="shell">
          <Reveal kind="flat">
            <figure
              className={`relative overflow-hidden rounded-[var(--radius-lg)] border border-rule shadow-e3 ${study.tone === "light" ? "bg-paper-deep" : "bg-ink-900"}`}
            >
              <Image
                src={study.cover}
                alt={study.coverAlt}
                width={1600}
                height={1000}
                priority
                sizes="(max-width: 1216px) 100vw, 1216px"
                className="h-auto w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* ═══ PROBLEM → SOLUTION → OUTCOME ═══════════════════════════════════ */}
      <Section surface="ink-deep" aria-labelledby="impact-story-heading">
        <SchematicGround grid={34} nodes={136} mask="radial" />
        <div className="shell relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Marker tone="dark">The impact story</Marker>
            <h2 id="impact-story-heading" className="mt-5 text-d2 text-white">
              From business problem to{" "}
              <span className="text-accent-bright">measurable outcome.</span>
            </h2>
          </Reveal>

          <RevealGroup as="ol" className="mt-10 grid overflow-hidden rounded-[var(--radius-lg)] border border-rule-dark bg-rule-dark shadow-dark-e2 md:grid-cols-3">
            {[
              {
                label: "Problem",
                title: "What held the business back",
                body: study.challenge[0],
              },
              {
                label: "Solution",
                title: "What Barakode changed",
                body: study.solution[0],
              },
              {
                label: "Business outcome",
                title: "What changed after delivery",
                body: study.results?.[0] ?? "Verified business outcome pending.",
              },
            ].map((item, index) => (
              <RevealItem key={item.label} as="li" index={index} className="h-full">
                <article className="group/impact flex h-full min-h-[20rem] flex-col bg-ink-900 p-6 transition-colors duration-300 hover:bg-ink-850 sm:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[0.6875rem] tracking-[.14em] text-signal uppercase">{item.label}</span>
                    <span className="grid size-8 place-items-center rounded-full border border-white/12 font-mono text-[0.625rem] text-ontext-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 line-clamp-6 text-[0.9375rem] leading-relaxed text-ontext-2">{item.body}</p>
                  <div aria-hidden className="mt-auto pt-8">
                    <div className="h-px bg-gradient-to-r from-accent/70 to-transparent" />
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ CHALLENGE + GOALS ══════════════════════════════════════════════ */}
      <Section surface="sunken" aria-labelledby="challenge-heading">
        <SchematicGround grid={30} nodes={false} mask="radial" className="opacity-60" />
        <div className="shell relative">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <Reveal>
              <Marker>The challenge</Marker>
              <h2 id="challenge-heading" className="mt-5 max-w-[16ch] text-d2 text-text">
                What was not <span className="text-accent-ink">working.</span>
              </h2>
              <div className="mt-7 flex flex-col gap-5">
                {study.challenge.map((c) => (
                  <p key={c} className="measure text-lead text-text-2">
                    {c}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal kind="right" className="lg:pt-16">
              <div className="rounded-[var(--radius-md)] border border-rule bg-paper-raised p-7 shadow-e1">
                <h3 className="font-mono text-marker font-medium tracking-[0.16em] text-accent-ink uppercase">
                  Goals
                </h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {study.goals.map((g, i) => (
                    <li key={g} className="flex items-start gap-3.5">
                      <span
                        aria-hidden
                        className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-[0.625rem] text-accent-ink tabular-nums"
                      >
                        {i + 1}
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-text-2">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ SOLUTION ═══════════════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="solution-heading">
        <div className="shell">
          <Reveal>
            <SectionHead
              id="solution-heading"
              marker="The solution"
              lead="What Barakode"
              accent="delivered"
            />
          </Reveal>

          <div className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <Reveal className="flex flex-col gap-6">
              {study.solution.map((s) => (
                <p key={s} className="measure text-text-2">
                  {s}
                </p>
              ))}
            </Reveal>

            <Reveal kind="right" className="flex flex-col gap-6">
              <div className="rounded-[var(--radius-md)] border border-rule bg-paper-sunken p-6">
                <h3 className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                  Features delivered
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {study.featuresDelivered.map((f) => (
                    <li
                      key={f}
                      className="rounded-[var(--radius-xs)] border border-rule bg-paper-raised px-2.5 py-1 text-sm text-text-2 shadow-e1"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[var(--radius-md)] border border-rule bg-paper-sunken p-6">
                <h3 className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                  Barakode&rsquo;s role
                </h3>
                <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {study.role.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-text-2">
                      <Check
                        aria-hidden
                        className="mt-[0.1875rem] size-3.5 shrink-0 text-accent"
                        strokeWidth={2.4}
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ TECH STACK ═════════════════════════════════════════════════════ */}
      <Section surface="ink" tight aria-labelledby="stack-heading">
        <SchematicGround grid={38} nodes={152} mask="radial" />
        <div className="shell relative">
          <Reveal>
            <Marker tone="dark">Tech stack</Marker>
            <h2 id="stack-heading" className="mt-5 max-w-[16ch] text-d3 text-white">
              What it is <span className="text-accent-bright">built with.</span>
            </h2>
          </Reveal>

          <RevealGroup as="dl" className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule-dark bg-rule-dark sm:grid-cols-2 lg:grid-cols-3">
            {study.stack.map((g) => (
              <RevealItem key={g.group} as="div">
                <div className="flex h-full flex-col gap-3.5 bg-ink-900 p-6">
                  <dt className="font-mono text-marker font-medium tracking-[0.16em] text-signal uppercase">
                    {g.group}
                  </dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {g.items.map((t) => (
                      <span
                        key={t}
                        className="rounded-[var(--radius-xs)] border border-rule-dark-strong bg-ink-800 px-2.5 py-1 font-mono text-xs text-ontext-2"
                      >
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ SCREENSHOTS ════════════════════════════════════════════════════ */}
      {study.screenshots.length > 0 && (
        <Section surface="paper" aria-labelledby="shots-heading">
          <div className="shell">
            <Reveal>
              <SectionHead
                id="shots-heading"
                marker="Screenshots"
                lead="Inside the"
                accent="product"
                intro="Screens from the delivered system. No mockups standing in for real work."
              />
            </Reveal>

            <RevealGroup
              className={`mt-12 grid gap-6 ${study.screenshots.length > 1 ? "lg:grid-cols-2" : ""}`}
              as="ul"
            >
              {study.screenshots.map((s) => (
                <RevealItem key={s.src} as="li">
                  <figure className="overflow-hidden rounded-[var(--radius-md)] border border-rule bg-paper-sunken shadow-e2">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      width={1400}
                      height={900}
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="h-auto w-full object-cover"
                    />
                    <figcaption className="border-t border-rule bg-paper-raised px-5 py-3.5 text-sm text-text-3">
                      {s.caption}
                    </figcaption>
                  </figure>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Section>
      )}

      {/* ═══ RESULTS ════════════════════════════════════════════════════════ */}
      <Section surface="sunken" aria-labelledby="results-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <Reveal>
              <Marker>Results</Marker>
              <h2 id="results-heading" className="mt-5 max-w-[14ch] text-d2 text-text">
                What actually <span className="text-accent-ink">changed.</span>
              </h2>
              <p className="measure mt-6 text-sm text-text-3">
                Only outcomes recorded in the project record appear here. Where a number is not
                verified, it is not published.
              </p>
            </Reveal>

            <Reveal kind="right">
              {study.results ? (
                <ul className="flex flex-col">
                  {study.results.map((r, i) => (
                    <li
                      key={r}
                      className={`flex items-start gap-4 border-b border-rule py-5 ${i === 0 ? "border-t" : ""}`}
                    >
                      <span
                        aria-hidden
                        className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft"
                      >
                        <Check className="size-3.5 text-accent-ink" strokeWidth={2.6} />
                      </span>
                      <span className="text-[1.0625rem] leading-relaxed text-text-2">{r}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <Pending block>[Add verified result only]</Pending>
              )}
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ LESSONS ════════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="lessons-heading">
        <div className="shell">
          <Reveal>
            <div className="flex items-center gap-5">
              <TraceRule className="w-16" />
              <h2
                id="lessons-heading"
                className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase"
              >
                What made the project work
              </h2>
            </div>
          </Reveal>

          <RevealGroup as="ul" className="mt-8 grid gap-5 md:grid-cols-3">
            {study.lessons.map((l, i) => (
              <RevealItem key={l} as="li">
                <div className="h-full border-t-2 border-accent/25 pt-5">
                  <span className="font-mono text-[0.6875rem] text-text-4 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-2">{l}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ MORE WORK ══════════════════════════════════════════════════════ */}
      <Section surface="sunken" aria-label="More work">
        <div className="shell">
          <CaseStudyBrowser excludeSlug={study.slug} />
        </div>
      </Section>

      <FinalCta
        marker="Next step"
        heading="Have a similar product or"
        accent="workflow to build?"
        body="Tell us what you are working on and we will help you identify the right technical direction."
        primary={{ label: "Discuss Your Project", href: "/contact" }}
        secondary={{ label: "Book a Free Project Discovery Call", href: "/contact?intent=strategy-call" }}
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: study.name, path: `/case-studies/${study.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: study.headline,
            description: study.summary,
            image: `${SITE.url}${study.cover}`,
            author: { "@id": `${SITE.url}/#organization` },
            publisher: { "@id": `${SITE.url}/#organization` },
            mainEntityOfPage: `${SITE.url}/case-studies/${study.slug}`,
          },
        ]}
      />
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   ENGINEERING STUDY
   ══════════════════════════════════════════════════════════════════════════ */

function ResearchView({ study }: { study: ResearchStudy }) {
  const blocks: { title: string; items: string[] }[] = [
    { title: "Objectives", items: study.objectives },
    { title: "Process", items: study.process },
    { title: "Results", items: study.results },
    { title: "What we took from it", items: study.learnings },
  ].filter((b) => b.items.length > 0);

  return (
    <>
      <PageHero
        marker="Engineering study"
        heading={study.title}
        body={study.tagline}
        primary={{ label: "Discuss a Similar Project", href: "/contact" }}
        secondary={study.pdf ? { label: "Open full report (PDF)", href: study.pdf } : undefined}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ]}
        meta={[
          { label: "Domain", value: study.domain },
          { label: "Year", value: study.year },
          {
            label: "Type",
            value: study.isResearchReport
              ? "Research report — internal engineering work"
              : "Applied build — internal engineering work",
          },
        ]}
        minimalBackdrop
      />

      {/* ═══ CONTEXT NOTE ═══════════════════════════════════════════════════ */}
      <Section surface="paper" tight>
        <div className="shell">
          <Reveal>
            <div className="flex items-start gap-4 rounded-[var(--radius-md)] border border-rule bg-paper-sunken px-6 py-5">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
              <p className="measure-wide text-sm text-text-2">
                This is internal engineering and R&amp;D work, not a client project. It is published
                to show technical depth — the modelling, evaluation, and tooling behind the AI
                automation we build for clients. No client is associated with it.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ═══ OVERVIEW ═══════════════════════════════════════════════════════ */}
      <Section surface="paper" flush className="pb-section">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
            <Reveal>
              <Marker>Overview</Marker>
              <div className="mt-6 flex flex-col gap-5">
                {study.overview.map((o) => (
                  <p key={o} className="measure text-lead text-text-2">
                    {o}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal kind="right">
              <div className="rounded-[var(--radius-md)] border border-rule bg-paper-sunken p-6">
                <h2 className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                  Tools & methods
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {(study.tools.length ? study.tools : study.tags).map((t) => (
                    <li
                      key={t}
                      className="rounded-[var(--radius-xs)] border border-rule bg-paper-raised px-2.5 py-1 font-mono text-xs text-text-2 shadow-e1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {study.pdf && (
                  <Button
                    href={study.pdf}
                    variant="secondary"
                    size="sm"
                    className="mt-6"
                    block
                  >
                    <Download aria-hidden className="size-4" strokeWidth={1.8} />
                    Full technical report
                  </Button>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ DETAIL BLOCKS ══════════════════════════════════════════════════ */}
      <Section surface="sunken" aria-label="Study detail">
        <SchematicGround grid={30} nodes={false} mask="radial" className="opacity-60" />
        <div className="shell relative">
          <RevealGroup as="div" className="grid gap-6 md:grid-cols-2">
            {blocks.map((b) => (
              <RevealItem key={b.title}>
                <section className="h-full rounded-[var(--radius-md)] border border-rule bg-paper-raised p-6 shadow-e1 sm:p-7">
                  <h2 className="font-mono text-marker font-medium tracking-[0.16em] text-accent-ink uppercase">
                    {b.title}
                  </h2>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-[0.5625rem] size-1 shrink-0 rounded-full bg-accent"
                        />
                        <span className="text-[0.9375rem] leading-relaxed text-text-2">{it}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ FIGURES ════════════════════════════════════════════════════════ */}
      {(study.figures.length > 0 || study.cover) && (
        <Section surface="paper" aria-labelledby="figs-heading">
          <div className="shell">
            <Reveal>
              <SectionHead
                id="figs-heading"
                marker="Figures"
                lead="From the"
                accent="report"
              />
            </Reveal>

            <RevealGroup
              className={`mt-12 grid gap-6 ${study.figures.length > 1 ? "sm:grid-cols-2" : ""}`}
              as="ul"
            >
              {(study.figures.length > 0
                ? study.figures
                : [{ src: study.cover as string, alt: `${study.title} overview` }]
              ).map((f) => (
                <RevealItem key={f.src} as="li">
                  <figure className="overflow-hidden rounded-[var(--radius-md)] border border-rule bg-white shadow-e1">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      width={1200}
                      height={800}
                      sizes="(max-width: 640px) 100vw, 580px"
                      className="h-auto w-full object-contain"
                    />
                    <figcaption className="border-t border-rule bg-paper-sunken px-5 py-3 text-xs text-text-3">
                      {f.alt}
                    </figcaption>
                  </figure>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Section>
      )}

      {/* ═══ MORE WORK ══════════════════════════════════════════════════════ */}
      <Section surface="sunken" aria-label="More work">
        <div className="shell">
          <CaseStudyBrowser excludeSlug={study.slug} />
        </div>
      </Section>

      <FinalCta
        marker="Next step"
        heading="Need this kind of capability in"
        accent="a real product?"
        body="Tell us the workflow you want to automate and we will map the practical version of it — grounded, reviewable, and connected to the tools you already run."
        primary={{ label: "Book a Free Project Discovery Call", href: "/contact?intent=ai-automation" }}
        secondary={{ label: "Explore AI Automation", href: "/ai-automation" }}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies", path: "/case-studies" },
          { name: study.title, path: `/case-studies/${study.slug}` },
        ])}
      />
    </>
  );
}
