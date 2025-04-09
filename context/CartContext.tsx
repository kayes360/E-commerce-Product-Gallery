import { IProduct } from "@/types/product-type";
import { createContext } from "react";

export interface CartContextType {
    cartItems: IProduct[];
    setCartItems: React.Dispatch<React.SetStateAction<IProduct[]>>;  
  }
  export const CartContext = createContext<CartContextType | undefined>(undefined);
