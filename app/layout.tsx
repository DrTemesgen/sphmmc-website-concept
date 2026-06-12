import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/assistant/AIAssistant";
import DemoBanner from "@/components/DemoBanner";
import { INSTITUTION } from "@/data/institution";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sphmmc.edu.et"),
  title: {
    default: `${INSTITUTION.shortName} | ${INSTITUTION.tagline}`,
    template: `%s | ${INSTITUTION.acronym}`,
  },
  description:
    "Saint Paul's Hospital Millennium Medical College (SPHMMC) — Ethiopia's premier academic medical centre. 700+ bed teaching hospital, schools of Medicine, Nursing & Midwifery, Public Health and Pharmacy, specialty centres, research, and private-wing specialist booking.",
  keywords: [
    "SPHMMC",
    "St Paul Hospital",
    "Millennium Medical College",
    "Addis Ababa hospital",
    "Ethiopia medical college",
    "book doctor appointment Ethiopia",
  ],
  openGraph: {
    title: INSTITUTION.shortName,
    description: INSTITUTION.tagline,
    type: "website",
    locale: "en_US",
    siteName: INSTITUTION.acronym,
  },
  // This is an unofficial concept demo — keep it out of search indexes.
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={robotoCondensed.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-[100] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <DemoBanner />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
