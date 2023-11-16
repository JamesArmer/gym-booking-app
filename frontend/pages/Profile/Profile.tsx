import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SettingsButton from '../../components/buttons/SettingsButton';
import ProfileContainer from '../../components/ProfileContainer';
import Header from '../../components/Header';
import AdminButton from '../../components/buttons/AdminButton';

type profileProps = {
  componentId: string;
};

function Profile(props: profileProps): JSX.Element {
  return (
    <ScrollView>
      <Header />
      <ProfileContainer
        title="Membership"
        text="You currently don't have any memberships!"
        pageLink="MembershipDetails"
        componentId={props.componentId}
      />
      <ProfileContainer
        title="Booking History"
        text="Classes attended"
        pageLink="BookingHistory"
        componentId={props.componentId}
      />
      <ProfileContainer
        title="Profile Details"
        text="Name & Contact Details"
        pageLink="ProfileDetails"
        componentId={props.componentId}
      />
      <ProfileContainer
        title="Payment"
        text="Click to view order history and payment methods"
        pageLink="PaymentDetails"
        componentId={props.componentId}
      />
      <View style={styles.buttonContainer}>
        <SettingsButton componentId={props.componentId} />
        <AdminButton componentId={props.componentId} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 20,
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
    icon: require('../../public/user.png'),
  },
};

export default Profile;
