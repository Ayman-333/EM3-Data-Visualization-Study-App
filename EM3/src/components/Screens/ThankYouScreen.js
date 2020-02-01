import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import firestore from '@react-native-firebase/firestore';
import publicIP from 'react-native-public-ip';

import { optionalQs } from '../../../res/survey_info';
import { credits } from '../../../res/credits';
import Questionnaire from '../Questionnaire';
import SurveyHeader from '../SurveyHeader';

class ThankYouScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    completedOptionaSurvey: false,
  }

  async componentDidMount() {
    if (global.isFirstTime)
      await publicIP()
        .then(ip => {
          const url = `http://api.ipstack.com/${ip}?access_key=3b8ae0d37217c4fcbf551b5be1394a7e&format=1`;
          // console.log(url)
          fetch(url)
            .then(response => response.json())
            .then(responseJson => {
              global.surveysDBRef
                .update({
                  continent_name: responseJson.continent_name,
                  country_name: responseJson.country_name
                });
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch(error => {
          console.log(error);
          // 'Unable to get IP address.'
        });

    await global.surveysDBRef.update({
      completions: firestore.FieldValue.arrayUnion(global.surveyAnswers),
    });
  }
  render() {

    const handleOptionalSurveySubmission = (dataObj) => {
      global.surveysDBRef.update({
        evaluations: firestore.FieldValue.arrayUnion(dataObj),
      });
      this.setState
        ({
          completedOptionaSurvey: true,
        });
    }

    return (
      <View>
        <SurveyHeader style={styles.SurveyHeader} horizontal={false} />
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
          <Image
            style={styles.logo}
            source={require('../../../res/complete_logo.png')}
          />
          <Text style={styles.greetingTextHeader}>
            Thank you for completing the survey, we have saved your responses.
            Feel free to share the application link with others.
          </Text>
          <Text style={styles.greetingTextHeader2}>
            Let us know through the following email if you have any cool ideas or if you faced any bugs during the survey (a screenshot will be appreciated): {'\n\n'}
            aa1405810@qu.edu.qa -> Ayman Al-Kababji & Abdullah Alsalemi {'\n'}
          </Text>
          <Text style={styles.greetingTextHeader2}>
            The questionnaire below is optional and very short! your response is highly appreciated.
          </Text>
          <KeyboardAvoidingView style={styles.surveyContainer}>
            {!this.state.completedOptionaSurvey ? 
            <Questionnaire
              surveyQs={optionalQs}
              nextDestination={''}
              navigation={this.props.navigation}
              onOptionalSurveySubmission={handleOptionalSurveySubmission}
            />
              :
              <Text style={styles.thanks}>Thank You</Text>}
          </KeyboardAvoidingView>
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
          <Text style={styles.creditsTitle}>
            CREDITS
          </Text>
          <View style={styles.credits}>
            <Text style={styles.credits}>
              {credits}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SurveyHeader: {
    flex: 0.2,
  },
  container: {
    flexDirection: 'column',
    textAlign: 'left',
    fontFamily: 'Helvetica',
  },
  greetingTextHeader: {
    marginBottom: 20,
    marginLeft: 22,
    marginRight: 25,
    fontSize: 25,
  },
  greetingTextHeader2: {
    marginBottom: 5,
    marginLeft: 22,
    marginRight: 25,
    fontSize: 15,
  },
  logo: {
    marginTop: 20,
    marginLeft: 22,
    marginRight: 25,
    marginBottom: 20,
    width: 190,
    height: 90,
  },
  surveyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    height: 370,
    width: Dimensions.get("window").width,
  },
  button: {
    // marginTop: 30,
    marginLeft: 75,
    marginRight: 75,
    height: 75,
  },
  creditsTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 22,
    marginRight: 25,
  },
  credits: {
    fontSize: 15,
    marginBottom: 50,
    height: 'auto',
    marginLeft: 11,
    marginRight: 12.5,
  },
  thanks: {
    fontSize: 30,
    textAlign: 'center',
  }
});
export default ThankYouScreen;
