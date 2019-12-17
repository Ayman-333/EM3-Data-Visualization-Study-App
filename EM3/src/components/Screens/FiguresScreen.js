import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {CustomStackedBarChart, Heatmap, Spiral} from '../Figures/Noval';
import Questionnaire from '../Figures/Questionnaire';
import SurveyHeader from '../SurveyHeader';
import BarChart from '../Figures/BarChart';
import {figsQs} from '../../../res/surveyInfo';

class FiguresScreen extends Component {
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
    const surveys = [];
    const figures = [];
    const {navigate} = this.props.navigation;
    return (
      <>
        <SurveyHeader style={styles.header} />
        <SafeAreaView style={styles.container}>
          <View style={styles.plotBody}>
            <Heatmap />
          </View>
          {/* <View style={styles.container}>
              <Questionnaire />
            </View> */}
          <View style={styles.surveyContainer}>
            <Questionnaire
              surveyQs={figsQs}
              nextDestination={''}
              navigate={navigate}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
  },
  container: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  plotBody: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    height: '50%',
  },
});

export default FiguresScreen;
