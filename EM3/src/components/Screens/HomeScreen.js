import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import SurveyHeader from '../SurveyHeader';
import Questionnaire from '../Questionnaire';
import {personalQs} from '../../../res/surveyInfo';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    // const {navigate} = ;
    // console.log(navigate);
    console.log(this.props.navigation);
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
              navigation={this.props.navigation}
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
