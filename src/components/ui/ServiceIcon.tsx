/** Self-explanatory service diagrams, authored for Barakode's schematic UI. */
const DIAGRAMS = {
  Rocket: <><path d="M18 46c5-16 15-27 29-32 2 14-3 27-19 34l-10-2Z"/><path d="m20 36-8 1-5 9 12 1M30 47l-1 10 9-4 1-8"/><circle cx="36" cy="30" r="4"/><path d="M17 49c-4 2-6 5-7 8 4 0 8-2 10-6"/></>,
  AppWindow: <><rect x="8" y="11" width="48" height="42" rx="5"/><path d="M8 21h48M17 16h.1M22 16h.1M27 16h.1"/><rect x="16" y="28" width="14" height="16" rx="2"/><path d="M36 31h12M36 37h12M36 43h7"/></>,
  BrainCircuit: <><path d="M28 12c-8-4-15 2-14 10-7 3-7 14 0 17 0 8 9 13 15 8 5 7 17 3 17-6 6-4 5-14-1-17 1-8-9-14-17-12Z"/><path d="M28 19v11l8 5v11M20 27h8M36 19v8h8M20 39h8M36 35h10"/><circle cx="28" cy="19" r="2"/><circle cx="20" cy="27" r="2"/><circle cx="46" cy="35" r="2"/></>,
  LayoutDashboard: <><rect x="8" y="10" width="48" height="44" rx="5"/><path d="M8 21h48M18 16h.1M23 16h.1"/><rect x="15" y="28" width="14" height="18" rx="2"/><path d="M36 30h12M36 36h12M36 42h8"/></>,
  Cloud: <><path d="M18 48h28a10 10 0 0 0 1-20 14 14 0 0 0-27-2 11 11 0 0 0-2 22Z"/><path d="M23 41h18M27 35h10"/><circle cx="20" cy="41" r="2"/><circle cx="44" cy="41" r="2"/></>,
  PenTool: <><path d="m15 48 18-18M20 53l-9-9 4-12 17-17 13 13-17 17-8 8Z"/><path d="m31 16 13 13M11 44l-3 8 8-3M43 12h10M48 7v10"/><circle cx="47" cy="12" r="3"/></>,
  MessageSquare: <><path d="M10 14h44v31H26l-12 9v-9h-4Z"/><path d="M19 25h26M19 33h18"/><circle cx="47" cy="51" r="5"/><path d="M47 48v3l2 2"/></>,
  Search: <><circle cx="29" cy="29" r="15"/><path d="m40 40 13 13M22 29h14M29 22v14"/><path d="M11 17h6M11 23h4"/></>,
  FileStack: <><path d="M17 14h28l7 7v31H17Z"/><path d="M45 14v8h8M24 30h20M24 38h15"/><path d="M12 20v34h31M7 26v34h31"/></>,
  Workflow: <><rect x="8" y="13" width="16" height="12" rx="2"/><rect x="40" y="13" width="16" height="12" rx="2"/><rect x="24" y="42" width="16" height="12" rx="2"/><path d="M24 19h16M16 25v10h16v7M48 25v10H32"/><path d="m34 38-2 4-2-4"/></>,
  BarChart3: <><path d="M10 54V10M10 54h46"/><rect x="18" y="34" width="8" height="14" rx="1"/><rect x="31" y="25" width="8" height="23" rx="1"/><rect x="44" y="17" width="8" height="31" rx="1"/><path d="m18 27 15-9 15-7"/><circle cx="18" cy="27" r="2"/><circle cx="33" cy="18" r="2"/><circle cx="48" cy="11" r="2"/></>,
  Bot: <><rect x="12" y="19" width="40" height="32" rx="8"/><path d="M32 19V10M26 10h12M12 34H7M57 34h-5M22 59v-8M42 59v-8"/><circle cx="24" cy="34" r="3"/><circle cx="40" cy="34" r="3"/><path d="M23 43h18"/><circle cx="32" cy="8" r="3"/></>,
  Sparkles: <><path d="m32 8 4 14 14 4-14 4-4 14-4-14-14-4 14-4Z"/><path d="m50 38 2 7 7 2-7 2-2 7-2-7-7-2 7-2ZM15 43l2 7 7 2-7 2-2 7-2-7-7-2 7-2Z"/></>,
  Blocks: <><path d="m32 8 17 10v20L32 48 15 38V18Z"/><path d="m15 18 17 10 17-10M32 28v20"/><path d="m11 42 8 5M45 47l8-5"/></>,
  ClipboardList: <><rect x="15" y="11" width="34" height="45" rx="4"/><path d="M25 11v-3h14v3M24 25h16M24 35h16M24 45h10"/><path d="m19 25 2 2 4-5m-6 13 2 2 4-5m-6 13 2 2 4-5"/></>,
  Code2: <><path d="m24 17-14 15 14 15M40 17l14 15-14 15M36 12l-8 40"/><circle cx="10" cy="32" r="2"/><circle cx="54" cy="32" r="2"/></>,
  Palette: <><path d="M33 10C18 10 8 20 8 34c0 11 8 19 17 19h4c4 0 6-3 5-6-1-3 1-5 4-5h3c9 0 15-7 15-15 0-10-10-17-23-17Z"/><circle cx="19" cy="29" r="3"/><circle cx="27" cy="20" r="3"/><circle cx="40" cy="21" r="3"/><circle cx="47" cy="31" r="3"/></>,
  ShieldCheck: <><path d="M32 8 51 15v14c0 13-8 22-19 27-11-5-19-14-19-27V15Z"/><path d="m22 32 7 7 14-15"/></>,
  UsersRound: <><circle cx="24" cy="25" r="8"/><circle cx="44" cy="27" r="6"/><path d="M10 52c1-10 7-15 14-15s13 5 14 15M38 40c7 0 11 4 12 12"/><path d="M11 52h27M38 52h12"/></>,
  WandSparkles: <><path d="m18 51 28-28 6 6-28 28Z"/><path d="m41 14 2 7 7 2-7 2-2 7-2-7-7-2 7-2ZM18 17l1 5 5 1-5 1-1 5-1-5-5-1 5-1Z"/><path d="m51 42 1 4 4 1-4 1-1 4-1-4-4-1 4-1Z"/></>,
  Waypoints: <><circle cx="14" cy="46" r="5"/><circle cx="32" cy="17" r="5"/><circle cx="50" cy="38" r="5"/><path d="M18 43c7-5 8-17 11-21M36 20c5 5 8 10 10 14"/><path d="m24 36 5-3-1 6"/></>,
  Network: <><circle cx="32" cy="13" r="5"/><circle cx="14" cy="46" r="5"/><circle cx="50" cy="46" r="5"/><circle cx="32" cy="33" r="6"/><path d="M32 18v9M27 36l-9 7M37 36l9 7M18 46h27"/></>,
} as const;

export type IconName = keyof typeof DIAGRAMS;

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  return <svg aria-hidden focusable="false" className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">{DIAGRAMS[name]}</svg>;
}
