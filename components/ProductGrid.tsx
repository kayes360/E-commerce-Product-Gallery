"use client";
import { IProduct } from "@/types/product-type";
import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductsContext, ProductsContextType } from "@/context/ProductContext";
import { ProductSort } from "./ProductSort";
interface ProductGridProps {
  productList: IProduct[];
}
export default function ProductGrid({ productList }: ProductGridProps) {
    const { products, setProducts,setOriginalProducts } = useContext(ProductsContext as React.Context<ProductsContextType>);  

  useEffect(() => {
    setProducts(productList);
    setOriginalProducts(productList)
  }, [productList, setProducts,setOriginalProducts]);
  return (

    <>
        <div className="float-end">
        <ProductSort/>
        </div>
        <div className="  grid grid-cols-[repeat(auto-fit,_300px)] gap-4 m-4 ">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div className="w-[300px]  " key={product.id}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <p>No product found yet</p>
          )}
        </div>
    </>
  );
}
