import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
import axios from 'axios';
import {mainRoot} from '../..';

type submitClassTypeButtonProps = {
  name: string;
  category: string;
  description: string;
  duration: number;
  maxCapacity: number;
  componentId: string;
  error: boolean;
};

class SubmitClassTypeButton extends Component<submitClassTypeButtonProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if (this.props.error === false) {
              await axios
                .post('/classtypes/create', {
                  name: this.props.name,
                  category: this.props.category,
                  description: this.props.description,
                  duration: this.props.duration,
                  maxCapacity: this.props.maxCapacity,
                })
                .then(() => {
                  Alert.alert('Create Class Type', 'Class type added!', [
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
                  ]);
                  return Navigation.setRoot(mainRoot);
                })
                .catch(error => {
                  console.error(error);
                });
            } else {
              Alert.alert(
                'Create Class Type',
                'Validation errors in the above fields - please fix before submitting.',
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
              );
            }
          }}>
          <Text style={{color: 'white'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2980ba',
    padding: 10,
    marginBottom: 10,
  },
});

export default SubmitClassTypeButton;
