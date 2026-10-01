"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Drives the CSS reveal system.
 *
 * Watches every `[data-reveal]` element and marks it revealed as it enters the
 * viewport. Elements inside a `[data-reveal-group]` are assigned a stagger
 * index at observe time, so a grid cascades without each card needing to know
 * its own position.
 *
 * Re-scans on route change. Anything already past the fold on first paint is
 * revealed immediately, which is how the hero entrance runs.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"),
    );
    // The server rendered page is already visible. Mark everything in the
    // first viewport before enabling reveal styles, so hydration cannot hide
    // the page and make it appear to render for a second time.
    const viewportHeight = window.innerHeight;
    for (const el of nodes) {
      const rect = el.getBoundingClientRect();
      if (rect.top >= viewportHeight) break;
      if (rect.top < viewportHeight && rect.bottom > 0) {
        el.setAttribute("data-revealed", "");
      }
    }
    document.documentElement.classList.add("js-motion");
    const pending = nodes.filter((el) => !el.hasAttribute("data-revealed"));
    if (pending.length === 0) return;

    // Assign stagger positions within each group, unless one was set explicitly.
    const groups = new Map<Element, number>();
    for (const el of pending) {
      if (el.style.getPropertyValue("--reveal-i")) continue;
      const group = el.closest("[data-reveal-group]");
      if (!group) continue;
      const n = groups.get(group) ?? 0;
      // Cap the cascade so a 19-item grid does not take two seconds to finish.
      el.style.setProperty("--reveal-i", String(Math.min(n, 7)));
      groups.set(group, n + 1);
    }

    if (typeof IntersectionObserver === "undefined") {
      for (const el of pending) el.setAttribute("data-revealed", "");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );

    for (const el of pending) io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
