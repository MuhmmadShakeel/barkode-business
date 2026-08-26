import { Section, SectionHead } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TraceRule } from "@/components/ui/Schematic";
import { TECH_GROUPS, type TechGroup } from "@/lib/services";
import { cn } from "@/lib/utils";

/**
 * Technology groups as a specification table rather than a badge soup — the
 * reader is scanning for whether their stack is here, so the group label leads
 * and the items sit in a single readable run.
 */
export function TechStack({
  groups = TECH_GROUPS,
  marker = "Technologies",
  heading = "Technologies we use to build",
  accent = "modern products",
  intro,
  surface = "sunken",
  compact = false,
}: {
  groups?: TechGroup[];
  marker?: string;
  heading?: string;
  accent?: string;
  intro?: string;
  surface?: "paper" | "sunken";
  /** Drops the notes column — used inside service pages. */
  compact?: boolean;
}) {
  return (
    <Section surface={surface} aria-labelledby="tech-heading">
      <div className="shell">
        <Reveal>
          <SectionHead
            id="tech-heading"
            marker={marker}
            lead={heading}
            accent={accent}
            intro={intro}
          />
        </Reveal>

        <RevealGroup className="mt-14" as="dl">
          {groups.map((g) => (
            <RevealItem key={g.group}>
              <div
                className={cn(
                  "grid gap-x-8 gap-y-3 border-b border-rule py-6 first:border-t",
                  compact
                    ? "sm:grid-cols-[minmax(0,9rem)_minmax(0,1fr)]"
                    : "md:grid-cols-[minmax(0,9rem)_minmax(0,14rem)_minmax(0,1fr)]",
                )}
              >
                <dt className="font-display text-[1.0625rem] font-semibold text-text">{g.group}</dt>
                {!compact && <p className="text-sm text-text-3">{g.note}</p>}
                <dd className="flex flex-wrap gap-x-2 gap-y-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-[var(--radius-xs)] border border-rule bg-paper-raised px-2.5 py-1 font-mono text-xs text-text-2 shadow-e1"
                    >
                      <span aria-hidden className="size-1 rounded-full bg-accent" />
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10">
          <div className="flex items-start gap-4">
            <TraceRule className="mt-3 w-14 shrink-0" />
            <p className="measure text-sm text-text-3">
              The stack follows the product, not the other way round. We pick from these based on
              scalability needs, integrations, security requirements, timeline, and who has to
              maintain it after we hand over.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
