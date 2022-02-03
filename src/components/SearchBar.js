import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onSearch }) => {
  return (
    <View style={styles.viewStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onSearch}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#FFFFFF",
    height: 50,
    borderRadius: 4,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: "center",
    paddingLeft: 10,
    fontSize: 24,
  },
});

export default SearchBar;
