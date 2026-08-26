import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { TraceRule } from "@/components/ui/Schematic";
import { Section } from "@/components/ui/Section";
import { Pending } from "@/components/ui/Pending";
import { CONTACT } from "@/lib/site";
import { slugify } from "@/lib/utils";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

/**
 * Shared layout for policy documents. Read mode: the structure carries
 * comprehension — a sticky contents index, generous measure, and numbered
 * sections a visitor can link someone else to.
 */
export function LegalPage({
  marker,
  title,
  intro,
  updated,
  sections,
}: {
  marker: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        marker={marker}
        heading={title}
        body={intro}
        crumbs={[
          { name: "Home", path: "/" },
          { name: title, path: `/${slugify(title)}` },
        ]}
        meta={[
          { label: "Last updated", value: updated },
          { label: "Sections", value: String(sections.length) },
          {
            label: "Questions",
            value: CONTACT.email ? CONTACT.email : "Contact us through the form or WhatsApp",
          },
        ]}
      />

      <Section surface="paper" aria-label={title}>
        <div className="shell">
          <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:items-start">
            {/* Contents */}
            <Reveal className="lg:sticky lg:top-28">
              <nav aria-label="Contents">
                <h2 className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                  Contents
                </h2>
                <ol className="mt-5 flex flex-col">
                  {sections.map((s, i) => (
                    <li key={s.heading} className="border-b border-rule">
                      <a
                        href={`#${slugify(s.heading)}`}
                        className="flex items-baseline gap-3 py-3 text-sm text-text-2 transition-colors duration-200 hover:text-accent-ink"
                      >
                        <span className="font-mono text-[0.6875rem] text-text-4 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </Reveal>

            {/* Body */}
            <div className="max-w-[44rem]">
              {sections.map((s, i) => (
                <Reveal key={s.heading} kind="right">
                  <section id={slugify(s.heading)} className="scroll-mt-28 pt-12 first:pt-0">
                    <div className="flex items-center gap-4">
                      <TraceRule className="w-8 shrink-0" />
                      <span className="font-mono text-[0.6875rem] text-text-4 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-4 text-d3 text-text">{s.heading}</h2>
                    <div className="mt-5 flex flex-col gap-4">
                      {s.paragraphs.map((p) => (
                        <p key={p} className="text-text-2">
                          {p}
                        </p>
                      ))}
                    </div>
                    {s.list && (
                      <ul className="mt-5 flex flex-col gap-2.5">
                        {s.list.map((l) => (
                          <li key={l} className="flex items-start gap-3 text-text-2">
                            <span
                              aria-hidden
                              className="mt-[0.6875rem] size-1 shrink-0 rounded-full bg-accent"
                            />
                            {l}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                </Reveal>
              ))}

              <Reveal className="mt-14">
                <div className="rounded-[var(--radius-md)] border border-rule bg-paper-sunken p-6">
                  <h2 className="font-mono text-marker font-medium tracking-[0.16em] text-text-4 uppercase">
                    Contact
                  </h2>
                  <p className="mt-4 text-text-2">
                    Questions about this document can be sent through the{" "}
                    <a
                      href="/contact"
                      className="text-accent-ink underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      contact form
                    </a>{" "}
                    or on{" "}
                    <a
                      href={CONTACT.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-ink underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                    >
                      WhatsApp
                    </a>
                    .
                  </p>
                  {!CONTACT.email && (
                    <div className="mt-4">
                      <Pending>[Add official email for legal notices]</Pending>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
