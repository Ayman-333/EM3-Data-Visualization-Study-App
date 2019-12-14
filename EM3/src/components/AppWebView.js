/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
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

        <WebView style={styles.container2}
        source={{ uri: 'http://windhistory.com/station.html?CYMM' }}/>
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
  container2: {
    textAlign: "center",
    width: 800,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  plotBody: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    height: '50%',
  },
});
