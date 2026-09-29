"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Clock3, Layers3, ShieldCheck, UsersRound } from "lucide-react";
import { useLocale } from "next-intl";

import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

const TYPE_KEYS = ["web", "mobile", "saas", "internal"] as const;
const COMPLEXITY_KEYS = ["focused", "standard", "advanced"] as const;
const TIMELINES = ["fast", "standard", "extended"] as const;
const FEATURE_KEYS = [
  "discovery",
  "design",
  "accounts",
  "admin",
  "payments",
  "integrations",
  "analytics",
  "quality",
] as const;

const COPY = {
  en: {
    eyebrow: "Plan your project",
    title: "Cost",
    titleAccent: "estimator.",
    intro: "Make a clear first plan for the work ahead. Select the shape of the project and receive an indicative delivery range in seconds.",
    configure: "Configure the project",
    projectType: "Project type",
    complexity: "Complexity",
    timeline: "Preferred timeline",
    deliveryModel: "Delivery model",
    deliveryValue: "Global, remote-first delivery",
    capabilities: "Capabilities to include",
    capabilitiesHelp: "Choose the parts of the delivery that matter to this first estimate.",
    liveEstimate: "Live estimate",
    updates: "Updates as you choose",
    investment: "Indicative investment",
    to: "to",
    estimateTimeline: "Estimated timeline",
    teamSize: "Team size",
    selectedCapabilities: "Selected capabilities",
    qualityCoverage: "Quality coverage",
    included: "Included",
    available: "Available",
    selectedCount: "included",
    requestEstimate: "Request a detailed estimate",
    disclaimer: "A practical starting range. No commitment is required.",
    howItWorks: "How it works",
    clarityTitle: "Clarity before the first commitment.",
    clarityBody: "A useful estimate starts with the people, constraints, and outcome behind the project.",
    questions: "Questions, answered",
    confidenceTitle: "Plan with confidence.",
    confidenceBody: "If you need a more precise scope, the next step is a short conversation with a product specialist.",
    discuss: "Discuss your project",
    types: { web: "Web application", mobile: "Mobile application", saas: "SaaS platform", internal: "Internal business system" },
    complexities: { focused: "Focused", standard: "Standard", advanced: "Advanced" },
    timelines: { fast: "1 to 3 months", standard: "3 to 6 months", extended: "6 months or more" },
    teams: { focused: "2 to 3 people", standard: "3 to 5 people", advanced: "5 to 7 people" },
    features: {
      discovery: "Product discovery",
      design: "UX and interface design",
      accounts: "User accounts",
      admin: "Admin workspace",
      payments: "Payments or subscriptions",
      integrations: "Third-party integrations",
      analytics: "Analytics and reporting",
      quality: "Quality assurance",
    },
    steps: [
      { number: "01", title: "Share the shape", body: "Select the product type, priorities, and timing." },
      { number: "02", title: "Review the range", body: "See a transparent starting point for scope and delivery." },
      { number: "03", title: "Discuss the detail", body: "Turn the range into a responsible plan with our team." },
    ],
    faqs: [
      { q: "Is this a final quote?", a: "No. It is an indicative range based on the choices you make here. A focused discovery conversation lets us confirm the scope, dependencies, and delivery plan." },
      { q: "What should I include?", a: "Choose the product type, complexity, timing, and the capabilities that matter most. You can add context when you request a detailed estimate." },
      { q: "Can you help refine the scope?", a: "Yes. We can turn an early idea, an existing product, or a manual workflow into a clear first phase with practical priorities." },
      { q: "Do you work with international teams?", a: "Yes. Barakode works with teams internationally through clear documentation, planned check-ins, and responsible delivery ownership." },
    ],
  },
  ar: {
    eyebrow: "خطط لمشروعك",
    title: "مُقدّر",
    titleAccent: "التكلفة.",
    intro: "ضع تصورًا واضحًا للمرحلة القادمة. اختر ملامح مشروعك واحصل على نطاق تقديري للتنفيذ خلال ثوانٍ.",
    configure: "إعداد المشروع",
    projectType: "نوع المشروع",
    complexity: "مستوى التعقيد",
    timeline: "المدة المفضلة",
    deliveryModel: "نموذج التنفيذ",
    deliveryValue: "تنفيذ عن بُعد لفريق عالمي",
    capabilities: "القدرات المطلوبة",
    capabilitiesHelp: "اختر عناصر التنفيذ الأكثر أهمية لهذا التقدير الأولي.",
    liveEstimate: "التقدير المباشر",
    updates: "يتحدث مع اختياراتك",
    investment: "الاستثمار التقديري",
    to: "إلى",
    estimateTimeline: "المدة المتوقعة",
    teamSize: "حجم الفريق",
    selectedCapabilities: "القدرات المختارة",
    qualityCoverage: "تغطية الجودة",
    included: "مشمولة",
    available: "متاحة",
    selectedCount: "محددة",
    requestEstimate: "اطلب تقديرًا تفصيليًا",
    disclaimer: "نطاق عملي كبداية، ولا يتطلب أي التزام.",
    howItWorks: "كيف تعمل الحاسبة",
    clarityTitle: "وضوح قبل أول التزام.",
    clarityBody: "يبدأ التقدير المفيد بفهم الأشخاص والقيود والنتيجة التي تقف خلف المشروع.",
    questions: "إجابات واضحة",
    confidenceTitle: "خطط بثقة.",
    confidenceBody: "إذا احتجت إلى نطاق أدق، فالخطوة التالية هي محادثة قصيرة مع مختص في المنتجات.",
    discuss: "ناقش مشروعك",
    types: { web: "تطبيق ويب", mobile: "تطبيق جوال", saas: "منصة برمجيات SaaS", internal: "نظام أعمال داخلي" },
    complexities: { focused: "مركّز", standard: "متوسط", advanced: "متقدم" },
    timelines: { fast: "من شهر إلى 3 أشهر", standard: "من 3 إلى 6 أشهر", extended: "6 أشهر أو أكثر" },
    teams: { focused: "من شخصين إلى 3 أشخاص", standard: "من 3 إلى 5 أشخاص", advanced: "من 5 إلى 7 أشخاص" },
    features: {
      discovery: "اكتشاف المنتج",
      design: "تجربة المستخدم وواجهة الاستخدام",
      accounts: "حسابات المستخدمين",
      admin: "مساحة عمل الإدارة",
      payments: "الدفع أو الاشتراكات",
      integrations: "التكامل مع خدمات خارجية",
      analytics: "التحليلات والتقارير",
      quality: "ضمان الجودة",
    },
    steps: [
      { number: "01", title: "شارك ملامح المشروع", body: "اختر نوع المنتج والأولويات والوقت المناسب." },
      { number: "02", title: "راجع النطاق", body: "اطلع على نقطة بداية واضحة للنطاق والتنفيذ." },
      { number: "03", title: "ناقش التفاصيل", body: "حوّل النطاق إلى خطة مسؤولة مع فريقنا." },
    ],
    faqs: [
      { q: "هل هذا عرض سعر نهائي؟", a: "لا. إنه نطاق تقديري مبني على اختياراتك هنا. تساعدنا جلسة اكتشاف مركزة على تأكيد النطاق والاعتماديات وخطة التنفيذ." },
      { q: "ما الذي ينبغي أن أختاره؟", a: "اختر نوع المنتج ومستوى التعقيد والمدة والقدرات الأكثر أهمية. ويمكنك إضافة تفاصيل عند طلب تقدير مفصل." },
      { q: "هل تساعدون في تحديد النطاق؟", a: "نعم. نستطيع تحويل فكرة مبكرة أو منتج قائم أو سير عمل يدوي إلى مرحلة أولى واضحة ذات أولويات عملية." },
      { q: "هل تعملون مع فرق دولية؟", a: "نعم. تعمل باراكود مع فرق حول العالم عبر توثيق واضح واجتماعات مخططة ومسؤولية تنفيذ موثوقة." },
    ],
  },
} as const;

export function ProjectCostEstimator() {
  const isArabic = useLocale() === "ar";
  const c = COPY[isArabic ? "ar" : "en"];
  const [type, setType] = useState<(typeof TYPE_KEYS)[number]>("web");
  const [complexity, setComplexity] = useState<(typeof COMPLEXITY_KEYS)[number]>("standard");
  const [timeline, setTimeline] = useState<(typeof TIMELINES)[number]>("standard");
  const [features, setFeatures] = useState<(typeof FEATURE_KEYS)[number][]>(["discovery", "design", "quality"]);

  const estimate = useMemo(() => {
    const base = { web: 28000, mobile: 34000, saas: 48000, internal: 38000 }[type];
    const multiplier = { focused: 0.8, standard: 1, advanced: 1.55 }[complexity];
    const featureValue = features.length * 3200;
    const fastTrack = timeline === "fast" ? 6500 : 0;
    const low = Math.round((base * multiplier + featureValue + fastTrack) / 1000) * 1000;
    return { low, high: Math.round((low * 1.32) / 1000) * 1000 };
  }, [complexity, features.length, timeline, type]);

  const toggle = (feature: (typeof FEATURE_KEYS)[number]) =>
    setFeatures((items) => (items.includes(feature) ? items.filter((item) => item !== feature) : [...items, feature]));
  const format = (amount: number) =>
    new Intl.NumberFormat(isArabic ? "ar-EG" : "en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(amount);
  const typeOptions = Object.fromEntries(TYPE_KEYS.map((key) => [key, c.types[key]]));
  const complexityOptions = Object.fromEntries(COMPLEXITY_KEYS.map((key) => [key, c.complexities[key]]));
  const timelineOptions = Object.fromEntries(TIMELINES.map((key) => [key, c.timelines[key]]));
  const summary = [
    { Icon: Clock3, label: c.estimateTimeline, value: c.timelines[timeline] },
    { Icon: UsersRound, label: c.teamSize, value: c.teams[complexity] },
    { Icon: Layers3, label: c.selectedCapabilities, value: `${features.length} ${c.selectedCount}` },
    { Icon: ShieldCheck, label: c.qualityCoverage, value: features.includes("quality") ? c.included : c.available },
  ];

  return (
    <div className="bg-ink-950 text-white">
      <section className="shell pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[.16em] text-accent-bright uppercase">{c.eyebrow}</p>
          <h1 className="mt-5 max-w-[12ch] text-d1 text-white">{c.title} <span className="text-accent-bright">{c.titleAccent}</span></h1>
          <p className="mt-6 max-w-2xl text-lead text-ontext-2">{c.intro}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(20rem,.75fr)] lg:items-start">
          <section aria-labelledby="configuration-heading" className="border-y border-rule-dark py-7 sm:py-9">
            <h2 id="configuration-heading" className="text-xl font-semibold">{c.configure}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Field label={c.projectType}><Select value={type} onChange={(value) => setType(value as typeof type)} options={typeOptions} /></Field>
              <Field label={c.complexity}><Select value={complexity} onChange={(value) => setComplexity(value as typeof complexity)} options={complexityOptions} /></Field>
              <Field label={c.timeline}><Select value={timeline} onChange={(value) => setTimeline(value as typeof timeline)} options={timelineOptions} /></Field>
              <Field label={c.deliveryModel}><div className="flex h-12 items-center border border-rule-dark px-4 text-sm text-ontext-2">{c.deliveryValue}</div></Field>
            </div>
            <div className="mt-10 border-t border-rule-dark pt-7">
              <h3 className="text-base font-semibold">{c.capabilities}</h3>
              <p className="mt-2 text-sm text-ontext-3">{c.capabilitiesHelp}</p>
              <div className="mt-5 grid border-t border-rule-dark sm:grid-cols-2">
                {FEATURE_KEYS.map((feature, index) => (
                  <label key={feature} className="flex cursor-pointer items-center gap-3 border-b border-rule-dark py-3.5 text-sm text-ontext-2 transition-colors hover:text-white sm:pr-6">
                    <input type="checkbox" checked={features.includes(feature)} onChange={() => toggle(feature)} className="size-4 accent-accent" />
                    {c.features[feature]}
                    <span className="ml-auto font-mono text-[.625rem] text-ontext-4">{String(index + 1).padStart(2, "0")}</span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          <aside className="sticky top-28 border border-accent/35 bg-black/35 p-6 shadow-dark-e3 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="font-mono text-xs tracking-[.14em] text-ontext-3 uppercase">{c.liveEstimate}</span>
              <span className="flex items-center gap-2 text-xs text-accent-bright"><span className="size-2 rounded-full bg-accent-bright" />{c.updates}</span>
            </div>
            <p className="mt-9 font-mono text-xs tracking-[.12em] text-ontext-3 uppercase">{c.investment}</p>
            <p className="tnum mt-3 text-[clamp(1.75rem,3vw,3rem)] leading-none font-semibold tracking-[-.035em] text-accent-bright">{format(estimate.low)} <span className="text-ontext-3">{c.to}</span> {format(estimate.high)}</p>
            <dl className="mt-9 border-t border-rule-dark">
              {summary.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 border-b border-rule-dark py-4">
                  <Icon className="size-4 text-accent-bright" />
                  <dt className="flex-1 text-sm text-ontext-3">{label}</dt>
                  <dd className="text-right text-sm text-white">{value}</dd>
                </div>
              ))}
            </dl>
            <Button href={`/contact?intent=cost-estimate&type=${type}&complexity=${complexity}`} variant="primary" size="lg" className="mt-8 w-full" arrow>{c.requestEstimate}</Button>
            <p className="mt-4 text-center text-xs leading-relaxed text-ontext-3">{c.disclaimer}</p>
          </aside>
        </div>
      </section>

      <section className="border-y border-rule-dark bg-black/25">
        <div className="shell grid gap-10 py-16 lg:grid-cols-[.9fr_1.1fr] lg:py-24">
          <div>
            <p className="font-mono text-xs tracking-[.16em] text-accent-bright uppercase">{c.howItWorks}</p>
            <h2 className="mt-5 max-w-[10ch] text-d2">{c.clarityTitle}</h2>
            <p className="mt-6 max-w-md text-lead text-ontext-2">{c.clarityBody}</p>
          </div>
          <div className="grid gap-7 sm:grid-cols-3">
            {c.steps.map((step) => <div key={step.number} className="border-t border-accent/45 pt-4"><span className="font-mono text-xs text-accent-bright">{step.number}</span><h3 className="mt-5 text-lg font-semibold">{step.title}</h3><p className="mt-3 text-sm leading-relaxed text-ontext-3">{step.body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="shell grid gap-10 py-16 lg:grid-cols-[.7fr_1.3fr] lg:py-24">
        <div>
          <p className="font-mono text-xs tracking-[.16em] text-accent-bright uppercase">{c.questions}</p>
          <h2 className="mt-5 max-w-[9ch] text-d2">{c.confidenceTitle}</h2>
          <p className="mt-6 max-w-sm text-ontext-2">{c.confidenceBody}</p>
          <Button href="/contact" variant="onDark" size="lg" className="mt-8" arrow>{c.discuss}</Button>
        </div>
        <Accordion items={c.faqs.map((item) => ({ ...item }))} tone="dark" />
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm text-ontext-2">{label}</span>{children}</label>;
}

function Select({ value, onChange, options }: { value: string; onChange: (value: string) => void; options: Record<string, string> }) {
  return <span className="relative block"><select value={value} onChange={(event) => onChange(event.target.value)} className="h-12 w-full appearance-none border border-rule-dark bg-transparent px-4 pr-10 text-sm text-white outline-none transition-colors focus:border-accent">{Object.entries(options).map(([key, label]) => <option key={key} value={key} className="bg-ink-950">{label}</option>)}</select><ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-accent-bright" /></span>;
}
