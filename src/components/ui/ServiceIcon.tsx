import {
  AppWindow,
  BarChart3,
  Bot,
  BrainCircuit,
  Cloud,
  FileStack,
  LayoutDashboard,
  MessageSquare,
  PenTool,
  Rocket,
  Search,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/**
 * Single icon registry. One library, one stroke weight, one visual language —
 * no emoji, no mixed sets.
 */
const REGISTRY = {
  Rocket,
  AppWindow,
  BrainCircuit,
  LayoutDashboard,
  Cloud,
  PenTool,
  MessageSquare,
  Search,
  FileStack,
  Workflow,
  BarChart3,
  Bot,
  Sparkles,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof REGISTRY;

export function ServiceIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Icon = REGISTRY[name];
  return <Icon aria-hidden className={className} strokeWidth={1.6} />;
}
