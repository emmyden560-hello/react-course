import type { Metadata } from "next";
import { Inter, Work_Sans, Permanent_Marker } from "next/font/google";
import Providers from "./providers";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "EDdirectory",
  description: "First next.js app directory project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg.png" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} ${workSans.variable} ${permanentMarker.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
