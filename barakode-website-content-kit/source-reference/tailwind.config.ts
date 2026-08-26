import type { Config } from "tailwindcss";

/*
================================================================================
 BARAKODE — AUDIT (v2, expanded 9-page scope)
================================================================================

 1. PAGES & ROUTES
    /                      Home — 11 sections incl. CTAContact
    /services              InnerPageHero + Services(expanded) + Process + FAQ + CTAContact
    /pricing               InnerPageHero(strong glow) + PricingPlans + Testimonials + FAQ + CTAContact
    /projects              InnerPageHero + Projects + FAQ + CTAContact
    /about                 InnerPageHero + Services(expanded) + Stats + Awards + Team + Process
                           + Testimonials + FAQ + CTAContact
    /contact               InnerPageHero + ContactForm + FAQ + CTAContact
    /blogs                 InnerPageHero + BlogCards + CTAContact
    /privacy-policy        Static long-form
    not-found  (/404)      3D logo + Page 404 Found + Back to Home button

 2. REUSABLE COMPONENTS
    LAYOUT     Navbar, MenuDrawer, Footer
    UI         SectionLabel, ArrowButton, GoldSplitHeading, PriceButton, ChecklistItem
    SECTIONS   Hero (home only), InnerPageHero, CTAContact, LogoMarquee,
               Services (expanded prop), Projects, Stats, Awards, Team, Process,
               Testimonials, FAQ, PricingPlans, ContactForm, BlogCards

 3. COLOR PALETTE
    bg.primary       #0A0A0A
    bg.secondary     #111111
    bg.card          #141414
    bg.elevated      #161616
    bg.menu          #0D0D0D
    bg.light         #F0EDE8  (Libya Real Estate card)
    accent.gold      #C8922A  (primary brand)
    accent.goldLight #D4A843
    accent.glow      #8B6914  (normal hero glow)
    accent.amberGlow #8B5E1A  (strong hero glow — pricing/contact)
    ink.white        #FFFFFF
    ink.muted        #6B6B6B
    ink.subtle       #888888
    divider          #1F1F1F
    divider.navbar   #1A1A1A
    danger           #E24B4A  (form errors)

 4. TYPE SCALE  (px / weight)
    Hero display          96–120 / 400-500
    Section heading       64–72  / 400  white + gold split
    CTA heading           ~80    / 400  white + gold split
    Service/pricing title 52–60  / 700
    Process step title    40–48  / 500  gold
    Stats numbers         80–90  / 700
    Pricing prices        ~80    / 700  gold
    FAQ question          22–24  / 400
    Footer link           18–20  / 400
    Form input            16     / 400
    Form label            13     / 500  uppercase tracking
    Body                  14–15  / 400  #888
    SectionLabel          11     / 500  uppercase 0.22em tracking
    Font family           Inter (next/font/google, --font-inter)

 5. ANIMATION CATALOG
    Navbar entry .......... translateY(-100%)→0 ........... 0.5s ease-out delay 0
    Hero 3D logo .......... float 4s ease-in-out infinite  translateY ±8px rotate 0→2°
    Hero glow ............. opacity pulse 0.15↔0.28 ....... 4s ease-in-out infinite
    Particles ............. 8 drift variants 8–20s alt
    Hero "Software" ....... x:-60→0 opacity 0→1 .......... 0.8s ease-out delay 0.2s
    Hero "Development" .... x:60→0  opacity 0→1 .......... 0.8s ease-out delay 0.5s
    Hero "Agency" ......... x:60→0  opacity 0→1 .......... 0.8s ease-out delay 0.8s
    Hero subtitle ......... opacity 0→1 .................. 0.6s delay 1.0s
    Hero body ............. opacity 0→1 .................. 0.6s delay 1.2s
    Scroll indicator ...... drawLine + pulse, fade past 120px
    Drawer open ........... x:-100%→0 .................... 0.4s cubic-bezier(.4,0,.2,1)
    Drawer items .......... y:20→0 opacity 0→1 ........... stagger 50ms delayChildren 0.15s
    Hamburger morph ....... ≡→✕ rotate 180° .............. 0.3s
    Marquee ............... x:0→-50% ..................... 20–28s linear infinite, pause hover
    Service row hover ..... bg→#141414, title x:-10, arrow opacity+scale 0.8→1 ... 0.3s
    Project card hover .... scale 1→1.02, arrow opacity .. 0.4s ease
    Stats counter ......... rAF count 0→target, ease-out cubic over 1.8s
    Awards row hover ...... prize text fill→#C8922A ...... 0.2s
    Team carousel ......... AnimatePresence wait, x:-60↔60 opacity ... 0.4s
    Process title ......... y:30→0 opacity ............... 0.5s on viewport
    Process image ......... x:-30→0 opacity .............. 0.5s on viewport
    FAQ accordion ......... height 0↔auto opacity ........ 0.35s easeInOut
    Contact heading ....... filter blur(8px)→0 opacity 0→1  0.6s ease-out
    Input focus ........... bottom border #1F1F1F→#C8922A. 0.2s
    Standard scroll entry . y:40→0 opacity 0→1 ........... 0.6s [0.4,0,0.2,1] margin -80px

 6. ICON LIBRARY: lucide-react (line/outline style matches the live site)

 7. RESPONSIVE TARGETS: 375 / 768 / 1280 / 1440 — content max 1440 centered.

================================================================================
*/

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Semantic theme tokens ─────────────────────────────────────
        // Every surface/text/line/accent color routes through a CSS
        // variable (channel triplets, so Tailwind opacity modifiers like
        // `bg-accent/15` still work). The active palette is defined in
        // app/globals.css `:root`. Swapping light↔dark = editing that one
        // block; components never hardcode a hex again.
        canvas: "rgb(var(--c-canvas) / <alpha-value>)", // page background
        surface: "rgb(var(--c-surface) / <alpha-value>)", // raised panels/pills
        panel: "rgb(var(--c-panel) / <alpha-value>)", // alt sections / menu
        card: "rgb(var(--c-card) / <alpha-value>)", // cards
        ink: "rgb(var(--c-ink) / <alpha-value>)", // primary text
        muted: "rgb(var(--c-muted) / <alpha-value>)", // strong muted text
        faint: "rgb(var(--c-faint) / <alpha-value>)", // labels / captions
        hair: "rgb(var(--c-hair) / <alpha-value>)", // hairline borders
        hairalt: "rgb(var(--c-hairalt) / <alpha-value>)", // navbar divider
        accent: "rgb(var(--c-accent) / <alpha-value>)", // brand gold
        accenthi: "rgb(var(--c-accenthi) / <alpha-value>)", // gold (lighter)
        accentlo: "rgb(var(--c-accentlo) / <alpha-value>)", // gold (deeper)
        ghost: "rgb(var(--c-ghost) / <alpha-value>)", // giant ghost wordmark
        danger: "rgb(var(--c-danger) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      spacing: {
        section: "120px",
        sectionLg: "160px",
      },
      maxWidth: {
        content: "1440px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(2deg)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.28" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.25" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
        drawLine: {
          "0%": { height: "0px", opacity: "0" },
          "100%": { height: "60px", opacity: "1" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        glowPulse: "glowPulse 4s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
        drawLine: "drawLine 1s ease-out forwards",
        "draw-line": "drawLine 1s ease-out forwards",
        "pulse-subtle": "pulse-subtle 1.5s ease-in-out infinite",
        spotlight: "spotlight 2s ease 0.75s 1 forwards",
      },
    },
  },
  plugins: [],
};

export default config;
