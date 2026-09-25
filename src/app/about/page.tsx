import Image from "next/image";
import { ArrowUpRight, Globe2, MessageSquareText, Clock3, FileText } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { AboutWorkFlow } from "@/components/sections/AboutWorkFlow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Registration, SchematicGround } from "@/components/ui/Schematic";
import { Marker, Section, SectionHead } from "@/components/ui/Section";

import { BELIEFS, TEAM } from "@/lib/content";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { getLocale } from "next-intl/server";
import { beliefsAr, deliveryTraitsAr, localizeTeamMember } from "@/i18n/about-ar";

export async function generateMetadata() { const ar = (await getLocale()) === "ar"; return buildMetadata({ title: ar ? "عن باراكود تكنولوجيز" : "About — Born in Pakistan, building software for the world", description: ar ? "باراكود شركة لتطوير المنتجات والأتمتة، يعمل فريقها بمساعدة الذكاء الاصطناعي مع مراجعة بشرية لبناء منتجات وأنظمة وحلول عملية قابلة للنمو." : "Barakode Technologies is a product engineering and AI automation company helping startups and growing businesses build scalable digital products, internal systems, and practical AI-powered workflows.", path: "/about" }); }

const ABOUT_PHOTOS = [
  { src: "/images/about/Barakode_brochure_updated.webp", alt: "Barakode Technologies company brochure" },
  { src: "/images/about/about-2.webp", alt: "The Barakode team at work" },
  { src: "/images/about/about-3.webp", alt: "Barakode engineering session" },
];

const DELIVERY_TRAITS = [
  {
    icon: Globe2,
    title: "Across time zones",
    body: "We plan around the overlap you actually have, not the one that suits us.",
  },
  {
    icon: FileText,
    title: "Written down",
    body: "Requirements, decisions, and scope changes live in documents, not in someone's memory.",
  },
  {
    icon: MessageSquareText,
    title: "Async by default",
    body: "Progress updates arrive without you having to ask, and meetings are for decisions.",
  },
  {
    icon: Clock3,
    title: "Planned checkpoints",
    body: "Sprint reviews and delivery checkpoints are scheduled at the start, not improvised.",
  },
];

export default async function AboutPage() {
  const ar = (await getLocale()) === "ar";
  return (
    <>
      <PageHero
        marker={ar ? "عن باراكود تكنولوجيز" : "About Barakode Technologies"}
        heading={ar ? "من باكستان نبني برمجيات" : "Born in Pakistan, building software"}
        accent={ar ? "للعالم" : "for the world"}
        trail="."
        body={ar ? "باراكود شريك في تطوير المنتجات والأتمتة للشركات الناشئة ومنصات SaaS والشركات النامية والمؤسسات. نعمل بمساعدة الذكاء الاصطناعي في البحث والتصميم والتطوير والاختبار، مع قيادة بشرية ومراجعة لكل مخرج، لبناء منتجات رقمية وحلول عمل قابلة للنمو." : "Barakode Technologies partners with startups, SaaS companies, growing businesses, and enterprises to build digital products and practical AI workflows. AI assists our research, design, development, and testing; our team reviews the work and owns the result."}
        primary={{ label: ar ? "اعمل معنا" : "Work With Us", href: "/contact" }}
        secondary={{ label: ar ? "شاهد أعمالنا" : "View Our Work", href: "/case-studies" }}
        crumbs={[
          { name: ar ? "الرئيسية" : "Home", path: "/" },
          { name: ar ? "من نحن" : "About", path: "/about" },
        ]}
        showMarker={false}
        minimalBackdrop
        headingClassName="ai-hero-heading"
        className="ai-service-hero"
      />

      {/* ═══ COMPANY STORY ══════════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="story-heading">
        <div className="shell">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <Reveal>
              <Marker>{ar ? "قصتنا" : "Our story"}</Marker>
              <h2 id="story-heading" className="mt-5 max-w-[17ch] text-d2 text-text">
                {ar ? "نبني برمجيات للشركات التي تحتاج إلى " : "We build software for businesses that need "}
                <span className="text-accent-ink">{ar ? "تنفيذ يمكن الاعتماد عليه." : "reliable execution."}</span>
              </h2>
            </Reveal>

            <Reveal kind="right" className="flex flex-col gap-6">
              <p className="measure text-lead text-text-2">
                {ar ? "بدأت باراكود من قناعة بسيطة: لا تحدد الجغرافيا قدرة فريق البرمجيات على تقديم عمل ممتاز. من باكستان نتعاون مع شركات تحتاج إلى تفكير واضح وهندسة موثوقة وحلول تقنية عملية." : "Barakode was created with a simple belief: strong software teams do not need to be limited by geography. From Pakistan, we work with businesses that need clear thinking, reliable engineering, and practical technology solutions."}
              </p>
              <p className="measure text-text-3">
                {ar ? "لا نسعى إلى تقديم كل خدمة رقمية ممكنة. نركز على بناء المنتجات وأتمتة سير العمل وصيانة الأنظمة التي تدعم نمو الأعمال الحقيقي. يستخدم فريقنا الذكاء الاصطناعي للمساعدة في العمل اليومي، ويظل مسؤولًا عن القرارات والجودة والتسليم." : "We focus on products, automated workflows, and systems that support real business growth. Our team uses AI to assist the work, while people remain accountable for the decisions, quality, and delivery."}
              </p>
            </Reveal>
          </div>

          <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-3" as="ul">
            {ABOUT_PHOTOS.map((p) => (
              <RevealItem key={p.src} as="li">
                <figure className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] border border-rule bg-paper-sunken shadow-e1">
                  <Image
                    src={p.src}
                    alt={ar ? ["كتيب شركة باراكود تكنولوجيز", "فريق باراكود أثناء العمل", "جلسة هندسية لفريق باراكود"][ABOUT_PHOTOS.indexOf(p)] : p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 380px"
                    className="object-cover"
                  />
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ MISSION & VISION ═══════════════════════════════════════════════ */}
      <Section surface="ink" aria-labelledby="mv-heading">
        <SchematicGround grid={38} nodes={152} mask="radial" />
        <div className="shell relative">
          <h2 id="mv-heading" className="sr-only">
            {ar ? "المهمة والرؤية" : "Mission and vision"}
          </h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              {
                label: ar ? "مهمتنا" : "Mission",
                body: ar ? "مساعدة الشركات على بناء منتجات برمجية قابلة للنمو وسير عمل ذكي يحل تحديات تشغيلية حقيقية، بالاستفادة من الذكاء الاصطناعي مع إشراف مهني واضح." : "To help businesses build scalable software products and AI-enabled workflows that solve real operational problems.",
              },
              {
                label: ar ? "رؤيتنا" : "Vision",
                body: ar ? "أن نكون شريكًا دوليًا موثوقًا في تطوير المنتجات للشركات الناشئة ومؤسسي SaaS والشركات النامية والوكالات التي تحتاج إلى تنفيذ برمجي يعتمد عليه." : "To become a trusted international product engineering partner for startups, SaaS founders, growing companies, and agencies that need reliable software delivery.",
              },
            ].map((m, i) => (
              <Reveal key={m.label} kind={i === 0 ? "left" : "right"}>
                <div className="relative h-full rounded-[var(--radius-lg)] border border-rule-dark bg-white/[0.025] p-8 sm:p-10">
                  <Registration tone="dark" size={18} />
                  <p className="font-mono text-marker font-medium tracking-[0.16em] text-signal uppercase">
                    {m.label}
                  </p>
                  <p className="measure mt-6 text-d4 leading-snug text-white">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══ WHAT BARAKODE BELIEVES ═════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="beliefs-heading">
        <div className="shell">
          <Reveal>
            <SectionHead
              id="beliefs-heading"
              marker={ar ? "مبادئنا" : "Principles"}
              lead={ar ? "ما نؤمن به" : "What Barakode"}
              accent={ar ? "في باراكود" : "believes"}
              intro={ar ? "خمسة مبادئ تحدد كيف نخطط ونبني ونتواصل، وتساعدنا على اختيار المشاريع التي يمكننا خدمتها جيدًا." : "Five positions that decide how we scope, build, and communicate. They are the reason some projects we take on and others we turn down."}
            />
          </Reveal>

          <RevealGroup as="dl" className="mt-14 flex flex-col">
            {(ar ? beliefsAr : BELIEFS).map((b, i) => (
              <RevealItem key={b.title}>
                <div
                  className={`grid gap-x-10 gap-y-2 border-b border-rule py-7 md:grid-cols-[minmax(0,3rem)_minmax(0,20rem)_minmax(0,1fr)] ${i === 0 ? "border-t" : ""}`}
                >
                  <span
                    aria-hidden
                    className="font-mono text-sm text-text-4 tabular-nums"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <dt className="font-display text-d4 leading-snug text-text">{b.title}</dt>
                  <dd className="measure text-text-2">{b.body}</dd>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ HOW WE WORK ════════════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="how-heading" className="overflow-hidden border-y border-rule">
        <div className="shell">
          <div className="grid items-start gap-x-16 gap-y-10 lg:grid-cols-[minmax(0,.72fr)_minmax(0,1.28fr)] xl:gap-x-24">
            <Reveal className="lg:sticky lg:top-28">
              <Marker>{ar ? "طريقة عملنا" : "How we work"}</Marker>
              <h2 id="how-heading" className="mt-5 max-w-[12ch] text-d2 text-text">
                {ar ? "سبع خطوات " : "Seven steps, "}<span className="text-accent-ink">{ar ? "في كل مشروع." : "every time."}</span>
              </h2>
              <p className="mt-6 max-w-md text-text-3">
                {ar ? "يحافظ إيقاع العمل المنظم على وضوح القرارات وإمكانية قياس التقدم وربط كل مرحلة بهدف العمل. تساعد أدوات الذكاء الاصطناعي فريقنا في التنفيذ، بينما يراجع الأشخاص ما ننجزه." : "A repeatable delivery rhythm keeps decisions visible, progress measurable, and every stage connected to the business goal."}
              </p>
            </Reveal>

            <Reveal kind="right">
              <AboutWorkFlow />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ═══ TEAM ═══════════════════════════════════════════════════════════ */}
      <Section surface="paper" aria-labelledby="team-heading">
        <div className="shell">
          <Reveal>
            <SectionHead
              id="team-heading"
              marker={ar ? "الفريق" : "Team"}
              lead={ar ? "الأشخاص" : "The people"}
              accent={ar ? "وراء باراكود" : "behind Barakode"}
              intro={ar ? "فريق حقيقي وصور حقيقية للأشخاص الذين يقودون العمل ويراجعون مخرجاته." : "Real people, real photographs. No stock imagery — the brief rules it out and so do we."}
            />
          </Reveal>

          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" as="ul">
            {TEAM.map((source) => { const m = ar ? localizeTeamMember(source) : source; return (
              <RevealItem key={m.slug} as="li" className="h-full">
                <article className="group/t flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-rule bg-paper-raised shadow-e1 transition-[border-color,box-shadow,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-1 hover:border-accent/30 hover:shadow-e3">
                  <div className="relative aspect-[4/5] overflow-hidden border-b border-rule bg-ink-900">
                    <Image
                      src={m.photo}
                      alt={`${m.name}, ${m.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-top transition-transform duration-700 [transition-timing-function:var(--ease-expo)] group-hover/t:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-d4 text-text">{m.name}</h3>
                    <p className="mt-1.5 font-mono text-xs tracking-[0.06em] text-accent-ink">
                      {m.role}
                    </p>
                    <p className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-text-2">
                      {m.shortBio}
                    </p>

                    <blockquote className="mt-6 border-l-2 border-accent/35 pl-4 text-sm leading-relaxed text-text-3 italic">
                      &ldquo;{m.quote}&rdquo;
                    </blockquote>

                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {m.expertise.slice(0, 4).map((e) => (
                        <li
                          key={e}
                          className="rounded-[var(--radius-xs)] bg-paper-sunken px-2 py-0.5 font-mono text-[0.6875rem] text-text-3"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>

                    {m.linkedin && (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex w-fit items-center gap-1 font-mono text-[0.6875rem] tracking-[0.08em] text-text-3 transition-colors hover:text-accent-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      >
                        {ar ? "الملف على LinkedIn" : "LinkedIn profile"}
                        <ArrowUpRight aria-hidden className="size-3.5" strokeWidth={1.8} />
                      </a>
                    )}

                  </div>
                </article>
              </RevealItem>
            ); })}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ GLOBAL DELIVERY ════════════════════════════════════════════════ */}
      <Section surface="sunken" aria-labelledby="global-heading">
        <SchematicGround grid={30} nodes={false} mask="radial" className="opacity-60" />
        <div className="shell relative">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <Marker>{ar ? "عملنا عبر العالم" : "Global delivery"}</Marker>
              <h2 id="global-heading" className="mt-5 max-w-[16ch] text-d2 text-text">
                {ar ? "مقرنا في باكستان، ونعمل " : "Based in Pakistan. Built for "}
                <span className="text-accent-ink">{ar ? "مع شركاء حول العالم." : "international collaboration."}</span>
              </h2>
              <p className="measure mt-7 text-lead text-text-2">
                {ar ? "تتعاون باراكود مع عملاء في مناطق زمنية مختلفة عبر تواصل منظم ووثائق واضحة وتحديثات مستمرة واجتماعات مخططة. صممنا طريقة عملنا للتعاون عن بُعد والشفافية التقنية والشراكات طويلة الأمد." : "Barakode works with clients across time zones through structured communication, clear documentation, async updates, and planned meetings. Our delivery model is designed for remote collaboration, technical transparency, and long-term partnership."}
              </p>
            </Reveal>

            <RevealGroup as="ul" className="grid gap-px self-start overflow-hidden rounded-[var(--radius-md)] border border-rule bg-rule sm:grid-cols-2">
              {DELIVERY_TRAITS.map((source, index) => { const t = ar ? { ...source, ...deliveryTraitsAr[index] } : source; return (
                <RevealItem key={t.title} as="li">
                  <div className="flex h-full flex-col gap-3 bg-paper-raised p-6">
                    <t.icon aria-hidden className="size-5 text-accent" strokeWidth={1.6} />
                    <h3 className="font-display text-[1rem] font-semibold text-text">{t.title}</h3>
                    <p className="text-[0.875rem] leading-relaxed text-text-3">{t.body}</p>
                  </div>
                </RevealItem>
              ); })}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* ═══ TRUST ══════════════════════════════════════════════════════════ */}
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: ar ? "الرئيسية" : "Home", path: "/" },
            { name: ar ? "من نحن" : "About", path: "/about" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: ar ? "عن باراكود تكنولوجيز" : `About ${SITE.name}`,
            url: `${SITE.url}/about`,
            mainEntity: { "@id": `${SITE.url}/#organization` },
          },
        ]}
      />
    </>
  );
}
