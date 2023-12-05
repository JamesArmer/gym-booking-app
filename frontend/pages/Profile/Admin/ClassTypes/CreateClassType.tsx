import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import SubmitClassTypeButton from '../../../../components/buttons/SubmitClassTypeButton';

type createClassTypesProps = {
  componentId: string;
};

function CreateClassType(props: createClassTypesProps): JSX.Element {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [maxCapacity, setMaxCapacity] = useState('');

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.sectionTitle}>Create Class Type</Text>
      </View>
      <Text style={styles.inputTitle}>Class Name</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Placeholder..."
        value={name}
        onChangeText={text => setName(text)}
        maxLength={40}
      />
      <Text style={styles.inputTitle}>Class Category</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Placeholder..."
        value={category}
        onChangeText={text => setCategory(text)}
        maxLength={40}
      />
      <Text style={styles.inputTitle}>Class Description</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Placeholder..."
        value={description}
        onChangeText={text => setDescription(text)}
        maxLength={100}
      />
      <Text style={styles.inputTitle}>Class Duration</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Placeholder..."
        value={duration.toString()}
        keyboardType="number-pad"
        onChangeText={number => setDuration(number)}
        maxLength={3}
      />
      <Text style={styles.inputTitle}>Class Maximum Capacity</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Placeholder..."
        value={maxCapacity.toString()}
        keyboardType="number-pad"
        onChangeText={number => setMaxCapacity(number)}
        maxLength={40}
      />
      <SubmitClassTypeButton
        name={name}
        category={category}
        description={description}
        duration={Number(duration)}
        maxCapacity={Number(maxCapacity)}
        componentId={props.componentId}
        error={false}
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

CreateClassType.options = {
  topBar: {
    title: {
      text: 'Create Class Type',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default CreateClassType;
