import { SectionLabel } from "@/components/SectionLabel";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section className="contact-section page-shell section-block" aria-labelledby="contact">
      <SectionLabel id="contact" index="04">
        Contact
      </SectionLabel>
      <div className="contact-layout" data-reveal="contact">
        <p className="contact-statement">Let&apos;s build thoughtful products together.</p>
        <div className="contact-actions">
          <p className="contact-support">
            If you&apos;re building a thoughtful product, I&apos;d love to hear about it.
          </p>
          <a className="contact-primary" href={`mailto:${siteConfig.email}`}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-secondary">
            <a className="text-link" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <a
              className="text-link"
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
