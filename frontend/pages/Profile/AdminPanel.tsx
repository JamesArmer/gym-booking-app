import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavButton from '../../components/buttons/ClassScheduleButton';

type adminPanelProps = {
  componentId: string;
};

function AdminPanel(props: adminPanelProps): JSX.Element {
  return (
    <View style={styles.flexCenter}>
      <Text>This is the admin panel</Text>
      <NavButton
        buttonText="Class Schedule"
        navComponent="ClassSchedule"
        componentId={props.componentId}
      />
      <NavButton
        buttonText="Class Types"
        navComponent="ClassTypes"
        componentId={props.componentId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AdminPanel.options = {
  topBar: {
    title: {
      text: 'Admin Panel',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export default AdminPanel;
