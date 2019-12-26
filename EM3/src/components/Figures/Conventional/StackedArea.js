/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackedAreaChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Legends from '../Novel/Legends'
import * as dataAll from '../../../../res/energy_data';

class StackedArea extends Component {
  render() {
    const data = dataAll['computer']

    return (
      <View style={styles.container}>
        <StackedAreaChart
          style={{ flex: 1 }}
          contentInset={{ top: 10, bottom: 10, left: 25 }}
          data={data.expenseData}
          keys={data.keys}
          colors={data.colors}
          curve={shape.curveNatural}
        >
          <Grid />
        </StackedAreaChart>
        <YAxis
          style={{ position: 'absolute', top: 0, bottom: 0 }}
          data={StackedAreaChart.extractDataPoints(data.expenseData, data.keys)}
          contentInset={{ top: 10, bottom: 10 }}
          svg={{
            fontSize: 12,
            fill: '#000',
            stroke: 'black',
            strokeWidth: 0.1,
            alignmentBaseline: 'baseline',
            baselineShift: '3',
          }}
        />
        <XAxis
          style={{ marginHorizontal: 10, height: 100, position: "absolute", bottom: -81, width: 300 }}
          data={data.expenseData}
          formatLabel={(value, index) => index + " hr"}
          contentInset={{ left: 20, right: 10 }}
          svg={{ fontSize: 12, fill: '#000' }}
        />
        <Legends data={data} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginTop: 15,
    paddingBottom: 20,
    marginHorizontal: 15,
    flexDirection: "row",
    height: 220
  },
});

export default StackedArea;
