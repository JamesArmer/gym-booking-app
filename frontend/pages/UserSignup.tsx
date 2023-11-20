import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import SubmitButton from '../components/buttons/SubmitButton';
import DatePicker from 'react-native-date-picker';
import {
  isUserEmailUnique,
  isUserPhoneNumberUnique,
  validateEmail,
  validatePhoneNumber,
} from '../utility/validation';
import {IUserDetails} from '../utility/types';

type signupProps = {
  componentId: string;
};

function UserSignup(props: signupProps): JSX.Element {
  const placeholderText = 'Input text here...';

  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<IUserDetails>({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
  });
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>Sign Up</Text>
      </View>
      <Text style={styles.inputTitle}>First name</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholderText}
        value={userDetails.firstName}
        onChangeText={text =>
          setUserDetails(userDetails => ({
            ...userDetails,
            firstName: text,
          }))
        }
        maxLength={40}
      />
      <Text style={styles.inputTitle}>Last name</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholderText}
        value={userDetails.lastName}
        onChangeText={text =>
          setUserDetails(userDetails => ({
            ...userDetails,
            lastName: text,
          }))
        }
        maxLength={40}
      />
      <Text style={styles.inputTitle}>Date of birth</Text>
      <TextInput
        editable={false}
        style={styles.inputContainer}
        value={userDetails.dateOfBirth.toLocaleDateString('en-GB')}
        keyboardType="numeric"
      />
      <Button title="🗓️" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={userDetails.dateOfBirth}
        mode="date"
        onConfirm={date => {
          setOpen(false);
          setUserDetails(userDetails => ({
            ...userDetails,
            dateOfBirth: date,
          }));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <Text style={styles.inputTitle}>Email</Text>
      {emailError && (
        <Text style={styles.errorMessage}>{emailErrorMessage}</Text>
      )}
      <TextInput
        style={[
          styles.inputContainer,
          emailError && styles.errorInputContainer,
        ]}
        placeholder={placeholderText}
        value={userDetails.email}
        onBlur={async () => {
          const isValid = validateEmail(userDetails.email);
          if (!isValid) setEmailErrorMessage('Invalid Email');
          const isUnique = await isUserEmailUnique(userDetails.email);
          if (!isUnique) setEmailErrorMessage('Email already in use');
          setEmailError(!isValid || !isUnique);
        }}
        onChangeText={text =>
          setUserDetails(userDetails => ({
            ...userDetails,
            email: text,
          }))
        }
        maxLength={40}
      />
      <Text style={styles.inputTitle}>Phone number</Text>
      {phoneError && (
        <Text style={styles.errorMessage}>{phoneErrorMessage}</Text>
      )}
      <TextInput
        style={[
          styles.inputContainer,
          phoneError && styles.errorInputContainer,
        ]}
        placeholder={placeholderText}
        value={userDetails.phoneNumber}
        onBlur={async () => {
          const isValid = validatePhoneNumber(userDetails.phoneNumber);
          if (!isValid) setPhoneErrorMessage('Invalid phone number');
          const isUnique = await isUserPhoneNumberUnique(
            userDetails.phoneNumber,
          );
          if (!isUnique) setPhoneErrorMessage('Phone number already in use');
          setPhoneError(!isValid || !isUnique);
        }}
        onChangeText={text =>
          setUserDetails(userDetails => ({
            ...userDetails,
            phoneNumber: text,
          }))
        }
        keyboardType="numeric"
        maxLength={10}
      />
      <SubmitButton
        user={userDetails}
        componentId={props.componentId}
        emailError={emailError}
        phoneError={phoneError}
      />
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
    borderRadius: 16,
    height: 40,
  },
  errorInputContainer: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
  },
});

UserSignup.options = {
  topBar: {
    title: {
      text: 'Sign Up',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default UserSignup;
