# Site Content — everything else

Structured data: [`site-content.json`](site-content.json)

Navigation, stats, awards, process, testimonials, FAQs, client logos, and the blog.

---

## Navigation

### Main nav

- Home → `/`
- Services → `/services`
- Pricing → `/pricing`
- Projects → `/projects`
- Contact → `/contact`
- About Us → `/about`
- Team → `/team`
- Blog → `/blogs`

### Footer — Sitemap column

- Home → `/`
- Services → `/services`
- Projects → `/projects`
- Team → `/team`
- Blog → `/blogs`

### Footer — Legal column

- Pricing → `/pricing`
- Privacy Policy → `/privacy-policy`
- Contact Us → `/contact`

### Footer — third column

Heading *"Have a project?"* → link *"Start a conversation"* → `/contact`

Below everything: a giant ghost wordmark reading **BARAKODE**, `clamp(90px, 23vw, 380px)`, bottom-clipped, fading into the canvas.

### Newsletter block (footer)

- Eyebrow — Newsletter
- Heading — Stay in the loop
- Placeholder — `your@email.com`
- Button — Subscribe (arrow icon)
- Subcopy — Occasional notes on building software that ships. No noise.

> The newsletter form has no submit handler in the source — it is presentational only.

---

## Stats

Background photo: `images/stats/city-bg.jpeg`. Numbers count up from 0 over 1.8s on an ease-out cubic when scrolled into view.

| Value | Label |
|---|---|
| **98+** | HAPPY CLIENTS |
| **20M** | LINES OF CODE |
| **98%** | ON-TIME DELIVERY |

> ⚠️ See [gaps-and-conflicts.md § 9](../gaps-and-conflicts.md) — 20M lines of code across a three-person team is not plausible.

### More About Us photo row

Eyebrow **MORE ABOUT US**, below the counters:

- `images/about/Barakode_brochure_updated.jpg`
- `images/about/about-2.jpg`
- `images/about/about-3.jpg`

---

## Awards

Eyebrow **AWARDS**. A three-column table; on row hover the prize text fills to gold over 0.2s.

| Brand Name | Prize Name | Date |
|---|---|---|
| Clutch | Top Software Development Company 2024 | MAR 2024 |
| GoodFirms | Best Web & Mobile App Development Agency 2024 | JAN 2024 |
| Awwwards | Site of the Day — Enterprise SaaS Platform | NOV 2023 |
| Deloitte | Technology Fast 500 — Fastest Growing Tech Companies | SEP 2023 |
| Forbes | Top 10 Emerging Software Agencies — USA 2023 | JUN 2023 |

> ⚠️ Verify these before republishing. See [gaps-and-conflicts.md § 10](../gaps-and-conflicts.md).

---

## Process

Four steps. Each title animates `y: 30 → 0` and its image `x: -30 → 0` on viewport entry.

### Step 1 — Discovery

We analyze your business requirements, define project scope, and deliver a clear roadmap with accurate cost and timeline estimates.

Image: `images/process/discovery.jpg`

### Step 2 — Development

We engineer the product with clean, modular architecture — using your stack of choice and shipping reviewable increments every sprint.

Image: `images/process/development.jpg`

### Step 3 — QA & Delivery

We harden the build with automated and manual QA across browsers, devices, and edge cases before a structured, low-risk launch.

Image: `images/process/qa-delivery.jpg`

### Step 4 — Support & Growth

Post-launch we monitor, iterate, and scale — handling infrastructure, security patches, and feature growth as your business evolves.

Image: `images/process/support-growth.jpg`

---

## Testimonials

Eyebrow **TESTIMONIALS**. Five entries; the second is flagged `featured`.

### Excellent Work!

> The Barakode team delivered ahead of schedule and the build was rock-solid from day one.

**Adam Lewis** — Founder, Loopify App

Avatar: `images/testimonials/adam-lewis.svg`

### Impressive Results! *(featured)*

> Building enterprise software in our regulated industry is complex, Brakode handled it flawlessly.

**Marcus Webb** — Senior Director, FinSecure Global

Avatar: `images/testimonials/marcus-webb.svg`

### Exceptional Team!

> Communication was clear at every sprint and the final product exceeded what we mapped on paper.

**Adrian Chen** — Product Lead, Nexus Labs

Avatar: `images/testimonials/adrian-chen.svg`

### Love to partner again

> Brakode transformed our legacy system into a modern cloud platform that scaled 10x within months.

**Sarah Mitchell** — VP Engineering, DataBridge Corp

Avatar: `images/testimonials/sarah-mitchell.svg`

### Best delivery ever!

> From discovery to launch, every milestone was on time and every estimate was honest.

**James Thornton** — CTO at NovaTech Inc

Avatar: `images/testimonials/james-thornton.svg`

> ⚠️ Two of these misspell the brand as **Brakode**. The avatars are multi-megabyte generic SVG illustrations, not photos. See [gaps-and-conflicts.md § 11](../gaps-and-conflicts.md).

---

## FAQ

Eyebrow **FAQ**. Accordion — height `0 ↔ auto` plus opacity over 0.35s easeInOut. Rendered on the home, services, pricing, projects, and contact pages, and emitted as `FAQPage` structured data.

**What is your typical project timeline?**

It depends on the scope! Simple integrations take about 1–2 weeks, while full web or mobile applications usually take 6–16 weeks.

**What services does your agency offer?**

Full-stack web and mobile development, AI/ML integration, cloud and DevOps, UI/UX design, and staff augmentation.

**What is your revision policy?**

Each milestone includes two structured revision rounds. Larger scope changes are quoted transparently before any additional work begins.

**How do we get started working together?**

Send us a brief through the contact form. We respond within 24 hours with a clear plan, honest timeline, and a competitive quote.

**Will I own the rights to the code?**

Yes — full IP transfer is included with every engagement upon final delivery and payment.

**How do you approach a new software project?**

Discovery first. We map requirements, define architecture, lock the stack, and only then start engineering with weekly demos.

---

## Client logo marquee

Eyebrow **TRUSTED BY TEAMS WORLDWIDE**. Scrolls `0 → -50%` over 20–28s, pausing on hover.

Rendered as **text, not images** — no logo files exist for any of these:

`Kintsugi` · `CoreOS` · `Luminary` · `45 Degrees°` · `Codecraft_` · `Frequencii` · `Fraencii` · `Northwind` · `Helix` · `Vantage`

> ⚠️ `Frequencii` / `Fraencii` is the same name typo'd twice. See [gaps-and-conflicts.md § 12](../gaps-and-conflicts.md).

---

## Blog

1 post total.

### Why Every Project Needs a Technical Roadmap

`/blogs/why-every-project-needs-a-technical-roadmap` · Development · 2025 · 5 min read · March 2025

**Author** — Barakode Team · **Tags** — Development, Engineering

**Cover** — `images/blog/technical-roadmap.jpeg`

**Excerpt**

> More than just writing code — it's engineering a system. A technical roadmap is your project's blueprint, ensuring every decision leads to a scalable and maintainable product.

#### Body

##### Architecture Before Code

When multiple developers, designers, and stakeholders collaborate on a software project, chaos becomes the biggest risk. A technical roadmap is the guardrail system — ensuring that architecture decisions, technology choices, and delivery milestones are defined before a single line of code is written.

For a fintech client, we mapped out every technical layer: from database schema and API architecture to deployment pipeline and security protocols. The roadmap helped the entire team execute cohesively across frontend, backend, and DevOps — without constant back-and-forth or costly mid-project pivots.

Checklist:

- Define project scope and technical requirements upfront
- Agree on technology stack and architecture approach
- Confirm delivery milestones and sprint structure

**[IMAGE — portrait, contained]** `images/blog/roadmap-tc-billboard.png`

Alt: Illuminated street billboard reading Terms & Conditions Apply at night

##### Stack Selection and Scalability

Choosing a technology stack is more than preference — it determines performance, scalability, and long-term maintainability. Defining the right stack means setting standards for frontend frameworks, backend services, databases, and cloud infrastructure so the system can grow predictably without expensive rewrites.

We built a comprehensive stack evaluation process using business requirements, expected traffic load, and team expertise as core inputs. With clear decisions on React.js, Node.js, AWS, and MySQL documented upfront, the guide streamlined collaboration between our engineers and the client's internal team — reducing friction and accelerating delivery at every sprint.

**[IMAGE — full-width landscape]** `images/blog/roadmap-schema.jpg`

Alt: Database schema and entity-relationship diagram mapping the platform architecture

Caption: Mapping the data model and API architecture before development begins

##### Technical Documentation

The heart of any successful software project lies in its documentation — how clearly and accessibly it explains the architecture, APIs, and deployment process. Good documentation does not just record decisions, it empowers future developers to build on the system confidently without breaking what already works.

Barakode delivers living technical documentation with every project — including API references, database schema diagrams, environment setup guides, and deployment runbooks. This empowers clients to onboard new developers faster, scale their teams independently, and maintain their software long after launch without depending on us for every change.

---

## Contact form interest options

- Web Development
- Mobile App Development
- AI & Machine Learning
- Cloud & DevOps
- Enterprise Software
- UI/UX Design
- Staff Augmentation
- Other

> `Staff Augmentation` appears here and in the SEO `knowsAbout` list, but has no service page.
