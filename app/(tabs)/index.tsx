import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { PRODUCTS, CATEGORIES } from "@/constants";

export default function HomeScreen() {
  const [query, setQuery] = useState("");

  const filtered = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white p-4">
      
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-2xl font-bold">Welcome 👋</Text>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={26} />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View className="flex-row items-center border border-gray-300 rounded-xl px-3 py-2 mb-4">
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput
          className="flex-1 ml-2"
          placeholder="Search product..."
          value={query}
          onChangeText={setQuery}
        />
      </View>

      {/* Banner Promo */}
      <View className="w-full h-32 bg-blue-500 rounded-2xl mb-6 p-4 justify-center">
        <Text className="text-white text-xl font-bold">Discuont 50% 🎉</Text>
        <Text className="text-white">Bandeng Premium</Text>
      </View>

      {/* Categories */}
      <Text className="text-lg font-semibold mb-2">Categories</Text>
      <View className="flex-row justify-between mb-6">
        {CATEGORIES.map((cat) => (
          <TouchableOpacity
            key={cat.id}
            className="items-center bg-gray-100 rounded-xl p-3 w-[23%]"
          >
            <Ionicons name={cat.icon} size={24} />
            <Text className="text-xs mt-2">{cat.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Product List */}
      <Text className="text-lg font-semibold mb-2">Popular Products</Text>
      <FlatList
        data={filtered}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 50 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View className="bg-white border border-gray-200 rounded-xl p-3 mb-4 w-[48%]">
            <Image
              source={{ uri: item.image }}
              className="w-full h-28 rounded-lg mb-2"
            />
            <Text className="font-semibold">{item.name}</Text>
            <Text className="text-gray-600 text-sm">Rp {item.price.toLocaleString()}</Text>
            <TouchableOpacity className="mt-2 bg-blue-500 py-2 rounded-lg">
              <Text className="text-white text-center text-sm">Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
