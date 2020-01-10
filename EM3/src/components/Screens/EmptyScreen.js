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
          <Text style={styles.warningText}>
            Warning: For the application to work properly, internet connection is required{'\n\n'}
            Kindly turn your internet connection back on to continue the survey
          </Text>
          <Text style={styles.noteText}>
            Note: If you are connected to the internet and you are still here, try clearing application data by going to:{'\n'} 
            Settings -> Apps -> EM3 -> Storage -> Clear data {'\n'}
            If problem persists, contact developers at aa1405810@qu.edu.qa
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
  warningText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 30,
  },
  noteText: {
    textAlign: 'center',
    fontSize: 13,
    margin: 40,
  },
});

export default EmptyScreen;
