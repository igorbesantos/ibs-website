import React, { ReactNode } from 'react';
import { Roboto, Roboto_Mono } from 'next/font/google';
import Header from '../components/header';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap'
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${roboto_mono.variable}`}>
    <body>
      <Header></Header>
      {children}
    </body>
    </html>
  )
}