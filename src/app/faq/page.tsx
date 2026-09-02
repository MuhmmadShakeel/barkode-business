import { PageHero } from "@/components/sections/PageHero";
import { FinalCta } from "@/components/sections/FinalCta";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { SchematicGround } from "@/components/ui/Schematic";
import { Section } from "@/components/ui/Section";

import { ALL_FAQS, FAQ_CATEGORIES } from "@/lib/content";
import { JsonLd, breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ — Questions before starting a project",
  description:
    "Answers to common questions about working with Barakode Technologies — services, process, AI automation, pricing, communication, ownership, and support.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        marker="FAQ"
        heading="Questions before starting a software or"
        accent="AI automation project?"
        body="Here are answers to common questions about working with Barakode Technologies, our services, process, timelines, pricing, ownership, and support."
        primary={{ label: "Ask a Project Question", href: "/contact" }}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
        meta={[
          { label: "Categories", value: `${FAQ_CATEGORIES.length}` },
          { label: "Questions", value: `${ALL_FAQS.length}` },
          { label: "Not answered here?", value: "Ask us directly — we reply to every inquiry." },
        ]}
      />

      <Section surface="paper" aria-label="Frequently asked questions">
        <SchematicGround grid={30} nodes={false} mask="radial" className="opacity-50" />
        <div className="shell relative">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:items-start">
            {/* ── Category index ────────────────────────────────────────────── */}
            <Reveal className="lg:sticky lg:top-28">
              <nav aria-label="FAQ categories">
                <h2 className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                  Categories
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:gap-0">
                  {FAQ_CATEGORIES.map((c) => (
                    <li key={c.id} className="lg:border-b lg:border-rule">
                      <a
                        href={`#${c.id}`}
                        className="inline-flex items-center gap-2.5 rounded-[var(--radius-xs)] border border-rule bg-paper-raised px-3 py-1.5 text-sm text-text-2 shadow-e1 transition-[border-color,color] duration-200 hover:border-accent/40 hover:text-accent-ink lg:w-full lg:justify-between lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-3 lg:shadow-none"
                      >
                        {c.label}
                        <span className="font-mono text-[0.6875rem] text-text-4 tabular-nums">
                          {c.items.length}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>

            {/* ── Questions ─────────────────────────────────────────────────── */}
            <div className="flex flex-col gap-14">
              {FAQ_CATEGORIES.map((c, ci) => (
                <Reveal key={c.id} kind="right">
                  <section id={c.id} className="scroll-mt-28">
                    <h2 className="text-d3 text-text">{c.label}</h2>
                    <Accordion items={c.items} className="mt-6" defaultOpen={ci === 0 ? 0 : -1} />
                  </section>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <FinalCta
        marker="Next step"
        heading="Still have"
        accent="a question?"
        body="Share your project details and we will help you understand the best next step."
        primary={{ label: "Contact Barakode", href: "/contact" }}
        secondary={{ label: "Book a Free Project Discovery Call", href: "/contact?intent=strategy-call" }}
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
          faqSchema(ALL_FAQS),
        ]}
      />
    </>
  );
}
