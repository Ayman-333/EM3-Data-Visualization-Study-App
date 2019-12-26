import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';
import SurveyHeader from '../SurveyHeader';
import Questionnaire from '../Questionnaire';
import { personalQs } from '../../../res/survey_info';
import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';
import { ScrollView } from 'react-native-gesture-handler';


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
      if(snapshot.exists == false) {
        global.isNovel = Math.random() >= 0.5;
        global.surveysDBRef.set({ completions: [], Novel: global.isNovel })
      } else
        global.isNovel = snapshot.data().Novel
    });
    return (
      <>
        <SurveyHeader style={styles.SurveyHeader} />
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require('../../../res/complete_logo.jpeg')}
            />
          <Text style={styles.greetingTextHeader}>
            Welcome to EM3 Data Visualization Study
          </Text>
          <Text style={styles.greetingTextHeader2}>
            We aim to find the best visulizations for demonstrating energy consumption at homes. Your input is appreciated through this interactive questionnaire. {'\n\n'}
            To start, please introduce yourself by answering the following questions. Following, we will present three different visualizations for your rating. Your responses will be treated anonymously.
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
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  SurveyHeader: {
    flex: 0.2,
  },
  container: {
    flex: Platform.OS === 'ios'? 1 : 1.3,
    marginLeft: 22,
    marginRight: 25,
    fontFamily: 'Helvetica',
    textAlign: 'left',
  },
  greetingTextHeader: {
    marginBottom: 20,
    marginLeft: Platform.OS === 'ios'? -65.5: 0,
    fontSize: 25,
  },
  greetingTextHeader2: {
    marginBottom: 15,
    fontSize: 15,
  },
  surveyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
    width: 190,
    height: 90,
  },
});

export default HomeScreen;
