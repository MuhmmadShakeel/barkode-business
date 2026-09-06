import {
  AppWindow,
  BarChart3,
  Blocks,
  Bot,
  BrainCircuit,
  Cloud,
  ClipboardList,
  Code2,
  FileStack,
  LayoutDashboard,
  MessageSquare,
  PenTool,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  UsersRound,
  WandSparkles,
  Waypoints,
  Network,
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
  Blocks,
  ClipboardList,
  Code2,
  Palette,
  ShieldCheck,
  UsersRound,
  WandSparkles,
  Waypoints,
  Network,
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
