"use client";
import { ProductsContext } from "@/context/ProductContext";
import { IProduct } from "@/types/product-type";
import React, { useState } from "react";

export default function ProductProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [originalProducts, setOriginalProducts] = useState<IProduct[]>([]);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, originalProducts, setOriginalProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
