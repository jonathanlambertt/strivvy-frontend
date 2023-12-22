import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthMainScreen from "../screens/AuthMainScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: { fontSize: 18, color: "#333" },
      }}
    >
      <Stack.Screen
        name="MainScreen"
        component={AuthMainScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          title: "Sign up",
        }}
      />
      <Stack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "Log in" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
