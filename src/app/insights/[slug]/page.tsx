import Image from "next/image";
import { notFound } from "next/navigation";
import { Check, Clock3 } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/ui/Reveal";
import { TraceRule } from "@/components/ui/Schematic";
import { Section } from "@/components/ui/Section";

import { ARTICLES, getArticle } from "@/lib/content";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return buildMetadata({
    title: a.title,
    description: a.excerpt,
    path: `/insights/${a.slug}`,
    image: a.cover,
    type: "article",
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        marker={article.category}
        heading={article.title}
        body={article.excerpt}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: article.title, path: `/insights/${article.slug}` },
        ]}
        meta={[
          { label: "Published", value: article.displayDate },
          { label: "Author", value: article.author },
          {
            label: "Reading time",
            value: (
              <span className="inline-flex items-center gap-1.5">
                <Clock3 aria-hidden className="size-3.5" strokeWidth={1.8} />
                {article.readTime}
              </span>
            ),
          },
        ]}
      />

      {/* ═══ COVER ══════════════════════════════════════════════════════════ */}
      <Section surface="paper" flush className="pt-section-tight pb-section-tight">
        <div className="shell">
          <Reveal kind="flat">
            <figure className="overflow-hidden rounded-[var(--radius-lg)] border border-rule bg-paper-sunken shadow-e3">
              <Image
                src={article.cover}
                alt={article.coverAlt}
                width={1600}
                height={900}
                priority
                sizes="(max-width: 1216px) 100vw, 1216px"
                className="h-auto w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </Section>

      {/* ═══ BODY ═══════════════════════════════════════════════════════════ */}
      <Section surface="paper" flush className="pb-section">
        <div className="shell">
          <div className="mx-auto max-w-[46rem]">
            {article.body.map((block, i) =>
              block.kind === "prose" ? (
                <Reveal key={`${block.heading}-${i}`} className="mt-12 first:mt-0">
                  <section>
                    <div className="flex items-center gap-4">
                      <TraceRule className="w-10 shrink-0" />
                      <h2 className="text-d3 text-text">{block.heading}</h2>
                    </div>
                    <div className="mt-6 flex flex-col gap-5">
                      {block.paragraphs.map((p) => (
                        <p key={p} className="text-lead text-text-2">
                          {p}
                        </p>
                      ))}
                    </div>
                    {block.checklist && (
                      <ul className="mt-8 flex flex-col gap-3 rounded-[var(--radius-md)] border border-rule bg-paper-sunken p-6">
                        {block.checklist.map((c) => (
                          <li key={c} className="flex items-start gap-3 text-[0.9375rem] text-text-2">
                            <Check
                              aria-hidden
                              className="mt-[0.1875rem] size-4 shrink-0 text-accent"
                              strokeWidth={2.3}
                            />
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                </Reveal>
              ) : (
                <Reveal key={block.src} kind="flat" className="mt-12">
                  <figure
                    className={
                      block.portrait
                        ? "mx-auto max-w-md overflow-hidden rounded-[var(--radius-md)] border border-rule bg-paper-sunken shadow-e2"
                        : "overflow-hidden rounded-[var(--radius-md)] border border-rule bg-paper-sunken shadow-e2"
                    }
                  >
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={1200}
                      height={block.portrait ? 1600 : 800}
                      sizes="(max-width: 768px) 100vw, 736px"
                      className="h-auto w-full object-cover"
                    />
                    {block.caption && (
                      <figcaption className="border-t border-rule bg-paper-raised px-5 py-3.5 text-sm text-text-3">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                </Reveal>
              ),
            )}

            <Reveal className="mt-14">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-rule pt-8">
                <span className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                  Tagged
                </span>
                <ul className="flex flex-wrap gap-2">
                  {article.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-[var(--radius-xs)] border border-rule bg-paper-sunken px-2.5 py-1 text-xs text-text-2"
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

      <FinalCta
        marker="Next step"
        heading="Want this applied to"
        accent="your project?"
        body="Tell us what you are building and we will help you define the technical plan behind it."
        primary={{ label: "Book a Strategy Call", href: "/contact?intent=strategy-call" }}
        secondary={{ label: "Read more insights", href: "/insights" }}
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: article.title, path: `/insights/${article.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article.title,
            description: article.excerpt,
            image: `${SITE.url}${article.cover}`,
            datePublished: article.date,
            author: { "@type": "Organization", name: article.author, url: SITE.url },
            publisher: { "@id": `${SITE.url}/#organization` },
            mainEntityOfPage: `${SITE.url}/insights/${article.slug}`,
            keywords: article.tags.join(", "),
          },
        ]}
      />
    </>
  );
}
