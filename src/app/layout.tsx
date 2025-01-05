import type { Metadata } from 'next';

import './globals.css';
import Header from './sections/Header';
import { karla } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Geo World',
  description:
    'Discover detailed information about countries, regions, and cultures around the globe.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.className} antialiased max-w-7xl mx-auto relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
