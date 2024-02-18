import { View, Text, StyleSheet } from "react-native";
import { styles } from "./_layout";
import tw from "twrnc";
import Header from "@/components/header";
import CategoryButton from "@/components/category-button";

export default function Home() {
    return (
        <View style={tw`flex-1 pt-8`}>
            <Header title="Faça seu pedido" cartQuantityItems={1} />

            <View style={tw`flex-row gap-4`}>
                <CategoryButton title="Lanhce do dia" isSelectet />
                <CategoryButton title="Lanhce do dia" />
                <CategoryButton title="Lanhce do dia" />
            </View>
        </View>
    );
}
