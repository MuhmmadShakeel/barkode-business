/**
 * SERVICE PAGE CONTENT — the five dedicated service pages (brief, prompts 5–9).
 * AI Automation has its own top-level page and is not in this set.
 */

export type ServicePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    marker: string;
    heading: string;
    accent: string;
    trail?: string;
    body: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  /** Who this is for — rendered as a qualifying list. */
  audience: string[];
  problem: {
    heading: string;
    accent: string;
    body: string;
    items: string[];
  };
  /** "What we build" / "What we support". */
  builds: { heading: string; items: string[] };
  /** Optional second list — common features, workflow examples, service tiers. */
  extra?: { heading: string; note?: string; items: string[] }[];
  process: { heading: string; steps: string[] };
  /** Tech-stack group names resolved against TECH_GROUPS. */
  stackGroups: string[];
  engagement: { models: string[]; note: string };
  faqs: { q: string; a: string }[];
  cta: { heading: string; accent: string; body: string; label: string; href: string };
};

export const SERVICE_PAGES: ServicePage[] = [
  /* ══════════════════════════════════════════════════════════════════════ */
  {
    slug: "mvp-saas-product-development",
    metaTitle: "MVP & SaaS Product Development",
    metaDescription:
      "Barakode helps founders and growing teams turn product ideas into scalable MVPs and SaaS platforms with clear planning, product-focused UI/UX, full-stack development, and launch support.",
    hero: {
      marker: "MVP & SaaS Product Development",
      heading: "Launch your product with the",
      accent: "right technical foundation",
      trail: ".",
      body: "Barakode helps founders and growing teams turn product ideas into scalable MVPs and SaaS platforms with clear planning, product-focused UI/UX, full-stack development, testing, launch support, and ongoing improvement.",
      primary: { label: "Plan Your MVP", href: "/contact?service=mvp-saas" },
      secondary: { label: "Book a Free Project Discovery Call", href: "/contact?intent=strategy-call" },
    },
    audience: [
      "Startup founders",
      "SaaS founders",
      "Product teams",
      "Agencies needing development partners",
      "Businesses launching new digital products",
    ],
    problem: {
      heading: "A good MVP is not just a smaller version of",
      accent: "a big product",
      body: "An MVP needs the right feature focus, user flow, architecture, and launch plan. Without that structure, teams often build too much, build the wrong thing, or create a product that becomes difficult to scale later.",
      items: [
        "Unclear product scope",
        "Too many features too early",
        "Weak user flow",
        "No scalable backend plan",
        "Poor admin visibility",
        "No roadmap after launch",
        "No technical partner to guide decisions",
      ],
    },
    builds: {
      heading: "What Barakode builds",
      items: [
        "MVPs",
        "SaaS platforms",
        "Web applications",
        "Admin dashboards",
        "User portals",
        "Subscription systems",
        "Multi-role products",
        "API-driven platforms",
        "Internal product tools",
        "Mobile-connected SaaS products",
      ],
    },
    extra: [
      {
        heading: "Common SaaS features",
        note: "The modules most SaaS products need on day one — and the ones we build most often.",
        items: [
          "User authentication",
          "Role-based access",
          "Subscription billing",
          "Admin dashboards",
          "Customer dashboards",
          "Notifications",
          "Reports and analytics",
          "File uploads",
          "API integrations",
          "Payment gateways",
          "Team management",
          "Activity logs",
        ],
      },
    ],
    process: {
      heading: "MVP development process",
      steps: [
        "Discovery and product goal mapping",
        "Feature prioritization",
        "UX flows and wireframes",
        "UI design and prototype",
        "Architecture planning",
        "Full-stack development",
        "QA and launch",
        "Post-launch improvements",
      ],
    },
    stackGroups: ["Frontend", "Backend", "Databases", "Cloud & DevOps", "Design"],
    engagement: {
      models: ["mvp-sprint", "custom-product-build"],
      note: "For early-stage products, we usually begin with a focused MVP Sprint. For larger platforms, we create a custom product build plan based on features, integrations, timeline, and long-term product goals.",
    },
    faqs: [
      {
        q: "How long does it take to build an MVP?",
        a: "An MVP Sprint typically runs 4 to 10 weeks depending on scope. Larger platforms run 8 to 20+ weeks. We give you a specific timeline after discovery, not before.",
      },
      {
        q: "Can you help us define the first version?",
        a: "Yes — that is usually the most valuable part. Feature prioritisation and scope definition are the first two steps of the MVP process, before any design or code.",
      },
      {
        q: "Do you build SaaS subscription systems?",
        a: "Yes. Subscription billing, plan tiers, payment gateway integration, and the admin controls around them are standard parts of a SaaS build.",
      },
      {
        q: "Can you work with our existing designs?",
        a: "Yes. If you already have Figma files or a design system, we build against them. If the designs have gaps, we will tell you where before development starts.",
      },
      {
        q: "Can you maintain the product after launch?",
        a: "Yes. Most MVP clients continue on a Maintenance & Support plan for monitoring, bug fixes, and feature growth.",
      },
      {
        q: "Will we own the code?",
        a: "Ownership terms should be agreed before the project starts. In most custom development projects, clients receive ownership based on the agreed contract.",
      },
    ],
    cta: {
      heading: "Have a SaaS idea or",
      accent: "MVP to build?",
      body: "Share your product goals and we will help you define the right first version, technical scope, and launch path.",
      label: "Plan Your MVP",
      href: "/contact?service=mvp-saas",
    },
  },

  /* ══════════════════════════════════════════════════════════════════════ */
  {
    slug: "custom-web-mobile-app-development",
    metaTitle: "Custom Web & Mobile App Development",
    metaDescription:
      "Barakode designs and develops web and mobile applications for startups, businesses, and teams that need software built around their real operations, not generic templates.",
    hero: {
      marker: "Custom Web & Mobile App Development",
      heading: "Build custom apps designed around your users and",
      accent: "business workflows",
      trail: ".",
      body: "Barakode designs and develops web and mobile applications for startups, businesses, and teams that need software built around their real operations, not generic templates.",
      primary: { label: "Build a Custom App", href: "/contact?service=web-mobile" },
      secondary: { label: "Book a Free Project Discovery Call", href: "/contact?intent=strategy-call" },
    },
    audience: [
      "Businesses needing custom applications",
      "Startups building customer-facing platforms",
      "Companies modernizing old software",
      "Teams needing web and mobile access",
      "Agencies needing technical delivery support",
    ],
    problem: {
      heading: "Generic tools do not always fit",
      accent: "how your business works",
      body: "Many businesses outgrow spreadsheets, plugins, templates, and disconnected tools. Custom apps help create a better user experience, stronger workflow control, and software that matches the way the business actually operates.",
      items: [
        "Existing tools do not fit the process",
        "Users need a better app experience",
        "Business data is scattered",
        "Manual work slows operations",
        "Old systems are difficult to maintain",
        "Mobile access is missing",
      ],
    },
    builds: {
      heading: "What we build",
      items: [
        "Customer-facing web apps",
        "Mobile apps",
        "Business portals",
        "Admin dashboards",
        "Booking systems",
        "Marketplace platforms",
        "CRM-connected apps",
        "Real-time applications",
        "Internal team apps",
        "Reporting systems",
      ],
    },
    extra: [
      {
        heading: "Key features",
        note: "The capabilities most custom applications need, built once and built properly.",
        items: [
          "Responsive web interface",
          "iOS and Android app support",
          "User authentication",
          "Role-based access",
          "Notifications",
          "Payment integration",
          "Admin controls",
          "API integrations",
          "Reports and analytics",
          "File management",
          "Real-time updates",
        ],
      },
    ],
    process: {
      heading: "Development process",
      steps: [
        "Requirement mapping",
        "UX planning",
        "UI design",
        "Technical architecture",
        "Frontend and mobile development",
        "Backend and API development",
        "Integrations",
        "QA and deployment",
        "Maintenance and improvement",
      ],
    },
    stackGroups: ["Frontend", "Mobile", "Backend", "Databases", "Cloud & DevOps"],
    engagement: {
      models: ["custom-product-build", "dedicated-product-team"],
      note: "Most custom applications run as a Custom Product Build. Where you need ongoing capacity across several releases, a Dedicated Product Team is usually the better fit.",
    },
    faqs: [
      {
        q: "Do you build both web and mobile apps?",
        a: "Yes. Web applications in React and Next.js, and mobile applications using React Native or Flutter where cross-platform is the right call.",
      },
      {
        q: "Can you redesign an existing app?",
        a: "Yes. We start with a UX and technical review of what exists, then agree whether it is a redesign, a rebuild, or something in between.",
      },
      {
        q: "Can you integrate payments?",
        a: "Yes. Payment gateway integration, subscription billing, and the reconciliation and admin views around them are standard work.",
      },
      {
        q: "Can you build admin dashboards?",
        a: "Yes, and we recommend it. An app without an admin view usually means someone on your team is doing manual database work.",
      },
      {
        q: "Can you maintain the app after launch?",
        a: "Yes, through a monthly Maintenance & Support plan covering monitoring, bug fixes, updates, and small feature improvements.",
      },
      {
        q: "Can you work with our internal team?",
        a: "Yes. We work alongside in-house teams regularly — either owning a defined part of the stack or adding capacity to an existing sprint cycle.",
      },
    ],
    cta: {
      heading: "Need a custom",
      accent: "web or mobile app?",
      body: "Tell us what you are trying to build and we will help you define the right technical approach.",
      label: "Build a Custom App",
      href: "/contact?service=web-mobile",
    },
  },

  /* ══════════════════════════════════════════════════════════════════════ */
  {
    slug: "internal-business-systems",
    metaTitle: "Internal Business Systems",
    metaDescription:
      "Barakode helps growing businesses build internal dashboards, CRM workflows, operations portals, reporting systems, and admin tools that make daily work easier to manage.",
    hero: {
      marker: "Internal Business Systems",
      heading: "Turn manual operations into",
      accent: "reliable digital systems",
      trail: ".",
      body: "Barakode helps growing businesses build internal dashboards, CRM workflows, operations portals, reporting systems, and admin tools that make daily work easier to manage.",
      primary: { label: "Build an Internal System", href: "/contact?service=internal-systems" },
      secondary: { label: "Discuss Your Workflow", href: "/contact" },
    },
    audience: [
      "Growing businesses",
      "Operations teams",
      "Sales teams",
      "Admin teams",
      "Companies running on spreadsheets or manual processes",
    ],
    problem: {
      heading: "Spreadsheets and disconnected tools",
      accent: "slow teams down",
      body: "As companies grow, manual tracking becomes harder to manage. Teams start relying on spreadsheets, WhatsApp, email threads, and disconnected tools. This creates confusion, missed updates, duplicate work, and weak visibility.",
      items: [
        "Manual tracking",
        "No central dashboard",
        "Poor reporting",
        "Scattered customer data",
        "Slow approvals",
        "Repeated data entry",
        "No role-based visibility",
        "Hard to track team performance",
      ],
    },
    builds: {
      heading: "What we build",
      items: [
        "Internal dashboards",
        "CRM systems",
        "Operations portals",
        "Admin panels",
        "Approval workflows",
        "Reporting systems",
        "Inventory systems",
        "HR / admin tools",
        "Client portals",
        "Team management systems",
        "Workflow automation systems",
      ],
    },
    extra: [
      {
        heading: "Common workflow examples",
        note: "The processes businesses most often bring to us as a spreadsheet and leave as a system.",
        items: [
          "Lead management",
          "Sales pipeline tracking",
          "Customer onboarding",
          "Task approvals",
          "Document review",
          "Staff management",
          "Inventory tracking",
          "Ticket management",
          "Reporting automation",
          "Client communication tracking",
        ],
      },
      {
        heading: "Key features",
        items: [
          "Role-based access",
          "User management",
          "Workflow tracking",
          "Notifications",
          "Reports and analytics",
          "File uploads",
          "Search and filters",
          "Activity logs",
          "Data export",
          "Third-party integrations",
          "Admin controls",
        ],
      },
      {
        heading: "What changes for the business",
        note: "Not projections — the operational differences an internal system actually makes.",
        items: [
          "Better visibility",
          "Less manual work",
          "Faster decisions",
          "Cleaner data",
          "Easier reporting",
          "Better team accountability",
          "Scalable operations",
        ],
      },
    ],
    process: {
      heading: "Process",
      steps: [
        "Workflow discovery",
        "Current process mapping",
        "System planning",
        "UX and dashboard design",
        "Development",
        "Integrations",
        "Testing",
        "Training and support",
      ],
    },
    stackGroups: ["Frontend", "Backend", "Databases", "Integrations"],
    engagement: {
      models: ["custom-product-build", "maintenance-support"],
      note: "Internal systems usually start as a Custom Product Build scoped around one or two workflows, then continue on Maintenance & Support as more of the operation moves into the system.",
    },
    faqs: [
      {
        q: "Can you replace our spreadsheets with a dashboard?",
        a: "Yes. We start by mapping how the spreadsheet is actually used — including the informal rules people apply — then build the system around that reality rather than an idealised version of it.",
      },
      {
        q: "Can you build a custom CRM?",
        a: "Yes, where an off-the-shelf CRM does not fit your process. Where one would fit, we will say so — building a CRM you did not need is not a good outcome.",
      },
      {
        q: "Can you connect our existing tools?",
        a: "Yes, wherever the tool exposes an API or webhooks. CRM APIs, email tools, payment tools, reporting tools, Google Workspace, and Slack are all common.",
      },
      {
        q: "Can different users have different access?",
        a: "Yes. Role-based access control is built in from the start — who can see what, who can approve what, and what gets logged.",
      },
      {
        q: "Can reports be automated?",
        a: "Yes. Scheduled reports, live dashboards, exports, and alerts when a threshold is crossed.",
      },
      {
        q: "Can you maintain the system long-term?",
        a: "Yes, through a monthly support plan. Internal systems tend to grow with the business, so most clients keep a maintenance engagement running.",
      },
    ],
    cta: {
      heading: "Still managing operations",
      accent: "manually?",
      body: "Share your current workflow and we will help you turn it into a reliable internal system.",
      label: "Discuss Your Workflow",
      href: "/contact?service=internal-systems",
    },
  },

  /* ══════════════════════════════════════════════════════════════════════ */
  {
    slug: "cloud-devops-maintenance",
    metaTitle: "Cloud, DevOps & Product Maintenance",
    metaDescription:
      "Barakode helps teams deploy, maintain, monitor, optimize, and improve software products after launch so they stay reliable as users, features, and business needs grow.",
    hero: {
      marker: "Cloud, DevOps & Product Maintenance",
      heading: "Keep your product stable, secure, and",
      accent: "ready to scale",
      trail: ".",
      body: "Barakode helps teams deploy, maintain, monitor, optimize, and improve software products after launch so they stay reliable as users, features, and business needs grow.",
      primary: { label: "Improve Product Stability", href: "/contact?service=cloud-devops" },
      secondary: { label: "Discuss Maintenance Support", href: "/contact" },
    },
    audience: [
      "Businesses running live products",
      "SaaS platforms",
      "Apps needing performance improvements",
      "Teams needing deployment and maintenance support",
    ],
    problem: {
      heading: "Launching software is",
      accent: "only the beginning",
      body: "A live product needs ongoing care. Bugs appear, dependencies change, users grow, performance issues surface, and new features are needed. Without proper maintenance, even a good product can become slow, unstable, or difficult to improve.",
      items: [
        "Slow performance",
        "Production bugs",
        "No monitoring",
        "Manual deployment",
        "Security updates ignored",
        "Scaling problems",
        "Poor backup setup",
        "No clear support process",
      ],
    },
    builds: {
      heading: "What we support",
      items: [
        "SaaS platforms",
        "Web applications",
        "Mobile apps",
        "Internal systems",
        "Admin dashboards",
        "APIs",
        "Backend systems",
        "AI workflows",
        "Cloud infrastructure",
      ],
    },
    extra: [
      {
        heading: "Maintenance services",
        items: [
          "Bug fixing",
          "Feature improvements",
          "Version updates",
          "Security patches",
          "Database maintenance",
          "Performance optimization",
          "Backup support",
          "Technical support",
        ],
      },
      {
        heading: "DevOps services",
        items: [
          "Cloud deployment",
          "CI/CD setup",
          "Docker setup",
          "Server configuration",
          "Environment management",
          "Monitoring setup",
          "Error tracking",
          "Release management",
        ],
      },
      {
        heading: "Product improvement services",
        items: [
          "UX improvements",
          "Feature expansion",
          "Dashboard improvements",
          "API improvements",
          "Performance audits",
          "Code cleanup",
          "Technical debt reduction",
        ],
      },
      {
        heading: "Monitoring and reliability",
        note: "Build confidence into your product operations.",
        items: [
          "Uptime monitoring",
          "Error tracking",
          "Backup planning",
          "Performance reviews",
          "Security updates",
          "Deployment process",
          "Incident response",
          "Scaling support",
        ],
      },
    ],
    process: {
      heading: "How a maintenance engagement starts",
      steps: [
        "Review the running system and its infrastructure",
        "Assess stability, performance, and security posture",
        "Agree the support scope and response expectations",
        "Set up monitoring, error tracking, and backups",
        "Establish the deployment and release process",
        "Run the monthly cycle: fixes, updates, improvements",
      ],
    },
    stackGroups: ["Cloud & DevOps", "Backend", "Databases"],
    engagement: {
      models: ["maintenance-support", "dedicated-product-team"],
      note: "Maintenance is usually handled through a monthly support plan based on the size, complexity, and criticality of the product.",
    },
    faqs: [
      {
        q: "Can you maintain a product built by another team?",
        a: "Yes. We start with a review of the existing codebase and infrastructure, then agree a maintenance scope from what we actually find rather than what was promised.",
      },
      {
        q: "Can you fix bugs in an existing app?",
        a: "Yes. Bug fixing is a standard part of every maintenance plan, and we can also take on a one-off stabilisation engagement.",
      },
      {
        q: "Can you improve performance?",
        a: "Yes. Performance audits, database and query optimisation, frontend load work, and caching strategy are all common maintenance work.",
      },
      {
        q: "Can you manage cloud deployment?",
        a: "Yes — AWS, Azure, Docker, CI/CD pipelines, environment management, and release process setup.",
      },
      {
        q: "Can you provide monthly support?",
        a: "Yes. Maintenance & Support runs as a monthly retainer sized to the product's complexity and how critical uptime is to your business.",
      },
      {
        q: "Can you help scale a SaaS platform?",
        a: "Yes. Scaling work usually starts with measurement — finding where the system actually breaks under load before changing architecture.",
      },
    ],
    cta: {
      heading: "Need a reliable technical team for",
      accent: "your live product?",
      body: "Tell us what you are currently running and where you need support. We will help you assess stability, maintenance needs, and next steps.",
      label: "Discuss Maintenance Support",
      href: "/contact?service=cloud-devops",
    },
  },

  /* ══════════════════════════════════════════════════════════════════════ */
  {
    slug: "ui-ux-product-design",
    metaTitle: "UI/UX Product Design",
    metaDescription:
      "Barakode turns ideas, workflows, and product requirements into clean user flows, wireframes, prototypes, dashboards, mobile screens, and design systems ready for development.",
    hero: {
      marker: "UI/UX Product Design",
      heading: "Design product experiences that are clear, usable, and",
      accent: "ready to build",
      trail: ".",
      body: "Barakode helps teams turn ideas, workflows, and product requirements into clean user flows, wireframes, prototypes, dashboards, mobile screens, and design systems ready for development.",
      primary: { label: "Design Your Product", href: "/contact?service=ui-ux" },
      secondary: { label: "Book a Free Project Discovery Call", href: "/contact?intent=strategy-call" },
    },
    audience: [
      "Founders planning a product before development",
      "Companies redesigning an existing product",
      "SaaS teams improving usability",
      "Agencies needing product design support",
    ],
    problem: {
      heading: "Good design reduces confusion",
      accent: "before development starts",
      body: "A clear product design helps teams understand user flows, feature priorities, screen structure, and development requirements before writing code. This reduces rework and improves the final product experience.",
      items: [
        "Unclear user flows",
        "Screens designed without the roles behind them",
        "Features prioritised by opinion, not use",
        "No prototype to test before building",
        "Inconsistent components across the product",
        "Handoff files developers cannot build from",
      ],
    },
    builds: {
      heading: "What we design",
      items: [
        "SaaS dashboards",
        "Admin panels",
        "Mobile apps",
        "Web applications",
        "Client portals",
        "Internal systems",
        "CRM workflows",
        "AI assistant interfaces",
        "Reporting dashboards",
        "Landing pages for software products",
      ],
    },
    extra: [
      {
        heading: "Deliverables",
        note: "What lands in your hands at the end of a design engagement.",
        items: [
          "UX audit",
          "User flows",
          "Wireframes",
          "UI screens",
          "Mobile responsive screens",
          "Clickable prototype",
          "Component library",
          "Design system basics",
          "Developer handoff notes",
        ],
      },
      {
        heading: "Design system coverage",
        note: "The components a product design has to settle before build, including the states most designs forget.",
        items: [
          "Buttons",
          "Forms",
          "Cards",
          "Tables",
          "Modals",
          "Navigation",
          "Dashboards",
          "Badges",
          "Alerts",
          "Empty states",
        ],
      },
    ],
    process: {
      heading: "UX process",
      steps: [
        "Requirement review",
        "User role mapping",
        "User flows",
        "Wireframes",
        "UI design",
        "Interactive prototype",
        "Design system",
        "Developer handoff",
      ],
    },
    stackGroups: ["Design", "Frontend"],
    engagement: {
      models: ["mvp-sprint", "custom-product-build"],
      note: "Design usually runs as the opening phase of an MVP Sprint or Custom Product Build. It can also run standalone when you have your own engineering team ready to build from it.",
    },
    faqs: [
      {
        q: "Can you design before development starts?",
        a: "Yes, and for most products we recommend it. Validating flows and screens on a prototype is far cheaper than discovering the problem in code.",
      },
      {
        q: "Do you create clickable prototypes?",
        a: "Yes. An interactive prototype is a standard deliverable, so you can walk stakeholders or users through the product before it exists.",
      },
      {
        q: "Do you design SaaS dashboards?",
        a: "Yes — dashboards, admin panels, reporting views, and the multi-role navigation that holds them together are our most common design work.",
      },
      {
        q: "Can you redesign an existing product?",
        a: "Yes. We start with a UX audit of the current product and the reasons behind the problems, then design the replacement from that.",
      },
      {
        q: "Do you provide developer handoff?",
        a: "Yes. Organised components, clear spacing, responsive states, and notes covering the behaviour that a static file cannot show.",
      },
      {
        q: "Can your team also build the product?",
        a: "Yes. Design and engineering sit in the same team, which removes the usual gap between what was designed and what gets built.",
      },
    ],
    cta: {
      heading: "Have a product idea that",
      accent: "needs clear design?",
      body: "Let's turn your idea, workflow, or rough concept into a product experience your users can understand.",
      label: "Design Your Product",
      href: "/contact?service=ui-ux",
    },
  },
];

export const getServicePage = (slug: string) => SERVICE_PAGES.find((p) => p.slug === slug);
