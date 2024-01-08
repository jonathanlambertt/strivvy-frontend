import { WebView } from "react-native-webview";

const LinkViewScreen = ({ route }) => {
  const { uri } = route.params;
  return <WebView source={{ uri: uri }} />;
};

export default LinkViewScreen;
