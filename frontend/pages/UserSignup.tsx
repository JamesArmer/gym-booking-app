import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import SubmitButton from '../components/buttons/SubmitButton';
import DatePicker from 'react-native-date-picker';

type signupProps = {
  componentId: string;
};

function UserSignup(props: signupProps): JSX.Element {
  const placeholderText = 'Input text here...';

  interface IUserDetails {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    phoneNumber: string;
  }

  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<IUserDetails>({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
  });

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
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholderText}
        value={userDetails.email}
        onChangeText={text =>
          setUserDetails(userDetails => ({
            ...userDetails,
            email: text,
          }))
        }
        maxLength={40}
      />
      <Text style={styles.inputTitle}>Phone number</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={placeholderText}
        value={userDetails.phoneNumber}
        onChangeText={text =>
          setUserDetails(userDetails => ({
            ...userDetails,
            phoneNumber: text,
          }))
        }
        keyboardType="numeric"
        maxLength={10}
      />
      <SubmitButton user={userDetails} componentId={props.componentId} />
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
