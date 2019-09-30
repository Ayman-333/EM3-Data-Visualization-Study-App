/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Plot from './Plot';
import Questionnaire from './Questionnaire';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// TODO The first view for the plotting
// TODO the second view is for the questionnaire

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.container}>
            <View style={styles.plotBody}>
              <Plot />
            </View>
            <Questionnaire />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  plotBody: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
  },
});

export default App;
