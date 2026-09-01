import Image from "next/image";
import { Globe2, MessageSquareText, Clock3, FileText } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { AboutWorkFlow } from "@/components/sections/AboutWorkFlow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Pending } from "@/components/ui/Pending";
import { Registration, SchematicGround } from "@/components/ui/Schematic";
import { Marker, Section, SectionHead } from "@/components/ui/Section";

import { BELIEFS, TEAM } from "@/lib/content";
import { SITE } from "@/lib/site";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About — Born in Pakistan, building software for the world",
  description:
    "Barakode Technologies is a product engineering and AI automation company helping startups and growing businesses build scalable digital products, internal systems, and practical AI-powered workflows.",
  path: "/about",
});

const ABOUT_PHOTOS = [
  { src: "/images/about/Barakode_brochure_updated.jpg", alt: "Barakode Technologies company brochure" },
  { src: "/images/about/about-2.jpg", alt: "The Barakode team at work" },
  { src: "/images/about/about-3.jpg", alt: "Barakode engineering session" },
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

export default function AboutPage() {
  return (
    <>
      <PageHero
        marker="About Barakode Technologies"
        heading="Born in Pakistan, building software"
        accent="for the world"
        trail="."
        body="Barakode Technologies is a product engineering and AI automation company helping startups and growing businesses build scalable digital products, internal systems, and practical AI-powered workflows."
        primary={{ label: "Work With Us", href: "/contact" }}
        secondary={{ label: "View Our Work", href: "/case-studies" }}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
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
              <Marker>Our story</Marker>
              <h2 id="story-heading" className="mt-5 max-w-[17ch] text-d2 text-text">
                We build software for businesses that need{" "}
                <span className="text-accent-ink">reliable execution.</span>
              </h2>
            </Reveal>

            <Reveal kind="right" className="flex flex-col gap-6">
              <p className="measure text-lead text-text-2">
                Barakode was created with a simple belief: strong software teams do not need to be
                limited by geography. From Pakistan, we work with businesses that need clear
                thinking, reliable engineering, and practical technology solutions.
              </p>
              <p className="measure text-text-3">
                Our focus is not to offer every digital service. Our focus is to help companies
                build products, automate workflows, and maintain systems that support real business
                growth.
              </p>
            </Reveal>
          </div>

          <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-3" as="ul">
            {ABOUT_PHOTOS.map((p) => (
              <RevealItem key={p.src} as="li">
                <figure className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)] border border-rule bg-paper-sunken shadow-e1">
                  <Image
                    src={p.src}
                    alt={p.alt}
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
            Mission and vision
          </h2>
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              {
                label: "Mission",
                body: "To help businesses build scalable software products and AI-enabled workflows that solve real operational problems.",
              },
              {
                label: "Vision",
                body: "To become a trusted international product engineering partner for startups, SaaS founders, growing companies, and agencies that need reliable software delivery.",
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
              marker="Principles"
              lead="What Barakode"
              accent="believes"
              intro="Five positions that decide how we scope, build, and communicate. They are the reason some projects we take on and others we turn down."
            />
          </Reveal>

          <RevealGroup as="dl" className="mt-14 flex flex-col">
            {BELIEFS.map((b, i) => (
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
              <Marker>How we work</Marker>
              <h2 id="how-heading" className="mt-5 max-w-[12ch] text-d2 text-text">
                Seven steps, <span className="text-accent-ink">every time.</span>
              </h2>
              <p className="mt-6 max-w-md text-text-3">
                A repeatable delivery rhythm keeps decisions visible, progress measurable, and every stage connected to the business goal.
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
              marker="Team"
              lead="The people"
              accent="behind Barakode"
              intro="Real people, real photographs. No stock imagery — the brief rules it out and so do we."
            />
          </Reveal>

          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" as="ul">
            {TEAM.map((m) => (
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

                    {!m.linkedin && (
                      <div className="mt-5">
                        <Pending>[Add LinkedIn profile]</Pending>
                      </div>
                    )}
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* ═══ GLOBAL DELIVERY ════════════════════════════════════════════════ */}
      <Section surface="sunken" aria-labelledby="global-heading">
        <SchematicGround grid={30} nodes={false} mask="radial" className="opacity-60" />
        <div className="shell relative">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <Reveal>
              <Marker>Global delivery</Marker>
              <h2 id="global-heading" className="mt-5 max-w-[16ch] text-d2 text-text">
                Based in Pakistan. Built for{" "}
                <span className="text-accent-ink">international collaboration.</span>
              </h2>
              <p className="measure mt-7 text-lead text-text-2">
                Barakode works with clients across time zones through structured communication,
                clear documentation, async updates, and planned meetings. Our delivery model is
                designed for remote collaboration, technical transparency, and long-term
                partnership.
              </p>
            </Reveal>

            <RevealGroup as="ul" className="grid gap-px self-start overflow-hidden rounded-[var(--radius-md)] border border-rule bg-rule sm:grid-cols-2">
              {DELIVERY_TRAITS.map((t) => (
                <RevealItem key={t.title} as="li">
                  <div className="flex h-full flex-col gap-3 bg-paper-raised p-6">
                    <t.icon aria-hidden className="size-5 text-accent" strokeWidth={1.6} />
                    <h3 className="font-display text-[1rem] font-semibold text-text">{t.title}</h3>
                    <p className="text-[0.875rem] leading-relaxed text-text-3">{t.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </Section>

      {/* ═══ TRUST ══════════════════════════════════════════════════════════ */}
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: `About ${SITE.name}`,
            url: `${SITE.url}/about`,
            mainEntity: { "@id": `${SITE.url}/#organization` },
          },
        ]}
      />
    </>
  );
}
