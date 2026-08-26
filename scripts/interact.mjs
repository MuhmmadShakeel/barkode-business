import { chromium } from "playwright";
const out = process.argv[2];
const b = await chromium.launch();

// Mobile nav drawer open
{
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await p.click('button[aria-controls="mobile-nav"]');
  await p.waitForTimeout(500);
  await p.click('button:has-text("Services")');
  await p.waitForTimeout(500);
  await p.screenshot({ path: `${out}/mobile-nav-open.png` });
  await ctx.close();
}

// Desktop mega menu open
{
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  await p.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await p.hover('a[href="/services"]');
  await p.waitForTimeout(500);
  await p.screenshot({ path: `${out}/mega-menu.png` });
  await ctx.close();
}

// Contact form filled + error states
{
  const ctx = await b.newContext({ viewport: { width: 1440, height: 1400 }, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  await p.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
  await p.click('button[type="submit"]');
  await p.waitForTimeout(400);
  await p.screenshot({ path: `${out}/contact-errors.png`, fullPage: true });
  await ctx.close();
}

// FAQ accordion open state
{
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const p = await ctx.newPage();
  await p.goto("http://localhost:3000/faq", { waitUntil: "networkidle" });
  await p.waitForTimeout(500);
  await p.screenshot({ path: `${out}/faq-page.png` });
  await ctx.close();
}

await b.close();
console.log("done");
