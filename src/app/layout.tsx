import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AdminProvider } from "@/contexts/AdminContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern SaaS Portfolio | Yaratıcı Dijital Çözümler",
  description: "Modern SaaS uygulamaları ve web çözümleri geliştiren yazılım geliştiricisi. Next.js, React, TypeScript ile profesyonel projeler.",
  keywords: ["SaaS", "web development", "Next.js", "React", "TypeScript", "portfolio"],
  authors: [{ name: "Portfolio" }],
  openGraph: {
    title: "Modern SaaS Portfolio",
    description: "Yaratıcı dijital çözümler ve modern web uygulamaları",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AdminProvider>
          {children}
        </AdminProvider>
      </body>
    </html>
  );
}
