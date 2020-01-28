import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';
import SurveyHeader from '../SurveyHeader';
import Questionnaire from '../Questionnaire';
import { personalQs } from '../../../res/survey_info';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import DeviceInfo from 'react-native-device-info';
import NetInfo from '@react-native-community/netinfo';
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends Component {
  constructor() {
    super();
    global.surveyAnswers = {};
    global.isNovel;
    global.isFirstTime = false;
  }
  static navigationOptions = {
    header: null,
  };
  state = {
    startTime: Math.floor(Date.now() / 1000), // Unix timestamp.
    userSignedIn: false,
  };

  async componentDidMount() {
    try {
      const user = await auth().signInAnonymously();
      // console.log(user);
      // console.log('Great seems like I am in')

      // Creating a document with device's id and setting up the array of users and the type of figures he/she will be seeing.
      global.surveysDBRef = firestore()
        .collection('completed-surveys')
        .doc(DeviceInfo.getUniqueId());
      // console.log(global.surveysDBRef)
      await global.surveysDBRef
        .get()
        .then(snapshot => {
          // console.log(snapshot);
          // console.log(snapshot.data());

          if (snapshot.exists == false) {
            global.isFirstTime = true;
            global.isNovel = Math.random() >= 0.5;
            global.surveysDBRef
              .set({
                completions: [],
                Novel: global.isNovel
              });
          } else {
            // because user might open the application and not do the survey, and do it later. This will catch such behaviour so that we still can get the country name
            if (snapshot.data().country_name == undefined)
              global.isFirstTime = true;
            global.isNovel = snapshot.data().Novel
          }
          // console.log(global.isNovel)
        })
        .catch(error => {
          console.log(error);
          this.props.navigation.navigate('Empty')
        });
      this.setState
        ({
          userSignedIn: user.user.uid ? true : false,
        });
      // console.log(this.props.navigation.state.routeName)

      if (user.user.uid && this.props.navigation.state.routeName == 'Empty')
        this.props.navigation.pop()
    } catch (e) {
      switch (e.code) {
        case 'auth/operation-not-allowed':
          console.log('Enable anonymous in your firebase console.');
          break;
        default:
          console.error(e);
          break;
      }
    }

  }
  render() {
    // console.log(this.state.userSignedIn);

    console.log(DeviceInfo.getUniqueId())
    NetInfo.addEventListener(state => {
      // Works on both Android and iOS
      if (state.isConnected != true)
        this.props.navigation.navigate('Empty');
      else {
        this.props.navigation.pop();
      }
    });

    return (
      <>
        <SurveyHeader style={styles.SurveyHeader} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require('../../../res/complete_logo.png')}
            />
            <Text style={styles.greetingTextHeader}>
              Welcome to EM3 Data Visualization Study
          </Text>
            <Text style={styles.greetingTextHeader2}>
              We aim to find the best visualizations for demonstrating energy consumption at homes. Your input is appreciated through this interactive questionnaire. {'\n\n'}
              To start, please introduce yourself by answering the following questions. Following, we will present three different visualizations for you to rate. Your responses will be treated anonymously.
            <Text style={{ fontWeight: 'bold' }}>
                {'\n\n'}Note: the information (collected at the end of the survey) is strictly your responses and the name of the country you are currently in. Therefore, if you feel uncomfortable sharing the aforementioned information please refrain from answering.
            </Text>
            </Text>
          </View>
          <View style={styles.surveyContainer}>
            {global.isNovel != undefined ?
              <Questionnaire
                surveyQs={personalQs}
                nextDestination={'Figures'}
                navigation={this.props.navigation}
                startTime={this.state.startTime}
              /> :
              (<Text style={styles.loading}>
                Loading...
              </Text>)
            }
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
    flex: Platform.OS === 'ios' ? 1 : 1.3,
    marginLeft: 22,
    marginRight: 25,
    fontFamily: 'Helvetica',
    textAlign: 'left',
  },
  greetingTextHeader: {
    marginBottom: 20,
    marginLeft: 0,
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
  loading: {
    fontSize: 30,
  }
});

export default HomeScreen;
