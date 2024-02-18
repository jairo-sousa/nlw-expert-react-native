import { styles } from "./_layout";
import tw from "twrnc";

import Header from "@/components/header";
import CategoryButton from "@/components/category-button";
import Product from "@/components/product";

import { View, FlatList, SectionList, Text } from "react-native";
import { useRef, useState } from "react";

import { CATEGORIES, MENU } from "@/utils/data/products";

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0]);
    const sectionListRef = useRef<SectionList>(null);

    function handleCategorySelect(selectedCategory: string) {
        setCategory(selectedCategory);

        const sectionIndex = CATEGORIES.findIndex(
            (category) => category === selectedCategory
        );

        if (sectionListRef.current) {
            sectionListRef.current.scrollToLocation({
                animated: true,
                sectionIndex,
                itemIndex: 0,
            });
        }
    }

    return (
        <View style={tw`flex-1 pt-8`}>
            <Header title="Faça seu pedido" cartQuantityItems={1} />

            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <CategoryButton
                        title={item}
                        isSelectet={item === category}
                        onPress={() => handleCategorySelect(item)}
                    />
                )}
                horizontal
                style={tw`max-h-10 mt-5`}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 12 }}
                showsHorizontalScrollIndicator={false}
            />

            <SectionList
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={(item) => item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => <Product data={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text
                        style={[
                            tw`text-xl text-white mt-8 mb-3`,
                            styles.heading,
                        ]}>
                        {title}
                    </Text>
                )}
                style={[tw`flex-1 p-5`]}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    );
}
