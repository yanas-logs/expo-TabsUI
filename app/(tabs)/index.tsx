import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import cn from "clsx";

import CartButton from "@/components/CartButton";
import { offers } from "@/constants";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="pb-28 px-5"
        
        ListHeaderComponent={() => (
          <View className="flex-row justify-between items-center w-full my-5">
            <View>
              <Text className="small-bold text-primary">DELIVER TO</Text>
              <Text className="paragraph-bold text-dark-100 mt-0.5">
                Antartica
              </Text>
            </View>
            <CartButton />
          </View>
        )}

        renderItem={({ item, index }) => {
          const isEven = index % 2 === 0;

          return (
            <Pressable
              className={cn(
                "offer-card mb-4",
                isEven ? "flex-row-reverse" : "flex-row"
              )}
              style={{ backgroundColor: item.color }}
              android_ripple={{ color: "#ffffff22" }}
              onPress={() => console.log(`Pressed ${item.title}`)}
            >
              {/* Image */}
              <View className="h-full w-1/2">
                <Image
                  source={item.image}
                  className="size-full rounded-xl"
                  resizeMode="contain"
                />
              </View>

              {/* Info */}
              <View className={cn(
                "offer-card__info",
                isEven ? "pl-10" : "pr-10"
              )}>
                <Text className="h1-bold text-white">{item.title}</Text>

                {/*
                <Pressable
                  className="bg-blue-500 py-3 px-5 rounded-xl mt-2"
                  onPress={() => console.log(`Add to Cart: ${item.title}`)}
                >
                  <Text className="text-white text-center font-medium text-base">
                    Add to Cart
                  </Text>
                </Pressable>
                */}
              </View>
            </Pressable>
          );
        }}
      />
    </SafeAreaView>
  );
}
