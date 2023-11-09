import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

function ClassSchedule(): JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Text>This is the class schedule page</Text>
      </View>
      <View style={styles.listContainer}>
        <SectionList
          sections={[
            {
              title: 'Week 13/11/23',
              data: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ],
            },
            {
              title: 'Week 20/11/23',
              data: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ],
            },
            {
              title: 'Week 27/11/23',
              data: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ],
            },
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={item => `basicListEntry-${item}`}></SectionList>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  listContainer: {
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

ClassSchedule.options = {
  topBar: {
    title: {
      text: 'Class Schedule',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    text: 'Schedule',
    icon: require('../public/calendar.png'),
  },
};

export default ClassSchedule;
