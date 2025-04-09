

import AppSidebar from "@/components/AppSidebar"; 
import ProductGrid from "@/components/ProductGrid"; 
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { IProduct } from "@/types/product-type";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export default async function Home() {
  try {
    const res = await fetch(`${API_URL}/api/products`, {  
        cache: 'force-cache' 
      });
    if (!res.ok) {
      throw new Error("Failed to fetch product list");
    }

    const productList: IProduct[] = await res.json();

    return (
      <>
        <SidebarProvider>
          <AppSidebar />
          <div className="w-full p-5">
            <SidebarTrigger className="z-1 relative cursor-pointer" />
            <ProductGrid productList={productList} />
          </div>
        </SidebarProvider>
      </>
    );
  } catch (err) { 
    throw err;
  }
}
