import { ArrowRight, UserCheck } from "lucide-react";
import type { Workflow } from "@/lib/ai-automation";
import { cn } from "@/lib/utils";

/**
 * A workflow drawn as a schematic run: labelled nodes joined by traces, with
 * the human review gate marked in signal cyan so the oversight point is the
 * most visible thing in the diagram. That emphasis is the argument — the brief
 * asks for AI positioned with limits, not AI positioned as autonomy.
 *
 * Server-rendered; the step cascade comes from the shared CSS reveal system.
 */
export function WorkflowDiagram({
  workflow,
  tone = "light",
  className,
}: {
  workflow: Workflow;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border p-5 sm:p-6",
        dark ? "border-rule-dark bg-white/[0.025]" : "border-rule bg-paper-raised shadow-e1",
        className,
      )}
    >
      <h3
        className={cn(
          "font-mono text-marker font-medium tracking-[0.16em] uppercase",
          dark ? "text-signal" : "text-accent-ink",
        )}
      >
        {workflow.name}
      </h3>

      <ol className="mt-5 flex flex-wrap items-stretch gap-x-1.5 gap-y-3" data-reveal-group>
        {workflow.steps.map((step, i) => (
          <li key={step.label} data-reveal="flat" className="flex items-center gap-1.5">
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-[var(--radius-xs)] border px-2.5 py-1.5 text-xs leading-tight",
                step.human
                  ? dark
                    ? "border-signal/45 bg-signal/10 font-medium text-signal"
                    : "border-signal-ink/35 bg-signal/8 font-medium text-signal-ink"
                  : dark
                    ? "border-rule-dark-strong bg-ink-800 text-ontext-2"
                    : "border-rule bg-paper-sunken text-text-2",
              )}
            >
              {step.human && <UserCheck aria-hidden className="size-3.5 shrink-0" strokeWidth={1.9} />}
              {step.label}
            </span>
            {i < workflow.steps.length - 1 && (
              <ArrowRight
                aria-hidden
                className={cn("size-3.5 shrink-0", dark ? "text-ontext-4" : "text-text-4")}
                strokeWidth={1.8}
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * The before/after the brief asks for on the homepage: a manual process on one
 * side, the same process with an AI layer and a review gate on the other.
 */
export function BeforeAfterWorkflow({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const before = [
    "Request arrives",
    "Someone reads it",
    "Someone searches",
    "Someone types a reply",
    "Someone logs it",
  ];
  const after = [
    { label: "Business input" },
    { label: "AI workflow layer" },
    { label: "Human review", human: true },
    { label: "System update" },
    { label: "Business output" },
  ];

  return (
    <div className="grid items-start gap-4 sm:grid-cols-2">
      <div
        data-reveal="rise"
        className={cn(
          "rounded-[var(--radius-md)] border p-5 shadow-dark-e1 [transform:perspective(1000px)_rotateY(0deg)] [transform-style:preserve-3d] transition-[border-color,box-shadow,transform] duration-500 [transition-timing-function:var(--ease-expo)] hover:[transform:perspective(1000px)_rotateY(3deg)_translate3d(0,-3px,10px)] sm:p-6",
          dark ? "border-white/14 bg-ink-900" : "border-rule-strong bg-paper-sunken",
        )}
      >
        <p
          className={cn(
            "font-mono text-marker font-medium tracking-[0.16em] uppercase",
            dark ? "text-ontext-4" : "text-text-4",
          )}
        >
          Manual process
        </p>
        <ol className="mt-6 flex flex-col gap-3.5">
          {before.map((s, i) => (
            <li key={s} className="flex items-center gap-3">
              <span
                aria-hidden
                className={cn(
                  "grid size-6 shrink-0 place-items-center rounded-full border font-mono text-[0.625rem] tabular-nums",
                  dark ? "border-white/12 text-ontext-4" : "border-rule-strong text-text-4",
                )}
              >
                {i + 1}
              </span>
              <span className={cn("text-sm", dark ? "text-ontext-3" : "text-text-3")}>{s}</span>
            </li>
          ))}
        </ol>
      </div>

      <div
        data-reveal="rise"
        style={{ ["--reveal-i" as string]: 2 }}
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-md)] border p-5 [transform:perspective(1000px)_rotateY(0deg)] [transform-style:preserve-3d] transition-[border-color,box-shadow,transform] duration-500 [transition-timing-function:var(--ease-expo)] hover:[transform:perspective(1000px)_rotateY(-3deg)_translate3d(0,-3px,12px)] sm:p-6",
          dark
            ? "border-accent-bright/30 bg-accent/[0.07] shadow-dark-e2"
            : "border-accent/30 bg-accent-soft shadow-e2",
        )}
      >
        <p
          className={cn(
            "font-mono text-marker font-medium tracking-[0.16em] uppercase",
            dark ? "text-accent-bright" : "text-accent-ink",
          )}
        >
          With an AI workflow layer
        </p>
        <ol className="mt-6 flex flex-col gap-3.5">
          {after.map((s, i) => (
            <li key={s.label} className="flex items-center gap-3">
              <span
                aria-hidden
                className={cn(
                  "grid size-6 shrink-0 place-items-center rounded-full border font-mono text-[0.625rem] tabular-nums",
                  s.human
                    ? dark
                      ? "border-signal/50 bg-signal/12 text-signal"
                      : "border-signal-ink/40 bg-signal/10 text-signal-ink"
                    : dark
                      ? "border-accent-bright/35 text-accent-bright"
                      : "border-accent/35 text-accent-ink",
                )}
              >
                {i + 1}
              </span>
              <span
                className={cn(
                  "text-sm",
                  s.human
                    ? dark
                      ? "font-medium text-signal"
                      : "font-medium text-signal-ink"
                    : dark
                      ? "text-white"
                      : "text-text",
                )}
              >
                {s.label}
              </span>
              {s.human && (
                <span
                  className={cn(
                    "ml-auto rounded-[2px] px-1.5 py-0.5 font-mono text-[0.5625rem] tracking-[0.1em] uppercase",
                    dark ? "bg-signal/14 text-signal" : "bg-signal/12 text-signal-ink",
                  )}
                >
                  Gate
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
