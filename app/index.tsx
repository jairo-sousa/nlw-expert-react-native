import { View, Text } from "react-native";

import tw from "twrnc";

export default function Home() {
    return (
        <View style={tw`flex-1 items-center justify-center pt-8`}>
            <Text style={tw`text-green-600`}>Jadi</Text>
        </View>
    );
}
