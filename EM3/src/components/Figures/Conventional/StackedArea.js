/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, G, Text } from 'react-native-svg';
import { StackedAreaChart, YAxis, XAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';
import Legends from '../Novel/Legends';
import * as dataAll from '../../../../res/energy_data';

class StackedArea extends Component {
  render() {
    const data = dataAll['computer']

    const spacingInner = 0.5;
    const spacingOuter = 0.5;
    const contentInset = { top: 10, bottom: 10, left: -50 };
    // console.log(data.expenseData[0].date.format('MMM Do'));
    return (
      <>
        <View style={{ flexDirection: 'row' }}>
          <Svg
            key={'ylabelTitle'}
            height={300}
            width={25}>
            <G y={200} rotation={-90}>
              <Text
                fill="black"
                stroke="black"
                fontSize="15"
                fontWeight="lighter"
                x={10}
                y={22}
                textAnchor="start">
                {"Power (W)"}
              </Text>
            </G>
          </Svg>
          <View style={styles.container}>
            <StackedAreaChart
              style={{ flex: 1 }}
              contentInset={{ top: 10, bottom: 10, left: 25 }}
              spacingInner={spacingInner}
              spacingOuter={spacingOuter}
              data={data.expenseData}
              keys={data.keys}
              colors={data.colors}
              curve={shape.curveNatural} >
              {/* <Grid /> */}
            </StackedAreaChart>
            <YAxis
              style={{ position: 'absolute', top: 0, bottom: 0 }}
              data={StackedAreaChart.extractDataPoints(data.expenseData, data.keys)}
              contentInset={{ top: 10, bottom: 25 }}
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
              style={{ height: 100, position: "absolute", bottom: -80, width: 430 }}
              data={data.expenseData}
              formatLabel={(value, index) =>
                data.expenseData[index].date.format('HH:mm')
              }
              scale={scale.scaleBand}
              spacingInner={spacingInner}
              spacingOuter={spacingOuter}
              contentInset={contentInset}
              svg={{
                fontSize: 13,
                fill: 'black',
              }}
            />
            {/* <XAxis
            style={{ height: 100, position: "absolute", bottom: -100, width: 430 }}
            data={data.expenseData}
            formatLabel={(value, index) =>
              data.expenseData[index].date.format('MMM Do')
            }
            scale={scale.scaleBand}
            spacingInner={spacingInner}
            spacingOuter={spacingOuter}
            contentInset={contentInset}
            svg={{
              fontSize: 13,
              fill: 'black',
            }}
          /> */}
            <Legends data={data} />
          </View>
        </View>
        {/* XAxis Label */}
        <Svg
          key={'xlabelTitle'}
          height={20}
          width={350}>
          <Text
            fill="black"
            stroke="black"
            fontSize="15"
            fontWeight="lighter"
            x={200}
            y={15}
            textAnchor="middle">
            {data.expenseData[0].date.format('MMM Do YYYY')}
          </Text>
        </Svg>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    marginTop: 15,
    marginRight: 20,
    paddingBottom: 20,
    marginHorizontal: 15,
    flexDirection: "row",
    height: 300,
  },
});

export default StackedArea;
