# Barakode Technologies — Website Content Kit

Everything needed to rebuild the Barakode Technologies website from scratch: all copy, all brand rules, all images, all structured data.

Extracted from the Next.js source at `E:\Barakode-Technologies-main` on **24 August 2026**.

---

## 👉 If you are the coding agent, read this first

1. **[`gaps-and-conflicts.md`](gaps-and-conflicts.md)** — read it before writing any code. The source contradicts itself in several places (two incompatible pricing systems, three different logos, a founding year that appears as both 2023 and 2025, no email address anywhere). Nothing was silently corrected — you need to know what to decide.
2. **[`brand/brand-guidelines.md`](brand/brand-guidelines.md)** — colours, typography, logo geometry, motion language.
3. **[`content/`](content/)** — every word of copy. JSON for machines, Markdown for reading.
4. **[`images/IMAGE-INVENTORY.md`](images/IMAGE-INVENTORY.md)** — all 71 images mapped to where each was used.

To keep the JSON paths resolving without edits, copy this kit's `images/` folder into your new project's `public/` directory and `assets-pdfs/` to `public/case-studies/`. Every `image` / `cover` / `avatar` path in the JSON is already written as a public path such as `/images/team/safdar.png`.

---

## What is in here

```
barakode-website-content-kit/
├── README.md                      ← you are here
├── gaps-and-conflicts.md          ← ⚠️ read before building
│
├── brand/
│   ├── brand-guidelines.md        Human-readable brand book
│   ├── colors.json                Both palettes, every token, hex + RGB triplets
│   ├── design-tokens.json         Typography, layout, 25-entry motion catalogue, icons
│   └── logo/
│       ├── barakode-mark-gold.svg          Primary hexagon mark, flat gold
│       ├── barakode-mark-currentcolor.svg  Same mark, CSS-tintable
│       ├── barakode-icon-64.svg            Favicon / app icon on dark rounded square
│       ├── logo-3d.png                     3D metallic chevron-diamond (hero visual)
│       ├── chevron-left.png                ⚠️ identical to logo-3d.png
│       ├── chevron-right.png               ⚠️ identical to logo-3d.png
│       └── og-image-1200x630.png           Social preview (contains a 3rd logo variant)
│
├── content/
│   ├── company-and-contact.json   Identity, contact channels, all 6 social links, form spec
│   ├── services.json              6 services + generated plan tiers + orphaned long-form
│   ├── pricing.json               Both pricing systems, side by side
│   ├── team.json                  3 members, full bios, quotes, expertise, focus areas
│   ├── projects.json              3 projects, cards merged with long-form detail
│   ├── case-studies.json          19 case studies with media + PDF mappings
│   ├── site-content.json          Nav, stats, awards, process, testimonials, FAQs, blog
│   ├── page-copy.json             Every page's hero copy, metadata, and section order
│   ├── our-story.json             The 5-chapter About narrative
│   ├── image-usage-map.json       Machine-readable asset → usage map
│   │
│   ├── SERVICES-AND-PRICING.md    ┐
│   ├── TEAM.md                    │ Same content, readable
│   ├── PROJECTS.md                │ by a human
│   ├── CASE-STUDIES.md            │
│   └── SITE-CONTENT.md            ┘
│
├── images/                        71 files, 26 MB — drop into public/
│   ├── IMAGE-INVENTORY.md         Every file mapped to its use
│   ├── logo/  team/  projects/  case-studies/  process/
│   ├── about/  blog/  testimonials/  stats/  decor/  contact/
│
├── assets-pdfs/                   19 case-study PDFs, 13 MB — drop into public/case-studies/
│
└── source-reference/              Original source files, verbatim
    ├── data.ts, case-studies.ts, seo.ts, tokens.ts, motion.ts
    ├── tailwind.config.ts, globals.css, BarakodeLogo.tsx
    ├── i18n.tsx, team-ar.ts, services-ar.ts, case-studies-ar.ts, project-details-ar.ts
    ├── llms.txt, llms-full.txt, humans.txt
    └── project-*-details.md
```

**Total: 42 MB.**

---

## The brand in 30 seconds

| | |
|---|---|
| **Name** | Barakode Technologies |
| **Slogan** | Engineering Solutions. Delivering Results. |
| **What they do** | Full-cycle software agency — web, mobile, AI, cloud |
| **Based** | Pakistan, serving worldwide (incl. USA & Saudi Arabia) |
| **Brand colour** | Gold `#C8922A` on near-black `#0A0A0A` |
| **Type** | Inter (Latin) / Cairo (Arabic) |
| **Feel** | Dark, precise, motion-heavy, engineering-first |
| **Contact** | WhatsApp `+92 332 2060667` · contact form · **no email exists** |

The signature visual device: two-tone headings where the first phrase is white and the second is gold — *"What **we do**"*, *"The people **behind Barakode**"*, *"Clean Code **& Real Results**"*.

---

## Content at a glance

| Type | Count | Where |
|---|---|---|
| Pages / routes | 11 + 4 dynamic | `page-copy.json` |
| Services | 6 (each with 3 plan tiers) | `services.json` |
| Pricing plans | 2 project plans + 18 service tiers | `pricing.json` |
| Team members | 3 | `team.json` |
| Client projects | 3 (all with full case-study copy) | `projects.json` |
| Engineering case studies | 19 (all with PDFs) | `case-studies.json` |
| Testimonials | 5 | `site-content.json` |
| FAQs | 6 | `site-content.json` |
| Awards | 5 | `site-content.json` |
| Process steps | 4 | `site-content.json` |
| Blog posts | 1 | `site-content.json` |
| Social profiles | 6 | `company-and-contact.json` |
| Images | 71 | `images/` |
| PDFs | 19 | `assets-pdfs/` |

---

## Routes to rebuild

```
/                       Home — 13 sections
/services               Service listing
/services/[slug]        6 pages: web-development, mobile-development, ui-ux-design,
                        ai-ml-development, cloud-development, qa-testing
/pricing                Two project plans
/projects               Project listing
/projects/[slug]        3 pages
/case-studies           Filterable grid, 8 categories
/case-studies/[slug]    19 pages
/about                  Philosophy + stats + awards + team + our story
/team                   Roster
/team/[slug]            3 profile pages
/contact                Form + FAQ
/blogs                  Listing
/blogs/[slug]           1 post
/privacy-policy         Static, 4 sections
/404                    Custom
```

Plus generated files: `sitemap.xml`, `robots.txt`, `manifest.json`, `llms.txt`, `llms-full.txt`, `humans.txt`, `.well-known/security.txt`.

---

## Bilingual support

The original site is **fully bilingual, English and Arabic**, with RTL layout mirroring. The Arabic translations are in `source-reference/`:

- `i18n.tsx` — the UI string dictionary and the `LanguageProvider` (persists to `localStorage` under `barakode-lang`)
- `team-ar.ts` · `services-ar.ts` · `case-studies-ar.ts` · `project-details-ar.ts` — long-form Arabic content

If the new site should stay bilingual, these are complete and reusable. Arabic switches the body font to Cairo and sets `html[lang="ar"][dir="rtl"]`.

---

## Two things worth knowing before you start

**The pricing is contradictory.** `/pricing` sells $500 and $1,000 fixed-price projects. `/services/[slug]` sells $1,200–$4,000/month retainers. A visitor moving between them sees prices an order of magnitude apart. And `llms.txt` publishes a *third* set of numbers that appears nowhere in the code. You have to decide which is real — see [gaps-and-conflicts.md § 6](gaps-and-conflicts.md).

**There are three unrelated logos.** A gold hexagon molecule in the header, a green 3D chevron-diamond in the hero, and a gold "B" monogram in the social preview image. They share no visual language, and the hero one is not even in the brand colour. Pick one — see [brand/brand-guidelines.md § 2](brand/brand-guidelines.md).

---

## Provenance

Everything was read directly from the source files — no rendering or scraping needed, since all content lives in typed data modules rather than a CMS:

| Source | What came from it |
|---|---|
| `lib/data.ts` | Services, pricing, team, projects, testimonials, FAQs, awards, process, stats, blog, nav, social links |
| `lib/case-studies.ts` | All 19 case studies and their media mappings |
| `lib/seo.ts` | Organization schema, contact point, site metadata |
| `lib/tokens.ts`, `tailwind.config.ts`, `app/globals.css` | Both colour palettes, type scale, motion tokens |
| `app/**/page.tsx` | Per-page hero copy, metadata, section order |
| `components/**` | Section headings, labels, hardcoded copy, animation specs |
| `public/images/**`, `public/case-studies/**` | All binary assets |
| `public/llms.txt`, `humans.txt`, `.well-known/security.txt` | Contact and company facts |

The JSON files under `content/` for services, pricing, team, projects, case studies, and site content were generated by executing the actual source modules — including running the `servicePlans()` generator so the per-service tiers are materialised exactly as the site computes them at runtime. They are not transcriptions and cannot drift from the source.

**Excluded on request:** `E:\Barakode-Technologies-main\html pages\`.

**Excluded by judgment:** the root `assets/` folder (142 MB) — a heavily duplicated scrape of the old Framer site that nothing in the current app references. See the note at the end of [`gaps-and-conflicts.md`](gaps-and-conflicts.md).
