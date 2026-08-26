import { chromium } from "playwright";
const b = await chromium.launch();
const ctx = await b.newContext({ viewport:{width:1440,height:950} });
const p = await ctx.newPage();
const msgs = [];
p.on("console", m => msgs.push(`[${m.type()}] ${m.text()}`));
p.on("pageerror", e => msgs.push(`[pageerror] ${e}`));
for (const r of ["/","/services","/ai-automation","/case-studies","/about","/contact","/faq","/insights","/technologies","/engagement-models","/process"]) {
  await p.goto("http://localhost:3000"+r, { waitUntil:"networkidle" });
  await p.waitForTimeout(700);
}
const uniq=[...new Set(msgs)];
console.log(uniq.length ? uniq.join("\n").slice(0,4000) : "no console output");
await b.close();
