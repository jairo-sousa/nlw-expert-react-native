import { View, Text, Image } from "react-native";
import { styles } from "@@/app/_layout";

import tw from "twrnc";

export default function Header() {
    return (
        <View
            style={tw`flex-row items-center border-b border-slate-700 pb-5 mx-5`}>
            <View style={tw`flex-1 `}>
                <Image
                    source={require("@/assets/logo.png")}
                    style={tw`h-6 w-32 `}
                />
                <Text style={[tw`text-white text-xl mt-2`, styles.heading]}>
                    Cardápio
                </Text>
            </View>
        </View>
    );
}