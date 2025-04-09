"use client";
import { CartContext } from "@/context/CartContext"; 
import { IProduct } from "@/types/product-type";
import React, { useEffect, useState } from "react";

export default function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 

    const [cartItems, setCartItems] = useState<IProduct[]>([]);

    useEffect(() => { 
        const storedCart = localStorage.getItem('cartItems');
        if (storedCart) {
          try {
            setCartItems(JSON.parse(storedCart));
          } catch (error) {
            console.error('Failed to parse cart data from localStorage:', error);
            localStorage.removeItem('cartItems');
          }
        }
      }, []);
      
      // Save cart items to localStorage whenever they change
      useEffect(() => {
        if (cartItems.length > 0 || localStorage.getItem('cartItems')) {
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
      }, [cartItems]);
  return (
    <CartContext.Provider
      value={{cartItems, setCartItems}}
    >
      {children}
    </CartContext.Provider>
  );
}
