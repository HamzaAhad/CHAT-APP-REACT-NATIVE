import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username == "" || password == "") {
      Alert.alert("Validation Error", "Please enter Login and Password");
      return;
    } else if (password.length < 5) {
      Alert.alert("Validation Error", "Please enter password greater than 5");
      return;
    }
    navigation.navigate("MyRequest");

    // else{
    //   navigation.navigate('Main');
    // }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.subText}>Please Login to continue</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#A9A9A9"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#A9A9A9"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.gap}></View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.rowContainer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  welcomeText: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    color: "#A9A9A9",
    marginBottom: 20,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#A9A9A9",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  gap: {
    height: 50,
  },
  button: {
    height: 40,
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
    fontSize: 14,
    fontWeight: "bold",
  },
  textButton: {
    color: "#007AFF",
  },
  rowContainer: {
    flexDirection: "row",
  },
});

export default Login;
