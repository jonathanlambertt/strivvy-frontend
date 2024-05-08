import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ExploreScreen from "../screens/ExploreScreen";

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerTitleStyle: { color: "#333", fontSize: 18 } }}
    >
      <Stack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{ title: "Explore" }}
      />
    </Stack.Navigator>
  );
};

export default ExploreStack;
