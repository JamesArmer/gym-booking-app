import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SettingsButton from '../components/buttons/SettingsButton';
import SignUpButton from '../components/buttons/SignUpButton';

type homeProps = {
  componentId: string;
};

function Home(props: homeProps): JSX.Element {
  type GreetingProps = {
    name: string;
  };

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

  const LotsOfGreetings = () => {
    return (
      <View style={[styles.flexCenter]}>
        <Greeting name="James" />
        <Text>Not a user? Hit the button below to sign up!</Text>
        <SignUpButton componentId={props.componentId} />
      </View>
    );
  };

  return (
    <>
      <Header />
      <LotsOfGreetings />
      <SettingsButton componentId={props.componentId} />
      <Footer />
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
  },
};

export default Home;
