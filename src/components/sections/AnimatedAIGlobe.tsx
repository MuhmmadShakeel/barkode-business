export function AnimatedAIGlobe({ copy }: { copy: { title: string; detail: string }[] }) {
  return (
    <div className="ai-globe-stage" aria-hidden>
      <div className="automation-panel">
        <div className="automation-panel__step"><span className="automation-panel__number">01</span><span>{copy[0].title}</span><small>{copy[0].detail}</small></div>
        <div className="automation-panel__line" />
        <div className="automation-panel__step automation-panel__step--active"><span className="automation-panel__number">02</span><span>{copy[1].title}</span><small>{copy[1].detail}</small></div>
        <div className="automation-panel__line" />
        <div className="automation-panel__step"><span className="automation-panel__number">03</span><span>{copy[2].title}</span><small>{copy[2].detail}</small></div>
      </div>
    </div>
  );
}
