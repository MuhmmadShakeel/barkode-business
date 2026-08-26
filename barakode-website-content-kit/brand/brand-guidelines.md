# Barakode Technologies — Brand Guidelines

Extracted from the live Next.js source at `E:\Barakode-Technologies-main`.
Machine-readable versions: [`colors.json`](colors.json) and [`design-tokens.json`](design-tokens.json).

---

## 1. Identity

| | |
|---|---|
| **Name** | Barakode Technologies |
| **Short name** | Barakode |
| **Descriptor** | Software Development Agency |
| **Slogan** | Engineering Solutions. Delivering Results. |
| **Positioning line** | A full-cycle software development agency engineering web, mobile, AI, and cloud products for startups and enterprises worldwide. |
| **Base** | Pakistan — serving clients worldwide (incl. USA & Saudi Arabia) |
| **Languages** | English (LTR) and Arabic (RTL) |

---

## 2. Logo system

⚠️ **The site currently ships three unrelated logo systems.** Pick one as canonical before you rebuild, or you will carry the inconsistency forward.

### A. Hexagon "molecule" mark — the one actually in the header and footer

An inline SVG: a pointy-top hexagon of gold strokes, a gold ring node at each of the six vertices, a deeper-bronze node at the centre, and two dashed connectors running from the centre to the two right-hand nodes. Every node has a hole punched through it so the mark reads correctly on any surface.

- `logo/barakode-mark-gold.svg` — flat gold `#C8922A`, transparent holes
- `logo/barakode-mark-currentcolor.svg` — tintable; strokes/fills inherit `currentColor`
- `logo/barakode-icon-64.svg` — favicon/app icon: same mark on a `#0A0A0A` rounded square (44px radius on a 200 viewBox)
- Source component: `../source-reference/BarakodeLogo.tsx`

Geometry (viewBox `0 0 200 200`, centre `100,100`, radius ≈ 70):

| Node | Coords |
|---|---|
| Top | `100, 30` |
| Upper-right | `160.6, 65` |
| Lower-right | `160.6, 135` |
| Bottom | `100, 170` |
| Lower-left | `39.4, 135` |
| Upper-left | `39.4, 65` |
| Centre | `100, 100` |

Stroke widths: hexagon edges `7`, dashed connectors `4` with `stroke-dasharray="1.5 9"`. Node radius `10.5` with a `4.6` hole; centre node radius `13` (fill `#7A5320`) with a `5` hole.

**Lockup used in the footer:** mark at 44px, gold, beside a two-line wordmark — `BARAKODE` at 18px semibold uppercase with `0.16em` tracking, and `TECHNOLOGIES` beneath at 10px uppercase with `0.34em` tracking in the faint tone. The navbar uses the same lockup at 34px.

### B. 3D metallic chevron-diamond — the hero visual

`logo/logo-3d.png` (1280×800, transparent). Two mirrored extruded chevrons — `<` and `>` — forming a diamond outline with a hollow centre. Rendered in **dark olive-green metal with iridescent copper/teal highlights**, not gold.

Used for: hero visual, CTAContact background, Team section background, 404 page.

> **Two things to know.**
> 1. This mark is green/bronze, not the brand gold. It clashes with the rest of the palette.
> 2. `chevron-left.png`, `chevron-right.png` and `decor/circle-glow.png` are **byte-identical copies of `logo-3d.png`** (all MD5 `7f752ffe…`). The code in `data.ts` expects `chevron-left.png` to be only the left half and `chevron-right.png` only the right half so the LogoMarquee can animate them apart — those split halves were never produced. If you want that split animation, you need to cut the two halves yourself.

### C. Gold "B" monogram + wordmark — social preview only

Visible only in `logo/og-image-1200x630.png`: a gold (`#C8922A`) rounded square holding a white lowercase-weight **B**, followed by `BARAKODE` in white letterspaced caps. This variant exists nowhere else in the codebase — no SVG or component for it.

---

## 3. Colour

The site defines two complete palettes as CSS custom properties (RGB channel triplets, so Tailwind opacity modifiers like `bg-accent/15` keep working). `app/layout.tsx` sets `data-theme="dark"` on `<html>`, so **dark is what actually renders.**

### Brand accent — gold

| Token | Dark theme | Light theme | Role |
|---|---|---|---|
| `accent` | `#C8922A` | `#A6781C` | Primary brand gold |
| `accenthi` | `#D4A843` | `#B98A2E` | Lighter gold — hover |
| `accentlo` | `#A87820` | `#8A6314` | Deeper gold — active |

Supporting warm tones: bronze core `#7A5320` (logo centre node), warm glow `#8B6914`, strong amber glow `#8B5E1A` (pricing/contact heroes and the 404 glow).

### Dark theme surfaces & text (active)

| Token | Hex | Role |
|---|---|---|
| `canvas` | `#0A0A0A` | Page background |
| `surface` | `#111111` | Raised panels, pills, inputs |
| `panel` | `#0D0D0D` | Alt sections, menu drawer |
| `card` | `#141414` | Cards |
| `ink` | `#FFFFFF` | Primary text |
| `muted` | `#888888` | Body / secondary text |
| `faint` | `#6B6B6B` | Labels, captions, eyebrows |
| `hair` | `#1F1F1F` | Hairline borders and dividers |
| `hairalt` | `#1A1A1A` | Navbar divider |
| `ghost` | `#1C1C1C` | Giant ghost `BARAKODE` wordmark in the footer |
| `danger` | `#E24B4A` | Form validation errors |

The full light palette is in [`colors.json`](colors.json).

### Colour behaviour

- **Text selection** — gold background, canvas-coloured text.
- **Scrollbar** — 10px, canvas track, `hair` thumb that turns gold on hover.
- **Ambient glow** — `radial-gradient(circle, #C8922A 0%, transparent 70%)` at ~14% opacity with a 120px blur, used behind Our Story and several section corners.
- **Per-card overrides** — projects and team cards carry their own `dominantColor` (see `colors.json` → `extras`). Beyut Libya is the one light card: `#F0EDE8`.

---

## 4. Typography

| | |
|---|---|
| **Latin** | Inter (`next/font/google`, var `--font-inter`, `display: swap`) |
| **Arabic** | Cairo (`next/font/google`, var `--font-arabic`, subsets `arabic` + `latin`) — applied on `html[lang="ar"][dir="rtl"]` |
| **Fallbacks** | `system-ui, sans-serif` |

Arabic headings get `line-height: 1.25` so diacritics are not clipped by the tight Latin leading.

### Scale

| Role | Size (px) | Weight |
|---|---|---|
| Hero display | 96–120 | 400–500 |
| Section heading | 64–72 | 400 |
| CTA heading | ~80 | 400 |
| Service / pricing title | 52–60 | 700 |
| Process step title | 40–48 | 500 (gold) |
| Stats numbers | 80–90 | 700 |
| Pricing prices | ~80 | 700 (gold) |
| FAQ question | 22–24 | 400 |
| Footer link | 18–20 | 400 |
| Form input | 16 | 400 |
| Form label | 13 | 500 uppercase, wide tracking |
| Body | 14–15 | 400 (muted) |
| Section eyebrow | 11 | 500 uppercase, `0.22em` tracking |

### The signature heading device

Section headings split across two colours: the first phrase in `ink`, the second in `accent` gold. It is a shared component (`GoldSplitHeading`) taking `white`, `gold`, and `align`. Examples that ship: *"What / we do"*, *"The people / behind Barakode"*, *"View Our / Works"*, *"Clean Code / & Real Results"*, *"Selected work / in motion"*, *"Explore / Pricing"*, *"The Barakode / Story"*.

Page heroes extend this to three parts — `whiteText` + `goldText` + `trailingText` — e.g. *"Software"* / *"Development"* / *"Agency"*.

---

## 5. Layout

- Content max width **1440px**, centred.
- Section vertical rhythm: `120px` (`py-section`), `160px` for the large variant.
- Horizontal padding: `24px` mobile → `40px` desktop.
- Responsive targets: **375 / 768 / 1280 / 1440**.

---

## 6. Motion

Motion is a defining part of this brand — the site layers Framer Motion, GSAP + ScrollTrigger, Lenis smooth scroll, and a Spline 3D scene.

**Core easings**

| Name | Curve | Use |
|---|---|---|
| `inOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard scroll entries |
| `out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Slides and card reveals |
| signature | `cubic-bezier(0.32, 0.72, 0, 1)` | Footer/nav hovers, underline sweeps |

**Durations** — micro `0.2s`, fast `0.3s`, base `0.5s`, slow `0.7s`, hero `0.8s`.

**The default scroll entry** every section uses: `y: 40 → 0`, `opacity: 0 → 1`, `0.6s` on `inOut`, triggered once at a viewport margin of `-80px`.

**Signature moments**

- Hero words fly in from alternating sides, staggered at 0.2s / 0.5s / 0.8s.
- The 3D logo floats forever: ±8px translate, 2° rotate, 4s.
- Warm glow pulses opacity `0.15 ↔ 0.28` over 4s.
- Client marquee scrolls `0 → -50%` over 20–28s, pausing on hover.
- Stats counters count up over 1.8s on an ease-out cubic.
- Pricing cards settle in with a `rotateY(-14° → 0)` tilt plus a blur-off.
- Our Story chapters pin and stack as frosted-glass panes.
- Buttons and social pills are magnetic — they lean toward the cursor.

The complete 25-entry animation catalogue is in [`design-tokens.json`](design-tokens.json) → `motion.catalog`.

---

## 7. Icons

- **UI** — `lucide-react`, line/outline style.
- **Social** — `react-icons/fa6`: `FaInstagram`, `FaLinkedinIn`, `FaYoutube`, `FaFacebookF`, `FaXTwitter`, `FaWhatsapp`.
- **Service icons** — `Code2`, `Smartphone`, `Palette`, `BrainCircuit`, `Cloud`, `ShieldCheck`.

---

## 8. Voice

Direct, confident, engineering-first. Short declaratives. Outcomes over features.

Recurring phrases worth keeping: *"Engineering Solutions. Delivering Results."* · *"full-cycle"* · *"clean architecture"* · *"reviewable increments every sprint"* · *"honest timeline"* · *"Available for new projects"* · *"We respond within 24 hours."*

Two lines from the team that set the tone:

> "We don't ship features. We ship outcomes our clients can build a business on." — Safdar Iqbal, CEO

> "Clean architecture isn't a luxury — it's the difference between software that scales and software that stalls." — Humayon Abdullah
