/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import LineChartPlot from './LineChartPlot';
import Questionnaire from './Questionnaire';
import SurveyHeader from './SurveyHeader';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class App extends React.Component {
  render() {
    return (
      <>
        <SurveyHeader style={styles.header}/>
        <SafeAreaView style={styles.container}>
          <View>
            <View style={styles.plotBody}>
              <LineChartPlot />
            </View>
            <View style={styles.container}>
              <Questionnaire />
            </View>
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
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  plotBody: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
});

export default App;
