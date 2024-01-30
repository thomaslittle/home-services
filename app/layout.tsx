import type { Metadata } from "next";

import localFont from "next/font/local";
const Chronica = localFont({
  src: [
    {
      path: "../fonts/ChronicaPro-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ChronicaPro-Bold.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "..//fonts/ChronicaPro-ExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

import "./globals.css";

export const metadata: Metadata = {
  title: "Home Services",
  description: "HVAC & Heating",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Chronica.className} min-h-screen" bg-white text-stone-800 dark:text-white`}>{children}</body>
    </html>
  );
}
