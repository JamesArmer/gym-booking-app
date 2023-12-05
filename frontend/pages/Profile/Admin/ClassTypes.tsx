import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import SubmitClassTypeButton from '../../../components/buttons/SubmitClassTypeButton';
import NavButton from '../../../components/buttons/ClassScheduleButton';

type classTypesProps = {
  componentId: string;
};

function ClassTypes(props: classTypesProps): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>Class Types</Text>
      </View>
      <NavButton
        buttonText="Create Class Type"
        navComponent="CreateClassType"
        componentId={props.componentId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 7,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  titleContainer: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
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
  inputTitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '700',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 16,
    height: 40,
  },
  errorInputContainer: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
  },
});

ClassTypes.options = {
  topBar: {
    title: {
      text: 'Class Types',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default ClassTypes;
