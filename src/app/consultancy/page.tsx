import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Marker, Section, SectionHead } from "@/components/ui/Section";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { CONSULTANCY_DETAILS, getConsultancyMenuItem } from "@/lib/consultancy";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ title: "Technology & Product Consultancy", description: "Practical technology, product, AI, design, and operations consultancy for teams planning their next critical decision.", path: "/consultancy" });

export default function ConsultancyPage() {
  return <div className="consultancy-page">
    <PageHero marker="Consultancy" heading="A clearer path through" accent="complex technical decisions" trail="." body="Barakode helps teams turn uncertainty into a practical direction, with independent advice grounded in the outcome they need to reach." primary={{ label: "Discuss Your Challenge", href: "/contact?intent=consultancy" }} secondary={{ label: "View Our Work", href: "/case-studies" }} crumbs={[{ name: "Home", path: "/" }, { name: "Consultancy", path: "/consultancy" }]} minimalBackdrop className="consultancy-page-hero" />
    <Section surface="paper" aria-labelledby="areas-heading"><div className="shell"><Reveal><SectionHead id="areas-heading" marker="Advisory areas" lead="The decision you need to make," accent="made more actionable" intro="Select an area to see how we structure the work, who it is for, and the outcomes your team can expect." /></Reveal><RevealGroup as="ul" className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{CONSULTANCY_DETAILS.map((detail) => { const item = getConsultancyMenuItem(detail.slug); return item && <RevealItem key={detail.slug} as="li" className="h-full"><Link href={item.href} className="group flex h-full min-h-64 flex-col rounded-[var(--radius-md)] border border-rule bg-paper-raised p-6 shadow-e1 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-e2"><ServiceIcon name={item.icon} className="size-6 text-accent" /><h2 className="mt-10 font-display text-xl font-semibold text-text">{item.label}</h2><p className="mt-3 flex-1 text-sm leading-relaxed text-text-3">{detail.overview}</p><span className="mt-7 flex items-center gap-2 text-sm font-medium text-accent-ink">Explore advisory <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" /></span></Link></RevealItem>; })}</RevealGroup></div></Section>
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Consultancy", path: "/consultancy" }])} />
  </div>;
}
