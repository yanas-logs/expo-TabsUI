import { Image, ScrollView, StyleSheet } from "react-native";

export default function MiniCarousel() {
    const items = [
        "https://picsum.photos/400/200?1",
        "https://picsum.photos/400/200?2",
        "https://picsum.photos/400/200?3",
    ];


    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {items.map((uri, i) => (
                <Image key={i} source={{ uri }} style={styles.image} />
            ))}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: { marginVertical: 16 },
    image: {
        width: 260,
        height: 140,
        borderRadius: 16,
        marginRight: 12,
    },
});
