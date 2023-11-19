import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IGymClass} from '../../utility/types';
import axios from 'axios';

type bookingHistoryProps = {
  componentId: string;
  userId: string;
};

function BookingHistory(props: bookingHistoryProps): JSX.Element {
  const [isLoading, setLoading] = useState(true);
  const [gymClasses, setGymClasses] = useState<IGymClass[]>([]);

  const getGymClasses = async () => {
    try {
      const response = await axios.get(`/bookings/all/${props.userId}`);
      const mappedBookings = response.data.map(
        (booking: {gymClass: IGymClass}) => booking.gymClass,
      );
      setGymClasses(mappedBookings);
    } catch (error) {
      console.error('Error fetching gym classes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={styles.sectionItem}
          data={gymClasses}
          keyExtractor={item => item._id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
