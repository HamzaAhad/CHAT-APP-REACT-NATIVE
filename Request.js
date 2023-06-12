import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CircularAvatar from "./circularavatar.js";
import avatar from "./images/avatar.png";
import Appbar from "./appbar.js";
import MyListView from "./listview.js";
import Chats from "./Chats.js";

const MyRequest = ({ navigation }) => {
  const data = [{ key: "1", title: "Hamza", imageSource: avatar, msg: "Hi" }];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <CircularAvatar imageSource={item.imageSource} />
          <View style={{ width: 10 }}></View>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.msg}>{item.msg}</Text>
          </View>
          <View style={{ paddingLeft: 40 }} />
          <TouchableOpacity style={styles.buttonAccept}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonReject}>
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity>
            <Text style={styles.textButton}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Appbar navigation={navigation} />
      <Text style={styles.headingText}>Request</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
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
    paddingTop: 20,
    paddingLeft: 8,
    fontSize: 14,
    fontWeight: "300",
    color: "#000000",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000000",
  },
  msg: {
    fontSize: 11,
    color: "#000000",
  },

  button: {
    height: 30,
    width: 280,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 10,
  },
  textButton: {
    color: "#007AFF",
  },
  buttonReject: {
    height: 35,
    width: 80,
    backgroundColor: "#FF0000",
    borderRadius: 8,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonAccept: {
    height: 35,
    width: 80,
    backgroundColor: "#00FF00",
    borderRadius: 8,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    alignItems: "center",
  },
});

export default MyRequest;
