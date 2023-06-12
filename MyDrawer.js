import React from 'react';
import { StyleSheet,View } from 'react-native';
import ListTile from './ListTile';
import deleteicon from './images/deleteicon.png';
import logouticon from './images/logouticon.png';
import destructicon from './images/destructicon.png';
import lockicon from './images/lockicon.png';
import downloadicon from './images/downloadicon.png';



const MyDrawer = () => {
  const handlePress = () => {
    // Handle press event
  };

  return (
    <View >
      <View style={styles.container}></View>
      <ListTile title="Delete Users" onPress={handlePress} imageSource={deleteicon} />
      <ListTile title="Logout" onPress={handlePress}  imageSource={logouticon}/>
      <ListTile title="Self Destruct" onPress={handlePress}  imageSource={destructicon}/>
      <ListTile title="Change Password" onPress={handlePress}  imageSource={lockicon}/>
      <ListTile title="Delete all chats" onPress={handlePress}  imageSource={deleteicon}/>
      <ListTile title="Download all chats" onPress={handlePress}  imageSource={downloadicon}/>
      {/* Add more list tiles as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container :{
    height: 50
  }
})

export default MyDrawer;
