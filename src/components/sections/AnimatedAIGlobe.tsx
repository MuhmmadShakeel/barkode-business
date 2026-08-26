export function AnimatedAIGlobe() {
  return (
    <div className="ai-globe-stage" aria-hidden>
      <div className="ai-globe-halo" />
      <svg viewBox="0 0 640 360" className="ai-globe-svg" role="presentation">
        <defs>
          <radialGradient id="globe-core" cx="35%" cy="28%" r="76%">
            <stop offset="0%" stopColor="#303030" />
            <stop offset="48%" stopColor="#101010" />
            <stop offset="100%" stopColor="#020202" />
          </radialGradient>
          <linearGradient id="gold-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f4d58b" />
            <stop offset="52%" stopColor="#d7a93f" />
            <stop offset="100%" stopColor="#8d651b" />
          </linearGradient>
          <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <clipPath id="globe-clip"><circle cx="320" cy="180" r="105" /></clipPath>
        </defs>

        <g className="ai-globe-orbit ai-globe-orbit--outer" fill="none" stroke="url(#gold-line)" strokeWidth="1.4">
          <ellipse cx="320" cy="180" rx="238" ry="92" transform="rotate(-16 320 180)" />
          <ellipse cx="320" cy="180" rx="218" ry="116" transform="rotate(31 320 180)" opacity=".58" />
          <path d="M105 96 188 49 310 37 435 68 529 144 515 239 418 309 288 323 167 285 91 206Z" opacity=".45" />
        </g>

        <circle cx="320" cy="180" r="105" fill="url(#globe-core)" />
        <circle cx="320" cy="180" r="105" fill="none" stroke="#d7a93f" strokeOpacity=".42" strokeWidth="1.5" />

        <g className="ai-globe-core" clipPath="url(#globe-clip)" fill="none" stroke="url(#gold-line)">
          <ellipse cx="320" cy="180" rx="78" ry="105" strokeOpacity=".72" />
          <ellipse cx="320" cy="180" rx="39" ry="105" strokeOpacity=".48" />
          <ellipse cx="320" cy="180" rx="105" ry="73" strokeOpacity=".7" />
          <ellipse cx="320" cy="180" rx="105" ry="35" strokeOpacity=".46" />
          <path d="M224 154 266 126 305 139 342 111 386 131 416 166 390 203 351 220 317 205 278 230 239 207Z" strokeWidth="2" />
          <path d="m266 126 12 104m27-91 12 66m25-94 9 109m35-89 4 72m-151-49 177 12m-188 39 162-2" strokeOpacity=".48" />
        </g>

        <g className="ai-globe-orbit ai-globe-orbit--nodes" fill="#e8bc58" filter="url(#gold-glow)">
          <circle cx="105" cy="96" r="5" />
          <circle cx="188" cy="49" r="3.5" />
          <circle cx="435" cy="68" r="4" />
          <circle cx="529" cy="144" r="6" />
          <circle cx="515" cy="239" r="3.5" />
          <circle cx="418" cy="309" r="5" />
          <circle cx="167" cy="285" r="4" />
          <circle cx="91" cy="206" r="3" />
        </g>

        <circle className="ai-globe-satellite" cx="495" cy="85" r="15" fill="#090909" stroke="#e8bc58" strokeWidth="2" />
        <circle className="ai-globe-satellite ai-globe-satellite--small" cx="136" cy="244" r="9" fill="#090909" stroke="#e8bc58" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
