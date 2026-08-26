"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { PROCESS } from "@/lib/content";
import { cn } from "@/lib/utils";

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
  className,
}: {
  /** Full "what happens / you receive / why" treatment, for the Process page. */
  detailed?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 55%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 110, damping: 30, mass: 0.5 });
  const height = useTransform(fill, [0, 1], ["0%", "100%"]);

  return (
    <ol ref={ref} className={cn("relative", className)} data-reveal-group>
      {/* The unlit trace */}
      <span
        aria-hidden
        className="absolute top-2 bottom-2 left-[1.4375rem] w-px bg-rule sm:left-[1.6875rem]"
      />
      {/* The lit trace */}
      <motion.span
        aria-hidden
        style={{ height }}
        className="absolute top-2 left-[1.4375rem] w-px bg-gradient-to-b from-accent via-accent to-signal sm:left-[1.6875rem]"
      />

      {PROCESS.map((step, i) => (
        <li
          key={step.id}
          data-reveal="rise"
          className={cn(
            "relative pl-[3.75rem] sm:pl-[4.5rem]",
            i === 0 ? "pb-10" : "py-10",
            i === PROCESS.length - 1 && "pb-0",
          )}
        >
          {/* Node */}
          <span
            aria-hidden
            className="absolute top-1 left-0 grid size-[2.875rem] place-items-center rounded-full border border-rule bg-paper-raised shadow-e1 sm:size-[3.375rem]"
          >
            <span className="grid size-[1.625rem] place-items-center rounded-full bg-accent-soft font-mono text-[0.6875rem] font-medium text-accent-ink tabular-nums sm:size-8 sm:text-xs">
              {String(i + 1).padStart(2, "0")}
            </span>
          </span>

          <h3 className="text-d4 text-text">{step.title}</h3>

          {detailed ? (
            <div className="mt-5 grid gap-x-10 gap-y-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
              <div>
                <p className="measure text-text-2">{step.what}</p>
                <p className="measure mt-4 border-l border-accent/40 pl-4 text-sm text-text-3 italic">
                  {step.why}
                </p>
              </div>
              <div className="rounded-[var(--radius-md)] border border-rule bg-paper-sunken p-5">
                <p className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                  You receive
                </p>
                <ul className="mt-3.5 flex flex-col gap-2">
                  {step.receives.map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-text-2">
                      <span
                        aria-hidden
                        className="mt-[0.5rem] size-1 shrink-0 rounded-full bg-accent"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <p className="measure mt-2.5 text-text-2">{step.short}</p>
          )}
        </li>
      ))}
    </ol>
  );
}
