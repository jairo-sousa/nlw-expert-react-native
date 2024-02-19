import { styles } from "@@/app/_layout";
import { Link, LinkProps } from "expo-router";
import tw from "twrnc";

type LinkButtonProps = LinkProps<string> & {
    title: string;
};

export function LinkButton({ title, ...rest }: LinkButtonProps) {
    return (
        <Link
            {...rest}
            style={[tw`text-slate-300 text-base text-center`, styles.body]}>
            {title}
        </Link>
    );
}
