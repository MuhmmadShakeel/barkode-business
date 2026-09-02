import Image from "next/image";
import { AlertTriangle, ArrowRight, Check, ShieldCheck } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { AiWorkflow3D } from "@/components/sections/AiWorkflow3D";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Glow, Registration, SchematicGround, TraceRule } from "@/components/ui/Schematic";
import { Marker, Section, SectionHead } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

import {
  AI_AGENTS,
  AI_FAQS,
  AI_PROBLEMS,
  AI_PROCESS,
  AI_USE_CASES,
  DOCUMENT_TYPES,
  DO_NOT_AUTOMATE,
} from "@/lib/ai-automation";
import { JsonLd, breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Automation & AI Integration",
  description:
    "Practical AI automation for real business workflows. Barakode builds AI assistants, RAG chatbots, document processing, CRM automation, and reporting automation — with human review, data privacy, and clear limits.",
  path: "/ai-automation",
});

export default function AiAutomationPage() {
  return (
    <div className="ai-service-page">
      <PageHero
        marker="AI Automation & AI Integration"
        heading="Practical AI automation for"
        accent="real business workflows"
        trail="."
        body="Barakode helps businesses use AI to automate manual tasks, connect internal knowledge, process documents, support customers, improve reporting, and build practical AI features into existing products."
        primary={{ label: "Book a Free Project Discovery Call", mobileLabel: "Free AI Discovery Call", href: "/contact?intent=ai-automation" }}
        secondary={{ label: "Explore Use Cases", href: "#use-cases" }}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "AI Automation", path: "/ai-automation" },
        ]}
        showMarker={false}
        minimalBackdrop
        headingClassName="ai-hero-heading"
        className="ai-service-hero"
        backgroundImage={{
          src: "/images/services/ai-automation-hero-v2.webp",
          alt: "A business team collaborating around practical AI automation workflows",
        }}
        below={
          <RevealGroup as="ol" className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Business input", note: "Forms, messages, files and events" },
              { label: "AI workflow", note: "Classify, retrieve, extract and draft" },
              { label: "Human review", note: "A clear approval gate where needed" },
              { label: "Business output", note: "Update systems and deliver the result" },
            ].map((item, index) => (
              <RevealItem key={item.label} as="li" index={index} className="h-full">
                <div className="flex h-full items-start gap-3 rounded-[var(--radius-sm)] border border-white/12 bg-white/[0.045] p-4 text-left backdrop-blur-sm transition-[border-color,background-color,transform] duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-white/18 bg-black/25 font-mono text-[0.625rem] text-white/65 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong className="block text-sm font-medium text-white">{item.label}</strong>
                    <span className="mt-1 block text-xs leading-relaxed text-ontext-3">{item.note}</span>
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        }
      />

      {/* ═══ WHAT AI AUTOMATION MEANS ═══════════════════════════════════════ */}
      <section
        aria-labelledby="means-heading"
        className="border-y border-rule bg-white"
      >
        <div className="shell py-12 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-24">
            <Reveal className="lg:pr-6">
              <Marker>Human-led automation</Marker>
              <h2 id="means-heading" className="mt-5 max-w-[17ch] text-d2 text-text">
                AI automation is not about replacing people. It is about{" "}
                <span className="text-accent-ink">reducing repetitive work.</span>
              </h2>
            </Reveal>

            <Reveal kind="right" className="flex flex-col justify-center lg:border-l lg:border-rule lg:pl-12 xl:pl-16">
              <p className="max-w-2xl text-lead text-text-2">
                We combine AI models, business rules, integrations, and software workflows to handle
                repetitive or information-heavy tasks that normally consume valuable human time.
              </p>
              <p className="mt-4 max-w-2xl text-text-3">
                The result is a faster, more consistent team—without losing judgment, accountability,
                or human control.
              </p>

              <div className="mt-7 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule bg-rule sm:grid-cols-3">
                {[
                  ["01", "Reduce", "Manual work"],
                  ["02", "Connect", "Business systems"],
                  ["03", "Keep", "Human oversight"],
                ].map(([number, action, outcome]) => (
                  <div key={number} className="bg-paper-raised p-4 transition-colors duration-300 hover:bg-accent-soft sm:p-5">
                    <span className="font-mono text-[.625rem] text-accent-ink">{number}</span>
                    <p className="mt-4 text-sm font-semibold text-text">{action}</p>
                    <p className="mt-1 text-xs text-text-3">{outcome}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Section surface="ink-deep" tight aria-labelledby="ai-3d-heading" className="service-panel ai-3d-section">
        <div className="shell">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)]">
            <Reveal>
              <h2 id="ai-3d-heading" className="max-w-[13ch] text-d2 text-white">
                One connected workflow, <span className="text-accent-bright">built around control.</span>
              </h2>
              <p className="measure mt-5 text-ontext-2">
                Business inputs move through a defined AI layer, pause for human review where it matters, and finish as a useful system update or business output.
              </p>
            </Reveal>
            <Reveal kind="right">
              <AiWorkflow3D />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ PROBLEMS AI CAN SOLVE ══════════════════════════════════════════ */}
      <Section
        surface="paper"
        flush
        aria-labelledby="probs-heading"
        className="overflow-hidden border-t border-rule bg-[linear-gradient(180deg,var(--color-paper-sunken)_0%,var(--color-paper)_22rem)]"
      >
        <SchematicGround grid={34} nodes={false} mask="radial" className="opacity-45" />
        <div className="shell relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-end gap-7 border-b border-rule pb-9 lg:grid-cols-[minmax(0,.9fr)_minmax(22rem,.62fr)] lg:gap-16 lg:pb-11">
            <Reveal>
              <Marker>Automation opportunities</Marker>
              <h2 id="probs-heading" className="mt-5 max-w-[18ch] text-d2 text-text">
                Problems AI can <span className="text-accent-ink">help solve.</span>
              </h2>
            </Reveal>
            <Reveal kind="right">
              <p className="max-w-xl text-lead text-text-2 lg:ml-auto">
                If your team spends hours each week on any of these tasks, there is usually a
                practical workflow worth automating.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-3 lg:ml-auto">
                We start with the operational bottleneck—not the technology—and keep people in
                control wherever judgment matters.
              </p>
            </Reveal>
          </div>

          <RevealGroup as="ul" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {AI_PROBLEMS.map((problem, index) => (
              <RevealItem key={problem} as="li" index={index} className="h-full">
                <div className="group/problem relative flex h-full min-h-32 flex-col justify-between overflow-hidden rounded-[var(--radius-sm)] border border-rule bg-paper-raised p-5 shadow-e1 transition-[border-color,box-shadow,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-1 hover:border-accent/35 hover:shadow-e2">
                  <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/55 to-transparent opacity-0 transition-opacity duration-300 group-hover/problem:opacity-100" />
                  <span className="flex items-center justify-between font-mono text-[.625rem] tracking-[.12em] text-text-4 uppercase">
                    Signal {String(index + 1).padStart(2, "0")}
                    <span className="size-1.5 rounded-full bg-accent/70 shadow-[0_0_0_4px_rgba(200,146,42,.09)]" />
                  </span>
                  <span className="mt-8 max-w-[18ch] text-[.9375rem] leading-snug font-medium text-text">
                    {problem}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

        </div>
      </Section>

      {/* ═══ USE CASES ══════════════════════════════════════════════════════ */}
      <Section surface="ink-deep" tight id="use-cases" aria-labelledby="uc-heading" className="service-panel service-panel--visual service-panel--centered">
        <Image src="/images/services/ai-automation.webp" alt="Structured data and documents flowing through an intelligent automation system" fill sizes="100vw" className="service-panel__image object-cover grayscale" />
        <div className="absolute inset-0 bg-ink-950/88" />
        <div className="shell relative">
          <Reveal>
            <SectionHead
              id="uc-heading"
              tone="dark"
              lead="What we"
              accent="actually build"
              intro="Seven patterns cover most of the AI work businesses need. Each one connects to the tools you already run."
            />
          </Reveal>

          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" as="ul">
            {AI_USE_CASES.map((u, i) => (
              <RevealItem
                key={u.title}
                as="li"
                className={i === AI_USE_CASES.length - 1 ? "h-full md:col-span-2 lg:col-span-1" : "h-full"}
              >
                <article className="relative flex h-full flex-col rounded-[var(--radius-lg)] border border-white/15 bg-black/35 p-7 text-left shadow-dark-e2 backdrop-blur-md transition-[border-color,box-shadow,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-1 hover:border-white/30">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-[var(--radius-sm)] border border-white/15 bg-white/8 text-white">
                      <ServiceIcon name={u.icon} className="size-5" />
                    </span>
                    <span className="font-mono text-[0.6875rem] text-ontext-4 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.125rem] leading-snug font-semibold text-white">
                    {u.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ontext-2">{u.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ AGENTS + RAG ═══════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="agents-heading" className="service-panel service-panel--centered border-t border-rule">
        <div className="shell">
          <div className="grid gap-x-14 gap-y-14 lg:grid-cols-2">
            <Reveal>
              <h2 id="agents-heading" className="max-w-[18ch] text-d2 text-text">
                AI agents that support{" "}
                <span className="text-accent-ink">defined business tasks.</span>
              </h2>
              <p className="measure mt-6 text-text-2">
                An AI agent is a workflow assistant that can understand a task, use available tools,
                follow defined rules, and complete steps with human oversight where needed.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {AI_AGENTS.map((a) => (
                  <li
                    key={a}
                    className="rounded-[var(--radius-xs)] border border-rule bg-paper-sunken px-3 py-1.5 text-sm text-text-2"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal kind="right">
              <h2 className="max-w-[18ch] text-d2 text-text">
                AI assistants connected to{" "}
                <span className="text-accent-ink">your company knowledge.</span>
              </h2>
              <p className="measure mt-6 text-text-2">
                RAG allows an AI assistant to answer based on selected business knowledge instead of
                only relying on general model knowledge.
              </p>
              <div className="mt-8 rounded-[var(--radius-md)] border border-rule bg-paper-sunken p-6">
                <p className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                  Grounded in
                </p>
                <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {[
                    "Company FAQs",
                    "Product documentation",
                    "Training manuals",
                    "Policies",
                    "Client documents",
                    "Internal SOPs",
                  ].map((k) => (
                    <li key={k} className="flex items-start gap-2.5 text-sm text-text-2">
                      <Check
                        aria-hidden
                        className="mt-[0.1875rem] size-3.5 shrink-0 text-accent"
                        strokeWidth={2.4}
                      />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ DOCUMENT PROCESSING ════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="doc-heading" className="service-panel border-t border-rule">
        <div className="shell">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:gap-16 xl:gap-20">
            <Reveal className="lg:pr-4">
              <Marker>Document intelligence</Marker>
              <h2 id="doc-heading" className="mt-5 max-w-[17ch] text-d2 text-text">
                Turn document-heavy work into{" "}
                <span className="text-accent-ink">structured workflows.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lead text-text-2">
                Extract the information your team needs, apply clear validation rules, and move
                approved data into the systems where work continues.
              </p>
              <div className="mt-8 flex items-center gap-3 border-t border-rule pt-5 font-mono text-[.6875rem] tracking-[.12em] text-text-4 uppercase">
                <span>Input</span>
                <ArrowRight aria-hidden className="size-3.5 text-accent" />
                <span>Extract</span>
                <ArrowRight aria-hidden className="size-3.5 text-accent" />
                <span>Structure</span>
              </div>
            </Reveal>

            <Reveal kind="right" className="overflow-hidden rounded-[var(--radius-lg)] border border-rule bg-paper-raised shadow-e3">
              <div className="relative aspect-[16/8.5] overflow-hidden bg-ink-950">
                <Image
                  src="/images/services/ai-automation.webp"
                  alt="Documents being transformed into structured data and business outputs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-expo)] hover:scale-[1.025]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-4 flex items-center justify-between gap-4 text-white sm:inset-x-6 sm:bottom-5">
                  <span className="font-mono text-[.625rem] tracking-[.14em] text-signal uppercase">Controlled processing</span>
                  <span className="hidden text-xs text-white/70 sm:block">Human review where confidence matters</span>
                </div>
              </div>

              <ul className="grid gap-px border-t border-rule bg-rule sm:grid-cols-2">
                {DOCUMENT_TYPES.map((d) => (
                  <li
                    key={d}
                    className="group/doc flex min-h-14 items-center gap-3 bg-white px-4 py-3 text-sm text-text-2 transition-colors duration-300 hover:bg-accent-soft sm:px-5"
                  >
                    <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent transition-transform duration-300 group-hover/doc:scale-150" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ CRM & REPORTING ════════════════════════════════════════════════ */}
      {/* ═══ WHAT NOT TO AUTOMATE + RESPONSIBLE AI ══════════════════════════ */}
      <Section surface="ink-deep" tight aria-labelledby="limits-heading" className="service-panel service-panel--centered">
        <div className="shell relative">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
            <Reveal>
              <h2 id="limits-heading" className="max-w-[16ch] text-d2 text-white">
                Not every process <span className="text-accent-bright">should be automated.</span>
              </h2>
              <p className="measure mt-7 text-ontext-2">
                We will tell you when AI is the wrong answer. These are the categories we do not
                automate blindly, regardless of what is technically possible.
              </p>

              <ul className="mt-9 flex flex-col gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule-dark bg-rule-dark">
                {DO_NOT_AUTOMATE.map((d) => (
                  <li key={d} className="flex items-start gap-3 bg-ink-900 px-5 py-3.5">
                    <AlertTriangle
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-signal"
                      strokeWidth={1.8}
                    />
                    <span className="text-[0.9375rem] text-ontext-2">{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal kind="right" className="lg:pt-16">
              <div className="relative rounded-[var(--radius-lg)] border border-signal/25 bg-signal/[0.05] p-7 sm:p-8">
                <Registration tone="dark" size={18} />
                <ShieldCheck aria-hidden className="size-7 text-signal" strokeWidth={1.5} />
                <h3 className="mt-5 text-d3 text-white">
                  AI should be useful, controlled, and responsible.
                </h3>
                <p className="measure mt-5 text-ontext-2">
                  AI systems should be designed with clear limits, human oversight, data privacy,
                  permission controls, review workflows, and fallback options.
                </p>
                <p className="measure mt-4 text-ontext-3">
                  Barakode presents AI as a tool for improving operations, not replacing all human
                  decision-making.
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Defined limits",
                    "Human oversight",
                    "Data privacy",
                    "Permission controls",
                    "Review workflows",
                    "Fallback options",
                  ].map((t) => (
                    <li
                      key={t}
                      className="rounded-[var(--radius-xs)] border border-signal/25 px-2.5 py-1 font-mono text-[0.6875rem] text-signal"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ PROCESS ════════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="aiproc-heading" className="service-panel service-panel--centered">
        <div className="shell">
          <Reveal>
            <SectionHead
              id="aiproc-heading"
              lead="From opportunity to"
              accent="production"
              intro="Eight steps. The prototype runs on your real inputs, not a demo dataset."
            />
          </Reveal>

          <RevealGroup as="ol" className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {AI_PROCESS.map((p, i) => (
              <RevealItem key={p.step} as="div">
                <div className="flex h-full flex-col gap-3 bg-paper-raised p-6">
                  <TraceRule className="w-9" />
                  <span className="font-mono text-[0.6875rem] text-accent-ink tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[1rem] leading-snug font-semibold text-text">
                    {p.step}
                  </h3>
                  <p className="text-[0.8125rem] leading-relaxed text-text-3">{p.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ STACK ══════════════════════════════════════════════════════════ */}
      {/* ═══ FAQ ════════════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="aifaq-heading" className="service-panel service-panel--centered border-t border-rule">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <h2 id="aifaq-heading" className="max-w-[14ch] text-d2 text-text">
                About <span className="text-accent-ink">AI automation.</span>
              </h2>
              <Button href="/faq" variant="secondary" size="md" className="mt-8" arrow>
                All FAQs
              </Button>
            </Reveal>
            <Reveal kind="right">
              <Accordion items={AI_FAQS} defaultOpen={0} />
            </Reveal>
          </div>
        </div>
      </Section>

      <JsonLd
        data={[
          serviceSchema({
            name: "AI Automation & AI Integration",
            description:
              "Practical AI automation for real business workflows — AI assistants, RAG chatbots, document processing, CRM automation, and reporting automation with human review.",
            path: "/ai-automation",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "AI Automation", path: "/ai-automation" },
          ]),
          faqSchema(AI_FAQS),
        ]}
      />
    </div>
  );
}
