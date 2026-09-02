"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, MoveUpRight } from "lucide-react";

export type ClientOutcomeSlide = {
  slug: string;
  name: string;
  clientType: string;
  industry: string;
  cover: string;
  coverAlt: string;
  outcome: string;
};

export function ClientOutcomesCarousel({ items }: { items: ClientOutcomeSlide[] }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const study = items[active];

  const move = (nextDirection: number) => {
    setDirection(nextDirection);
    setActive((current) => (current + nextDirection + items.length) % items.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => move(1), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const slideClass = direction > 0 ? "client-slide-in-right" : "client-slide-in-left";

  return (
    <div
      className="overflow-hidden rounded-[var(--radius-lg)] border border-rule-dark bg-ink-900 shadow-dark-e2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]">
        <div className="relative min-h-[18rem] overflow-hidden bg-ink-950 sm:min-h-[25rem] lg:min-h-[32rem]">
            <div key={study.slug} className={`absolute inset-0 ${slideClass}`}>
              <Image
                src={study.cover}
                alt={study.coverAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-black/15" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
                <div>
                  <span className="font-mono text-[0.625rem] tracking-[.14em] text-signal uppercase">
                    Client project {String(active + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">{study.name}</p>
                </div>
                <span className="hidden rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-xs text-white/75 backdrop-blur sm:inline-flex">
                  {study.industry}
                </span>
              </div>
            </div>
        </div>

        <div className="relative flex min-h-[25rem] flex-col overflow-hidden p-6 sm:p-9 lg:min-h-[32rem] lg:p-11">
            <div key={study.slug} className={`flex flex-1 flex-col ${slideClass}`}>
              <span className="font-mono text-[0.6875rem] tracking-[.14em] text-signal uppercase">
                Verified project outcome
              </span>
              <h3 className="mt-5 max-w-[16ch] font-display text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.08] font-semibold text-white">
                Delivery measured by what changed for the business.
              </h3>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-ontext-2">
                {study.outcome}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ontext-3">{study.clientType}</p>
              <Link
                href={`/case-studies/${study.slug}`}
                className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-accent-bright transition-colors hover:text-white"
              >
                Read the full case study <MoveUpRight className="size-4" />
              </Link>
            </div>

          <div className="mt-7 flex items-center justify-between gap-5 border-t border-rule-dark pt-5">
            <div className="flex gap-2">
              {items.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => {
                    setDirection(index > active ? 1 : -1);
                    setActive(index);
                  }}
                  aria-label={`Show ${item.name}`}
                  aria-current={index === active ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === active ? "w-8 bg-accent" : "w-3 bg-white/20 hover:bg-white/45"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => move(-1)} aria-label="Previous client outcome" className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-accent/50 hover:text-accent-bright">
                <ArrowLeft className="size-4" />
              </button>
              <button type="button" onClick={() => move(1)} aria-label="Next client outcome" className="grid size-10 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-accent/50 hover:text-accent-bright">
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
