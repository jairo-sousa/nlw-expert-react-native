import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "@@/app/_layout";
import { Feather } from "@expo/vector-icons";

import tw from "twrnc";

type HeaderProps = {
    title: string;
    cartQuantityItems?: number;
};

export default function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
    return (
        <View
            style={tw`flex-row items-center border-b border-slate-700 pb-5 mx-5`}>
            <View style={tw`flex-1 `}>
                <Image
                    source={require("@/assets/logo.png")}
                    style={tw`h-6 w-32 `}
                />
                <Text style={[tw`text-white text-xl mt-2`, styles.heading]}>
                    {title}
                </Text>
            </View>

            {cartQuantityItems > 0 && (
                <TouchableOpacity style={[tw`relative `]} activeOpacity={0.7}>
                    <View
                        style={tw`bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5`}>
                        <Text style={[tw`text-slate-900 text-xs`, styles.bold]}>
                            {cartQuantityItems}
                        </Text>
                    </View>

                    <Feather name="shopping-bag" color={"white"} size={24} />
                </TouchableOpacity>
            )}
        </View>
    );
}
