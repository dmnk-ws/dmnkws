import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import './globals.css';

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
      <body className="antialiased mx-14 md:mx-25 2xl:mx-auto max-w-screen-xl min-h-screen">
        {children}
      </body>
    </html>
  );
}
