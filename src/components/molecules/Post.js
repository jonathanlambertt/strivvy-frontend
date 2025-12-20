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
      <View style={styles.footer}>
        <Pressable onPress={() => handleLikeButton()}>
          <LikeButton isLiked={isLiked} />
        </Pressable>
        <Pressable onPress={() => share()}>
          <ShareButton />
        </Pressable>
      </View>
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

// import {
//   View,
//   Text,
//   StyleSheet,
//   Pressable,
//   Share,
//   Alert,
//   Image,
// } from "react-native";
// import AppLink from "react-native-app-link";
// import ShareButton from "../atoms/ShareButton";
// import LikeButton from "../atoms/LikeButton";
// import { useEffect, useMemo, useState } from "react";
// import strivvy from "../../api/strivvy";

// const Post = ({ post }) => {
//   const [isLiked, setIsLiked] = useState(post.is_liked);
//   const [timerActive, setTimerActive] = useState(false);

//   const openLink = () => {
//     AppLink.maybeOpenURL(post.url, {}).catch(() => {});
//   };

//   const share = async () => {
//     try {
//       await Share.share({ message: `${post.url}` });
//     } catch (error) {
//       Alert.alert(error.message);
//     }
//   };

//   const handleLikeButton = async () => {
//     if (!timerActive) {
//       setIsLiked((prev) => !prev);
//       setTimerActive(true);
//     }
//   };

//   const likePost = async () => {
//     try {
//       await strivvy.post(`l/${post.id}`);
//     } catch (error) {}
//   };

//   const deleteLike = async () => {
//     try {
//       await strivvy.delete(`l/delete/${post.like_id}`);
//     } catch (error) {}
//   };

//   useEffect(() => {
//     let timer;

//     if (timerActive) {
//       timer = setTimeout(() => {
//         if (!isLiked) deleteLike();
//         else likePost();
//         setTimerActive(false);
//       }, 1000);
//     }

//     return () => clearTimeout(timer);
//   }, [timerActive, isLiked]);

//   // Optional: if your API sometimes returns null/empty strings
//   const title = useMemo(() => (post.title || "").trim(), [post.title]);
//   const description = useMemo(
//     () => (post.description || "").trim(),
//     [post.description]
//   );
//   const siteName = useMemo(
//     () => (post.site_name || "").trim(),
//     [post.site_name]
//   );

//   return (
//     <View style={styles.container}>
//       {/* header */}
//       <View style={styles.header}>
//         <Text numberOfLines={1} style={styles.username}>
//           @{post.username}
//         </Text>
//       </View>

//       {/* body */}
//       <Pressable onPress={openLink} style={styles.card}>
//         <Image
//           source={{ uri: post.thumbnail }}
//           style={styles.thumbnail}
//           resizeMode="cover"
//         />

//         <View style={styles.content}>
//           <Text numberOfLines={2} style={styles.title}>
//             {title || "Untitled link"}
//           </Text>

//           {!!description && (
//             <Text numberOfLines={2} style={styles.description}>
//               {description}
//             </Text>
//           )}

//           <View style={styles.metaRow}>
//             {!!post.favicon && (
//               <Image source={{ uri: post.favicon }} style={styles.favicon} />
//             )}
//             <Text numberOfLines={1} style={styles.siteName}>
//               {siteName || "Website"}
//             </Text>
//           </View>
//         </View>
//       </Pressable>

//       {/* footer */}
//       <View style={styles.footer}>
//         <Pressable onPress={handleLikeButton}>
//           <LikeButton isLiked={isLiked} />
//         </Pressable>

//         <Pressable onPress={share}>
//           <ShareButton />
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 15,
//     marginBottom: 5,
//     paddingBottom: 10,
//     paddingTop: 10,
//     borderColor: "#e9e9e9",
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 6,
//   },
//   username: {
//     fontSize: 16,
//     fontWeight: "500",
//     flex: 1,
//     color: "#111",
//   },

//   // New horizontal card
//   card: {
//     flexDirection: "row",
//     borderWidth: 1,
//     borderColor: "#e9e9e9",
//     borderRadius: 12,
//     overflow: "hidden",
//     backgroundColor: "#fff",
//   },
//   thumbnail: {
//     width: 110,
//     height: 110,
//     backgroundColor: "#f2f2f2",
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 15,
//     fontWeight: "700",
//     color: "#111",
//     marginBottom: 4,
//   },
//   description: {
//     fontSize: 13,
//     color: "#444",
//     lineHeight: 18,
//     marginBottom: 8,
//   },
//   metaRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 6, // if your RN version doesn't support gap, replace with marginRight on favicon
//   },
//   favicon: {
//     width: 16,
//     height: 16,
//     borderRadius: 8,
//     backgroundColor: "#f2f2f2",
//   },
//   siteName: {
//     fontSize: 12,
//     color: "#666",
//     flex: 1,
//   },

//   footer: {
//     flexDirection: "row",
//     marginTop: 8,
//     marginBottom: 5,
//   },
// });

// export default Post;
