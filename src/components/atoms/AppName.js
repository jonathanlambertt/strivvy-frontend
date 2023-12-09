import { Text } from "react-native";
import { useFonts } from "expo-font";

const AppName = () => {
  const [loaded] = useFonts({
    Vadelma: require("../../../assets/Vadelma-Medium.otf"),
  });

  if (!loaded) {
    return null;
  } else {
    return <Text style={{ fontFamily: "Vadelma", fontSize: 33 }}>strivvy</Text>;
  }
};

export default AppName;
