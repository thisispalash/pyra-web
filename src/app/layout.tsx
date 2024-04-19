import type { Metadata } from "next";
import { Inter, Tilt_Prism, Raleway, Quicksand, Kode_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

// Import fonts
const inter = Inter({ subsets: ["latin"] });
const tiltPrism = Tilt_Prism({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });
const kodeMono = Kode_Mono({ subsets: ["latin"] });

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
        dark
        ${inter.className}
        ${tiltPrism.className}
        ${raleway.className}
        ${quicksand.className}
        ${kodeMono.className}
      `}>
        {/* @todo fallback for suspense */}
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
