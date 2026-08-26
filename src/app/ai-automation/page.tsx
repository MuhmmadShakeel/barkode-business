import { AlertTriangle, ArrowRight, Check, ShieldCheck, X } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { TechStack } from "@/components/sections/TechStack";
import { BeforeAfterWorkflow, WorkflowDiagram } from "@/components/sections/WorkflowDiagram";
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
  AI_WORKFLOWS,
  CRM_USE_CASES,
  DOCUMENT_TYPES,
  DO_NOT_AUTOMATE,
  REPORTING_USE_CASES,
  SUPPORT_AUTOMATABLE,
  SUPPORT_HUMAN_LED,
} from "@/lib/ai-automation";
import { stackFor } from "@/lib/services";
import { JsonLd, breadcrumbSchema, buildMetadata, faqSchema, serviceSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Automation & AI Integration",
  description:
    "Practical AI automation for real business workflows. Barakode builds AI assistants, RAG chatbots, document processing, CRM automation, and reporting automation — with human review, data privacy, and clear limits.",
  path: "/ai-automation",
});

export default function AiAutomationPage() {
  return (
    <>
      <PageHero
        marker="AI Automation & AI Integration"
        heading="Practical AI automation for"
        accent="real business workflows"
        trail="."
        body="Barakode helps businesses use AI to automate manual tasks, connect internal knowledge, process documents, support customers, improve reporting, and build practical AI features into existing products."
        primary={{ label: "Book an AI Automation Call", href: "/contact?intent=ai-automation" }}
        secondary={{ label: "Explore Use Cases", href: "#use-cases" }}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "AI Automation", path: "/ai-automation" },
        ]}
        aside={
          <div className="rounded-[var(--radius-lg)] border border-white/12 bg-ink-850/80 p-5 shadow-dark-e3 backdrop-blur-xl sm:p-6">
            <p className="font-mono text-marker font-medium tracking-[0.16em] text-signal uppercase">
              The shape of every workflow we build
            </p>
            <ol className="mt-6 space-y-0">
              {[
                { label: "Business input", note: "a form, a message, a file, an event" },
                { label: "AI workflow layer", note: "classify, retrieve, extract, draft" },
                { label: "Human review", note: "the gate, where it matters", gate: true },
                { label: "System update", note: "CRM, database, dashboard, ticket" },
                { label: "Business output", note: "the thing a person actually needed" },
              ].map((s, i, arr) => (
                <li key={s.label} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute top-8 bottom-0 left-[0.9375rem] w-px bg-gradient-to-b from-accent-bright/45 to-signal/25"
                    />
                  )}
                  <span
                    aria-hidden
                    className={
                      s.gate
                        ? "relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-signal/50 bg-signal/12 font-mono text-[0.625rem] text-signal tabular-nums"
                        : "relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-white/14 bg-ink-800 font-mono text-[0.625rem] text-ontext-3 tabular-nums"
                    }
                  >
                    {i + 1}
                  </span>
                  <span className="min-w-0 pt-0.5">
                    <span
                      className={
                        s.gate
                          ? "block text-[0.9375rem] leading-tight font-medium text-signal"
                          : "block text-[0.9375rem] leading-tight font-medium text-white"
                      }
                    >
                      {s.label}
                    </span>
                    <span className="mt-1 block font-mono text-[0.6875rem] text-ontext-4">
                      {s.note}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        }
      />

      {/* ═══ WHAT AI AUTOMATION MEANS ═══════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="means-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <Reveal>
              <Marker>Definition</Marker>
              <h2 id="means-heading" className="mt-5 max-w-[19ch] text-d2 text-text">
                AI automation is not about replacing people. It is about{" "}
                <span className="text-accent-ink">reducing repetitive work.</span>
              </h2>
            </Reveal>
            <Reveal kind="right">
              <p className="measure text-lead text-text-2">
                AI automation means using AI models, business rules, integrations, and software
                workflows to handle repetitive or information-heavy tasks that normally take human
                time.
              </p>
              <p className="measure mt-5 text-text-3">
                The goal is to make teams faster, more consistent, and better supported without
                losing human control.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ PROBLEMS AI CAN SOLVE ══════════════════════════════════════════ */}
      <Section surface="sunken" aria-labelledby="probs-heading">
        <SchematicGround grid={30} nodes={false} mask="radial" className="opacity-60" />
        <div className="shell relative">
          <Reveal>
            <SectionHead
              id="probs-heading"
              marker="Where the time goes"
              lead="Problems AI can"
              accent="help solve"
              intro="If your team spends hours a week on any of these, there is usually a workflow worth automating."
            />
          </Reveal>

          <RevealGroup
            as="ul"
            className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4"
           
          >
            {AI_PROBLEMS.map((p) => (
              <RevealItem key={p} as="li">
                <div className="flex h-full items-start gap-3 bg-paper-raised p-5">
                  <span aria-hidden className="mt-[0.4375rem] size-1.5 shrink-0 rounded-full bg-danger/70" />
                  <span className="text-[0.9375rem] leading-relaxed text-text-2">{p}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-14">
            <BeforeAfterWorkflow tone="light" />
          </Reveal>
        </div>
      </Section>

      {/* ═══ USE CASES ══════════════════════════════════════════════════════ */}
      <Section surface="paper" id="use-cases" aria-labelledby="uc-heading">
        <div className="shell">
          <Reveal>
            <SectionHead
              id="uc-heading"
              marker="Use cases"
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
                <article className="relative flex h-full flex-col rounded-[var(--radius-lg)] border border-rule bg-paper-raised p-7 shadow-e1 transition-[border-color,box-shadow,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-1 hover:border-accent/35 hover:shadow-e2">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-[var(--radius-sm)] border border-rule bg-paper-sunken text-accent">
                      <ServiceIcon name={u.icon} className="size-5" />
                    </span>
                    <span className="font-mono text-[0.6875rem] text-text-4 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.125rem] leading-snug font-semibold text-text">
                    {u.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-text-2">{u.body}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ WORKFLOW EXAMPLES ══════════════════════════════════════════════ */}
      <Section surface="ink" aria-labelledby="wf-heading">
        <SchematicGround grid={38} nodes={152} mask="radial" />
        <Glow className="top-[-10rem] left-[-10rem]" color="signal" size={560} />
        <div className="shell relative">
          <Reveal>
            <SectionHead
              id="wf-heading"
              tone="dark"
              marker="Workflow examples"
              lead="Four workflows, drawn"
              accent="end to end"
              intro="Notice where the human sits in each one. That gate is a design decision, not an afterthought."
            />
          </Reveal>

          <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-2" as="ul">
            {AI_WORKFLOWS.map((w) => (
              <RevealItem key={w.id} as="li">
                <WorkflowDiagram workflow={w} tone="dark" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ AGENTS + RAG ═══════════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="agents-heading">
        <div className="shell">
          <div className="grid gap-x-14 gap-y-14 lg:grid-cols-2">
            <Reveal>
              <Marker>AI agents</Marker>
              <h2 id="agents-heading" className="mt-5 max-w-[18ch] text-d3 text-text">
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
              <Marker>RAG assistants</Marker>
              <h2 className="mt-5 max-w-[18ch] text-d3 text-text">
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
      <Section surface="sunken" tight aria-labelledby="doc-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <Reveal>
              <Marker>Document processing</Marker>
              <h2 id="doc-heading" className="mt-5 max-w-[17ch] text-d3 text-text">
                Turn document-heavy work into{" "}
                <span className="text-accent-ink">structured workflows.</span>
              </h2>
            </Reveal>
            <Reveal kind="right">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {DOCUMENT_TYPES.map((d) => (
                  <li
                    key={d}
                    className="flex items-center gap-3 rounded-[var(--radius-sm)] border border-rule bg-paper-raised px-4 py-3 text-sm text-text-2 shadow-e1"
                  >
                    <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ SUPPORT AUTOMATION — the two-column limit ══════════════════════ */}
      <Section surface="paper" aria-labelledby="sup-heading">
        <div className="shell">
          <Reveal>
            <SectionHead
              id="sup-heading"
              marker="Customer support"
              lead="Support automation with clear limits and"
              accent="human escalation"
              intro="The line between the two columns below is the most important design decision in a support automation project."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[var(--radius-md)] border border-accent/25 bg-accent-soft/60 p-6 sm:p-7">
                <h3 className="flex items-center gap-2.5 font-mono text-marker font-medium tracking-[0.16em] text-accent-ink uppercase">
                  <Check aria-hidden className="size-4" strokeWidth={2.4} />
                  What can be automated
                </h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {SUPPORT_AUTOMATABLE.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[0.9375rem] text-text-2">
                      <Check
                        aria-hidden
                        className="mt-[0.1875rem] size-4 shrink-0 text-accent"
                        strokeWidth={2.2}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal kind="right">
              <div className="h-full rounded-[var(--radius-md)] border border-rule-strong bg-paper-sunken p-6 sm:p-7">
                <h3 className="flex items-center gap-2.5 font-mono text-marker font-medium tracking-[0.16em] text-text-3 uppercase">
                  <ShieldCheck aria-hidden className="size-4" strokeWidth={2} />
                  What should remain human-led
                </h3>
                <ul className="mt-6 flex flex-col gap-3">
                  {SUPPORT_HUMAN_LED.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-[0.9375rem] text-text-2">
                      <X
                        aria-hidden
                        className="mt-[0.1875rem] size-4 shrink-0 text-text-4"
                        strokeWidth={2.2}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ CRM & REPORTING ════════════════════════════════════════════════ */}
      <Section surface="sunken" tight aria-labelledby="crm-heading">
        <div className="shell">
          <Reveal>
            <SectionHead
              id="crm-heading"
              marker="CRM & reporting"
              lead="Connect AI with the tools"
              accent="your team already uses"
            />
          </Reveal>

          <div className="mt-12 grid gap-x-14 gap-y-8 lg:grid-cols-2">
            <Reveal>
              <h3 className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                CRM automation
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {CRM_USE_CASES.map((c) => (
                  <li
                    key={c}
                    className="rounded-[var(--radius-xs)] border border-rule bg-paper-raised px-3 py-1.5 text-sm text-text-2 shadow-e1"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal kind="right">
              <h3 className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                Reporting automation
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {REPORTING_USE_CASES.map((c) => (
                  <li
                    key={c}
                    className="rounded-[var(--radius-xs)] border border-rule bg-paper-raised px-3 py-1.5 text-sm text-text-2 shadow-e1"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ WHAT NOT TO AUTOMATE + RESPONSIBLE AI ══════════════════════════ */}
      <Section surface="ink" aria-labelledby="limits-heading">
        <SchematicGround grid={38} nodes={152} mask="radial" />
        <div className="shell relative">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
            <Reveal>
              <Marker tone="dark">Limits</Marker>
              <h2 id="limits-heading" className="mt-5 max-w-[16ch] text-d2 text-white">
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
      <Section surface="paper" aria-labelledby="aiproc-heading">
        <div className="shell">
          <Reveal>
            <SectionHead
              id="aiproc-heading"
              marker="Process"
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
      <TechStack
        groups={stackFor(["AI", "Backend", "Databases", "Integrations"])}
        marker="Stack"
        heading="What AI workflows are"
        accent="built with"
        surface="sunken"
        compact
      />

      {/* ═══ FAQ ════════════════════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="aifaq-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <Marker>Questions</Marker>
              <h2 id="aifaq-heading" className="mt-5 max-w-[14ch] text-d2 text-text">
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

      <FinalCta
        marker="Next step"
        heading="Have a workflow"
        accent="you want to automate?"
        body="Tell us how your team currently works and we will help you identify where AI can create practical value."
        primary={{ label: "Book an AI Automation Call", href: "/contact?intent=ai-automation" }}
        secondary={{ label: "Send Project Details", href: "/contact" }}
      />

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
    </>
  );
}
