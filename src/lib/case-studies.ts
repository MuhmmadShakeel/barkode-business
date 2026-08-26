/**
 * CASE STUDIES
 *
 * Two tiers, both real:
 *
 *  1. CLIENT_CASES — three verified client engagements. Every field below is
 *     drawn from the supplied project records: real timelines, real stacks,
 *     real live URLs, real screenshots. Structured to the brief's Individual
 *     Case Study Template (prompt 11). `result` is populated only where the
 *     source records a verified outcome; otherwise it stays null and the page
 *     renders the "verified result pending" annotation instead of a number.
 *
 *  2. RESEARCH_STUDIES — 19 engineering & AI R&D studies, generated from the
 *     content kit. These are internal/academic engineering work, not client
 *     work, and the UI labels them as such. No client names are attached.
 */

import { RESEARCH_STUDIES, type ResearchStudy, type ResearchTrack } from "./research.generated";

export { RESEARCH_STUDIES };
export type { ResearchStudy, ResearchTrack };

/* ══════════════════════════════════════════════════════════════════════════
   FILTER TAXONOMY — the brief's six service categories, mapped to real work
   ══════════════════════════════════════════════════════════════════════════ */

export type TrackId =
  | "all"
  | "saas-mvp"
  | "web-mobile"
  | "ai-automation"
  | "internal-systems"
  | "ai-research"
  | "systems";

export const TRACKS: { id: TrackId; label: string; blurb: string }[] = [
  { id: "all", label: "All work", blurb: "Every project and study." },
  {
    id: "saas-mvp",
    label: "SaaS & MVP platforms",
    blurb: "Products taken from idea to a launched, billable platform.",
  },
  {
    id: "web-mobile",
    label: "Web & mobile apps",
    blurb: "Customer-facing applications built around a real workflow.",
  },
  {
    id: "ai-automation",
    label: "AI automation, RAG & chatbots",
    blurb: "Retrieval assistants, support automation, and semantic pipelines.",
  },
  {
    id: "internal-systems",
    label: "Internal dashboards & business systems",
    blurb: "Operations replaced with software the team can run itself.",
  },
  {
    id: "ai-research",
    label: "AI & machine learning R&D",
    blurb: "Model work behind the automation: vision, NLP, generative.",
  },
  {
    id: "systems",
    label: "Systems & low-level engineering",
    blurb: "Where the problem lives close to the metal.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   CLIENT ENGAGEMENTS
   ══════════════════════════════════════════════════════════════════════════ */

export type Screenshot = { src: string; alt: string; caption: string };

export type ClientCase = {
  slug: string;
  /** Card + hero name. */
  name: string;
  /** "How Barakode helped [client type] build [product type]" */
  headline: string;
  clientType: string;
  industry: string;
  track: TrackId;
  /** Secondary tracks this project also belongs to, for filtering. */
  alsoIn: TrackId[];
  timeline: string;
  liveUrl: string | null;
  engagementModel: string;
  servicesDelivered: string[];
  /** One-paragraph summary for the hero and the card. */
  summary: string;
  challenge: string[];
  goals: string[];
  solution: string[];
  featuresDelivered: string[];
  stack: { group: string; items: string[] }[];
  /** Barakode's role — only the disciplines that actually applied. */
  role: string[];
  /** Verified outcomes only. Null where the source records none. */
  results: string[] | null;
  lessons: string[];
  cover: string;
  coverAlt: string;
  /** Screenshots supplied with the project record. */
  screenshots: Screenshot[];
  /** Card accent, drawn from the project's own artwork. */
  tone: "dark" | "light";
};

export const CLIENT_CASES: ClientCase[] = [
  {
    slug: "openinterview-video-interview-platform",
    name: "OpenInterview",
    headline: "How Barakode helped an HR-tech startup ship a subscription video-interview platform",
    clientType: "US-based HR technology startup",
    industry: "HR technology & recruitment",
    track: "saas-mvp",
    alsoIn: ["web-mobile", "ai-automation"],
    timeline: "August 2024 – November 2024",
    liveUrl: "https://openinterview.me",
    engagementModel: "Custom Product Build",
    servicesDelivered: [
      "MVP & SaaS Product Development",
      "UI/UX Product Design",
      "AI Automation & AI Integration",
      "Cloud, DevOps & Product Maintenance",
    ],
    summary:
      "A video-interview SaaS where a candidate uploads a résumé and gets back a recruiter-ready profile — video introduction, availability, and one shareable link — in under three minutes. Barakode built the full product: résumé parsing, video pipeline, shareable profiles, and Stripe-backed subscriptions.",
    challenge: [
      "Candidates disappear into application piles. The founders wanted to replace the back-and-forth of résumé attachments, scheduling emails, and screening calls with a single link a candidate could send a recruiter directly.",
      "That meant the product had to do real work in the background — parse an arbitrary résumé, generate profile data from it, accept and serve video, and do all of it fast enough that a first-time user finishes in one sitting with zero technical setup.",
    ],
    goals: [
      "Turn an uploaded résumé into a populated candidate profile automatically, in seconds.",
      "Accept, store, and stream candidate video reliably across devices.",
      "Give every candidate a clean, shareable public profile URL.",
      "Support a freemium model with paid upgrades handled end to end.",
    ],
    solution: [
      "Barakode engineered the complete platform — résumé processing, video upload infrastructure, the shareable profile system, and the recruiter-facing view. AI-powered résumé parsing generates the profile automatically so the candidate confirms rather than types.",
      "The onboarding flow was designed around a single number: under three minutes from landing to shareable link. Drag-and-drop résumé upload, step-by-step profile building, and a profile page that reads well on a recruiter's phone.",
      "On the backend, résumés upload to secure cloud storage, video files are processed for smooth playback, and JWT authentication manages sessions across the free and paid tiers. Stripe handles subscription billing. Every candidate gets a unique public URL.",
      "The AI transparency page and legal documentation were delivered as part of the build, not bolted on afterwards.",
    ],
    featuresDelivered: [
      "AI résumé parsing",
      "Video upload & streaming",
      "Shareable public profiles",
      "User authentication",
      "Freemium tiering",
      "Stripe subscription billing",
      "Availability calendar",
      "Recruiter-facing profile view",
      "AI transparency page",
    ],
    stack: [
      { group: "Frontend", items: ["React.js"] },
      { group: "Backend", items: ["Node.js", "REST API"] },
      { group: "AI", items: ["AI résumé processing"] },
      { group: "Cloud", items: ["Cloud storage", "Video streaming"] },
      { group: "Integrations", items: ["Stripe payments", "JWT authentication"] },
    ],
    role: [
      "Product strategy",
      "UI/UX design",
      "Frontend development",
      "Backend development",
      "AI integration",
      "DevOps",
      "QA",
      "Maintenance",
    ],
    results: [
      "Platform launched and live at openinterview.me, serving job seekers internationally.",
      "Candidate profile creation reduced to a single self-serve flow requiring no technical setup.",
      "Freemium model in production with paid upgrades handled end to end through Stripe.",
      "Ongoing feature development and AI improvements continue post-launch.",
    ],
    lessons: [
      "Fixing the onboarding target — under three minutes — early made every later scope decision easy to settle.",
      "Parsing the résumé rather than asking the user to retype it was the single change that made the product feel finished.",
      "Testing the upload and processing pipeline with real résumés, not clean samples, surfaced the failure cases that mattered.",
    ],
    cover: "/images/projects/openinterview.jpg",
    coverAlt:
      "OpenInterview marketing site shown on a laptop — upload a résumé to generate a shareable video profile",
    screenshots: [
      {
        src: "/images/projects/openinterview-detail.jpg",
        alt: "OpenInterview candidate landing page with résumé upload and shareable profile explainer",
        caption: "Candidate landing — résumé in, shareable profile out",
      },
    ],
    tone: "dark",
  },
  {
    slug: "beyut-libya-real-estate-platform",
    name: "Beyut Libya",
    headline: "How Barakode helped a real-estate operator launch a bilingual national listings platform",
    clientType: "Real-estate marketplace operator",
    industry: "Real estate",
    track: "web-mobile",
    alsoIn: ["saas-mvp", "internal-systems"],
    timeline: "October 2024 – January 2025",
    liveUrl: "https://www.beyutlibya.com/en",
    engagementModel: "Custom Product Build",
    servicesDelivered: [
      "Custom Web & Mobile App Development",
      "UI/UX Product Design",
      "Internal Business Systems",
      "Cloud, DevOps & Product Maintenance",
    ],
    summary:
      "A bilingual (Arabic/English, RTL and LTR) property marketplace for the Libyan market — verified listings, live search filters, secure accounts, and an admin panel agents use to manage their own inventory. Built to cover residential and commercial property nationwide.",
    challenge: [
      "Property discovery in Libya ran on informal networks and unverified listings. There was no reliable, digital-first place for a buyer to search real inventory or for a seller to list with any credibility attached.",
      "Serving the market properly meant the platform had to be genuinely bilingual — full RTL for Arabic and LTR for English, not a translated afterthought — and had to give agents self-service tooling so the operator was not the bottleneck on every listing.",
    ],
    goals: [
      "Give buyers instant, filterable search across verified property inventory.",
      "Let sellers and agents publish and manage listings without operator intervention.",
      "Support Arabic and English equally, including layout mirroring.",
      "Cover residential and commercial property across the country, not one city.",
    ],
    solution: [
      "Barakode designed and built the complete platform — architecture, frontend, backend, bilingual localisation, and deployment. Market research came first: how buyers and sellers actually interact today, and where trust breaks down.",
      "The interface serves both language directions natively. Property cards, search filters, and listing pages were built mobile-first and optimised for fast discovery on a phone, which is how most of the market browses.",
      "A REST API backend on MySQL powers the listings. JWT authentication handles buyer, seller, and agent sessions with different permissions. The search engine filters live by type, location, and price range. i18n runs throughout so language switching is instant.",
      "An admin panel gives the operator category management, listing moderation, user verification, and per-account listing limits — the internal system that makes the public marketplace maintainable.",
    ],
    featuresDelivered: [
      "Bilingual Arabic/English with RTL",
      "Live property search & filters",
      "Verified listing workflow",
      "Multi-role accounts (buyer / seller / agent)",
      "Admin panel & moderation",
      "User verification",
      "Category management",
      "Mobile-first responsive UI",
    ],
    stack: [
      { group: "Frontend", items: ["Next.js", "React.js"] },
      { group: "Backend", items: ["Node.js", "REST API"] },
      { group: "Database", items: ["MySQL"] },
      { group: "Cloud", items: ["Vercel"] },
      { group: "Integrations", items: ["JWT authentication", "i18n localisation"] },
    ],
    role: [
      "Product strategy",
      "UI/UX design",
      "Frontend development",
      "Backend development",
      "DevOps",
      "QA",
      "Maintenance",
    ],
    results: [
      "Platform live and operating nationwide at beyutlibya.com.",
      "Replaced informal, unverified listing channels with a structured verification workflow.",
      "Agents publish and manage their own inventory without operator involvement.",
      "Arabic and English served as first-class languages, with full RTL layout mirroring.",
    ],
    lessons: [
      "Building RTL in from the first layout decision — rather than retrofitting it — kept the Arabic experience equal to the English one.",
      "Early feedback from users in Tripoli reshaped the search filters before the nationwide launch.",
      "The admin panel was what made the public marketplace sustainable; without it the operator would have been the bottleneck.",
    ],
    cover: "/images/projects/beyut-libya.jpg",
    coverAlt:
      "Beyut Libya real-estate platform on a laptop — sign-in screen with the Add New Property wizard behind it",
    screenshots: [
      {
        src: "/images/projects/beyut-admin-categories.jpg",
        alt: "Beyut Libya admin panel showing the property categories management dashboard",
        caption: "Admin panel — category and listing management",
      },
      {
        src: "/images/projects/beyut-admin-profile.jpg",
        alt: "Beyut Libya admin panel showing a user profile with verification status and listing limits",
        caption: "User profile — verification status and listing limits",
      },
    ],
    tone: "light",
  },
  {
    slug: "gman-stitching-platform",
    name: "Gman Stitching Platform",
    headline: "How Barakode helped a tailoring business replace a failing legacy system",
    clientType: "Growing tailoring & fashion-retail business",
    industry: "Tailoring & fashion retail",
    track: "internal-systems",
    alsoIn: ["web-mobile"],
    timeline: "January 2023 – March 2023",
    liveUrl: "https://gman.barakodetechnologies.com/",
    engagementModel: "Custom Product Build, continuing on Maintenance & Support",
    servicesDelivered: [
      "Internal Business Systems",
      "Custom Web & Mobile App Development",
      "Cloud, DevOps & Product Maintenance",
    ],
    summary:
      "A full-cycle tailoring and order-management platform: customers, measurements, orders, inventory, billing, and accounting in one system. It replaced a PHP/Laravel application that had become too slow to use and too brittle to change.",
    challenge: [
      "The existing PHP/Laravel and Vue.js application had severe performance problems and had become effectively unmaintainable. Every business change — a new product configuration, a changed workflow — required a developer.",
      "That dependency was the real cost. The business could not adjust its own operations without waiting on someone else, and the system was slow enough that staff were working around it.",
    ],
    goals: [
      "Replace the legacy stack with an architecture the team can maintain and extend.",
      "Restore acceptable response times across daily operations.",
      "Let the business configure its own workflows without developer involvement.",
      "Bring customers, orders, inventory, billing, and accounting into one system.",
    ],
    solution: [
      "Barakode ran a full analysis of the existing system first — every pain point, bottleneck, and missing capability — and mapped each business process into a technical specification before any code was written.",
      "The frontend was rebuilt from scratch in React with Ant Design, mobile-first and consistent across every module, with interactive reporting dashboards. Staff at every level can use it without training overhead.",
      "The backend was rebuilt on Node.js and Express with a REST architecture, Prisma ORM for type-safe queries, and JWT authentication for role-based access. The database was restructured with a normalised schema, referential integrity, and dynamic configuration so the business can change its own settings.",
      "Docker containerisation gives consistent deployment across environments. The system runs on the client's own VPS.",
    ],
    featuresDelivered: [
      "Customer profiles & measurements",
      "Order management workflow",
      "Inventory tracking",
      "Billing module",
      "Accounting module",
      "Reporting dashboards",
      "Role-based access control",
      "Self-service business configuration",
      "Dockerised VPS deployment",
    ],
    stack: [
      { group: "Frontend", items: ["React.js", "Redux", "Ant Design"] },
      { group: "Backend", items: ["Node.js", "Express.js", "Prisma ORM"] },
      { group: "Database", items: ["MySQL"] },
      { group: "Cloud", items: ["Docker", "VPS"] },
      { group: "Integrations", items: ["JWT authentication"] },
    ],
    role: [
      "Product strategy",
      "UI/UX design",
      "Frontend development",
      "Backend development",
      "DevOps",
      "QA",
      "Maintenance",
    ],
    results: [
      "Approximately 70% improvement in application response time after the rebuild.",
      "Legacy PHP/Laravel codebase fully retired and replaced.",
      "The client now manages all business configuration independently, without developer assistance.",
      "System live on the client's VPS and in active daily use across customers, orders, inventory, billing, and accounting.",
    ],
    lessons: [
      "Mapping every business process before writing code is what made a three-month rebuild possible.",
      "Making configuration a first-class product feature removed the client's dependency on us for routine change.",
      "Weekly progress reviews on a live staging environment caught misunderstandings while they were still cheap.",
    ],
    cover: "/images/projects/gman.png",
    coverAlt: "Gman tailoring platform dashboard shown on screen",
    screenshots: [
      {
        src: "/images/projects/gman-detail.webp",
        alt: "Gman manufacturing summary dashboard with order, inventory, and performance analytics",
        caption: "Manufacturing summary — orders, inventory, and performance in one view",
      },
    ],
    tone: "dark",
  },
];

export const getClientCase = (slug: string) => CLIENT_CASES.find((c) => c.slug === slug);
export const getResearchStudy = (slug: string) =>
  RESEARCH_STUDIES.find((s) => s.slug === slug);

/** Featured engagement for the Case Studies page hero. */
export const FEATURED_CASE = CLIENT_CASES[0];

/** All slugs that resolve on /case-studies/[slug]. */
export const allCaseSlugs = () => [
  ...CLIENT_CASES.map((c) => c.slug),
  ...RESEARCH_STUDIES.map((s) => s.slug),
];

/** Does a client case belong to the given filter track? */
export const clientCaseInTrack = (c: ClientCase, track: TrackId) =>
  track === "all" || c.track === track || c.alsoIn.includes(track);

/** Counts per track, for the filter chips. */
export const trackCounts = (): Record<TrackId, number> => {
  const counts = Object.fromEntries(TRACKS.map((t) => [t.id, 0])) as Record<TrackId, number>;
  counts.all = CLIENT_CASES.length + RESEARCH_STUDIES.length;
  for (const t of TRACKS) {
    if (t.id === "all") continue;
    counts[t.id] =
      CLIENT_CASES.filter((c) => clientCaseInTrack(c, t.id)).length +
      RESEARCH_STUDIES.filter((s) => (s.track as string) === t.id).length;
  }
  return counts;
};
