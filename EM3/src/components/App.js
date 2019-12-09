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
    const data = [
      { label: 'Jan', value: 500 },
      { label: 'Feb', value: 312 },
      { label: 'Mar', value: 424 },
      { label: 'Apr', value: 745 },
      { label: 'May', value: 89 },
      { label: 'Jun', value: 434 },
      { label: 'Jul', value: 650 },
      { label: 'Aug', value: 980 },
      { label: 'Sep', value: 123 },
      { label: 'Oct', value: 186 },
      { label: 'Nov', value: 689 },
      { label: 'Dec', value: 643 },
    ]
    return (
      <>
        <SurveyHeader style={styles.header}/>
        <SafeAreaView style={styles.container}>
          <View  style={styles.plotBody}>
            <CustomStackedBarChart />
          </View>
          <View style={styles.container}>
            <Heatmap />
          </View>
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
