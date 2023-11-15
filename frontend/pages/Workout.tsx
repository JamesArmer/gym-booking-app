import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

function Workout(): JSX.Element {
  return (
    <ScrollView>
      <Header />
      <View style={styles.flexCenter}>
        <Text>This is the workout page</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Workout.options = {
  topBar: {
    title: {
      text: 'Workout',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    text: 'Workout',
    icon: require('../public/dumbbell.png'),
  },
};

export default Workout;
