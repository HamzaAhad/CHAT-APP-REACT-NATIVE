import React from "react";
import { View, StyleSheet } from "react-native";

import MyDrawer from "./MyDrawer.js";
import MyListView from "./listview.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import LoginPage from "./LoginPage.js";
import MyRequest from "./Request.js";
import ChatScreen from "./ChatScreen.js";
import Chats from "./Chats.js";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="MyListView" component={MyListView} />
        <Stack.Screen name="MyRequest" component={MyRequest} />
        <Stack.Screen name="Chats" component={Chats} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
