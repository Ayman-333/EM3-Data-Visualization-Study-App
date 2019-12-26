/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Svg, G, Rect, Text } from 'react-native-svg';
import { StackedAreaChart, Grid, YAxis, XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Legends from '../Novel/Legends'
import * as dataAll from '../../../../res/EnergyData';
import { lab } from 'd3';


class StackedArea extends Component {
  render() {
    const data = dataAll['computer']
    const dummyData = {
      expenseData: [
        {
          month: new Date(2015, 0, 1),
          apples: 3840,
          bananas: 1920,
          cherries: 960,
          dates: 400,
        },
        {
          month: new Date(2015, 1, 1),
          apples: 1600,
          bananas: 1440,
          cherries: 960,
          dates: 400,
        },
        {
          month: new Date(2015, 2, 1),
          apples: 640,
          bananas: 960,
          cherries: 3640,
          dates: 400,
        },
        {
          month: new Date(2015, 3, 1),
          apples: 3320,
          bananas: 480,
          cherries: 640,
          dates: 400,
        }
      ],
      colors: ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff'],
      keys: ['apples', 'bananas', 'cherries', 'dates']
    }

    const svgs = [
      { onPress: () => console.log('apples') },
      { onPress: () => console.log('bananas') },
      { onPress: () => console.log('cherries') },
      { onPress: () => console.log('dates') },
    ]

    return (
      <View style={ styles.container }>
                
                <StackedAreaChart
                    style={ { flex: 1 } }
                    contentInset={ { top: 10, bottom: 10, left: 25 } }
                    data={ data.expenseData }
                    keys={ data.keys }
                    colors={ data.colors }
                    curve={ shape.curveNatural }
                >
                    <Grid/>
                </StackedAreaChart>  
                <YAxis
                    style={ { position: 'absolute', top: 0, bottom: 0 }}
                    data={ StackedAreaChart.extractDataPoints(data.expenseData, data.keys) }
                    contentInset={ { top: 10, bottom: 10 } }
                    svg={ {
                        fontSize: 8,
                        fill: '#000',
                        stroke: 'black',
                        strokeWidth: 0.1,
                        alignmentBaseline: 'baseline',
                        baselineShift: '3',
                    } }
                />
              <XAxis
                        style={{ marginHorizontal: 10, height: 100, position: "absolute", bottom: -81, width: 300}}
                        data={data.expenseData}
                        formatLabel={(value, index) => index + " hr"}
                        contentInset={{ left: 0, right: 10 }}
                        svg={{ fontSize: 8, fill: '#000' }}
                  />
                <Legends data={data}/>
            </View>
    )

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
