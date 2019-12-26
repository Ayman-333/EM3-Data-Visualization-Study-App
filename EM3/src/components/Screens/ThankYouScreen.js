import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Image } from 'react-native';
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
        <SurveyHeader style={styles.SurveyHeader} />
        <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require('../../../res/complete_logo.jpeg')}
            />
          <Text style={styles.greetingTextHeader}>
            Thank you for completing the survey, please let someone else do it!
          </Text>
          <Text style={styles.greetingTextHeader2}>
            Please let us know if you have any ideas or if you faced any bugs during the survey through the following emails: {'\n\n'}
            a.alsalemi@qu.edu.qa -> Abdullah Alsalemi {'\n'}
            aa1405810@qu.edu.qa -> Ayman Al-Kababji {'\n'}
          </Text>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SurveyHeader: {
    flex: 0.2,
  },
  container: {
    flex: Platform.OS === 'ios' ? 1 : 1.3,
    flexDirection: 'column',
    marginLeft: 22,
    marginRight: 25,
    textAlign: 'left',
    fontFamily: 'Helvetica',
  },
  greetingTextHeader: {
    marginBottom: 20,
    marginLeft: Platform.OS === 'ios' ? -65.5 : 0,

    fontSize: 25,
  },
  greetingTextHeader2: {
    marginBottom: 15,
    fontSize: 15,
  },
  logo: {
    marginTop: 20,
    marginLeft: 7,
    marginBottom: 20,
    width: 190,
    height: 90,
  },
  button: {
    margin: 75,
    height: 100,
  },
});
export default ThankYouScreen;
