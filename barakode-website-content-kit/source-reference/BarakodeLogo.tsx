/**
 * Barakode hexagon "molecule" mark, redrawn as a crisp inline SVG so it
 * scales perfectly and tints with the brand gold. The node centres use the
 * surrounding background colour, so each node reads as a ring on any surface.
 *
 * `holeColor` should match whatever the mark sits on (defaults to the page
 * canvas). The gold parts inherit `currentColor` — set it via `text-accent`.
 */
type Props = {
  className?: string;
  /** px size of the square mark. */
  size?: number;
  /** Fill for the node centres + dot holes (match the surface behind it). */
  holeColor?: string;
};

// Pointy-top hexagon vertices (viewBox 0 0 200 200, centre 100,100, r≈70).
const TOP = [100, 30];
const UR = [160.6, 65];
const LR = [160.6, 135];
const BOT = [100, 170];
const LL = [39.4, 135];
const UL = [39.4, 65];
const C = [100, 100];

export default function BarakodeLogo({
  className = "",
  size = 36,
  holeColor = "rgb(var(--c-canvas))",
}: Props) {
  const edges: [number[], number[]][] = [
    [TOP, UR],
    [UR, LR],
    [LR, BOT],
    [BOT, LL],
    [LL, UL],
    [UL, TOP],
  ];
  const nodes = [TOP, UR, LR, BOT, LL, UL];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      role="img"
      aria-label="Barakode"
    >
      {/* Hexagon edges */}
      <g stroke="currentColor" strokeWidth={7} strokeLinecap="round">
        {edges.map(([a, b], i) => (
          <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />
        ))}
      </g>

      {/* Dashed connectors from centre to the two right nodes */}
      <g
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray="1.5 9"
      >
        <line x1={C[0]} y1={C[1]} x2={UR[0]} y2={UR[1]} />
        <line x1={C[0]} y1={C[1]} x2={LR[0]} y2={LR[1]} />
      </g>

      {/* Vertex nodes — gold ring with a hole */}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={10.5} fill="currentColor" />
          <circle cx={x} cy={y} r={4.6} fill={holeColor} />
        </g>
      ))}

      {/* Centre node — deeper bronze with a hole */}
      <circle cx={C[0]} cy={C[1]} r={13} fill="#7a5320" />
      <circle cx={C[0]} cy={C[1]} r={5} fill={holeColor} />
    </svg>
  );
}
