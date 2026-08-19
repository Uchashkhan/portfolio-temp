import { SectionLabel } from "@/components/SectionLabel";
import { ProfileVisual } from "./ProfileVisual";

const details = [
  { label: "Currently", value: "Product Designer\nShikho" },
  { label: "Based in", value: "Dhaka, Bangladesh" },
  {
    label: "Focus",
    value: "Product Design\nInteraction Design\nProduct Thinking",
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

        <div className="about-stack" data-reveal="panel">
          <div className="about-copy-panel">
            <p className="about-lead">I like making complicated things feel obvious.</p>
            <p>
              I&apos;m Uchash, a Product Designer based in Dhaka.
            </p>
            <p>
              I&apos;ve worked across <strong>EdTech, FinTech, engineering software, and e-commerce</strong> — often on products with a lot happening beneath the surface.
            </p>
            <p>
              I enjoy finding the structure inside that complexity, removing what gets in the way, and shaping experiences that feel natural to use.
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
            <span className="eyebrow">How I work</span>
            <p>
              I use AI-assisted prototyping and design-to-code workflows to move faster from <strong>idea → prototype → product</strong> — without treating speed as a substitute for design judgment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
