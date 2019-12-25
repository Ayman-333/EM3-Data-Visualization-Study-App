/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Svg, G, Rect, Text} from 'react-native-svg';
import { StackedAreaChart } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { ScrollView } from 'react-native-gesture-handler';
import {
    PieChart
} from "react-native-chart-kit";

class StackedArea extends Component {
  render() {
    

    return (
          <StackedAreaChart
          style={{ height: 300, paddingVertical: 0 }}
          data={data}
          keys={keys}
          colors={colors}
          curve={shape.curveNatural}
          showGrid={false}
          svgs={svgs} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginTop: 15,
  },
});

export default StackedArea;
