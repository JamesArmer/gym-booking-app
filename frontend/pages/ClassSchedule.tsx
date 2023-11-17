import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import axios from 'axios';

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
  const [gymClasses, setGymClasses] = useState<GymClass[]>([]);

  const handleBookClass = (gymClassId: string) => {
    // TODO: implement booking logic
    Alert.alert('Booking', 'Class booked successfully!');
  };

  const getGymClasses = async () => {
    await axios
      .get('/gymclasses/daily')
      .then(response => {
        setGymClasses(response.data.gymClasses);
      })
      .catch(error => {
        console.error('Error fetching gym classes:', error);
      });
  };

  useEffect(() => {
    getGymClasses();
  }, []);

  const renderItem = ({item}: {item: GymClass}) => (
    <View style={{marginVertical: 10, padding: 10, borderBottomWidth: 1}}>
      <Text>{item.name}</Text>
      <Text>Instructor: {item.instructor}</Text>
      <Text>Schedule: {item.datetime.toString()}</Text>
      <Text>Capacity: {item.maxCapacity}</Text>
      <Button title="Book Class" onPress={() => handleBookClass(item._id)} />
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <Header />
      </View>
      <View style={{padding: 10}}>
        <FlatList
          data={gymClasses}
          keyExtractor={item => item._id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.listContainer}>
        <SectionList
          sections={[
            {
              title: 'Week 13/11/23',
              data: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ],
            },
            {
              title: 'Week 20/11/23',
              data: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ],
            },
            {
              title: 'Week 27/11/23',
              data: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ],
            },
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={item => `basicListEntry-${item}`}></SectionList>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  listContainer: {
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
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
