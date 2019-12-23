import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Heatmap from '../Figures/Novel/HeatMap';
import Spiral from '../Figures/Novel/Spiral';
import CustomStackedBarChart from '../Figures/Novel/CustomStackedBarChart';

import { LineChartPlot } from '../Figures/Conventional/LineChartPlot';
import Questionnaire from '../Questionnaire';
import SurveyHeader from '../SurveyHeader';
import { figsQs } from '../../../res/surveyInfo';
import { ScrollView } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import DeviceInfo from 'react-native-device-info';

class FiguresScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    chartNumber: 0,
    startTime: Math.floor(Date.now() / 1000), // Unix timestamp.
  };
  nextChart = () => {
    this.setState({
      chartNumber: this.state.chartNumber + 1,
      startTime: Math.floor(Date.now() / 1000),
    });
  };
  render() {
    // const {navigate} = this.props.navigation;
    const firestoreRef = firestore()
      .collection('completed-surveys')
      .doc(DeviceInfo.getUniqueId());

    const figures = {
      heatmap: <Heatmap />,
      spiral: <Spiral />,
      stackedBarChart: <CustomStackedBarChart />,
    };
    const figuresNames = Object.keys(figures);
    const surveys = [];
    for (let s = 0; s < 3; s++) {
      surveys.push(
        <Questionnaire
          key={s}
          chartName={figuresNames[s]}
          surveyQs={figsQs}
          nextDestination={s == 2 ? 'Thanks' : ''}
          navigation={s == 2 ? this.props.navigation : {}}
          chartNumber={this.state.chartNumber}
          nextChart={this.nextChart}
          firestoreRef={firestoreRef}
          startTime={this.state.startTime}
        />,
      );
    }
    return (
      <>
        <SurveyHeader style={styles.header} />
        <ScrollView style={styles.container}>
          <View>{figures[figuresNames[this.state.chartNumber]]}</View>
          <View style={styles.surveyContainer}>
            {surveys[this.state.chartNumber]}
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0.5,
  },
  // container: {
  //   flex: 1.2,
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   backgroundColor: 'white',
  // },
  // plotBody: {
  //   flex: 1,
  //   color: 'white',
  //   alignItems: 'center',
  //   height: '50%',
  // },
});

export default FiguresScreen;
