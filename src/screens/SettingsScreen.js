import { useContext } from "react";
import { ScrollView, Button } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import * as SecureStore from "expo-secure-store";

const SettingsScreen = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const logOut = async () => {
    await SecureStore.setItemAsync("userToken", "");
    setIsLoggedIn(false);
  };

  return (
    <ScrollView>
      <Button title="Log out" color={"red"} onPress={() => logOut()} />
    </ScrollView>
  );
};

export default SettingsScreen;
