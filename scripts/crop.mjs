import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
const [out, routeRaw, w, h, ...ys] = process.argv.slice(2);
const route = routeRaw === "home" ? "/" : routeRaw.startsWith("/") ? routeRaw : "/" + routeRaw;
mkdirSync(out, { recursive: true });
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: +w, height: +h }, reducedMotion: "reduce" });
const p = await ctx.newPage();
await p.goto("http://localhost:3000" + route, { waitUntil: "networkidle" });
await p.evaluate(async () => {
  const step = window.innerHeight * 0.7;
  for (let y = 0; y < document.body.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise(r=>setTimeout(r,60)); }
  window.scrollTo(0,0); await new Promise(r=>setTimeout(r,300));
});
for (const y of ys) {
  await p.evaluate((yy) => window.scrollTo(0, yy), Number(y));
  await p.waitForTimeout(300);
  await p.screenshot({ path: `${out}/crop-${routeRaw.replace(/\//g,'_')}-${y}.png` });
}
await b.close();
console.log("done");
