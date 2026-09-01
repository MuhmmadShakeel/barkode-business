import { Bot, FileText, ShieldCheck, BarChart3 } from "lucide-react";

const nodes = [
  { label: "Business input", Icon: FileText },
  { label: "AI workflow", Icon: Bot },
  { label: "Human review", Icon: ShieldCheck },
  { label: "Business output", Icon: BarChart3 },
];

export function AiWorkflow3D() {
  return (
    <div className="ai-3d-stage" aria-label="Animated AI workflow from business input to reviewed output">
      <div className="ai-3d-grid" aria-hidden />
      <div className="ai-3d-orbit" aria-hidden />
      <div className="ai-3d-core" aria-hidden>
        <span />
      </div>
      <ol className="ai-3d-nodes">
        {nodes.map(({ label, Icon }, index) => (
          <li key={label} className={`ai-3d-node ai-3d-node--${index + 1}`}>
            <span className="ai-3d-node__number">0{index + 1}</span>
            <Icon aria-hidden className="size-5" strokeWidth={1.6} />
            <strong>{label}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}
