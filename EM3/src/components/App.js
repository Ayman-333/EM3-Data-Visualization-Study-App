/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import CustomStackedBarChart from './CustomStackedBarChart';
import Questionnaire from './Questionnaire';
import SurveyHeader from './SurveyHeader';
import LineChartPlot from './LineChartPlot';

export default class App extends Component {

  render() {
    return (
      <>
        <SurveyHeader style={styles.header}/>
        <SafeAreaView style={styles.container}>
          <View  style={styles.plotBody}>
            <CustomStackedBarChart />
          </View>
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
    flex: 1,
    color: 'white',
    alignItems: 'center',
    height: '50%',
  },
});
