import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function ClassTypes(): JSX.Element {
  return (
    <View style={styles.flexCenter}>
      <Text>Class types</Text>
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

ClassTypes.options = {
  topBar: {
    title: {
      text: 'Class Types',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default ClassTypes;
