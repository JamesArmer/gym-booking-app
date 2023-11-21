import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
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
  const [noData, setNoData] = useState(false);

  const getGymClasses = async () => {
    try {
      const response = await axios.get(`/bookings/all/${props.userId}`);
      if (response.data.error) {
        return setNoData(true);
      }
      const mappedBookings = response.data.map(
        (booking: {gymClass: IGymClass}) => booking.gymClass,
      );
      setGymClasses(mappedBookings);
    } catch (error) {
      console.error('Error fetching booking history:', error);
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
      <Text>Description: {item.description}</Text>
      <Text>Instructor: {item.instructor}</Text>
      <Text>
        Date & Time: {new Date(item.datetime).toLocaleDateString('en-GB')}{' '}
        {('0' + new Date(item.datetime).getHours()).slice(-2)}:
        {new Date(item.datetime).getMinutes()}
      </Text>
      <Text>Duration: {item.duration}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : noData ? (
        <View style={styles.noDataContainer}>
          <Image
            style={styles.image}
            source={require('../../public/book.png')}
          />
          <Text>No bookings to have been made 🫤{'\n'}</Text>
          <Text>Head to the "Schedule" tab to book a class!</Text>
        </View>
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
  noDataContainer: {
    marginTop: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  image: {
    marginVertical: 20,
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
