"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { CTA, NAV, SERVICES_MENU, type ServiceNavItem } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Mark";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Route change closes everything.
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileServices(false);
  }, [pathname]);

  // Escape closes; body scroll locks while the drawer is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMegaOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Focus leaving the nav region closes the mega menu (keyboard users).
  const onNavBlur = (e: React.FocusEvent) => {
    if (!navRef.current?.contains(e.relatedTarget as Node)) setMegaOpen(false);
  };

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  const servicesActive =
    pathname.startsWith("/services") || pathname.startsWith("/ai-automation");

  /* Every page opens on a dark hero and the header is transparent until the
     reader scrolls. Until then it has to render light-on-dark, or the logo and
     links sit near-black on near-black. Once the paper background slides in,
     it flips back. */
  const overHero = true;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-100 border-b border-white/10 bg-ink-950/96 shadow-e3 backdrop-blur-xl backdrop-saturate-150 transition-[box-shadow] duration-300",
          "[transition-timing-function:var(--ease-expo)]",
          scrolled && "shadow-e4",
        )}
      >
        <div className="shell-wide flex h-[5rem] items-center justify-between gap-6 lg:h-[5.25rem]">
          <Link
            href="/"
            className="-ml-1 shrink-0 rounded-[var(--radius-xs)] px-1 py-1"
            aria-label="Barakode Technologies — home"
          >
            <Logo tone={overHero ? "dark" : "light"} />
          </Link>

          {/* ── Desktop navigation ─────────────────────────────────────────── */}
          <div
            ref={navRef}
            onBlur={onNavBlur}
            className="hidden items-center gap-0.5 lg:flex"
          >
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.href}
                  onMouseEnter={openMega}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={item.href}
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    onFocus={openMega}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-[var(--radius-xs)] px-3 py-2 text-[0.9375rem] font-medium",
                      "transition-colors duration-200",
                      overHero
                        ? servicesActive
                          ? "text-accent-bright"
                          : "text-ontext-2 hover:text-white"
                        : servicesActive
                          ? "text-accent-ink"
                          : "text-text-2 hover:text-text",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "size-3.5 transition-transform duration-300 [transition-timing-function:var(--ease-expo)]",
                        megaOpen && "rotate-180",
                      )}
                    />
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative rounded-[var(--radius-xs)] px-3 py-2 text-[0.9375rem] font-medium transition-colors duration-200",
                    overHero
                      ? isActive(item.href)
                        ? "text-accent-bright"
                        : "text-ontext-2 hover:text-white"
                      : isActive(item.href)
                        ? "text-accent-ink"
                        : "text-text-2 hover:text-text",
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px",
                        overHero ? "bg-accent-bright" : "bg-accent",
                      )}
                    />
                  )}
                </Link>
              ),
            )}
          </div>

          <div className="hidden shrink-0 lg:block">
            <Button
              href={CTA.header.href}
              variant={overHero ? "onDark" : "primary"}
              size="md"
              arrow
            >
              {CTA.header.label}
            </Button>
          </div>

          {/* ── Mobile trigger ─────────────────────────────────────────────── */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className={cn(
              "-mr-1 grid size-11 place-items-center rounded-[var(--radius-sm)] border shadow-e1 transition-colors duration-300 lg:hidden",
              overHero
                ? "border-white/20 bg-white/8 text-white backdrop-blur-sm"
                : "border-rule bg-paper-raised text-text",
            )}
          >
            <span className="sr-only">
              {mobileOpen ? "Close menu" : "Open menu"}
            </span>
            <span className="transition-transform duration-200">
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </span>
          </button>
        </div>

        {/* ── Services mega menu ───────────────────────────────────────────── */}
        {megaOpen && (
            <div
              onMouseEnter={openMega}
              onMouseLeave={scheduleClose}
              className="absolute inset-x-0 top-full hidden origin-top border-t border-rule bg-paper-raised/98 shadow-e4 backdrop-blur-xl lg:block"
            >
              <div className="shell-wide grid grid-cols-[1fr_auto] gap-10 py-7">
                <ul className="grid grid-cols-3 gap-x-8 gap-y-1">
                  {SERVICES_MENU.map((s, index) => (
                    <MegaItem
                      key={s.href}
                      item={s}
                      active={pathname === s.href}
                      index={index}
                    />
                  ))}
                </ul>
                <div
                  className="w-[16rem] shrink-0 self-start rounded-[var(--radius-md)] border border-rule bg-paper-sunken p-5"
                >
                  <p className="font-display text-[1.0625rem] leading-snug font-semibold text-text">
                    Not sure where to start?
                  </p>
                  <p className="mt-2.5 text-sm text-text-3">
                    Describe the workflow or product. We will point you at the
                    right starting scope — or tell you it is not a fit.
                  </p>
                  <Button
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    className="mt-5"
                    arrow
                    block
                  >
                    Send Project Details
                  </Button>
                </div>
              </div>
            </div>
        )}
      </header>

      {/* ── Mobile drawer ── rendered as a header sibling: the header's own
         backdrop-blur establishes a containing block for `position: fixed`
         descendants, which collapsed this drawer's height when it lived
         inside <header>. As a sibling it sizes against the viewport. ── */}
      {mobileOpen && (
          <div
            id="mobile-nav"
            className="fixed inset-x-0 top-[5rem] bottom-0 z-100 overflow-y-auto overscroll-contain border-t border-rule bg-paper lg:hidden"
          >
            <nav className="shell flex min-h-full flex-col py-7">
              <ul className="flex flex-col">
                <li className="border-b border-rule">
                  <div className="flex items-center gap-2">
                    <Link
                      href="/services"
                      aria-current={pathname === "/services" ? "page" : undefined}
                      className={cn(
                        "flex min-h-14 flex-1 items-center text-[1.0625rem] font-medium transition-colors",
                        servicesActive ? "text-accent-ink" : "text-text",
                      )}
                    >
                      Services
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServices((v) => !v)}
                      aria-expanded={mobileServices}
                      aria-controls="mobile-services-menu"
                      aria-label={mobileServices ? "Collapse services menu" : "Expand services menu"}
                      className="grid size-11 shrink-0 place-items-center rounded-[var(--radius-xs)] border border-rule bg-paper-raised text-text-3 transition-[color,border-color,background-color] hover:border-accent/40 hover:text-accent-ink"
                    >
                      <ChevronDown
                        aria-hidden
                        className={cn(
                          "size-4 text-text-3 transition-transform duration-300 [transition-timing-function:var(--ease-expo)]",
                          mobileServices && "rotate-180",
                        )}
                      />
                    </button>
                  </div>
                  {mobileServices && (
                      <ul
                        id="mobile-services-menu"
                        className="overflow-hidden motion-safe:animate-[menu-reveal_.24s_var(--ease-expo)]"
                      >
                        {SERVICES_MENU.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              className="flex gap-3 py-2.5 pl-4"
                            >
                              <ServiceIcon
                                name={s.icon}
                                className="mt-0.5 size-4 shrink-0 text-accent"
                              />
                              <span>
                                <span className="block text-[0.9375rem] font-medium text-text">
                                  {s.label}
                                </span>
                                <span className="mt-0.5 block text-xs text-text-3">
                                  {s.description}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                        <li className="h-2" />
                      </ul>
                  )}
                </li>

                {NAV.filter((n) => !n.children).map((item) => (
                  <li key={item.href} className="border-b border-rule">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "block py-4 text-[1.0625rem] font-medium",
                        isActive(item.href) ? "text-accent-ink" : "text-text",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-9 pb-4">
                <Button href={CTA.header.href} size="lg" arrow block>
                  {CTA.header.label}
                </Button>
                <Button
                  href={CTA.secondary.href}
                  variant="secondary"
                  size="lg"
                  block
                >
                  {CTA.secondary.label}
                </Button>
              </div>
            </nav>
          </div>
      )}
    </>
  );
}

function MegaItem({ item, active }: { item: ServiceNavItem; active: boolean; index?: number }) {
  return (
    <li>
      <Link
        href={item.href}
        className={cn(
          "group/mi flex gap-3.5 rounded-[var(--radius-sm)] p-3.5 transition-[background-color,transform] duration-300 hover:-translate-y-0.5",
          active ? "bg-accent-soft" : "hover:bg-paper-sunken",
        )}
      >
        <span
          className={cn(
            "mt-0.5 grid size-9 shrink-0 place-items-center rounded-[var(--radius-xs)] border transition-[color,border-color,background-color,transform] duration-300 group-hover/mi:scale-105",
            active
              ? "border-accent/30 bg-paper-raised text-accent"
              : "border-rule bg-paper-sunken text-text-3 group-hover/mi:border-accent/30 group-hover/mi:text-accent",
          )}
        >
          <ServiceIcon name={item.icon} className="size-[1.125rem]" />
        </span>
        <span className="min-w-0">
          <span
            className={cn(
              "block text-[0.9375rem] leading-snug font-medium transition-colors duration-200",
              active
                ? "text-accent-ink"
                : "text-text group-hover/mi:text-accent-ink",
            )}
          >
            {item.label}
          </span>
          <span className="mt-1 block text-xs leading-relaxed text-text-3">
            {item.description}
          </span>
        </span>
        <ArrowUpRight className="ml-auto mt-1 size-3.5 shrink-0 -translate-x-1 translate-y-1 text-text-3 opacity-0 transition-all duration-300 group-hover/mi:translate-x-0 group-hover/mi:translate-y-0 group-hover/mi:text-accent group-hover/mi:opacity-100" />
      </Link>
    </li>
  );
}
