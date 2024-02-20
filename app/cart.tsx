import tw from "twrnc";
import { styles } from "./_layout";
import { View } from "react-native";

import { Header } from "@/components/header";
import { Product } from "@/components/product";

import { useCartStore } from "@/stores/cart-store";

export default function Cart() {
    const cartStore = useCartStore();

    return (
        <View style={tw` flex-1 pt-8`}>
            <Header title="Seu carrinho" />

            <View style={tw`p-5 flex-1 `}>
                {cartStore.products.map((product) => (
                    <Product key={product.id} data={product} />
                ))}
            </View>
        </View>
    );
}
