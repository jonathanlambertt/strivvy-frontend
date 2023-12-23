import { useContext } from "react";
import { View, Button } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import * as SecureStore from "expo-secure-store";

const ProfileScreen = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const logOut = async () => {
    await SecureStore.setItemAsync("userToken", "");
    setIsLoggedIn(false);
  };

  return (
    <View>
      <Button title="Log out" onPress={() => logOut()} />
    </View>
  );
};

export default ProfileScreen;
