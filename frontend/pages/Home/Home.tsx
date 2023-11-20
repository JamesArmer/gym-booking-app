import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SignUpButton from '../../components/buttons/SignUpButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

type homeProps = {
  componentId: string;
};

type GreetingProps = {
  name: string;
};

function Home(props: homeProps): JSX.Element {
  const [userId, setUserId] = useState('');

  const loadUserId = async () => {
    let storedUserId = await AsyncStorage.getItem('user-id');
    if (storedUserId === null) {
      console.error('Cannot find user ID');
      storedUserId = '';
    }
    setUserId(storedUserId);
  };

  useEffect(() => {
    loadUserId();
  }, []);

  const Greeting = (props: GreetingProps) => {
    return (
      <View style={styles.container}>
        <Text>
          Hello {props.name}!{'\n'}
        </Text>
        <Text>Welcome to your Wod & Beyond home screen!!! 😜 😜 😜</Text>
      </View>
    );
  };

  return (
    <>
      <Header />
      <ScrollView>
        <View style={[styles.flexCenter]}>
          <Greeting name="James" />
        </View>
        <Footer />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 3,
    alignItems: 'center',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Home.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    text: 'Home',
    icon: require('../../public/home.png'),
  },
};

export default Home;
