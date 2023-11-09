import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SettingsButton from '../components/buttons/SettingsButton';

type profileProps = {
  componentId: string;
};

function Profile(props: profileProps): JSX.Element {
  return (
    <View style={styles.flexCenter}>
      <Text>This is the profile page</Text>
      <SettingsButton componentId={props.componentId} />
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

Profile.options = {
  topBar: {
    title: {
      text: 'Profile',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    text: 'Profile',
    icon: require('../public/user.png'),
  },
};

export default Profile;
