"use client";

import React, {   useEffect, useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDownAZ,
  ArrowDownWideNarrow,
  ArrowDownZA,
  ArrowUpNarrowWide,
  ListFilter,
} from "lucide-react";
import { ProductsContext, ProductsContextType } from "@/context/ProductContext";

type Checked = DropdownMenuCheckboxItemProps["checked"];

type PriceSortOption = "price_asc" | "price_desc" | null;
type AlphaSortOption = "alpha_asc" | "alpha_desc" | null;

export function ProductSort() {
  const { products, setProducts } = React.useContext(
    ProductsContext as React.Context<ProductsContextType>
  );

  const [priceSort, setPriceSort] = useState<PriceSortOption>(null);
  const [alphaSort, setAlphaSort] = useState<AlphaSortOption>(null);

  // Apply sorting whenever sort options change
  useEffect(() => {
    let sortedProducts = [...products];

    // F alphabetical sorting if selected
    if (alphaSort === "alpha_asc") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (alphaSort === "alpha_desc") {
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    //  price sorting if selected
    if (priceSort === "price_asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (priceSort === "price_desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  }, [priceSort, alphaSort, setProducts]);

  const handlePriceSortChange = (option: PriceSortOption) => {
    // Toggle off if already selected
    if (priceSort === option) {
      setPriceSort(null);
    } else {
      setPriceSort(option);
    }
  };

  const handleAlphaSortChange = (option: AlphaSortOption) => {
    // Toggle off if already selected
    if (alphaSort === option) {
      setAlphaSort(null);
    } else {
      setAlphaSort(option);
    }
  };

  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="z-10 relative cursor-pointer">
          <ListFilter className="mr-2 h-4 w-4" />
          Sort Products
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuCheckboxItem
          checked={priceSort === "price_desc"}
          onCheckedChange={() => {
            handlePriceSortChange("price_desc");
          }}
          className="cursor-pointer"
        >
          <ArrowDownWideNarrow className="mr-2 h-4 w-4" />
          Price (High to Low)
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={priceSort === "price_asc"}
          onCheckedChange={() => {
            handlePriceSortChange("price_asc");
          }}
          className="cursor-pointer"
        >
          <ArrowUpNarrowWide className="mr-2 h-4 w-4" />
          Price (Low to High)
        </DropdownMenuCheckboxItem>

        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={alphaSort === "alpha_asc"}
          onCheckedChange={() => {
            handleAlphaSortChange("alpha_asc");
          }}
          className="cursor-pointer"
        >
          <ArrowDownAZ className="mr-2 h-4 w-4" />
          Alphabetically (A-Z)
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={alphaSort === "alpha_desc"}
          onCheckedChange={() => {
            handleAlphaSortChange("alpha_desc");
          }}
          className="cursor-pointer"
        >
          <ArrowDownZA className="mr-2 h-4 w-4" />
          Alphabetically (Z-A)
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
