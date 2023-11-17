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
import AsyncStorage from '@react-native-async-storage/async-storage';

function ProfileDetails(): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<IUserDetails>({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    email: '',
    phoneNumber: '',
  });

  const getUserDetails = async () => {
    try {
      const userId = await AsyncStorage.getItem('user-id');
      const response = await axios.get(`/users/${userId}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error('Error fetching user details', error);
    } finally {
      setLoading(false);
    }
  };

  const updateUserDetails = async () => {
    const userId = await AsyncStorage.getItem('user-id');
    await axios.put(`/users/update/${userId}`, userDetails).catch(error => {
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
            <View style={styles.topField}>
              <Text style={styles.fieldName}>Email</Text>
              <TextInput
                style={styles.field}
                value={userDetails.email}
                maxLength={40}
                onBlur={async () => {
                  updateUserDetails();
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
              <Text style={styles.fieldName}>Phone Number</Text>
              <TextInput
                style={styles.field}
                value={userDetails.phoneNumber}
                maxLength={40}
                onBlur={async () => {
                  updateUserDetails();
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
