import axios from "axios";
import * as SecureStore from "expo-secure-store";

const instance = axios.create({
  baseURL: "http://192.168.1.153:8000/",
  //baseURL: "http://192.168.1.198:8000/",
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
