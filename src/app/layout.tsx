import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Lora } from "next/font/google";
import "./globals.css";

/* === Font Loading === */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-accent",
  display: "swap",
});

/* === Metadata === */
export const metadata: Metadata = {
  title: {
    default: "Continental Heritage — Private Wealth Management",
    template: "%s | Continental Heritage",
  },
  description:
    "Generational wealth preservation through timeless investment principles. Continental Heritage offers bespoke portfolio management, financial planning, and wealth protection for discerning families.",
  keywords: [
    "wealth management",
    "private wealth",
    "portfolio management",
    "financial planning",
    "wealth protection",
    "estate planning",
  ],
  authors: [{ name: "Continental Heritage" }],
  openGraph: {
    title: "Continental Heritage — Private Wealth Management",
    description:
      "Generational wealth preservation through timeless investment principles. Continental Heritage offers bespoke portfolio management and financial planning.",
    url: "https://continentalheritage.com",
    siteName: "Continental Heritage",
    images: [
      {
        url: "/images/logo/og-image.png",
        width: 1200,
        height: 630,
        alt: "Continental Heritage",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Continental Heritage — Private Wealth Management",
    description: "Generational wealth preservation through timeless investment principles.",
    images: ["/images/logo/og-image.png"],
  },
};

import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { MobileNav } from "@/components/layout/MobileNav";
import { Footer } from "@/components/layout/Footer";

/* === Root Layout === */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${lora.variable}`}
    >
      <body>
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <GlobalHeader />
          <PageTransition>
            {/* Add top padding equivalent to header height so content isn't hidden under the fixed header */}
            <div className="pt-24 pb-16 lg:pb-0">{children}</div>
          </PageTransition>
          <Footer />
          <MobileNav />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
