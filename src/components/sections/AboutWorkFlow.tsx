"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

import { HOW_WE_WORK } from "@/lib/content";
import { cn } from "@/lib/utils";

const STEP_DETAILS = [
  "We begin with the outcome the business needs, the people involved, and the constraints that shape the right solution.",
  "We document the current journey, identify friction, and define how information and decisions should move through the product.",
  "We turn priorities into a practical scope, select the right technical approach, and make dependencies visible before development begins.",
  "We shape clear user journeys, responsive interfaces, and reusable patterns so the product feels intuitive before it is built.",
  "We deliver in focused increments with planned reviews, visible progress, and clear checkpoints for decisions and feedback.",
  "We validate functionality, responsive behavior, integrations, and edge cases before the product reaches real users.",
  "After delivery, we monitor, maintain, refine, and scale the system as the business and its users continue to grow.",
];

export function AboutWorkFlow() {
  const [open, setOpen] = useState(0);

  return (
    <ol className="relative">
      <span aria-hidden className="absolute top-7 bottom-7 left-[1.375rem] w-px bg-rule-strong" />
      {HOW_WE_WORK.map((label, index) => {
        const active = open === index;
        const panelId = `about-work-step-${index}`;

        return (
          <li key={label} className="relative pl-14">
            <span
              aria-hidden
              className={cn(
                "absolute top-5 left-0 z-10 grid size-11 place-items-center rounded-full border font-mono text-xs tabular-nums transition-[background-color,border-color,color,box-shadow] duration-300",
                active
                  ? "border-accent bg-accent text-ink-950 shadow-[0_0_0_5px_rgba(200,146,42,.12)]"
                  : "border-rule-strong bg-white text-text-3",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className={cn("border-b border-rule transition-colors duration-300", index === 0 && "border-t", active && "border-accent/35")}>
              <button
                type="button"
                aria-expanded={active}
                aria-controls={panelId}
                onClick={() => setOpen(active ? -1 : index)}
                className="group/step flex w-full items-center justify-between gap-5 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4"
              >
                <span className={cn("font-display text-[clamp(1rem,1.65vw,1.35rem)] font-semibold transition-colors duration-300", active ? "text-accent-ink" : "text-text group-hover/step:text-accent-ink")}>
                  {label}
                </span>
                <span className={cn("grid size-8 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,color,transform] duration-300", active ? "rotate-180 border-accent bg-accent-soft text-accent-ink" : "border-rule text-text-4 group-hover/step:border-accent/45 group-hover/step:text-accent-ink")}>
                  <ChevronDown aria-hidden className="size-4" />
                </span>
              </button>

              <div id={panelId} className={cn("grid transition-[grid-template-rows] duration-500 [transition-timing-function:var(--ease-expo)]", active ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="overflow-hidden">
                  <div className="flex gap-3 pb-6 pr-10 text-sm leading-relaxed text-text-2 sm:text-[.9375rem]">
                    <Check aria-hidden className="mt-1 size-4 shrink-0 text-accent" strokeWidth={2.2} />
                    <p className="max-w-2xl">{STEP_DETAILS[index]}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
