import type { Metadata } from 'next';
import { Karla, Galindo } from 'next/font/google';
import './globals.css';

const karla = Karla({
  subsets: ['latin'],
});

export const galindo = Galindo({
  subsets: ['latin'],
  weight: '400',
});

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
      <body className={`${karla.className} antialiased max-w-5xl mx-auto`}>
        {children}
      </body>
    </html>
  );
}
