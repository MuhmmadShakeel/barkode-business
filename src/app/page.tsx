import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Hero } from "@/components/sections/Hero";
import { FinalCta } from "@/components/sections/FinalCta";
import { TechStack } from "@/components/sections/TechStack";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { BeforeAfterWorkflow } from "@/components/sections/WorkflowDiagram";
import { AnimatedAIGlobe } from "@/components/sections/AnimatedAIGlobe";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { ClientCaseCard } from "@/components/ui/CaseCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Registration, SchematicGround, TraceRule } from "@/components/ui/Schematic";
import { Marker, Section, SectionHead } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

import { CLIENT_CASES } from "@/lib/case-studies";
import {
  ENGAGEMENT_MODELS,
  FAQ_PREVIEW,
  PROBLEM_CARDS,
  TRUST_CATEGORIES,
  VALUE_PROPS,
} from "@/lib/content";
import { AI_USE_CASES } from "@/lib/ai-automation";
import { SERVICES } from "@/lib/services";
import { CTA } from "@/lib/site";
import { JsonLd, buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Barakode Technologies — Product Engineering & AI Automation Partner",
  description:
    "Barakode Technologies helps startups and growing businesses build scalable web apps, mobile apps, SaaS platforms, internal business systems, and AI-powered workflows.",
  path: "/",
});

function ProblemCard({ groupIndex }: { groupIndex: number }) {
  const items = PROBLEM_CARDS.slice(groupIndex * 2, groupIndex * 2 + 2);

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

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ═══ 2 · TRUST SIGNAL ═══════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="trust-heading" className="trust-reveal overflow-hidden">
        <div className="shell relative">
          <div className="grid items-stretch gap-4 sm:gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-6">
            <Reveal kind="left" className="relative min-h-[22rem] overflow-hidden rounded-[var(--radius-lg)] border border-rule-dark bg-ink-950 shadow-e4 sm:min-h-[30rem] lg:min-h-[34rem]">
              <Image
                src="/images/home/trusted-product-strategist.png"
                alt="Product strategist working with confidence and focus"
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-[66%_center]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/8 to-transparent" />
              <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-white/8" />
            </Reveal>

            <Reveal kind="right" className="flex flex-col justify-center rounded-[var(--radius-lg)] border border-rule-dark bg-ink-950 p-6 shadow-e3 sm:p-9 lg:p-12">
              <Marker tone="dark">What we are trusted with</Marker>
              <h2 id="trust-heading" className="mt-5 max-w-[18ch] text-d3 text-white">
                Trusted for product builds, automation, and{" "}
                <span className="text-accent-bright">scalable software delivery.</span>
              </h2>
              <p className="measure mt-6 text-ontext-2">
                We publish proof, not adjectives. Below are the categories of work we take on. Named
                clients, logos and quoted results appear here only once they are verified and
                approved for publication.
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
                    {c.label}
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
      <Section surface="paper" tight aria-labelledby="problem-heading" className="problem-reveal flex min-h-[100svh] items-center">
        <div className="shell relative w-full">
          <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="grid h-full gap-5 lg:grid-rows-[auto_1fr_auto]">
              <Reveal>
              <h2 id="problem-heading" className="max-w-[18ch] text-d3 text-text">
                Your business does not need more random software. It needs{" "}
                <span className="text-accent-ink">the right system.</span>
              </h2>
              <p className="measure mt-7 text-lead text-text-2">
                Many companies start with an idea, a manual process, or a disconnected set of tools.
                The challenge is turning that into software that is clear, usable, scalable, and
                reliable.
              </p>
              </Reveal>

              <Reveal className="h-full" index={1}>
                <ProblemCard groupIndex={0} />
              </Reveal>

              <Reveal index={2}>
                <p className="measure text-text-3">
                  That is where Barakode helps. We work with you to understand the business problem,
                  plan the product, design the user experience, build the system, integrate the right
                  technology, and support it after launch.
                </p>
              </Reveal>
            </div>

            <RevealGroup className="grid h-full grid-rows-2 gap-5" as="ul">
              {[1, 2].map((groupIndex) => (
                <RevealItem key={groupIndex} as="li" index={groupIndex} className="h-full">
                  <ProblemCard groupIndex={groupIndex} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* ═══ 4 · SERVICES OVERVIEW ══════════════════════════════════════════ */}
      <Section surface="ink" aria-labelledby="services-heading" className="services-reveal min-h-[100svh]">
        <div className="shell relative">
          <Reveal>
            <SectionHead
              id="services-heading"
              marker="Services"
              lead="Product engineering services for"
              accent="modern businesses"
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
                      {s.title}
                    </Link>
                  </h3>

                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-text-2">
                    {s.summary}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-ink">
                    {s.cta}
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
      <Section surface="paper" aria-labelledby="ai-heading" className="ai-reveal min-h-[100svh] overflow-hidden">
        <div className="shell relative">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-10">
            <Reveal className="flex flex-col">
              <div className="relative min-h-52 overflow-hidden rounded-[var(--radius-lg)] shadow-e2 sm:min-h-60">
                <Image
                  src="/images/home/ai-business-leader.png"
                  alt="Business leader reviewing an AI-enabled workflow"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-[62%_center]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
              <div className="flex flex-col pt-7 sm:pt-8">
                <Marker>AI automation</Marker>
                <h2 id="ai-heading" className="mt-5 max-w-[16ch] text-d3 text-text">
                  AI automation that fits{" "}
                  <span className="text-accent-ink">your business workflow.</span>
                </h2>
                <p className="measure mt-6 text-lead text-text-2">
                  AI should not be added just because it is trending. It should solve a clear business
                  problem.
                </p>
                <p className="measure mt-5 text-text-3">
                  Barakode helps companies identify where AI can reduce manual work, improve response
                  times, organize knowledge, support customers, process documents, and connect
                  business tools. We design AI workflows with human review, data privacy, and
                  practical implementation in mind.
                </p>
                <Button href="/ai-automation" variant="primary" size="lg" className="mt-8 self-start" arrow>
                  Explore AI Automation
                </Button>
              </div>
            </Reveal>

            <div className="grid content-start gap-4">
              <Reveal kind="right" className="rounded-[var(--radius-lg)] border border-rule-dark bg-ink-950 p-4 shadow-e4 sm:p-6 lg:p-8">
                <BeforeAfterWorkflow tone="dark" />
              </Reveal>
              <Reveal kind="right" index={1}>
                <AnimatedAIGlobe />
              </Reveal>
            </div>
          </div>

          <RevealGroup className="mt-5 grid gap-4 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4" as="ul">
            {AI_USE_CASES.map((u) => (
              <RevealItem key={u.title} as="li" className="h-full">
                <div className="group/ai-card flex h-full min-h-48 flex-col rounded-[var(--radius-md)] border border-rule-dark bg-ink-950 p-6 shadow-e2 [transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)_translateZ(0)] [transform-style:preserve-3d] transition-[border-color,box-shadow,transform] duration-500 [transition-timing-function:var(--ease-expo)] hover:[transform:perspective(1000px)_rotateX(3deg)_rotateY(-3deg)_translate3d(0,-5px,14px)] hover:border-accent/45 hover:shadow-e4">
                  <ServiceIcon name={u.icon} className="size-[1.125rem] text-signal" />
                  <h3 className="mt-6 text-[0.9375rem] leading-snug font-medium text-white">
                    {u.title}
                  </h3>
                  <p className="mt-3 text-[0.8125rem] leading-relaxed text-ontext-3">{u.body}</p>
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
                    See how each one works
                  </span>
                  <span className="mt-2 block text-[0.8125rem] leading-relaxed text-ontext-3">
                    Full workflows, the human review gates, and what we will not automate.
                  </span>
                </span>
              </Link>
            </RevealItem>
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ 6 · PROCESS ════════════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="process-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <Marker>Process</Marker>
              <h2 id="process-heading" className="mt-5 max-w-[15ch] text-d2 text-text">
                A clear process from first idea to{" "}
                <span className="text-accent-ink">working product.</span>
              </h2>
              <p className="measure mt-6 text-text-2">
                Good software does not happen by accident. We follow a structured product
                engineering process that helps reduce confusion, manage scope, improve
                communication, and deliver software that is easier to build, test, launch, and
                maintain.
              </p>
              <Button href="/process" variant="secondary" size="md" className="mt-8" arrow>
                See Our Process
              </Button>
            </Reveal>

            <Reveal kind="right">
              <ProcessTimeline />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ 7 · CASE STUDY PREVIEW ═════════════════════════════════════════ */}
      <Section surface="sunken" aria-labelledby="work-heading">
        <div className="shell">
          <Reveal>
            <div className="grid gap-x-14 gap-y-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end">
              <div>
                <Marker>Selected work</Marker>
                <h2 id="work-heading" className="mt-5 max-w-[17ch] text-d2 text-text">
                  Selected work with{" "}
                  <span className="text-accent-ink">real project context.</span>
                </h2>
              </div>
              <div>
                <p className="measure text-text-2">
                  Every case study explains what was built, why it mattered, what Barakode
                  delivered, which technologies were used, and what changed for the business. No
                  fake numbers. No inflated claims. Only proof that can be verified.
                </p>
                <Button href="/case-studies" variant="secondary" size="md" className="mt-7" arrow>
                  View Case Studies
                </Button>
              </div>
            </div>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3" as="ul">
            {CLIENT_CASES.map((c, i) => (
              <RevealItem key={c.slug} as="li" className="h-full">
                <ClientCaseCard study={c} priority={i === 0} className="h-full" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ 8 · TECHNOLOGIES ═══════════════════════════════════════════════ */}
      <TechStack
        surface="paper"
        intro="We choose technology based on product goals, user needs, scalability, maintainability, integrations, team requirements, and long-term support."
      />

      {/* ═══ 9 · WHY BARAKODE ═══════════════════════════════════════════════ */}
      <Section surface="ink" aria-labelledby="why-heading">
        <SchematicGround grid={38} nodes={152} mask="radial" />
        <div className="shell relative">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <Reveal>
              <Marker tone="dark">Why Barakode</Marker>
              <h2 id="why-heading" className="mt-5 max-w-[14ch] text-d2 text-white">
                Built for teams that need{" "}
                <span className="text-accent-bright">more than code.</span>
              </h2>
              <p className="measure mt-7 text-ontext-2">
                Barakode is built for clients who need more than developers. We bring product
                thinking, technical planning, UI/UX clarity, full-stack execution, AI automation
                capability, and ongoing support into one structured delivery process.
              </p>
            </Reveal>

            <RevealGroup as="dl" className="flex flex-col">
              {VALUE_PROPS.map((v, i) => (
                <RevealItem key={v.title}>
                  <div
                    className={`grid gap-x-6 gap-y-2 border-b border-rule-dark py-6 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] ${i === 0 ? "border-t pt-0 sm:pt-6" : ""}`}
                  >
                    <dt className="flex items-baseline gap-3 font-display text-[1.0625rem] font-semibold text-white">
                      <span
                        aria-hidden
                        className="font-mono text-[0.6875rem] font-normal text-signal tabular-nums"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {v.title}
                    </dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-ontext-3">{v.body}</dd>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* ═══ 10 · ENGAGEMENT MODELS PREVIEW ═════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="models-heading">
        <div className="shell">
          <Reveal>
            <SectionHead
              id="models-heading"
              marker="Engagement models"
              lead="Flexible ways to"
              accent="work with Barakode"
              intro="Every software project has a different level of complexity. Start with the right level of planning, development, automation, or long-term support."
            />
          </Reveal>

          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" as="ul">
            {ENGAGEMENT_MODELS.map((m) => (
              <RevealItem key={m.slug} as="li" className="h-full">
                <Link
                  href={`/engagement-models#${m.slug}`}
                  className="group/em relative flex h-full flex-col rounded-[var(--radius-md)] border border-rule bg-paper-raised p-6 shadow-e1 transition-[border-color,box-shadow,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-1 hover:border-accent/35 hover:shadow-e2"
                >
                  <Registration />
                  <h3 className="font-display text-[1.0625rem] leading-snug font-semibold text-text">
                    {m.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.8125rem] leading-relaxed text-text-3">
                    {m.bestFor}
                  </p>
                  <span className="mt-5 font-mono text-[0.6875rem] tracking-[0.06em] text-text-4">
                    {m.timeline}
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-10">
            <Button href="/engagement-models" variant="secondary" size="md" arrow>
              Find the Right Engagement Model
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* ═══ 11 · FAQ PREVIEW ═══════════════════════════════════════════════ */}
      <Section surface="sunken" aria-labelledby="faq-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <Marker>Common questions</Marker>
              <h2 id="faq-heading" className="mt-5 max-w-[14ch] text-d2 text-text">
                Answers before <span className="text-accent-ink">you commit.</span>
              </h2>
              <p className="measure mt-6 text-text-2">
                The questions founders and operations leads ask us most often, answered plainly.
              </p>
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

      {/* ═══ 12 · FINAL CTA ═════════════════════════════════════════════════ */}
      <FinalCta
        marker="Start here"
        heading="Ready to build or improve your"
        accent="software product?"
        body="Tell us what you are trying to build, automate, or scale. We will help you identify the right technical direction and next steps."
        primary={CTA.primary}
        secondary={CTA.supporting}
      />

      <JsonLd data={faqSchema(FAQ_PREVIEW)} />
    </>
  );
}
