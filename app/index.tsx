import { View, Text, StyleSheet } from "react-native";
import { styles } from "./_layout";
import tw from "twrnc";
import Header from "@/components/header";

export default function Home() {
    return (
        <View style={tw`flex-1 pt-8`}>
            <Header />
        </View>
    );
}
