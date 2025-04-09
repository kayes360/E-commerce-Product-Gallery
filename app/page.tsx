import AppSidebar from "@/components/AppSidebar";
import ProductCart from "@/components/ProductCart";
import ProductGrid from "@/components/ProductGrid";
import ProductSearch from "@/components/ProductSearch";
import { ProductSort } from "@/components/ProductSort";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { IProduct } from "@/types/product-type";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/products");
  const productList: IProduct[] = await data.json();

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
}
