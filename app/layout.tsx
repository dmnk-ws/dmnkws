import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import './globals.css';
import Nav from '@/components/navigation/nav';

export const metadata: Metadata = {
  title: 'dmnkws.dev',
  description: 'Code by dmnkws',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased mx-0 sm:mx-10 md:mx-25">
        <header>
          <Nav />
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
