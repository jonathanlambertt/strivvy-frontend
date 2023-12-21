import { Text } from "react-native";
import { useFonts } from "expo-font";

const AppName = ({ fontSize }) => {
  const [loaded] = useFonts({
    Vadelma: require("../../../assets/Vadelma-Medium.otf"),
  });

  if (!loaded) {
    return null;
  } else {
    return (
      <Text
        style={{
          fontFamily: "Vadelma",
          fontSize: fontSize,
          // 36 old fontSize
          marginBottom: 4,
        }}
      >
        strivvy
      </Text>
    );
  }
};

export default AppName;
