import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Layout from "@/components/layout";
import { ThemeProvider } from "@/components/theme-provider";
import { Spinner } from "@/components/ui/spinner";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-site.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anand's blog",
    template: `%s | Anand's blog`,
  },
  description: "Decode AI with Anand Arora",
  openGraph: {
    title: "Anand's blog",
    description: "Decode AI with Anand Arora",
    url: siteUrl,
    siteName: "Anand's blog",
    images: [
      {
        url: `${siteUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Anand's blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anand's blog",
    description: "Decode AI with Anand Arora",
    images: [`${siteUrl}/opengraph-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/anand-profile.jpg",
    shortcut: "/anand-profile.jpg",
    apple: "/anand-profile.jpg",
  },
  manifest: `${siteUrl}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>
            <Suspense fallback={<Spinner />}>
              {children}
            </Suspense>
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
