import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Heatmap from '../Figures/Novel/HeatMap';
import Spiral from '../Figures/Novel/Spiral';
import CustomStackedBarChart from '../Figures/Novel/CustomStackedBarChart';

import Bar from '../Figures/Conventional/Bar';
import Line from '../Figures/Conventional/Line';
import Pie from '../Figures/Conventional/Pie';
import StackedArea from '../Figures/Conventional/StackedArea';
import Questionnaire from '../Questionnaire';
import SurveyHeader from '../SurveyHeader';
import { figsQs } from '../../../res/surveyInfo';
// import { ScrollView } from 'react-native-gesture-handler';

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
    let figures;
    if (global.isNovel)
      figures = {
        heatmap: <Heatmap />,
        spiral: <Spiral />,
        stackedBarChart: <CustomStackedBarChart />,
      };
    else
      figures = {
        pie: <Pie />,
        // stackedArea: <StackedArea />,
        bar: <Bar />,
        line: <Line />,
      };
    const figuresNames = Object.keys(figures);
    const surveys = [];
    for (let s = 0; s < figuresNames.length; s++) {
      surveys.push(
        <Questionnaire
          key={s}
          chartName={figuresNames[s]}
          surveyQs={figsQs}
          nextDestination={s == figuresNames.length - 1 ? 'Thanks' : ''}
          navigation={s == figuresNames.length - 1 ? this.props.navigation : {}}
          chartNumber={this.state.chartNumber}
          nextChart={this.nextChart}
          startTime={this.state.startTime}
        />,
      );
    }
    return (
      <>
        <SurveyHeader style={styles.header} />
        <ScrollView showsVerticalScrollIndicator={false}
                  ref={ref => this.scrollView = ref}
                  onContentSizeChange={() => {
                    this.scrollView.scrollToEnd({ animated: true });
                  }}>
          <View style={styles.container}>{figures[figuresNames[this.state.chartNumber]]}</View>
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
  container: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    marginTop: 15,
  },
  plotBody: {
    flex: 1,
    color: 'white',
    alignItems: 'center',
    height: '50%',
  },
  surveyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
  },
});

export default FiguresScreen;
