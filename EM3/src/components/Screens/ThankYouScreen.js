import React, { Component } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import SurveyHeader from '../SurveyHeader';
import firestore from '@react-native-firebase/firestore';
import { StackActions, NavigationActions } from 'react-navigation';

class ThankYouScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    global.surveysDBRef.update({
      completions: firestore.FieldValue.arrayUnion(global.surveyAnswers),
    });
    return (
      <View>
        <SurveyHeader />
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>
            Thank you for completing the survey, please let someone else do the survey!
          </Text>
        </View>
        <View style={styles.button}>
          <Button title="Do it again?" onPress={() => {
            const resetAction = StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' }),
              ],
            });
            this.props.navigation.dispatch(resetAction);
          }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SurveyHeader: {
    flex: 0.5,
  },
  textContainer: {
    marginTop: 100,
    marginBottom: 150,
  },
  greetingText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  button: {
    margin: 100,
  },
});
export default ThankYouScreen;
