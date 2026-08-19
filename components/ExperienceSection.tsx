import { SectionLabel } from "@/components/SectionLabel";
import { experience } from "@/data/experience";
import { siteConfig } from "@/data/site";

export function ExperienceSection() {
  return (
    <section
      className="experience-section page-shell section-block"
      aria-labelledby="experience"
    >
      <SectionLabel id="experience" index="03">
        Experience
      </SectionLabel>

      <div className="experience-layout">
        <div className="experience-intro" data-reveal="copy">
          <p className="experience-statement">
            Growing through products of increasing depth and complexity.
          </p>
          <a className="text-link resume-link" href={siteConfig.resumeUrl} download>
            Download résumé <span aria-hidden="true">↗</span>
          </a>
        </div>

        <ol className="experience-list" data-reveal="rows">
          {experience.map((item, index) => (
            <li className="experience-row" key={`${item.company}-${item.period}`}>
              <span className="experience-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="experience-role">
                <h3>{item.company}</h3>
                <p>
                  {item.role}
                  {item.detail ? ` · ${item.detail}` : ""}
                </p>
              </div>
              <time>{item.period}</time>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
