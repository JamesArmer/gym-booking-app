import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from '../../components/Header';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Navigation} from 'react-native-navigation';
import {IGymClass} from '../../utility/types';

type classScheduleProps = {
  componentId: string;
  userId: string;
};

function ClassSchedule(props: classScheduleProps): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');
  const [sectionTitle, setSectionTitle] = useState('');
  const [gymClasses, setGymClasses] = useState<IGymClass[]>([]);

  const handleBookClass = (gymClassId: string) => {
    return Navigation.push(props.componentId, {
      component: {
        name: 'BookClass',
        passProps: {userId: userId, gymClassId: gymClassId},
      },
    });
  };

  const loadUserId = async () => {
    let storedUserId = await AsyncStorage.getItem('user-id');
    if (storedUserId === null) {
      console.error('Cannot find user ID');
      storedUserId = '';
    }
    setUserId(storedUserId);
  };

  const getGymClasses = async () => {
    try {
      const response = await axios.get('/gymclasses/daily');
      setSectionTitle(response.data.title);
      setGymClasses(response.data.gymClasses);
    } catch (error) {
      console.error('Error fetching gym classes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUserId();
    getGymClasses();
  }, []);

  const renderItem = ({item}: {item: IGymClass}) => (
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
        {isLoading ? (
          <ActivityIndicator />
        ) : (
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
        )}
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
    icon: require('../../public/calendar.png'),
  },
};

export default ClassSchedule;
