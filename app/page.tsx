import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CursorController } from "@/components/CursorController";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MoreWorkCta } from "@/components/MoreWorkCta";
import { MotionController } from "@/components/MotionController";
import { WorkGrid } from "@/components/work/WorkGrid";

export default function Home() {
  return (
    <>
      <MotionController />
      <CursorController />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <WorkGrid />
        <MoreWorkCta />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
