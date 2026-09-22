import { CONSULTANCY_MENU } from "@/lib/site";

export type ConsultancyDetail = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  hero: { heading: string; accent: string; body: string };
  overview: string;
  challenge: string;
  outcomes: string[];
  signals: string[];
  audience: string[];
  steps: { title: string; detail: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

const AREAS = [
  ["it-consultation", "IT Consultation", "with confidence", "Independent guidance before your team commits time, budget, or effort."],
  ["it-outsourcing", "IT Outsourcing Consultancy", "with the right delivery partner", "A clear plan for working with an external technical partner while keeping control."],
  ["managed-it", "Managed IT Services Consultancy", "with dependable IT support", "A practical model for keeping critical systems supported, secure, and accountable."],
  ["design-consultancy", "Design Consultancy", "with a clear product direction", "Product direction that helps teams decide what to build and why."],
  ["ai-data-strategy", "AI & Data Strategy Consulting", "with a practical AI roadmap", "A grounded view of where AI and data can create value—and what needs to come first."],
  ["digital-transformation", "Digital Transformation Consulting", "without disrupting operations", "A sequenced roadmap that connects people, workflows, systems, and priorities."],
  ["product-strategy", "Product Strategy Consulting", "with sharper product priorities", "Product direction for teams balancing user needs, commercial goals, and technical limits."],
  ["tech-strategy", "Tech Strategy Consulting", "with technology that fits", "A technology strategy tied to the business outcome, not the latest tool."],
  ["devops-consulting", "DevOps Consulting", "with stronger delivery systems", "A practical route to safer releases, clearer ownership, and reliable operations."],
  ["microservices-consulting", "Microservices Consulting", "with an architecture that scales", "Architecture advice for teams deciding if—and how—to split a system into services."],
  ["iot-consultancy", "IoT Consultancy", "with a connected-device plan", "A device strategy that brings users, hardware, data, reliability, and operations together."],
  ["business-intelligence", "Business Intelligence Consulting", "with data your team can use", "A reporting foundation that gives teams reliable answers instead of another dashboard."],
] as const;

export const CONSULTANCY_DETAILS: ConsultancyDetail[] = AREAS.map(([slug, title, accent, overview], index) => ({
  slug,
  metaTitle: `${title} | Barakode Technologies`,
  metaDescription: `${title} from Barakode Technologies: practical guidance, clear priorities, and a defensible path to implementation.`,
  hero: { heading: "Make the next decision", accent, body: overview },
  overview,
  challenge: "We look at the people involved, the systems in play, the constraints, and the outcome that matters. Then we give your team a next step it can own.",
  outcomes: ["A shared view of the situation", "Priorities tied to the outcome", "A recommendation with clear trade-offs", "A practical plan for what happens next"],
  signals: ["A decision is stuck in uncertainty", "The current workflow creates friction", "Teams need a shared technical direction"],
  audience: ["Business and technology leaders", "Product and operations teams", "Teams planning a critical change"],
  steps: [
    { title: "Understand", detail: "Review the situation, decision, constraints, and people involved." },
    { title: "Map", detail: "Make the current state, dependencies, and risks visible." },
    { title: "Prioritize", detail: "Focus on the actions that create the most useful progress now." },
    { title: "Recommend", detail: "Document a defensible route forward and how to put it into action." },
  ],
  faqs: [
    { q: `What does ${title} include?`, a: "The engagement is tailored to the decision at hand. We agree the scope, stakeholders, review points, and deliverables before work begins." },
    { q: "Can you work with our internal team or existing vendor?", a: "Yes. We can work alongside your team and partners, providing independent structure and guidance where it is most useful." },
    { q: "What happens after the advisory work?", a: "You receive a documented direction and next-step plan. Barakode can support delivery where appropriate, or hand it to your internal team." },
  ],
  related: AREAS.filter((_, relatedIndex) => relatedIndex !== index).slice(0, 3).map(([relatedSlug]) => relatedSlug),
}));

export const getConsultancyDetail = (slug: string) => CONSULTANCY_DETAILS.find((detail) => detail.slug === slug);
export const getConsultancyMenuItem = (slug: string) => CONSULTANCY_MENU.find((item) => item.href === `/consultancy/${slug}`);
