import ProductDetails from "@/components/ProductDetails";
import { notFound } from "next/navigation";

export default async function ProductDetail({params}:{params:Promise<{id:string}>}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3000/api/products/${id}`);

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const product = await res.json();
  return <ProductDetails product={product} />;
}