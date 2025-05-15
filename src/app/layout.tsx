import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ariel Silva | Fullstack Web Developer",
  description:
    "I'm Ariel Silva, a fullstack web developer focused on frontend. Passionate about creating modern, fast, and accessible digital experiences.",
  keywords: [
    "Ariel Silva",
    "web developer",
    "frontend developer",
    "fullstack developer",
    "portfolio",
    "React",
    "Next.js",
    "TailwindCSS",
    "web development",
    "TypeScript",
  ],
  authors: [{ name: "Ariel Silva", url: "https://www.alwexis.me" }],
  creator: "Ariel Silva",
  metadataBase: new URL("https://www.alwexis.me"),
  openGraph: {
    title: "Ariel Silva | Fullstack Web Developer",
    description:
      "Portfolio of Ariel Silva, fullstack web developer focused on frontend, modern technologies and minimalist design.",
    url: "https://www.alwexis.me",
    siteName: "Ariel Silva Portfolio",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Ariel Silva Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariel Silva | Fullstack Web Developer",
    description:
      "Portafolio de Ariel Silva. Desarrollo web con tecnologías como React, Next.js, Node.js y más.",
    images: ["/logo.webp"],
    creator: "@alwexis_dev",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
