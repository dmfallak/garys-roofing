import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gary's Roofing | Professional Roofing Services in Cambridge, ON",
  description:
    "Expert roofing services in Cambridge, Ontario. Residential & commercial roofing, repairs, inspections, and emergency services. Serving Cambridge, Kitchener, Waterloo, and surrounding areas.",
  keywords: [
    "roofing Cambridge Ontario",
    "Cambridge roofer",
    "roof repair Cambridge",
    "roofing contractor",
    "Kitchener roofing",
    "Waterloo roofing",
  ],
  authors: [{ name: "Gary's Roofing" }],
  openGraph: {
    title: "Gary's Roofing | Professional Roofing Services in Cambridge, ON",
    description:
      "Expert roofing services in Cambridge, Ontario and surrounding areas.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
