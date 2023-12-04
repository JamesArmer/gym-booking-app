import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function ClassSchedule(): JSX.Element {
  return (
    <View style={styles.flexCenter}>
      <Text>Create class schedule</Text>
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

ClassSchedule.options = {
  topBar: {
    title: {
      text: 'Class Schedule',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default ClassSchedule;
