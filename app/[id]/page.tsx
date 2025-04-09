import ProductDetails from "@/components/ProductDetails";
import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export default async function ProductDetail({params}:{params:Promise<{id:string}>}) {
  const { id } = await params;

  const res = await fetch(`${API_URL}/api/products/${id}`);
 

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  const product = await res.json();
  return <ProductDetails product={product} />;
}