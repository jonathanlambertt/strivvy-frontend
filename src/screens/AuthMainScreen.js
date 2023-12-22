import { Text, SafeAreaView, Pressable } from "react-native";
import AppName from "../components/atoms/AppName";

const AuthMainScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <AppName fontSize={45} />
      <Pressable
        style={{
          borderWidth: 1,
          borderColor: "#ef305a",
          paddingHorizontal: 50,
          paddingVertical: 9,
          borderRadius: 6,
          backgroundColor: "#ef305a",
          marginBottom: 10,
          marginTop: 15,
        }}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: 500 }}>
          Log in
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("SignupScreen")}>
        <Text style={{ fontSize: 18, color: "#ef305a", fontWeight: 500 }}>
          Sign up
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default AuthMainScreen;
