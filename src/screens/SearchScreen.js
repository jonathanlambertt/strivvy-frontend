import { useState } from "react";
import { View, StyleSheet, TextInput, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchScreen = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
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
        />
      </View>
      <FlatList
        data={results}
        renderItem={({ item }) => <Text></Text>}
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
