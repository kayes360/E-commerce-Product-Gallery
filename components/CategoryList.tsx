"use client";
import React, { useContext, useEffect, useState } from "react";
import { CheckboxWithText } from "./CheckBoxWithText"; 
import { ProductsContext, ProductsContextType } from "@/context/ProductContext";

export default function CategoryList() {
      const {  setProducts, originalProducts } = useContext(ProductsContext as React.Context<ProductsContextType>);  

  const allUniqueCategory = [
    ...new Set(originalProducts.map((product) => product.category)),
  ]; 
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCheckboxChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((item) => item !== category)
      );
    }
  };

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setProducts(originalProducts);
    } else {
      const filteredProducts = originalProducts.filter((product) =>
        selectedCategories.includes(product.category)
      );
      setProducts(filteredProducts);
    }
  }, [selectedCategories, originalProducts, setProducts]);
 

  return (
    <div>
      {allUniqueCategory && allUniqueCategory.length > 0 ? (
        allUniqueCategory.map((category, i) => (
          <CheckboxWithText
            key={i}
            label={category}
            onChange={(checked: boolean) =>
              handleCheckboxChange(category, checked)
            }
          />
        ))
      ) : (
        <p>No categories found</p>
      )}
    </div>
  );
}
