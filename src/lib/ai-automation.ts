/**
 * AI AUTOMATION PAGE CONTENT (brief, prompt 4).
 * Deliberately un-hyped: the brief asks for practical positioning with
 * explicit limits, human oversight, and a stated list of what not to automate.
 */

export const AI_PROBLEMS = [
  "Repetitive support questions",
  "Manual document review",
  "Slow reporting",
  "Scattered internal knowledge",
  "CRM data entry",
  "Lead qualification",
  "Manual data movement",
  "Repetitive admin tasks",
];

export type AiUseCase = {
  title: string;
  body: string;
  icon: "MessageSquare" | "Search" | "FileStack" | "Workflow" | "BarChart3" | "Bot" | "Sparkles";
};

export const AI_USE_CASES: AiUseCase[] = [
  {
    title: "AI customer support assistant",
    body: "Answers routine questions from your own knowledge base, drafts replies for review, and hands anything sensitive straight to a person.",
    icon: "MessageSquare",
  },
  {
    title: "RAG chatbot",
    body: "Answers from selected business knowledge — FAQs, product docs, manuals, policies, SOPs — instead of guessing from general model knowledge.",
    icon: "Search",
  },
  {
    title: "Document processing",
    body: "Extracts structured fields from invoices, contracts, forms, reports and résumés, then routes the exceptions to a human.",
    icon: "FileStack",
  },
  {
    title: "CRM automation",
    body: "Scores leads, updates records, drafts follow-ups, summarises calls, and moves deals through the pipeline without manual data entry.",
    icon: "Workflow",
  },
  {
    title: "Reporting automation",
    body: "Collects the data, summarises what changed, updates the dashboard, and raises an alert when something needs attention.",
    icon: "BarChart3",
  },
  {
    title: "Internal AI agents",
    body: "Task-scoped assistants that follow defined rules, use the tools they are given, and stop for human sign-off where it matters.",
    icon: "Bot",
  },
  {
    title: "SaaS AI features",
    body: "AI capability built into your existing product — search, summarisation, drafting, classification — with admin controls and audit logs.",
    icon: "Sparkles",
  },
];

export type Workflow = {
  id: string;
  name: string;
  /** Ordered steps. `human` marks the review gate. */
  steps: { label: string; human?: boolean }[];
};

export const AI_WORKFLOWS: Workflow[] = [
  {
    id: "support",
    name: "Support workflow",
    steps: [
      { label: "Customer question" },
      { label: "AI checks knowledge base" },
      { label: "AI drafts answer" },
      { label: "Human review if needed", human: true },
      { label: "Response sent" },
      { label: "Ticket updated" },
    ],
  },
  {
    id: "document",
    name: "Document workflow",
    steps: [
      { label: "Document uploaded" },
      { label: "AI extracts key fields" },
      { label: "System validates data" },
      { label: "Human reviews exceptions", human: true },
      { label: "Data saved to dashboard" },
    ],
  },
  {
    id: "sales",
    name: "Sales workflow",
    steps: [
      { label: "Lead submits form" },
      { label: "AI qualifies inquiry" },
      { label: "CRM updated" },
      { label: "Follow-up email drafted" },
      { label: "Sales team notified", human: true },
    ],
  },
  {
    id: "reporting",
    name: "Reporting workflow",
    steps: [
      { label: "Data collected" },
      { label: "AI summarises changes" },
      { label: "Dashboard updated" },
      { label: "Report sent to team" },
      { label: "Alerts triggered for issues", human: true },
    ],
  },
];

export const AI_AGENTS = [
  "Lead qualification agent",
  "Internal knowledge assistant",
  "Reporting assistant",
  "Document review assistant",
  "CRM update assistant",
  "Customer support triage assistant",
];

export const DOCUMENT_TYPES = [
  "Invoices",
  "Contracts",
  "Forms",
  "Reports",
  "Résumés",
  "PDFs",
  "Scanned documents, if OCR quality is good",
];

export const SUPPORT_AUTOMATABLE = [
  "FAQs",
  "Ticket classification",
  "Suggested replies",
  "Knowledge search",
  "Escalation routing",
  "Support summaries",
];

export const SUPPORT_HUMAN_LED = [
  "Sensitive complaints",
  "Refund decisions",
  "Legal issues",
  "Complex customer disputes",
  "High-value accounts",
];

export const CRM_USE_CASES = [
  "Lead scoring",
  "Follow-up reminders",
  "Record updates",
  "Call summaries",
  "Email drafts",
  "Pipeline movement",
  "Task creation",
];

export const REPORTING_USE_CASES = [
  "Weekly reports",
  "Sales summaries",
  "Operational dashboards",
];

export const DO_NOT_AUTOMATE = [
  "Legal decisions",
  "Medical decisions",
  "Financial approvals",
  "Sensitive HR decisions",
  "High-risk customer conversations",
  "Anything requiring final human judgment",
  "Anything using poor-quality or unverified data",
];

export const AI_PROCESS = [
  { step: "AI opportunity discovery", detail: "Where does the time actually go, and which of it is repeatable?" },
  { step: "Workflow mapping", detail: "The current process, written down honestly, including the exceptions." },
  { step: "Data and knowledge review", detail: "What the model can be grounded in, and how good that source really is." },
  { step: "AI architecture planning", detail: "Models, retrieval, tools, permissions, review gates, fallbacks." },
  { step: "Prototype", detail: "One workflow, end to end, on real inputs." },
  { step: "Production build", detail: "Integrations, admin controls, audit logs, error handling." },
  { step: "QA and safety checks", detail: "Edge cases, refusal behaviour, and what happens when the model is wrong." },
  { step: "Launch and improve", detail: "Measured against the manual baseline, then tuned." },
];

export const AI_FAQS = [
  {
    q: "Can AI automate our whole business process?",
    a: "Rarely, and usually it should not. We look for the parts of a process that are repeatable and well-defined, automate those, and keep human judgment where the cost of being wrong is high.",
  },
  {
    q: "Can you build an AI chatbot for our website?",
    a: "Yes — grounded in your own content so it answers from your knowledge rather than guessing, with a defined escalation path to a person.",
  },
  {
    q: "Can AI read documents and extract data?",
    a: "Yes. Invoices, contracts, forms, reports and résumés are common. Scanned documents work where OCR quality is good enough to trust — we verify that before committing.",
  },
  {
    q: "Can you connect AI with our CRM?",
    a: "Yes, where the CRM exposes an API. Lead scoring, record updates, call summaries, drafted follow-ups, and pipeline movement are all standard.",
  },
  {
    q: "Do you build AI into existing software?",
    a: "Yes. Adding a retrieval assistant, summarisation, or classification into a product you already run is one of the most common requests we get.",
  },
  {
    q: "How do you keep AI safe and reliable?",
    a: "Clear limits on what the workflow may decide, human review on anything consequential, permission controls, audit logs, data-privacy boundaries, and a defined fallback when the model is not confident.",
  },
];
