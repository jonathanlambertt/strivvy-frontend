import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LikeButton = ({ liked }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={() => console.log("liked")}
      >
        {liked ? (
          <>
            <Ionicons
              name="heart-sharp"
              size={23}
              color="#333"
              style={{ marginRight: 3, color: "#ef305a" }}
            />
            <Text style={{ fontSize: 16, color: "#333" }}>liked</Text>
          </>
        ) : (
          <>
            <Ionicons
              name="ios-heart-outline"
              size={23}
              color="#333"
              style={{ marginRight: 3 }}
            />
            <Text style={{ fontSize: 16, color: "#333" }}>like</Text>
          </>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginRight: 10,
    paddingVertical: 3,
    borderColor: "#e9e9e9",
  },
});

export default LikeButton;
