import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native";
import LinkPreview from "./LinkPreview";

const Post = ({ nav, post }) => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.username}>
          @{post.username}
        </Text>
      </View>
      {/* body */}
      <Pressable
        onPress={() => nav.navigate("LinkViewScreen", { uri: post.url })}
      >
        <LinkPreview
          image={post.thumbnail}
          title={post.title}
          description={post.description}
          favicon={post.favicon}
          siteName={post.site_name}
        />
      </Pressable>
      {/* footer */}
      {/* <View style={styles.footer}>
        <ShareButton />
      </View> */}
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
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    //marginLeft: 7,
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
    marginTop: 8,
  },
});

export default Post;
