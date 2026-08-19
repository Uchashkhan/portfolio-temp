import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer page-shell">
      <span>Last updated 2026</span>
      <span>Designed &amp; built by Uchash</span>
      <span>{siteConfig.location}</span>
    </footer>
  );
}
