import { Image, StyleSheet } from "react-native";

const ProfilePicture = ({ src }) => {
  return <Image src={src} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderColor: "#e9e9e9",
    borderWidth: 0.5,
  },
});

export default ProfilePicture;
