import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";
import NewPostScreen from "../screens/NewPostScreen";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabBar"
        component={TabBar}
        options={{ headerShown: false }}
      />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{ title: "Share a link" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStack;
