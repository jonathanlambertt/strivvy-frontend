import { useEffect, useState, useContext } from "react";
import {
  ScrollView,
  Text,
  Pressable,
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import strivvy from "../api/strivvy";
import * as SecureStore from "expo-secure-store";
import { AuthContext } from "../contexts/AuthContext";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [disableLogin, setDisableLogin] = useState(false);

  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={28} color="#333" />
        </Pressable>
      ),
    });
  }, [navigation]);

  const logIn = async () => {
    const formattedUsername = lowerCaseText(username);
    try {
      setDisableLogin(true);
      setErrorText("");
      const response = await strivvy.post("u/login", {
        username: formattedUsername,
        password,
      });
      await SecureStore.setItemAsync("userToken", response.data.token);
      setIsLoggedIn(true);
    } catch (error) {
      setDisableLogin(false);
      setErrorText(JSON.stringify(error.response.data));
    }
  };

  const lowerCaseText = (text) => {
    return text.toLowerCase();
  };

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
          placeholder="Please enter your username."
          placeholderTextColor={"#a9a9a9"}
          selectionColor={"#ef305a"}
          autoFocus
        />
        <Text style={{ fontSize: 16, marginBottom: 5, marginTop: 12 }}>
          Password
        </Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.linkInput}
          placeholder="Please enter your password."
          placeholderTextColor={"#a9a9a9"}
          selectionColor={"#ef305a"}
          secureTextEntry={true}
        />
        {errorText ? (
          <Text
            style={{ color: "red", alignSelf: "center", marginVertical: 5 }}
          >
            {errorText}
          </Text>
        ) : null}
        <Pressable
          disabled={disableLogin}
          onPress={() => logIn()}
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
          {disableLogin ? (
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
              Log in
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
    borderRadius: 6,
    height: 48,
    fontSize: 15,
    backgroundColor: "#fcfcfc",
  },
});

export default LoginScreen;
