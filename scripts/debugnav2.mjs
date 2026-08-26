import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
const p = await ctx.newPage();
await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await p.click('button[aria-controls="mobile-nav"]');
await p.waitForTimeout(700);
const info = await p.evaluate(() => {
  const el = document.getElementById('mobile-nav');
  const cs = getComputedStyle(el);
  const nav = el.querySelector('nav');
  const navCs = nav ? getComputedStyle(nav) : null;
  return {
    top: cs.top, bottom: cs.bottom, height: cs.height, maxHeight: cs.maxHeight,
    overflowY: cs.overflowY, containerType: cs.containerType,
    navHeight: navCs?.height, navDisplay: navCs?.display, navMinHeight: navCs?.minHeight,
    parentTag: el.parentElement.tagName, parentClass: el.parentElement.className,
    parentPosition: getComputedStyle(el.parentElement).position,
  };
});
console.log(JSON.stringify(info, null, 1));
await b.close();
