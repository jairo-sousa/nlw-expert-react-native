import { View, FlatList } from "react-native";
import { CATEGORIES } from "@/utils/data/products";

import tw from "twrnc";

import Header from "@/components/header";
import CategoryButton from "@/components/category-button";
import { useState } from "react";

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
        </View>
    );
}
