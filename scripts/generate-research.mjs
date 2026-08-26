/**
 * Generates src/lib/research.generated.ts from the content kit's case-studies.json.
 * Run: node scripts/generate-research.mjs
 * Generated, not transcribed — it cannot drift from the supplied source.
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const src = resolve(root, "barakode-website-content-kit/content/case-studies.json");
const out = resolve(root, "src/lib/research.generated.ts");

const kit = JSON.parse(readFileSync(src, "utf8"));

/**
 * Maps the kit's technical categories onto the buyer-facing filter taxonomy
 * the brief specifies for the Case Studies page.
 */
const TRACK = {
  "pdf-chatbot-llama2-rag": "ai-automation",
  "botnist-support-chatbot": "ai-automation",
  "webweave-semantic-crawler": "ai-automation",
  "mentorme-hiring-app": "web-mobile",
  "workwise-freelancing-app": "web-mobile",
  "brickbreaker-x86-assembly": "systems",
  "rushhour-cpp-game": "systems",
  "blockchain-remote-code-execution": "systems",
};
const trackFor = (slug) => TRACK[slug] ?? "ai-research";

const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
const str = (s) => (s === null || s === undefined ? "null" : `\`${esc(s)}\``);
const arr = (a) => (!a || !a.length ? "[]" : `[${a.map(str).join(", ")}]`);

const order = kit.displayOrder;
const byslug = new Map(kit.caseStudies.map((c) => [c.slug, c]));
const ordered = order.map((s) => byslug.get(s)).filter(Boolean);

const missing = kit.caseStudies.filter((c) => !order.includes(c.slug));
if (missing.length) throw new Error(`Not in displayOrder: ${missing.map((m) => m.slug)}`);

const entries = ordered
  .map((c) => {
    const m = c.media ?? {};
    const figures = (m.figures ?? [])
      .map((f) => `    { src: ${str(f.src)}, alt: ${str(f.alt ?? f.caption ?? c.title)} },`)
      .join("\n");
    return `  {
    slug: ${str(c.slug)},
    title: ${str(c.title)},
    tagline: ${str(c.tagline)},
    domain: ${str(c.category)},
    track: ${str(trackFor(c.slug))},
    year: ${str(c.year)},
    tags: ${arr(c.tags)},
    overview: ${arr(c.overview)},
    objectives: ${arr(c.objectives)},
    tools: ${arr(c.tools)},
    process: ${arr(c.process)},
    results: ${arr(c.results)},
    learnings: ${arr(c.learnings)},
    cover: ${str(m.cover)},
    coverType: ${str(m.coverType ?? "figure")},
    pdf: ${str(m.pdf)},
    figures: [
${figures}
    ],
    isResearchReport: ${Boolean(c.isResearchReport)},
  },`;
  })
  .join("\n");

const file = `/* eslint-disable */
/**
 * GENERATED FILE — do not edit by hand.
 * Source: barakode-website-content-kit/content/case-studies.json
 * Regenerate: node scripts/generate-research.mjs
 *
 * ${ordered.length} engineering & AI R&D studies. Every one has a source PDF
 * in /public/case-studies and figures in /public/images/case-studies.
 */

export type ResearchTrack = "ai-automation" | "web-mobile" | "systems" | "ai-research";

export type ResearchStudy = {
  slug: string;
  title: string;
  tagline: string;
  /** The kit's technical domain label, e.g. "Computer Vision". */
  domain: string;
  /** Buyer-facing filter track used on the Case Studies page. */
  track: ResearchTrack;
  year: string;
  tags: string[];
  overview: string[];
  objectives: string[];
  tools: string[];
  process: string[];
  results: string[];
  learnings: string[];
  cover: string | null;
  coverType: string;
  pdf: string | null;
  figures: { src: string; alt: string }[];
  isResearchReport: boolean;
};

export const RESEARCH_STUDIES: ResearchStudy[] = [
${entries}
];
`;

writeFileSync(out, file, "utf8");
if (!existsSync(out)) throw new Error("write failed");
console.log(`✓ ${ordered.length} studies → src/lib/research.generated.ts`);
