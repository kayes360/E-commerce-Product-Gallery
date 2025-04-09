"use client";
import React, { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import { Input } from "./ui/input";
import { ProductsContext, ProductsContextType } from "@/context/ProductContext";

export default function PriceRange() {
  const {  setProducts, originalProducts } = useContext(
    ProductsContext as React.Context<ProductsContextType>
  );

  // Fixed min and max price values
  const MIN_PRICE = 1;
  const MAX_PRICE = 10000;

  // State for minimum and maximum price filters
  const [minPrice, setMinPrice] = useState<number>(MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState<number>(MAX_PRICE);
  const [sliderValue, setSliderValue] = useState<number[]>([MIN_PRICE, MAX_PRICE]);

  // Apply price filter whenever min or max price changes
  useEffect(() => {
    // Check if values are valid before filtering
    if (minPrice !== null && maxPrice !== null) {
      const filteredProducts = originalProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
      setProducts(filteredProducts);
    }
  }, [minPrice, maxPrice, originalProducts, setProducts]);

  // Handle slider change
  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    setMinPrice(value[0]);
    setMaxPrice(value[1]);
  };

  // Handle min input change
  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= MIN_PRICE) {
      // Ensure min price doesn't exceed max price
      const newMinPrice = Math.min(value, maxPrice);
      setMinPrice(newMinPrice);
      setSliderValue([newMinPrice, sliderValue[1]]);
    } else if (e.target.value === "") {
      setMinPrice(MIN_PRICE);
      setSliderValue([MIN_PRICE, sliderValue[1]]);
    }
  };

  // Handle max input change
  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value <= MAX_PRICE) {
      // Ensure max price isn't less than min price
      const newMaxPrice = Math.max(value, minPrice);
      setMaxPrice(newMaxPrice);
      setSliderValue([sliderValue[0], newMaxPrice]);
    } else if (e.target.value === "") {
      setMaxPrice(MAX_PRICE);
      setSliderValue([sliderValue[0], MAX_PRICE]);
    }
  };

  return (
    <div className="my-3">
      <div>
        <Slider
          id="price-range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={10}
          value={sliderValue}
          onValueChange={handleSliderChange}
          className="mt-2"
        />
        <div className="flex justify-between mt-1 text-sm text-muted-foreground">
          <span>${sliderValue[0]}</span>
          <span>${sliderValue[1]}</span>
        </div>
      </div>
      <div className="flex gap-2 justify-between my-5">
        <div className="w-full">
          <Input 
            type="number" 
            placeholder="Min" 
            min={MIN_PRICE} 
            max={MAX_PRICE} 
            value={minPrice}
            onChange={handleMinInputChange}
          />
        </div>
        <div className="w-full">
          <Input 
            type="number" 
            placeholder="Max" 
            min={MIN_PRICE} 
            max={MAX_PRICE} 
            value={maxPrice}
            onChange={handleMaxInputChange}
          />
        </div>
      </div>
    </div>
  );
}