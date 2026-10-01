/**
 * SHARED CONTENT — process, engagement models, FAQs, team, AI automation.
 * All copy from the brief unless marked as drawn from the supplied kit.
 */

/* ══════════════════════════════════════════════════════════════════════════
   PRODUCT ENGINEERING PROCESS — eight steps (brief, prompt 13)
   ══════════════════════════════════════════════════════════════════════════ */

export type ProcessStep = {
  id: string;
  title: string;
  /** One line for the compact homepage timeline. */
  short: string;
  what: string;
  receives: string[];
  why: string;
};

export const PROCESS: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery & Requirement Mapping",
    short: "Understand the business, the users, and the constraints before anything is scoped.",
    what: "We understand your business, users, goals, current workflow, technical needs, and project constraints.",
    receives: [
      "Requirement notes",
      "Scope outline",
      "Initial feature list",
      "Risks and assumptions",
      "Suggested next steps",
    ],
    why: "Good discovery prevents unclear scope, wasted development time, and wrong product decisions.",
  },
  {
    id: "strategy",
    title: "Product Strategy & UX Planning",
    short: "Turn the idea into a product plan: roles, flows, priority.",
    what: "We define user roles, core flows, product structure, feature priority, and user journey.",
    receives: [
      "Product roadmap",
      "User flow diagrams",
      "Feature prioritization",
      "UX direction",
    ],
    why: "This turns the idea into a practical product plan.",
  },
  {
    id: "design",
    title: "UI Design & Prototyping",
    short: "Validate the product on screen before it is built.",
    what: "We create wireframes, UI screens, design components, and clickable prototypes.",
    receives: ["Figma designs", "Responsive layouts", "Prototype", "Design system basics"],
    why: "Design validation before development saves time and reduces rework.",
  },
  {
    id: "sprint-planning",
    title: "Development Sprint Planning",
    short: "Break the build into milestones with dates attached.",
    what: "We break the project into clear development milestones and sprint tasks.",
    receives: ["Sprint plan", "Timeline", "Milestones", "Delivery checkpoints"],
    why: "It keeps the project structured and easier to manage.",
  },
  {
    id: "development",
    title: "Full-Stack Development",
    short: "Frontend, backend, database, APIs, admin — built in reviewable increments.",
    what: "We build frontend, backend, database, APIs, admin systems, and required integrations.",
    receives: [
      "Working product increments",
      "Codebase",
      "API functionality",
      "Admin tools",
      "Review builds",
    ],
    why: "The product becomes real through structured development and regular progress reviews.",
  },
  {
    id: "systems-integration",
    title: "Systems Integration",
    short: "Connect the product to the tools and workflows that keep the business moving.",
    what: "We connect the product to approved business tools and define reliable handoffs between systems.",
    receives: [
      "Workflow mapping",
      "Integrations",
      "Integration rules",
      "Admin controls",
      "Testing flow",
    ],
    why: "Every integration should make daily work simpler and easier to trust.",
  },
  {
    id: "qa-deployment",
    title: "QA, Testing & Deployment",
    short: "Functionality, responsiveness, edge cases, then a controlled launch.",
    what: "We test functionality, responsiveness, user flows, integrations, edge cases, and deployment readiness.",
    receives: ["QA report", "Bug fixes", "Deployment setup", "Production launch"],
    why: "Testing reduces launch risk and improves product reliability.",
  },
  {
    id: "support",
    title: "Maintenance, Scaling & Support",
    short: "The product keeps working, and keeps improving, after launch.",
    what: "We support the product after launch through improvements, monitoring, updates, and scaling support.",
    receives: [
      "Bug fixing",
      "Improvements",
      "Maintenance plan",
      "Performance support",
      "Feature expansion",
    ],
    why: "Software needs ongoing care to stay stable, secure, and useful.",
  },
];

export const COLLABORATION_POINTS = [
  "Discovery calls",
  "Requirement documentation",
  "Sprint planning",
  "Progress updates",
  "Review meetings",
  "QA feedback",
  "Launch support",
];

/* ══════════════════════════════════════════════════════════════════════════
   ENGAGEMENT MODELS (brief, prompt 14)
   No fixed prices — the brief forbids misleading price tables.
   ══════════════════════════════════════════════════════════════════════════ */

export type EngagementModel = {
  slug: string;
  name: string;
  bestFor: string;
  /** The situation that points here, used in the chooser. */
  trigger: string;
  included: string[];
  timeline: string;
  pricing: string;
  cta: { label: string; href: string };
};

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    slug: "mvp-sprint",
    name: "MVP Sprint",
    bestFor: "Founders or teams who want to validate and launch a focused MVP.",
    trigger: "Have a new idea?",
    included: [
      "Discovery",
      "Feature planning",
      "UI/UX design",
      "Core product development",
      "Admin panel",
      "Basic integrations",
      "QA",
      "Launch support",
    ],
    timeline: "4 to 10 weeks depending on scope.",
    pricing: "Custom quote after discovery.",
    cta: { label: "Plan an MVP", href: "/contact?model=mvp-sprint" },
  },
  {
    slug: "custom-product-build",
    name: "Custom Product Build",
    bestFor:
      "Businesses building a full web app, mobile app, SaaS platform, or custom system.",
    trigger: "Need a complete platform?",
    included: [
      "Product strategy",
      "UI/UX",
      "Frontend",
      "Backend",
      "Database",
      "APIs",
      "Integrations",
      "QA",
      "Deployment",
    ],
    timeline: "8 to 20+ weeks depending on complexity.",
    pricing: "Custom quote based on scope.",
    cta: { label: "Discuss a Product Build", href: "/contact?model=custom-product-build" },
  },
  {
    slug: "ai-automation-sprint",
    name: "AI Automation Sprint",
    bestFor: "Companies that want to automate one workflow or test an AI use case.",
    trigger: "Want to automate one workflow?",
    included: [
      "Workflow discovery",
      "Automation planning",
      "AI prototype",
      "Integration setup",
      "Admin / review flow",
      "Testing",
      "Documentation",
    ],
    timeline: "2 to 6 weeks.",
    pricing: "Custom quote based on workflow complexity.",
    cta: { label: "Explore AI Automation", href: "/ai-automation" },
  },
  {
    slug: "dedicated-product-team",
    name: "Dedicated Product Team",
    bestFor: "Companies needing ongoing engineering capacity.",
    trigger: "Need long-term development capacity?",
    included: [
      "Developer / team allocation",
      "Project manager or tech lead",
      "Sprint planning",
      "Development",
      "QA",
      "Weekly reporting",
      "Long-term roadmap support",
    ],
    timeline: "Monthly engagement.",
    pricing: "Monthly retainer or dedicated team quote.",
    cta: { label: "Build a Dedicated Team", href: "/contact?model=dedicated-product-team" },
  },
  {
    slug: "maintenance-support",
    name: "Maintenance & Support",
    bestFor: "Live products that need updates, bug fixes, scaling, and technical support.",
    trigger: "Already have a live product?",
    included: [
      "Bug fixes",
      "Monitoring",
      "Updates",
      "Performance improvements",
      "Security patches",
      "Small feature improvements",
      "DevOps support",
    ],
    timeline: "Monthly support plan.",
    pricing: "Monthly retainer based on product needs.",
    cta: { label: "Maintain My Product", href: "/contact?model=maintenance-support" },
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   FAQ (brief, prompt 16)
   ══════════════════════════════════════════════════════════════════════════ */

export type Faq = { q: string; a: string };
export type FaqCategory = { id: string; label: string; items: Faq[] };

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "services",
    label: "Services",
    items: [
      {
        q: "What type of projects does Barakode work on?",
        a: "Barakode works on MVPs, SaaS platforms, web apps, mobile apps, internal business systems, AI automation workflows, dashboards, admin panels, and product maintenance.",
      },
      {
        q: "Do you work with startups?",
        a: "Yes. We help startup founders plan, design, build, and launch focused MVPs and SaaS products.",
      },
      {
        q: "Can you help with an existing product?",
        a: "Yes. We can review, improve, redesign, maintain, or extend existing software products depending on the current codebase and business goals.",
      },
      {
        q: "Do you build mobile apps?",
        a: "Yes. We build mobile applications using modern cross-platform technologies where suitable.",
      },
    ],
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    items: [
      {
        q: "Do you offer AI automation?",
        a: "Yes. We build practical AI workflows such as AI chatbots, RAG assistants, document processing, CRM automation, support automation, and reporting automation.",
      },
      {
        q: "Can AI automate our whole business?",
        a: "Not always. Some decisions should stay human-led. We focus on workflows where AI can create practical value with proper controls and human oversight.",
      },
      {
        q: "Can you connect AI with our existing tools?",
        a: "Yes. We can connect AI workflows with CRMs, databases, documents, dashboards, APIs, and other business tools where integration is available.",
      },
      {
        q: "Can AI read documents and extract data?",
        a: "Yes. Invoices, contracts, forms, reports, résumés, and PDFs are common cases. Scanned documents work where OCR quality is good enough to trust — we check that before committing to it.",
      },
      {
        q: "How do you keep AI safe and reliable?",
        a: "Clear limits on what the workflow is allowed to decide, human review on anything consequential, permission controls, audit logs, and a defined fallback when the model is not confident.",
      },
    ],
  },
  {
    id: "process",
    label: "Process",
    items: [
      {
        q: "How does the project process work?",
        a: "We usually start with discovery, then move into planning, UX design, development, testing, deployment, and support.",
      },
      {
        q: "Do you create designs before development?",
        a: "Yes. For most products, we recommend UX planning and UI design before development to reduce confusion and rework.",
      },
      {
        q: "How long does it take to build an MVP?",
        a: "An MVP Sprint typically runs 4 to 10 weeks depending on scope. Larger platforms run 8 to 20+ weeks. We give you a specific timeline after discovery, not before.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Engagement",
    items: [
      {
        q: "How do pricing and timelines work?",
        a: "Pricing and timelines depend on scope, features, integrations, platforms, and complexity. We provide a custom quote after understanding the project.",
      },
      {
        q: "Do you offer fixed-price projects?",
        a: "Yes, where the scope is clear. For ongoing work or evolving products, a retainer or dedicated team model may be better.",
      },
      {
        q: "Can we start with a smaller scope?",
        a: "Yes, and often you should. An MVP Sprint or a single AI Automation Sprint is a normal way to start before committing to a larger build.",
      },
      {
        q: "Do you offer monthly retainers?",
        a: "Yes. Maintenance & Support and Dedicated Product Team both run as monthly engagements.",
      },
    ],
  },
  {
    id: "communication",
    label: "Communication",
    items: [
      {
        q: "How do you manage communication?",
        a: "We work through structured updates, planned meetings, shared documentation, and clear delivery checkpoints.",
      },
      {
        q: "Do you work with international clients?",
        a: "Yes. Barakode is based in Pakistan and works with clients internationally through remote collaboration.",
      },
    ],
  },
  {
    id: "ownership",
    label: "Ownership & Support",
    items: [
      {
        q: "Will we own the code?",
        a: "Ownership terms should be agreed before the project starts. In most custom development projects, clients receive ownership based on the agreed contract.",
      },
      {
        q: "Can you sign an NDA?",
        a: "Yes, where required.",
      },
      {
        q: "Do you provide support after launch?",
        a: "Yes. Barakode offers maintenance and support for products that need ongoing improvements, bug fixes, monitoring, and scaling.",
      },
      {
        q: "Can you maintain a product built by another team?",
        a: "Yes. We start with a review of the existing codebase and infrastructure, then agree a maintenance scope from what we find.",
      },
    ],
  },
];

/** The eight-question preview the brief specifies for the homepage. */
export const FAQ_PREVIEW: Faq[] = [
  FAQ_CATEGORIES[0].items[0],
  FAQ_CATEGORIES[0].items[1],
  FAQ_CATEGORIES[0].items[2],
  FAQ_CATEGORIES[1].items[0],
  FAQ_CATEGORIES[4].items[0],
  FAQ_CATEGORIES[5].items[0],
  FAQ_CATEGORIES[5].items[1],
  FAQ_CATEGORIES[3].items[0],
];

export const ALL_FAQS: Faq[] = FAQ_CATEGORIES.flatMap((c) => c.items);

/* ══════════════════════════════════════════════════════════════════════════
   TEAM — three real people, three real photographs.
   From the supplied kit. Burhan's role follows the written record
   (Business Development); the kit's "#thepixel" tag was a leftover from an
   earlier designer listing and is dropped.
   ══════════════════════════════════════════════════════════════════════════ */

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  shortBio: string;
  bio: string;
  quote: string;
  expertise: string[];
  linkedin: string | null;
};

export const TEAM: TeamMember[] = [
  {
    slug: "safdar-iqbal",
    name: "Muhammad Safdar Iqbal",
    role: "Chief Executive Officer & Founder",
    photo: "/images/team/safdar-portrait.webp",
    shortBio:
      "Sets the company's direction, owns its most important client relationships, and protects the standard every engagement is held to.",
    bio: "Safdar founded Barakode on a single conviction: that world-class software shouldn't be bound by geography. As CEO he sets the company's direction, owns its most important client relationships, and protects the standard every engagement is held to. He works where strategy meets delivery — shaping the roadmap, building the team, and making sure ambitious ideas leave the building as reliable, scalable products.",
    quote: "We don't ship features. We ship outcomes our clients can build a business on.",
    expertise: [
      "Product Strategy",
      "Business Leadership",
      "Client Partnerships",
      "Team Building",
      "Vision & Roadmapping",
      "Go-to-Market",
    ],
    linkedin: "https://www.linkedin.com/in/muhammad-safdar-iqbal/",
  },
  {
    slug: "humayon-abdullah",
    name: "Humayon Abdullah",
    role: "Full-Stack Developer",
    photo: "/images/team/humayon.webp",
    shortBio:
      "Architects and builds full-cycle web and mobile products end to end — frontend, services, database, and deployment.",
    bio: "Humayon is the engine room. He architects and builds full-cycle web and mobile products end to end — clean React and Next.js on the front, robust Node.js services behind, and the database and deployment work that holds it all together. He sweats the architecture before the first feature ships, writes code meant to be read and maintained years from now, and ships reviewable increments every sprint.",
    quote:
      "Clean architecture isn't a luxury — it's the difference between software that scales and software that stalls.",
    expertise: [
      "React & Next.js",
      "Node.js & Express",
      "System Architecture",
      "Databases (SQL / NoSQL)",
      "REST & API Design",
      "DevOps & Deployment",
    ],
    linkedin: "https://www.linkedin.com/in/humayun-abdullah-15a2993b2/",
  },
  {
    slug: "burhan-tariq",
    name: "Muhammad Burhan Tariq",
    role: "Business Development Manager",
    photo: "/images/team/burhan.webp",
    shortBio:
      "Where new partnerships begin — translating what a client is trying to achieve into a scope engineering can run with.",
    bio: "Burhan is where new partnerships begin. As Business Development Manager he listens first — understanding what a client is really trying to achieve — then translates it into a scope the engineering team can run with. He owns the relationship from first conversation through delivery, keeps communication honest and timelines clear, and is relentless about turning a single project into a long-term partnership.",
    quote:
      "Great delivery starts with truly understanding the client — everything else is execution.",
    expertise: [
      "Business Development",
      "Client Relations",
      "Strategic Partnerships",
      "Market Strategy",
      "Communication",
      "Account Management",
    ],
    linkedin: "https://www.linkedin.com/in/muhammadburhantariq/",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   ABOUT (brief, prompt 12)
   ══════════════════════════════════════════════════════════════════════════ */

export const BELIEFS = [
  {
    title: "Clear requirements create better products",
    body: "A strong project starts with understanding the business problem, the users, the workflows, and the expected outcome.",
  },
  {
    title: "People stay close to the work",
    body: "The people responsible for the work should understand the problem, make informed decisions, and stay accountable for the outcome.",
  },
  {
    title: "Good software needs structure",
    body: "Architecture, design, development, testing, deployment, and maintenance all matter.",
  },
  {
    title: "Communication is part of delivery",
    body: "Clients should know what is happening, what is next, and what decisions are needed.",
  },
  {
    title: "Long-term thinking matters",
    body: "Products should be built in a way that supports future improvements, integrations, and scaling.",
  },
];

export const HOW_WE_WORK = [
  "Understand the business goal",
  "Map the product or workflow",
  "Plan features and architecture",
  "Design the user experience",
  "Build in structured sprints",
  "Test before launch",
  "Support and improve after delivery",
];

/* ══════════════════════════════════════════════════════════════════════════
   WHY BARAKODE (brief, prompt 2)
   ══════════════════════════════════════════════════════════════════════════ */

export const VALUE_PROPS = [
  {
    title: "Product-first approach",
    body: "We start with the business problem, user journey, and product goal before writing code.",
  },
  {
    title: "Practical AI implementation",
    body: "We focus on AI workflows that improve real operations, not demos that look good but fail in practice.",
  },
  {
    title: "Full-stack delivery",
    body: "We support the full product lifecycle from planning and design to backend, frontend, mobile, cloud, QA, and maintenance.",
  },
  {
    title: "Clear communication",
    body: "You get structured updates, transparent scope, and a team that understands business priorities.",
  },
  {
    title: "Built for scale",
    body: "We design systems with architecture, maintainability, performance, and future growth in mind.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   PROBLEMS (brief, prompt 2)
   ══════════════════════════════════════════════════════════════════════════ */

export const PROBLEM_CARDS = [
  "Product idea without a clear technical plan",
  "Manual operations slowing the team down",
  "Spreadsheets and tools that do not connect",
  "Existing software that needs rebuilding or scaling",
  "AI ideas that need practical implementation",
  "Poor UX causing low adoption",
];

/* ══════════════════════════════════════════════════════════════════════════
   TRUST CARDS — project categories, not invented statistics
   ══════════════════════════════════════════════════════════════════════════ */

export const TRUST_CATEGORIES = [
  { label: "SaaS & MVP platforms", href: "/services/mvp-saas-product-development" },
  { label: "Web & mobile apps", href: "/services/custom-web-mobile-app-development" },
  { label: "AI workflows", href: "/ai-automation" },
  { label: "Internal systems", href: "/services/internal-business-systems" },
  { label: "Cloud & maintenance", href: "/services/cloud-devops-maintenance" },
];

/* ══════════════════════════════════════════════════════════════════════════
   INSIGHTS — published articles and the brief's topic pipeline
   ══════════════════════════════════════════════════════════════════════════ */

export type ArticleBlock =
  | { kind: "prose"; heading: string; paragraphs: string[]; checklist?: string[] }
  | { kind: "figure"; src: string; alt: string; caption?: string; portrait?: boolean };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  displayDate: string;
  readTime: string;
  author: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  body: ArticleBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: "agentic-ai-workflow-automation-business-operations",
    title: "Agentic AI and Workflow Automation for Smarter Business Operations",
    excerpt: "When work gets stuck between systems, a well designed AI workflow can help your team move it forward with clear limits and human oversight.",
    category: "AI Automation",
    date: "2026-10-01",
    displayDate: "October 2026",
    readTime: "7 min read",
    author: "Barakode Team",
    cover: "/images/blog/agentic-ai-workflow-cover.webp",
    coverAlt: "Operations team reviewing a connected workflow and its approval steps",
    tags: ["Agentic AI", "Workflow Automation", "Business Operations"],
    body: [
      {
        kind: "prose",
        heading: "The work between the work",
        paragraphs: [
          "Your team starts the morning with a full inbox. A customer needs an update. An invoice is waiting for approval. A promising sales enquiry has still not reached the right person.",
          "Everyone is busy. Yet much of the day disappears into moving information between systems and chasing the next step.",
          "Agentic AI and workflow automation offer a practical way to reduce that friction. Together they can connect routine tasks with the context needed to move work forward.",
        ],
      },
      {
        kind: "prose",
        heading: "What is agentic AI?",
        paragraphs: [
          "Agentic AI uses artificial intelligence agents to pursue a defined goal. These agents can interpret information and plan actions. With access to approved tools, they can carry out tasks and adjust their approach based on the results.",
          "Workflow automation coordinates how work moves through a process. Traditional automation usually follows predefined rules. An agentic workflow adds the ability to respond to changing information within defined boundaries.",
          "Think about a customer asking for an order update. A connected AI agent could check the order record, identify missing information, and prepare a response or route the issue to the right employee. Its scope depends on the systems it can access and the actions it has permission to take.",
        ],
      },
      {
        kind: "figure",
        src: "/images/blog/agentic-ai-sales-workflow.webp",
        alt: "Team reviewing a customer enquiry before handing it to sales",
        caption: "A useful workflow brings context to the person making the next decision.",
      },
      {
        kind: "prose",
        heading: "How AI workflow automation works",
        paragraphs: [
          "An effective workflow begins with a clear trigger and a specific outcome. For a sales enquiry, the trigger might be a website form submission. The desired outcome might be a complete CRM record and a qualified enquiry ready for the sales team.",
          "The workflow could read the request, identify the service required, check for an existing customer record, and prepare relevant questions. Once the necessary information is available, it could update the CRM and notify the assigned salesperson.",
          "If the request involves an unusual commitment or unclear pricing, the workflow should pause for human review. Each step has a purpose and a limit. Employees can see what happened and what still needs attention.",
        ],
      },
      {
        kind: "prose",
        heading: "Where AI agents can help",
        paragraphs: [
          "Customer support: a connected workflow can bring details from several messages together and retrieve relevant information from approved records. It can prepare an answer for review or handle a routine request within its permissions. Complex cases reach a specialist with a useful summary.",
          "Sales and CRM: incoming enquiries can be organised, matched to existing records, and prepared for follow up. Salespeople can spend more time understanding customers instead of copying details between tools.",
          "Invoice and document processing: an AI assisted workflow can extract invoice details and compare them with a purchase order. Missing information or a mismatch can trigger review. Payment approval remains with an authorised person.",
          "Internal operations: onboarding and service requests often involve several departments. Automation can collect required information, coordinate tasks across connected systems, and make delays visible to managers.",
        ],
      },
      {
        kind: "figure",
        src: "/images/blog/agentic-ai-document-review.webp",
        alt: "Finance professional reviewing an invoice against a purchase order",
        caption: "Document checks can be automated while financial approval stays with a person.",
      },
      {
        kind: "prose",
        heading: "Start with a process you can measure",
        paragraphs: [
          "Choose one recurring process that creates visible frustration. Enquiries may wait too long for a response. Employees may spend hours preparing the same report. Approvals may stall because nobody knows who should act next.",
          "Document the current process before introducing AI. Record how long it takes and how often someone needs to correct the result. Then run a limited pilot. Compare completion time and accuracy, and review the cost of operating the workflow alongside the time it saves.",
          "A useful automation project should produce an improvement your team can recognise and measure.",
        ],
      },
      {
        kind: "figure",
        src: "/images/blog/agentic-ai-pilot-measurement.webp",
        alt: "Operations team assessing workflow performance together",
        caption: "A pilot gives the team a clear way to compare effort, accuracy, and outcomes.",
      },
      {
        kind: "prose",
        heading: "Keep people in control",
        paragraphs: [
          "Reliable enterprise workflow automation needs clear permissions and accessible records. Decide what information the agent can read, what it can do independently, and which actions require approval. Give employees a simple way to review decisions and correct mistakes.",
          "Plan for missing data and unavailable systems, too. When the workflow cannot proceed safely, it should explain the problem and hand the task to a person. These controls help teams trust the process as it becomes part of daily work.",
        ],
      },
      {
        kind: "prose",
        heading: "Build around the work that matters",
        paragraphs: [
          "Agentic AI becomes valuable when it addresses a real operational problem. Start with one process that consumes too much attention, connect the necessary systems, define a clear outcome, and test the workflow with the people who will use it.",
          "The goal is straightforward: give your team more time for customers and decisions that deserve their attention. Identify one repetitive process in your business and assess where a connected AI agent could make the next step easier.",
        ],
      },
    ],
  },
  {
    slug: "why-every-project-needs-a-technical-roadmap",
    title: "Why Every Project Needs a Technical Roadmap",
    excerpt:
      "More than just writing code — it's engineering a system. A technical roadmap is your project's blueprint, ensuring every decision leads to a scalable and maintainable product.",
    category: "Product Engineering",
    date: "2025-03-01",
    displayDate: "March 2025",
    readTime: "5 min read",
    author: "Barakode Team",
    cover: "/images/blog/technical-roadmap.webp",
    coverAlt: "Technical roadmap planning session",
    tags: ["Product Engineering", "Architecture"],
    body: [
      {
        kind: "prose",
        heading: "Architecture before code",
        paragraphs: [
          "When multiple developers, designers, and stakeholders collaborate on a software project, chaos becomes the biggest risk. A technical roadmap is the guardrail system — ensuring that architecture decisions, technology choices, and delivery milestones are defined before a single line of code is written.",
          "For a fintech client, we mapped out every technical layer: from database schema and API architecture to deployment pipeline and security protocols. The roadmap helped the entire team execute cohesively across frontend, backend, and DevOps — without constant back-and-forth or costly mid-project pivots.",
        ],
        checklist: [
          "Define project scope and technical requirements upfront",
          "Agree on technology stack and architecture approach",
          "Confirm delivery milestones and sprint structure",
        ],
      },
      {
        kind: "figure",
        src: "/images/blog/roadmap-tc-billboard.webp",
        alt: "Illuminated street billboard reading Terms & Conditions Apply at night",
        portrait: true,
      },
      {
        kind: "prose",
        heading: "Stack selection and scalability",
        paragraphs: [
          "Choosing a technology stack is more than preference — it determines performance, scalability, and long-term maintainability. Defining the right stack means setting standards for frontend frameworks, backend services, databases, and cloud infrastructure so the system can grow predictably without expensive rewrites.",
          "We built a comprehensive stack evaluation process using business requirements, expected traffic load, and team expertise as core inputs. With clear decisions on React.js, Node.js, AWS, and MySQL documented upfront, the guide streamlined collaboration between our engineers and the client's internal team — reducing friction and accelerating delivery at every sprint.",
        ],
      },
      {
        kind: "figure",
        src: "/images/blog/roadmap-schema.webp",
        alt: "Database schema and entity-relationship diagram mapping the platform architecture",
        caption: "Mapping the data model and API architecture before development begins",
      },
      {
        kind: "prose",
        heading: "Technical documentation",
        paragraphs: [
          "The heart of any successful software project lies in its documentation — how clearly and accessibly it explains the architecture, APIs, and deployment process. Good documentation does not just record decisions, it empowers future developers to build on the system confidently without breaking what already works.",
          "Barakode delivers living technical documentation with every project — including API references, database schema diagrams, environment setup guides, and deployment runbooks. This empowers clients to onboard new developers faster, scale their teams independently, and maintain their software long after launch without depending on us for every change.",
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);

export const INSIGHT_CATEGORIES = [
  "Product Engineering",
  "SaaS & MVP Development",
  "AI Automation",
  "Internal Systems",
  "Startup Technology",
  "UX / Product Design",
  "Cloud & Maintenance",
  "Case Studies",
];

/** The brief's editorial pipeline — shown as a genuine roadmap, not fake posts. */
export const INSIGHT_PIPELINE: { title: string; category: string }[] = [
  { title: "How to plan an MVP before hiring developers", category: "SaaS & MVP Development" },
  { title: "MVP vs full product: what should startups build first?", category: "SaaS & MVP Development" },
  { title: "What is a RAG chatbot and when should a business use one?", category: "AI Automation" },
  { title: "How to turn spreadsheets into an internal business system", category: "Internal Systems" },
  { title: "What makes a SaaS product scalable?", category: "Product Engineering" },
  { title: "Web app vs mobile app: which should your business build first?", category: "Startup Technology" },
  { title: "How to choose the right tech stack for your MVP", category: "Startup Technology" },
  { title: "Why software projects fail before development starts", category: "Product Engineering" },
  { title: "How to prepare a software project brief", category: "Product Engineering" },
  { title: "What to include in a SaaS admin dashboard", category: "UX / Product Design" },
  { title: "How AI can help with customer support automation", category: "AI Automation" },
  { title: "When to rebuild an existing product instead of patching it", category: "Product Engineering" },
  { title: "How to estimate timeline for a custom software project", category: "Product Engineering" },
  { title: "Product discovery checklist for founders", category: "SaaS & MVP Development" },
  { title: "What is product engineering?", category: "Product Engineering" },
  { title: "How to use AI responsibly in business workflows", category: "AI Automation" },
  { title: "Benefits of custom internal systems for growing teams", category: "Internal Systems" },
  { title: "How to maintain a SaaS product after launch", category: "Cloud & Maintenance" },
  { title: "How agencies can work with product engineering partners", category: "Startup Technology" },
];
