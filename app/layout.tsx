import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";  
import ProductProvider from "@/ContextProvider/ProductsProvider"; 
import CartProvider from "@/ContextProvider/CartProvider";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-commerce Product Gallery",
  description: "An e-commerce product gallery application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
          <ProductProvider>
            <CartProvider> 
                <Header/>
                {children} 
            </CartProvider>
          </ProductProvider> 
      </body>
    </html>
  );
}
