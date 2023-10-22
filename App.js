import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <Text>strivvy</Text>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
