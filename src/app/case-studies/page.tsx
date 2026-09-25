import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CaseStudyBrowser } from "@/components/sections/CaseStudyBrowser";
import { ClientReviewsCarousel } from "@/components/sections/ClientReviewsCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Marker, Section } from "@/components/ui/Section";

import { CLIENT_CASES, FEATURED_CASE, RESEARCH_STUDIES } from "@/lib/case-studies";
import { CLIENT_REVIEWS } from "@/lib/client-reviews";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { getLocale } from "next-intl/server";
import { localizeClientCase } from "@/i18n/case-studies-ar";

export async function generateMetadata() { const ar = (await getLocale()) === "ar"; return buildMetadata({ title: ar ? "دراسات الحالة وقصص المشاريع الحقيقية" : "Case Studies — Real project stories", description: ar ? "مشاريع مختارة توضح ما بُني ولماذا وكيف عملت باراكود وما أُنجز، مع تفاصيل موثقة وصور حقيقية ونتائج دقيقة." : "Selected projects showing what was built, why it was needed, how Barakode approached the solution, and what was delivered. Verified project details, real screenshots, accurate outcomes.", path: "/case-studies" }); }

export default async function CaseStudiesPage() {
  const ar = (await getLocale()) === "ar";
  const f = ar ? localizeClientCase(FEATURED_CASE) : FEATURED_CASE;

  return (
    <>
      <section
        data-surface="dark"
        aria-labelledby="case-studies-hero-heading"
        className="hero-reveal relative isolate min-h-[100svh] overflow-hidden bg-ink-950 text-ontext lg:h-[100svh]"
      >
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(215,169,63,.1),transparent_42%),linear-gradient(180deg,#090b0e_0%,#050607_100%)]" />
        <div aria-hidden className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,transparent,#000_25%,#000_82%,transparent)]" />

        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,6,7,.24)_0%,rgba(5,6,7,.55)_48%,rgba(5,6,7,.88)_100%)]" />

        <div className="shell relative flex min-h-[100svh] w-full flex-col justify-center pt-28 pb-8 sm:pt-28 sm:pb-9 lg:h-full lg:min-h-0 lg:pt-20 lg:pb-5">
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Marker tone="dark">{ar ? "دراسات الحالة" : "Case Studies"}</Marker>
            <h1 id="case-studies-hero-heading" className="site-hero-heading mt-4 max-w-[19ch] font-display font-semibold text-white">
              {ar ? "قصص مشاريع حقيقية تنطلق من " : "Real project stories, built around "}
              <span className="text-accent-bright">{ar ? "تحديات العمل." : "business problems."}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[clamp(.9375rem,1.4vw,1.125rem)] leading-relaxed text-ontext-2">
              {ar ? "اكتشف مشاريع مختارة توضح ما بنيناه ولماذا احتاجه العميل وكيف تعاملت باراكود مع التحدي وما سلمته. تعتمد كل دراسة على تفاصيل مشروع موثقة وصور فعلية ونتائج دقيقة. نستخدم الذكاء الاصطناعي لمساعدة فريقنا في البحث والبناء والمراجعة، مع بقاء مسؤولية العمل والقرار لدينا." : "Explore selected projects showing what was built, why it was needed, how Barakode approached the solution, and what was delivered. Every case study is based on verified project details, real screenshots, and accurate outcomes."}
            </p>
            <Button href="/contact" variant="onDark" size="md" className="mt-6 w-full sm:w-auto" arrow>
              {ar ? "ناقش مشروعًا مشابهًا" : "Discuss a Similar Project"}
            </Button>
          </Reveal>

          <Reveal index={1} className="mt-7 sm:mt-9">
            <dl className="mx-auto grid max-w-5xl grid-cols-1 border-t border-rule-dark pt-3 text-center sm:grid-cols-3 sm:pt-5">
              {[
                { label: ar ? "مشاريع العملاء" : "Client engagements", value: ar ? `${CLIENT_CASES.length} مشاريع موثقة بالتفصيل` : `${CLIENT_CASES.length} documented in full` },
                { label: ar ? "دراسات هندسية" : "Engineering studies", value: ar ? `${RESEARCH_STUDIES.length} دراسة مع تقاريرها` : `${RESEARCH_STUDIES.length}, each with its report` },
                { label: ar ? "أرقام مختلقة" : "Invented metrics", value: ar ? "لا شيء. النتائج الموثقة فقط." : "None. Verified outcomes only." },
              ].map((item) => (
                <div key={item.label} className="border-b border-rule-dark px-2 py-2 last:border-b-0 sm:border-r sm:border-b-0 sm:px-6 sm:py-0 sm:last:border-r-0">
                  <dt className="font-mono text-[.5rem] tracking-[.1em] text-ontext-4 uppercase sm:text-[.625rem] sm:tracking-[.14em]">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 text-[.6875rem] leading-snug text-ontext-2 sm:mt-2 sm:text-sm">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ═══ FEATURED CASE STUDY ════════════════════════════════════════════ */}
      <Section surface="paper" tight aria-labelledby="featured-heading" className="overflow-hidden border-b border-rule">
        <div className="shell">
          <article className="grid items-center gap-10 lg:grid-cols-[minmax(0,.88fr)_minmax(0,1.12fr)] lg:gap-16 xl:gap-24">
            <Reveal className="max-w-xl">
              <Marker>{ar ? "مشروع بارز" : "Featured engagement"}</Marker>
              <p className="mt-6 font-mono text-[0.6875rem] tracking-[0.1em] text-text-4 uppercase">
                {f.clientType} · {f.industry}
              </p>
              <h2 id="featured-heading" className="mt-4 max-w-[18ch] text-d2 text-text">
                {f.name}
              </h2>
              <p className="mt-6 max-w-xl text-lead text-text-2">{f.summary}</p>
              <Link
                href={`/case-studies/${f.slug}`}
                className="group/link mt-8 inline-flex items-center gap-2 border-b border-accent/40 pb-1 text-sm font-semibold text-accent-ink transition-colors hover:border-accent hover:text-accent"
              >
                {ar ? "اقرأ دراسة الحالة" : "Read the case study"}
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 [transition-timing-function:var(--ease-expo)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </Link>
            </Reveal>

            <Reveal kind="right">
              <div className="group/image relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] bg-ink-900 shadow-e4">
                <Image
                  src={f.cover}
                  alt={f.coverAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-expo)] group-hover/image:scale-[1.025]"
                />
                <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </Reveal>
          </article>
        </div>
      </Section>

      {/* ═══ FILTERABLE GRID ════════════════════════════════════════════════ */}
      <Section surface="paper" aria-label={ar ? "جميع الأعمال" : "All work"}>
        <div className="shell">
          <CaseStudyBrowser showFilters={false} compactClients subtleCards />
        </div>
      </Section>

      <Section surface="paper" aria-labelledby="client-reviews-heading">
        <div className="shell">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Marker>{ar ? "آراء العملاء" : "Client reviews"}</Marker>
            <h2 id="client-reviews-heading" className="mt-5 text-d2 text-text">
              {ar ? "عمل حقيقي ترويه " : "Real delivery, shared through "}<span className="text-accent-ink">{ar ? "تجارب العملاء." : "client experience."}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-text-2">
              {ar ? "مختارات من آراء العملاء حول مشاريع الجوال وFlutter وReact Native والمنتجات المدعومة بالذكاء الاصطناعي." : "A selection of client feedback from mobile product, Flutter, React Native, and AI-enabled delivery work."}
            </p>
          </Reveal>
          <Reveal className="mt-10 sm:mt-12">
            <ClientReviewsCarousel items={CLIENT_REVIEWS} />
          </Reveal>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: ar ? "الرئيسية" : "Home", path: "/" },
          { name: ar ? "دراسات الحالة" : "Case Studies", path: "/case-studies" },
        ])}
      />
    </>
  );
}
