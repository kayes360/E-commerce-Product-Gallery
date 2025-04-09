import { IProduct } from "@/types/product-type";
import { createContext } from "react";

export interface ProductsContextType {
    products: IProduct[];
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>; 
    originalProducts: IProduct[];
    setOriginalProducts: React.Dispatch<React.SetStateAction<IProduct[]>>; 
  }
  export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);
