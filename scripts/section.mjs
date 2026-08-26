/** Capture named sections at full resolution: node scripts/section.mjs <out> <route> <selector> <name> ... */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
const [out, route, ...rest] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const pairs = [];
for (let i = 0; i < rest.length; i += 2) pairs.push([rest[i], rest[i + 1]]);
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const p = await ctx.newPage();
await p.goto(`http://localhost:3000${route === "home" ? "/" : route.startsWith("/") ? route : "/" + route}`, { waitUntil: "networkidle" });
await p.evaluate(async () => {
  const step = window.innerHeight * 0.7;
  for (let y = 0; y < document.body.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise(r=>setTimeout(r,80)); }
  window.scrollTo(0,0); await new Promise(r=>setTimeout(r,300));
});
await p.waitForTimeout(600);
for (const [sel, name] of pairs) {
  const el = await p.$(sel);
  if (!el) { console.log(`missing: ${sel}`); continue; }
  await el.scrollIntoViewIfNeeded();
  await p.waitForTimeout(450);
  await el.screenshot({ path: `${out}/${name}.png` });
  console.log(`✓ ${name}`);
}
await b.close();
