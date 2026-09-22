export function AnimatedAIGlobe() {
  return (
    <div className="ai-globe-stage" aria-hidden>
      <div className="automation-panel">
        <div className="automation-panel__step"><span className="automation-panel__number">01</span><span>Capture</span><small>Messages, files &amp; requests</small></div>
        <div className="automation-panel__line" />
        <div className="automation-panel__step automation-panel__step--active"><span className="automation-panel__number">02</span><span>Interpret</span><small>AI routes the right context</small></div>
        <div className="automation-panel__line" />
        <div className="automation-panel__step"><span className="automation-panel__number">03</span><span>Act</span><small>Teams and tools stay aligned</small></div>
      </div>
    </div>
  );
}
