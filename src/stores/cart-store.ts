import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";

export type ProductsCartProps = ProductProps & {
    quantity: number;
};

type StateProps = {
    products: ProductsCartProps[];
    add: (product: ProductProps) => void;
};

export const useCartStore = create<StateProps>((set) => ({
    products: [],
    add: () => {},
}));
