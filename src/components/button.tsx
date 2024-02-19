import { styles } from "@@/app/_layout";
import tw from "twrnc";

import { Text, TouchableOpacityProps, TouchableOpacity } from "react-native";
import { ReactNode } from "react";

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode;
};

type ButtonTextProps = {
    children: ReactNode;
};

type ButtonIconProps = {
    children: ReactNode;
};

function Button({ children, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            {...rest}
            style={tw`h-12 bg-lime-400 rounded-md items-center justify-center flex-row`}
            activeOpacity={0.7}>
            {children}
        </TouchableOpacity>
    );
}

function ButtonText({ children }: ButtonTextProps) {
    return (
        <Text style={[tw`text-black text-base mx-2`, styles.heading]}>
            {children}
        </Text>
    );
}

function ButtonIcon({ children }: ButtonIconProps) {
    return children;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };
