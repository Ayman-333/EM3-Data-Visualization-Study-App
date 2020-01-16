/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Svg, G, Text } from 'react-native-svg';
import { StackedAreaChart, YAxis, XAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import * as scale from 'd3-scale';
import Legends from '../Novel/Legends';
import * as dataAll from '../../../../res/energy_data';

class StackedArea extends Component {
  screenWidth = Dimensions.get('window').width;

  render() {
    const data = dataAll['computer']

    const spacingInner = 0.5;
    const spacingOuter = 0.5;
    const contentInset = { top: 10, bottom: 10, left: -50 };
    // console.log(data.expenseData[0].date.format('MMM Do'));

    return (
      <>
        <View style={{ flexDirection: 'row' }}>
          <ScrollView
            contentContainerStyle={styles.container}
            horizontal={true}>
            <Svg
              key={'ylabelTitle'}
              height={300}
              width={25}
              marginRight={18}>
              <G y={200} rotation={-90}>
                <Text
                  fill="black"
                  stroke="black"
                  fontSize="15"
                  fontWeight="lighter"
                  x={10}
                  y={13}
                  textAnchor="start">
                  {"Power (W)"}
                </Text>
              </G>
            </Svg>
            <StackedAreaChart
              style={{ width: 400 }}
              contentInset={{ top: 10, bottom: 10, left: 0 }}
              spacingInner={spacingInner}
              spacingOuter={spacingOuter}
              data={data.expenseData}
              keys={data.keys}
              colors={data.colors}
              curve={shape.curveNatural} >
              {/* <Grid /> */}
            </StackedAreaChart>
            <YAxis
              style={{ position: 'absolute', top: 0, bottom: 0, left: 25 }}
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
              style={{ height: 100, position: "absolute", bottom: -80, left: -5, width: 550 }}
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
          </ScrollView>
          <Legends data={data} />

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
            x={Dimensions.get('window').width / 2}
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
    textAlign: 'center',
    marginTop: 15,
    marginRight: 20,
    paddingBottom: 20,
    marginHorizontal: 5,
    flexDirection: "row",
    height: 300,
    width: 480,
  },
});

export default StackedArea;
