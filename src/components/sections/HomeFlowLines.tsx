/** Lightweight, responsive signal-line field used behind the homepage hero. */
export function HomeFlowLines() {
  const ribbons = Array.from({ length: 20 }, (_, index) => index);
  const crossLines = Array.from({ length: 14 }, (_, index) => index);

  return (
    <div className="home-flow-lines" aria-hidden>
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="h-full w-full"
        focusable="false"
      >
        <defs>
          <linearGradient id="home-flow-gold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#c8922a" stopOpacity="0" />
            <stop offset="0.16" stopColor="#c8922a" stopOpacity="0.4" />
            <stop offset="0.58" stopColor="#f2c865" stopOpacity="0.9" />
            <stop offset="1" stopColor="#c8922a" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="home-flow-soft" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#d7aa4d" stopOpacity="0.48" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="home-flow-glow">
            <stop offset="0" stopColor="#d7aa4d" stopOpacity="0.28" />
            <stop offset="1" stopColor="#d7aa4d" stopOpacity="0" />
          </radialGradient>
        </defs>

        <ellipse cx="1040" cy="445" rx="430" ry="330" fill="url(#home-flow-glow)" />

        <g className="home-flow-lines__ribbons" fill="none" stroke="url(#home-flow-gold)" strokeWidth="2.25">
          {ribbons.map((index) => (
            <path
              key={index}
              vectorEffect="non-scaling-stroke"
              transform={`translate(0 ${index * 34 - 300})`}
              d="M-120 590 C120 350 300 770 520 548 C760 306 870 236 1040 410 C1190 564 1300 760 1560 438"
            />
          ))}
        </g>

        <g className="home-flow-lines__cross" fill="none" stroke="url(#home-flow-soft)" strokeWidth="1.8">
          {crossLines.map((index) => (
            <path
              key={index}
              vectorEffect="non-scaling-stroke"
              transform={`translate(${index * 48 - 280} 0)`}
              d="M430 -120 C670 120 350 300 620 474 C900 654 1220 570 1510 910"
            />
          ))}
        </g>

        <path
          className="home-flow-lines__signal home-flow-lines__signal--one"
          vectorEffect="non-scaling-stroke"
          d="M-120 650 C130 388 330 800 555 560 C785 316 900 300 1060 444 C1230 595 1340 735 1560 450"
        />
        <path
          className="home-flow-lines__signal home-flow-lines__signal--two"
          vectorEffect="non-scaling-stroke"
          d="M-80 330 C250 120 400 510 670 360 C940 210 1100 150 1510 335"
        />
      </svg>
      <div className="home-flow-lines__vignette" />
    </div>
  );
}
