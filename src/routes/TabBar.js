import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const PlaceHolder = () => {};

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#333",
        tabBarInactiveTintColor: "#a9a9a9",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <AntDesign
                name="home"
                size={30}
                color={color}
                style={{ marginTop: 5 }}
              />
            );
          },
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="NewPostScreen"
        component={PlaceHolder}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("NewPost");
          },
        })}
        options={{
          tabBarIcon: () => {
            return <Feather name="plus-circle" size={40} color="#ef305a" />;
          },
          tabBarLabelStyle: { display: "none" },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Feather
                name="user"
                size={30}
                color={color}
                style={{ marginTop: 5 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
