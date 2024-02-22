import { TextInput, TextInputProps } from "react-native";

import tw from "twrnc";
import { styles } from "@@/app/_layout";

export function Input({ ...res }: TextInputProps) {
    return (
        <TextInput
            {...res}
            multiline
            textAlignVertical="top"
            placeholderTextColor="#94a3b8"
            style={[
                styles.body,
                tw`h-32 bg-slate-800 rounded-md px-4 py-3 text-sm text-white`,
            ]}
        />
    );
}
