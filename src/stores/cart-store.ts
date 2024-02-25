import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import * as cartInMemory from "./helpers/cart-in-memory";

import AsyncStorage from "@react-native-async-storage/async-storage";

export type ProductsCartProps = ProductProps & {
    quantity: number;
};

type StateProps = {
    products: ProductsCartProps[];
    add: (product: ProductProps) => void;
    remove: (productId: string) => void;
    clear: () => void;
};

export const useCartStore = create(
    persist<StateProps>(
        (set) => ({
            products: [],
            add: (product: ProductProps) =>
                set((state) => ({
                    products: cartInMemory.add(state.products, product),
                })),
            remove: (productid: string) =>
                set((state) => ({
                    products: cartInMemory.remove(state.products, productid),
                })),
            clear: () => set(() => ({ products: [] })),
        }),
        {
            name: "nlw-expert:cart  ",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
