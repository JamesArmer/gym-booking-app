import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import LoginButton from '../components/buttons/LoginButton';

function UserLogin(): JSX.Element {
  const placeholderText = 'Input text here...';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>Login</Text>
      </View>
      <Text style={styles.inputTitle}>Username</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholderText}
        value={username}
        onChangeText={text => setUsername(text)}
        maxLength={40}
      />
      <Text style={styles.inputTitle}>Password</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholderText}
        value={password}
        onChangeText={text => setPassword(text)}
        maxLength={40}
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
  inputTitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '700',
  },
  inputContainer: {
    borderWidth: 1,
    height: 40,
  },
});

UserLogin.options = {
  topBar: {
    title: {
      text: 'Login',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default UserLogin;
