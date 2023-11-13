import { useEffect } from "react";
import { View, Button } from "react-native";

const NewPostScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Cancel"
          color={"#333"}
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: () => (
        <Button title="Share" color={"#ed1847"} disabled={true} />
      ),
    });
  });

  return <View></View>;
};

export default NewPostScreen;
