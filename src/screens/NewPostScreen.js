import { useEffect, useState } from "react";
import {
  Button,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  InputAccessoryView,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import isUrl from "is-url";
import axios from "axios";
import LinkPreview from "../components/molecules/LinkPreview";
import strivvy from "../api/strivvy";

const NewPostScreen = ({ navigation }) => {
  const [fetchingPreview, setFetchingPreview] = useState(false);
  const [linkInput, setLinkInput] = useState("");
  const [shareDisabled, setShareDisabled] = useState(true);
  const [preview, setPreview] = useState("");

  const inputAccessoryViewID = "uniqueID";

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
        <Button
          title="Share"
          color={"#ef305a"}
          disabled={shareDisabled}
          onPress={() => shareLink()}
        />
      ),
    });
  });

  useEffect(() => {
    if (isUrl(linkInput)) {
      fetchLinkPreview();
      Keyboard.dismiss();
    } else {
      setShareDisabled(true);
    }
  }, [linkInput]);

  const fetchClipboardText = async () => {
    const text = await Clipboard.getStringAsync();
    setLinkInput(text);
  };

  const fetchLinkPreview = async () => {
    try {
      setFetchingPreview(true);
      const response = await axios.get(
        `https://getlinkpreview.onrender.com/?url=${linkInput}`
      );
      setPreview(response.data);
      setShareDisabled(false);
      setFetchingPreview(false);
    } catch (error) {}
  };

  const shareLink = async () => {
    try {
      setShareDisabled(true);
      await strivvy.post("p/", {
        thumbnail: preview.image,
        title: preview.title,
        description: preview.description.substring(0, 250),
        favicon: preview.favicon,
        site_name: preview.sitename,
        url: linkInput,
      });
      navigation.goBack();
    } catch (error) {
      setShareDisabled(false);
    }
  };

  return (
    <ScrollView keyboardShouldPersistTaps="always" style={styles.view}>
      <Text style={styles.title}>
        Share links to videos, music, or whatever you love.
      </Text>
      <TextInput
        value={linkInput}
        onChangeText={(text) => setLinkInput(text)}
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
      {linkInput == "" ? null : fetchingPreview ? (
        <ActivityIndicator size={"small"} style={{ marginTop: 15 }} />
      ) : (
        <LinkPreview
          image={preview.image}
          title={preview.title}
          description={preview.description}
          favicon={preview.favicon}
          siteName={preview.sitename}
        />
      )}
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
