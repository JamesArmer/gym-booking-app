import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function PaymentDetails(): JSX.Element {
  return (
    <View style={styles.flexCenter}>
      <Text>This is the payment details page</Text>
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

PaymentDetails.options = {
  topBar: {
    title: {
      text: 'Payment Details',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default PaymentDetails;
