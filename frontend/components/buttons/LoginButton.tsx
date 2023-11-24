import React, {Component, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {mainRoot} from '../..';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

type loginButtonProps = {
  phoneNumber: string;
};

class LoginButton extends Component<loginButtonProps> {
  handleLogin = async () => {
    try {
      const response = await axios.get(
        `/users/one?phoneNumber=${this.props.phoneNumber}`,
      );
      if (response.data._id) {
        const userId = response.data._id;
        await AsyncStorage.setItem('user-id', userId);
        return Navigation.setRoot(mainRoot);
      } else {
        Alert.alert('User Login', 'Phone number does not exist', [
          {text: 'OK', onPress: () => {}},
        ]);
      }
    } catch (error) {
      console.error(
        `Error fetching userId with phone number ${this.props.phoneNumber}`,
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleLogin();
          }}>
          <Text style={{color: 'white'}}>Login</Text>
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

export default LoginButton;
