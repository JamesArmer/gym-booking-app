import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function BookingHistory(): JSX.Element {
  return (
    <View style={styles.flexCenter}>
      <Text>This is the booking history page</Text>
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

BookingHistory.options = {
  topBar: {
    title: {
      text: 'Booking History',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default BookingHistory;
