import { SafeAreaView, View } from "react-native";
import { Slot } from "expo-router";

import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Loading } from "@/components/loading";

import tw from "twrnc";

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
    });

    if (!fontsLoaded) {
        return <Loading />;
    }

    return (
        <SafeAreaView style={tw`flex-1 bg-slate-900 pt-8`}>
            <Slot />
        </SafeAreaView>
    );
}
