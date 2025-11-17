import { offers } from "@/constants";
import React, { Fragment } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function IndexScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white px-4 pt-4">
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="pb-20"
        renderItem={({ item }) => (
          <View className="mb-3">
            <Pressable
              className="offer-card"
              style={{ backgroundColor: item.color }}
              android_ripple={{ color: '#ffffff22' }}
            >
              {({ pressed }) => (
                <Fragment>
                  <View>

                  </View>
                </Fragment>
              )}
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
