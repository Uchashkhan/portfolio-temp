import { SectionLabel } from "@/components/SectionLabel";
import { ProfileVisual } from "./ProfileVisual";

const details = [
  { label: "Currently", value: "Product Designer · Shikho" },
  { label: "Based in", value: "Dhaka, Bangladesh" },
  {
    label: "Focus",
    value: "Product Design · Interaction Design · Product Thinking",
  },
];

const domains = ["EdTech", "FinTech", "B2B / Engineering Software", "E-commerce"];

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
            <p className="about-greeting">Hi, I&apos;m Uchash.</p>
            <p>I&apos;m a Product Designer based in Dhaka, currently working at Shikho. I&apos;ve designed products across education, fintech, engineering software and e-commerce — from consumer mobile experiences to tools built for technical users.</p>
          </div>

          <dl className="about-details">
            {details.map((item) => (
              <div className="detail-row" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="across-panel">
            <span className="eyebrow">Across</span>
            <ul>
              {domains.map((domain) => <li key={domain}>{domain}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
