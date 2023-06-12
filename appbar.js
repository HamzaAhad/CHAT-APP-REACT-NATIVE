import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import CircularAvatar from "./circularavatar";
import plusicon from "./images/plusicon.png";
import settingicon from "./images/settingicon.png";

const Appbar = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("MyDrawer")}>
      <View>
        <View style={styles.imagecontainer}>
          <Image source={plusicon} style={styles.image} />
          <Image source={settingicon} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  imagecontainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    flex: 1,
    width: 20,
    height: 25,
    resizeMode: "contain",
  },
});
export default Appbar;
