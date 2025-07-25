import { ReactNode } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { QueryProvider } from "@/lib/providers/query-client";
import Banner from "@/components/base/banner";
import Header from "@/components/base/header";
import Footer from "@/components/base/footer";
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
  title: "Eventura - simplify your events from booking to billing",
  description: "Eventura - simplify your events from booking to billing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col`}
      >
        <QueryProvider>
          <Banner />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <Toaster position={"top-center"} />
        </QueryProvider>
      </body>
    </html>
  );
}
