"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: string };

/**
 * FAQ accordion. Single-open, because these are alternatives rather than a
 * checklist — the reader wants one answer, not an accumulation.
 *
 * Every answer is in the server-rendered HTML. The collapse is a CSS
 * `grid-template-rows: 0fr → 1fr` transition scoped to `.js-motion`, so with
 * JS disabled the panel simply stays open and all the content is readable
 * rather than being locked behind a button that cannot work.
 */
export function Accordion({
  items,
  tone = "light",
  defaultOpen = -1,
  className,
}: {
  items: AccordionItem[];
  tone?: "light" | "dark";
  /** Index open on first paint. -1 opens nothing. */
  defaultOpen?: number;
  className?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const uid = useId();
  const dark = tone === "dark";

  return (
    <ul className={cn("border-t", dark ? "border-rule-dark" : "border-rule", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${uid}-panel-${i}`;
        const btnId = `${uid}-btn-${i}`;
        return (
          <li key={item.q} className={cn("border-b", dark ? "border-rule-dark" : "border-rule")}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group/acc flex w-full items-start gap-5 py-5 text-left sm:py-6"
              >
                <span
                  className={cn(
                    "flex-1 text-[1.0625rem] leading-snug font-medium transition-colors duration-200 sm:text-[1.125rem]",
                    isOpen
                      ? dark
                        ? "text-white"
                        : "text-accent-ink"
                      : dark
                        ? "text-ontext-2 group-hover/acc:text-white"
                        : "text-text group-hover/acc:text-accent-ink",
                  )}
                >
                  {item.q}
                </span>
                <span
                  className={cn(
                    "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full border transition-[transform,border-color,background-color,color] duration-300 [transition-timing-function:var(--ease-expo)]",
                    isOpen && "rotate-45",
                    isOpen
                      ? dark
                        ? "border-signal/50 bg-signal/12 text-signal"
                        : "border-accent/40 bg-accent-soft text-accent-ink"
                      : dark
                        ? "border-rule-dark-strong text-ontext-3 group-hover/acc:border-white/35"
                        : "border-rule-strong text-text-3 group-hover/acc:border-accent/40",
                  )}
                >
                  <Plus aria-hidden className="size-3.5" strokeWidth={2} />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              data-acc-panel=""
              data-open={isOpen ? "true" : "false"}
            >
              <div className="min-h-0 overflow-hidden">
                <p
                  className={cn(
                    "measure pr-12 pb-6 text-[1rem] leading-relaxed",
                    dark ? "text-ontext-2" : "text-text-2",
                  )}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
