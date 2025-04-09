import AppSidebar from "@/components/AppSidebar"; 
import ProductGrid from "@/components/ProductGrid"; 
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { products as productList } from "@/data/products"; // ✅ Direct import — no fetch needed

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full p-5">
        <SidebarTrigger className="z-1 relative cursor-pointer" />
        <ProductGrid productList={productList} />
      </div>
    </SidebarProvider>
  );
}
