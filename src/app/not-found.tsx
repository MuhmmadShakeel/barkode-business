import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Glow, SchematicGround } from "@/components/ui/Schematic";
import { Marker } from "@/components/ui/Section";
import { NAV } from "@/lib/site";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      data-surface="dark"
      className="relative isolate flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden bg-ink-950 pt-[calc(4.5rem+4rem)] pb-24 text-ontext"
    >
      <SchematicGround grid={42} nodes={168} mask="radial" />
      <Glow className="top-[-12rem] left-1/2 -translate-x-1/2" size={620} />

      <div className="shell relative">
        <div className="max-w-2xl">
          <Marker tone="dark">Error 404</Marker>

          <h1 className="mt-6 text-d1 text-white">
            This route does not{" "}
            <span className="text-accent-bright">resolve.</span>
          </h1>

          <p className="measure mt-7 text-lead text-ontext-2">
            The page you were looking for has moved, been renamed, or never existed. Here is where
            everything actually lives.
          </p>

          <nav aria-label="Site sections" className="mt-10">
            <ul className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-rule-dark bg-rule-dark sm:grid-cols-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group/n flex items-center justify-between gap-3 bg-ink-900 px-5 py-4 transition-colors duration-200 hover:bg-ink-850"
                  >
                    <span className="text-[0.9375rem] text-ontext-2 transition-colors duration-200 group-hover/n:text-white">
                      {item.label}
                    </span>
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 text-ontext-4 transition-[color,transform] duration-300 [transition-timing-function:var(--ease-expo)] group-hover/n:translate-x-0.5 group-hover/n:-translate-y-0.5 group-hover/n:text-accent-bright"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/" variant="onDark" size="lg" arrow>
              Back to home
            </Button>
            <Button href="/contact" variant="onDarkGhost" size="lg">
              Tell us what you were looking for
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
