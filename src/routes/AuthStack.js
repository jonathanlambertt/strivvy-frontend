import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthMainScreen from "../screens/AuthMainScreen";
import SignupScreen from "../screens/SignupScreen";

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
        {/* <Stack.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{ title: "Share a link" }}
        /> */}
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
