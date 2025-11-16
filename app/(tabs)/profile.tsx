import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text className="text-xl font-semibold">Profile Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 22,
        fontWeight: "600",
    },
});
