import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Workout(): JSX.Element {
  const [userId, setUserId] = useState('');

  const loadUserId = async () => {
    let storedUserId = await AsyncStorage.getItem('user-id');
    if (storedUserId === null) {
      console.error('Cannot find user ID');
      storedUserId = '';
    } else {
      console.log(`Found user-id: ${storedUserId}`);
    }
    setUserId(storedUserId);
  };

  useEffect(() => {
    loadUserId();
  }, []);

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
