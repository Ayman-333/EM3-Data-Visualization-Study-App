import React, { Component } from 'react';
import { Text, Button, View, StyleSheet, Image, ScrollView } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import SurveyHeader from '../SurveyHeader';
import firestore from '@react-native-firebase/firestore';
import { credits } from '../../../res/credits';

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
        <SurveyHeader style={styles.SurveyHeader} horizontal={false} />
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
          <Image
            style={styles.logo}
            source={require('../../../res/complete_logo.jpeg')}
          />
          <Text style={styles.greetingTextHeader}>
            Thank you for completing the survey, please share it with others.
          </Text>
          <Text style={styles.greetingTextHeader2}>
            Let us know through the following email if you have any cool ideas or if you faced any bugs during the survey: {'\n\n'}
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
          <Text style={styles.creditsTitle}>
            CREDITS
          </Text>
          <View style={styles.credits}>
            <Text>
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
    marginLeft: 22,
    marginRight: 25,
    textAlign: 'left',
    fontFamily: 'Helvetica',
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
  logo: {
    marginTop: 20,
    marginLeft: 7,
    marginBottom: 20,
    width: 190,
    height: 90,
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
  },
  credits: {
    fontSize: 15,
    paddingVertical: 10,
    height: 350,
  }
});
export default ThankYouScreen;
