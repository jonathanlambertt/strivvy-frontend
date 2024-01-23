import { useEffect, useState, useCallback } from "react";
import {
  View,
  Pressable,
  ScrollView,
  Text,
  RefreshControl,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import strivvy from "../api/strivvy";

const ProfileScreen = ({ navigation }) => {
  const [profile, setProfile] = useState({});
  const [refreshing, setRefreshing] = useState(true);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchProfile();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate("SettingsScreen")}>
          <Feather name="settings" size={28} color="#333" />
        </Pressable>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await strivvy.get("u/profile");
      setProfile(response.data);
      setRefreshing(false);
    } catch (error) {}
  };

  return (
    <ScrollView
      style={{ backgroundColor: "#fff" }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ alignItems: "center", marginTop: 25 }}>
        <Text style={{ fontSize: 25, marginBottom: 30 }}>
          @{profile.username}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "center", marginRight: 30 }}>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              {profile.post_count}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 300 }}>posts</Text>
          </View>
          <View style={{ alignItems: "center", marginRight: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              {profile.followers_count}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 300 }}>followers</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              {profile.following_count}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 300 }}>following</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
