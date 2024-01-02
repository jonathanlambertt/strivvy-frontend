import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator();

const ProfileStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: "Settings",
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Pressable onPress={() => navigation.navigate("ProfileScreen")}>
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

export default ProfileStack;
