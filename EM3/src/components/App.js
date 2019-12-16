/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import CustomStackedBarChart from './CustomStackedBarChart';
import Questionnaire from './Questionnaire';
import Spiral from './Spiral';
import SurveyHeader from './SurveyHeader';
import BarChart from './BarChart';
import Test from './Test';
import ExtrasExample from './ExtrasExample';
import Heatmap from './HeatMap';

export default class App extends Component {



  render() {
    return (
      <>
        <SurveyHeader style={styles.header}/>
        <SafeAreaView style={styles.container}>
          <View  style={styles.plotBody}>
            <Heatmap />
          </View>
          {/* <View style={styles.container}>
            <Questionnaire />
          </View> */}
        </SafeAreaView>
      </>
    );
  }
}

{/* <View style={styles.container}>
<BarChart data={data} round={100} unit="€"/>
</View> */}

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
