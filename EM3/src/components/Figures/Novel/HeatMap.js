import React, { Component } from 'react';
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native';
import { Svg, G, Rect, Text } from 'react-native-svg';
import { PieChart } from 'react-native-svg-charts';
import * as d3 from 'd3';
import { franceDataSet } from '../../../../res/1-4-2007';
import PieChartLegends from './PieChartLegends';

class HeatMap extends Component {
  state = {
    selectedPeriod: -1,
  };
  render() {
    const cols = 6;
    const periods = 60 / cols;
    let minEnergy = 0, maxEnergy = 0, seperateRoomsPeriodsConsumption = [];

    for (let i = 0; i < franceDataSet.length; i = i + periods) {
      let sum_rooms = [0, 0, 0];
      for (let j = 0; j < periods; j++) {
        sum_rooms[0] += franceDataSet[i + j][0];
        sum_rooms[1] += franceDataSet[i + j][1];
        sum_rooms[2] += franceDataSet[i + j][2];
      }
      const periodSum = sum_rooms[0] + sum_rooms[1] + sum_rooms[2];
      if (maxEnergy < periodSum)
        maxEnergy = periodSum
      if (minEnergy > periodSum)
        minEnergy = periodSum
      seperateRoomsPeriodsConsumption.push(sum_rooms);
    }
    const screenWidth = Dimensions.get('window').width;

    // const innerPadding = 6,
    //   rectHeight = 30,
    //   rectWidth = 50,
    const innerPadding = screenWidth/60,
      rectHeight = screenWidth/15,
      rectWidth = screenWidth/8.5,
      borderRadius = screenWidth/50,
      strokeWidth = screenWidth/90,
      xLabelTitle = 'Minutes',
      yLabelTitle = 'Hours';
    const currentTime = new Date();
    const time =
      (currentTime.getHours() * 60 + // to make them minutes
        Math.floor(currentTime.getMinutes() / (60 / cols)) * (60 / cols)) / // to round numbers (e.g. 44 -> 40)
      (60 / cols); // To divide the hour into 6 cols.
    // const rows = Math.ceil(time / cols),
    const rows = 24,
      xAxisLabels = Array.from(Array(cols).keys()),
      yAxisLabels = Array.from(Array(rows).keys()),
      rotationThreshold = 2;

    const heatmapColor = d3
      .scaleLinear()
      .domain([minEnergy, (minEnergy + maxEnergy) / 2, maxEnergy])
      .interpolate(d3.interpolateHcl)
      .range(['rgba(26,152,80,1)', 'rgba(255,242,0,1)', 'rgba(215,48,39,1)']);
    //                 Green              Yellow              Red

    let rects = [];
    for (let i = 0; i < rows; i++) {
      // for (let j = 0; j < (i <= time / cols - 1 ? cols : time % cols); j++) {
      for (let j = 0; j < cols; j++) {
        rects.push(
          <Rect
            key={cols * i + j}
            // 2 was added so strocks will not look erased at the first column
            x={(rectWidth + innerPadding) * j + 2}
            y={(rectHeight + innerPadding) * i + 2}
            height={rectHeight}
            width={rectWidth}
            strokeWidth={strokeWidth}
            stroke={this.state.selectedPeriod === cols * i + j ? 'black' : ''}
            fill={heatmapColor(seperateRoomsPeriodsConsumption[cols * i + j].reduce((pre, curr) => pre + curr))}
            // fill={color(
            //   Math.floor(Math.random() * (maxEnergy - minEnergy + 1)) +
            //   minEnergy,
            // )}
            rx={borderRadius}
            onPress={() => {
              if (this.state.selectedPeriod !== cols * i + j) {
                this.setState({
                  selectedPeriod: cols * i + j,
                });
              } else {
                this.setState({
                  selectedPeriod: -1,
                });
              }
            }}
          />,
        );
      }
    }
    let data;
    let periodSum;
    if (this.state.selectedPeriod >= 0) {
      const periodRooms = seperateRoomsPeriodsConsumption[this.state.selectedPeriod];
      periodSum = periodRooms.reduce((pre, curr) => pre + curr);
      for (let i = 0; i < periodRooms.length && periodSum != 0; i++)
        periodRooms[i] /= periodSum;

      const minPeriodEnergy = Math.min(...periodRooms);
      const maxPeriodEnergy = Math.max(...periodRooms);

      // const piechartColor = d3
      //   .scaleLinear()
      //   .domain([minPeriodEnergy, (minPeriodEnergy + maxPeriodEnergy) / 2, maxPeriodEnergy])
      //   .interpolate(d3.interpolateHcl)
      //   .range(['rgba(26,152,80,1)', 'rgba(255,242,0,1)', 'rgba(215,48,39,1)']);
      const piechartColor = ['#0496FF', '#E8AB3C', '#B71970']; //['#FFD700', '#DC143C', '#00BFFF'];
      data = periodRooms.map((value, index) => {
        return (
          {
            key: `Room ${index + 1}`,
            value: value,
            svg: { fill: piechartColor[index] }
            // svg: { fill: piechartColor(periodRooms[index]) }
            // arc: { outerRadius: '100%', cornerRadius: 2, }
          })
      })
    }

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        horizontal={false}
        ref={ref => this.scrollView = ref}
        onContentSizeChange={() => {
          this.state.selectedPeriod === -1 ?
            this.scrollView.scrollTo({ x: 0, animated: true })
            :
            this.scrollView.scrollToEnd({ animated: true });
        }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {/* YAxis Label */}
          <Svg
            key={'ylabelTitle'}
            height={((rectHeight + innerPadding) * rows)}
            width={rows >= rotationThreshold ? 30 : 50}>
            <G y={((rectHeight + innerPadding) * rows) / 2} rotation={rows >= rotationThreshold ? -90 : 0}>
              <Text
                fill="black"
                stroke="black"
                fontSize="15"
                x={rows >= rotationThreshold ? -15 : 10}
                y={20}
                textAnchor="start">
                {yLabelTitle}
              </Text>
            </G>
          </Svg>
          {/* YAxis Numbers Generation */}
          <Svg
            width={20}
            height={(rectHeight + innerPadding) * rows}
            style={{ flex: 1, flexDirection: 'column' }}>
            {yAxisLabels.map(num => {
              return (
                <Svg
                  key={'label' + num.toString()}
                  // height={rectWidth + innerPadding}
                  height={(rectWidth + innerPadding) * rows}
                  width={20}>
                  <Text
                    fill="black"
                    stroke="black"
                    fontSize="15"
                    x={8}
                    y={(rectHeight + innerPadding) * num + rectHeight * 0.8}
                    textAnchor="middle">
                    {num}
                  </Text>
                </Svg>
              );
            })}
          </Svg>
          <View>
            {/* HeatMap Rect Components */}
            <Svg
              height={(rectHeight + innerPadding) * rows}
              width={(rectWidth + innerPadding) * cols}>
              {rects}
            </Svg>
            {/* XAxis Numbers Generation */}
            <Svg style={{ flex: 1, flexDirection: 'row' }}
              width={(rectWidth + innerPadding) * cols}
              height={20}>
              {xAxisLabels.map(num => {
                return (
                  <Svg
                    key={num + 1}
                    height={20}
                    // width={rectWidth + innerPadding}>
                    width={(rectWidth + innerPadding) * cols}>
                    <Text
                      fill="black"
                      stroke="black"
                      fontSize="15"
                      x={(rectWidth + innerPadding) * num + rectWidth / 1.85}
                      y={12}
                      textAnchor="middle">
                      {((num + 1) * 60) / cols}
                    </Text>
                  </Svg>
                );
              })}
            </Svg>
            {/* XAxis Label */}
            <Svg
              key={'xlabelTitle'}
              height={25}
              width={(rectWidth + innerPadding) * cols}>
              <Text
                fill="black"
                stroke="black"
                fontSize="15"
                x={((rectWidth + innerPadding) * cols) / 2}
                y={15}
                textAnchor="middle">
                {xLabelTitle}
              </Text>
            </Svg>
          </View>
        </View>
        {this.state.selectedPeriod >= 0 ?
          (<>
            <Svg key={'total'}
              height={40}
              width={screenWidth}>
              <Text
                fill="black"
                stroke="black"
                fontSize="20"
                x={screenWidth / 2}
                y={20}
                textAnchor="middle">
                {`Total Consumption: ${periodSum} Wh`}
              </Text>
            </Svg>
            <View style={[styles.piechartContainer, { height: periodSum == 0 ? 0 : '100%' }]}>
              <PieChart
                style={[{ height: 180, width: screenWidth / 3, }, styles.pieContainer]}
                outerRadius={'90%'}
                innerRadius={5}
                data={data}
              />
              <View style={styles.legendsContainer}>
                {periodSum > 0 ? <PieChartLegends data={data} /> : <></>}
              </View>
            </View>
          </>
          ) :
          <></>}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  piechartContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pieContainer: {
    flex: 1,
    marginLeft: 25,
    padding: 0,
  },
  legendsContainer: {
    flex: 1,
    alignItems: 'center',
    height: 100,
  },
})

export default HeatMap;
