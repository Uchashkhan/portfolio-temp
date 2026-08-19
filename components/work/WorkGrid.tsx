import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "./ProjectCard";

export function WorkGrid() {
  return (
    <section
      className="work-section page-shell section-block"
      aria-labelledby="selected-work"
    >
      <SectionLabel id="selected-work" index="01">
        Selected work
      </SectionLabel>
      <div className="work-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
