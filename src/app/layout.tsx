import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Hughes | Full-Stack & Data-Focused Software Engineer",
  description: "I build clean, user-focused software, from web apps to desktop tools. Check out my portfolio, projects, and get in touch to collaborate.",
  metadataBase: new URL("https://joshuahughes.com"),
  openGraph: {
    title: "Joshua Hughes | Full-Stack & Data-Focused Software Engineer",
    description: "I build clean, user-focused software, from web apps to desktop tools. Check out my portfolio, projects, and get in touch to collaborate.",
    url: "https://joshuahughes.com",
    siteName: "Joshua Hughes Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Joshua Hughes Portfolio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Hughes | Full-Stack & Data-Focused Software Engineer Portfolio",
    description: "Portfolio of Joshua Hughes.",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "https://joshuahughes.com",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <PageWrapper>
          <main className="flex-grow">{children}</main>
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}
