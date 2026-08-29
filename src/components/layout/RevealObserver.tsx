"use client";

import { useEffect } from "react";
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

  useEffect(() => {
    // Enable enhanced motion only after the client has mounted. Content stays
    // visible when JavaScript is unavailable, without injecting an inline
    // script into the server-rendered layout.
    document.documentElement.classList.add("js-motion");

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])"),
    );
    if (nodes.length === 0) return;

    // Assign stagger positions within each group, unless one was set explicitly.
    const groups = new Map<Element, number>();
    for (const el of nodes) {
      if (el.style.getPropertyValue("--reveal-i")) continue;
      const group = el.closest("[data-reveal-group]");
      if (!group) continue;
      const n = groups.get(group) ?? 0;
      // Cap the cascade so a 19-item grid does not take two seconds to finish.
      el.style.setProperty("--reveal-i", String(Math.min(n, 7)));
      groups.set(group, n + 1);
    }

    if (typeof IntersectionObserver === "undefined") {
      for (const el of nodes) el.setAttribute("data-revealed", "");
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

    for (const el of nodes) io.observe(el);
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
