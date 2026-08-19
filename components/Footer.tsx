import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer page-shell">
      <span>
        <strong>{siteConfig.name}</strong>
        <small>{siteConfig.role} · {siteConfig.location}</small>
      </span>
      <span>Designed &amp; built by Uchash</span>
      <span>2026</span>
    </footer>
  );
}
