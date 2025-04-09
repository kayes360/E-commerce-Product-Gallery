import { products } from "@/data/products";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  try {
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error in products API route:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
