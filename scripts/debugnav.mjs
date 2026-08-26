import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
const p = await ctx.newPage();
p.on("console", m => console.log("[console]", m.type(), m.text()));
p.on("pageerror", e => console.log("[pageerror]", e));
await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await p.click('button[aria-controls="mobile-nav"]');
await p.waitForTimeout(700);
const info = await p.evaluate(() => {
  const el = document.getElementById('mobile-nav');
  if (!el) return { found: false };
  const r = el.getBoundingClientRect();
  const cs = getComputedStyle(el);
  return { found: true, rect: r, display: cs.display, visibility: cs.visibility, opacity: cs.opacity, zIndex: cs.zIndex, position: cs.position, html: el.outerHTML.slice(0,200) };
});
console.log(JSON.stringify(info, null, 1));
await b.close();
