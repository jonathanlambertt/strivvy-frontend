import { FlatList, View } from "react-native";
import Post from "../components/molecules/Post";
import { useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import AppName from "../components/atoms/AppName";

const HomeScreen = ({ navigation }) => {
  const data = [];

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <AppName fontSize={36} />,
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate("SearchScreen")}>
          <Feather name="search" size={28} color="#333" />
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Post
            username={item.username}
            profile_picture={item.profile_picture}
            timestamp={item.timestamp}
            image={item.image}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default HomeScreen;
