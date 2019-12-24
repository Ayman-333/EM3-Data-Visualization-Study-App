import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SurveyHeader from '../SurveyHeader';

class EmptyScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <>
        <SurveyHeader />
        <View style={styles.container}>
          <Text style={styles.greetingText}>
            Warning: For the application to work properly, internet connection is required{'\n\n'}Kindly turn your internet connection back on to continue the survey
          </Text>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
  },
  greetingText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 40,
  },
});

export default EmptyScreen;
