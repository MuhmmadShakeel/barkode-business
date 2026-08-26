/**
 * SITE CONFIG — single source of truth for identity, contact and navigation.
 *
 * VERIFICATION POLICY
 * -------------------
 * The brief forbids invented statistics, testimonials, awards and client logos.
 * Anything not verifiable in the supplied content kit is typed as `Pending` and
 * rendered by <Pending /> as a visible "to be supplied" annotation rather than
 * being faked. Replace the `null` with a real value and the annotation
 * disappears everywhere it is used — no other edit required.
 */

export type Pending = null;

/** Fields awaiting verified values. Fill these in to remove the annotations. */
export const PENDING = {
  /** No public email address exists anywhere in the supplied source. */
  email: null as string | Pending,
  /** Organisation schema records only `addressCountry: PK`. */
  streetAddress: null as string | Pending,
  city: null as string | Pending,
  /** Calendly / Cal.com / SavvyCal link for "Book a Strategy Call". */
  bookingUrl: null as string | Pending,
  /** Endpoint that receives contact-form submissions. */
  formEndpoint: null as string | Pending,
} as const;

export const SITE = {
  name: "Barakode Technologies",
  shortName: "Barakode",
  /** New positioning — supersedes "full-cycle software development agency". */
  positioning: "Product Engineering & AI Automation Partner",
  description:
    "Barakode Technologies helps startups and growing businesses build scalable web apps, mobile apps, SaaS platforms, internal business systems, and AI-powered workflows.",
  url: "https://www.barakodetechnologies.com",
  locale: "en_US",
  location: "Pakistan, serving international clients",
  countryCode: "PK",
  areaServed: "Worldwide",
  languages: ["English", "Arabic"],
} as const;

export const CONTACT = {
  email: PENDING.email,
  whatsapp: {
    display: "+92 332 2060667",
    e164: "+923322060667",
    href: "https://wa.me/923322060667",
  },
  phoneSchema: "+92-332-2060667",
  location: SITE.location,
  responsePromise:
    "We review every inquiry carefully and respond with practical next steps. If your project is not the right fit, we will still try to point you in the right direction.",
  bookingUrl: PENDING.bookingUrl,
} as const;

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  icon: "linkedin" | "instagram" | "facebook" | "youtube" | "x" | "whatsapp";
};

/** Verified profiles from the content kit. Tracking params stripped. */
export const SOCIAL: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "barakode-technologies",
    href: "https://www.linkedin.com/company/barakode-technologies/",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    handle: "Barakode Technologies",
    href: "https://www.facebook.com/profile.php?id=61581226034652",
    icon: "facebook",
  },
  {
    label: "Instagram",
    handle: "@barakodetechnologies",
    href: "https://www.instagram.com/barakodetechnologies",
    icon: "instagram",
  },
  {
    label: "YouTube",
    handle: "@barakodetechnologies",
    href: "https://youtube.com/@barakodetechnologies",
    icon: "youtube",
  },
  {
    label: "X",
    handle: "@barakode1",
    href: "https://x.com/barakode1",
    icon: "x",
  },
  {
    label: "WhatsApp",
    handle: "+92 332 2060667",
    href: "https://wa.me/923322060667",
    icon: "whatsapp",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   CALLS TO ACTION — three tiers, per the brief
   ══════════════════════════════════════════════════════════════════════════ */

export const CTA = {
  primary: { label: "Book a Strategy Call", href: "/contact?intent=strategy-call" },
  secondary: { label: "View Our Work", href: "/case-studies" },
  supporting: { label: "Send Project Details", href: "/contact" },
} as const;

/* ══════════════════════════════════════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════════════════════════════════════ */

export type ServiceNavItem = {
  label: string;
  href: string;
  description: string;
  /** lucide-react icon name resolved in ServiceIcon */
  icon: "Rocket" | "AppWindow" | "BrainCircuit" | "LayoutDashboard" | "Cloud" | "PenTool";
};

export const SERVICES_MENU: ServiceNavItem[] = [
  {
    label: "MVP & SaaS Product Development",
    href: "/services/mvp-saas-product-development",
    description: "Launch scalable MVPs and SaaS platforms.",
    icon: "Rocket",
  },
  {
    label: "Custom Web & Mobile App Development",
    href: "/services/custom-web-mobile-app-development",
    description: "Build web and mobile apps around real business needs.",
    icon: "AppWindow",
  },
  {
    label: "AI Automation & AI Integration",
    href: "/ai-automation",
    description: "Automate workflows with practical AI systems.",
    icon: "BrainCircuit",
  },
  {
    label: "Internal Business Systems",
    href: "/services/internal-business-systems",
    description: "Replace manual operations with reliable digital systems.",
    icon: "LayoutDashboard",
  },
  {
    label: "Cloud, DevOps & Maintenance",
    href: "/services/cloud-devops-maintenance",
    description: "Keep products stable, secure, and ready to scale.",
    icon: "Cloud",
  },
  {
    label: "UI/UX Product Design",
    href: "/services/ui-ux-product-design",
    description: "Design clear product experiences before development.",
    icon: "PenTool",
  },
];

export type NavLink = { label: string; href: string; children?: ServiceNavItem[] };

export const NAV: NavLink[] = [
  { label: "Services", href: "/services", children: SERVICES_MENU },
  { label: "AI Automation", href: "/ai-automation" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "/process" },
  { label: "Engagement Models", href: "/engagement-models" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV = {
  company: {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Engagement Models", href: "/engagement-models" },
      { label: "Contact", href: "/contact" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "FAQs", href: "/faq" },
      { label: "Technologies", href: "/technologies" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
} as const;

export const FOOTER_COPY = {
  description:
    "Barakode Technologies helps startups and growing businesses build scalable software products, internal systems, and AI-powered workflows.",
  ctaHeading: "Have a product or workflow to build?",
  ctaLabel: "Start a Conversation",
  copyright: `© ${new Date().getFullYear()} Barakode Technologies. All rights reserved.`,
} as const;
