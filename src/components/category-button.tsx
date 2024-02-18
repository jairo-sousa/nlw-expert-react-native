import { Text, Pressable, PressableProps } from "react-native";
import { clsx } from "clsx";

import tw from "twrnc";
import { styles } from "@@/app/_layout";

type CategoryProps = PressableProps & {
    title: string;
    isSelectet?: boolean;
};

export function CategoryButton({ title, isSelectet, ...rest }: CategoryProps) {
    return (
        <Pressable
            style={tw`${clsx(
                `bg-slate-800 px-4 justify-center rounded-md h-10`,
                isSelectet && `border-2 border-lime-300`
            )}`}
            {...rest}>
            <Text style={[tw`text-slate-100 text-sm`, styles.subtitle]}>
                {title}
            </Text>
        </Pressable>
    );
}
