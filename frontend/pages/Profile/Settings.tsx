import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogoutButton from '../../components/buttons/LogoutButton';

function Settings(): JSX.Element {
  return (
    <View style={styles.flexCenter}>
      <Text>This is the settings page</Text>
      <Text>All icons from https://icons8.com</Text>
      <LogoutButton />
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
