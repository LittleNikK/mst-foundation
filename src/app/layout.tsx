import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, Anton, Montserrat, Playfair_Display, Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serifFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Anton({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smart Angelos Foundation | Parent of MST Blockchain",
  description:
    "Building an accountable future for public infrastructure. Supporting open protocol research, shared assets, and community governance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${playfair.variable} ${sansFont.variable} ${displayFont.variable} ${montserrat.variable} ${inter.variable} ${outfit.variable}`}
    >
      <body className="relative min-h-screen bg-[#E9ECF0] text-[#121417] antialiased selection:bg-[#F5BA13]/25 selection:text-[#121417] overflow-x-clip font-[var(--font-sans)]">
        {children}
      </body>
    </html>
  );
}