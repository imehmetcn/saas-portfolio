import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { AdminProvider } from '@/contexts/AdminContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mehmet Can Şahin - Portfolio",
  description: "Senior UI/UX & Frontend Developer - Yaratıcı dijital çözümler ve modern web uygulamaları",
  keywords: ["UI/UX", "Frontend", "React", "Next.js", "TypeScript", "portfolio", "web development"],
  authors: [{ name: "Mehmet Can Şahin" }],
  openGraph: {
    title: "Mehmet Can Şahin - Portfolio",
    description: "Senior UI/UX & Frontend Developer - Yaratıcı dijital çözümler ve modern web uygulamaları",
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
        <ThemeProvider>
          <AdminProvider>
            {children}
            <Toaster />
          </AdminProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
