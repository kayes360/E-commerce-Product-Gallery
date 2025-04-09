'use client'
import React, { useContext, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingCart, X } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { CartContext, CartContextType } from "@/context/CartContext";
import Image from "next/image";

export default function ProductCart() {
  const { cartItems, setCartItems } = useContext(CartContext) as CartContextType;
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const discountPercentage = 5;

  const orderTotal = subtotal - discountAmount;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) newQuantity = 1;
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode === "COUPON2025") {
      const discount = (subtotal * discountPercentage) / 100;
      setDiscountAmount(discount);
      setAppliedCoupon(couponCode);
    } else {
      setDiscountAmount(0);
      setAppliedCoupon("");
    }
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild className="">
          <div className="relative inline-flex">
            <Button
              variant="outline"
              size="icon"
              className="cursor-pointer rounded-full p-2"
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Badge
              variant="secondary"
              className="absolute -top-2 -right-2 h-5 min-w-5 flex items-center justify-center text-xs rounded-full px-1 border-black cursor-pointer"
            >
              {cartItems.length}
            </Badge>
          </div>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md flex flex-col h-full overflow-hidden p-0">
          <SheetHeader className="p-4 pb-0">
            <SheetTitle>Your Cart</SheetTitle>
            <SheetDescription>Type COUPON2025 to have 5% discount</SheetDescription>
          </SheetHeader>
          
          {/* Cart Items - Scrollable Area */}
          <div className="flex-1 overflow-y-auto p-4 pt-2">
            <div className="space-y-4">
              {cartItems.length > 0 ? (
                <div className="space-y-4 pb-2">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-start gap-3">
                      <div className="h-16 w-16 bg-gray-200 rounded overflow-hidden flex-shrink-0 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm sm:text-base truncate">{item.name}</h3>
                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-1">{item.description}</p>
                        <p className="font-medium mt-1">${item.price.toFixed(2)}</p>
                        <div className="mt-1">
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-600 border-green-200 text-xs font-normal px-2"
                          >
                            {item.inStock ? (
                              <span className="mr-1 text-green-500">✓</span>
                            ) : (
                              <span className="mr-1 text-red-500">x</span>
                            )}
                            {item.inStock ? "In stock" : "Out of stock"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Input
                          type="number"
                          min="1"
                          max="99"
                          value={item.quantity || 1}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                          className="w-14 h-9 text-center text-sm p-1"
                        />
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 cursor-pointer" 
                          onClick={() => handleRemoveItem(item.id)}
                          aria-label="Remove item"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  Your cart is empty
                </div>
              )}
            </div>
          </div>
          
          {/* Bottom Section - Fixed */}
          <div className="border-t bg-white p-4">
            <div className="space-y-4">
              {/* Coupon */}
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Coupon Code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <Button onClick={applyCoupon} className="cursor-pointer whitespace-nowrap">Apply</Button>
              </div>
              {appliedCoupon && (
                <p className="text-green-600 text-sm">Coupon Applied: {appliedCoupon}</p>
              )}

              {/* Summary */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <span>Discount ({discountPercentage}%)</span>
                      <span className="inline-flex items-center justify-center rounded-full border h-4 w-4 text-xs">
                        ?
                      </span>
                    </div>
                    <span className="font-medium text-green-600">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Order total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <SheetFooter className="pt-2">
                <SheetClose asChild>
                  <Button className="w-full py-6 text-base cursor-pointer">
                    Checkout
                  </Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}