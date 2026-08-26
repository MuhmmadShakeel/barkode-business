import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:900} });
const p = await ctx.newPage();
await p.goto("http://localhost:3000/", { waitUntil:"networkidle" });
await p.waitForTimeout(600);

// Scroll to the Services section the way a person would.
await p.evaluate(() => document.querySelector('#services-heading')?.scrollIntoView({block:'center'}));
await p.waitForTimeout(1400);
const vis = await p.evaluate(() => {
  const els = [...document.querySelectorAll('[style*="opacity"]')];
  const hidden = els.filter(e => parseFloat(getComputedStyle(e).opacity) < 0.5).length;
  const card = document.querySelector('#services-heading')?.closest('section');
  const anyCard = card?.querySelector('article');
  return { totalWithOpacity: els.length, stillHidden: hidden,
           cardOpacity: anyCard ? getComputedStyle(anyCard.parentElement).opacity : 'n/a',
           lenis: !!document.documentElement.className.match(/lenis/) };
});
console.log(JSON.stringify(vis,null,1));
await p.screenshot({ path: process.argv[2] + "/probe-services.png" });

// Now test no-JS
const ctx2 = await b.newContext({ viewport:{width:1440,height:900}, javaScriptEnabled:false });
const p2 = await ctx2.newPage();
await p2.goto("http://localhost:3000/", { waitUntil:"domcontentloaded" });
await p2.waitForTimeout(1200);
await p2.screenshot({ path: process.argv[2] + "/probe-nojs.png", fullPage:false });
const nojs = await p2.evaluate ? null : null;
console.log("nojs screenshot written");
await b.close();
