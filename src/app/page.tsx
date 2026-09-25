import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { CaseStudyGuide } from "@/components/sections/CaseStudyGuide";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { BeforeAfterWorkflow } from "@/components/sections/WorkflowDiagram";
import { AnimatedAIGlobe } from "@/components/sections/AnimatedAIGlobe";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ClientCaseCard } from "@/components/ui/CaseCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TraceRule } from "@/components/ui/Schematic";
import { Marker, Section, SectionHead } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

import { CLIENT_CASES } from "@/lib/case-studies";
import {
  ENGAGEMENT_MODELS,
  TRUST_CATEGORIES,
  VALUE_PROPS,
} from "@/lib/content";
import { AI_USE_CASES } from "@/lib/ai-automation";
import { SERVICES } from "@/lib/services";
import { JsonLd, buildMetadata, faqSchema } from "@/lib/seo";
import { getMessages } from "next-intl/server";

type HomeMessages = (typeof import("@/i18n/messages/en.json"))["home"];

export async function generateMetadata() {
  const copy = (await getMessages()).homeMeta as { title: string; description: string };
  return buildMetadata({ title: copy.title, description: copy.description, path: "/" });
}

function ProblemCard({ groupIndex, cards }: { groupIndex: number; cards: string[] }) {
  const items = cards.slice(groupIndex * 2, groupIndex * 2 + 2);

  return (
    <article className="group/problem h-full overflow-hidden rounded-[var(--radius-lg)] border border-rule-dark bg-ink-950 shadow-e2 transition-[border-color,box-shadow,transform] duration-500 [transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)] [transform-style:preserve-3d] [transition-timing-function:var(--ease-expo)] hover:[transform:perspective(1200px)_rotateX(2deg)_rotateY(-2deg)_translate3d(0,-4px,14px)] hover:border-accent/40 hover:shadow-e4">
      {items.map((item, itemIndex) => {
        const number = groupIndex * 2 + itemIndex + 1;
        return (
          <div
            key={item}
            className="grid min-h-20 grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3 border-b border-rule-dark px-5 py-4 last:border-b-0 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4 sm:px-7 sm:py-5"
          >
            <span className="font-mono text-xs text-signal tabular-nums">
              {String(number).padStart(2, "0")}
            </span>
            <p className="font-display text-[0.9375rem] leading-snug font-medium text-white sm:text-[1.0625rem]">
              {item}
            </p>
          </div>
        );
      })}
    </article>
  );
}

export default async function HomePage() {
  const messages = await getMessages();
  const home = messages.home as HomeMessages;
  const homeTimelines = messages.homeTimelines as string[];
  const caseNames = messages.homeCaseNames as string[];
  const stackLabels = messages.homeStackLabels as string[][];
  const serviceCards = [...home.services.cards, ...(messages.homeRecoveredServices as HomeMessages["services"]["cards"])];
  const caseCards = [...home.work.cards, ...(messages.homeErpCards as HomeMessages["work"]["cards"])];
  const faqItems = home.faq.items;
  return (
    <>
      <Hero />

      <Section surface="paper" tight aria-labelledby="proof-heading" className="border-b border-rule">
        <div className="shell">
          <Reveal>
            <div className="grid items-center gap-6 rounded-[var(--radius-lg)] border border-rule bg-paper-raised p-6 shadow-e1 sm:p-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
              <div>
                <p className="font-mono text-marker font-medium tracking-[0.16em] text-accent-ink uppercase">{home.proof.marker}</p>
                <h2 id="proof-heading" className="mt-3 max-w-[24ch] text-d3 text-text">
                  {home.proof.heading}
                </h2>
                <p className="mt-4 max-w-2xl text-text-2">
                  {home.proof.body}
                </p>
              </div>
              <CaseStudyGuide label={home.proof.cta} />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ═══ 2 · TRUST SIGNAL ═══════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="trust-heading" className="trust-reveal overflow-hidden">
        <div className="shell relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Marker>{home.trust.marker}</Marker>
            <h2 className="mt-5 text-d3 text-text">
              {home.trust.heading}{" "}
              <span className="text-accent-ink">{home.trust.accent}</span>
            </h2>
          </Reveal>

          <RevealGroup
            as="ul"
            className="mt-8 grid overflow-hidden rounded-[var(--radius-md)] border border-rule bg-paper-raised shadow-e1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {home.trust.audiences.map((audience, index) => (
              <RevealItem
                key={audience}
                as="li"
                index={index}
                className="group/audience flex min-h-20 items-center gap-4 border-b border-rule px-5 py-4 transition-colors duration-300 last:border-b-0 hover:bg-accent-soft sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(3)]:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0"
              >
                <span className="font-mono text-[0.6875rem] text-accent-ink tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[0.9375rem] font-semibold text-text sm:text-base">
                  {audience}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-10 grid items-stretch gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-6">
            <Reveal kind="left" className="relative min-h-[22rem] overflow-hidden rounded-[var(--radius-lg)] border border-rule-dark bg-ink-950 shadow-e4 sm:min-h-[30rem] lg:min-h-[34rem]">
              <Image
                src="/images/home/trusted-product-strategist.webp"
                alt={home.trust.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-[66%_center]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/8 to-transparent" />
              <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-white/8" />
            </Reveal>

            <Reveal kind="right" className="flex flex-col justify-center rounded-[var(--radius-lg)] border border-rule-dark bg-ink-950 p-6 shadow-e3 sm:p-9 lg:p-12">
              <Marker tone="dark">{home.trust.detailMarker}</Marker>
              <h2 id="trust-heading" className="mt-5 max-w-[18ch] text-d3 text-white">
                {home.trust.detailHeading}{" "}
                <span className="text-accent-bright">{home.trust.detailAccent}</span>
              </h2>
              <p className="measure mt-6 text-ontext-2">
                {home.trust.body}
              </p>
            </Reveal>
          </div>

          <RevealGroup className="trust-card-grid mt-4 grid gap-4 sm:mt-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 xl:grid-cols-5" as="ul">
            {TRUST_CATEGORIES.map((c, i) => (
              <RevealItem key={c.label} as="li" className="h-full">
                <Link
                  href={c.href}
                  className="group/tc relative flex h-full min-h-44 flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border border-rule-dark bg-ink-950 p-5 shadow-e2 [transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)_translateZ(0)] [transform-style:preserve-3d] transition-[border-color,box-shadow,transform] duration-500 [transition-timing-function:var(--ease-expo)] will-change-transform hover:[transform:perspective(1000px)_rotateX(3deg)_rotateY(-3deg)_translate3d(0,-6px,18px)] hover:border-accent/45 hover:shadow-e4 sm:min-h-48 sm:p-6"
                >
                  <span className="font-mono text-[0.6875rem] text-signal tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <TraceRule className="my-5 w-10" tone="dark" />
                  <span className="font-display text-[1rem] leading-snug font-medium text-white">
                    {home.trust.categories[i]}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="mt-5 size-4 text-ontext-3 transition-[color,transform] duration-300 group-hover/tc:translate-x-1 group-hover/tc:-translate-y-1 group-hover/tc:text-accent-bright"
                  />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

        </div>
      </Section>

      {/* ═══ 3 · PROBLEM ════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="problem-heading" className="problem-reveal">
        <div className="shell relative w-full">
          <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="grid h-full gap-5 lg:grid-rows-[auto_1fr_auto]">
              <Reveal>
              <h2 id="problem-heading" className="max-w-[18ch] text-d3 text-text">
                {home.problem.heading}{" "}
                <span className="text-accent-ink">{home.problem.accent}</span>
              </h2>
              <p className="measure mt-7 text-lead text-text-2">
                {home.problem.lead}
              </p>
              </Reveal>

              <Reveal className="h-full" index={1}>
                <ProblemCard groupIndex={0} cards={home.problem.cards} />
              </Reveal>

              <Reveal index={2}>
                <p className="measure text-text-3">
                  {home.problem.body}
                </p>
              </Reveal>
            </div>

            <RevealGroup className="grid h-full grid-rows-2 gap-5" as="ul">
              {[1, 2].map((groupIndex) => (
                <RevealItem key={groupIndex} as="li" index={groupIndex} className="h-full">
                  <ProblemCard groupIndex={groupIndex} cards={home.problem.cards} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* ═══ 4 · SERVICES OVERVIEW ══════════════════════════════════════════ */}
      <Section surface="ink" aria-labelledby="services-heading" className="services-reveal">
        <div className="shell relative">
          <Reveal>
            <SectionHead
              id="services-heading"
              marker={home.services.marker}
              lead={home.services.heading}
              accent={home.services.accent}
              tone="dark"
            />
          </Reveal>

          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" as="ul">
            {SERVICES.map((s, i) => (
              <RevealItem key={s.slug} as="li" className="h-full">
                <article
                  className={
                    "group/sv relative flex h-full flex-col rounded-[var(--radius-lg)] border border-rule bg-white p-7 shadow-e2 transition-[border-color,box-shadow,transform] duration-500 [transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)] [transform-style:preserve-3d] [transition-timing-function:var(--ease-expo)] hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-2deg)_translate3d(0,-5px,12px)] hover:border-accent/35 hover:shadow-e4"
                  }
                >
                  <span
                    aria-hidden
                    className="absolute top-0 left-7 h-px w-10 bg-accent opacity-0 transition-opacity duration-400 group-hover/sv:opacity-100"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-[var(--radius-sm)] border border-rule bg-paper-sunken text-accent transition-colors duration-300 group-hover/sv:border-accent/30 group-hover/sv:bg-accent-soft">
                      <ServiceIcon name={s.icon} className="size-5" />
                    </span>
                    <span className="font-mono text-[0.6875rem] text-text-4 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-[1.1875rem] leading-snug font-semibold text-text">
                    <Link href={s.href} className="after:absolute after:inset-0 after:content-['']">
                      {serviceCards[i].title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-text-2">
                    {serviceCards[i].summary}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink">
                    {serviceCards[i].cta}
                    <ArrowRight
                      aria-hidden
                      className="size-4 transition-transform duration-300 [transition-timing-function:var(--ease-expo)] group-hover/sv:translate-x-1"
                    />
                  </span>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ 5 · AI AUTOMATION HIGHLIGHT ════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="ai-heading" className="ai-reveal overflow-hidden">
        <div className="shell relative">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-10">
            <Reveal className="flex flex-col">
              <div className="relative min-h-52 overflow-hidden rounded-[var(--radius-lg)] shadow-e2 sm:min-h-60">
                <Image
                  src="/images/home/ai-business-leader.webp"
                  alt={home.ai.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-[62%_center]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col pt-7 sm:pt-8">
                <Marker>{home.ai.marker}</Marker>
                <h2 id="ai-heading" className="mt-5 max-w-[16ch] text-d3 text-text">
                  {home.ai.heading}{" "}
                  <span className="text-accent-ink">{home.ai.accent}</span>
                </h2>
                <p className="measure mt-6 text-lead text-text-2">
                  {home.ai.lead}
                </p>
                <p className="measure mt-5 text-text-3">
                  {home.ai.body}
                </p>
                <Button href="/ai-automation" variant="primary" size="lg" className="mt-8 self-start" arrow>
                  {home.ai.cta}
                </Button>
              </div>
            </Reveal>

            <div className="grid content-start gap-4">
              <Reveal kind="right" className="rounded-[var(--radius-lg)] border border-rule-dark bg-ink-950 p-4 shadow-e4 sm:p-6 lg:p-8">
                <BeforeAfterWorkflow tone="dark" copy={home.ai.workflow} />
              </Reveal>
              <Reveal kind="right" index={1}>
                <AnimatedAIGlobe copy={home.ai.globe} />
              </Reveal>
            </div>
          </div>

          <RevealGroup className="mt-5 grid gap-4 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4" as="ul">
            {AI_USE_CASES.map((u, i) => (
              <RevealItem key={u.title} as="li" className="h-full">
                <div className="group/ai-card flex h-full min-h-48 flex-col rounded-[var(--radius-md)] border border-rule-dark bg-ink-950 p-6 shadow-e2 [transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)_translateZ(0)] [transform-style:preserve-3d] transition-[border-color,box-shadow,transform] duration-500 [transition-timing-function:var(--ease-expo)] hover:[transform:perspective(1000px)_rotateX(3deg)_rotateY(-3deg)_translate3d(0,-5px,14px)] hover:border-accent/45 hover:shadow-e4">
                  <ServiceIcon name={u.icon} className="size-[1.125rem] text-signal" />
                  <h3 className="mt-6 text-[0.9375rem] leading-snug font-medium text-white">
                    {home.ai.cases[i].title}
                  </h3>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-ontext-3">{home.ai.cases[i].body}</p>
                </div>
              </RevealItem>
            ))}
            {/* Completes the grid rather than leaving a hole, and gives the
                last cell a job: the next step for anyone still reading. */}
            <RevealItem as="li">
              <Link
                href="/ai-automation#use-cases"
                className="group/uc flex h-full min-h-44 flex-col justify-between gap-4 rounded-[var(--radius-md)] border border-accent/35 bg-ink-900 p-5 shadow-e2 [transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)_translateZ(0)] [transform-style:preserve-3d] transition-[border-color,box-shadow,transform] duration-500 [transition-timing-function:var(--ease-expo)] hover:[transform:perspective(1000px)_rotateX(3deg)_rotateY(-3deg)_translate3d(0,-5px,14px)] hover:border-accent/60 hover:shadow-e4"
              >
                <ArrowUpRight
                  aria-hidden
                  className="size-[1.125rem] text-accent-bright transition-transform duration-300 [transition-timing-function:var(--ease-expo)] group-hover/uc:translate-x-0.5 group-hover/uc:-translate-y-0.5"
                />
                <span>
                  <span className="block text-[0.9375rem] leading-snug font-medium text-white">
                    {home.ai.moreHeading}
                  </span>
                  <span className="mt-2 block text-[0.8125rem] leading-relaxed text-ontext-3">
                    {home.ai.moreBody}
                  </span>
                </span>
              </Link>
            </RevealItem>
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ 6 · PROCESS ════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="process-heading" className="process-reveal">
        <div className="shell w-full">
          <div className="grid items-center gap-x-12 gap-y-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-x-16">
            <Reveal className="flex flex-col justify-center lg:pr-4">
              <h2 id="process-heading" className="max-w-[17ch] text-d3 text-text">
                {home.process.heading}{" "}
                <span className="text-accent-ink">{home.process.accent}</span>
              </h2>
              <p className="measure mt-5 text-text-2">
                {home.process.body}
              </p>
              <Button href="/process" variant="secondary" size="md" className="mt-7 w-full sm:w-auto" arrow>
                {home.process.cta}
              </Button>
            </Reveal>

            <Reveal kind="right" className="relative flex h-[min(25rem,68svh)] min-h-[20rem] flex-col overflow-hidden rounded-[var(--radius-lg)] border border-rule bg-paper-raised p-4 shadow-e2 sm:h-[29rem] sm:p-5 lg:h-[min(33rem,68svh)] lg:p-6">
              <div className="mb-3 flex shrink-0 items-center justify-between gap-4 border-b border-rule pb-3 font-mono text-[0.625rem] tracking-[0.12em] uppercase">
                <span className="text-text-4">{home.process.path}</span>
                <span className="inline-flex items-center gap-1.5 text-accent-ink">{home.process.scroll} <ArrowRight aria-hidden className="size-3 rotate-90" /></span>
              </div>
              <ProcessTimeline containedScroll className="min-h-0 flex-1" previewCopy={home.process} />
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-paper-raised to-transparent" />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ 7 · CASE STUDY PREVIEW ═════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="work-heading" className="selected-work-reveal !bg-transparent">
        <div className="shell w-full">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
              <h2 id="work-heading" className="max-w-[20ch] text-d3 text-text">
                {home.work.heading}{" "}
                <span className="text-accent-ink">{home.work.accent}</span>
              </h2>
              <Button href="/case-studies" variant="secondary" size="md" arrow>
                {home.work.cta}
              </Button>
            </div>
          </Reveal>

          <RevealGroup className="group/work mt-10 grid gap-6 pb-4 sm:mt-12 lg:grid-cols-3 lg:pb-0" as="ul">
            {CLIENT_CASES.map((c, i) => (
              <RevealItem key={c.slug} as="li" className="h-full transition-[opacity,transform] duration-500 [transition-timing-function:var(--ease-expo)] lg:group-hover/work:scale-[0.985] lg:group-hover/work:opacity-65 lg:hover:!scale-100 lg:hover:!opacity-100">
                <ClientCaseCard
                  study={{...c, name: caseNames[i], clientType: caseCards[i].clientType, industry: caseCards[i].industry, summary: caseCards[i].summary, results: [caseCards[i].result], coverAlt: caseCards[i].coverAlt, timeline: homeTimelines[i]}}
                  labels={home.work}
                  stackLabels={stackLabels[i]}
                  priority={i === 0}
                  compact
                  className="h-full [transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)] [transform-style:preserve-3d] hover:[transform:perspective(1200px)_rotateX(2deg)_rotateY(-2deg)_translate3d(0,-5px,16px)]"
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ 8 · CLIENT OUTCOMES ════════════════════════════════════════════ */}
      {/* ═══ 9 · WHY BARAKODE ═══════════════════════════════════════════════ */}
      <Section
        surface="ink-deep"
        aria-labelledby="why-heading"
        className="why-reveal overflow-hidden bg-[url('/images/home/glass-company-headquarters.webp')] bg-cover bg-center bg-no-repeat"
      >
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,9,16,0.96)_0%,rgba(5,9,16,0.87)_43%,rgba(5,9,16,0.58)_100%)]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-ink-950/45" />
        <div className="shell relative flex items-center">
          <div className="grid w-full gap-x-12 gap-y-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-center">
            <Reveal>
              <Marker tone="dark">{home.why.marker}</Marker>
              <h2 id="why-heading" className="mt-5 max-w-[16ch] text-d3 text-white">
                {home.why.heading}{" "}
                <span className="text-accent-bright">{home.why.accent}</span>
              </h2>
              <p className="measure mt-7 text-ontext-2">
                {home.why.body}
              </p>
            </Reveal>

            <RevealGroup as="dl" className="grid gap-3">
              {VALUE_PROPS.map((v, i) => (
                <RevealItem key={v.title} className="h-full">
                  <div
                    className="grid h-full gap-x-6 gap-y-2 rounded-[var(--radius-md)] border border-white/12 border-b-2 border-b-accent/65 bg-black/48 p-5 shadow-dark-e1 backdrop-blur-md transition-[border-color,background-color,box-shadow,transform] duration-500 [transform:perspective(1000px)_translateZ(0)] [transition-timing-function:var(--ease-expo)] hover:[transform:perspective(1000px)_translate3d(0,-3px,12px)] hover:border-accent/40 hover:border-b-accent hover:bg-black/62 hover:shadow-dark-e2 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)]"
                  >
                    <dt className="flex items-baseline gap-3 font-display text-[1.0625rem] font-semibold text-white">
                      <span
                        aria-hidden
                        className="font-mono text-[0.6875rem] font-normal text-signal tabular-nums"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {home.why.values[i].title}
                    </dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-ontext-3">{home.why.values[i].body}</dd>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* ═══ 10 · ENGAGEMENT MODELS PREVIEW ═════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="models-heading" className="models-reveal">
        <div className="shell">
          <Reveal>
            <h2 id="models-heading" className="max-w-[22ch] font-display text-[clamp(1.5rem,1.15rem+1.2vw,2.25rem)] leading-tight font-semibold text-text">
              {home.models.heading} <span className="text-accent-ink">{home.models.accent}</span>
            </h2>
            <p className="mt-4 max-w-[46rem] text-[0.9375rem] leading-relaxed text-text-2 sm:text-base">
              {home.models.body}
            </p>
          </Reveal>

          <RevealGroup className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" as="ul">
            {ENGAGEMENT_MODELS.map((m, i) => (
              <RevealItem key={m.slug} as="li" className="h-full">
                <Link
                  href={`/engagement-models#${m.slug}`}
                  className="group/em relative flex h-full min-h-64 flex-col rounded-[var(--radius-md)] border border-rule bg-paper-raised p-6 shadow-e1 transition-[background-color,border-color,box-shadow,color] duration-500 [transition-timing-function:var(--ease-expo)] hover:border-ink-950 hover:bg-ink-950 hover:shadow-e3"
                >
                  <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-[1.0625rem] leading-snug font-semibold text-text transition-colors duration-500 group-hover/em:text-white">
                    {home.models.cards[i].name}
                  </h3>
                    <ArrowRight aria-hidden className="mt-0.5 size-4 shrink-0 text-accent opacity-55 transition-[color,opacity,transform] duration-500 group-hover/em:translate-x-1 group-hover/em:text-accent-bright group-hover/em:opacity-100" />
                  </div>
                  <p className="mt-4 flex-1 text-[0.8125rem] leading-relaxed text-text-3 transition-colors duration-500 group-hover/em:text-ontext-2">
                    {home.models.cards[i].bestFor}
                  </p>
                  <span className="mt-6 border-t border-rule pt-4 font-mono text-[0.6875rem] tracking-[0.06em] text-text-4 transition-[border-color,color] duration-500 group-hover/em:border-white/15 group-hover/em:text-ontext-3">
                    {home.models.cards[i].timeline}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-10">
            <Button href="/engagement-models" variant="secondary" size="md" arrow>
              {home.models.cta}
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* ═══ 11 · FAQ PREVIEW ═══════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="faq-heading" className="faq-reveal">
        <div className="shell w-full">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-5 border-b border-rule pb-6 sm:flex-row sm:items-end">
              <div>
                <Marker>{home.faq.marker}</Marker>
                <h2 id="faq-heading" className="mt-4 max-w-[18ch] text-d3 text-text">
                  {home.faq.heading} <span className="text-accent-ink">{home.faq.accent}</span>
                </h2>
              </div>
              <Button href="/faq" variant="secondary" size="md" arrow>
                {home.faq.cta}
              </Button>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-x-10 gap-y-2 lg:grid-cols-2">
            <Reveal kind="left">
              <Accordion items={faqItems.filter((_, i) => i % 2 === 0)} compact />
            </Reveal>
            <Reveal kind="right">
              <Accordion items={faqItems.filter((_, i) => i % 2 === 1)} compact />
            </Reveal>
          </div>
        </div>
      </Section>

      <JsonLd data={faqSchema(faqItems)} />
    </>
  );
}
