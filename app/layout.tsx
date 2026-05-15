import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://web-duo.vercel.app"),
  title: {
    default: "DEV DUO | Prémium Webfejlesztés & Digitális Megoldások",
    template: "%s | DEV DUO"
  },
  description: "Enterprise-szintű webfejlesztés, egyedi webalkalmazások, és prémium honlapok készítése több évtizedes szakmai tapasztalattal. Modern digitális megoldások vállalkozása számára.",
  keywords: ["webfejlesztés", "webdesign", "egyedi webalkalmazás", "prémium honlap", "Next.js", "React", "TypeScript", "frontend fejlesztés", "SaaS fejlesztés", "vállalati rendszerek"],
  authors: [{ name: "DEV DUO" }],
  creator: "DEV DUO",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://web-duo.vercel.app",
    title: "DEV DUO | Prémium Webfejlesztés & Digitális Megoldások",
    description: "Enterprise-szintű webfejlesztés, egyedi webalkalmazások, és prémium honlapok készítése.",
    siteName: "DEV DUO",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEV DUO | Prémium Webfejlesztés",
    description: "Enterprise-szintű webfejlesztés, egyedi webalkalmazások, és prémium honlapok készítése.",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DEV DUO",
    "image": "https://web-duo.vercel.app/og-image.jpg",
    "url": "https://web-duo.vercel.app",
    "telephone": "",
    "email": "maro.hajnalka@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "HU"
    },
    "description": "Enterprise-szintű webfejlesztés, egyedi webalkalmazások, és prémium honlapok készítése több évtizedes szakmai tapasztalattal.",
    "sameAs": [
      "https://www.linkedin.com/in/hajnalka-maro/",
      "https://www.linkedin.com/in/jozseftar/"
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="hu" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
