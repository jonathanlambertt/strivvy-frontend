import { FlatList, View } from "react-native";
import Post from "../components/molecules/Post";

const HomeScreen = () => {
  const data = [];
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
