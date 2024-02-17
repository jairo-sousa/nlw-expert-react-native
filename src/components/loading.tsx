import { ActivityIndicator, View } from "react-native";
import tw from "twrnc";

export function Loading() {
    return (
        <View style={tw`flex-1 items-center justify-center bg-slate-900`}>
            <ActivityIndicator color="white" />
        </View>
    );
}
