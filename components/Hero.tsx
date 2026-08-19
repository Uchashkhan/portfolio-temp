export function Hero() {
  return (
    <section className="hero page-shell" aria-labelledby="hero-title">
      <div className="hero-inner">
        <p className="eyebrow hero-eyebrow">Product Designer</p>
        <h1 id="hero-title">
          I design digital products that turn complex problems into clear,
          intuitive experiences.
        </h1>
        <div className="hero-foot">
          <p>
            Currently designing learning experiences at Shikho. Based in Dhaka,
            Bangladesh.
          </p>
          <a className="scroll-cue" href="#selected-work">
            Scroll to explore <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
