import { View, Text } from "react-native";

import tw from "twrnc";

export default function Home() {
    return (
        <View style={tw`flex-1 items-center justify-center bg-slate-900`}>
            <Text style={tw`weight-bold text-white`}>Hello World!</Text>
        </View>
    );
}
