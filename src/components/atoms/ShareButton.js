import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ShareButton = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginRight: 10,
        paddingVertical: 3,
        borderColor: "#e9e9e9",
        //marginTop: 10,
      }}
    >
      <Ionicons
        name="ios-arrow-redo-circle-outline"
        size={23}
        color="#333"
        style={{ marginRight: 3 }}
      />
      <Text style={{ fontSize: 16, color: "#333" }}>share</Text>
    </View>
  );
};

export default ShareButton;
