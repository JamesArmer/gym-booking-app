import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type classScheduleButtonProps = {
  componentId: string;
};

class ClassScheduleButton extends Component<classScheduleButtonProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            return Navigation.push(this.props.componentId, {
              component: {
                name: 'ClassSchedule',
              },
            });
          }}>
          <Text style={{color: 'white'}}>Class Schedule</Text>
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

export default ClassScheduleButton;
