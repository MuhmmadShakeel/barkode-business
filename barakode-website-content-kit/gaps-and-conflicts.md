# Gaps, Conflicts & Things to Verify

Everything in this kit was copied verbatim from the source. This file lists the places where the source **contradicts itself, is missing, or looks wrong** — so you fix them deliberately instead of propagating them into the new site.

Nothing here has been silently "corrected" in the extracted data. The JSON files carry the original values.

---

## 🔴 Blocking — decide before you build

### 1. No email address exists anywhere

Grepped the entire source (`app/`, `components/`, `lib/`, `public/`, `docs/`). There is **no public email address**. The only reachable channels are the contact form and WhatsApp.

`content/company-and-contact.json` records `"email": null`. **Supply one** if the new site should have an email CTA.

### 2. No street address or city

The Organization schema records only `addressCountry: "PK"`. `humans.txt` says "Pakistan — serving clients worldwide (incl. USA & Saudi Arabia)". No city, no street, no postal code, no map coordinates.

### 3. Two different domains are in play

| Where | Domain |
|---|---|
| `SITE_URL` in `lib/seo.ts`, all canonical URLs, `llms.txt`, `humans.txt`, `security.txt` | `barakode.com` |
| Live client deployment for the Gman project | `gman.**barakodetechnologies**.com` |
| Social handles | `barakodetechnologies` (Instagram, LinkedIn, YouTube) |

`lib/seo.ts` carries the comment *"Change SITE_URL once you have a real production domain."* — so `barakode.com` may be a placeholder. **Confirm which domain is real** before generating canonicals, sitemaps, OG URLs, or `llms.txt`.

---

## 🟠 Content conflicts

### 4. Founding year: 2023 vs 2025

- `organizationSchema.foundingDate` → **2023**
- Our Story chapter 1 → *"Barakode began in **2025**…"*

Both are in this kit as-is. Pick one.

### 5. Burhan Tariq has three different roles

| Source | Role |
|---|---|
| `TEAM[].role` | `BD Manager` |
| `TEAM[].title` | `Business Development Manager` |
| Bio, expertise, focus areas | All business-development |
| Arabic translation (`team-ar.ts`) | مدير تطوير الأعمال (BD Manager) ✓ |
| **Image filename** in `team-members/` | `Burhan-Tariq-**UIUX-Designer**.png` ❌ |
| **Hashtag** `TEAM[].tag` | `#thepixel` — a design hashtag, not a BD one ❌ |

The written content is consistent on Business Development. The filename and hashtag are leftovers from when he was listed as a designer. Rename the file and change the tag, or change the role.

### 6. Two incompatible pricing systems

The site ships both, and they don't reconcile:

**A. Project plans** (`/pricing` page, `PRICING_PLANS`)
- Standard — **$500**, 4–6 weeks
- Premium — **$1,000**, 4–12 weeks

**B. Per-service hourly + monthly rates** (`SERVICES[]`, rendered on each `/services/[slug]`)
- $15–$25/hour; Starter $1,200–$2,000/mo; Professional $2,400–$4,000/mo; Enterprise = "Custom"/"Quote"

A $500 fixed-price project sits well below a $1,200/month Starter retainer. A visitor moving from `/pricing` to `/services/web-development` sees two prices an order of magnitude apart with no explanation.

**C. A third set of prices in `public/llms.txt`** that appears nowhere in the code:

> Full-Stack Development — *from $3,599* · Cloud & DevOps — *from $1,399* · UI/UX & Product Design — *from $599*

These are recorded in `content/pricing.json` under `legacyPricesFoundInLlmsTxt`. Treat `lib/data.ts` as authoritative and **rewrite `llms.txt`** — right now it feeds wrong prices to AI answer engines.

### 7. `SERVICE_DETAILS` is orphaned dead content

`lib/data.ts` defines rich long-form content (overview, deliverables, 4-step process) for three services:

`full-stack-development` · `cloud-devops` · `ui-ux-product-design`

But `SERVICES[]` uses entirely different slugs:

`web-development` · `mobile-development` · `ui-ux-design` · `ai-ml-development` · `cloud-development` · `qa-testing`

**No key matches. `SERVICE_DETAILS` is never imported by any component** — verified by grep. That content has never rendered on the site.

It is preserved in `content/services.json` → `serviceDetailsLongForm`. It is good copy — remap the slugs and use it, or drop it.

### 8. Services list vs. services advertised elsewhere

`SERVICES[]` has six entries. `llms.txt` advertises a partly different five, including "Staff Augmentation" — which appears in `knowsAbout` and the contact form's interest dropdown but has **no service page**.

---

## 🟡 Credibility — verify before republishing

These are claims the new site would repeat. A three-person agency founded 2023–2025 making them invites scrutiny.

### 9. Statistics

| Claim | Value |
|---|---|
| Happy clients | **98+** |
| Lines of code | **20M** |
| On-time delivery | **98%** |

20M lines of production code across three people in ~2 years is not plausible. Confirm or replace.

### 10. Awards

Five awards are listed on the home and about pages:

- Clutch — Top Software Development Company 2024 (Mar 2024)
- GoodFirms — Best Web & Mobile App Development Agency 2024 (Jan 2024)
- Awwwards — Site of the Day, Enterprise SaaS Platform (Nov 2023)
- Deloitte — Technology Fast 500 (Sep 2023)
- Forbes — Top 10 Emerging Software Agencies, USA 2023 (Jun 2023)

Deloitte Fast 500 and Forbes rankings are verifiable public lists. If these are not genuine, remove them — a fabricated award is a legal and reputational risk, not just a copy problem.

### 11. Testimonials

Five testimonials with named people, job titles, and companies: Adam Lewis (Loopify App), Marcus Webb (FinSecure Global), Adrian Chen (Nexus Labs), Sarah Mitchell (DataBridge Corp), James Thornton (NovaTech Inc).

The avatars are **generic SVG illustrations, not photographs** — and two of them weigh 3–5 MB each, which is a strong sign they are stock/generated art rather than real headshots. Combined with the invented-sounding company names, these read as placeholder content. Confirm they are real before republishing attributed quotes.

### 12. Client logos are placeholder names with no images

`CLIENT_LOGOS` is ten strings rendered as *text* in the marquee — Kintsugi, CoreOS, Luminary, 45 Degrees°, Codecraft_, Frequencii, **Fraencii**, Northwind, Helix, Vantage. No logo image files exist for any of them.

Note `Frequencii` and `Fraencii` — almost certainly the same name typo'd twice. The marquee is labelled *"TRUSTED BY TEAMS WORLDWIDE"*, so these read as client claims.

---

## 🟢 Typos and small fixes

| Where | Issue |
|---|---|
| `TESTIMONIALS[1].body` and `[3].body` | **"Brakode"** — brand name misspelled, missing the second *a* |
| `PRICING_PLANS[1].badge` | **"Exculvsive"** — should be "Exclusive". The source comments this as *"preserved typo from site_dna"*, i.e. deliberately copied from the old Framer site |
| `/pricing` hero eyebrow | Reads **"ABOUT US"** on the pricing page. Should presumably be "PRICING" |
| `CLIENT_LOGOS` | `Frequencii` / `Fraencii` duplicate |
| Footer copyright | **"© 2026"** — verify this is intended |

---

## ⚙️ Asset problems

### 13. The "3D logo" is four identical files

`logo-3d.png`, `chevron-left.png`, `chevron-right.png`, and `decor/circle-glow.png` are **byte-identical** (MD5 `7f752ffe30fff9c8a5560904af55fb1c`).

`lib/data.ts` documents an intent that was never fulfilled:

> `chevron-left.png` → the LEFT half of the diamond (points right, ">")
> `chevron-right.png` → the RIGHT half of the diamond (points left, "<")
> …the marquee animates them independently for the entrance + split + wordmark-flow sequence.

The split halves were never produced, so that animation cannot work as designed. Cut the halves yourself if you want it.

### 14. The 3D logo is green, not gold

`logo-3d.png` is dark olive-green metal with copper/teal iridescence. The entire rest of the brand is gold `#C8922A`. It is the largest brand element on the homepage and it does not match the palette.

### 15. Three unrelated logo marks

See [`brand/brand-guidelines.md § 2`](brand/brand-guidelines.md). The hexagon molecule (header/footer), the 3D chevron-diamond (hero), and a gold "B" monogram (OG image only) share no visual language. **Pick one canonical mark.**

### 16. Oversized assets

| File | Size | Note |
|---|---|---|
| `images/testimonials/james-thornton.svg` | **5.3 MB** | An SVG this size is a traced bitmap |
| `images/testimonials/adrian-chen.svg` | **3.5 MB** | " |
| `images/testimonials/adam-lewis.svg` | **3.0 MB** | " |
| `images/decor/world-map.svg` | **1.2 MB** | Unused |
| `images/stats/city-bg.jpeg` | **1.0 MB** | Full-bleed background |
| `images/projects/gman.png` | **1.5 MB** | PNG for a photo-like screenshot; should be WebP |

The five testimonial avatars alone are **12.2 MB** — for images rendered at roughly 48×48. Convert to real raster avatars before shipping.

### 17. The hero 3D scene is a third-party placeholder

`components/sections/SplineHero.tsx` says plainly:

> The Spline scene URL is a placeholder demo asset — swap `DEFAULT_SCENE` for a Barakode-branded scene exported from spline.design when ready.

Scene: `https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode` — a generic robot. It is preloaded in `<head>` on every page. It is not Barakode's, and it is an external runtime dependency.

### 18. `about-1.jpg` is unused

`ABOUT_PHOTOS` uses the brochure, `about-2`, and `about-3`. A source comment notes *"about-4 removed, kept at 3"* — but it is `about-1` that ended up orphaned. It is included in the kit under *Spare*.

---

## 📋 Coverage note

**What is fully captured:** all pricing, all six services (plus their generated plan tiers), all three team members, all three projects with long-form detail, all 19 case studies with their PDFs, testimonials, FAQs, awards, process steps, stats, the blog post, navigation, every page's hero copy and metadata, the privacy policy, both colour themes, typography, the full motion catalogue, all social links, and the Arabic translations.

**What does not exist in the source and cannot be extracted:**

- Email address
- Street address, city, postal code
- Business hours
- Company registration / tax number
- Real client logo images
- Team member social profiles (no LinkedIn/GitHub per person)
- Team member email addresses
- Blog authors beyond the generic "Barakode Team"
- Any blog post other than the single one
- Case-study client names (all 19 are internal/academic projects, not client work)

---

## Note on the legacy `assets/` folder

The project root has an `assets/` folder (**142 MB**) — a scrape of the old Framer site, organised by page (`home/`, `pricing/`, `services/`, …) with hash-named files like `USQdLDQMi0U9Ke5VazRGbWSXts0 (7).jpg`. It is heavily duplicated (the same file appears in 5–8 numbered copies across folders) and **nothing in the current Next.js app references it**.

It was deliberately excluded from this kit. The live site's real assets are the ones in `images/`, which came from `public/images/`. If you want the old Framer stock imagery, it is still at `E:\Barakode-Technologies-main\assets\`.
