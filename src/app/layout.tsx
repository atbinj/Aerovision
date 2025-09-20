import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import CometAnimation from '@/components/animations/comet-animation';

export const metadata: Metadata = {
  title: 'Aerovision AI - Fly Longer, See Sharper',
  description: 'Aerovision is a deep-tech startup in aerial photogrammetry, offering cutting-edge solutions for spatial monitoring, modeling, and planning with AI and multispectral sensors.',
  keywords: 'aerial photogrammetry, AI geospatial solutions, drone mapping, multispectral analysis, LiDAR, smart city, precision agriculture',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen">
            <CometAnimation />
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
