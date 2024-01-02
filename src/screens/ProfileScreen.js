import { useEffect, useState } from "react";
import { View, Pressable, ScrollView, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

import strivvy from "../api/strivvy";

const ProfileScreen = ({ navigation }) => {
  const [profile, setProfile] = useState({});

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
    } catch (error) {}
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ alignItems: "center", marginTop: 25 }}>
        <Text style={{ fontSize: 25, marginBottom: 30 }}>
          @{profile.username}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "center", marginRight: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>
              {profile.post_count}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 300 }}>posts</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: 500 }}>
              {profile.following_count}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: 300 }}>following</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
