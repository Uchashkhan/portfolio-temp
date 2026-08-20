import Image from "next/image";
import { shikhoCaseStudy } from "@/data/shikho-case-study";
import { projects } from "@/data/projects";

export function ShikhoCaseStudy() {
  const [routineStory, subjectsStory, progressStory] = shikhoCaseStudy.stories;
  const nextProject = projects.find((project) => project.slug === "shikho-report-card");

  return (
    <main id="main-content" className="case-study">
      <section className="case-hero page-shell">
        <a className="case-back text-link" href="/#selected-work" data-reveal="copy">
          <span aria-hidden="true">←</span> Selected work
        </a>
        <p className="eyebrow case-eyebrow" data-reveal="label">{shikhoCaseStudy.eyebrow}</p>
        <div className="case-hero-copy" data-reveal="copy">
          <h1>{shikhoCaseStudy.title}</h1>
          <p className="case-hero-headline">{shikhoCaseStudy.headline}</p>
          <p className="case-hero-intro">{shikhoCaseStudy.introduction}</p>
        </div>
        <dl className="case-metadata" data-reveal="rows">
          {shikhoCaseStudy.metadata.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="case-hero-visual" data-reveal="frame">
          <Image
            className="case-hero-overview"
            src="/projects/shikho-case/homepage-overview.png"
            alt="Shikho homepage showing the student overview, routine, subjects, course progress and features"
            width={3266}
            height={1680}
            priority
            sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1440px) calc(100vw - 4rem), 1600px"
          />
        </div>
      </section>

      <section className="case-context page-shell section-block" data-reveal="copy">
        <span className="eyebrow">Context</span>
        <p>{shikhoCaseStudy.context}</p>
      </section>

      <section className="case-challenge page-shell section-block" data-reveal="copy">
        <span className="eyebrow">The core challenge</span>
        <h2>{shikhoCaseStudy.challenge.title}</h2>
        <p>{shikhoCaseStudy.challenge.copy}</p>
      </section>

      <section className="case-story case-story--routine page-shell section-block">
        <div className="case-story-copy" data-reveal="copy">
          <span className="eyebrow">{routineStory.number} / Design decision</span>
          <h2>{routineStory.title}</h2>
          <p>{routineStory.copy}</p>
        </div>
        <div className="case-routine-visual" data-reveal="frame">
          <div className="case-routine-main">
            <Image src={routineStory.images[0]} alt={routineStory.alt[0]} width={2992} height={1972} />
          </div>
        </div>
      </section>

      <section className="case-story case-story--subjects page-shell section-block">
        <div className="case-subjects-visual" data-reveal="frame">
          <Image src={subjectsStory.images[0]} alt={subjectsStory.alt[0]} width={976} height={1846} />
        </div>
        <div className="case-story-copy" data-reveal="copy">
          <span className="eyebrow">{subjectsStory.number} / Design decision</span>
          <h2>{subjectsStory.title}</h2>
          <p>{subjectsStory.copy}</p>
        </div>
      </section>

      <section className="case-story case-story--progress page-shell section-block">
        <div className="case-progress-visual" data-reveal="frame">
          <Image
            src="/projects/shikho-case/progress-features.png"
            alt="Shikho course progress and feature modules"
            width={2992}
            height={1972}
          />
        </div>
        <div className="case-story-copy" data-reveal="copy">
          <span className="eyebrow">{progressStory.number} / Design decision</span>
          <h2>{progressStory.title}</h2>
          <p>{progressStory.copy}</p>
        </div>
      </section>

      <section className="case-system page-shell section-block" data-reveal="panel">
        <span className="eyebrow">Designed as a system, not a fixed screen</span>
        <div className="case-system-content">
          <p>{shikhoCaseStudy.system}</p>
          <div className="case-system-screen">
            <Image
              src="/projects/shikho-case/home-system-state.png"
              alt="Shikho mobile homepage welcome and profile setup state"
              width={1209}
              height={863}
            />
          </div>
        </div>
      </section>

      <section className="case-closing page-shell section-block">
        <div data-reveal="copy">
          <span className="eyebrow">My role</span>
          <ul>
            {shikhoCaseStudy.role.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <div data-reveal="copy">
          <span className="eyebrow">Outcome</span>
          <p>{shikhoCaseStudy.outcome}</p>
        </div>
      </section>

      <section className="case-next page-shell section-block" data-reveal="contact">
        <span className="eyebrow">Next project</span>
        {nextProject?.href && (
          <a className="case-next-link" href={nextProject.href}>
            {nextProject.title} <span aria-hidden="true">→</span>
          </a>
        )}
      </section>
    </main>
  );
}
