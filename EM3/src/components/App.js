/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import LineChartPlot from './LineChartPlot';
import { StackedBarChart } from 'react-native-svg-charts';
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

    const data = [
      {
          month: new Date(2015, 0, 1),
          apples: 3840,
          bananas: 1920,
          cherries: 960,
          dates: 400,
          oranges: 400,
      },
      {
          month: new Date(2015, 1, 1),
          apples: 1600,
          bananas: 1440,
          cherries: 960,
          dates: 400,
      },
      {
          month: new Date(2015, 2, 1),
          apples: 640,
          bananas: 960,
          cherries: 3640,
          dates: 400,
      },
      {
          month: new Date(2015, 3, 1),
          apples: 3320,
          bananas: 480,
          cherries: 640,
          dates: 400,
      },
    ]
    
    const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
    const keys = ['apples', 'bananas', 'cherries', 'dates']
    

    return (
      <>
        <SurveyHeader style={styles.header}/>
        <SafeAreaView style={styles.container}>
          <View>
            <View >
              <StackedBarChart
                style={{ height: 200 }}
                keys={keys}
                colors={colors}
                data={data}
                showGrid={false}
                contentInset={{ top: 30, bottom: 30 }}
            />
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
