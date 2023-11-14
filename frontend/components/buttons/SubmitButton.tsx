import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Alert} from 'react-native';
import {BASE_URL} from '@env';
import {Navigation} from 'react-native-navigation';

type submitButtonProps = {
  user: {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    phoneNumber: string;
  };
  componentId: string;
};

class SubmitButton extends Component<submitButtonProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await fetch(`${BASE_URL}/users/create`, {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(this.props.user),
            })
              .then(() => {
                Navigation.push(this.props.componentId, {
                  component: {
                    name: 'Home',
                  },
                });
                Alert.alert('User Sign Up', 'Sign up successfully completed!', [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
              })
              .catch(error => {
                console.error(error);
              });
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

export default SubmitButton;