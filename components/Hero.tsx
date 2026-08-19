export function Hero() {
  return (
    <section className="hero page-shell" aria-labelledby="hero-title">
      <div className="hero-inner">
        <p className="eyebrow hero-eyebrow">Product Designer</p>
        <h1 id="hero-title">
          <span>I make digital</span> <span>products easier</span>{" "}
          <span>to understand</span> <span>and better to use.</span>
        </h1>
        <div className="hero-foot">
          <p>
            <span>
              Currently designing learning experiences at <strong>Shikho</strong>.
            </span>
            <span>Previously worked across fintech, engineering software, and e-commerce.</span>
            <span>Based in Dhaka, Bangladesh.</span>
          </p>
          <a className="scroll-cue" href="#selected-work">
            Scroll to explore <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
