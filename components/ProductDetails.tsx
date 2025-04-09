"use client";

import React, { useContext } from "react";

import { useState } from "react";
import Image from "next/image";
import {
  ShoppingCart,
  Heart,
  Share2,
  Check,
  ArrowLeft,
  CheckIcon,
  PlusIcon,
  PackageX,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
 
import { ProductsContext, ProductsContextType } from "@/context/ProductContext";
import { IProduct } from "@/types/product-type";
import { CartContext, CartContextType } from "@/context/CartContext";
import { Input } from "./ui/input";

interface ProductDetailsProps {
  product: IProduct;
}
export default function ProductDetails({ product }: ProductDetailsProps) {
  const { products, setProducts, setOriginalProducts } = useContext(
    ProductsContext as React.Context<ProductsContextType>
  );
  const { cartItems, setCartItems } = useContext(
    CartContext
  ) as CartContextType;
  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) newQuantity = 1;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const handleAddToCart = () => {
    if (!isInCart) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  console.log(product);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          href="/"
          className="flex items-center text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Product Details */}
        <Card>
          <CardContent className="pt-6">
            <div className="mb-4 flex items-center justify-between">
              <Badge variant="outline" className="px-3 py-1 text-xs capitalize">
                {product.category}
              </Badge>
              {product.inStock ? (
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200 px-3 py-1 text-xs"
                >
                  <Check className="mr-1 h-3 w-3" /> In Stock
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="bg-red-50 text-red-700 border-red-200 px-3 py-1 text-xs"
                >
                  Out of Stock
                </Badge>
              )}
            </div>

            <h1 className="mb-2 text-3xl font-bold">{product.name}</h1>
            <p className="mb-6 text-xl font-semibold">
  {product?.price !== undefined ? `$${product.price.toFixed(2)}` : "Price not available"}
</p>

            <p className="mb-6 text-muted-foreground">{product.description}</p>

            <Separator className="my-6" />

            <div className="mb-6">
              <div className="mb-2 font-medium">Quantity</div>
              <Input
                type="number"
                min="1"
                max="99"
                value={
                  cartItems.find((item) => item.id === product.id)?.quantity ||
                  1
                }
                onChange={(e) =>
                  handleQuantityChange(
                    product.id,
                    parseInt(e.target.value) || 1
                  )
                }
                className="w-14 h-9 text-center text-sm p-1"
              />
            </div>

            <div className="flex gap-4 mt-auto">
              {product.inStock ? (
                <Button
                  variant={isInCart ? "secondary" : "outline"}
                  className="w-full relative cursor-pointer"
                  onClick={handleAddToCart}
                  disabled={isInCart}
                >
                  {isInCart ? (
                    <>
                      <CheckIcon className="size-4 me-1" /> Added to Cart
                    </>
                  ) : (
                    <>
                      <PlusIcon className="size-4 me-1" /> Add to Cart
                    </>
                  )}
                </Button>
              ) : (
                <>
                  <Button variant="secondary" className="w-full ">
                    <PackageX className="text-muted-foreground" />
                    <span>Out of Stock</span>
                  </Button>
                </>
              )}
            </div>

            <Separator className="my-6" />

            <div className="text-sm text-muted-foreground">
              <p>Product ID: {product.id}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
