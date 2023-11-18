import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IGymClass} from '../../utility/types';
import {Navigation} from 'react-native-navigation';

type bookClassProps = {
  componentId: string;
  userId: string;
  gymClassId: string;
};

function BookClass(props: bookClassProps): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [gymClass, setGymClass] = useState<IGymClass>({
    _id: '',
    name: '',
    category: '',
    description: '',
    datetime: new Date(),
    duration: -1,
    maxCapacity: -1,
    currentCapacity: -1,
    instructor: '',
  });

  const getGymClass = async () => {
    try {
      const response = await axios.get(`/gymclasses/id/${props.gymClassId}`);
      setGymClass(response.data);
    } catch (error) {
      console.error('Error fetching gym class details', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGymClass();
  }, []);

  return (
    <ScrollView style={styles.section}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text style={styles.sectionTitle}>{gymClass.name}</Text>
          <View style={styles.sectionContainer}>
            <View style={styles.topField}>
              <Text style={styles.fieldName}>Description:</Text>
              <Text style={styles.field}>{gymClass.description}</Text>
            </View>
            <View style={styles.topField}>
              <Text style={styles.fieldName}>Date & Time:</Text>
              <Text style={styles.field}>
                {new Date(gymClass.datetime).toDateString()}
              </Text>
            </View>
            <View style={styles.topField}>
              <Text style={styles.fieldName}>Duration</Text>
              <Text style={styles.field}>{gymClass.duration}</Text>
            </View>
            <View style={styles.topField}>
              <Text style={styles.fieldName}>Capacity</Text>
              <Text style={styles.field}>
                {gymClass.currentCapacity}/{gymClass.maxCapacity}
              </Text>
            </View>
            <View style={styles.bottomField}>
              <Text style={styles.fieldName}>Instructor</Text>
              <Text style={styles.field}>{gymClass.instructor}</Text>
            </View>
          </View>
          <Button
            title="Book"
            onPress={async () => {
              await axios
                .post('/bookings/create', {
                  gymClassId: props.gymClassId,
                  userId: props.userId,
                })
                .then(() => {
                  Navigation.push(props.componentId, {
                    component: {
                      name: 'Schedule',
                    },
                  });
                  Alert.alert('Book Class', 'Class successfully booked!', [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);
                })
                .catch(error => {
                  console.error(error);
                });
            }}
          />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 15,
    paddingTop: 30,
  },
  sectionTitle: {
    marginHorizontal: 15,
    paddingVertical: 15,
    fontSize: 24,
    fontWeight: '600',
  },
  sectionContainer: {
    marginHorizontal: 15,
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  fieldName: {
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  field: {
    padding: 10,
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
  },
  topField: {
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomField: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

BookClass.options = {
  topBar: {
    title: {
      text: 'Book Class',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default BookClass;
