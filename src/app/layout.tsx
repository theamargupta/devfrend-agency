import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import CustomCursor from "@/components/providers/CustomCursor";
import PageTransition from "@/components/providers/PageTransition";
import GrainOverlay from "@/components/providers/GrainOverlay";
import Preloader from "@/components/providers/Preloader";
import { BRAND, SEO_DEFAULTS } from "@/lib/constants";

/* -------------------------------------------------------------------------- */
/*  Typography — DA-9                                                         */
/*  Display: Space Grotesk | Body: Inter | Mono: JetBrains Mono               */
/* -------------------------------------------------------------------------- */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SEO_DEFAULTS.title,
    template: `%s · ${BRAND.name}`,
  },
  description: SEO_DEFAULTS.description,
  keywords: [...SEO_DEFAULTS.keywords],
  authors: [{ name: BRAND.fullName }],
  metadataBase: new URL(`https://${BRAND.domain}`),
  openGraph: {
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
    url: `https://${BRAND.domain}`,
    siteName: BRAND.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DEFAULTS.title,
    description: SEO_DEFAULTS.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-surface-0)] text-[var(--color-fg-0)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--color-accent-400)] focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[var(--tracking-wider)] focus:text-[var(--color-surface-0)]"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: BRAND.fullName,
              url: `https://${BRAND.domain}`,
              email: BRAND.email,
              description: SEO_DEFAULTS.description,
              sameAs: [
                "https://github.com/devfrend",
                "https://linkedin.com/in/devfrend",
                "https://twitter.com/devfrend",
              ],
            }),
          }}
        />
        <LenisProvider>
          <CustomCursor />
          <GrainOverlay />
          <Preloader />
          <PageTransition>{children}</PageTransition>
        </LenisProvider>
      </body>
    </html>
  );
}
