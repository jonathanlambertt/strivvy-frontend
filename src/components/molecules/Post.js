import { View, Text, StyleSheet, Pressable, Share, Alert } from "react-native";
import LinkPreview from "./LinkPreview";
import AppLink from "react-native-app-link";
import ShareButton from "../atoms/ShareButton";
import LikeButton from "../atoms/LikeButton";
import { useEffect, useState } from "react";
import strivvy from "../../api/strivvy";

const Post = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.is_liked);
  const [timerActive, setTimerActive] = useState(false);

  const openLink = () => {
    AppLink.maybeOpenURL(post.url, {})
      .then(() => {
        // do stuff
      })
      .catch((err) => {
        // handle error
      });
  };

  const share = async () => {
    try {
      const result = await Share.share({
        message: `${post.url}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handleLikeButton = async () => {
    // If the timer is not already active, start the timer
    if (!timerActive) {
      setIsLiked((prevIsLiked) => !prevIsLiked);
      setTimerActive(true);
    }
  };

  const likePost = async () => {
    try {
      await strivvy.post(`l/${post.id}`);
    } catch (error) {}
  };

  const deleteLike = async () => {
    try {
      await strivvy.delete(`l/delete/${post.like_id}`);
    } catch (error) {}
  };

  useEffect(() => {
    let timer;

    if (timerActive) {
      // Set a delay of 1 second for the debounce
      timer = setTimeout(() => {
        // Simulate API call based on the latest state of isLiked
        if (!isLiked) {
          deleteLike();
        } else {
          likePost();
        }
        setTimerActive(false); // Reset timer status
      }, 1000);
    }

    return () => {
      // Cleanup function to clear the timer when the component unmounts or timerActive changes
      clearTimeout(timer);
    };
  }, [timerActive, isLiked]);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text numberOfLines={1} style={styles.username}>
          @{post.username}
        </Text>
      </View>
      {/* body */}
      <Pressable onPress={() => openLink()}>
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
        <Pressable onPress={() => handleLikeButton()}>
          <LikeButton isLiked={isLiked} />
        </Pressable>
        <Pressable onPress={() => share()}>
          <ShareButton />
        </Pressable>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginBottom: 5,
    //borderBottomWidth: 0.5,
    paddingBottom: 10,
    paddingTop: 10,
    borderColor: "#e9e9e9",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
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
    marginBottom: 5,
  },
});

export default Post;
