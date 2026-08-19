import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apurba Jalal Uchash — Product Designer",
  description:
    "Product Designer in Dhaka, Bangladesh, creating clear and intuitive digital product experiences across EdTech, FinTech and complex professional tools.",
  openGraph: {
    title: "Apurba Jalal Uchash — Product Designer",
    description:
      "Selected product design work, experience and contact information.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
