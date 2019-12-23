import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import SurveyHeader from '../SurveyHeader';
import Questionnaire from '../Questionnaire';
import { personalQs } from '../../../res/surveyInfo';
import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';

class HomeScreen extends Component {
  constructor() {
    super();
    global.surveyAnswers = {};
  }
  static navigationOptions = {
    header: null,
  };
  state = {
    startTime: Math.floor(Date.now() / 1000), // Unix timestamp.
  };
  render() {
    // Creating a document with device's id and setting up the array of users.
    global.surveysDBRef = firestore()
      .collection('completed-surveys')
      .doc(DeviceInfo.getUniqueId());
    global.surveysDBRef.get().then(snapshot => {
      snapshot.exists == false ? global.surveysDBRef.set({ completions: [] }) : '';
    });
    return (
      <>
        <SurveyHeader style={styles.SurveyHeader} />
        <View style={styles.container}>
          <View>
            <Text style={styles.greetingText}>
              Welcome to our EM3 survey{'\n'}Please introduce yourself by
              answering these questions.
            </Text>
          </View>
          <View style={styles.surveyContainer}>
            <Questionnaire
              surveyQs={personalQs}
              nextDestination={'Figures'}
              navigation={this.props.navigation}
              startTime={this.state.startTime}
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  SurveyHeader: {
    flex: 0.5,
  },
  container: {
    flex: 0.7,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
  },
  greetingText: {
    marginTop: 200,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
});

export default HomeScreen;
