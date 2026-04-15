import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";


import Navbar from "@/components/ui/Navbar";
import { CartProvider } from "@/context/CartContext";
import Footer from "@/components/ui/Footer";
import { Suspense } from "react";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "A Next.js ecommerce app",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} h-full antialiased`}>
        <CartProvider>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <main className="min-h-screen bg-gray-50">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
