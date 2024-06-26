import axios from "axios";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";

const instance = axios.create({
  baseURL: Constants.expoConfig.extra.baseURL,
  timeout: 1000,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync("userToken");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
