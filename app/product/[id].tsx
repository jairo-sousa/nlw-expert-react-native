import { styles } from "@@/app/_layout";
import { View, Text } from "react-native";
import tw from "twrnc";

import { useLocalSearchParams } from "expo-router";

export default function Product() {
    const { id } = useLocalSearchParams();

    return (
        <View style={tw`flex-1 items-center justify-center`}>
            <Text style={tw`text-white text-4xl`}>Product id: {id}</Text>
        </View>
    );
}
