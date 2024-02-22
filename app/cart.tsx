import tw from "twrnc";
import { styles } from "./_layout";
import { ScrollView, Text, View } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Header } from "@/components/header";
import { Product } from "@/components/product";

import { useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Input } from "@/components/imput";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";

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

            <KeyboardAwareScrollView>
                <ScrollView>
                    <View style={tw`p-5 flex-1 `}>
                        {cartStore.products.length > 0 ? (
                            <View style={tw`border-b border-slate-700`}>
                                {cartStore.products.map((product) => (
                                    <Product key={product.id} data={product} />
                                ))}
                            </View>
                        ) : (
                            <Text
                                style={[
                                    styles.body,
                                    tw`text-slate-400 text-center my-8`,
                                ]}>
                                Seu carrinho está vazio
                            </Text>
                        )}

                        <View style={tw`flex-row gap-2 items-center mt-5 mb-4`}>
                            <Text
                                style={[
                                    styles.subtitle,
                                    tw`text-white text-xl`,
                                ]}>
                                Total:
                            </Text>

                            <Text
                                style={[
                                    styles.heading,
                                    tw`text-lime-400 text-2xl`,
                                ]}>
                                {total}
                            </Text>
                        </View>

                        <Input placeholder="Informe o endereço de entrega com rua, bairro, cep, rua e complemento" />
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>

            <View style={tw`p-5 gap-5`}>
                <Button>
                    <Button.Text>Enviar pedido</Button.Text>
                    <Button.Icon>
                        {<Feather name="arrow-right-circle" size={20} />}
                    </Button.Icon>
                </Button>
            </View>
        </View>
    );
}
