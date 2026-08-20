import Image from "next/image";
import { shikhoCaseStudy } from "@/data/shikho-case-study";

export function ShikhoCaseStudy() {
  const [routineStory, subjectsStory, progressStory] = shikhoCaseStudy.stories;

  return (
    <main id="main-content" className="case-study">
      <section className="case-hero page-shell">
        <a className="case-back text-link" href="/#selected-work">
          <span aria-hidden="true">←</span> Selected work
        </a>
        <p className="eyebrow case-eyebrow">{shikhoCaseStudy.eyebrow}</p>
        <div className="case-hero-copy">
          <h1>{shikhoCaseStudy.title}</h1>
          <p className="case-hero-headline">{shikhoCaseStudy.headline}</p>
          <p className="case-hero-intro">{shikhoCaseStudy.introduction}</p>
        </div>
        <dl className="case-metadata">
          {shikhoCaseStudy.metadata.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="case-hero-visual" data-reveal="frame">
          <div className="case-hero-screen case-hero-screen--primary">
            <Image
              src="/projects/shikho-case/priority-subjects.png"
              alt="Shikho mobile homepage with prioritized subjects"
              width={381}
              height={741}
              priority
            />
          </div>
          <div className="case-hero-screen case-hero-screen--routine">
            <Image
              src="/projects/shikho-case/routine.png"
              alt="Shikho daily routine module"
              width={374}
              height={178}
              priority
            />
          </div>
          <div className="case-hero-screen case-hero-screen--progress">
            <Image
              src="/projects/shikho-case/course-progress.png"
              alt="Shikho course progress module"
              width={372}
              height={381}
              priority
            />
          </div>
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
            <Image src={routineStory.images[0]} alt={routineStory.alt[0]} width={374} height={178} />
          </div>
          <div className="case-routine-cards">
            <Image src={routineStory.images[1]} alt={routineStory.alt[1]} width={396} height={128} />
          </div>
        </div>
      </section>

      <section className="case-story case-story--subjects page-shell section-block">
        <div className="case-subjects-visual" data-reveal="frame">
          <Image src={subjectsStory.images[0]} alt={subjectsStory.alt[0]} width={381} height={741} />
        </div>
        <div className="case-story-copy" data-reveal="copy">
          <span className="eyebrow">{subjectsStory.number} / Design decision</span>
          <h2>{subjectsStory.title}</h2>
          <p>{subjectsStory.copy}</p>
        </div>
      </section>

      <section className="case-story case-story--progress page-shell section-block">
        <div className="case-progress-visual" data-reveal="frame">
          <div><Image src={progressStory.images[0]} alt={progressStory.alt[0]} width={372} height={381} /></div>
          <div><Image src={progressStory.images[1]} alt={progressStory.alt[1]} width={373} height={389} /></div>
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
              src="/projects/shikho-case/home-hero.png"
              alt="Shikho mobile homepage upper area"
              width={412}
              height={375}
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
        <span className="case-next-disabled">Shikho Report Card <span aria-hidden="true">→</span></span>
      </section>
    </main>
  );
}
