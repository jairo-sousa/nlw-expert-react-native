import { StyleSheet, View, Text } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0F172A",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
});
