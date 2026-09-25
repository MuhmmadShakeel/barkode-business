import { Suspense } from "react";
import { CalendarClock, Mail, MapPin, MessageCircle } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Pending } from "@/components/ui/Pending";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TraceRule } from "@/components/ui/Schematic";
import { Marker, Section } from "@/components/ui/Section";
import { SocialIcon } from "@/components/ui/SocialIcon";

import { SERVICES } from "@/lib/services";
import { CONTACT, SITE, SOCIAL } from "@/lib/site";
import { JsonLd, breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { getLocale } from "next-intl/server";
import { contactFaqsAr, contactGuidanceAr } from "@/i18n/contact-ar";
import { localizeMenuItem } from "@/i18n/consultancy-ar";

export async function generateMetadata() { const ar = (await getLocale()) === "ar"; return buildMetadata({ title: ar ? "تواصل مع باراكود بشأن مشروعك" : "Contact — Tell us what you want to build", description: ar ? "شاركنا تفاصيل مشروعك لنقترح خطوة عملية في بناء المنتج أو مراجعة التقنية أو أتمتة سير العمل بمساعدة الذكاء الاصطناعي." : "Share a few details about your project and we will respond with the best next step — a free project discovery call, technical review, MVP plan, or automation discovery.", path: "/contact" }); }

const CONTACT_FAQS = [
  {
    q: "What happens after I submit the form?",
    a: "We read it and reply with a practical next step — usually a free project discovery call, technical review, or scoped starting point. If your project is not a fit for us, we will say so and try to point you somewhere useful.",
  },
  {
    q: "Can I book a call directly?",
    a: "Yes. Choose 'Google Meet / Zoom' as your preferred contact method and mention your availability in the description, and we will send times that work across your time zone.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. Barakode is based in Pakistan and works with clients internationally through remote collaboration, structured documentation, and planned meetings across time zones.",
  },
  {
    q: "Can I share a project brief?",
    a: "Yes — include a link to the brief, document, wireframe, or screenshot in your WhatsApp message so we can give you a more specific answer.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Yes, where required. Mention it in your message and we will handle it before any detailed discussion.",
  },
];

const GUIDANCE = [
  {
    heading: "If you have an idea but no plan",
    body: "Tell us the business problem and who it is for. We will help you work out what the first version needs to be before you commit to a build.",
    tag: "MVP / SaaS product",
  },
  {
    heading: "If you have a manual workflow",
    body: "Describe how the work gets done today, including the exceptions. That is what tells us whether AI automation is worth doing.",
    tag: "AI automation",
  },
  {
    heading: "If you already have a product",
    body: "Send the link and tell us what is not working — performance, stability, a feature you cannot ship, or a codebase nobody wants to touch.",
    tag: "Cloud / DevOps / maintenance",
  },
  {
    heading: "If you are not sure yet",
    body: "That is a normal place to start. Pick 'Not sure yet' and describe the situation. Scoping the problem is the first thing we would do anyway.",
    tag: "Not sure yet",
  },
];

export default async function ContactPage() {
  const ar = (await getLocale()) === "ar";
  const faqs = ar ? contactFaqsAr : CONTACT_FAQS;
  const guidance = ar ? contactGuidanceAr : GUIDANCE;
  return (
    <>
      <PageHero
        marker={ar ? "تواصل مع باراكود" : "Contact Barakode"}
        heading={ar ? "أخبرنا بما تريد بناءه أو أتمتته أو" : "Tell us what you want to build, automate, or"}
        accent={ar ? "تحسينه" : "improve"}
        trail="."
        body={ar ? "شاركنا بعض تفاصيل مشروعك لنقترح خطوة مناسبة، سواء كانت مكالمة تعريفية مجانية أو مراجعة تقنية أو خطة منتج أولي أو استكشاف فرصة للأتمتة. نعمل بمساعدة الذكاء الاصطناعي مع مراجعة بشرية في كل مرحلة." : "Share a few details about your project and we will suggest a practical next step, whether that is a discovery call, technical review, MVP plan, or automation opportunity. AI assists our work, and our team reviews every recommendation."}
        crumbs={[
          { name: ar ? "الرئيسية" : "Home", path: "/" },
          { name: ar ? "تواصل معنا" : "Contact", path: "/contact" },
        ]}
        showMarker={false}
        minimalBackdrop
        headingClassName="ai-hero-heading"
        className="ai-service-hero"
      />

      {/* ═══ FORM + DETAILS ═════════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="form-heading">
        <div className="shell">
          <h2 id="form-heading" className="sr-only">
            {ar ? "نموذج الاستفسار عن المشروع" : "Project inquiry form"}
          </h2>

          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-start">
            <Reveal>
              <Suspense
                fallback={
                  <div className="rounded-[var(--radius-lg)] border border-black/10 bg-white p-8 text-black shadow-e2">
                    <p className="text-sm text-text-3">{ar ? "جارٍ تحميل النموذج…" : "Loading form…"}</p>
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </Reveal>

            {/* ── Sidebar ─────────────────────────────────────────────────── */}
            <Reveal kind="right" className="flex flex-col gap-6 lg:sticky lg:top-28">
              <div className="rounded-[var(--radius-md)] border border-black/10 bg-white p-6 text-black shadow-e1">
                <h3 className="font-mono text-marker font-medium tracking-[0.16em] text-black/65 uppercase">
                  {ar ? "قنوات التواصل المباشر" : "Direct channels"}
                </h3>
                <ul className="mt-5 flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.7} />
                    <div className="min-w-0">
                      <p className="text-xs text-black/55">{ar ? "البريد الإلكتروني" : "Email"}</p>
                      {CONTACT.email ? (
                        <a
                          href={`mailto:${CONTACT.email}`}
                          className="text-sm text-accent-ink underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                        >
                          {CONTACT.email}
                        </a>
                      ) : (
                        <div className="mt-1">
                          <Pending>{ar ? "[البريد الرسمي غير متاح حاليًا]" : "[Add official email]"}</Pending>
                        </div>
                      )}
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <MessageCircle
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      strokeWidth={1.7}
                    />
                    <div className="min-w-0">
                      <p className="text-xs text-black/55">{ar ? "الهاتف وWhatsApp" : "Phone / WhatsApp"}</p>
                      <a
                        href={CONTACT.whatsapp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent-ink tabular-nums underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {CONTACT.whatsapp.display}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.7} />
                    <div className="min-w-0">
                      <p className="text-xs text-black/55">{ar ? "الموقع" : "Location"}</p>
                      <p className="text-sm text-black/75">{ar ? "باكستان، ونخدم عملاء من أنحاء العالم" : SITE.location}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 border-t border-rule pt-5">
                  <p className="text-xs text-black/55">{ar ? "المنصات الاجتماعية" : "Social"}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {SOCIAL.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={ar ? `${SITE.shortName} على ${s.label}` : `${SITE.shortName} on ${s.label}`}
                          title={s.handle}
                          className="grid size-9 place-items-center rounded-[var(--radius-xs)] border border-black/10 bg-white text-black/65 shadow-e1 transition-[color,border-color,transform,box-shadow] duration-200 [transition-timing-function:var(--ease-expo)] hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent-ink hover:shadow-e2"
                        >
                          <SocialIcon name={s.icon} className="size-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Booking */}
              <div className="rounded-[var(--radius-md)] border border-black/10 bg-white p-6 text-black shadow-e1">
                <CalendarClock aria-hidden className="size-5 text-accent-ink" strokeWidth={1.7} />
                <h3 className="mt-4 font-display text-[1.0625rem] leading-snug font-semibold text-black">
                  {ar ? "تفضل مناقشة الفكرة مباشرة؟" : "Would rather just talk it through?"}
                </h3>
                <p className="mt-2.5 text-sm text-black/70">
                  {ar ? "اطلب مكالمة تعريفية مجانية لمدة 30 دقيقة. أخبرنا بما تريد بناءه وأهم القيود لديك، وسنؤكد موعدًا مناسبًا خلال يوم عمل واحد." : "Request a free 30-minute discovery call. Tell us what you are building and your key constraints; we will confirm a suitable time within one business day."}
                </p>
                {CONTACT.bookingUrl ? (
                  <Button href={CONTACT.bookingUrl} size="md" className="mt-5" arrow block>
                    {ar ? "اطلب مكالمة تعريفية مجانية" : "Request a Free Project Discovery Call"}
                  </Button>
                ) : (
                  <div className="mt-5">
                    <Button href={CONTACT.whatsapp.href} size="md" arrow block>
                      {ar ? "اطلب مكالمة تعريفية مجانية" : "Request a Free Discovery Call"}
                    </Button>
                    <p className="mt-3 text-xs text-text-3">
                      {ar ? "هذا طلب مكالمة وليس حجزًا فوريًا. سنؤكد الموعد وتفاصيل الاتصال بعد مراجعة مشروعك." : "This is a request, not an instant calendar booking. We will confirm the time and video-call details after reviewing your project."}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex items-start gap-4">
                <TraceRule className="mt-3 w-10 shrink-0" />
                <p className="text-sm text-text-3">{ar ? "نرد على رسالتك خلال يوم عمل واحد بخطوة مناسبة لمشروعك." : CONTACT.responsePromise}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ PROJECT TYPE GUIDANCE ══════════════════════════════════════════ */}
      <Section surface="paper" className="border-t border-black/8" aria-labelledby="guidance-heading">
        <div className="shell">
          <Reveal>
            <Marker>{ar ? "ما الذي ترسله لنا" : "What to send us"}</Marker>
            <h2 id="guidance-heading" className="mt-5 max-w-[17ch] text-d2 text-text">
              {ar ? "كلما اتضح وصف مشروعك " : "A better brief gets a "}
              <span className="text-accent-ink">{ar ? "كان ردنا أدق." : "better answer."}</span>
            </h2>
          </Reveal>

          <RevealGroup as="ul" className="mt-12 grid gap-5 sm:grid-cols-2">
            {guidance.map((g) => (
              <RevealItem key={g.heading} as="li" className="h-full">
                <div className="flex h-full flex-col rounded-[var(--radius-md)] border border-rule bg-paper-raised p-6 shadow-e1">
                  <h3 className="font-display text-[1.0625rem] leading-snug font-semibold text-text">
                    {g.heading}
                  </h3>
                  <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-text-2">
                    {g.body}
                  </p>
                  <p className="mt-5 border-t border-rule pt-4 font-mono text-[0.6875rem] tracking-[0.06em] text-text-4">
                    {ar ? "اختر: " : "Choose: "}
                    <span className="text-accent-ink">{g.tag}</span>
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="mt-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-text-3">
              <span>{ar ? "لست متأكدًا من الخدمة المناسبة؟" : "Not sure which service applies?"}</span>
              <ul className="flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <a
                      href={s.href}
                      className="rounded-[var(--radius-xs)] border border-rule bg-paper-raised px-2.5 py-1 text-xs text-text-2 shadow-e1 transition-[border-color,color] duration-200 hover:border-accent/40 hover:text-accent-ink"
                    >
                      {ar ? localizeMenuItem({ href: s.href, label: s.shortTitle, description: "" }, "ar").label : s.shortTitle}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ═══ FAQ ════════════════════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="cfaq-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <Marker>{ar ? "قبل الإرسال" : "Before you send"}</Marker>
              <h2 id="cfaq-heading" className="mt-5 max-w-[14ch] text-d2 text-text">
                {ar ? "ماذا يحدث " : "What happens "}<span className="text-accent-ink">{ar ? "بعد ذلك." : "next."}</span>
              </h2>
              <Button href="/faq" variant="secondary" size="md" className="mt-8" arrow>
                {ar ? "جميع الأسئلة الشائعة" : "All FAQs"}
              </Button>
            </Reveal>
            <Reveal kind="right">
              <Accordion items={faqs} defaultOpen={0} />
            </Reveal>
          </div>
        </div>
      </Section>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: ar ? "الرئيسية" : "Home", path: "/" },
            { name: ar ? "تواصل معنا" : "Contact", path: "/contact" },
          ]),
          faqSchema(faqs),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: ar ? "تواصل مع باراكود تكنولوجيز" : `Contact ${SITE.name}`,
            url: `${SITE.url}/contact`,
            mainEntity: { "@id": `${SITE.url}/#organization` },
          },
        ]}
      />
    </>
  );
}
