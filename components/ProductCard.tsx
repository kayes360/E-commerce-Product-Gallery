import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckIcon,  PackageX, PlusIcon } from "lucide-react";
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
    const handleAddToCart = (e: React.MouseEvent) => {
        // avoid link navigation while adding to cart
        e.preventDefault();
        e.stopPropagation();
        if (!isInCart) {
          setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
      };

  return (
    <Link href={`${product.id}`} className="border rounded-md p-4 flex flex-col h-full">
      <figure className="flex-shrink-0">
        <Image
          className="w-full rounded-lg aspect-square object-cover"
          src={product.image}
          width={300}
          height={300}
          alt={product.name}
        />
      </figure>
      <div className="flex justify-between mt-3">
        <h3 className="text-lg">
          {product.name}
        </h3>
      </div>
      <div className="flex justify-between mb-3 mt-1">
        <div>
          <Badge className="capitalize">{product.category}</Badge>
        </div>
        <p className="text-lg font-semibold">${product.price}</p>
      </div>

      <p className="text-sm text-muted-foreground mb-3  flex-grow">
        {product.description}
      </p>
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
    </Link>
  );
}