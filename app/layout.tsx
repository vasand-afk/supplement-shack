import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Supplement Shack — Performance. Longevity. Science.",
    template: "%s | Supplement Shack",
  },
  description:
    "Premium supplements for general wellness, sports performance, anti-aging, and research-grade peptides. Third-party tested. COA available.",
  keywords: ["supplements", "peptides", "sports nutrition", "anti-aging", "NMN", "BPC-157", "wearables"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="flex flex-col min-h-screen bg-[#09090B] text-[#FAFAFA]">
        {/* Flash sale banner */}
        <div className="w-full bg-[#EA580C] text-white text-center py-2 px-4 text-sm font-semibold tracking-wide">
          🔬 LAUNCH SPECIAL — 20% OFF SITEWIDE WITH CODE{" "}
          <span className="font-black underline">SHACK20</span> &nbsp;·&nbsp;
          Free shipping on orders $75+
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
