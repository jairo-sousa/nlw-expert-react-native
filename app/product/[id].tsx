import { styles } from "@@/app/_layout";
import { View, Text } from "react-native";
import tw from "twrnc";

import { useLocalSearchParams } from "expo-router";

export default function Product() {
    const { id } = useLocalSearchParams();
    alert(id);
    return <View style={tw`flex-1`}></View>;
}
