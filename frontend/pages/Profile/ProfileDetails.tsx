import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IUserDetails} from '../../utility/types';

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
      const response = await axios.get(`/users/65548742d09f7094e58b91b4`);
      // const response = await axios.get(`/users/${props.userId}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
              <Text style={styles.field}>{userDetails.firstName}</Text>
            </View>
            <View style={styles.topField}>
              <Text style={styles.fieldName}>Last Name</Text>
              <Text style={styles.field}>{userDetails.lastName}</Text>
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
              <Text style={styles.field}>{userDetails.email}</Text>
            </View>
            <View style={styles.bottomField}>
              <Text style={styles.fieldName}>Phone Number</Text>
              <Text style={styles.field}>{userDetails.phoneNumber}</Text>
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
