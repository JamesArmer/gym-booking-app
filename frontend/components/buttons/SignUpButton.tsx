import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type signupButtonProps = {
  componentId: string;
};

class SignUpButton extends Component<signupButtonProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            return Navigation.push(this.props.componentId, {
              component: {
                name: 'SignUp',
                options: {
                  topBar: {
                    title: {
                      text: 'Sign Up',
                    },
                  },
                },
              },
            });
          }}>
          <Text style={{color: 'white'}}>Sign Up</Text>
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

export default SignUpButton;
