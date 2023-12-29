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
import isUrl from "is-url";

import { useLinkPreview } from "get-link-preview";

const NewPostScreen = ({ navigation }) => {
  const [inputText, setInputText] = useState("");
  const [shareDisabled, setShareDisabled] = useState(true);
  const inputAccessoryViewID = "uniqueID";

  const { getLinkPreviewData, loading, error, data } = useLinkPreview();

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
        <Button title="Share" color={"#ef305a"} disabled={shareDisabled} />
      ),
    });
  });

  useEffect(() => {
    if (isUrl(inputText)) {
      setShareDisabled(false);
      fetchLinkPreview();
    } else {
      setShareDisabled(true);
    }
  }, [inputText]);

  const fetchClipboardText = async () => {
    const text = await Clipboard.getStringAsync();
    setInputText(text);
  };

  const fetchLinkPreview = async () => {
    getLinkPreviewData(inputText);
    console.log(`description: ${data["description"]}`);
    console.log(`title: ${data["title"]}`);
    console.log(`image: ${data["image"]}`);
    console.log(`favicon: ${data["favicon"]}`);
    console.log(`siteName: ${data["sitename"]}`);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="always" style={styles.view}>
      <Text style={styles.title}>
        Share links to videos, music, or whatever you love.
      </Text>
      <TextInput
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        style={styles.linkInput}
        placeholder="Enter or paste a link"
        inputAccessoryViewID={inputAccessoryViewID}
        placeholderTextColor={"#a9a9a9"}
        selectionColor={"#ef305a"}
        autoFocus
        clearButtonMode="while-editing"
      />
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button
          onPress={() => fetchClipboardText()}
          title="Paste from clipboard"
          color={"#333"}
        />
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
