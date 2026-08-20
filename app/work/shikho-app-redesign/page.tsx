import type { Metadata } from "next";
import { CursorController } from "@/components/CursorController";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionController } from "@/components/MotionController";
import { ShikhoCaseStudy } from "@/components/work/ShikhoCaseStudy";

export const metadata: Metadata = {
  title: "Shikho App Redesign — Uchash Khan",
  description: "A shipped redesign of Shikho’s mobile student homepage.",
};

export default function ShikhoAppRedesignPage() {
  return (
    <>
      <MotionController />
      <CursorController />
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <ShikhoCaseStudy />
      <Footer />
    </>
  );
}
