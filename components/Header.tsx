import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Wod and Beyond</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleText: {
    fontWeight: '700',
    fontSize: 20,
  },
});

export default Header;
