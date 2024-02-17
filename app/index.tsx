import { View, Text } from "react-native";

import tw from "twrnc";

export default function Home() {
    return (
        <View style={tw`flex-1 pt-8`}>
            <Text style={tw`text-white text-2xl font-heading`}>
                Hello World!
            </Text>
        </View>
    );
}
