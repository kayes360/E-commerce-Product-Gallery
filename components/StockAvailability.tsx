"use client";
import { ProductsContext, ProductsContextType } from "@/context/ProductContext";
import React, { useContext, useEffect, useState } from "react";
import { CheckboxWithText } from "./CheckBoxWithText";

export default function StockAvailability() {
  const { products, setProducts, originalProducts    } =
    useContext(ProductsContext as React.Context<ProductsContextType>);
    const [showInStockOnly, setShowInStockOnly] = useState<boolean>(false);

    useEffect(() => {
        if (showInStockOnly) {
          // Filter to show only in-stock products
          const filteredProducts = products.filter(product => product.inStock);
          setProducts(filteredProducts);
        } else {
          // Show all products
          setProducts(originalProducts);
        }
      }, [showInStockOnly, originalProducts, setProducts]);

    const handleCheckboxChange = (checked: boolean) => {
        setShowInStockOnly(checked);
      };
  return <CheckboxWithText label="In Stock"  onChange={(checked: boolean) =>
    handleCheckboxChange( checked)
  }/>;
}
