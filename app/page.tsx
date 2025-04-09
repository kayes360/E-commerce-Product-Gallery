import ProductCart from "@/components/ProductCart";
import ProductGrid from "@/components/ProductGrid";
import { ProductSort } from "@/components/ProductSort";
import { IProduct } from "@/types/product-type";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/products");
  const productList: IProduct[] = await data.json();

  return (
    <>
      <div className="flex gap-2 justify-end m-5 ">
        <ProductSort />
        <ProductCart />
      </div>
      <ProductGrid productList={productList} />
    </>
  );
}
