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
import { getLocale } from "next-intl/server";
import { aiAgentsAr, aiFaqsAr, aiProblemsAr, aiProcessAr, aiUseCasesAr, documentTypesAr, doNotAutomateAr } from "@/i18n/ai-automation-ar";

export async function generateMetadata() { const ar = (await getLocale()) === "ar"; return buildMetadata({ title: ar ? "أتمتة الذكاء الاصطناعي ودمجه" : "AI Automation & AI Integration", description: ar ? "أتمتة عملية لسير العمل الحقيقي، بمساعدة الذكاء الاصطناعي ومراجعة بشرية وضوابط واضحة للخصوصية والبيانات." : "Practical AI automation for real business workflows. Barakode builds AI assistants, RAG chatbots, document processing, CRM automation, and reporting automation — with human review, data privacy, and clear limits.", path: "/ai-automation" }); }

export default async function AiAutomationPage() {
  const ar = (await getLocale()) === "ar";
  return (
    <div className="ai-service-page">
      <PageHero
        marker={ar ? "أتمتة الذكاء الاصطناعي ودمجه" : "AI Automation & AI Integration"}
        heading={ar ? "أتمتة ذكية وعملية" : "Practical AI automation for"}
        accent={ar ? "لسير العمل الحقيقي" : "real business workflows"}
        trail="."
        body={ar ? "نحول الأجزاء المتكررة من العمل اليومي إلى مسارات موثوقة، من فرز الطلبات وقراءة المستندات إلى الوصول للمعلومات وتحديث الأنظمة التي يستخدمها فريقك. نبني بمساعدة الذكاء الاصطناعي ونبقي المراجعة والقرار بيد الأشخاص." : "We turn the repetitive parts of everyday operations into reliable workflows: sorting requests, reading documents, finding the right information, and updating the systems your team already uses."}
        primary={{ label: ar ? "احجز مكالمة تعريفية مجانية" : "Book a Free Project Discovery Call", mobileLabel: ar ? "مكالمة تعريفية مجانية" : "Free AI Discovery Call", href: "/contact?intent=ai-automation" }}
        secondary={{ label: ar ? "اكتشف حالات الاستخدام" : "Explore Use Cases", href: "#use-cases" }}
        crumbs={[
          { name: ar ? "الرئيسية" : "Home", path: "/" },
          { name: ar ? "أتمتة الذكاء الاصطناعي" : "AI Automation", path: "/ai-automation" },
        ]}
        showMarker={false}
        minimalBackdrop
        headingClassName="ai-hero-heading"
        className="ai-service-hero"
        backgroundImage={{
          src: "/images/services/ai-automation-hero-v2.webp",
          alt: ar ? "فريق عمل يتعاون على مسارات أتمتة عملية بالذكاء الاصطناعي" : "A business team collaborating around practical AI automation workflows",
        }}
        below={
          <RevealGroup as="ol" className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: ar ? "مدخلات العمل" : "Business input", note: ar ? "نماذج ورسائل وملفات وأحداث" : "Forms, messages, files and events" },
              { label: ar ? "مسار العمل الذكي" : "AI workflow", note: ar ? "تصنيف وبحث واستخراج وصياغة" : "Classify, retrieve, extract and draft" },
              { label: ar ? "مراجعة بشرية" : "Human review", note: ar ? "موافقة واضحة عند الحاجة" : "A clear approval gate where needed" },
              { label: ar ? "مخرجات العمل" : "Business output", note: ar ? "تحديث الأنظمة وتسليم النتيجة" : "Update systems and deliver the result" },
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
        className="bg-white"
      >
        <div className="shell py-12 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] lg:gap-16 xl:gap-24">
            <Reveal className="lg:pr-6">
              <h2 id="means-heading" className="max-w-[14ch] text-d2 text-text">
                {ar ? "اجعل العمل المتكرر " : "Make routine work "}<span className="text-accent-ink">{ar ? "أسهل وأسرع." : "move."}</span>
              </h2>
            </Reveal>

            <Reveal kind="right" className="flex flex-col justify-center lg:pl-12 xl:pl-16">
              <p className="max-w-2xl text-lead text-text-2">
                {ar ? "نربط الذكاء الاصطناعي بقواعد عملك وأدواتك وخطوات الموافقة القائمة، ليتقدم العمل المتكرر والغني بالمعلومات بسرعة أكبر من دون أن يصبح نظامًا غامضًا." : "We connect AI to your existing rules, tools, and approval steps so repetitive, information-heavy work moves faster without becoming a black box."}
              </p>
              <p className="mt-4 max-w-2xl text-text-3">
                {ar ? "النتيجة فريق أسرع وأكثر اتساقًا، مع بقاء الحكم والمسؤولية والتحكم بيد الأشخاص." : "The result is a faster, more consistent team—without losing judgment, accountability, or human control."}
              </p>

              <div className="mt-7 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule bg-rule sm:grid-cols-3">
                {[
                  ["01", ar ? "تقليل" : "Reduce", ar ? "العمل اليدوي" : "Manual work"],
                  ["02", ar ? "ربط" : "Connect", ar ? "أنظمة الأعمال" : "Business systems"],
                  ["03", ar ? "الحفاظ على" : "Keep", ar ? "الإشراف البشري" : "Human oversight"],
                ].map(([number, action, outcome]) => (
                  <div key={number} className="bg-paper-raised p-4 transition-[box-shadow,transform] duration-300 [transition-timing-function:var(--ease-expo)] hover:-translate-y-0.5 hover:shadow-e1 sm:p-5">
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
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1.25fr)]">
            <Reveal>
              <h2 id="ai-3d-heading" className="max-w-[13ch] text-d2 text-white">
                {ar ? "مسار عمل مترابط " : "One connected workflow, "}<span className="text-accent-bright">{ar ? "تتحكم به بوضوح." : "built around control."}</span>
              </h2>
              <p className="measure mt-5 text-ontext-2">
                {ar ? "تمر مدخلات العمل عبر طبقة ذكاء اصطناعي محددة، وتتوقف للمراجعة البشرية حيث يلزم، ثم تتحول إلى تحديث مفيد للنظام أو مخرج عملي." : "Business inputs move through a defined AI layer, pause for human review where it matters, and finish as a useful system update or business output."}
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
        className="overflow-hidden bg-[linear-gradient(180deg,var(--color-paper-sunken)_0%,var(--color-paper)_22rem)]"
      >
        <SchematicGround grid={34} nodes={false} mask="radial" className="opacity-45" />
        <div className="shell relative py-14 sm:py-16 lg:py-20">
          <div className="grid items-end gap-7 pb-9 lg:grid-cols-[minmax(0,.9fr)_minmax(22rem,.62fr)] lg:gap-16 lg:pb-11">
            <Reveal>
              <Marker>{ar ? "فرص الأتمتة" : "Automation opportunities"}</Marker>
              <h2 id="probs-heading" className="mt-5 max-w-[18ch] text-d2 text-text">
                {ar ? "تحديات يساعد الذكاء الاصطناعي " : "Problems AI can "}<span className="text-accent-ink">{ar ? "على حلها." : "help solve."}</span>
              </h2>
            </Reveal>
            <Reveal kind="right">
              <p className="max-w-xl text-lead text-text-2 lg:ml-auto">
                {ar ? "إذا عادت المهام نفسها إلى الأشخاص أنفسهم كل أسبوع، فغالبًا توجد طريقة مناسبة لأتمتة أجزائها الروتينية." : "If these jobs keep landing back on the same people every week, there is usually a sensible way to automate the routine parts."}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-3 lg:ml-auto">
                {ar ? "نبدأ بعنق الزجاجة في العمل، لا بالتقنية، ونبقي الأشخاص أصحاب القرار حيث تكون خبرتهم ضرورية." : "We start with the operational bottleneck—not the technology—and keep people in control wherever judgment matters."}
              </p>
            </Reveal>
          </div>

          <RevealGroup as="ul" className="ai-problem-list mt-8 grid sm:grid-cols-2 lg:grid-cols-4">
            {(ar ? aiProblemsAr : AI_PROBLEMS).map((problem, index) => (
              <RevealItem key={problem} as="li" index={index}>
                <div className="group/problem flex min-h-32 flex-col justify-between py-5 pr-5 transition-transform duration-300 [transition-timing-function:var(--ease-expo)] hover:translate-x-1">
                  <span className="font-mono text-[.625rem] tracking-[.12em] text-accent-ink uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-7 max-w-[18ch] text-[.9375rem] leading-snug font-medium text-text">
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
        <Image src="/images/services/ai-automation.webp" alt={ar ? "بيانات ومستندات تمر عبر نظام أتمتة ذكي" : "Structured data and documents flowing through an intelligent automation system"} fill sizes="100vw" className="service-panel__image object-cover grayscale" />
        <div className="absolute inset-0 bg-ink-950/88" />
        <div className="shell relative">
          <Reveal>
            <SectionHead
              id="uc-heading"
              tone="dark"
              lead={ar ? "ما نبنيه" : "What we"}
              accent={ar ? "لمؤسستك فعلًا" : "actually build"}
              intro={ar ? "سبعة استخدامات تغطي كثيرًا من احتياجات الأعمال، وكل منها يرتبط بالأدوات التي يعمل بها فريقك بالفعل." : "Seven patterns cover most of the AI work businesses need. Each one connects to the tools you already run."}
            />
          </Reveal>

          <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" as="ul">
            {AI_USE_CASES.map((source, i) => { const u = ar ? { ...source, ...aiUseCasesAr[i] } : source; return (
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
            ); })}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ AGENTS + RAG ═══════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="agents-heading" className="service-panel service-panel--centered">
        <div className="shell">
          <div className="grid gap-x-14 gap-y-14 lg:grid-cols-2">
            <Reveal>
              <h2 id="agents-heading" className="max-w-[14ch] text-d2 text-text">
                {ar ? "مساعدون أذكياء " : "AI agents for "}<span className="text-accent-ink">{ar ? "لمهام محددة." : "defined work."}</span>
              </h2>
              <p className="measure mt-6 text-text-2">
                {ar ? "المساعد الذكي يفهم المهمة ويستخدم الأدوات المتاحة ويتبع قواعد محددة وينجز الخطوات المطلوبة، مع إشراف بشري عند الحاجة." : "An AI agent is a workflow assistant that can understand a task, use available tools, follow defined rules, and complete steps with human oversight where needed."}
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {(ar ? aiAgentsAr : AI_AGENTS).map((a) => (
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
              <h2 className="max-w-[14ch] text-d2 text-text">
                {ar ? "ذكاء اصطناعي يستند إلى " : "AI grounded in "}<span className="text-accent-ink">{ar ? "معرفتك." : "your knowledge."}</span>
              </h2>
              <p className="measure mt-6 text-text-2">
                {ar ? "يتيح أسلوب توليد الإجابات المعزز بالاسترجاع للمساعد أن يجيب انطلاقًا من مصادر عملك المحددة، لا من معرفة النموذج العامة وحدها." : "RAG allows an AI assistant to answer based on selected business knowledge instead of only relying on general model knowledge."}
              </p>
              <div className="mt-8 rounded-[var(--radius-md)] border border-rule bg-paper-sunken p-6">
                <p className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                  {ar ? "يستند إلى" : "Grounded in"}
                </p>
                <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {[
                    ar ? "الأسئلة الشائعة للشركة" : "Company FAQs",
                    ar ? "وثائق المنتج" : "Product documentation",
                    ar ? "أدلة التدريب" : "Training manuals",
                    ar ? "السياسات" : "Policies",
                    ar ? "مستندات العملاء" : "Client documents",
                    ar ? "إجراءات العمل الداخلية" : "Internal SOPs",
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
      <Section surface="paper" tight aria-labelledby="doc-heading" className="service-panel">
        <div className="shell">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:gap-16 xl:gap-20">
            <Reveal className="lg:pr-4">
              <Marker>{ar ? "معالجة المستندات بذكاء" : "Document intelligence"}</Marker>
              <h2 id="doc-heading" className="mt-5 max-w-[17ch] text-d2 text-text">
                {ar ? "حوّل العمل القائم على المستندات إلى " : "Turn document-heavy work into "}
                <span className="text-accent-ink">{ar ? "مسارات منظمة." : "structured workflows."}</span>
              </h2>
              <p className="mt-6 max-w-lg text-lead text-text-2">
                {ar ? "استخرج المعلومات التي يحتاجها فريقك، وطبق قواعد تحقق واضحة، ثم انقل البيانات المعتمدة إلى الأنظمة التي يواصل فيها فريقك عمله." : "Extract the information your team needs, apply clear validation rules, and move approved data into the systems where work continues."}
              </p>
              <div className="mt-8 flex items-center gap-3 pt-2 font-mono text-[.6875rem] tracking-[.12em] text-text-4 uppercase">
                <span>{ar ? "إدخال" : "Input"}</span>
                <ArrowRight aria-hidden className="size-3.5 text-accent" />
                <span>{ar ? "استخراج" : "Extract"}</span>
                <ArrowRight aria-hidden className="size-3.5 text-accent" />
                <span>{ar ? "تنظيم" : "Structure"}</span>
              </div>
            </Reveal>

            <Reveal kind="right" className="overflow-hidden rounded-[var(--radius-lg)] border border-rule bg-paper-raised shadow-e3">
              <div className="relative aspect-[16/8.5] overflow-hidden bg-ink-950">
                <Image
                  src="/images/services/ai-automation.webp"
                  alt={ar ? "مستندات تتحول إلى بيانات منظمة ومخرجات للعمل" : "Documents being transformed into structured data and business outputs"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-expo)] hover:scale-[1.025]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-4 flex items-center justify-between gap-4 text-white sm:inset-x-6 sm:bottom-5">
                  <span className="font-mono text-[.625rem] tracking-[.14em] text-signal uppercase">{ar ? "معالجة مضبوطة" : "Controlled processing"}</span>
                  <span className="hidden text-xs text-white/70 sm:block">{ar ? "مراجعة بشرية عند الحاجة إلى التحقق" : "Human review where confidence matters"}</span>
                </div>
              </div>

              <ul className="grid gap-2 sm:grid-cols-2">
                {(ar ? documentTypesAr : DOCUMENT_TYPES).map((d) => (
                  <li
                    key={d}
                    className="group/doc flex min-h-14 items-center gap-3 rounded-[var(--radius-sm)] bg-white px-4 py-3 text-sm text-text-2 transition-colors duration-300 hover:bg-accent-soft sm:px-5"
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
          <Reveal className="mx-auto max-w-3xl text-center">
              <h2 id="limits-heading" className="mx-auto max-w-[16ch] text-d2 text-white">
                {ar ? "ليست كل عملية " : "Not every process "}<span className="text-accent-bright">{ar ? "مناسبة للأتمتة." : "should be automated."}</span>
              </h2>
              <p className="measure mx-auto mt-7 text-ontext-2">
                {ar ? "نوضح لك متى لا يكون الذكاء الاصطناعي الخيار المناسب. هذه فئات لا نؤتمتها بلا تمحيص، حتى لو كان ذلك ممكنًا تقنيًا." : "We will tell you when AI is the wrong answer. These are the categories we do not automate blindly, regardless of what is technically possible."}
              </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Reveal>
              <ul className="flex flex-col gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule-dark bg-rule-dark">
                {(ar ? doNotAutomateAr : DO_NOT_AUTOMATE).map((d) => (
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

            <Reveal kind="right">
              <div className="relative rounded-[var(--radius-lg)] border border-signal/25 bg-signal/[0.05] p-7 sm:p-8">
                <Registration tone="dark" size={18} />
                <ShieldCheck aria-hidden className="size-7 text-signal" strokeWidth={1.5} />
                <h3 className="mt-5 text-d3 text-white">
                  {ar ? "يجب أن يكون الذكاء الاصطناعي مفيدًا ومنضبطًا ومسؤولًا." : "AI should be useful, controlled, and responsible."}
                </h3>
                <p className="measure mt-5 text-ontext-2">
                  {ar ? "نصمم الأنظمة الذكية بحدود واضحة وإشراف بشري وحماية للبيانات وضوابط للصلاحيات وخطوات مراجعة وبدائل عند الحاجة." : "AI systems should be designed with clear limits, human oversight, data privacy, permission controls, review workflows, and fallback options."}
                </p>
                <p className="measure mt-4 text-ontext-3">
                  {ar ? "نستخدم الذكاء الاصطناعي لمساعدة فريقنا وتحسين عمليات عملائنا، لا لإلغاء دور الأشخاص في اتخاذ القرارات." : "Barakode presents AI as a tool for improving operations, not replacing all human decision-making."}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {[
                    ar ? "حدود واضحة" : "Defined limits",
                    ar ? "إشراف بشري" : "Human oversight",
                    ar ? "خصوصية البيانات" : "Data privacy",
                    ar ? "ضوابط الصلاحيات" : "Permission controls",
                    ar ? "خطوات مراجعة" : "Review workflows",
                    ar ? "خيارات بديلة" : "Fallback options",
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
              lead={ar ? "من الفرصة إلى" : "From opportunity to"}
              accent={ar ? "التشغيل الفعلي" : "production"}
              intro={ar ? "ثماني خطوات، نختبر فيها النموذج الأولي على مدخلاتك الحقيقية لا على بيانات عرض تجريبي." : "Eight steps. The prototype runs on your real inputs, not a demo dataset."}
            />
          </Reveal>

          <RevealGroup as="ol" className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {(ar ? aiProcessAr : AI_PROCESS).map((p, i) => (
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
      <Section surface="paper" tight aria-labelledby="aifaq-heading" className="service-panel service-panel--centered">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <h2 id="aifaq-heading" className="max-w-[14ch] text-d2 text-text">
                {ar ? "حول " : "About "}<span className="text-accent-ink">{ar ? "الأتمتة الذكية." : "AI automation."}</span>
              </h2>
              <Button href="/faq" variant="secondary" size="md" className="mt-8" arrow>
                {ar ? "جميع الأسئلة الشائعة" : "All FAQs"}
              </Button>
            </Reveal>
            <Reveal kind="right">
              <Accordion items={ar ? aiFaqsAr : AI_FAQS} defaultOpen={0} />
            </Reveal>
          </div>
        </div>
      </Section>

      <JsonLd
        data={[
          serviceSchema({
            name: ar ? "أتمتة الذكاء الاصطناعي ودمجه" : "AI Automation & AI Integration",
            description:
              ar ? "أتمتة عملية لسير العمل، تشمل المساعدين الأذكياء ومعالجة المستندات وإدارة العملاء والتقارير، مع مراجعة بشرية." : "Practical AI automation for real business workflows — AI assistants, RAG chatbots, document processing, CRM automation, and reporting automation with human review.",
            path: "/ai-automation",
          }),
          breadcrumbSchema([
            { name: ar ? "الرئيسية" : "Home", path: "/" },
            { name: ar ? "أتمتة الذكاء الاصطناعي" : "AI Automation", path: "/ai-automation" },
          ]),
          faqSchema(ar ? aiFaqsAr : AI_FAQS),
        ]}
      />
    </div>
  );
}
