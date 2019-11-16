/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, StyleSheet, Button, FlatList, ScrollView, SafeAreaView} from 'react-native';
import CustomStackedBarChart from './CustomStackedBarChart';
import Questionnaire from './Questionnaire';
import SurveyHeader from './SurveyHeader';


export default class App extends Component {

  render() {
    return (
      <>
        <SurveyHeader style={styles.header}/>
        <SafeAreaView style={styles.container}>
          <CustomStackedBarChart style={styles.plotBody}/>
            <View style={styles.container}>
              <Questionnaire />
            </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
  },
  container: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  plotBody: {
    color: 'white',
    alignItems: 'center',
    height: '50%',
  },
});
