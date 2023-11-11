import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabBar"
        component={TabBar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
