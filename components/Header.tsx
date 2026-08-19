import { siteConfig } from "@/data/site";

const headerLinks = [
  { label: "LinkedIn", href: siteConfig.linkedinUrl, external: true },
  { label: "Résumé", href: siteConfig.resumeUrl, external: false },
  { label: "Email", href: `mailto:${siteConfig.email}`, external: false },
];

export function Header() {
  return (
    <header className="site-header page-shell" aria-label="Portfolio header">
      <a className="identity" href="#main-content" aria-label="Go to introduction">
        <span className="avatar" aria-hidden="true">
          AU
        </span>
        <span className="identity-copy">
          <strong>{siteConfig.name}</strong>
          <span>{siteConfig.role}</span>
        </span>
      </a>

      <nav className="header-links" aria-label="Contact and profile links">
        {headerLinks.map((link) => (
          <a
            key={link.label}
            className={`text-link header-link header-link--${link.label.toLowerCase()}`}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
          >
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
