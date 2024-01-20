import { useCallback } from "react";
import {
  FlatList,
  View,
  RefreshControl,
  Text,
  ActivityIndicator,
} from "react-native";
import Post from "../components/molecules/Post";
import { useEffect, useLayoutEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import AppName from "../components/atoms/AppName";
import strivvy from "../api/strivvy";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const [fetching, setFetching] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <AppName fontSize={36} />,
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate("SearchScreen")}>
          <Feather name="search" size={28} color="#333" />
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    fetchFeed();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    const response = await strivvy.get("u/feed");
    setFetching(false);
    setPosts(response.data);
    setRefreshing(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {fetching ? (
        <ActivityIndicator style={{ marginTop: 10 }} size={"large"} />
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post post={item} nav={navigation} />}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: 400,
                  marginHorizontal: 10,
                  lineHeight: 25,
                  marginTop: 25,
                }}
              >
                Welcome to Strivvy! To get started you can:
              </Text>
              <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <Text
                  style={{ fontSize: 18, fontWeight: 500, marginBottom: 5 }}
                >
                  • Share a link by tapping the plus button below.
                </Text>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  • Search for people to follow by tapping the magnifying glass
                  at the top.
                </Text>
              </View>
            </>
          }
        />
      )}
    </View>
  );
};

export default HomeScreen;
