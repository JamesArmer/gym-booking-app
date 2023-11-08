import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ClickButton from '../components/SubmitButton';

function Home(): JSX.Element {
  type GreetingProps = {
    name: string;
  };

  const Greeting = (props: GreetingProps) => {
    return (
      <View style={styles.center}>
        <Text>Hello {props.name}!</Text>
      </View>
    );
  };

  const LotsOfGreetings = () => {
    return (
      <View style={[styles.flexCenter, {top: 50}]}>
        <Greeting name="Rexxar" />
        <Greeting name="Jaina" />
        <Greeting name="Valeera" />
      </View>
    );
  };

  return (
    <>
      <LotsOfGreetings />
      <ClickButton />
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
  center: {
    alignItems: 'center',
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
