const moreWorkUrl =
  "https://www.figma.com/design/19G6bEKqEvSm4SDCmZGFlL/Portfolio-Showcase?node-id=0-1&t=TMuC3Vo8aXR9dhTM-1";

export function MoreWorkCta() {
  return (
    <section className="more-work page-shell" aria-labelledby="more-work-title">
      <div className="more-work-inner" data-reveal="copy">
        <div>
          <p className="eyebrow" id="more-work-title">More work</p>
          <p>More projects, flows and explorations beyond the selected work above.</p>
        </div>
        <a
          className="text-link more-work-link"
          href={moreWorkUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore more work in Figma (opens in a new tab)"
        >
          Explore more work <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
