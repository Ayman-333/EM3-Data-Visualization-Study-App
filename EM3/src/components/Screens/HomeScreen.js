import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import SurveyHeader from '../SurveyHeader';
import Questionnaire from '../Questionnaire';
import { personalQs } from '../../../res/surveyInfo';
import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';


class HomeScreen extends Component {
  constructor() {
    super();
    global.surveyAnswers = {};
    global.isNovel;
  }
  static navigationOptions = {
    header: null,
  };
  state = {
    startTime: Math.floor(Date.now() / 1000), // Unix timestamp.
  };
  render() {
    NetInfo.addEventListener(state => {
      // Works on both Android and iOS
      if (state.isConnected != true)
        this.props.navigation.navigate('Empty');
      else {
        this.props.navigation.pop();
      }
    });
    // Creating a document with device's id and setting up the array of users and the type of figures he/she will be seeing.
    global.surveysDBRef = firestore()
      .collection('completed-surveys')
      .doc(DeviceInfo.getUniqueId());
    global.surveysDBRef.get().then(snapshot => {
      snapshot.exists == false
        ? global.surveysDBRef.set({ completions: [], Novel: Math.random() >= 0.5 })
        : global.isNovel = snapshot.data().Novel
    });
    return (
      <>
        <SurveyHeader style={styles.SurveyHeader} />
        <View style={styles.container}>
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
      </>
    );
  }
}

const styles = StyleSheet.create({
  SurveyHeader: {
    flex: 0.2,
  },
  container: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greetingText: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  surveyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomeScreen;
