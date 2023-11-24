import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {mainRoot} from '../..';

type submitSignupButtonProps = {
  user: {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    phoneNumber: string;
  };
  componentId: string;
  emailError: boolean;
  phoneError: boolean;
  dateError: boolean;
};

class SubmitSignupButton extends Component<submitSignupButtonProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if (
              this.props.emailError === false &&
              this.props.phoneError === false &&
              this.props.dateError === false
            ) {
              await axios
                .post('/users/create', this.props.user)
                .then(response => {
                  AsyncStorage.setItem('user-id', response.data.userId);
                })
                .then(() => {
                  Alert.alert(
                    'User Sign Up',
                    'Sign up successfully completed!',
                    [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                  );
                  return Navigation.setRoot(mainRoot);
                })
                .catch(error => {
                  console.error(error);
                });
            } else {
              Alert.alert(
                'User Sign Up',
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

export default SubmitSignupButton;
