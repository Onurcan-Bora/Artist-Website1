import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onurcan Bora",
  description: "Onurcan Bora - Resmi web sitesi. Konser bilgileri ve yeni şarkılar.",
  keywords: ["Onurcan Bora", "müzik", "rock", "Kopan Eller"],
  authors: [{ name: "Onurcan Bora" }],
  openGraph: {
    title: "Onurcan Bora",
    description: "Resmi web sitesi. Yeni single 'Kopan Eller' yakında!",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
