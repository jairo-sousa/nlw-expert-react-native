import { SafeAreaView, View } from "react-native";
import { Slot } from "expo-router";

import tw from "twrnc";

export default function Layout() {
    return (
        <SafeAreaView style={tw`flex-1 bg-slate-900 `}>
            <Slot />
        </SafeAreaView>
    );
}
