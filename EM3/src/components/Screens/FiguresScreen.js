import React, {Component} from 'react';
import {Button, Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Heatmap from '../Figures/Novel/HeatMap';
import Spiral from '../Figures/Novel/Spiral';
import CustomStackedBarChart from '../Figures/Novel/CustomStackedBarChart';

import {LineChartPlot} from '../Figures/Conventional/LineChartPlot';
import Questionnaire from '../Questionnaire';
import SurveyHeader from '../SurveyHeader';
import {figsQs} from '../../../res/surveyInfo';
import { ScrollView } from 'react-native-gesture-handler';

class FiguresScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    chartNumber: 0,
  }
  nextChart = () => {
    this.setState({
      chartNumber: this.state.chartNumber + 1,
    });
  }
  render() {
    // const {navigate} = this.props.navigation;

    const figures = {heatmap: <Heatmap />, spiral: <Spiral />, stackedBarChart: <CustomStackedBarChart />};
    const figuresNames = Object.keys(figures);
    const surveys = [];
    for (let s = 0; s < 2; s++) {
      surveys.push(
        <Questionnaire
          key={figuresNames[s]}
          surveyQs={figsQs}
          nextDestination={''}
          navigation={this.props.navigation}
          chartNumber={this.state.chartNumber}
          nextChart={this.nextChart}
        />);
    }
    surveys.push(<Questionnaire
        key={figuresNames[2]}
        surveyQs={figsQs}
        nextDestination={'Thanks'}
        navigation={this.props.navigation}
    />);
      return (
      <>
        <SurveyHeader style={styles.header} />
        <ScrollView style={styles.container}>
          <View>
            {figures[figuresNames[this.state.chartNumber]]}
          </View>
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
