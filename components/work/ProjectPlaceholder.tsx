import type { Project } from "@/data/projects";

type ProjectPlaceholderProps = {
  project: Project;
  index: number;
};

export function ProjectPlaceholder({ project, index }: ProjectPlaceholderProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`project-placeholder placeholder--${project.theme}`}
      aria-label={`${project.title} graphic project placeholder`}
      role="img"
    >
      <div className="placeholder-top">
        <span>{number}</span>
        <span>{project.year}</span>
      </div>

      <div className="placeholder-mark" aria-hidden="true">
        {project.theme === "paper" ? (
          <>
            <span>LEARN</span>
            <span>SEE</span>
            <span>GROW</span>
          </>
        ) : project.theme === "stone" ? (
          <>
            <span>CAD</span>
            <span className="placeholder-line" />
            <span>FLOW</span>
          </>
        ) : (
          <span>{project.monogram}</span>
        )}
      </div>

      <div className="placeholder-bottom">
        <span>{project.category}</span>
        <span>Portfolio image / pending</span>
      </div>
    </div>
  );
}
