import { useEffect, useState } from "react";
import {
  Button,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  InputAccessoryView,
} from "react-native";
import * as Clipboard from "expo-clipboard";

const NewPostScreen = ({ navigation }) => {
  const inputAccessoryViewID = "uniqueID";
  const [link, setLink] = useState("");
  const [showPaste, setShowPaste] = useState(true);

  const checkClipboard = async () => {
    const url = await Clipboard.hasUrlAsync();
    if (url) {
      setShowPaste(true);
    } else {
      setShowPaste(false);
    }
  };

  const pasteFromClipboard = async () => {
    const url = await Clipboard.getUrlAsync();
    setLink(url);
  };

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
        <Button title="Share" color={"#ef305a"} disabled={true} />
      ),
    });
    checkClipboard();
  });

  return (
    <ScrollView keyboardShouldPersistTaps="always" style={styles.view}>
      <Text style={styles.title}>
        Share links to videos, music, or whatever you love.
      </Text>
      <TextInput
        value={link}
        onChangeText={(text) => setLink(text)}
        style={styles.linkInput}
        placeholder="Enter or paste a link"
        inputAccessoryViewID={inputAccessoryViewID}
        placeholderTextColor={"#a9a9a9"}
        selectionColor={"#ef305a"}
        autoFocus
      />
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        {showPaste ? (
          <Button
            onPress={() => {
              pasteFromClipboard();
            }}
            title="Paste from clipboard"
            color={"#333"}
          />
        ) : null}
      </InputAccessoryView>
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
    borderColor: "#ececec",
    marginHorizontal: 15,
    borderRadius: 6,
    height: 48,
    marginTop: 15,
    fontSize: 15,
    backgroundColor: "#fcfcfc",
  },
});

export default NewPostScreen;
