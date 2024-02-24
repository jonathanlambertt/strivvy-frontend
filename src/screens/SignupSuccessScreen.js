import { useEffect } from "react";
import { Text, ScrollView, Pressable, View, Button } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const SignupSuccessScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.navigate("MainScreen")}>
          <Feather
            name="chevron-left"
            size={35}
            color="#333"
            style={{ marginLeft: -11 }}
          />
        </Pressable>
      ),
    });
  }, [navigation]);
  return (
    <ScrollView
      style={{
        //alignItems: "center",
        //flex: 1,
        //justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <FontAwesome5 name="check-circle" size={85} color="green" />
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            marginHorizontal: 15,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Your account was created successfully!
        </Text>
        <Text>Log in to get started!</Text>
        <Button
          title="Log in"
          color={"#ef305a"}
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
    </ScrollView>
  );
};

export default SignupSuccessScreen;
