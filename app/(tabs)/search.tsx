import { useState } from "react";
import { View, TextInput, Text, FlatList } from "react-native";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const data = ["Sate Bandeng", "Abon Bandeng", "Emping Melinjo", "Gipang", "Bontot"];

  const filtered = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white p-4">
      <TextInput
        className="border border-gray-300 rounded-xl p-3 mb-4"
        placeholder="Search product..."
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text className="text-lg p-2 border-b border-gray-200">{item}</Text>
        )}
        ListEmptyComponent={<Text className="text-gray-400">No results found.</Text>}
      />
    </View>
  );
}
