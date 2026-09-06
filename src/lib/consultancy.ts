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
  ["it-consultation", "IT Consultation", "make confident technology decisions", "Independent advice for teams that need to choose the right path before committing time and budget."],
  ["it-outsourcing", "IT Outsourcing Consultancy", "build a dependable delivery partnership", "A clear plan for handing work to an external technical partner without losing visibility or control."],
  ["managed-it", "Managed IT Services Consultancy", "make IT operations dependable", "A practical operating model for keeping critical systems supported, secure, and accountable."],
  ["design-consultancy", "Design Consultancy", "turn product complexity into clarity", "Product and experience direction that gives teams a sharper view of what to build and why."],
  ["ai-data-strategy", "AI & Data Strategy Consulting", "turn AI ambition into a useful roadmap", "A grounded view of where data and AI can create operational value, and what needs to be true first."],
  ["digital-transformation", "Digital Transformation Consulting", "modernize without disrupting the work", "A sequenced transformation roadmap that connects people, workflows, systems, and priorities."],
  ["product-strategy", "Product Strategy Consulting", "make the next product decision clearer", "Product direction for teams balancing user needs, commercial goals, scope, and technical constraints."],
  ["tech-strategy", "Tech Strategy Consulting", "choose technology with context", "An actionable technology strategy that is connected to the business outcome, not just the latest tool."],
  ["devops-consulting", "DevOps Consulting", "make delivery and operations stronger", "A practical route to safer releases, clearer ownership, and a more reliable engineering environment."],
  ["microservices-consulting", "Microservices Consulting", "evolve architecture with care", "Architecture advice for teams deciding whether and how to split systems into independently managed services."],
  ["iot-consultancy", "IoT Consultancy", "plan connected products with confidence", "A connected-device strategy that considers users, hardware, data, reliability, and the operating model together."],
  ["business-intelligence", "Business Intelligence Consulting", "turn operational data into decisions", "A reporting and data foundation that gives teams reliable answers instead of another disconnected dashboard."],
] as const;

export const CONSULTANCY_DETAILS: ConsultancyDetail[] = AREAS.map(([slug, title, accent, overview], index) => ({
  slug,
  metaTitle: `${title} | Barakode Technologies`,
  metaDescription: `${title} from Barakode Technologies: practical guidance, clear priorities, and a defensible path to implementation.`,
  hero: { heading: "Create a clearer path to", accent, body: overview },
  overview,
  challenge: "We start with the context around the decision: the people affected, the current systems, the constraints, and the outcome that matters most. The result is a practical next step your team can own.",
  outcomes: ["A shared view of the current situation", "Priorities that support the intended outcome", "A practical recommendation with trade-offs", "A clear next-step plan for the team"],
  signals: ["A decision is being delayed by uncertainty", "The current workflow is creating avoidable friction", "Teams need a shared technical direction"],
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
