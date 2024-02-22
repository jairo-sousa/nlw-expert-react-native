import tw from "twrnc";
import { styles } from "./_layout";
import { Text, View } from "react-native";

import { Header } from "@/components/header";
import { Product } from "@/components/product";

import { useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";

export default function Cart() {
    const cartStore = useCartStore();

    const total = formatCurrency(
        cartStore.products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        )
    );

    return (
        <View style={tw` flex-1 pt-8`}>
            <Header title="Seu carrinho" />

            {cartStore.products.length > 0 ? (
                <View style={tw`p-5 flex-1 `}>
                    {cartStore.products.map((product) => (
                        <Product key={product.id} data={product} />
                    ))}
                </View>
            ) : (
                <Text
                    style={[styles.body, tw`text-slate-400 text-center my-8`]}>
                    Seu carrinho está vazio
                </Text>
            )}

            <View style={tw`flex-row gap-2 items-center mt-5 mb-4`}>
                <Text style={[styles.subtitle, tw`text-white text-xl`]}>
                    Total:
                </Text>
                <Text style={[styles.heading, tw`text-lime-400 text-2xl`]}>
                    {total}
                </Text>
            </View>
        </View>
    );
}
