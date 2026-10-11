import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AIAssistant from "@/components/ui/AIAssistant";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KhalineX Store Limited — Global Trade & Logistics",
  description:
    "Your trusted partner in international shipping, product sourcing, wholesale trade, and business training. Connecting Africa to the world.",
  keywords: [
    "KhalineX",
    "LinX",
    "shipping",
    "logistics",
    "product sourcing",
    "China to Africa",
    "wholesale",
    "import",
    "export",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased relative">
        {children}
        <AIAssistant />
      </body>
    </html>
  );
}
