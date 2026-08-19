import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorkGrid } from "@/components/work/WorkGrid";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <WorkGrid />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
