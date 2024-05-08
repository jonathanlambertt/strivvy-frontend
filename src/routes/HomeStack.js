import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleStyle: { color: "#333", fontSize: 18 } }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: "Search",
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Feather
                name="chevron-left"
                size={35}
                color="#333"
                style={{ marginLeft: -11 }}
              />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
