import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import SurveyHeader from '../SurveyHeader';
import Questionnaire from '../Figures/Questionnaire';
import {personalQs} from '../../../res/surveyInfo';

class HomeScreen extends Component {
  static navigationOptions = {
    // title: 'EM3',
    // headerStyle: {
    //   backgroundColor: 'green',
    //   textAlign: 'center',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <SurveyHeader style={styles.SurveyHeader}/>
        <View style={styles.container}>
          <View>
            <Text style={styles.greetingText}>
              Welcome to our EM3 survey, please introduce yourself by answering these questions.
            </Text>
          </View>
          <View style={styles.surveyContainer}>
            <Questionnaire
              surveyQs={personalQs}
              nextDestination={'Figures'}
              navigate={navigate}
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
  surveyContainer: {
    justifyContent: 'center',
  },
});

export default HomeScreen;
