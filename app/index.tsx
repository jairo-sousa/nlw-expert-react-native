import { View, FlatList, SectionList, Text } from "react-native";
import { CATEGORIES, MENU } from "@/utils/data/products";

import tw from "twrnc";

import Header from "@/components/header";
import CategoryButton from "@/components/category-button";
import { useState } from "react";
import { styles } from "./_layout";

export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0]);

    function handleCategorySelect(selectedCategory: string) {
        if (selectedCategory != category) {
            setCategory(selectedCategory);
        } else {
            setCategory("");
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
                sections={MENU}
                keyExtractor={(item) => item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => (
                    <Text style={tw`text-white`}>{item.title}</Text>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text
                        style={[
                            tw`text-xl text-white mt-8 mb-3`,
                            styles.heading,
                        ]}>
                        {title}
                    </Text>
                )}
            />
        </View>
    );
}
