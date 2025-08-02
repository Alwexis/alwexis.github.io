import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ariel Silva | Frontend Developer especializado en React y Next.js",
  description:
    "Frontend Developer especializado en React, Next.js y TailwindCSS. Creo experiencias web rápidas, accesibles y modernas.",
  keywords: [
    "Ariel Silva",
    "Frontend Developer",
    "React",
    "Next.js",
    "TailwindCSS",
    "Web Development",
    "Portfolio",
    "Fullstack Developer",
  ],
  authors: [{ name: "Ariel Silva", url: "https://alwexis.is-a.dev" }],
  creator: "Ariel Silva",
  metadataBase: new URL("https://alwexis.is-a.dev"),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://alwexis.is-a.dev",
  },
  openGraph: {
    title: "Ariel Silva | Frontend Developer especializado en React y Next.js",
    description:
      "Portafolio profesional de Ariel Silva, desarrollador frontend con experiencia en tecnologías modernas y diseño accesible.",
    url: "https://alwexis.is-a.dev",
    siteName: "Ariel Silva Portfolio",
    images: [
      {
        url: "https://alwexis.is-a.dev/logo.webp",
        width: 1200,
        height: 630,
        alt: "Ariel Silva Portfolio",
      },
    ],
    locale: "en_US",
    alternateLocale: ["es_ES"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariel Silva | Frontend Developer",
    description:
      "Portafolio de Ariel Silva: React, Next.js, TailwindCSS y desarrollo web moderno.",
    images: ["https://alwexis.is-a.dev/logo.webp"],
    creator: "@alwexis_dev",
  },
};


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: "#000000"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-black antialiased">
        {children}
      </body>
    </html>
  );
}
