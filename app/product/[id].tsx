import { styles } from "@@/app/_layout";
import { View, Text, Image } from "react-native";
import tw from "twrnc";

import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";

export default function Product() {
    const { id } = useLocalSearchParams();

    const product = PRODUCTS.filter((item) => item.id == id)[0];

    return (
        <View style={tw`flex-1`}>
            <Image
                source={product.cover}
                resizeMode="cover"
                style={tw`w-full h-52`}
            />

            <View style={tw`p-5 mt-8 flex-1`}>
                <Text style={[tw`text-lime-400 text-2xl ml-2`, styles.heading]}>
                    {formatCurrency(product.price)}
                </Text>
            </View>
        </View>
    );
}
