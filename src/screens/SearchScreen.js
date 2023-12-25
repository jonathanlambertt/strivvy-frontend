import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  Button,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import strivvy from "../api/strivvy";

const SearchScreen = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query || query.trim() == "") {
      setResults([]);
    } else {
      const delayDebounceFn = setTimeout(() => {
        search();
      }, 250);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [query]);

  const search = async () => {
    try {
      const response = await strivvy.get(`u/search/?q=${query.trim()}`);
      setResults(response.data);
    } catch (error) {}
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 5,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather name="search" size={22} color="#808080" style={{}} />
        <TextInput
          value={query}
          onChangeText={(text) => setQuery(text)}
          style={styles.linkInput}
          placeholder="Search for people"
          placeholderTextColor={"#a9a9a9"}
          selectionColor={"#ef305a"}
          autoFocus
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <FlatList
        data={results}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 10,
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              @{item.username}
            </Text>
            <View>
              {item.is_following || item.is_searching_user ? null : (
                <Button title="Follow" color={"#ef305a"} />
              )}
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  linkInput: {
    padding: 10,
    height: 48,
    fontSize: 15,
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: "#ececec",
  },
});

export default SearchScreen;
