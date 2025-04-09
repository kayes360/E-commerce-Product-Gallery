import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckIcon, HeartIcon, PackageX, PlusIcon } from "lucide-react";
import { IProduct } from "@/types/product-type";
import { Badge } from "./ui/badge";
import { useContext } from "react";
import { CartContext, CartContextType } from "@/context/CartContext";

interface ProductCardProps {
  product: IProduct;
}
export default function ProductCard({ product }: ProductCardProps) {
    const { cartItems, setCartItems } = useContext(CartContext) as CartContextType;
    const isInCart = cartItems.some(item => item.id === product.id);
    const handleAddToCart = () => {
        if (!isInCart) {
          setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
      };

  return (
    <div className="border rounded-md p-4   relative">
      <figure className="">
        <Image
          className="w-full rounded-lg aspect-square object-cover"
          src={product.image}
          width={300}
          height={500}
          alt={product.name}
        />
      </figure>
      <div className="flex justify-between">
        <h3 className="text-lg my-3">
          <span aria-hidden="true" className="absolute inset-0" />
          {product.name}
        </h3>
      </div>
      <div className="flex justify-between mb-3">
        <div>
          <Badge className="capitalize">{product.category}</Badge>
        </div>
        <p className="text-lg font-semibold">${product.price}</p>
      </div>

      <p className="text-sm text-muted-foreground mb-3">
        {product.description}
      </p>
      <div className="flex gap-4">
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
    </div>
  );
}
