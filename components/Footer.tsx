import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

class Footer extends Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Terms & Conditions</Text>
        <Text style={styles.footerText}>Privacy Policy</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  footerText: {
    fontWeight: '400',
    fontSize: 12,
  },
});

export default Footer;
