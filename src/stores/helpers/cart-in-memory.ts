import { ProductProps } from "@/utils/data/products";
import { ProductsCartProps } from "../cart-store";

export function add(products: ProductsCartProps[], newProduct: ProductProps) {
    const eixistingProduct = products.find(({ id }) => newProduct.id === id);

    if (eixistingProduct) {
        return products.map((product) =>
            product.id === eixistingProduct.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
        );
    }

    return [...products, { ...newProduct, quantity: 1 }];
}
