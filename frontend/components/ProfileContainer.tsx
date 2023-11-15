import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

type profileContainerProps = {
  title: string;
  text: string;
  pageLink: string;
  componentId: string;
};

class ProfileContainer extends Component<profileContainerProps> {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          return Navigation.push(this.props.componentId, {
            component: {
              name: this.props.pageLink,
            },
          });
        }}>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionBorder}>
            <Text style={styles.sectionTitle}>{this.props.title}</Text>
            <Text>{this.props.text}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  sectionBorder: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default ProfileContainer;
