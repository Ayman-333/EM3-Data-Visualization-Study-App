import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
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
          <Image
            style={styles.logo}
            source={require('../../../res/icons/lamp.png')}
          />
          <Text style={styles.greetingText}>
            Welcome to EM3 data visualization study. We aim to find the best visulizations for demonstrating energy consumption at homes. Your input is needed through this interactive questionnaire.{'\n'}{'\n'}
            To start, please introduce yourself by
            answering the following questions. Following, we will present three different visualizations for your rating. 
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
  },
  logo: {
    width: 50,
    height: 50
  }
});

export default HomeScreen;
