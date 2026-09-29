import Image from "next/image";
import { Check } from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Marker, Section } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SERVICES } from "@/lib/services";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";
import { getLocale, getMessages } from "next-intl/server";

type ArabicListing = (typeof import("@/i18n/messages/ar.json"))["serviceListing"];

export async function generateMetadata() {
  const locale = await getLocale();
  const copy = locale === "ar" ? (await getMessages()).serviceListing as ArabicListing : null;
  return buildMetadata({
    title: copy?.metaTitle ?? "Services — Software Product Development & AI Automation",
    description: copy?.metaDescription ?? "Barakode helps startups and growing businesses build scalable products, improve existing systems, and automate manual workflows through AI-assisted product engineering.",
    path: "/services",
  });
}

const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  "mvp-saas-product-development": { src: "/images/services/mvp-saas.webp", alt: "A product team planning and building a scalable SaaS platform" },
  "custom-web-mobile-app-development": { src: "/images/services/web-mobile.webp", alt: "Responsive web and mobile product interfaces" },
  "ai-automation-ai-integration": { src: "/images/services/ai-automation.webp", alt: "Connected AI automation workflows for business operations" },
  "internal-business-systems": { src: "/images/services/internal-systems.webp", alt: "A modern internal operations dashboard and business system" },
  "cloud-devops-maintenance": { src: "/images/services/cloud-devops.webp", alt: "Cloud infrastructure, monitoring, and reliable deployment operations" },
  "ui-ux-product-design": { src: "/images/services/product-design.webp", alt: "A polished product design system and interface workflow" },
  "blockchain-development": { src: "/images/services/detail/blockchain-development.webp", alt: "Secure connected blocks representing blockchain engineering" },
  "digital-transformation": { src: "/images/services/detail/digital-transformation.webp", alt: "Connected operational systems representing digital transformation" },
  "internet-of-things": { src: "/images/services/detail/internet-of-things.webp", alt: "Connected device network representing Internet of Things development" },
  "it-project-management": { src: "/images/services/detail/it-project-management.webp", alt: "Structured milestones representing IT project management" },
  "prompt-engineering": { src: "/images/services/detail/prompt-engineering.webp", alt: "AI orchestration lattice representing prompt engineering" },
  "quality-assurance": { src: "/images/services/detail/quality-assurance.webp", alt: "Validation layers representing quality assurance" },
  "staff-augmentation": { src: "/images/services/detail/staff-augmentation.webp", alt: "Connected delivery team representing staff augmentation" },
  "vibe-code": { src: "/images/services/detail/vibe-code.webp", alt: "Product concept evolving into a prototype representing Vibe Code" },
};

const FALLBACK_SERVICE_IMAGE = SERVICE_IMAGES["mvp-saas-product-development"];

export default async function ServicesPage() {
  const locale = await getLocale();
  const messages = await getMessages();
  const ar = locale === "ar" ? messages.serviceListing as ArabicListing : null;
  const homeCards = locale === "ar" ? [...(messages.home as (typeof import("@/i18n/messages/ar.json"))["home"]).services.cards, ...(messages.homeRecoveredServices as (typeof import("@/i18n/messages/ar.json"))["homeRecoveredServices"])] : [];
  return (
    <div className="services-page">
      <PageHero
        marker={ar?.services ?? "Services"}
        heading={ar?.heroHeading ?? "Software product development and"}
        accent={ar?.heroAccent ?? "AI automation services"}
        trail="."
        body={ar?.heroBody ?? "Barakode helps startups and growing businesses define, build, and improve digital products, internal systems, and practical automation."}
        primary={{ label: ar?.primary ?? "Book a Free Project Discovery Call", href: "/contact?intent=strategy-call" }}
        secondary={{ label: ar?.secondary ?? "View Our Work", href: "/case-studies" }}
        crumbs={[{ name: ar?.home ?? "Home", path: "/" }, { name: ar?.services ?? "Services", path: "/services" }]}
        showMarker={false}
        minimalBackdrop
        solidOverlay
        headingClassName="ai-hero-heading"
        className="ai-service-hero services-main-hero"
        backgroundImage={{
          src: "/images/services/overview/services-hero-connected-platform.webp",
          alt: ar?.heroAlt ?? "A connected product engineering platform spanning strategy, software, AI, and cloud systems",
        }}
        below={
          <nav aria-label={ar?.onPage ?? "Services on this page"}>
            <RevealGroup as="div" className="mx-auto flex max-w-5xl flex-wrap justify-center gap-2">
              {SERVICES.map((service, index) => (
                <RevealItem key={service.slug} index={index}>
                  <a href={`#${service.slug}`} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3.5 py-2 text-xs text-white/75 backdrop-blur-md transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/55 hover:text-white">
                    <ServiceIcon name={service.icon} className="size-3.5 text-accent" />
                    {ar?.cards[index].short ?? service.shortTitle}
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
            <Marker>{ar?.overviewMarker ?? "One connected partner"}</Marker>
            <h2 id="services-overview-heading" className="mt-5 max-w-[15ch] text-d2 text-text">
              {ar?.overviewHeading ?? "From idea to launch, automation, and"} <span className="text-accent-ink">{ar?.overviewAccent ?? "long-term support."}</span>
            </h2>
            <p className="measure mt-6 text-lead text-text-2">
              {ar?.overviewBody ?? "Whether you are building a new MVP, improving an existing platform, or replacing manual work, we help you choose the right technical path before moving into delivery."}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/process" variant="secondary" size="md" arrow>{ar?.processLink ?? "See our process"}</Button>
              <Button href="/contact" size="md" arrow>{ar?.contactLink ?? "Start a conversation"}</Button>
            </div>
          </Reveal>
          <Reveal kind="right">
            <div className="services-editorial-image group relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] border border-black/10 bg-white shadow-e2">
              <Image src="/images/services/overview/end-to-end-delivery-system.webp" alt={ar?.overviewAlt ?? "An end-to-end product delivery system connecting strategy, design, engineering, AI, cloud, and improvement"} fill sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover transition-transform duration-1000 [transition-timing-function:var(--ease-expo)] group-hover:scale-[1.025]" />
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-[var(--radius-sm)] border border-white/70 bg-white/85 px-4 py-3 text-xs text-black/65 shadow-e1 backdrop-blur-md">
                <span className="font-mono tracking-[0.12em] uppercase">{ar?.imageCaption ?? "Plan · Design · Build · Operate"}</span>
                <span className="size-2 rounded-full bg-accent shadow-[0_0_0_5px_rgba(208,161,46,.15)]" />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <div aria-label={ar?.detailsLabel ?? "Service details"}>
            {SERVICES.map((service, index) => {
              const dark = index === 2 || index === 4;
              const reversed = index % 2 === 1;
              const image = SERVICE_IMAGES[service.slug] ?? FALLBACK_SERVICE_IMAGE;
              return (
                <Section key={service.slug} id={service.slug} surface={dark ? "ink" : "paper"} flush className={`services-story scroll-mt-20 ${dark ? "services-story--dark" : "border-t border-black/8"}`}>
                  <article className="shell grid items-center gap-10 py-section lg:grid-cols-2 lg:gap-16">
                    <Reveal kind={reversed ? "right" : "left"} className={reversed ? "lg:order-2" : undefined}>
                      <div className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-black/10 bg-paper-sunken shadow-e2">
                        <Image src={image.src} alt={ar ? `${ar.serviceNumber} ${homeCards[index].title}` : image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="services-story__image object-cover transition-transform duration-1000 [transition-timing-function:var(--ease-expo)] group-hover:scale-[1.035]" />
                        <div className={`absolute inset-0 ${dark ? "bg-gradient-to-t from-black/55 via-transparent to-black/10" : "bg-gradient-to-t from-black/20 via-transparent to-white/5"}`} />
                        <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-2 font-mono text-[0.6875rem] tracking-[0.1em] text-white backdrop-blur-md uppercase"><ServiceIcon name={service.icon} className="size-3.5 text-accent" /> {ar?.serviceNumber ?? "Service"} {String(index + 1).padStart(2, "0")}</span>
                      </div>
                    </Reveal>
                    <Reveal kind={reversed ? "left" : "right"} className={reversed ? "lg:order-1" : undefined}>
                      <span className={`font-mono text-marker font-medium tracking-[0.16em] uppercase ${dark ? "text-signal" : "text-accent-ink"}`}>{ar?.cards[index].short ?? service.shortTitle}</span>
                      <h2 className={`mt-4 max-w-[16ch] text-d3 ${dark ? "text-white" : "text-text"}`}>{ar ? homeCards[index].title : service.title}</h2>
                      <p className={`measure mt-5 text-base leading-relaxed ${dark ? "text-ontext-2" : "text-text-2"}`}>{ar?.cards[index].delivers ?? service.delivers}</p>
                      <dl className={`mt-7 grid gap-5 border-y py-6 sm:grid-cols-2 ${dark ? "border-white/12" : "border-black/10"}`}><div><dt className={`font-mono text-[0.6875rem] tracking-[0.12em] uppercase ${dark ? "text-white/45" : "text-text-4"}`}>{ar?.audienceLabel ?? "Who it is for"}</dt><dd className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-text-2"}`}>{ar?.cards[index].audience ?? service.audience}</dd></div><div><dt className={`font-mono text-[0.6875rem] tracking-[0.12em] uppercase ${dark ? "text-white/45" : "text-text-4"}`}>{ar?.problemLabel ?? "Problem it solves"}</dt><dd className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-text-2"}`}>{ar?.cards[index].problem ?? service.problem}</dd></div></dl>
                      <ul className="mt-6 flex flex-wrap gap-2">{(ar?.cards[index].features ?? service.features).map((feature) => <li key={feature} className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${dark ? "border-white/12 bg-white/[.045] text-white/75" : "border-black/10 bg-white text-black/70 shadow-e1"}`}><Check aria-hidden className="size-3 text-accent" strokeWidth={2.4} /> {feature}</li>)}</ul>
                      <Button href={service.href} size="md" variant={dark ? "onDark" : "primary"} className="mt-7" arrow>{ar ? homeCards[index].cta : service.cta}</Button>
                    </Reveal>
                  </article>
                </Section>
              );
            })}
      </div>

      <JsonLd data={breadcrumbSchema([{ name: ar?.home ?? "Home", path: "/" }, { name: ar?.services ?? "Services", path: "/services" }])} />
    </div>
  );
}
