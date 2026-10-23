import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteEffects from "@/components/site-effects";
import ExplorationPath, { Breadcrumbs } from "@/components/exploration-path";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const geistSans = localFont({
  src: "./fonts/geist.woff2",
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pestopasta74.com"),
  title: "Preston Whiteman | Mathematics, Physics & Computation",
  alternates: { canonical: "/" },
  authors: [{ name: "Preston Whiteman", url: "https://pestopasta74.com" }],
  creator: "Preston Whiteman",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Preston Whiteman",
    title: "Preston Whiteman | Mathematics, Physics & Computation",
    description: "Mathematics and Physics at Bath, quantitative models, research tools and student communities.",
    images: [{ url: "/photos/preston-headshot-2026.jpg", width: 1750, height: 1167, alt: "Preston Whiteman" }],
  },
  twitter: { card: "summary_large_image" },
  description:
    "Preston Whiteman is a first-year Mathematics and Physics student at the University of Bath, building quantitative models, research tools and student communities. Graduating in 2029.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{__html: `(function(){try{var d=document.documentElement;d.dataset.theme=localStorage.getItem('preston-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');d.dataset.sound=localStorage.getItem('preston-sound')||'off';d.dataset.motion=localStorage.getItem('preston-motion')||(matchMedia('(prefers-reduced-motion: reduce)').matches?'reduce':'full');}catch(e){}})();`}} /></head>
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Person", name: "Preston Whiteman",
          url: "https://pestopasta74.com", description: "Mathematics and Physics student at the University of Bath",
          affiliation: { "@type": "CollegeOrUniversity", name: "University of Bath" },
          sameAs: ["https://github.com/pestopasta74", "https://www.linkedin.com/in/pestopasta74/"],
          knowsAbout: ["Theoretical physics", "Scientific computing", "Monte Carlo methods", "Quantitative finance"],
        }) }} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <Breadcrumbs />
        <SiteEffects />
        {children}
        <ExplorationPath />
        <SiteFooter />
      </body>
    </html>
  );
}
