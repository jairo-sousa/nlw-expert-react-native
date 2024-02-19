import { styles } from "@@/app/_layout";
import { View, Text, Image } from "react-native";
import tw from "twrnc";

import { useLocalSearchParams, useNavigation } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";

import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";
import { useCartStore } from "@/stores/cart-store";

export default function Product() {
    const cartStore = useCartStore();
    const navigation = useNavigation();
    const { id } = useLocalSearchParams();

    const product = PRODUCTS.filter((item) => item.id == id)[0];

    function handleAddToCart() {
        cartStore.add(product);
        navigation.goBack();
    }

    return (
        <View style={tw`flex-1`}>
            <Image
                source={product.cover}
                resizeMode="cover"
                style={tw`w-full h-52`}
            />

            <View style={tw`p-5 mt-8 flex-1`}>
                <Text style={[tw`text-lime-400 text-2xl my-2`, styles.heading]}>
                    {formatCurrency(product.price)}
                </Text>

                <Text
                    style={[
                        tw`text-slate-400 text-base leading-6 mb-6`,
                        styles.body,
                    ]}>
                    {product.description}
                </Text>

                {product.ingredients.map((ingredient) => (
                    <Text
                        key={ingredient}
                        style={[
                            tw`text-slate-400 text-base leading-6`,
                            styles.body,
                        ]}>
                        {"\u2022"} {ingredient}
                    </Text>
                ))}
            </View>

            <View style={tw`p-5 pb-8 gap-5`}>
                <Button onPress={handleAddToCart}>
                    <Button.Icon>
                        <Feather name="plus-circle" size={20} />
                    </Button.Icon>
                    <Button.Text>Adicionar ao Pedido</Button.Text>
                </Button>

                <LinkButton title="Voltar ao cardápio" href="/" />
            </View>
        </View>
    );
}
