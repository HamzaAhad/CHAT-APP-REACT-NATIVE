import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const LoginPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#007AFF",
  },
  button: {
    height: 50,
    width: 200,
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
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginPage;
