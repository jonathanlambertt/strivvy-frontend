import { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";

import RootStack from "./src/routes/RootStack";
import AuthStack from "./src/routes/AuthStack";
import { AuthContext } from "./src/contexts/AuthContext";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchToken = async () => {
    const token = await SecureStore.getItemAsync("userToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchToken();
  }, []);

  if (isLoading) {
    return <View></View>;
  } else {
    return (
      <AuthContext.Provider value={{ setIsLoggedIn }}>
        <NavigationContainer>
          {isLoggedIn ? <RootStack /> : <AuthStack />}
          <StatusBar />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
}
