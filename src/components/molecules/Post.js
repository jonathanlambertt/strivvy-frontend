import { View, Text, StyleSheet, Button, Image } from "react-native";
import ProfilePicture from "../atoms/ProfilePicture";
import LikeButton from "../atoms/LikeButton";
import ShareButton from "../atoms/ShareButton";

const Post = ({ username, profile_picture }) => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <ProfilePicture src={profile_picture} />
        <Text numberOfLines={1} style={styles.username}>
          {username}
        </Text>
        <Button title="Follow" color={"#ef305a"} />
      </View>
      {/* body */}
      <View style={styles.body}>
        <Image
          style={{
            aspectRatio: "16/9",
            //alignSelf: "center",
            flex: 1,
            borderRadius: 8,
            //borderWidth: 0.5,
            //borderColor: "#e9e9e9",
            //width: 200,
          }}
          src="https://i.ytimg.com/vi/jBUeO6qd6WY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3cS96GjzJJtw2sJ75aNAjoXw3Gg"
        />
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Image
            src="https://www.youtube.com/s/desktop/9cc6dbeb/img/favicon_144x144.png"
            style={{ width: 18, height: 18, marginRight: 5 }}
          />
          <Text style={{ fontSize: 14, color: "#808080" }}>
            YouTube · GameGrumps
          </Text>
        </View>
        <Text numberOfLines={2} style={{ fontSize: 18, marginTop: 5 }}>
          The WEIRDEST games we played in 2022 | GG Compilation
        </Text>
      </View>
      {/* footer */}
      <View style={styles.footer}>
        <LikeButton />
        <ShareButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
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
  body: {
    marginTop: 10,
    borderColor: "#e9e9e9",
    borderRadius: 8,
    borderWidth: 1,
    padding: 8,
  },
  bodyImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    aspectRatio: "16/9",
  },
  faviconImage: {
    width: 20,
    height: 20,
    borderRadius: 40,
  },
  footer: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export default Post;
