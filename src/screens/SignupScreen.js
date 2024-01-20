import { useEffect, useState } from "react";
import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import strivvy from "../api/strivvy";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorText, setErrorText] = useState("");
  const [disableSignup, setDisableSignup] = useState(false);

  const signUp = async () => {
    const formattedUsername = lowerCaseText(username);
    const formattedEmail = lowerCaseText(email);
    try {
      setDisableSignup(true);
      setErrorText("");
      await strivvy.post("u/", {
        username: formattedUsername,
        password,
        email: formattedEmail,
      });
      navigation.navigate("MainScreen");
    } catch (error) {
      setDisableSignup(false);
      setErrorText(JSON.stringify(error.response.data));
    }
  };

  const lowerCaseText = (text) => {
    return text.toLowerCase();
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
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
      keyboardShouldPersistTaps="always"
      style={{ backgroundColor: "#fff" }}
    >
      <View style={{ marginHorizontal: 15 }}>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>Username</Text>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.linkInput}
          placeholder="Choose a username."
          placeholderTextColor={"#a9a9a9"}
          selectionColor={"#ef305a"}
          autoFocus
          autoCapitalize="none"
        />
        <Text style={{ fontSize: 16, marginBottom: 5, marginTop: 12 }}>
          Password
        </Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.linkInput}
          placeholder="Pick a strong password."
          placeholderTextColor={"#a9a9a9"}
          selectionColor={"#ef305a"}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Text style={{ fontSize: 16, marginBottom: 5, marginTop: 12 }}>
          Email (optional)
        </Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.linkInput}
          placeholder="Your email - if you want."
          placeholderTextColor={"#a9a9a9"}
          selectionColor={"#ef305a"}
          autoCapitalize="none"
        />
        {errorText ? (
          <Text
            style={{ color: "red", alignSelf: "center", marginVertical: 5 }}
          >
            {errorText}
          </Text>
        ) : null}
        <Pressable
          disabled={disableSignup}
          onPress={() => signUp()}
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
        >
          {disableSignup ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                fontWeight: 500,
                alignSelf: "center",
              }}
            >
              Sign up
            </Text>
          )}
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  linkInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ececec",
    //marginHorizontal: 15,
    borderRadius: 6,
    height: 48,
    //marginTop: 15,
    fontSize: 15,
    backgroundColor: "#fcfcfc",
  },
});

export default SignupScreen;
