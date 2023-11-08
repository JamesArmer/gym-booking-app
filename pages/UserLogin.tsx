import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import FormTextInput from '../components/FormTextInput';
import LoginButton from '../components/buttons/LoginButton';

function UserLogin(): JSX.Element {
  const _placeholderText = 'Input text here...';

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>Sign Up</Text>
      </View>
      <FormTextInput
        input_text="Username"
        placeholder_text={_placeholderText}
      />
      <FormTextInput
        input_text="Password"
        placeholder_text={_placeholderText}
      />
      <LoginButton />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 7,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  titleContainer: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
  center: {
    alignItems: 'center',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserLogin;
