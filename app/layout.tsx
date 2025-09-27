import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

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
      <body className="light-beam-background antialiased min-h-screen">{children}</body>
    </html>
  );
}
