import tw from "twrnc";
import { styles } from "./_layout";

import { Header } from "@/components/header";

import { View } from "react-native";

export default function Cart() {
    return (
        <View style={[tw` flex-1 pt-8`]}>
            <Header title="Seu carrinho" />
        </View>
    );
}
