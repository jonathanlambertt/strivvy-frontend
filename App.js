// react, react-native imports
import { View } from "react-native";

// react-navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// expo imports
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  return <View></View>;
};

const ProfileScreen = () => {
  return <View></View>;
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#333",
          tabBarInactiveTintColor: "#a9a9a9",
          tabBarIcon: ({ color }) => {
            if (route.name == "Home") {
              return <AntDesign name="home" size={30} color={color} />;
            } else if (route.name == "Profile") {
              return <Feather name="user" size={30} color={color} />;
            }
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "strivvy" }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
