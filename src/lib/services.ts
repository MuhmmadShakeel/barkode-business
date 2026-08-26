/**
 * SERVICES — the six primary offerings.
 * Copy is taken verbatim from the brief (prompts 2, 3, 5, 6, 7, 8, 9).
 * Digital marketing is deliberately absent: the brief forbids promoting it.
 */

import type { ServiceNavItem } from "./site";

export type ServiceIconName = ServiceNavItem["icon"];

export type ServiceSummary = {
  slug: string;
  /** Canonical route. AI Automation lives at its own top-level page. */
  href: string;
  title: string;
  /** Compact title for cards and cross-links. */
  shortTitle: string;
  icon: ServiceIconName;
  /** Homepage + services-listing copy. */
  summary: string;
  cta: string;
  /** Who it is for — services page. */
  audience: string;
  /** Problem it solves — services page. */
  problem: string;
  /** What Barakode delivers — services page. */
  delivers: string;
  /** Key features — services page. */
  features: string[];
};

export const SERVICES: ServiceSummary[] = [
  {
    slug: "mvp-saas-product-development",
    href: "/services/mvp-saas-product-development",
    title: "MVP & SaaS Product Development",
    shortTitle: "MVP & SaaS",
    icon: "Rocket",
    summary:
      "Launch your product with the right foundation. We help define, design, build, and ship MVPs and SaaS platforms with scalable architecture and clean user experiences.",
    cta: "Explore MVP & SaaS Development",
    audience:
      "Startup founders, SaaS founders, early-stage product teams, businesses launching new products, agencies needing technical delivery.",
    problem:
      "You have a product idea, but you need a clear technical plan, UX structure, development team, and launch-ready MVP.",
    delivers:
      "Product discovery, feature planning, user flows, UI/UX design, frontend development, backend development, admin panel, authentication, payment integration, SaaS architecture, testing, and launch support.",
    features: [
      "Multi-role user systems",
      "Subscription models",
      "Dashboards",
      "Reporting",
      "Admin controls",
      "API integrations",
      "Cloud deployment",
    ],
  },
  {
    slug: "custom-web-mobile-app-development",
    href: "/services/custom-web-mobile-app-development",
    title: "Custom Web & Mobile App Development",
    shortTitle: "Web & Mobile Apps",
    icon: "AppWindow",
    summary:
      "Build web and mobile applications tailored to your users, workflows, and business model. From customer-facing platforms to operational apps, we handle product design, development, and deployment.",
    cta: "Explore Web & Mobile Development",
    audience:
      "Businesses needing custom apps, startups building customer-facing platforms, companies modernizing old systems, teams needing web and mobile access.",
    problem:
      "Off-the-shelf tools do not match your business process, user needs, or growth plans.",
    delivers:
      "Custom web applications, mobile apps, admin dashboards, user portals, APIs, backend systems, third-party integrations, testing, and deployment.",
    features: [
      "Responsive web apps",
      "iOS and Android apps",
      "Real-time features",
      "User accounts",
      "Notifications",
      "Payment systems",
      "Admin management",
      "Analytics",
    ],
  },
  {
    slug: "ai-automation-ai-integration",
    href: "/ai-automation",
    title: "AI Automation & AI Integration",
    shortTitle: "AI Automation",
    icon: "BrainCircuit",
    summary:
      "Use AI where it creates real operational value. We build AI assistants, RAG chatbots, document processing workflows, reporting automation, and tool integrations that reduce manual work.",
    cta: "Explore AI Automation",
    audience:
      "Companies with repetitive manual work, teams handling documents, support, reporting, CRM tasks, and SaaS products adding AI features.",
    problem:
      "Your team spends too much time on repetitive tasks, manual data handling, support responses, reporting, or searching through information.",
    delivers:
      "AI workflow planning, AI chatbots, RAG assistants, AI agents, document processing, CRM automation, customer support automation, reporting automation, API integrations, and human review workflows.",
    features: [
      "LLM integration",
      "Knowledge base connection",
      "Vector search",
      "Prompt workflows",
      "Data extraction",
      "Tool integrations",
      "Admin controls",
      "Audit logs",
    ],
  },
  {
    slug: "internal-business-systems",
    href: "/services/internal-business-systems",
    title: "Internal Business Systems",
    shortTitle: "Internal Systems",
    icon: "LayoutDashboard",
    summary:
      "Replace spreadsheets, manual tracking, and disconnected tools with custom dashboards, portals, CRM workflows, admin panels, and business management systems.",
    cta: "Explore Internal Systems",
    audience:
      "Growing businesses, operations teams, sales teams, admin teams, companies using spreadsheets or manual processes.",
    problem:
      "Your team is managing important work through spreadsheets, WhatsApp, email threads, or disconnected tools.",
    delivers:
      "Internal dashboards, CRM systems, operations portals, approval workflows, reporting systems, team management tools, client portals, and admin systems.",
    features: [
      "Role-based access",
      "Workflow tracking",
      "Notifications",
      "Reports",
      "File management",
      "Data filters",
      "Activity logs",
      "Integrations",
    ],
  },
  {
    slug: "cloud-devops-maintenance",
    href: "/services/cloud-devops-maintenance",
    title: "Cloud, DevOps & Product Maintenance",
    shortTitle: "Cloud & DevOps",
    icon: "Cloud",
    summary:
      "Keep your product stable, secure, and ready to scale. We help with deployment, cloud setup, CI/CD, monitoring, optimization, and long-term maintenance.",
    cta: "Explore Maintenance & DevOps",
    audience:
      "Businesses with live products, SaaS platforms, apps needing performance improvements, and teams needing deployment and maintenance support.",
    problem: "Your product needs to stay fast, secure, stable, and ready to scale.",
    delivers:
      "Cloud deployment, CI/CD setup, server configuration, monitoring, bug fixing, performance optimization, security updates, database management, and ongoing support.",
    features: [
      "AWS/Azure setup",
      "Docker deployment",
      "Backup planning",
      "Uptime monitoring",
      "Error tracking",
      "Performance audits",
      "Version updates",
    ],
  },
  {
    slug: "ui-ux-product-design",
    href: "/services/ui-ux-product-design",
    title: "UI/UX Product Design",
    shortTitle: "UI/UX Design",
    icon: "PenTool",
    summary:
      "Design clear, usable, and conversion-focused product experiences before development begins. We create product flows, wireframes, prototypes, and design systems.",
    cta: "Explore UI/UX Design",
    audience:
      "Founders before development, companies redesigning products, SaaS teams improving usability, and agencies needing product design support.",
    problem:
      "Your product idea or existing system needs clear flows, better usability, and a polished interface before development.",
    delivers:
      "UX audit, user flows, wireframes, UI design, clickable prototypes, design systems, developer handoff, and responsive screens.",
    features: [
      "Figma designs",
      "Component libraries",
      "Mobile-first design",
      "Dashboard design",
      "SaaS UI patterns",
      "Form UX",
      "Design documentation",
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

/* ══════════════════════════════════════════════════════════════════════════
   TECHNOLOGY STACK — grouped badges, shared by several pages
   ══════════════════════════════════════════════════════════════════════════ */

export type TechGroup = { group: string; note: string; items: string[] };

export const TECH_GROUPS: TechGroup[] = [
  {
    group: "Frontend",
    note: "Interfaces users actually work in.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    group: "Backend",
    note: "Services, APIs, and business logic.",
    items: ["Node.js", "NestJS", "Python", "Django", "FastAPI"],
  },
  {
    group: "Mobile",
    note: "One codebase, both app stores.",
    items: ["React Native", "Flutter"],
  },
  {
    group: "AI",
    note: "Model access, retrieval, and orchestration.",
    items: [
      "OpenAI",
      "LangChain",
      "RAG pipelines",
      "Vector databases",
      "Document processing",
      "AI workflow orchestration",
    ],
  },
  {
    group: "Cloud & DevOps",
    note: "Ship it, watch it, keep it up.",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD pipelines", "Monitoring tools"],
  },
  {
    group: "Databases",
    note: "Where the business truth lives.",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    group: "Design",
    note: "Decisions made before code.",
    items: ["Figma", "Design systems", "Prototyping", "Product design handoff"],
  },
  {
    group: "Integrations",
    note: "The tools your team already uses.",
    items: [
      "Payment gateways",
      "CRM APIs",
      "Email systems",
      "Calendar tools",
      "Analytics tools",
      "Webhooks",
      "Third-party APIs",
    ],
  },
];

/** Compact stack used on service pages — only the relevant groups. */
export const stackFor = (groups: string[]): TechGroup[] =>
  groups
    .map((g) => TECH_GROUPS.find((t) => t.group === g))
    .filter((t): t is TechGroup => Boolean(t));
