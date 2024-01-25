import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LikeButton = ({ isLiked }) => {
  return (
    <View style={styles.container}>
      {isLiked ? (
        <>
          <Ionicons
            name="heart-sharp"
            size={20}
            color="#333"
            style={{ marginRight: 3, color: "#ef305a" }}
          />
          <Text style={{ fontSize: 14, color: "#333" }}>liked</Text>
        </>
      ) : (
        <>
          <Ionicons
            name="ios-heart-outline"
            size={20}
            color="#333"
            style={{ marginRight: 3 }}
          />
          <Text style={{ fontSize: 14, color: "#333" }}>like</Text>
        </>
      )}
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
    marginRight: 8,
    paddingVertical: 3,
    borderColor: "#e9e9e9",
  },
});

export default LikeButton;
