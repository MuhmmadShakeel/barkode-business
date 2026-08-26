import { chromium } from "playwright";
const b = await chromium.launch();
for (const [w,h,label] of [[1440,900,'desktop'],[390,844,'mobile']]) {
  const ctx = await b.newContext({ viewport:{width:w,height:h} });
  const p = await ctx.newPage();
  await p.goto("http://localhost:3000/", { waitUntil:"networkidle" });
  await p.waitForTimeout(800);
  const out = await p.evaluate(() => {
    const docW = document.documentElement.clientWidth;
    const bad = [];
    for (const el of document.querySelectorAll("body *")) {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) continue;
      if (r.right > docW + 1) {
        const cs = getComputedStyle(el);
        bad.push({ tag: el.tagName.toLowerCase(), cls: String(el.className).slice(0,90), pos: cs.position, right: Math.round(r.right), w: Math.round(r.width), transform: cs.transform.slice(0,40) });
      }
    }
    return { docW, scrollW: document.documentElement.scrollWidth, bad: bad.slice(0,14) };
  });
  console.log(`\n--- ${label} docW=${out.docW} scrollW=${out.scrollW} ---`);
  out.bad.forEach(x=>console.log(` ${x.pos.padEnd(9)} r=${String(x.right).padStart(5)} w=${String(x.w).padStart(4)} tf=${x.transform.padEnd(22)} ${x.tag}.${x.cls}`));
  await ctx.close();
}
await b.close();
