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
    body: "Answers routine questions from your own knowledge base then prepares replies for review and sends sensitive matters to a person.",
    icon: "MessageSquare",
  },
  {
    title: "RAG chatbot",
    body: "Answers from selected business knowledge such as FAQs product documents manuals policies and SOPs instead of guessing from general model knowledge.",
    icon: "Search",
  },
  {
    title: "Document processing",
    body: "Extracts structured fields from invoices contracts forms reports and résumés then routes exceptions to a person.",
    icon: "FileStack",
  },
  {
    title: "CRM automation",
    body: "Scores leads updates records prepares follow ups summarises calls and moves deals through the pipeline without manual data entry.",
    icon: "Workflow",
  },
  {
    title: "Reporting automation",
    body: "Collects data summarises changes updates the dashboard and highlights what needs attention.",
    icon: "BarChart3",
  },
  {
    title: "Internal AI agents",
    body: "Task focused assistants that follow defined rules use approved tools and stop for human sign off when it matters.",
    icon: "Bot",
  },
  {
    title: "SaaS AI features",
    body: "AI capabilities built into your existing product for search summarisation drafting and classification with admin controls and audit logs.",
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
  "Scanned documents when OCR quality is good",
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
  { step: "AI opportunity discovery", detail: "Find where time goes and identify the work that can repeat safely." },
  { step: "Workflow mapping", detail: "Document the current process honestly including its exceptions." },
  { step: "Data and knowledge review", detail: "Review the source material and confirm that it is reliable enough to use." },
  { step: "AI architecture planning", detail: "Set the models retrieval tools permissions review gates and fallback steps." },
  { step: "Prototype", detail: "Test one complete workflow on real inputs." },
  { step: "Production build", detail: "Add integrations admin controls audit logs and error handling." },
  { step: "QA and safety checks", detail: "Test edge cases refusal behaviour and the response when the model is wrong." },
  { step: "Launch and improve", detail: "Compare the workflow with the manual baseline then improve it." },
];

export const AI_FAQS = [
  {
    q: "Can AI automate our whole business process?",
    a: "Rarely. We identify the repeatable well defined parts then automate those while keeping human judgment where the cost of being wrong is high.",
  },
  {
    q: "Can you build an AI chatbot for our website?",
    a: "Yes. It can use your own content so answers come from your knowledge with a clear path to a person when needed.",
  },
  {
    q: "Can AI read documents and extract data?",
    a: "Yes. Invoices contracts forms reports and résumés are common. We verify scanned document quality before committing to a workflow.",
  },
  {
    q: "Can you connect AI with our CRM?",
    a: "Yes when the CRM exposes an API. Lead scoring record updates call summaries drafted follow ups and pipeline movement are all standard.",
  },
  {
    q: "Do you build AI into existing software?",
    a: "Yes. Retrieval summarisation and classification can be added to the product you already run.",
  },
  {
    q: "How do you keep AI safe and reliable?",
    a: "We set clear decision limits add human review for consequential work and use permission controls audit logs data privacy boundaries and a defined fallback.",
  },
];
