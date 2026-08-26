import Link from "next/link";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";
import {
  CONTACT,
  FOOTER_COPY,
  FOOTER_NAV,
  SERVICES_MENU,
  SITE,
  SOCIAL,
} from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Mark";
import { Pending } from "@/components/ui/Pending";
import { SchematicGround } from "@/components/ui/Schematic";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  return (
    <footer data-surface="dark" className="relative isolate overflow-hidden bg-ink-950 text-ontext">
      <SchematicGround grid={40} nodes={160} mask="none" className="opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
      />

      <div className="shell-wide relative pt-[clamp(3.5rem,2rem+5vw,5.5rem)] pb-10">
        <div className="grid gap-x-10 gap-y-12 lg:grid-cols-[minmax(0,1.35fr)_repeat(3,minmax(0,1fr))_minmax(0,1.05fr)]">
          {/* ── Column 1 — identity + CTA ─────────────────────────────────── */}
          <div>
            <Logo tone="dark" />
            <p className="mt-6 max-w-[34ch] text-sm leading-relaxed text-ontext-2">
              {FOOTER_COPY.description}
            </p>

            <div className="mt-8 rounded-[var(--radius-md)] border border-rule-dark bg-white/[0.03] p-5">
              <p className="font-display text-[1.0625rem] leading-snug font-semibold text-white">
                {FOOTER_COPY.ctaHeading}
              </p>
              <Button href="/contact" variant="onDark" size="sm" className="mt-4" arrow block>
                {FOOTER_COPY.ctaLabel}
              </Button>
            </div>
          </div>

          {/* ── Column 2 — services ───────────────────────────────────────── */}
          <FooterColumn title="Services">
            {SERVICES_MENU.map((s) => (
              <FooterLink key={s.href} href={s.href}>
                {s.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* ── Column 3 — company ────────────────────────────────────────── */}
          <FooterColumn title={FOOTER_NAV.company.title}>
            {FOOTER_NAV.company.links.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* ── Column 4 — resources ──────────────────────────────────────── */}
          <FooterColumn title={FOOTER_NAV.resources.title}>
            {FOOTER_NAV.resources.links.map((l) => (
              <FooterLink key={l.href} href={l.href}>
                {l.label}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* ── Column 5 — contact ────────────────────────────────────────── */}
          <FooterColumn title="Contact">
            <li>
              {CONTACT.email ? (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-ontext-2 transition-colors duration-200 hover:text-white"
                >
                  {CONTACT.email}
                </a>
              ) : (
                <Pending tone="dark">[Add official email]</Pending>
              )}
            </li>
            <li>
              <a
                href={CONTACT.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/w inline-flex items-center gap-2 text-sm text-ontext-2 transition-colors duration-200 hover:text-white"
              >
                <MessageCircle aria-hidden className="size-3.5 text-signal" strokeWidth={1.7} />
                <span className="tnum">{CONTACT.whatsapp.display}</span>
                <ArrowUpRight
                  aria-hidden
                  className="size-3 opacity-0 transition-opacity duration-200 group-hover/w:opacity-100"
                />
              </a>
            </li>
            <li className="flex items-start gap-2 text-sm text-ontext-2">
              <MapPin aria-hidden className="mt-1 size-3.5 shrink-0 text-signal" strokeWidth={1.7} />
              <span>{SITE.location}</span>
            </li>
            <li className="pt-3">
              <ul className="flex flex-wrap gap-2">
                {SOCIAL.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${SITE.shortName} on ${s.label}`}
                      title={s.handle}
                      className="grid size-9 place-items-center rounded-[var(--radius-xs)] border border-rule-dark text-ontext-3 transition-[color,border-color,background-color,transform] duration-200 [transition-timing-function:var(--ease-expo)] hover:-translate-y-0.5 hover:border-accent-bright/50 hover:bg-white/6 hover:text-white"
                    >
                      <SocialIcon name={s.icon} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </FooterColumn>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────────────── */}
        <div className="mt-14 flex flex-col gap-4 border-t border-rule-dark pt-7 text-xs text-ontext-4 sm:flex-row sm:items-center sm:justify-between">
          <p>{FOOTER_COPY.copyright}</p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <li>
                <Link href="/privacy-policy" className="transition-colors duration-200 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="transition-colors duration-200 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li className="font-mono tracking-[0.1em] uppercase">{SITE.positioning}</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-marker font-medium tracking-[0.16em] text-ontext-4 uppercase">
        {title}
      </h2>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="group/fl relative inline-block text-sm text-ontext-2 transition-colors duration-200 hover:text-white"
      >
        {children}
        <span
          aria-hidden
          className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent-bright transition-[width] duration-300 [transition-timing-function:var(--ease-signature)] group-hover/fl:w-full"
        />
      </Link>
    </li>
  );
}
