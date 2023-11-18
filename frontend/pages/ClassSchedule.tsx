import React, {useEffect, useState} from 'react';
import {Alert, Button, SectionList, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

type GymClass = {
  _id: string;
  name: string;
  category: string;
  description: string;
  datetime: Date;
  duration: number;
  maxCapacity: number;
  currentCapacity: number;
  instructor?: string;
};

function ClassSchedule(): JSX.Element {
  const [userId, setUserId] = useState('');
  const [sectionTitle, setSectionTitle] = useState('');
  const [gymClasses, setGymClasses] = useState<GymClass[]>([]);

  const handleBookClass = (gymClassId: string) => {
    // TODO: implement booking logic
    Alert.alert('Booking', 'Class booked successfully!');
  };

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

  const getGymClasses = async () => {
    await axios
      .get('/gymclasses/daily')
      .then(response => {
        setSectionTitle(response.data.title);
        setGymClasses(response.data.gymClasses);
      })
      .catch(error => {
        console.error('Error fetching gym classes:', error);
      });
  };

  useEffect(() => {
    loadUserId();
    getGymClasses();
  }, []);

  const renderItem = ({item}: {item: GymClass}) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>Instructor: {item.instructor}</Text>
      <Text>
        Time: {('0' + new Date(item.datetime).getHours()).slice(-2)}:
        {new Date(item.datetime).getMinutes()}
      </Text>
      <Text>Capacity: {item.maxCapacity}</Text>
      <Button title="Book Class" onPress={() => handleBookClass(item._id)} />
    </View>
  );

  const renderSectionHeader = ({section}: {section: {title: string}}) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  return (
    <>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.container}>
        <SectionList
          style={styles.sectionItem}
          sections={[
            {
              title: sectionTitle,
              data: gymClasses,
            },
          ]}
          keyExtractor={item => item._id}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  container: {},
  sectionHeader: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(230,230,230,1.0)',
  },
  sectionItem: {
    marginBottom: 80,
  },
  item: {
    padding: 10,
    fontSize: 18,
    marginVertical: 5,
    borderBottomWidth: 1,
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
  bottomTab: {
    text: 'Schedule',
    icon: require('../public/calendar.png'),
  },
};

export default ClassSchedule;
