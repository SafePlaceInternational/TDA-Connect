import type { Metadata } from 'next';
import './globals.css';
import { DM_Sans } from 'next/font/google';
import ClientLayout from './client-layout';

const dmSans = DM_Sans({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'], // Load the Latin character set
});

export const metadata: Metadata = {
  title: 'TDA Connect',
  description: 'Social Media app for Safe Place International community',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} my-0 max-w-[640px] justify-center items-center mx-auto shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
