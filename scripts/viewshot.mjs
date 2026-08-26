/** Scroll an element into view and capture the whole viewport around it.
 *  node scripts/viewshot.mjs <out> <route> <selector> <name> [<selector> <name>...] */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
const [out, routeRaw, ...rest] = process.argv.slice(2);
const route = routeRaw === "home" ? "/" : routeRaw.startsWith("/") ? routeRaw : "/" + routeRaw;
mkdirSync(out, { recursive: true });
const pairs = [];
for (let i = 0; i < rest.length; i += 2) pairs.push([rest[i], rest[i + 1]]);
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 950 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
const p = await ctx.newPage();
await p.goto("http://localhost:3000" + route, { waitUntil: "networkidle" });
await p.evaluate(async () => {
  const step = window.innerHeight * 0.7;
  for (let y = 0; y < document.body.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise(r=>setTimeout(r,80)); }
  window.scrollTo(0,0); await new Promise(r=>setTimeout(r,300));
});
await p.waitForTimeout(500);
for (const [sel, name] of pairs) {
  const ok = await p.evaluate((s) => {
    const el = document.querySelector(s); if (!el) return false;
    window.scrollTo(0, window.scrollY + el.getBoundingClientRect().top - 90); return true;
  }, sel);
  if (!ok) { console.log("missing " + sel); continue; }
  await p.waitForTimeout(600);
  await p.screenshot({ path: `${out}/${name}.png` });
  console.log("✓ " + name);
}
await b.close();
