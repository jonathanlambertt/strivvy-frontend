import { useEffect } from "react";
import { Button, ScrollView, TextInput, Text, StyleSheet } from "react-native";
import * as Clipboard from "expo-clipboard";

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

  return (
    <ScrollView style={styles.view}>
      <Text style={styles.title}>
        Share links to videos, music, or whatever you love.
      </Text>
      <TextInput
        style={styles.linkInput}
        placeholder="Enter or paste a link"
        placeholderTextColor={"#a9a9a9"}
        selectionColor={"#333"}
        autoFocus
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 15,
  },
  title: {
    textAlign: "center",
    color: "#333",
    fontSize: 16,
    marginHorizontal: 35,
  },
  linkInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#a9a9a9",
    marginHorizontal: 15,
    borderRadius: 5,
    height: 48,
    marginTop: 15,
    fontSize: 15,
  },
});

export default NewPostScreen;
