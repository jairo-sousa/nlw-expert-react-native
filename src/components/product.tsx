import { styles } from "@@/app/_layout";

import { forwardRef } from "react";
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Image,
    ImageProps,
    View,
    Text,
} from "react-native";
import tw from "twrnc";

type ProducDataProps = {
    title: string;
    description: string;
    thumbnail: ImageProps;
};

type ProductProps = TouchableOpacityProps & {
    data: ProducDataProps;
};

export const Product = forwardRef<TouchableOpacity, ProductProps>(
    ({ data, ...res }, ref) => {
        return (
            <TouchableOpacity
                ref={ref}
                // style={tw`w-full flex-row items-center pb-4 text-white`}
                {...res}>
                <Image
                    source={data.thumbnail}
                    style={tw`w-20 h-20 rounded-md`}
                />

                <View style={tw`flex-1 ml-3`}>
                    <Text
                        style={[
                            tw`text-slate-100 text-base flex-1`,
                            styles.subtitle,
                        ]}>
                        {data.title}
                    </Text>
                    <Text style={[tw`text-slate-400 text-xs leading-5 mt-0.5`]}>
                        {data.description}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
);
