import React from "react";
import { View, FlatList, Text, StyleSheet, Image } from "react-native";
import CircularAvatar from "./circularavatar.js";
import avatar from "./images/avatar.png";
import plusicon from "./images/plusicon.png";
import settingicon from "./images/settingicon.png";
import Appbar from "./appbar";
import Chats from "./Chats.js";
const MyListView = ({ navigation }) => {
  return (
    <View>
      <Appbar navigation={navigation} />
      <Chats navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    color: "#FFFFFF",
    backgroundColor: "#ffffff",
  },
  row: {
    flexDirection: "row",
    padding: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000000",
  },
  msg: {
    fontSize: 11,
    color: "#000000",
  },
});

export default MyListView;
