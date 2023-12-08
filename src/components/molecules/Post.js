import { View, Text, StyleSheet, Button } from "react-native";
import ProfilePicture from "../atoms/ProfilePicture";

const Post = ({ username, profile_picture }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProfilePicture src={profile_picture} />
        <Text numberOfLines={1} style={styles.username}>
          {username}
        </Text>
        <Button title="Follow" color={"#ef305a"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 10,
    borderColor: "#e9e9e9",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: 15,
    fontWeight: "500",
    flex: 1,
    marginLeft: 7,
  },
});

export default Post;
