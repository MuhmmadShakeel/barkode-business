"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, CircleDot, Cpu, Database, Search, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * THE HERO VISUAL — an AI-workflow console shown as a layered product mockup.
 *
 * The brief asks for a SaaS dashboard, an AI workflow layer, a mobile preview,
 * integration connections, and an admin feel. Rather than dressing empty
 * rectangles in shadow, this draws the actual artifact Barakode builds: a
 * support-automation pipeline with a human review gate, its integration bus,
 * and the mobile surface the same system exposes.
 *
 * No invented metrics appear anywhere — every readout is structural (a state,
 * a route, a label), which is the honest version of a product screenshot.
 *
 * Depth comes from three planes moving at different scroll rates. Framer drives
 * only the parallax; the entrance uses the shared CSS reveal system, so the
 * console is fully drawn even if this component's script never runs.
 */

const PIPELINE = [
  { id: "in", label: "Inbound", sub: "email · chat · form", icon: CircleDot, state: "live" },
  { id: "cls", label: "Classify", sub: "intent + priority", icon: Cpu, state: "live" },
  { id: "ret", label: "Retrieve", sub: "vector search", icon: Search, state: "live" },
  { id: "draft", label: "Draft", sub: "grounded answer", icon: Database, state: "live" },
  { id: "rev", label: "Human review", sub: "approval gate", icon: UserCheck, state: "gate" },
  { id: "out", label: "Resolve", sub: "send + log", icon: CheckCircle2, state: "done" },
] as const;

const INTEGRATIONS = ["CRM", "Helpdesk", "Storage", "Webhooks"];

const ROLES: [string, string][] = [
  ["Owner", "full"],
  ["Ops lead", "review"],
  ["Agent", "respond"],
];

export function ProductSchematic({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  /* `useReducedMotion` resolves after mount, so branching on it during render
     would make the first client pass disagree with the server HTML. Waiting
     for mount keeps hydration exact, then the parallax switches on. */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const parallax = mounted && !reduced;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.6 });

  // Three depth planes. Back moves least, front moves most — real parallax.
  const yBack = useTransform(smooth, [0, 1], ["-2%", "8%"]);
  const yMid = useTransform(smooth, [0, 1], ["0%", "-5%"]);
  const yFloat = useTransform(smooth, [0, 1], ["6%", "-22%"]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* ── Plane 0 — ground ──────────────────────────────────────────────── */}
      <motion.div
        aria-hidden
        style={parallax ? { y: yBack } : undefined}
        className="pointer-events-none absolute -inset-x-10 -inset-y-16 -z-10"
      >
        <div
          className="schematic-grid absolute inset-0 mask-radial"
          style={{
            ["--grid-size" as string]: "30px",
            ["--grid-line" as string]: "rgba(255,255,255,0.05)",
          }}
        />
        <div
          className="absolute top-[18%] left-[6%] size-[26rem] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(200,146,42,.36) 0%, transparent 68%)" }}
        />
        <div
          className="absolute right-[4%] bottom-[6%] size-[20rem] rounded-full blur-[110px]"
          style={{ background: "radial-gradient(circle, rgba(226,184,92,.22) 0%, transparent 68%)" }}
        />
      </motion.div>

      {/* ── Plane 1 — the console ─────────────────────────────────────────── */}
      <motion.div
        style={parallax ? { y: yMid } : undefined}
        data-reveal="rise"
        className="relative"
      >
        <div className="rounded-[var(--radius-lg)] border border-white/12 bg-ink-850/85 shadow-dark-e3 backdrop-blur-xl">
          {/* Console chrome */}
          <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3 sm:px-5">
            <span aria-hidden className="flex gap-1.5">
              <span className="size-2 rounded-full bg-white/18" />
              <span className="size-2 rounded-full bg-white/18" />
              <span className="size-2 rounded-full bg-white/18" />
            </span>
            <span className="ml-1 truncate font-mono text-[0.6875rem] tracking-[0.08em] text-ontext-3">
              support-automation / pipeline
            </span>
            <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-signal/25 bg-signal/8 px-2 py-0.5 font-mono text-[0.625rem] tracking-[0.1em] text-signal uppercase">
              <span className="size-1.5 rounded-full bg-signal motion-safe:[animation:var(--animate-node-pulse)]" />
              Running
            </span>
          </div>

          <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_13rem]">
            {/* ── The pipeline ─────────────────────────────────────────────── */}
            <div className="relative p-4 sm:p-5">
              <p className="font-mono text-[0.625rem] tracking-[0.16em] text-ontext-4 uppercase">
                Workflow
              </p>

              <ol className="relative mt-4 space-y-2.5" data-reveal-group>
                {/* The trace connecting every node */}
                <span
                  aria-hidden
                  className="absolute top-4 bottom-4 left-[1.0625rem] w-px bg-gradient-to-b from-accent-bright/55 via-signal/40 to-accent-bright/15"
                />
                {PIPELINE.map((step) => {
                  const Icon = step.icon;
                  return (
                    <li
                      key={step.id}
                      data-reveal="left"
                      className="relative flex items-center gap-3"
                    >
                      <span
                        className={cn(
                          "relative z-10 grid size-[2.125rem] shrink-0 place-items-center rounded-[var(--radius-xs)] border",
                          step.state === "gate"
                            ? "border-signal/45 bg-signal/12 text-signal"
                            : step.state === "done"
                              ? "border-accent-bright/40 bg-accent/16 text-accent-bright"
                              : "border-white/12 bg-ink-800 text-ontext-2",
                        )}
                      >
                        <Icon aria-hidden className="size-[0.9375rem]" strokeWidth={1.7} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[0.8125rem] leading-tight font-medium text-white">
                          {step.label}
                        </span>
                        <span className="block truncate font-mono text-[0.625rem] tracking-[0.04em] text-ontext-4">
                          {step.sub}
                        </span>
                      </span>
                      {step.state === "gate" && (
                        <span className="shrink-0 rounded-[var(--radius-xs)] border border-signal/30 px-1.5 py-0.5 font-mono text-[0.5625rem] tracking-[0.1em] text-signal uppercase">
                          Human
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* ── Integration bus ──────────────────────────────────────────── */}
            <div className="border-t border-white/8 p-4 sm:p-5 md:border-t-0 md:border-l">
              <p className="font-mono text-[0.625rem] tracking-[0.16em] text-ontext-4 uppercase">
                Connected
              </p>
              <ul className="mt-4 space-y-2" data-reveal-group>
                {INTEGRATIONS.map((name) => (
                  <li
                    key={name}
                    data-reveal="rise"
                    className="flex items-center gap-2.5 rounded-[var(--radius-xs)] border border-white/8 bg-white/[0.03] px-2.5 py-2"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-accent-bright" />
                    <span className="truncate font-mono text-[0.6875rem] text-ontext-2">{name}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 font-mono text-[0.625rem] tracking-[0.16em] text-ontext-4 uppercase">
                Admin · roles
              </p>
              <ul className="mt-3 space-y-1.5">
                {ROLES.map(([role, scope]) => (
                  <li key={role} className="flex items-center justify-between gap-2">
                    <span className="truncate text-[0.75rem] text-ontext-2">{role}</span>
                    <span className="shrink-0 rounded-[2px] bg-white/8 px-1.5 py-px font-mono text-[0.5625rem] tracking-[0.06em] text-ontext-3">
                      {scope}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-[var(--radius-xs)] border border-dashed border-white/12 px-2.5 py-2">
                <p className="font-mono text-[0.5625rem] tracking-[0.12em] text-ontext-4 uppercase">
                  Audit log
                </p>
                <p className="mt-1 font-mono text-[0.625rem] leading-relaxed text-ontext-3">
                  every step recorded
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Plane 2 — mobile surface, front-most ──────────────────────────── */}
      <motion.div
        aria-hidden
        style={parallax ? { y: yFloat } : undefined}
        data-reveal="rise"
        className="absolute -right-4 -bottom-20 hidden w-[9rem] sm:-right-10 sm:block lg:-right-12"
      >
        <div className="overflow-hidden rounded-[1.35rem] border border-white/14 bg-ink-800 p-1.5 shadow-dark-e3">
          <div className="relative overflow-hidden rounded-[1rem] bg-ink-950">
            <span
              aria-hidden
              className="absolute top-1.5 left-1/2 h-1 w-9 -translate-x-1/2 rounded-full bg-white/14"
            />
            <div className="px-3 pt-6 pb-3.5">
              <p className="font-mono text-[0.5rem] tracking-[0.14em] text-ontext-4 uppercase">
                Queue
              </p>
              <div className="mt-2.5 space-y-1.5">
                {[
                  ["Billing question", "auto"],
                  ["Refund request", "review"],
                  ["Feature ask", "auto"],
                ].map(([t, tag]) => (
                  <div
                    key={t}
                    className="rounded-[5px] border border-white/8 bg-white/[0.04] px-2 py-1.5"
                  >
                    <p className="truncate text-[0.625rem] leading-tight text-ontext-2">{t}</p>
                    <p
                      className={cn(
                        "mt-0.5 font-mono text-[0.5rem] tracking-[0.08em] uppercase",
                        tag === "review" ? "text-signal" : "text-ontext-4",
                      )}
                    >
                      {tag}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
