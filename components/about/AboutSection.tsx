import { SectionLabel } from "@/components/SectionLabel";
import { ProfileVisual } from "./ProfileVisual";

const details = [
  { label: "Currently", value: "Product Designer at Shikho" },
  { label: "Based in", value: "Dhaka, Bangladesh" },
  {
    label: "Focus",
    value: "Product Design · Interaction Design · Product Thinking",
  },
];

export function AboutSection() {
  return (
    <section className="about-section page-shell section-block" aria-labelledby="about">
      <SectionLabel id="about" index="02">
        About
      </SectionLabel>

      <div className="about-grid">
        <ProfileVisual />

        <div className="about-stack">
          <div className="about-copy-panel">
            <p className="about-lead">
              Hi, I&apos;m Uchash. I&apos;m a Product Designer focused on turning
              complicated systems into experiences people can understand and use
              naturally.
            </p>
            <p>
              My work has taken me across EdTech, FinTech, engineering software
              and e-commerce — from consumer mobile products to complex
              professional tools.
            </p>
          </div>

          <dl className="about-details">
            {details.map((item) => (
              <div className="detail-row" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="workflow-note">
            <span className="eyebrow">Working style</span>
            <p>
              I use AI-assisted prototyping and design-to-code workflows to move
              quickly between ideas, prototypes and production conversations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
