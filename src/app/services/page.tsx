import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Marker, Section, SectionHead } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { ENGAGEMENT_MODELS } from "@/lib/content";
import { SERVICES } from "@/lib/services";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Services — Software Product Development & AI Automation",
  description:
    "Barakode helps startups and growing businesses build scalable products, improve existing systems, and automate manual workflows through structured product engineering.",
  path: "/services",
});

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "mvp-saas-product-development": { src: "/images/services/mvp-saas.webp", alt: "A product team planning and building a scalable SaaS platform" },
  "custom-web-mobile-app-development": { src: "/images/services/web-mobile.webp", alt: "Responsive web and mobile product interfaces" },
  "ai-automation-ai-integration": { src: "/images/services/ai-automation.webp", alt: "Connected AI automation workflows for business operations" },
  "internal-business-systems": { src: "/images/services/internal-systems.webp", alt: "A modern internal operations dashboard and business system" },
  "cloud-devops-maintenance": { src: "/images/services/cloud-devops.webp", alt: "Cloud infrastructure, monitoring, and reliable deployment operations" },
  "ui-ux-product-design": { src: "/images/services/product-design.webp", alt: "A polished product design system and interface workflow" },
};

export default function ServicesPage() {
  return (
    <div className="services-page">
      <PageHero
        marker="Services"
        heading="Software product development and"
        accent="AI automation services"
        trail="."
        body="Barakode helps startups and growing businesses build scalable products, improve existing systems, and automate manual workflows through structured product engineering."
        primary={{ label: "Discuss Your Project", href: "/contact" }}
        secondary={{ label: "View Our Work", href: "/case-studies" }}
        crumbs={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}
        showMarker={false}
        minimalBackdrop
        headingClassName="ai-hero-heading"
        className="ai-service-hero services-main-hero"
        backgroundImage={{
          src: "/images/services/overview/services-hero-connected-platform.webp",
          alt: "A connected product engineering platform spanning strategy, software, AI, and cloud systems",
        }}
        below={
          <nav aria-label="Services on this page">
            <RevealGroup as="div" className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2">
              {SERVICES.map((service, index) => (
                <RevealItem key={service.slug} index={index}>
                  <a href={`#${service.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3.5 py-2 text-xs text-white/75 backdrop-blur-md transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/55 hover:text-white">
                    <ServiceIcon name={service.icon} className="size-3.5 text-accent" />
                    {service.shortTitle}
                  </a>
                </RevealItem>
              ))}
            </RevealGroup>
          </nav>
        }
      />

      <Section surface="paper" flush className="services-overview" aria-labelledby="services-overview-heading">
        <div className="shell grid items-center gap-10 py-section lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16">
          <Reveal>
            <Marker>One connected partner</Marker>
            <h2 id="services-overview-heading" className="mt-5 max-w-[15ch] text-d2 text-text">
              From idea to launch, automation, and <span className="text-accent-ink">long-term support.</span>
            </h2>
            <p className="measure mt-6 text-lead text-text-2">
              Whether you are building a new MVP, scaling an existing platform, replacing manual operations, or adding AI into your workflow, Barakode helps you plan, design, build, deploy, and improve the right software system.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/process" variant="secondary" size="md" arrow>See our process</Button>
              <Button href="/contact" size="md" arrow>Start a conversation</Button>
            </div>
          </Reveal>
          <Reveal kind="right">
            <div className="services-editorial-image group relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] border border-black/10 bg-white shadow-e2">
              <Image src="/images/services/overview/end-to-end-delivery-system.webp" alt="An end-to-end product delivery system connecting strategy, design, engineering, AI, cloud, and improvement" fill sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover transition-transform duration-1000 [transition-timing-function:var(--ease-expo)] group-hover:scale-[1.025]" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-[var(--radius-sm)] border border-white/70 bg-white/85 px-4 py-3 text-xs text-black/65 shadow-e1 backdrop-blur-md">
                <span className="font-mono tracking-[0.12em] uppercase">Plan · Design · Build · Operate</span>
                <span className="size-2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(208,161,46,.15)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <div aria-label="Service details">
        {SERVICES.map((service, index) => {
          const dark = index === 2 || index === 4;
          const reversed = index % 2 === 1;
          const image = SERVICE_IMAGES[service.slug];
          return (
            <Section key={service.slug} id={service.slug} surface={dark ? "ink" : "paper"} flush className={`services-story scroll-mt-20 ${dark ? "services-story--dark" : "border-t border-black/8"}`}>
              <article className="shell grid items-center gap-10 py-section lg:grid-cols-2 lg:gap-16">
                <Reveal kind={reversed ? "right" : "left"} className={reversed ? "lg:order-2" : undefined}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-black/10 bg-paper-sunken shadow-e2">
                    <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="services-story__image object-cover transition-transform duration-1000 [transition-timing-function:var(--ease-expo)] group-hover:scale-[1.035]" />
                    <div className={`absolute inset-0 ${dark ? "bg-gradient-to-t from-black/55 via-transparent to-black/10" : "bg-gradient-to-t from-black/20 via-transparent to-white/5"}`} />
                    <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-2 font-mono text-[0.6875rem] tracking-[0.1em] text-white backdrop-blur-md uppercase">
                      <ServiceIcon name={service.icon} className="size-3.5 text-accent" /> Service {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
                <Reveal kind={reversed ? "left" : "right"} className={reversed ? "lg:order-1" : undefined}>
                  <span className={`font-mono text-marker font-medium tracking-[0.16em] uppercase ${dark ? "text-signal" : "text-accent-ink"}`}>{service.shortTitle}</span>
                  <h2 className={`mt-4 max-w-[16ch] text-d3 ${dark ? "text-white" : "text-text"}`}>{service.title}</h2>
                  <p className={`measure mt-5 text-base leading-relaxed ${dark ? "text-ontext-2" : "text-text-2"}`}>{service.delivers}</p>
                  <dl className={`mt-7 grid gap-5 border-y py-6 sm:grid-cols-2 ${dark ? "border-white/12" : "border-black/10"}`}>
                    <div>
                      <dt className={`font-mono text-[0.6875rem] tracking-[0.12em] uppercase ${dark ? "text-white/45" : "text-text-4"}`}>Who it is for</dt>
                      <dd className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-text-2"}`}>{service.audience}</dd>
                    </div>
                    <div>
                      <dt className={`font-mono text-[0.6875rem] tracking-[0.12em] uppercase ${dark ? "text-white/45" : "text-text-4"}`}>Problem it solves</dt>
                      <dd className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-text-2"}`}>{service.problem}</dd>
                    </div>
                  </dl>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${dark ? "border-white/12 bg-white/[.045] text-white/75" : "border-black/10 bg-white text-black/70 shadow-e1"}`}>
                        <Check aria-hidden className="size-3 text-accent" strokeWidth={2.4} /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href={service.href} size="md" variant={dark ? "onDark" : "primary"} className="mt-7" arrow>{service.cta}</Button>
                </Reveal>
              </article>
            </Section>
          );
        })}
      </div>

      <Section surface="ink" flush className="services-cycle" aria-labelledby="together-heading">
        <div className="shell py-section">
          <Reveal>
            <SectionHead id="together-heading" tone="dark" align="center" marker="One partner" lead="One product engineering partner for" accent="the full build cycle" intro="Barakode can support one part of the project or the full lifecycle, from product planning and design to development, AI automation, deployment, maintenance, and scaling." />
          </Reveal>
          <RevealGroup as="ol" className="mt-10 grid gap-3 md:grid-cols-4">
            {[
              { title: "Plan", body: "Discovery, scope, architecture, and the roadmap that follows." },
              { title: "Design", body: "Flows, wireframes, UI, and a prototype you can click through." },
              { title: "Build", body: "Frontend, backend, mobile, AI workflows, integrations, and QA." },
              { title: "Operate", body: "Deployment, monitoring, maintenance, and continuous growth." },
            ].map((step, index) => (
              <RevealItem key={step.title} as="li" index={index} className="group relative overflow-hidden rounded-[var(--radius-md)] border border-white/10 bg-white/[.045] p-6 transition-[border-color,background-color,transform] duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/[.07]">
                <span className="font-mono text-xs text-signal">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ontext-3">{step.body}</p>
                <span className="absolute right-5 bottom-5 size-1.5 rounded-full bg-accent opacity-50 transition-transform duration-500 group-hover:scale-[2]" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section surface="paper" flush className="services-models" aria-labelledby="models-heading">
        <div className="shell py-section">
          <Reveal><SectionHead id="models-heading" marker="How we work together" lead="Suggested" accent="engagement models" intro="Pick the shape of the engagement first — the scope conversation is much easier once the model is settled." /></Reveal>
          <RevealGroup className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" as="ul">
            {ENGAGEMENT_MODELS.map((model) => (
              <RevealItem key={model.slug} as="li" className="h-full">
                <Link href={`/engagement-models#${model.slug}`} className="group flex h-full flex-col rounded-[var(--radius-md)] border border-black/10 bg-white p-6 shadow-e1 transition-[border-color,box-shadow,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-1 hover:border-accent/40 hover:shadow-e2">
                  <h3 className="font-display text-[1.0625rem] font-semibold text-black">{model.name}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-black/60">{model.bestFor}</p>
                  <span className="mt-5 flex items-center justify-between gap-3 border-t border-black/10 pt-4"><span className="font-mono text-[0.6875rem] text-black/45">{model.timeline}</span><ArrowRight aria-hidden className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-1" /></span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
    </div>
  );
}
