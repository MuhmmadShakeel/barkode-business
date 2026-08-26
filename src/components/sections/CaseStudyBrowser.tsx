"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ClientCaseCard, ResearchCard } from "@/components/ui/CaseCard";
import { PendingPanel } from "@/components/ui/Pending";
import { Button } from "@/components/ui/Button";
import {
  CLIENT_CASES,
  RESEARCH_STUDIES,
  TRACKS,
  clientCaseInTrack,
  trackCounts,
  type TrackId,
} from "@/lib/case-studies";
import { EASE_EXPO } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * The filterable work grid. Client engagements lead; engineering studies follow
 * in a clearly separated band so a visitor is never misled about which is which.
 */
export function CaseStudyBrowser({ excludeSlug }: { excludeSlug?: string }) {
  const [track, setTrack] = useState<TrackId>("all");
  const counts = useMemo(() => trackCounts(), []);

  /* The first paint must match the server HTML — cards visible, no entrance.
     Only filter changes after mount animate in, so a visitor without JS (or
     mid-hydration) still sees the whole grid. */
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
  }, []);
  const enter = (y: number) =>
    mounted.current ? { opacity: 0, y, filter: "blur(5px)" } : false;

  const clients = useMemo(
    () =>
      CLIENT_CASES.filter((c) => c.slug !== excludeSlug).filter((c) =>
        clientCaseInTrack(c, track),
      ),
    [track, excludeSlug],
  );

  const research = useMemo(
    () =>
      RESEARCH_STUDIES.filter((s) => s.slug !== excludeSlug).filter(
        (s) => track === "all" || (s.track as string) === track,
      ),
    [track, excludeSlug],
  );

  const active = TRACKS.find((t) => t.id === track)!;
  const empty = clients.length === 0 && research.length === 0;

  return (
    <div>
      {/* ── Filters ──────────────────────────────────────────────────────── */}
      <div className="border-b border-rule pb-6">
        <h2 className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
          Filter by category
        </h2>
        <ul role="list" className="mt-5 flex flex-wrap gap-2">
          {TRACKS.map((t) => {
            const on = t.id === track;
            const n = counts[t.id];
            return (
              <li key={t.id}>
                <button
                  type="button"
                  onClick={() => setTrack(t.id)}
                  aria-pressed={on}
                  disabled={n === 0}
                  className={cn(
                    "group/f inline-flex items-center gap-2 rounded-[var(--radius-xs)] border px-3.5 py-2 text-sm font-medium",
                    "transition-[background-color,border-color,color,box-shadow] duration-250 [transition-timing-function:var(--ease-expo)]",
                    "disabled:cursor-not-allowed disabled:opacity-40",
                    on
                      ? "border-accent bg-accent text-ink-950 shadow-[0_2px_6px_rgba(200,146,42,.28)]"
                      : "border-rule bg-paper-raised text-text-2 shadow-e1 hover:border-accent/40 hover:text-accent-ink",
                  )}
                >
                  {t.label}
                  <span
                    className={cn(
                      "font-mono text-[0.6875rem] tabular-nums",
                      on ? "text-white/70" : "text-text-4",
                    )}
                  >
                    {n}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <p aria-live="polite" className="mt-5 text-sm text-text-3">
          {active.blurb}{" "}
          <span className="text-text-4">
            Showing {clients.length + research.length} of {counts.all}.
          </span>
        </p>
      </div>

      {empty && (
        <PendingPanel
          className="mt-10"
          heading="Detailed case studies are being prepared."
          body="We are currently organizing selected project stories with verified screenshots, technology details, and delivery context. In the meantime, you can contact us to discuss relevant work examples based on your project type."
          action={
            <Button href="/contact" size="md" arrow>
              Ask for Relevant Work Examples
            </Button>
          }
        />
      )}

      {/* ── Client engagements ───────────────────────────────────────────── */}
      {clients.length > 0 && (
        <section className="mt-12" aria-labelledby="clients-heading">
          <h2
            id="clients-heading"
            className="font-mono text-marker font-medium tracking-[0.16em] text-accent-ink uppercase"
          >
            Client engagements
          </h2>
          <motion.ul
            layout
            className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {clients.map((c) => (
                <motion.li
                  key={c.slug}
                  layout
                  initial={enter(18)}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.42, ease: EASE_EXPO }}
                  className="h-full"
                >
                  <ClientCaseCard study={c} className="h-full" />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </section>
      )}

      {/* ── Engineering & R&D ────────────────────────────────────────────── */}
      {research.length > 0 && (
        <section className="mt-16" aria-labelledby="research-heading">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-rule pt-10">
            <h2
              id="research-heading"
              className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase"
            >
              Engineering & AI R&D
            </h2>
            <p className="measure text-sm text-text-3">
              Internal and academic engineering work — not client projects. Each study ships with
              its full technical report.
            </p>
          </div>

          <motion.ul layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {research.map((s) => (
                <motion.li
                  key={s.slug}
                  layout
                  initial={enter(16)}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: EASE_EXPO }}
                  className="h-full"
                >
                  <ResearchCard study={s} className="h-full" />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </section>
      )}
    </div>
  );
}
