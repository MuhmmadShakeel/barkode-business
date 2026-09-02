import Image from "next/image";
import Link from "next/link";
import { Check, Clock3, Layers3, MoveUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Marker } from "@/components/ui/Section";
import { ENGAGEMENT_MODELS } from "@/lib/content";
import { JsonLd, breadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Engagement Models — Flexible ways to work with Barakode",
  description: "Structured engagement models for product builds, AI automation, and ongoing support. Custom quotes after discovery — no misleading fixed-price tables.",
  path: "/engagement-models",
});

const MODEL_IMAGES = [
  { src: "/images/contact/roadmap.webp", alt: "Product roadmap and planning workspace" },
  { src: "/images/projects/originals/beyut-cover.webp", alt: "Custom digital product presented on multiple devices" },
  { src: "/images/home/ai-business-leader.webp", alt: "Business leader reviewing an AI-enabled workflow" },
  { src: "/images/home/glass-company-headquarters.webp", alt: "Modern technology company headquarters" },
  { src: "/images/process/support-growth.webp", alt: "Ongoing product support and growth planning" },
];

const SECONDARY_IMAGES = [
  "/images/process/discovery.webp",
  "/images/projects/beyut-libya.webp",
  "/images/projects/openinterview-detail.jpg",
  "/images/process/development.webp",
  "/images/process/qa-delivery.webp",
];

function ModelCopy({ model, index, dark = false }: { model: (typeof ENGAGEMENT_MODELS)[number]; index: number; dark?: boolean }) {
  return (
    <Reveal kind={index % 2 ? "right" : "left"} className="engagement-copy">
      <div className={`font-mono text-xs tracking-[.14em] uppercase ${dark ? "text-signal" : "text-accent-ink"}`}>0{index + 1} / 0{ENGAGEMENT_MODELS.length}</div>
      <h2 className={`mt-4 max-w-[14ch] text-d2 ${dark ? "text-white" : "text-text"}`}>{model.name}</h2>
      <p className={`mt-4 max-w-xl text-lead ${dark ? "text-ontext-2" : "text-text-2"}`}><span className={dark ? "text-white" : "text-text"}>Best for: </span>{model.bestFor}</p>
      <div className={`mt-6 border-t pt-5 ${dark ? "border-rule-dark" : "border-rule"}`}>
        <p className={`font-mono text-xs tracking-[.14em] uppercase ${dark ? "text-ontext-3" : "text-text-4"}`}>What is included</p>
        <ul className="mt-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">{model.included.map((item) => <li key={item} className={`flex items-start gap-2 text-[.8125rem] ${dark ? "text-ontext-2" : "text-text-2"}`}><Check className="mt-0.5 size-3.5 shrink-0 text-accent" strokeWidth={2.3} />{item}</li>)}</ul>
      </div>
      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><Button href={model.cta.href} variant={dark ? "onDark" : "primary"} size="md" arrow>{model.cta.label}</Button><span className={`inline-flex items-center gap-2 text-xs ${dark ? "text-ontext-3" : "text-text-3"}`}><Clock3 className="size-4" />{model.pricing}</span></div>
    </Reveal>
  );
}

export default function EngagementModelsPage() {
  return (
    <>
      <section className="engagement-hero relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-ink-950 py-28 text-center text-white sm:py-32 lg:h-[100svh] lg:min-h-[38rem] lg:py-0" data-surface="dark">
        <Image src="/images/hero/engagement-models-hero-v2.webp" alt="Business and technology leaders collaborating in a modern boardroom" fill priority sizes="100vw" className="engagement-hero-image object-cover object-center" />
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,8,10,.64)_0%,rgba(4,8,10,.46)_36%,rgba(4,8,10,.72)_100%)]" />
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,9,.16)_42%,rgba(3,7,9,.66)_100%)]" />
        <div aria-hidden className="engagement-grid absolute inset-0 opacity-20" />

        <div className="shell relative z-10 flex h-full flex-col items-center justify-center lg:pt-20">
          <Reveal className="flex max-w-[58rem] flex-col items-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/25 px-4 py-2 backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-accent-bright shadow-[0_0_14px_rgba(226,184,92,.9)]" />
              <span className="font-mono text-[.6875rem] tracking-[.16em] text-white/80 uppercase">Engagement Models</span>
            </div>
            <h1 className="site-hero-heading mt-7 max-w-[15ch] text-d1 text-white drop-shadow-[0_4px_30px_rgba(0,0,0,.5)]">The right partnership for your <span className="text-accent-bright">next move.</span></h1>
            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <Button href="/contact?intent=engagement-model" size="lg" arrow>Find the Right Model</Button>
              <Button href="/contact?intent=strategy-call" variant="onDarkGhost" size="lg" className="bg-black/15 backdrop-blur-md">Book a Free Project Discovery Call</Button>
            </div>
          </Reveal>

        </div>
      </section>

      <section id="model-navigator" className="flex items-center bg-paper py-14 sm:py-20 lg:min-h-[100svh] lg:py-24" aria-labelledby="navigator-heading">
        <div className="shell w-full">
          <Reveal className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div><Marker>Choose your starting point</Marker><h2 id="navigator-heading" className="mt-5 max-w-[15ch] text-d2 text-text">Start with the business need. <span className="text-accent-ink">The model follows.</span></h2></div>
            <p className="max-w-md text-text-3">Five clear ways to work together—from validating one idea to extending your product team.</p>
          </Reveal>
          <RevealGroup as="ol" className="mt-10 grid border-y border-rule sm:mt-14 sm:grid-cols-2 lg:grid-cols-5">
            {ENGAGEMENT_MODELS.map((model, i) => (
              <RevealItem key={model.slug} as="li" index={i} className="border-b border-rule last:border-b-0 lg:border-r lg:border-b-0 lg:last:border-r-0">
                <Link href={`#${model.slug}`} className="group/nav flex min-h-48 flex-col justify-between p-6 transition-colors duration-300 hover:bg-ink-950 hover:text-white lg:min-h-64">
                  <span className="flex items-center justify-between font-mono text-xs text-text-4 group-hover/nav:text-signal">0{i + 1}<MoveUpRight className="size-4 transition-transform group-hover/nav:translate-x-1 group-hover/nav:-translate-y-1" /></span>
                  <span><span className="block text-sm text-text-3 group-hover/nav:text-ontext-3">{model.trigger}</span><span className="mt-2 block font-display text-lg font-semibold text-text group-hover/nav:text-white">{model.name}</span></span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {ENGAGEMENT_MODELS.map((model, i) => {
        const image = MODEL_IMAGES[i];
        if (i === 0) return (
          <section key={model.slug} id={model.slug} className="engagement-model engagement-editorial flex scroll-mt-20 items-center overflow-hidden bg-paper-sunken py-20">
            <div className="shell w-full"><div className="grid items-center gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
              <ModelCopy model={model} index={i} />
              <Reveal kind="right" className="relative grid grid-cols-[.72fr_1fr] items-end gap-3 sm:gap-4">
                <div className="relative mb-6 h-[15rem] overflow-hidden rounded-t-full shadow-e3 sm:mb-10 sm:h-[22rem]"><Image src={SECONDARY_IMAGES[i]} alt="Discovery workshop in progress" fill sizes="(max-width: 640px) 42vw, 24vw" className="object-cover" /></div>
                <div className="relative h-[22rem] overflow-hidden rounded-[1.25rem] shadow-e4 sm:h-[32rem] sm:rounded-[1.5rem]"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 58vw, 40vw" className="object-cover" /><div className="absolute inset-x-3 bottom-3 rounded-xl bg-white/90 p-3 backdrop-blur sm:inset-x-5 sm:bottom-5 sm:p-4"><span className="font-mono text-[.625rem] text-accent-ink uppercase">Focused delivery</span><p className="mt-1 text-xs font-medium text-text sm:text-sm">{model.timeline}</p></div></div>
              </Reveal>
            </div></div>
          </section>
        );
        if (i === 1) return (
          <section key={model.slug} id={model.slug} className="engagement-model flex scroll-mt-20 items-center overflow-hidden border-y border-rule bg-white py-16 sm:py-20">
            <div className="shell w-full">
              <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-24">
                <ModelCopy model={model} index={i} />
                <Reveal kind="right">
                  <div className="group/product relative aspect-[16/11] overflow-hidden rounded-[var(--radius-lg)] bg-paper-sunken shadow-e4">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 56vw"
                      className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-expo)] group-hover/product:scale-[1.025]"
                    />
                    <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
        if (i === 2) return (
          <section key={model.slug} id={model.slug} data-surface="dark" className="engagement-model engagement-control-room flex scroll-mt-20 items-center overflow-hidden bg-ink-950 py-20">
            <div className="shell w-full"><div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
              <Reveal kind="left" className="relative min-h-[23rem] [perspective:1200px] sm:min-h-[30rem] lg:min-h-[34rem]">
                <div className="absolute inset-4 overflow-hidden rounded-full border border-accent/30 shadow-[0_0_90px_rgba(200,146,42,.18)] sm:inset-8"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 90vw, 48vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" /></div>
                {["Discover", "Prototype", "Integrate", "Review"].map((step, n) => <span key={step} className={`engagement-satellite engagement-satellite-${n + 1}`}>0{n + 1} · {step}</span>)}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-accent/30 bg-ink-950 px-5 py-2 text-center text-xs text-signal shadow-e3">{model.timeline}</div>
              </Reveal>
              <ModelCopy model={model} index={i} dark />
            </div></div>
          </section>
        );
        if (i === 3) return (
          <section key={model.slug} id={model.slug} className="engagement-model engagement-team flex scroll-mt-20 items-center overflow-hidden bg-paper py-20">
            <div className="shell w-full"><div className="grid items-center gap-10 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
              <ModelCopy model={model} index={i} />
              <Reveal kind="right" className="grid h-[24rem] grid-cols-5 grid-rows-5 gap-2.5 sm:h-[30rem] sm:gap-4 lg:h-[35rem]">
                <div className="relative col-span-3 row-span-5 overflow-hidden rounded-[1.5rem] shadow-e4"><Image src={image.src} alt={image.alt} fill sizes="32vw" className="object-cover" /></div>
                <div className="relative col-span-2 row-span-3 overflow-hidden rounded-[1.5rem] shadow-e3"><Image src={SECONDARY_IMAGES[i]} alt="Product engineers working together" fill sizes="20vw" className="object-cover" /></div>
                <div className="col-span-2 row-span-2 flex flex-col justify-between rounded-[1.25rem] bg-accent p-3 text-ink-950 shadow-e3 sm:rounded-[1.5rem] sm:p-6"><Layers3 className="size-6 sm:size-8" /><div><span className="font-mono text-[.5rem] uppercase sm:text-[.625rem]">Team rhythm</span><p className="mt-1 font-display text-xs font-semibold sm:text-lg">{model.timeline}</p></div></div>
              </Reveal>
            </div></div>
          </section>
        );
        return (
          <section key={model.slug} id={model.slug} className="engagement-model engagement-support relative flex scroll-mt-20 items-center overflow-hidden border-t border-rule py-20">
            <div className="shell relative w-full"><div className="grid items-center gap-10 lg:grid-cols-[1fr_.82fr] lg:gap-20">
              <ModelCopy model={model} index={i} />
              <Reveal kind="right" className="rounded-[1.5rem] border border-rule bg-white p-4 shadow-e3 sm:rounded-[1.75rem] sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule pb-5"><span className="font-mono text-xs text-text-3 uppercase">Product health</span><span className="flex items-center gap-2 text-xs text-emerald-700"><span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,.35)]" />Active support</span></div>
                <div className="mt-5 grid grid-cols-2 gap-3">{["Monitoring", "Updates", "Performance", "Security"].map((item, n) => <div key={item} className="rounded-xl border border-rule bg-paper-sunken p-4"><span className="font-mono text-[.625rem] text-accent-ink">0{n + 1}</span><p className="mt-5 text-sm font-medium text-text">{item}</p><div className="mt-3 h-1 overflow-hidden rounded-full bg-rule"><div className="h-full rounded-full bg-accent" style={{ width: `${72 + n * 7}%` }} /></div></div>)}</div>
                <div className="relative mt-4 h-32 overflow-hidden rounded-xl"><Image src={SECONDARY_IMAGES[i]} alt="Quality assurance and product delivery" fill sizes="36vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" /><p className="absolute bottom-4 left-4 text-sm font-medium text-white">{model.timeline}</p></div>
              </Reveal>
            </div></div>
          </section>
        );
      })}
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Engagement Models", path: "/engagement-models" }])} />
    </>
  );
}
