import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
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
          } else if (route.name == "NewPost") {
            return <Feather name="plus" size={35} color="#333" />;
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
  );
};

export default TabBar;
