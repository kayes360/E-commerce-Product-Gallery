import AppSidebar from "@/components/AppSidebar"; 
import ProductGrid from "@/components/ProductGrid"; 
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { IProduct } from "@/types/product-type";

export default async function Home() {
  try {
    const res = await fetch("http://localhost:3000/api/products");

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
