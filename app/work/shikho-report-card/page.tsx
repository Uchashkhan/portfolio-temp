import type { Metadata } from "next";
import { CursorController } from "@/components/CursorController";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionController } from "@/components/MotionController";
import { ReportCardCaseStudy } from "@/components/work/ReportCardCaseStudy";

export const metadata: Metadata = { title: "Shikho Report Card — Uchash Khan", description: "A shipped learning-performance experience for Shikho students." };

export default function ShikhoReportCardPage() {
  return <><MotionController /><CursorController /><a className="skip-link" href="#main-content">Skip to main content</a><Header /><ReportCardCaseStudy /><Footer /></>;
}
