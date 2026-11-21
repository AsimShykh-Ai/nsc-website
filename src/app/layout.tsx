import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './design.css';
import './globals.css';
import { SITE_URL, SITE_NAME } from '@/lib/site';
import SiteShell from '@/components/SiteShell';

const inter = Inter({ subsets: ['latin'], variable: '--f-inter', display: 'swap' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--f-grotesk', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--f-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | AI Consulting for Small Business`, template: '%s' },
  openGraph: { siteName: SITE_NAME, type: 'website', locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body><script async src="/ga.js" /><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
