import React, {useState} from 'react';
import {Button, StyleSheet, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ClickButton from './components/ClickButton';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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

export default App;
