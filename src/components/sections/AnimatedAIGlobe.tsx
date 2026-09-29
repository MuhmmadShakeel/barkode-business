import { BriefcaseBusiness, PlugZap, UserCheck } from "lucide-react";

type AutomationCopy = {
  title: string;
  detail: string;
};

type PrincipleCopy = {
  title: string;
  detail: string;
};

const principleIcons = [BriefcaseBusiness, UserCheck, PlugZap];

export function AnimatedAIGlobe({
  copy,
  principles,
}: {
  copy: AutomationCopy[];
  principles: PrincipleCopy[];
}) {
  return (
    <div className="ai-globe-stage">
      <div className="automation-panel">
        <div className="automation-panel__step"><span className="automation-panel__number">01</span><span>{copy[0].title}</span><small>{copy[0].detail}</small></div>
        <div className="automation-panel__line" />
        <div className="automation-panel__step automation-panel__step--active"><span className="automation-panel__number">02</span><span>{copy[1].title}</span><small>{copy[1].detail}</small></div>
        <div className="automation-panel__line" />
        <div className="automation-panel__step"><span className="automation-panel__number">03</span><span>{copy[2].title}</span><small>{copy[2].detail}</small></div>
      </div>
      <section className="automation-principles" aria-label="AI workflow principles">
        {principles.map((principle, index) => {
          const Icon = principleIcons[index];
          return (
            <div key={principle.title} className="automation-principles__item">
              <Icon aria-hidden className="size-4 text-accent-bright" strokeWidth={1.7} />
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.detail}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
