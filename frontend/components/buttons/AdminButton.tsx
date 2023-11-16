import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type adminButtonProps = {
  componentId: string;
};

class AdminButton extends Component<adminButtonProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            return Navigation.push(this.props.componentId, {
              component: {
                name: 'AdminPanel',
              },
            });
          }}>
          <Text style={{color: 'white'}}>Admin ⚠️</Text>
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

export default AdminButton;
