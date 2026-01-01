import type { Metadata } from "next";
import { DotGothic16, Plus_Jakarta_Sans } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const dotGothic = DotGothic16({
  weight: "400",
  variable: "--font-dot-gothic",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nina Uchtmann - Portfolio",
  description: "3D Artist and Full-Stack Developer Portfolio of Nina Uchtmann",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dotGothic.variable} ${plusJakarta.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
