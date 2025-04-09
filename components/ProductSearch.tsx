"use client"

import type React from "react"

import { useState, useRef, useEffect, useContext, useCallback } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import type { IProduct } from "@/types/product-type"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ProductsContext, ProductsContextType } from "@/context/ProductContext"
import Link from "next/link"

export default function ProductSearch() {
  const { products } = useContext(ProductsContext as React.Context<ProductsContextType>);
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<IProduct[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = useCallback((query: string) => {
    if (!query) {
      setSearchResults([]);
      return;
    }

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredProducts);
  }, [products]);

  // Debounced search function
  const debouncedSearch = (query: string) => {
    // Clear any existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Set a new timer
    debounceTimerRef.current = setTimeout(() => {
      handleSearch(query);
    }, 300); // 300ms delay
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setIsOpen(value.length > 0);
    debouncedSearch(value);
  };

  // Clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const handleSelectProduct = (productId: string) => {
    const selectedProduct = products.find((product) => product.id === productId);
    if (selectedProduct) {
      router.push(`/product/${productId}`);
      setIsOpen(false);
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  return (
    <div className="relative w-full max-w-sm z-50 " ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search products..."
          className="pl-8 w-full"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
        />
      </div>

      {isOpen && searchResults.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
          <div className="py-1">
            {searchResults.map((product) => (
              <Link
              href={`${product.id}`}
                key={product.id}
                className="px-4 py-2 hover:bg-muted cursor-pointer flex items-center"
                onClick={() => handleSelectProduct(product.id)}
              >
                {product.image && (
                  <div className="w-10 h-10 mr-3 overflow-hidden rounded flex-shrink-0">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-medium text-sm">{product.name}</p>
                  <p className="text-xs text-muted-foreground">
                    ${typeof product.price === "number" ? product.price.toFixed(2) : product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {isOpen && searchQuery && searchResults.length === 0 && (
        <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg">
          <div className="px-4 py-3 text-sm text-muted-foreground">No products found</div>
        </div>
      )}
    </div>
  );
}