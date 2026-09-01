"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { PROCESS } from "@/lib/content";
import { cn } from "@/lib/utils";

const PROCESS_IMAGES = [
  ["/images/process/discovery.webp", "Business discovery and requirement planning session"],
  ["/images/process/product-strategy.webp", "Product strategy and user experience planning workshop"],
  ["/images/services/product-design.webp", "Product interface design and prototyping workflow"],
  ["/images/contact/roadmap.webp", "Development roadmap with milestones and delivery checkpoints"],
  ["/images/process/development.webp", "Software engineers building a digital product"],
  ["/images/services/ai-automation.webp", "AI automation and systems integration workflow"],
  ["/images/process/qa-delivery.webp", "Quality assurance testing and controlled product delivery"],
  ["/images/process/support-growth.webp", "Long-term product support, monitoring, and growth planning"],
] as const;

/**
 * THE PROCESS TRACE — the site's second authored motion moment.
 *
 * A single hairline runs the length of the eight steps and fills as the reader
 * scrolls, with each node lighting as its step is reached. It is the same
 * device as the mark's dashed connectors and the hero pipeline: one idea,
 * three appearances.
 *
 * The steps themselves are ordinary server-rendered content using the shared
 * CSS reveal; only the fill is scroll-linked. Without JS the trace renders as
 * a plain rule and every step reads normally.
 */
export function ProcessTimeline({
  detailed = false,
  containedScroll = false,
  className,
}: {
  /** Full "what happens / you receive / why" treatment, for the Process page. */
  detailed?: boolean;
  /** Uses this list as its own scroll viewport for compact homepage layouts. */
  containedScroll?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLOListElement>(null);
  const drag = useRef({ active: false, y: 0, scrollTop: 0 });
  const { scrollYProgress } = useScroll(
    containedScroll
      ? { container: ref }
      : { target: ref, offset: ["start 72%", "end 55%"] },
  );
  const fill = useSpring(scrollYProgress, { stiffness: 110, damping: 30, mass: 0.5 });
  const height = useTransform(fill, [0, 1], ["0%", "100%"]);

  return (
    <ol
      ref={ref}
      className={cn(
        "relative",
        containedScroll && "process-scroll h-full cursor-grab snap-y snap-proximity overflow-y-auto overscroll-contain pr-3 select-none sm:pr-5",
        className,
      )}
      tabIndex={containedScroll ? 0 : undefined}
      aria-label={containedScroll ? "Scrollable product delivery process" : undefined}
      onPointerDown={containedScroll ? (event) => {
        if (event.button !== 0) return;
        drag.current = { active: true, y: event.clientY, scrollTop: event.currentTarget.scrollTop };
        event.currentTarget.setPointerCapture(event.pointerId);
        event.currentTarget.dataset.dragging = "true";
      } : undefined}
      onPointerMove={containedScroll ? (event) => {
        if (!drag.current.active) return;
        event.currentTarget.scrollTop = drag.current.scrollTop - (event.clientY - drag.current.y);
      } : undefined}
      onPointerUp={containedScroll ? (event) => {
        drag.current.active = false;
        event.currentTarget.releasePointerCapture(event.pointerId);
        delete event.currentTarget.dataset.dragging;
      } : undefined}
      onPointerCancel={containedScroll ? (event) => {
        drag.current.active = false;
        delete event.currentTarget.dataset.dragging;
      } : undefined}
      onKeyDown={containedScroll ? (event) => {
        if (!["ArrowDown", "ArrowUp", "PageDown", "PageUp"].includes(event.key)) return;
        event.preventDefault();
        const direction = event.key === "ArrowDown" || event.key === "PageDown" ? 1 : -1;
        const distance = event.key.startsWith("Page") ? event.currentTarget.clientHeight * 0.75 : 88;
        event.currentTarget.scrollBy({ top: direction * distance, behavior: "smooth" });
      } : undefined}
      data-reveal-group
    >
      {/* The unlit trace */}
      <span
        aria-hidden
        className={cn("absolute top-2 bottom-2 w-px bg-rule", detailed ? "left-1/2 hidden -translate-x-1/2 lg:block" : "left-[1.4375rem] sm:left-[1.6875rem]")}
      />
      {/* The lit trace */}
      <motion.span
        aria-hidden
        style={{ height }}
        className={cn("absolute top-2 w-px bg-gradient-to-b from-accent via-accent to-signal", detailed ? "left-1/2 hidden -translate-x-1/2 lg:block" : "left-[1.4375rem] sm:left-[1.6875rem]")}
      />

      {PROCESS.map((step, i) => (
        <li
          key={step.id}
          data-reveal="rise"
          className={cn(
            "relative",
            detailed ? "lg:grid lg:grid-cols-2 lg:items-center lg:gap-20" : "pl-[3.75rem] sm:pl-[4.5rem]",
            containedScroll && "snap-start",
            i === 0 ? (containedScroll ? "pb-6" : detailed ? "pb-14" : "pb-10") : containedScroll ? "py-6" : detailed ? "py-14" : "py-10",
            i === PROCESS.length - 1 && "pb-0",
          )}
        >
          {/* Node */}
          <span
            aria-hidden
            className={cn("absolute z-10 place-items-center rounded-full border border-rule bg-paper-raised shadow-e1", detailed ? "top-1/2 left-1/2 hidden size-[3.375rem] -translate-x-1/2 -translate-y-1/2 lg:grid" : "top-1 left-0 grid size-[2.875rem] sm:size-[3.375rem]")}
          >
            <span className="grid size-[1.625rem] place-items-center rounded-full bg-accent-soft font-mono text-[0.6875rem] font-medium text-accent-ink tabular-nums sm:size-8 sm:text-xs">
              {String(i + 1).padStart(2, "0")}
            </span>
          </span>

          {detailed ? (
            <>
              <div className={cn("relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] bg-ink-900 shadow-e3", i % 2 === 1 && "lg:order-2")}>
                <Image src={PROCESS_IMAGES[i][0]} alt={PROCESS_IMAGES[i][1]} fill sizes="(max-width: 1024px) 100vw, 46vw" className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-expo)] hover:scale-[1.025]" />
                <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-black/10" />
              </div>
              <div className={cn("mt-7 lg:mt-0", i % 2 === 1 && "lg:order-1 lg:text-right")}>
                <div className={cn("flex items-center gap-3", i % 2 === 1 && "lg:justify-end")}>
                  <span className="grid size-8 place-items-center rounded-full bg-accent-soft font-mono text-xs font-medium text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-mono text-[.625rem] tracking-[.14em] text-text-4 uppercase">Process stage</span>
                </div>
                <h3 className="mt-4 text-d3 text-text">{step.title}</h3>
                <p className="measure text-text-2">{step.what}</p>
                <p className={cn("measure mt-4 border-accent/40 text-sm text-text-3 italic", i % 2 === 1 ? "lg:ml-auto lg:border-r lg:pr-4" : "border-l pl-4")}>
                  {step.why}
                </p>
                <p className="mt-6 font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">You receive</p>
                <ul className={cn("mt-3 flex flex-wrap gap-2", i % 2 === 1 && "lg:justify-end")}>
                  {step.receives.map((r) => (
                    <li key={r} className="rounded-full border border-rule bg-white px-3 py-1.5 text-xs text-text-2 shadow-e1">{r}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <div><h3 className="text-d4 text-text">{step.title}</h3><p className="measure mt-2.5 text-text-2">{step.short}</p></div>
          )}
        </li>
      ))}
    </ol>
  );
}
