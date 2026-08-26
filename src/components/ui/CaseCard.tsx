import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import type { ClientCase, ResearchStudy } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

/**
 * A client engagement card. Carries every field the brief requires on a case
 * study card: name, client type, industry, service category, the challenge in
 * one line, what was delivered, the stack, a real screenshot, and the verified
 * result. Nothing is invented; nothing is padded.
 */
export function ClientCaseCard({
  study,
  priority = false,
  className,
}: {
  study: ClientCase;
  priority?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group/cc relative flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-rule bg-paper-raised shadow-e1 transition-[box-shadow,border-color,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-1 hover:border-accent/35 hover:shadow-e3",
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden border-b border-rule",
          study.tone === "light" ? "bg-paper-deep" : "bg-ink-900",
        )}
      >
        <Image
          src={study.cover}
          alt={study.coverAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1216px) 50vw, 580px"
          className="object-cover transition-transform duration-700 [transition-timing-function:var(--ease-expo)] group-hover/cc:scale-[1.035]"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-[var(--radius-xs)] border border-white/22 bg-ink-950/72 px-2.5 py-1 font-mono text-[0.625rem] tracking-[0.1em] text-white uppercase backdrop-blur-sm">
          <span aria-hidden className="size-1 rounded-full bg-signal" />
          Client engagement
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-[0.6875rem] tracking-[0.1em] text-text-4 uppercase">
          {study.clientType} · {study.industry}
        </p>

        <h3 className="mt-3 text-d4 text-text">
          <Link
            href={`/case-studies/${study.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {study.name}
          </Link>
        </h3>

        <p className="measure mt-3 text-sm leading-relaxed text-text-2">{study.summary}</p>

        <dl className="mt-5 grid gap-x-6 gap-y-3 border-t border-rule pt-5 text-xs sm:grid-cols-2">
          <div>
            <dt className="font-mono tracking-[0.1em] text-text-4 uppercase">Delivered</dt>
            <dd className="mt-1.5 text-text-2">{study.servicesDelivered.length} services</dd>
          </div>
          <div>
            <dt className="font-mono tracking-[0.1em] text-text-4 uppercase">Timeline</dt>
            <dd className="mt-1.5 text-text-2 tabular-nums">{study.timeline}</dd>
          </div>
        </dl>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {study.stack
            .flatMap((g) => g.items)
            .slice(0, 5)
            .map((t) => (
              <li
                key={t}
                className="rounded-[var(--radius-xs)] border border-rule bg-paper-sunken px-2 py-0.5 font-mono text-[0.6875rem] text-text-3"
              >
                {t}
              </li>
            ))}
        </ul>

        {study.results && (
          <p className="mt-5 flex items-start gap-2.5 border-t border-rule pt-5 text-sm text-text-2">
            <span
              aria-hidden
              className="mt-[0.4375rem] size-1.5 shrink-0 rounded-full bg-accent"
            />
            <span>{study.results[0]}</span>
          </p>
        )}

        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent-ink">
          View case study
          <ArrowUpRight
            aria-hidden
            className="size-4 transition-transform duration-300 [transition-timing-function:var(--ease-expo)] group-hover/cc:translate-x-0.5 group-hover/cc:-translate-y-0.5"
          />
        </span>
      </div>
    </article>
  );
}

/**
 * An engineering study card. Visually subordinate to a client engagement —
 * these are internal R&D, and the UI says so rather than letting them read as
 * client work.
 */
export function ResearchCard({ study, className }: { study: ResearchStudy; className?: string }) {
  return (
    <article
      className={cn(
        "group/rc relative flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-rule bg-paper-raised transition-[box-shadow,border-color,transform] duration-400 [transition-timing-function:var(--ease-expo)] hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-e2",
        className,
      )}
    >
      {study.cover ? (
        <div className="relative aspect-[5/3] overflow-hidden border-b border-rule bg-ink-950">
          <Image
            src={study.cover}
            alt={`${study.title} — ${study.tagline}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1216px) 50vw, 384px"
            className={cn(
              "transition-transform duration-700 [transition-timing-function:var(--ease-expo)] group-hover/rc:scale-[1.03]",
              // Poster-format covers are very tall; anchor on the title block.
              study.coverType === "design" ? "object-cover object-top" : "object-contain p-3",
            )}
          />
        </div>
      ) : (
        <div className="relative aspect-[5/3] overflow-hidden border-b border-rule bg-paper-sunken">
          <div
            aria-hidden
            className="schematic-grid absolute inset-0 mask-radial"
            style={{ ["--grid-size" as string]: "22px" }}
          />
          <FileText
            aria-hidden
            className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 text-text-4"
            strokeWidth={1.4}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-2 font-mono text-[0.625rem] tracking-[0.1em] text-text-4 uppercase">
          <span>{study.domain}</span>
          <span aria-hidden className="size-0.5 rounded-full bg-rule-strong" />
          <span className="tabular-nums">{study.year}</span>
        </p>

        <h3 className="mt-2.5 font-display text-[1.0625rem] leading-snug font-semibold text-text">
          <Link
            href={`/case-studies/${study.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {study.title}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-3">{study.tagline}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {study.tags.slice(0, 3).map((t) => (
            <li
              key={t}
              className="rounded-[var(--radius-xs)] bg-paper-sunken px-2 py-0.5 font-mono text-[0.625rem] text-text-3"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
