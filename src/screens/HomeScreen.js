import { useState } from "react";
import { FlatList, View } from "react-native";
import Post from "../components/Post";

const HomeScreen = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Post />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
