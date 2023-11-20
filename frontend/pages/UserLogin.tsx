import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import LoginButton from '../components/buttons/LoginButton';
import SignUpButton from '../components/buttons/SignUpButton';
import Header from '../components/Header';

type userLoginProps = {
  componentId: string;
};

function UserLogin(props: userLoginProps): JSX.Element {
  const placeholderText = 'Input text here...';

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  return (
    <>
      <Header />
      <View style={styles.sectionContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.sectionTitle}>Login</Text>
        </View>
        <Text style={styles.inputTitle}>Phone number</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={placeholderText}
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          maxLength={10}
        />
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={placeholderText}
          value={otp}
          onChangeText={text => setOtp(text)}
          maxLength={6}
        />
        <LoginButton phoneNumber={phoneNumber} />
        <View style={styles.subheadingContainer}>
          <Text style={styles.subheading}>Not a user? Sign Up below!</Text>
        </View>
        <SignUpButton componentId={props.componentId} />
      </View>
    </>
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
    paddingTop: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  subheadingContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
  subheading: {
    fontSize: 20,
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
