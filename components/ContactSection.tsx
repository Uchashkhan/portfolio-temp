import { SectionLabel } from "@/components/SectionLabel";
import { siteConfig } from "@/data/site";

export function ContactSection() {
  return (
    <section className="contact-section page-shell section-block" aria-labelledby="contact">
      <SectionLabel id="contact" index="04">
        Contact
      </SectionLabel>
      <div className="contact-layout" data-reveal="contact">
        <p className="contact-statement">Have a product problem worth solving?</p>
        <div className="contact-actions">
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
