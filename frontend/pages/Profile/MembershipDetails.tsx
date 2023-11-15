import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function MembershipDetails(): JSX.Element {
  return (
    <View style={styles.flexCenter}>
      <Text>This is the membership details page</Text>
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

MembershipDetails.options = {
  topBar: {
    title: {
      text: 'Membership Details',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default MembershipDetails;
