import Image from "next/image";
import { reportCardCaseStudy } from "@/data/report-card-case-study";
import { projects } from "@/data/projects";

function ReportVisual({ variant, alt, src }: { variant: string; alt: string; src: string }) {
  return (
    <div className={`report-visual report-visual--${variant}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 767px) 100vw, 70vw" />
    </div>
  );
}

export function ReportCardCaseStudy() {
  const [hierarchy, clarity, action] = reportCardCaseStudy.stories;
  const nextProject = projects.find((project) => project.slug === "cadea-cad-workflows");
  const isExternalNextProject = nextProject?.href?.startsWith("http");

  return (
    <main id="main-content" className="case-study report-case">
      <section className="case-hero page-shell">
        <a className="case-back text-link" href="/#selected-work" data-reveal="copy"><span aria-hidden="true">←</span> Selected work</a>
        <p className="eyebrow case-eyebrow" data-reveal="label">{reportCardCaseStudy.eyebrow}</p>
        <div className="case-hero-copy" data-reveal="copy">
          <h1>{reportCardCaseStudy.title}</h1>
          <p className="case-hero-headline">{reportCardCaseStudy.headline}</p>
          <p className="case-hero-intro">{reportCardCaseStudy.introduction}</p>
        </div>
        <dl className="case-metadata" data-reveal="rows">
          {reportCardCaseStudy.metadata.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
        <div className="report-hero-visual" data-reveal="frame">
          <Image src="/projects/report-card-case/report-card-overview.png" alt="Shikho Report Card overview with scores, progress, trends and subject performance" width={3266} height={1680} priority sizes="(max-width: 767px) 100vw, 96vw" />
        </div>
      </section>

      <section className="case-context page-shell section-block" data-reveal="copy"><span className="eyebrow">Context</span><p>{reportCardCaseStudy.context}</p></section>
      <section className="case-challenge page-shell section-block" data-reveal="copy"><span className="eyebrow">The core challenge</span><h2>{reportCardCaseStudy.challenge.title}</h2><p>{reportCardCaseStudy.challenge.copy}</p></section>

      <section className="report-story report-story--hierarchy page-shell section-block">
        <div className="case-story-copy" data-reveal="copy"><span className="eyebrow">{hierarchy.number} / Design decision</span><h2>{hierarchy.title}</h2><p>{hierarchy.copy}</p></div>
        <div className="report-hierarchy-visual" data-reveal="frame"><Image src="/projects/report-card-case/report-performance-breakdown.png" alt="Shikho Report Card subject performance and chapter breakdown" width={2992} height={1972} sizes="(max-width: 767px) 100vw, 60vw" /></div>
      </section>

      <section className="report-story report-story--clarity page-shell section-block">
        <div className="report-clarity-visual" data-reveal="frame"><Image src="/projects/report-card-case/report-focus-areas.png" alt="Shikho Report Card focus areas for missed classes and weak topics" width={2992} height={1972} sizes="(max-width: 767px) 100vw, 60vw" /></div>
        <div className="case-story-copy" data-reveal="copy"><span className="eyebrow">{clarity.number} / Design decision</span><h2>{clarity.title}</h2><p>{clarity.copy}</p></div>
      </section>

      <section className="report-story report-story--action page-shell section-block">
        <div className="case-story-copy" data-reveal="copy"><span className="eyebrow">{action.number} / Design decision</span><h2>{action.title}</h2><p>{action.copy}</p></div>
        <div className="report-action-visual" data-reveal="frame"><Image src="/projects/report-card-case/report-improvement-guidance.png" alt="Shikho Report Card improvement areas and recommended learning content" width={2992} height={1972} sizes="(max-width: 767px) 100vw, 60vw" /></div>
      </section>

      <section className="case-system page-shell section-block" data-reveal="panel"><span className="eyebrow">Designed for changing levels of data</span><div className="case-system-content"><p>{reportCardCaseStudy.system}</p><div className="case-system-screen report-system-visual"><Image src="/projects/report-card-case/report-performance-trend.png" alt="Shikho Report Card quarter-by-quarter performance trend" width={1826} height={1972} sizes="(max-width: 767px) 100vw, 32vw" /></div></div></section>
      <section className="report-leaderboard page-shell section-block">
        <div className="case-story-copy" data-reveal="copy"><span className="eyebrow">Performance in context</span><h2>Showing rank without making it the whole report.</h2><p>The Report Card also includes a dedicated leaderboard view, giving students a separate place to explore nationwide ranking alongside the more personal performance and learning-detail views.</p></div>
        <div className="report-leaderboard-visual" data-reveal="frame"><ReportVisual variant="leaderboard" src="/projects/report-card-case/report-leaderboard-detail.png" alt="Shikho Report Card nationwide leaderboard" /></div>
      </section>
      <section className="case-closing page-shell section-block"><div data-reveal="copy"><span className="eyebrow">My role</span><ul>{reportCardCaseStudy.role.map((item) => <li key={item}>{item}</li>)}</ul></div><div data-reveal="copy"><span className="eyebrow">Outcome</span><p>{reportCardCaseStudy.outcome}</p></div></section>
      <section className="case-next page-shell section-block" data-reveal="contact">
        <span className="eyebrow">Next project</span>
        {nextProject?.href && (
          <a
            className="case-next-link"
            href={nextProject.href}
            target={isExternalNextProject ? "_blank" : undefined}
            rel={isExternalNextProject ? "noopener noreferrer" : undefined}
          >
            {nextProject.title} <span aria-hidden="true">→</span>
          </a>
        )}
      </section>
    </main>
  );
}
