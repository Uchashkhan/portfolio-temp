import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectPlaceholder } from "./ProjectPlaceholder";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectVisual({ project, index }: ProjectCardProps) {
  return (
    <div className={`project-visual ratio--${project.aspectRatio}`}>
      {project.image ? (
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={
            project.gridSpan === "full"
              ? "(max-width: 767px) 100vw, 94vw"
              : project.gridSpan === "wide"
                ? "(max-width: 767px) 100vw, 58vw"
                : "(max-width: 767px) 100vw, 42vw"
          }
          className="project-image"
        />
      ) : (
        <ProjectPlaceholder project={project} index={index} />
      )}
      {project.href ? (
        <span className="project-view">
          View project <span aria-hidden="true">↗</span>
        </span>
      ) : null}
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const content = (
    <>
      <ProjectVisual project={project} index={index} />
      <div className="project-copy">
        <div className="project-heading-row">
          <h3>{project.title}</h3>
          <span>{project.year}</span>
        </div>
        <p className="project-category">{project.category}</p>
        <p className="project-description">{project.description}</p>
      </div>
    </>
  );

  return (
    <article
      className={`project project--${project.gridSpan} project--${project.aspectRatio}`}
    >
      {project.href ? (
        <a href={project.href} className="project-link">
          {content}
        </a>
      ) : (
        <div className="project-static">{content}</div>
      )}
    </article>
  );
}
