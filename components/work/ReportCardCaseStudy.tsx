import Image from "next/image";
import { reportCardCaseStudy } from "@/data/report-card-case-study";

function ReportVisual({ variant, alt, src }: { variant: string; alt: string; src: string }) {
  return (
    <div className={`report-visual report-visual--${variant}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 767px) 100vw, 70vw" />
    </div>
  );
}

export function ReportCardCaseStudy() {
  const [hierarchy, clarity, action] = reportCardCaseStudy.stories;

  return (
    <main id="main-content" className="case-study report-case">
      <section className="case-hero page-shell">
        <a className="case-back text-link" href="/#selected-work"><span aria-hidden="true">←</span> Selected work</a>
        <p className="eyebrow case-eyebrow">{reportCardCaseStudy.eyebrow}</p>
        <div className="case-hero-copy">
          <h1>{reportCardCaseStudy.title}</h1>
          <p className="case-hero-headline">{reportCardCaseStudy.headline}</p>
          <p className="case-hero-intro">{reportCardCaseStudy.introduction}</p>
        </div>
        <dl className="case-metadata">
          {reportCardCaseStudy.metadata.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
        </dl>
        <div className="report-hero-visual" data-reveal="frame">
          <Image src="/projects/report-card-case/progress-overview.png" alt="Shikho Report Card progress overview" width={1536} height={916} priority sizes="(max-width: 767px) 100vw, 96vw" />
        </div>
      </section>

      <section className="case-context page-shell section-block" data-reveal="copy"><span className="eyebrow">Context</span><p>{reportCardCaseStudy.context}</p></section>
      <section className="case-challenge page-shell section-block" data-reveal="copy"><span className="eyebrow">The core challenge</span><h2>{reportCardCaseStudy.challenge.title}</h2><p>{reportCardCaseStudy.challenge.copy}</p></section>

      <section className="report-story report-story--hierarchy page-shell section-block">
        <div className="case-story-copy" data-reveal="copy"><span className="eyebrow">{hierarchy.number} / Design decision</span><h2>{hierarchy.title}</h2><p>{hierarchy.copy}</p></div>
        <div className="report-hierarchy-visual" data-reveal="frame"><ReportVisual variant="overview" src="/projects/report-card-case/subject-detail.png" alt="Shikho Report Card subject-level performance" /><ReportVisual variant="detail" src="/projects/report-card-case/chapter-detail.png" alt="Shikho Report Card chapter-level performance" /></div>
      </section>

      <section className="report-story report-story--clarity page-shell section-block">
        <div className="report-clarity-visual" data-reveal="frame"><ReportVisual variant="metrics" src="/projects/report-card-case/home.png" alt="Shikho Report Card overview with score and rank explanation" /></div>
        <div className="case-story-copy" data-reveal="copy"><span className="eyebrow">{clarity.number} / Design decision</span><h2>{clarity.title}</h2><p>{clarity.copy}</p></div>
      </section>

      <section className="report-story report-story--action page-shell section-block">
        <div className="case-story-copy" data-reveal="copy"><span className="eyebrow">{action.number} / Design decision</span><h2>{action.title}</h2><p>{action.copy}</p></div>
        <div className="report-action-visual" data-reveal="frame"><ReportVisual variant="action" src="/projects/report-card-case/weak-topics.png" alt="Shikho Report Card weak topics" /><ReportVisual variant="support" src="/projects/report-card-case/weak-topic-info.png" alt="Shikho Report Card explanation and action guidance for weak topics" /></div>
      </section>

      <section className="case-system page-shell section-block" data-reveal="panel"><span className="eyebrow">Designed for changing levels of data</span><div className="case-system-content"><p>{reportCardCaseStudy.system}</p><div className="case-system-screen report-system-screens"><ReportVisual variant="trend" src="/projects/report-card-case/performance-trend.png" alt="Shikho Report Card performance trend" /><ReportVisual variant="state" src="/projects/report-card-case/empty-state.png" alt="Shikho Report Card empty state" /></div></div></section>
      <section className="report-leaderboard page-shell section-block">
        <div className="case-story-copy" data-reveal="copy"><span className="eyebrow">Performance in context</span><h2>Showing rank without making it the whole report.</h2><p>The Report Card also includes a dedicated leaderboard view, giving students a separate place to explore nationwide ranking alongside the more personal performance and learning-detail views.</p></div>
        <div className="report-leaderboard-visual" data-reveal="frame"><ReportVisual variant="leaderboard" src="/projects/report-card-case/leaderboard.png" alt="Shikho Report Card nationwide leaderboard" /></div>
      </section>
      <section className="case-closing page-shell section-block"><div data-reveal="copy"><span className="eyebrow">My role</span><ul>{reportCardCaseStudy.role.map((item) => <li key={item}>{item}</li>)}</ul></div><div data-reveal="copy"><span className="eyebrow">Outcome</span><p>{reportCardCaseStudy.outcome}</p></div></section>
      <section className="case-next page-shell section-block" data-reveal="contact"><span className="eyebrow">Next project</span><span className="case-next-disabled">CADEA — CAD Workflows <span aria-hidden="true">→</span></span></section>
    </main>
  );
}
