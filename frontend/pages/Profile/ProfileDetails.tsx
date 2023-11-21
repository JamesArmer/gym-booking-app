import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {IUserDetails} from '../../utility/types';
import {
  validatePhoneNumber,
  validateEmail,
  isUserProfilePhoneNumberUnique,
  isUserProfileEmailUnique,
} from '../../utility/validation';

type profileDetailProps = {
  userId: string;
};

function ProfileDetails(props: profileDetailProps): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [userDetails, setUserDetails] = useState<IUserDetails>({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
  });

  const getUserDetails = async () => {
    try {
      const response = await axios.get(`/users/${props.userId}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details', error);
    } finally {
      setLoading(false);
    }
  };

  const updateUserDetails = async () => {
    await axios
      .put(`/users/update/${props.userId}`, userDetails)
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <ScrollView style={styles.section}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={styles.sectionTitle}>You</Text>
          <View style={styles.sectionContainer}>
            <View style={styles.topField}>
              <Text style={styles.fieldName}>First Name</Text>
              <TextInput
                style={styles.field}
                value={userDetails.firstName}
                maxLength={40}
                onBlur={async () => {
                  updateUserDetails();
                }}
                onChangeText={text =>
                  setUserDetails(userDetails => ({
                    ...userDetails,
                    firstName: text,
                  }))
                }
              />
            </View>
            <View style={styles.topField}>
              <Text style={styles.fieldName}>Last Name</Text>
              <TextInput
                style={styles.field}
                value={userDetails.lastName}
                maxLength={40}
                onBlur={async () => {
                  updateUserDetails();
                }}
                onChangeText={text =>
                  setUserDetails(userDetails => ({
                    ...userDetails,
                    lastName: text,
                  }))
                }
              />
            </View>
            <View style={styles.bottomField}>
              <Text style={styles.fieldName}>Date of Birth</Text>
              <Text style={styles.field}>
                {new Date(userDetails.dateOfBirth).toLocaleDateString('en-GB')}
              </Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <View style={styles.bottomField}>
              {emailError && (
                <Text style={styles.errorMessage}>{emailErrorMessage}</Text>
              )}
            </View>
            <View style={styles.topField}>
              <Text style={styles.fieldName}>Email</Text>
              <TextInput
                style={styles.field}
                value={userDetails.email}
                maxLength={40}
                onBlur={async () => {
                  const isValid = validateEmail(userDetails.email);
                  if (!isValid) setEmailErrorMessage('Invalid Email');

                  const isUnique = await isUserProfileEmailUnique(
                    userDetails.email,
                    props.userId,
                  );
                  if (!isUnique) setEmailErrorMessage('Email already in use');
                  setEmailError(!isValid || !isUnique);
                  if (isValid && isUnique) updateUserDetails();
                }}
                onChangeText={text =>
                  setUserDetails(userDetails => ({
                    ...userDetails,
                    email: text,
                  }))
                }
              />
            </View>
            <View style={styles.bottomField}>
              {phoneError && (
                <Text style={styles.errorMessage}>{phoneErrorMessage}</Text>
              )}
            </View>
            <View style={styles.bottomField}>
              <Text style={styles.fieldName}>Phone Number</Text>
              <TextInput
                style={styles.field}
                value={userDetails.phoneNumber}
                maxLength={10}
                onBlur={async () => {
                  const isValid = validatePhoneNumber(userDetails.phoneNumber);
                  if (!isValid) setPhoneErrorMessage('Invalid phone number');

                  const isUnique = await isUserProfilePhoneNumberUnique(
                    userDetails.phoneNumber,
                    props.userId,
                  );
                  if (!isUnique)
                    setPhoneErrorMessage('Phone number already in use');

                  setPhoneError(!isValid || !isUnique);
                  if (isValid && isUnique) updateUserDetails();
                }}
                onChangeText={text =>
                  setUserDetails(userDetails => ({
                    ...userDetails,
                    phoneNumber: text,
                  }))
                }
              />
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 15,
    paddingTop: 30,
  },
  sectionTitle: {
    marginHorizontal: 15,
    paddingVertical: 15,
    fontSize: 24,
    fontWeight: '600',
  },
  sectionContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  fieldName: {
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  field: {
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
  },
  topField: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomField: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorMessage: {
    color: 'red',
    paddingLeft: 10,
    paddingTop: 5,
  },
});

ProfileDetails.options = {
  topBar: {
    title: {
      text: 'Profile Details',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default ProfileDetails;
