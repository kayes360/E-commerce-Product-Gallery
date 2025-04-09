// app/api/products/[id]/route.ts
import { products } from "@/data/products";
import { NextResponse } from "next/server";

export async function GET(
  request: Request, 
  { params }: { params: { id: string } }
) {
  try {
    const productId = params.id;
    const product = products.find(p => p.id === productId);
    
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error in single product API route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}