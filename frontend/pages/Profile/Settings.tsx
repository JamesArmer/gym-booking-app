import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {loginRoot} from '../..';

function Settings(): JSX.Element {
  return (
    <View style={styles.flexCenter}>
      <Text>This is the settings page</Text>
      <Text>All icons from https://icons8.com</Text>
      <Button
        title="Logout"
        onPress={() => {
          AsyncStorage.removeItem('user-id');
          Navigation.setRoot(loginRoot);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Settings.options = {
  topBar: {
    title: {
      text: 'Settings',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default Settings;
