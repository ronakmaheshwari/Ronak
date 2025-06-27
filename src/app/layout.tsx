import type { Metadata } from "next";
import "./globals.css";
import {
  IBM_Plex_Mono as FontMono,
  IBM_Plex_Sans as FontSans,
} from "next/font/google";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { portfolioConfig } from "@/lib/portfolioConfig";
import { Analytics } from "@vercel/analytics/react";

export const fontSans = FontSans({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--cd-font-sans",
});

export const fontMono = FontMono( {
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--cd-font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: portfolioConfig.name,
    template: `%s - ${portfolioConfig.title}`,
  },
  description: portfolioConfig.description,
  keywords: portfolioConfig.seo.keywords,
  authors: portfolioConfig.seo.authors,
  creator: portfolioConfig.name,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioConfig.seo.url,
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [`${portfolioConfig.seo.url}/ogImage.png`],
    siteName: portfolioConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.name,
    description: portfolioConfig.description,
    images: [`${portfolioConfig.seo.url}/ogImage.png`],
    creator: portfolioConfig.seo.twitterHandle,
  },
  // icons: {
  //   icon: "/icon.ico",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="Pi-g3uHmmHeyWc4OikGAE1V1LXeyd9MLbnsQeEw7Ou8" />
      </head>
      <body
        className={`${fontSans.variable} ${fontMono.variable}`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
