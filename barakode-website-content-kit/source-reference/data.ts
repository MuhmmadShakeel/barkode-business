/**
 * Centralised content extracted from site_dna/*.
 * Single source of truth for every page.
 *
 * ASSET WIRING MAP (added when real assets were dropped into /public/images):
 *   /images/logo/logo-3d.png                    — Hero, InnerPageHero, CTAContact bg, Team bg, not-found
 *   /images/projects/{gman|beyut-libya|openinterview}.{png|jpg}
 *                                              — Projects[].image
 *   /images/team/{safdar|humayon|burhan}.png    — TEAM[].image
 *   /images/about/about-{1..3}.jpg              — ABOUT_PHOTOS (about-4 removed, kept at 3)
 *   /images/process/{discovery,development,qa-delivery,support-growth}.jpg
 *                                              — PROCESS_STEPS[0..3].image (Gemini robots, watermark stripped, all distinct)
 *   /images/contact/roadmap.jpg                 — CTAContact 3D visual (Gemini robot, watermark stripped)
 *   /images/testimonials/<slug>.svg             — TESTIMONIALS[].avatar
 *   /images/blog/technical-roadmap.jpeg         — BLOG_POSTS[0].cover
 *   /images/stats/city-bg.jpeg                  — Stats section background photo
 *   /images/decor/hero-bg.svg                   — Hero background pattern overlay
 *   /images/decor/world-map.svg                 — (optional) contact / pricing accent
 *   /images/decor/circle-glow.png               — (optional) hero/CTA glow circle
 */

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blogs" },
] as const;

export const FOOTER_COL_MENU = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blogs" },
];

export const FOOTER_COL_LEGAL = [
  { label: "Pricing", href: "/pricing" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact Us", href: "/contact" },
];

// Official Barakode social profiles — single source of truth for every
// social icon on the site. `icon` keys map to components in each consumer.
export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: "instagram",
    href: "https://www.instagram.com/barakodetechnologies?igsh=MWkya3dqZTJjYmhkdg==",
  },
  {
    label: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/company/barakode-technologies/",
  },
  {
    label: "YouTube",
    icon: "youtube",
    href: "https://youtube.com/@barakodetechnologies?si=rdoUX3csL5xMWWXH",
  },
  {
    label: "Facebook",
    icon: "facebook",
    href: "https://www.facebook.com/profile.php?id=61581226034652",
  },
  { label: "X", icon: "x", href: "https://x.com/barakode1?s=20" },
  {
    label: "WhatsApp",
    icon: "whatsapp",
    href: "https://api.whatsapp.com/send/?phone=923322060667&text&type=phone_number&app_absent=0",
  },
] as const;

export const LOGO_3D = "/images/logo/logo-3d.png";
/**
 * The two halves of the 3D chevron mark as SEPARATE images. Drop the
 * proper half PNGs at these paths — the marquee animates them
 * independently for the entrance + split + wordmark-flow sequence.
 *
 *   chevron-left.png  → the LEFT half of the diamond (points right, ">")
 *   chevron-right.png → the RIGHT half of the diamond (points left, "<")
 */
export const LOGO_CHEVRON_LEFT = "/images/logo/chevron-left.png";
export const LOGO_CHEVRON_RIGHT = "/images/logo/chevron-right.png";
export const HERO_BG_PATTERN = "/images/decor/hero-bg.svg";
export const STATS_BG = "/images/stats/city-bg.jpeg";

export const CLIENT_LOGOS = [
  "Kintsugi",
  "CoreOS",
  "Luminary",
  "45 Degrees°",
  "Codecraft_",
  "Frequencii",
  "Fraencii",
  "Northwind",
  "Helix",
  "Vantage",
];

// ── Services we offer (hire-a-specialist model) ──
export type ServicePlan = {
  name: string;
  label: string;
  ideal: string;
  hours?: string;
  features: string[];
  hourly: string; // "$25" or "Custom"
  monthly: string; // "$2,000" or "Quote"
};

export type Service = {
  slug: string;
  n: string; // "01"
  title: string;
  tagline: string; // short line under the title
  tags: string; // key tech, shown on the row
  overview: string;
  technologies: { languages: string[]; frameworks: string[]; platforms: string[] };
  icon: string;
  domain: "Development" | "Design" | "Testing";
  hourly: string;
  starterMonthly: string;
  proMonthly: string;
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    n: "01",
    title: "Web Development",
    tagline:
      "Build modern, responsive websites and web applications that captivate audiences and drive results.",
    tags: "React, Next.js, Node.js, TypeScript, AWS",
    overview:
      "Our web development services encompass the full spectrum of digital solutions, from sleek landing pages to complex web applications. We combine cutting-edge technologies with user-centered design principles to create websites that not only look stunning but also perform exceptionally. Our team specializes in responsive design, e-commerce solutions, content management systems, and progressive web apps that deliver seamless experiences across all devices and browsers.",
    technologies: {
      languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python", "PHP"],
      frameworks: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "Express"],
      platforms: ["AWS", "Vercel", "Netlify", "Firebase", "Docker", "GitHub Actions"],
    },
    icon: "Code2",
    domain: "Development",
    hourly: "$25",
    starterMonthly: "$2,000",
    proMonthly: "$4,000",
  },
  {
    slug: "mobile-development",
    n: "02",
    title: "Mobile Development",
    tagline:
      "Create powerful, intuitive mobile applications that engage users and drive business growth.",
    tags: "React Native, Flutter, Swift, Kotlin",
    overview:
      "Our mobile development services deliver high-performance, cross-platform applications that provide seamless user experiences across all devices. We specialize in building native and hybrid mobile solutions for iOS and Android platforms, focusing on intuitive design, robust functionality, and scalable architecture. From concept to deployment, we ensure your mobile application stands out in the competitive app marketplace while meeting your business objectives.",
    technologies: {
      languages: ["Swift", "Kotlin", "Java", "Objective-C", "JavaScript", "TypeScript"],
      frameworks: ["React Native", "Flutter", "Xamarin", "Ionic", "NativeScript", "Expo"],
      platforms: ["App Store", "Google Play", "Firebase", "AWS Mobile", "Docker", "Fastlane"],
    },
    icon: "Smartphone",
    domain: "Development",
    hourly: "$20",
    starterMonthly: "$1,600",
    proMonthly: "$3,200",
  },
  {
    slug: "ui-ux-design",
    n: "03",
    title: "UI/UX Design",
    tagline:
      "Create intuitive, engaging interfaces that delight users and drive conversions.",
    tags: "Figma, Adobe XD, Design Systems, Prototyping",
    overview:
      "Our UI/UX design services focus on creating exceptional digital experiences that combine aesthetic appeal with functional excellence. We employ user-centered design principles to craft interfaces that are not only visually stunning but also intuitive and accessible. From wireframing and prototyping to high-fidelity designs and design systems, our team ensures every touchpoint reflects your brand identity while optimizing user engagement and satisfaction. We transform complex ideas into simple, elegant solutions that resonate with your target audience.",
    technologies: {
      languages: ["HTML", "CSS", "JavaScript", "TypeScript", "JSON", "Markdown"],
      frameworks: ["Figma", "Sketch", "Adobe XD", "InVision", "Zeplin", "Framer"],
      platforms: ["Dribbble", "Behance", "Abstract", "Zeroheight", "Storybook", "Notion"],
    },
    icon: "Palette",
    domain: "Design",
    hourly: "$15",
    starterMonthly: "$1,200",
    proMonthly: "$2,400",
  },
  {
    slug: "ai-ml-development",
    n: "04",
    title: "AI/ML Development",
    tagline:
      "Transform your business with intelligent solutions powered by artificial intelligence and machine learning.",
    tags: "Python, TensorFlow, PyTorch, NLP, Computer Vision",
    overview:
      "Our AI/ML development services help businesses harness the power of artificial intelligence to solve complex problems, automate processes, and gain valuable insights from data. We specialize in creating custom machine learning models, natural language processing systems, computer vision applications, and predictive analytics solutions that drive innovation and competitive advantage. From conceptualization to deployment, our team of experts ensures that your AI initiatives deliver measurable business value.",
    technologies: {
      languages: ["Python", "R", "Julia", "Scala", "Java", "C++"],
      frameworks: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenCV", "NLTK"],
      platforms: ["Google AI Platform", "AWS SageMaker", "Azure ML", "Hugging Face", "Docker", "Kubernetes"],
    },
    icon: "BrainCircuit",
    domain: "Development",
    hourly: "$25",
    starterMonthly: "$2,000",
    proMonthly: "$4,000",
  },
  {
    slug: "cloud-development",
    n: "05",
    title: "Cloud Development",
    tagline:
      "Scale your infrastructure with secure, reliable, and cost-effective cloud solutions.",
    tags: "AWS, Azure, Docker, Kubernetes, Terraform",
    overview:
      "Our cloud development services help businesses leverage the power of cloud computing to build scalable, secure, and cost-effective solutions. We specialize in cloud migration, infrastructure as code, serverless architectures, and cloud-native application development. Our team ensures seamless deployment, monitoring, and optimization of your cloud infrastructure across major platforms like AWS, Azure, and Google Cloud, enabling you to focus on innovation while we handle the complexity.",
    technologies: {
      languages: ["Python", "Go", "Java", "Node.js", "Terraform", "YAML"],
      frameworks: ["Docker", "Kubernetes", "Serverless Framework", "Terraform", "Ansible", "Pulumi"],
      platforms: ["AWS", "Azure", "Google Cloud", "Heroku", "DigitalOcean", "Cloudflare"],
    },
    icon: "Cloud",
    domain: "Development",
    hourly: "$20",
    starterMonthly: "$1,600",
    proMonthly: "$3,200",
  },
  {
    slug: "qa-testing",
    n: "06",
    title: "QA & Testing",
    tagline:
      "Ensure flawless performance and reliability with our comprehensive testing solutions.",
    tags: "Selenium, Cypress, Jest, Automation, Manual Testing",
    overview:
      "Our QA and testing services are designed to ensure your software meets the highest standards of quality, performance, and reliability. We provide end-to-end testing solutions including manual and automated testing, performance testing, security testing, and user acceptance testing. Our experienced QA engineers work closely with your development team to identify and resolve issues early in the development cycle, reducing costs and accelerating time-to-market. With a combination of industry best practices and cutting-edge tools, we help you deliver robust, bug-free applications that exceed user expectations.",
    technologies: {
      languages: ["Python", "Java", "JavaScript", "C#", "Ruby", "SQL"],
      frameworks: ["Selenium", "Cypress", "Jest", "TestCafe", "Postman", "Appium"],
      platforms: ["JIRA", "TestRail", "BrowserStack", "Sauce Labs", "Docker", "Jenkins"],
    },
    icon: "ShieldCheck",
    domain: "Testing",
    hourly: "$15",
    starterMonthly: "$1,200",
    proMonthly: "$2,400",
  },
];

/** Build the three pricing plans for a service from shared templates. */
export function servicePlans(s: Service): ServicePlan[] {
  const d = s.domain;
  const basic =
    d === "Design"
      ? "Design & basic prototyping"
      : d === "Testing"
        ? "Manual testing & basic automation"
        : "Development & basic maintenance";
  const advanced =
    d === "Design"
      ? "Advanced design & user research"
      : d === "Testing"
        ? "Advanced testing & test automation"
        : "Advanced development & architecture planning";
  const review = d === "Design" ? "design" : d === "Testing" ? "test" : "code";
  const specialist =
    d === "Design" ? "designer" : d === "Testing" ? "QA engineer" : "developer";
  return [
    {
      name: "Starter Plan",
      label: "Great for Small Projects",
      ideal: "Ideal for startups, MVPs, or short-term projects",
      hours: "20 Hours per week",
      features: [
        basic,
        "Standard communication (email & chat)",
        `Basic ${review} review & documentation`,
      ],
      hourly: s.hourly,
      monthly: s.starterMonthly,
    },
    {
      name: "Professional Plan",
      label: "For Growing Teams",
      ideal: "Ideal for scaling products or ongoing development",
      hours: "40 Hours per week",
      features: [
        advanced,
        "Priority communication channels (Slack, Zoom)",
        `Full ${review} review, testing & documentation`,
        "Dedicated project manager (optional)",
      ],
      hourly: s.hourly,
      monthly: s.proMonthly,
    },
    {
      name: "Enterprise Plan",
      label: "End-to-End Support",
      ideal: "Ideal for enterprise-scale or mission-critical projects",
      features: [
        `Dedicated ${specialist} / team`,
        "Unlimited consultation hours",
        "Custom architecture & infrastructure support",
        "Continuous integration / deployment setup",
        "Premium support & 24/7 availability",
        "Regular performance reviews and optimizations",
      ],
      hourly: "Custom",
      monthly: "Quote",
    },
  ];
}

/**
 * Long-form content for the service detail pages (`/services/[slug]`).
 * Keyed by the service slug. Clicking a service opens its page (not /contact).
 */
export type ServiceDetail = {
  /** What we deliver — overview paragraphs. */
  overview: string[];
  /** Capabilities / what's included. */
  deliverables: string[];
  /** How we work, step by step. */
  process: { title: string; description: string }[];
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "full-stack-development": {
    overview: [
      "We build scalable, high-performance web applications powered by clean architecture, modern frameworks, and enterprise-grade engineering — from greenfield products to full legacy modernization.",
      "Our full-stack teams own every layer of the delivery: the data model, the APIs, the frontend, and the deployment pipeline — shipping reviewable increments every sprint so you always see progress.",
    ],
    deliverables: [
      "Responsive web apps in React.js / Next.js",
      "Typed or RESTful API architecture",
      "Database design, migration & integration",
      "Authentication & role-based access control",
      "CI/CD pipelines and cloud deployment",
      "Full source code & IP transfer on delivery",
    ],
    process: [
      { title: "Discovery", description: "We map requirements and turn them into a clear technical specification before any code is written." },
      { title: "Architecture", description: "We lock the stack, define the data model and API contracts, and agree on milestones." },
      { title: "Development", description: "Sprint-based engineering with weekly demos and reviewable increments." },
      { title: "QA & Launch", description: "Automated and manual QA across browsers and devices, then a structured, low-risk launch." },
    ],
  },
  "cloud-devops": {
    overview: [
      "We architect and manage your entire cloud infrastructure — from CI/CD pipelines to AWS environments — ensuring maximum uptime, bulletproof security, and seamless scalability across every layer of your stack.",
      "Whether you're migrating off legacy servers or scaling an existing platform, we make your infrastructure reproducible, observable, and resilient.",
    ],
    deliverables: [
      "Cloud architecture on AWS, GCP or Azure",
      "CI/CD pipelines & automated releases",
      "Infrastructure as Code (reproducible environments)",
      "Monitoring, logging & alerting",
      "Security hardening & access management",
      "Legacy modernization & zero-downtime migration",
    ],
    process: [
      { title: "Infrastructure Audit", description: "We assess your current stack, costs, bottlenecks and risks." },
      { title: "Architecture Design", description: "We design a scalable, secure cloud topology mapped to your workloads." },
      { title: "Implementation", description: "We build pipelines and provision environments as code." },
      { title: "Monitoring & Handover", description: "Dashboards, alerts and documentation so your team can operate confidently." },
    ],
  },
  "ui-ux-product-design": {
    overview: [
      "We define your product's experience — its flow, feel, and function — through research-driven design that turns first-time visitors into loyal users.",
      "From the first wireframe to a complete design system, every screen is built mobile-first and optimized for clarity, speed, and conversion.",
    ],
    deliverables: [
      "UX research, personas & user flows",
      "Wireframes & interactive prototypes in Figma",
      "High-fidelity UI design",
      "Reusable design system & components",
      "Mobile-first, responsive layouts",
      "Clean developer handoff with specs",
    ],
    process: [
      { title: "Research", description: "We study your users, market and goals to ground the design in real needs." },
      { title: "Wireframing", description: "We shape flows and low-fidelity prototypes to validate structure early." },
      { title: "Visual Design", description: "We craft the high-fidelity UI and systemize it into reusable components." },
      { title: "Handoff", description: "We deliver developer-ready specs and iterate on feedback." },
    ],
  },
};

export const getServiceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export const STATS = [
  { label: "HAPPY CLIENTS", target: 98, suffix: "+" },
  { label: "LINES OF CODE", target: 20, suffix: "M" },
  { label: "ON-TIME DELIVERY", target: 98, suffix: "%" },
] as const;

export const PROJECTS = [
  {
    slug: "gman-stitching-platform",
    category: "Development",
    title: "Gman Stitching Platform",
    year: "2023 — by Barakode",
    light: false,
    dominantColor: "#1a2330",
    image: "/images/projects/gman.png",
    summary:
      "A full-cycle tailoring and order-management platform for a stitching business, rebuilt from a failing legacy system into a fast, reliable product that handles orders, measurements, and customer records end to end.",
    stack: "Node.js, React, Prisma, Docker, MySQL",
    outcome:
      "Replaced a struggling PHP/Laravel codebase and delivered roughly a 70% improvement in response time, with a maintainable architecture the team can build on.",
  },
  {
    slug: "beyut-libya-real-estate-platform",
    category: "Development",
    title: "Beyut Libya — Real Estate Platform",
    year: "2025 — by Barakode",
    light: true,
    dominantColor: "#F0EDE8",
    image: "/images/projects/beyut-libya.jpg",
    summary:
      "A real-estate listing and management platform for the Libyan market — property search and filtering, rich listings, and tooling for agents to publish and manage inventory.",
    stack: "",
    outcome: "",
  },
  {
    slug: "openinterview-video-platform",
    category: "Development",
    title: "OpenInterview — Video Interview Platform",
    year: "2025 — by Barakode",
    light: false,
    dominantColor: "#2a2a2a",
    image: "/images/projects/openinterview.jpg",
    summary:
      "A video-interview platform that lets hiring teams record, review, and score candidate interviews asynchronously, streamlining screening for distributed teams.",
    stack: "",
    outcome: "",
  },
] as const;

/**
 * Rich, long-form case-study content for project detail pages
 * (`/projects/[slug]`). Keyed by project slug. A project without an entry
 * here falls back to the compact layout built from PROJECTS[].summary.
 * Fill an entry to give that project the full case-study treatment.
 */
export type ProjectDetail = {
  /** "PROJECT OVERVIEW → Technical Development" paragraphs. */
  overview: string[];
  /** Technology stack chips. */
  stack: string[];
  /** Wide showcase image shown between the overview and the role section. */
  detailImage?: string;
  detailImageAlt?: string;
  /** Additional showcase images (stacked full-width) — e.g. multiple screens. */
  gallery?: { src: string; alt: string; caption?: string }[];
  /** "Barakode's Role" paragraphs. */
  role: string[];
  /** Meta facts. */
  client: string;
  category: string;
  timeline: string;
  /** Optional live deployment URL. */
  liveUrl?: string;
};

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "gman-stitching-platform": {
    overview: [
      "Gman is a full-stack tailoring management platform built to replace a failing legacy system. The client's existing PHP/Laravel and Vue.js application was experiencing severe performance issues and had become impossible to maintain. Barakode delivered a complete technology modernization — rebuilding the entire stack with Node.js, React.js, and Docker deployment on VPS, resulting in a 70% improvement in application response time.",
      "The primary purpose of Gman was to eliminate the operational bottlenecks caused by an outdated, rigid system. The client needed a platform that could independently manage customers, orders, inventory, billing, and accounting — without requiring constant developer intervention for every business change. Barakode architected a modular, scalable solution that gave the business full control over its own data and workflows.",
      "Gman operates within the Tailoring and Fashion Retail industry, providing a comprehensive business management solution for growing stitching businesses managing multiple customers, orders, staff, and financial operations simultaneously.",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "React.js",
      "Prisma ORM",
      "Docker",
      "MySQL",
      "Ant Design",
      "Redux",
      "JWT",
    ],
    detailImage: "/images/projects/gman-detail.webp",
    detailImageAlt:
      "Gman manufacturing summary dashboard — order, inventory, and performance analytics",
    role: [
      "Barakode led the complete end-to-end development of the Gman platform — from initial system analysis and architecture planning through to deployment and client handover. Our team handled every layer of the stack, replacing a broken legacy system with a modern, scalable, and maintainable application that the client could independently operate and grow.",
      "We conducted a thorough analysis of the existing PHP/Laravel system to identify all pain points, performance bottlenecks, and missing functionality. Working closely with the client, we mapped every business process — customer profiles, order workflows, inventory tracking, and financial reporting — into a clear technical specification before writing a single line of code.",
      "The frontend was redesigned from scratch using React.js and the Ant Design framework, delivering a professional and consistent interface across all modules. Every screen was built mobile-first with responsive layouts, interactive reporting dashboards, and intuitive navigation — ensuring staff at every level could use the system without training overhead.",
      "The backend was rebuilt using Node.js and Express.js with a RESTful API architecture, Prisma ORM for type-safe database queries, and JWT authentication for secure role-based access control. The database was completely restructured with a normalized schema, referential integrity, and dynamic configuration capabilities. Docker containerization was implemented for consistent deployment across all environments.",
      "Throughout the project, Barakode maintained continuous communication with the client — providing weekly progress updates, live staging previews, and hands-on walkthroughs of each completed module. Feedback was incorporated through structured sprint reviews, ensuring the final product aligned precisely with the client's operational needs and business goals.",
      "Gman Stitching Platform is fully deployed and live on the client's VPS infrastructure. The system is actively used across customer management, order processing, inventory, billing, and accounting operations. Post-launch performance metrics show a 70% reduction in response times, and the client now independently manages all business configurations without developer assistance. Barakode continues to provide ongoing support and feature enhancements as the business scales.",
    ],
    client:
      "Gman is a growing tailoring business managing customer measurements, fabric inventory, order tracking, and financial operations across multiple locations.",
    category:
      "Full-stack business management platform combining order management, customer profiles, accounting module, and Docker-based VPS deployment.",
    timeline: "January 2023 – March 2023",
    liveUrl: "https://gman.barakodetechnologies.com/",
  },

  "beyut-libya-real-estate-platform": {
    overview: [
      "Beyut Libya is a bilingual real estate platform built for the Libyan property market, serving buyers, sellers, and agents across 15+ cities nationwide. The platform supports Arabic and English, features advanced property search with live filters, verified listings, and a secure user authentication system. Built to handle 1,200+ active property listings with 500+ satisfied clients since launch.",
      "The primary purpose of Beyut Libya was to modernize property discovery in Libya — a market previously reliant on informal networks and unverified listings. Barakode built a trusted, structured platform where buyers can search verified properties instantly, sellers can list with confidence, and agents can manage their portfolios professionally. The platform directly addresses the lack of a reliable, digital-first real estate solution in the Libyan market.",
      "Beyut Libya operates within the Real Estate industry, serving the Libyan property market with a nationwide platform covering residential and commercial listings across 15+ cities including Tripoli.",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "React.js",
      "MySQL",
      "REST API",
      "JWT Authentication",
      "i18n Localization",
      "Vercel",
    ],
    gallery: [
      {
        src: "/images/projects/beyut-admin-categories.jpg",
        alt: "Beyut Libya admin panel — property categories management dashboard",
        caption: "Admin dashboard — category & listing management",
      },
      {
        src: "/images/projects/beyut-admin-profile.jpg",
        alt: "Beyut Libya admin panel — user profile and verification",
        caption: "User profile — verification & listing limits",
      },
    ],
    role: [
      "Barakode designed and developed the complete Beyut Libya platform from concept to deployment — handling architecture, frontend, backend, bilingual localization, and ongoing support. Our team built a production-ready real estate marketplace capable of serving thousands of users across Libya with verified listings and real-time search.",
      "We analyzed the Libyan real estate market to understand how buyers and sellers currently interact, identifying key pain points around trust, property verification, and search accessibility. Requirements were mapped into a clear product specification covering bilingual support, advanced search filters, property types, location-based browsing, and secure user accounts.",
      "The interface was designed to serve both Arabic and English users seamlessly — with full RTL support for Arabic and LTR for English. The design prioritized clarity, fast property discovery, and mobile responsiveness across all screen sizes. Property cards, search filters, and listing pages were all optimized for conversion and ease of use.",
      "The platform was built with a modern frontend framework paired with a robust REST API backend and MySQL database. JWT authentication handles secure user sessions for buyers, sellers, and agents. The property search engine supports live filtering by type, location, and price range. i18n localization was implemented throughout to support seamless language switching.",
      "Barakode worked closely with the Beyut Libya team throughout development — conducting regular reviews of search functionality, listing workflows, and user account features. Feedback from early users in Tripoli was incorporated into iterative improvements before the full nationwide launch.",
      "Beyut Libya is fully live and actively serving the Libyan real estate market at beyutlibya.com. The platform currently hosts 1,200+ verified property listings across 15+ cities with 500+ registered clients. The platform operates 24/7 with full support available and continues to grow its listings database and user base across Libya.",
    ],
    client:
      "Beyut Libya is a premier real estate platform connecting buyers, sellers, and agents across Libya with verified property listings and advanced search tools.",
    category:
      "Bilingual real estate marketplace with advanced property search, verified listings, secure authentication, and nationwide coverage across 15+ Libyan cities.",
    timeline: "October 2024 – January 2025",
    liveUrl: "https://www.beyutlibya.com/en",
  },

  "openinterview-video-platform": {
    overview: [
      "OpenInterview is a modern video interview platform that allows job seekers to create and share professional video profiles with recruiters in minutes. By uploading a resume, candidates instantly generate a recruiter-ready profile — complete with video introduction, availability, and a shareable link. The platform serves thousands of job seekers worldwide, helping them stand out beyond a traditional resume and land interviews faster.",
      "The primary purpose of OpenInterview was to solve one of the biggest problems in modern hiring — candidates getting lost in application piles. Barakode built a platform that gives job seekers a powerful first impression tool: a single professional link containing their video introduction, resume, and availability that can be shared directly with recruiters via email or DM. The goal was to eliminate back-and-forth communication and replace it with one clean, shareable profile.",
      "OpenInterview operates within the HR Technology and Recruitment industry, serving job seekers, recruiters, and hiring managers globally. The platform targets professionals across all industries — from software engineers and designers to sales executives and customer service professionals.",
    ],
    stack: [
      "React.js",
      "Node.js",
      "REST API",
      "Cloud Storage",
      "JWT Authentication",
      "AI Resume Processing",
      "Video Streaming",
      "Stripe Payments",
    ],
    detailImage: "/images/projects/openinterview-detail.jpg",
    detailImageAlt:
      "OpenInterview candidate landing page — upload a resume to generate a shareable video profile",
    role: [
      "Barakode engineered the complete OpenInterview platform — from resume processing and video upload infrastructure to the shareable profile system and recruiter-facing interface. Our team built a production-ready SaaS product with a freemium pricing model, secure cloud storage, and AI-powered resume parsing that generates candidate profiles automatically in seconds.",
      "We worked closely with the OpenInterview team to map the full candidate and recruiter journey — from resume upload through profile creation to final share. Key requirements included instant resume processing, video upload and playback, clean shareable profile URLs, calendar-based availability display, and a frictionless onboarding flow that required zero technical setup from the user.",
      "The interface was designed around simplicity and speed — a job seeker should be able to create and share their profile in under 3 minutes. The design features a clean, modern aesthetic with drag-and-drop resume upload, step-by-step profile building, and a professional shareable profile page optimized for recruiter viewing on any device. The Wall of Love testimonials section and pricing page were also designed to drive conversion.",
      "The backend was built to handle secure resume uploads to cloud storage, AI-powered resume parsing to auto-generate profile data, and video file processing for smooth playback. JWT authentication manages secure user sessions across the free and paid tiers. Stripe integration handles subscription payments for premium plan users. The shareable profile system generates unique URLs like openinterview.me/username for every candidate.",
      "Barakode collaborated closely with the OpenInterview founders throughout the build — conducting weekly reviews of core user flows, testing the resume upload and video processing pipeline with real users, and iterating on the profile sharing experience based on recruiter feedback. The AI transparency page and legal documentation were also developed as part of the full product delivery.",
      "OpenInterview is fully live and actively serving job seekers worldwide at openinterview.me. The platform is in active use with thousands of candidates creating and sharing video profiles with recruiters globally. The free plan allows unlimited sharing, with premium features available via subscription. The platform continues to grow its user base across the USA and international markets with ongoing feature development and AI improvements.",
    ],
    client:
      "OpenInterview is a US-based HR technology startup helping job seekers stand out from application piles by sharing professional video interview profiles directly with recruiters.",
    category:
      "Full-stack SaaS platform featuring AI resume processing, video upload infrastructure, shareable candidate profiles, and Stripe-powered subscription billing.",
    timeline: "August 2024 – November 2024",
    liveUrl: "https://openinterview.me/home.html",
  },
};

export const AWARDS = [
  { brand: "Clutch",    prize: "Top Software Development Company 2024",                date: "MAR 2024" },
  { brand: "GoodFirms", prize: "Best Web & Mobile App Development Agency 2024",        date: "JAN 2024" },
  { brand: "Awwwards",  prize: "Site of the Day — Enterprise SaaS Platform",           date: "NOV 2023" },
  { brand: "Deloitte",  prize: "Technology Fast 500 — Fastest Growing Tech Companies", date: "SEP 2023" },
  { brand: "Forbes",    prize: "Top 10 Emerging Software Agencies — USA 2023",         date: "JUN 2023" },
] as const;

export const TEAM = [
  {
    name: "Safdar Iqbal",
    slug: "safdar-iqbal",
    tag: "#thevision",
    role: "CEO Founder",
    title: "Chief Executive Officer & Founder",
    color: "#2a2a2a",
    image: "/images/team/safdar.png",
    shortBio:
      "The founder steering Barakode's vision — turning a bold idea from Pakistan into a software partner trusted worldwide.",
    bio: "Safdar founded Barakode on a single conviction: that world-class software shouldn't be bound by geography. As CEO he sets the company's direction, owns its most important client relationships, and protects the standard every engagement is held to. He works where strategy meets delivery — shaping the roadmap, building the team, and making sure ambitious ideas leave the building as reliable, scalable products.",
    quote:
      "We don't ship features. We ship outcomes our clients can build a business on.",
    expertise: [
      "Product Strategy",
      "Business Leadership",
      "Client Partnerships",
      "Team Building",
      "Vision & Roadmapping",
      "Go-to-Market",
    ],
    focus: [
      {
        title: "Vision & Strategy",
        description:
          "Setting the long-term direction and the bets that get Barakode there.",
      },
      {
        title: "Client Partnerships",
        description:
          "Owning the relationships that turn first projects into lasting partnerships.",
      },
      {
        title: "Building the Team",
        description:
          "Hiring and growing the people who keep the standard non-negotiable.",
      },
    ],
  },
  {
    name: "Humayon Abdullah",
    slug: "humayon-abdullah",
    tag: "#thebeast",
    role: "Full-Stack Developer",
    title: "Full-Stack Developer",
    color: "#1f1f1f",
    image: "/images/team/humayon.png",
    shortBio:
      "The engineering force who turns designs into fast, resilient, production-grade products.",
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
    focus: [
      {
        title: "Front-End Engineering",
        description:
          "Pixel-accurate, accessible, blazing-fast interfaces in React and Next.js.",
      },
      {
        title: "Back-End & APIs",
        description:
          "Resilient services, clean data models, and APIs built to scale.",
      },
      {
        title: "System Architecture",
        description:
          "Designing the system before the features — foundations that hold under load.",
      },
    ],
  },
  {
    name: "Burhan Tariq",
    slug: "burhan-tariq",
    tag: "#thepixel",
    role: "BD Manager",
    title: "Business Development Manager",
    color: "#252525",
    image: "/images/team/burhan.png",
    shortBio:
      "The bridge between client ambition and engineering execution — partnerships, growth, and clear communication.",
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
    focus: [
      {
        title: "Business Development",
        description:
          "Finding the right-fit clients and opening doors to new partnerships.",
      },
      {
        title: "Client Relations",
        description:
          "Being the dependable point of contact from kickoff to launch and beyond.",
      },
      {
        title: "Growth & Strategy",
        description:
          "Aligning what clients need with what Barakode does best.",
      },
    ],
  },
] as const;

/** Look up a single team member by their URL slug (for /team/[slug]). */
export const getTeamMemberBySlug = (slug: string) =>
  TEAM.find((m) => m.slug === slug);

export const PROCESS_STEPS = [
  {
    n: "Step 1",
    title: "Discovery",
    description:
      "We analyze your business requirements, define project scope, and deliver a clear roadmap with accurate cost and timeline estimates.",
    hasImage: true,
    image: "/images/process/discovery.jpg",
  },
  {
    n: "Step 2",
    title: "Development",
    description:
      "We engineer the product with clean, modular architecture — using your stack of choice and shipping reviewable increments every sprint.",
    hasImage: true,
    image: "/images/process/development.jpg",
  },
  {
    n: "Step 3",
    title: "QA & Delivery",
    description:
      "We harden the build with automated and manual QA across browsers, devices, and edge cases before a structured, low-risk launch.",
    hasImage: true,
    image: "/images/process/qa-delivery.jpg",
  },
  {
    n: "Step 4",
    title: "Support & Growth",
    description:
      "Post-launch we monitor, iterate, and scale — handling infrastructure, security patches, and feature growth as your business evolves.",
    hasImage: true,
    image: "/images/process/support-growth.jpg",
  },
] as const;

export const TESTIMONIALS = [
  {
    title: "Excellent Work!",
    body: "The Barakode team delivered ahead of schedule and the build was rock-solid from day one.",
    name: "Adam Lewis",
    role: "Founder, Loopify App",
    avatar: "/images/testimonials/adam-lewis.svg",
  },
  {
    title: "Impressive Results!",
    body: "Building enterprise software in our regulated industry is complex, Brakode handled it flawlessly.",
    name: "Marcus Webb",
    role: "Senior Director, FinSecure Global",
    avatar: "/images/testimonials/marcus-webb.svg",
    featured: true,
  },
  {
    title: "Exceptional Team!",
    body: "Communication was clear at every sprint and the final product exceeded what we mapped on paper.",
    name: "Adrian Chen",
    role: "Product Lead, Nexus Labs",
    avatar: "/images/testimonials/adrian-chen.svg",
  },
  {
    title: "Love to partner again",
    body: "Brakode transformed our legacy system into a modern cloud platform that scaled 10x within months.",
    name: "Sarah Mitchell",
    role: "VP Engineering, DataBridge Corp",
    avatar: "/images/testimonials/sarah-mitchell.svg",
  },
  {
    title: "Best delivery ever!",
    body: "From discovery to launch, every milestone was on time and every estimate was honest.",
    name: "James Thornton",
    role: "CTO at NovaTech Inc",
    avatar: "/images/testimonials/james-thornton.svg",
  },
] as const;

export const FAQS = [
  {
    q: "What is your typical project timeline?",
    a: "It depends on the scope! Simple integrations take about 1–2 weeks, while full web or mobile applications usually take 6–16 weeks.",
  },
  {
    q: "What services does your agency offer?",
    a: "Full-stack web and mobile development, AI/ML integration, cloud and DevOps, UI/UX design, and staff augmentation.",
  },
  {
    q: "What is your revision policy?",
    a: "Each milestone includes two structured revision rounds. Larger scope changes are quoted transparently before any additional work begins.",
  },
  {
    q: "How do we get started working together?",
    a: "Send us a brief through the contact form. We respond within 24 hours with a clear plan, honest timeline, and a competitive quote.",
  },
  {
    q: "Will I own the rights to the code?",
    a: "Yes — full IP transfer is included with every engagement upon final delivery and payment.",
  },
  {
    q: "How do you approach a new software project?",
    a: "Discovery first. We map requirements, define architecture, lock the stack, and only then start engineering with weekly demos.",
  },
] as const;

export const PRICING_PLANS = [
  {
    tag: "Standard",
    duration: "4-6 Week",
    title: "Standard Plan",
    tagline:
      "Have clear requirements and a focused scope? This plan gets you moving fast.",
    badge: "Popular",
    price: "500",
    items: [
      "Requirements & scope definition",
      "UI/UX design in Figma",
      "Development in React or WordPress",
      "Remote & online collaboration",
      "Delivery within business days, no weekends",
    ],
  },
  {
    tag: "Custom",
    duration: "4-12 Week",
    title: "Premium Plan",
    tagline:
      "For complex projects requiring full-cycle development from strategy to launch.",
    badge: "Exculvsive", // preserved typo from site_dna
    price: "1000",
    items: [
      "Full discovery & architecture planning",
      "Custom UI/UX design in Figma",
      "Advanced development in React, Node.js, or Flutter",
      "Cloud deployment & DevOps setup",
      "Fully responsive & performance optimized",
      "Dedicated project manager & weekly reports",
    ],
  },
] as const;

export const CONTACT_INTERESTS = [
  "Web Development",
  "Mobile App Development",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Enterprise Software",
  "UI/UX Design",
  "Staff Augmentation",
  "Other",
];

/**
 * Blog body blocks: a text section (heading + paragraphs + optional checklist)
 * or an image block (full-width landscape, or a contained `portrait` figure).
 */
export const BLOG_POSTS = [
  {
    slug: "why-every-project-needs-a-technical-roadmap",
    title: "Why Every Project Needs a Technical Roadmap",
    year: "2025",
    category: "Development",
    cover: "/images/blog/technical-roadmap.jpeg",
    readTime: "5 min read",
    timeline: "March 2025",
    author: "Barakode Team",
    tags: ["Development", "Engineering"],
    excerpt:
      "More than just writing code — it's engineering a system. A technical roadmap is your project's blueprint, ensuring every decision leads to a scalable and maintainable product.",
    body: [
      {
        heading: "Architecture Before Code",
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
        image: "/images/blog/roadmap-tc-billboard.png",
        alt: "Illuminated street billboard reading Terms & Conditions Apply at night",
        portrait: true,
      },
      {
        heading: "Stack Selection and Scalability",
        paragraphs: [
          "Choosing a technology stack is more than preference — it determines performance, scalability, and long-term maintainability. Defining the right stack means setting standards for frontend frameworks, backend services, databases, and cloud infrastructure so the system can grow predictably without expensive rewrites.",
          "We built a comprehensive stack evaluation process using business requirements, expected traffic load, and team expertise as core inputs. With clear decisions on React.js, Node.js, AWS, and MySQL documented upfront, the guide streamlined collaboration between our engineers and the client's internal team — reducing friction and accelerating delivery at every sprint.",
        ],
      },
      {
        image: "/images/blog/roadmap-schema.jpg",
        alt: "Database schema and entity-relationship diagram mapping the platform architecture",
        caption: "Mapping the data model and API architecture before development begins",
      },
      {
        heading: "Technical Documentation",
        paragraphs: [
          "The heart of any successful software project lies in its documentation — how clearly and accessibly it explains the architecture, APIs, and deployment process. Good documentation does not just record decisions, it empowers future developers to build on the system confidently without breaking what already works.",
          "Barakode delivers living technical documentation with every project — including API references, database schema diagrams, environment setup guides, and deployment runbooks. This empowers clients to onboard new developers faster, scale their teams independently, and maintain their software long after launch without depending on us for every change.",
        ],
      },
    ],
  },
] as const;

// Photos shown in the "More About Us" row below the Stats counters.
// First tile is the company brochure (shown consistently on every page that
// renders the Stats section — home + about).
export const ABOUT_PHOTOS = [
  "/images/about/Barakode_brochure_updated.jpg",
  "/images/about/about-2.jpg",
  "/images/about/about-3.jpg",
] as const;
