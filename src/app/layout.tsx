import type { Metadata } from "next";
import { Inter, Tilt_Prism, Raleway, Quicksand, Kode_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

// Import fonts
const inter = Inter({ 
  variable: '--font-inter',
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const tiltPrism = Tilt_Prism({ 
  variable: '--font-tilt-prism',
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
});
const raleway = Raleway({ 
  variable: '--font-raleway',
  subsets: ['latin', 'latin-ext'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const quicksand = Quicksand({ 
  variable: '--font-quicksand',
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
});
const kodeMono = Kode_Mono({ 
  variable: '--font-kode-mono',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
});


export const metadata: Metadata = {
  title: "The Pyra Platform",
  description: "The auction house that rewards every bidder!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${inter.variable}
        ${tiltPrism.variable}
        ${raleway.variable}
        ${quicksand.variable}
        ${kodeMono.variable}
      `}>
        {/* @todo fallback for suspense */}
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
