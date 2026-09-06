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
  /** Calendly / Cal.com / SavvyCal link for the free project discovery call. */
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
  header: { label: "Free Discovery Call", href: "/contact?intent=strategy-call" },
  primary: { label: "Book a Free Project Discovery Call", href: "/contact?intent=strategy-call" },
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
  icon: "Rocket" | "AppWindow" | "BrainCircuit" | "LayoutDashboard" | "Cloud" | "PenTool" | "Blocks" | "Code2" | "Waypoints" | "Network" | "ClipboardList" | "WandSparkles" | "Palette" | "ShieldCheck" | "UsersRound" | "Sparkles" | "BarChart3";
};

export const SERVICES_MENU: ServiceNavItem[] = [
  { label: "Artificial Intelligence", href: "/ai-automation", description: "AI systems and automation.", icon: "BrainCircuit" },
  { label: "Blockchain", href: "/services/blockchain-development", description: "Reliable decentralized products.", icon: "Blocks" },
  { label: "Design", href: "/services/ui-ux-product-design", description: "Clear product experiences.", icon: "Palette" },
  { label: "Development", href: "/services/custom-web-mobile-app-development", description: "Web and mobile products.", icon: "Code2" },
  { label: "Digital Transformation", href: "/services/digital-transformation", description: "Connected business systems.", icon: "Waypoints" },
  { label: "Internet of Things", href: "/services/internet-of-things", description: "Connected device platforms.", icon: "Network" },
  { label: "IT Project Management", href: "/services/it-project-management", description: "Structured technical delivery.", icon: "ClipboardList" },
  { label: "Prompt Engineering", href: "/services/prompt-engineering", description: "Reliable AI interactions.", icon: "WandSparkles" },
  { label: "Quality Assurance", href: "/services/quality-assurance", description: "Thorough product testing.", icon: "ShieldCheck" },
  { label: "Staff Augmentation", href: "/services/staff-augmentation", description: "Flexible product capacity.", icon: "UsersRound" },
  { label: "Vibe Code", href: "/services/vibe-code", description: "Rapid idea validation.", icon: "Sparkles" },
  {
    label: "MVP & SaaS",
    href: "/services/mvp-saas-product-development",
    description: "Launch and scale faster.",
    icon: "Rocket",
  },
  {
    label: "Web & Mobile Apps",
    href: "/services/custom-web-mobile-app-development",
    description: "Purpose-built digital products.",
    icon: "AppWindow",
  },
  {
    label: "AI Automation",
    href: "/ai-automation",
    description: "Smarter, faster workflows.",
    icon: "BrainCircuit",
  },
  {
    label: "Internal Systems",
    href: "/services/internal-business-systems",
    description: "Simplify complex operations.",
    icon: "LayoutDashboard",
  },
  {
    label: "Cloud & DevOps",
    href: "/services/cloud-devops-maintenance",
    description: "Reliable, scalable infrastructure.",
    icon: "Cloud",
  },
  {
    label: "Product Design",
    href: "/services/ui-ux-product-design",
    description: "Clear, intuitive experiences.",
    icon: "PenTool",
  },
];

export const CONSULTANCY_MENU: ServiceNavItem[] = [
  { label: "IT Consultation", href: "/consultancy/it-consultation", description: "Independent technology guidance.", icon: "ClipboardList" },
  { label: "IT Outsourcing Consultancy", href: "/consultancy/it-outsourcing", description: "A practical delivery partnership plan.", icon: "UsersRound" },
  { label: "Managed IT Services Consultancy", href: "/consultancy/managed-it", description: "Reliable ongoing IT operations.", icon: "ShieldCheck" },
  { label: "Design Consultancy", href: "/consultancy/design-consultancy", description: "Product and experience direction.", icon: "Palette" },
  { label: "AI & Data Strategy Consulting", href: "/consultancy/ai-data-strategy", description: "Responsible AI and data priorities.", icon: "BrainCircuit" },
  { label: "Digital Transformation Consulting", href: "/consultancy/digital-transformation", description: "A sequenced modernization roadmap.", icon: "Waypoints" },
  { label: "Product Strategy Consulting", href: "/consultancy/product-strategy", description: "Sharper product decisions.", icon: "Rocket" },
  { label: "Tech Strategy Consulting", href: "/consultancy/tech-strategy", description: "Technology choices with context.", icon: "AppWindow" },
  { label: "DevOps Consulting", href: "/consultancy/devops-consulting", description: "Stronger delivery and operations.", icon: "Cloud" },
  { label: "Microservices Consulting", href: "/consultancy/microservices-consulting", description: "Service architecture direction.", icon: "Blocks" },
  { label: "IoT Consultancy", href: "/consultancy/iot-consultancy", description: "Connected-device platform planning.", icon: "Network" },
  { label: "Business Intelligence Consulting", href: "/consultancy/business-intelligence", description: "Decision-ready reporting foundations.", icon: "BarChart3" },
];

export type NavLink = { label: string; href: string; children?: ServiceNavItem[] };

export const NAV: NavLink[] = [
  { label: "Services", href: "/services", children: SERVICES_MENU },
  { label: "Consultancy", href: "/consultancy", children: CONSULTANCY_MENU },
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
