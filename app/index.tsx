import { View, Text, StyleSheet } from "react-native";
import { styles } from "./_layout";
import tw from "twrnc";

export default function Home() {
    return (
        <View style={tw`flex-1 pt-8`}>
            <Text style={[tw`text-white text-2xl`, styles.heading]}>
                Hello World!
            </Text>
        </View>
    );
}
