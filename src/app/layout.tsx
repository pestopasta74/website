import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pestopasta74.com"),
  title: {
    default: "Preston Whiteman | Theoretical Physics and Computation",
    template: "%s | Preston Whiteman",
  },
  description:
    "The work of Preston Whiteman, a BSc Physics with Theoretical Physics student at the University of Bath exploring quantitative modelling, research and technology.",
  keywords: [
    "Preston Whiteman",
    "theoretical physics",
    "quantitative finance",
    "Monte Carlo simulation",
    "University of Bath",
    "scientific computing",
  ],
  authors: [{ name: "Preston Whiteman", url: "https://pestopasta74.com" }],
  creator: "Preston Whiteman",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Preston Whiteman",
    title: "Preston Whiteman | Theoretical Physics and Computation",
    description:
      "Physics, quantitative modelling and evidence-led software projects by Preston Whiteman.",
  },
  twitter: {
    card: "summary",
    title: "Preston Whiteman | Theoretical Physics and Computation",
    description:
      "Physics, quantitative modelling and evidence-led software projects by Preston Whiteman.",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Preston Whiteman",
  url: "https://pestopasta74.com",
  sameAs: [
    "https://github.com/pestopasta74",
    "https://www.linkedin.com/in/pestopasta74/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Bath",
  },
  knowsAbout: [
    "Theoretical physics",
    "Scientific computing",
    "Monte Carlo methods",
    "Quantitative finance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
