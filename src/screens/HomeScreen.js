import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  FlatList,
  View,
  RefreshControl,
  Text,
  ActivityIndicator,
  Animated,
} from "react-native";
import Post from "../components/molecules/Post";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import AppName from "../components/atoms/AppName";
import strivvy from "../api/strivvy";

const AnimatedPostRow = ({ children, animate }) => {
  const opacity = useRef(new Animated.Value(animate ? 0 : 1)).current;
  const translateY = useRef(new Animated.Value(animate ? -10 : 0)).current;

  useEffect(() => {
    if (!animate) return;

    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 220,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 220,
        useNativeDriver: true,
      }),
    ]).start();
  }, [animate, opacity, translateY]);

  return (
    <Animated.View style={{ opacity, transform: [{ translateY }] }}>
      {children}
    </Animated.View>
  );
};

const HomeScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const [fetching, setFetching] = useState(true);

  // Track which IDs should animate on the next render
  const [animateIds, setAnimateIds] = useState(new Set());
  const prevIdsRef = useRef(new Set());

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

  useEffect(() => {
    if (route?.params?.justShared) {
      fetchFeed();

      // clear it so it doesn't refetch every time Home focuses
      navigation.setParams({ justShared: false });
    }
  }, [route?.params?.justShared]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchFeed();
  }, []);

  const fetchFeed = async () => {
    const response = await strivvy.get("u/feed");
    const nextPosts = response.data;

    // Determine which posts are newly introduced vs previous state
    const nextIds = new Set(nextPosts.map((p) => p.id));
    const prevIds = prevIdsRef.current;

    const newlyAdded = new Set();
    for (const id of nextIds) {
      if (!prevIds.has(id)) newlyAdded.add(id);
    }

    prevIdsRef.current = nextIds;
    setAnimateIds(newlyAdded);

    setFetching(false);
    setPosts(nextPosts);
    setRefreshing(false);

    // Optional: clear the animate flags shortly after so it only runs once
    if (newlyAdded.size > 0) {
      setTimeout(() => setAnimateIds(new Set()), 400);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {fetching ? (
        <ActivityIndicator style={{ marginTop: 10 }} size={"large"} />
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <AnimatedPostRow animate={animateIds.has(item.id)}>
              <Post post={item} nav={navigation} />
            </AnimatedPostRow>
          )}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <View>
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
            </View>
          }
        />
      )}
    </View>
  );
};

export default HomeScreen;
