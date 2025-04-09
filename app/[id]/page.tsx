import ProductDetails from "@/components/ProductDetails";
import { IProduct } from "@/types/product-type";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
    const data = await fetch(`http://localhost:3000/api/products/${id}`);
    const singleProduct: IProduct = await data.json();

  return <ProductDetails product={singleProduct} />;
}
