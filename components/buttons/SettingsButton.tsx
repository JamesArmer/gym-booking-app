import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type settingsButtonProps = {
  componentId: string;
};

class SettingsButton extends Component<settingsButtonProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            return Navigation.push(this.props.componentId, {
              component: {
                name: 'Settings',
                options: {
                  topBar: {
                    title: {
                      text: 'Settings',
                    },
                  },
                },
              },
            });
          }}>
          <Text style={{color: 'white'}}>Settings ⚙️</Text>
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

export default SettingsButton;
