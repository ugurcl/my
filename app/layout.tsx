import type { Metadata } from "next";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Toaster } from "@/components/ui/toaster";
import { 
  Inter, 
  Poppins,
  Raleway,
  JetBrains_Mono
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Uğur Çalışkan - Full Stack Developer | Portfolio",
  description: "Uğur Çalışkan - Full Stack Developer. Modern web teknolojileri ile responsive ve performanslı uygulamalar geliştiriyorum. React, Next.js, TypeScript uzmanı.",
  keywords: "Uğur Çalışkan, Full Stack Developer, Web Developer, React, Next.js, TypeScript, Portfolio, Frontend Developer, Backend Developer, JavaScript",
  authors: [{ name: "Uğur Çalışkan" }],
  creator: "Uğur Çalışkan",
  publisher: "Uğur Çalışkan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ugurcaliskan.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Uğur Çalışkan - Full Stack Developer",
    description: "Modern web teknolojileri ile responsive ve performanslı uygulamalar geliştiriyorum.",
    url: 'https://ugurcaliskan.com',
    siteName: 'Uğur Çalışkan Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Uğur Çalışkan - Full Stack Developer',
      }
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Uğur Çalışkan - Full Stack Developer',
    description: 'Modern web teknolojileri ile responsive ve performanslı uygulamalar geliştiriyorum.',
    creator: '@ugurcaliskan',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} ${raleway.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-inter`}
        suppressHydrationWarning
      >
        <ErrorBoundary>
          {children}
          <Toaster position="bottom-right" />
        </ErrorBoundary>
      </body>
    </html>
  );
}
