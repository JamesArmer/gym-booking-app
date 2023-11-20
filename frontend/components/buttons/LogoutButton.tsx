import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {loginRoot} from '../..';
import AsyncStorage from '@react-native-async-storage/async-storage';

class LogoutButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await AsyncStorage.removeItem('user-id');
            return Navigation.setRoot(loginRoot);
          }}>
          <Text style={{color: 'white'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2980ba',
    padding: 10,
    marginBottom: 10,
  },
});

export default LogoutButton;
