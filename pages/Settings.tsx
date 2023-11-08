import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SettingsButton from '../components/buttons/SettingsButton';

function Settings(): JSX.Element {
  return (
    <View style={styles.flexCenter}>
      <Text>This is the settings page</Text>
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
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    text: 'Settings',
  },
};

export default Settings;
