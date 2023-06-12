import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import CircularAvatar from "./circularavatar.js";
import avatar from "./images/avatar.png";

const Chats = ({ navigation }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [groupCreated, setGroupCreated] = useState(false);
  const [groupMembers, setGroupMembers] = useState([]);

  const data = [
    { key: "1", title: "Hamza", imageSource: avatar, msg: "Hi" },
    {
      key: "2",
      title: "Salar",
      imageSource: avatar,
      msg: "Let's have a party!",
    },
    { key: "3", title: "Ahmed", imageSource: avatar, msg: "Reached" },
    // Add more items as needed
  ];

  const handleLongPress = (item) => {
    const isSelected = selectedUsers.find((user) => user.key === item.key);

    if (isSelected) {
      setSelectedUsers((prevSelectedUsers) =>
        prevSelectedUsers.filter((user) => user.key !== item.key)
      );
    } else {
      setSelectedUsers((prevSelectedUsers) => [...prevSelectedUsers, item]);
    }
  };

  const createGroup = () => {
    setGroupCreated(true);
    setGroupMembers(selectedUsers);
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedUsers.find((user) => user.key === item.key);

    return (
      <TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ChatScreen")}
          onLongPress={() => handleLongPress(item)}
          style={[styles.container, isSelected && styles.selectedContainer]}
        >
          <View style={styles.row}>
            <CircularAvatar imageSource={item.imageSource} />
            <View style={{ width: 10 }}></View>
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.msg}>{item.msg}</Text>
            </View>
            {isSelected && <Text style={styles.selectedText}>✓</Text>}
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.headingText}>Chats</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
      {selectedUsers.length > 0 && !groupCreated && (
        <Button title="Create Group" onPress={createGroup} />
      )}
      {groupCreated && (
        <View style={styles.groupContainer}>
          <Text style={styles.groupTitle}>Group Members:</Text>
          {groupMembers.map((member) => (
            <Text key={member.key} style={styles.groupMember}>
              {member.title}
            </Text>
          ))}
        </View>
      )}
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
  selectedContainer: {
    backgroundColor: "#e6e6e6",
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
    paddingBottom: 5,
    paddingLeft: 8,
    paddingTop: 10,
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
  selectedText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
    marginLeft: "auto",
  },
  groupContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  groupMember: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Chats;
