/**
 * Batched visual inspection harness.
 * Usage: node scripts/shoot.mjs <outDir> [route ...]
 * Captures desktop (1440) and mobile (390) for every route in one pass, and
 * reports console errors + horizontal-overflow offenders per route.
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { resolve } from "node:path";

const BASE = process.env.BASE ?? "http://localhost:3000";
const [outDirArg, ...routeArgs] = process.argv.slice(2);
const outDir = resolve(outDirArg ?? "shots");
const routes = (routeArgs.length ? routeArgs : ["home"]).map((r) =>
  r === "home" || r === "/" ? "/" : r.startsWith("/") ? r : `/${r}`,
);

mkdirSync(outDir, { recursive: true });

const name = (r) => (r === "/" ? "home" : r.replace(/^\//, "").replace(/\//g, "_"));

const browser = await chromium.launch();
const report = [];

for (const [label, width, height, full] of [
  ["desktop", 1440, 900, true],
  ["mobile", 390, 844, true],
]) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    reducedMotion: "no-preference",
  });

  for (const route of routes) {
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text().slice(0, 200));
    });
    page.on("pageerror", (e) => errors.push(`PAGEERROR ${String(e).slice(0, 200)}`));

    try {
      await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 45000 });
      // Let scroll-triggered reveals run so the capture shows settled state.
      await page.evaluate(async () => {
        const step = window.innerHeight * 0.8;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 90));
        }
        window.scrollTo(0, 0);
        await new Promise((r) => setTimeout(r, 400));
      });
      await page.waitForTimeout(500);

      // Horizontal overflow detection.
      const overflow = await page.evaluate(() => {
        const docW = document.documentElement.clientWidth;
        if (document.documentElement.scrollWidth <= docW + 1) return null;
        const bad = [];
        for (const el of document.querySelectorAll("body *")) {
          const r = el.getBoundingClientRect();
          if (r.width === 0) continue;
          if (r.right > docW + 1 || r.left < -1) {
            const cs = getComputedStyle(el);
            if (cs.position === "fixed" || cs.position === "absolute") continue;
            bad.push(
              `${el.tagName.toLowerCase()}.${String(el.className).slice(0, 60)} right=${Math.round(r.right)}`,
            );
          }
          if (bad.length > 5) break;
        }
        return { scrollWidth: document.documentElement.scrollWidth, docW, bad };
      });

      await page.screenshot({
        path: `${outDir}/${name(route)}-${label}.png`,
        fullPage: full,
      });

      report.push({ route, label, errors, overflow });
    } catch (e) {
      report.push({ route, label, errors: [`NAV FAIL ${String(e).slice(0, 160)}`], overflow: null });
    }
    await page.close();
  }
  await ctx.close();
}

await browser.close();

let issues = 0;
for (const r of report) {
  const parts = [];
  if (r.errors.length) parts.push(`console: ${r.errors.slice(0, 3).join(" | ")}`);
  if (r.overflow) parts.push(`OVERFLOW ${r.overflow.scrollWidth}>${r.overflow.docW} :: ${r.overflow.bad.join(" ; ")}`);
  if (parts.length) {
    issues++;
    console.log(`✗ ${r.route} [${r.label}] ${parts.join("  ||  ")}`);
  }
}
console.log(issues === 0 ? `✓ ${routes.length} routes clean (both viewports)` : `${issues} issue rows`);
console.log(`shots → ${outDir}`);
