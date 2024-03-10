import { Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

const Fab = ({ navigation }) => {
  return (
    <Pressable
      style={{
        borderRadius: 40,
        position: "absolute",
        backgroundColor: "#ef305a",
        padding: 15,
        bottom: 20,
        right: 20,
        shadowColor: "#333",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.35,
      }}
      onPress={() => navigation.navigate("NewPost")}
    >
      <Feather name="plus" size={28} color="#fff" />
    </Pressable>
  );
};

export default Fab;
