import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import ProductProvider from "@/ContextProvider/ProductsProvider";
import { ProductSort } from "@/components/ProductSort";
import ProductCart from "@/components/ProductCart";
import CartProvider from "@/ContextProvider/CartProvider";

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
        <SidebarProvider>
          <ProductProvider>
            <CartProvider>
              <AppSidebar />
              <div className="w-full">
                <SidebarTrigger className="z-1 relative cursor-pointer" />
                {children}
              </div>
            </CartProvider>
          </ProductProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
