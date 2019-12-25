import React, { Component } from 'react';
import { Dimensions, ScrollView, View, StyleSheet } from 'react-native';
import { Svg, G, Rect, Text } from 'react-native-svg';
// import { PieChart } from 'react-native-chart-kit';
import { ProgressChart } from 'react-native-chart-kit';
import * as d3 from 'd3';
import { franceDataSet } from '../../../../res/18-12-2006';

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

    const innerPadding = 6,
      rectHeight = 30,
      rectWidth = 50,
      borderRadius = 10,
      xLabelTitle = 'Minutes',
      yLabelTitle = 'Hours';
    const currentTime = new Date();
    const time =
      (currentTime.getHours() * 60 + // to make them minutes
        Math.floor(currentTime.getMinutes() / (60 / cols)) * (60 / cols)) / // to round numbers (e.g. 44 -> 40)
      (60 / cols); // To divide the hour into 6 cols.
    const rows = Math.ceil(time / cols),
      xAxisLabels = Array.from(Array(cols).keys()),
      yAxisLabels = Array.from(Array(rows).keys());

    const color = d3
      .scaleLinear()
      .domain([minEnergy, (minEnergy + maxEnergy) / 2, maxEnergy])
      .interpolate(d3.interpolateHcl)
      .range(['rgba(26,152,80,1)', 'rgba(255,242,0,1)', 'rgba(215,48,39,1)']);
    //                 Green              Yellow              Red
    const screenWidth = Dimensions.get('window').width;

    let rects = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < (i <= time / cols - 1 ? cols : time % cols); j++) {
        rects.push(
          <Rect
            key={cols * i + j}
            // 2 was added so strocks will not look erased at the first column
            x={(rectWidth + innerPadding) * j + 2}
            y={(rectHeight + innerPadding) * i}
            height={rectHeight}
            width={rectWidth}
            strokeWidth={4}
            stroke={this.state.selectedPeriod === cols * i + j ? 'black' : ''}
            fill={color(seperateRoomsPeriodsConsumption[cols * i + j].reduce((pre, curr) => pre + curr))}
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
    if (this.state.selectedPeriod === -1)
      return (
        <ScrollView horizontal={false}
          ref={ref => this.scrollView = ref}
          onContentSizeChange={() => {
            this.scrollView.scrollTo({ x: 0, animated: true });
          }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {/* YAxis Label */}
            <Svg
              key={'ylabelTitle'}
              height={((rectHeight + innerPadding) * rows) / 2}
              width={'20'}>
              <G y={((rectHeight + innerPadding) * rows) / 2} rotation={-90}>
                <Text
                  fill="black"
                  stroke="black"
                  fontSize="15"
                  x={10}
                  y={10}
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
                      y={(rectHeight + innerPadding) * num + rectHeight * 0.65}
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
                        x={(rectWidth + innerPadding) * num + rectWidth / 2}
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
        </ScrollView>
      );

    if (this.state.selectedPeriod >= 0) {

      const periodRooms = seperateRoomsPeriodsConsumption[this.state.selectedPeriod];
      const periodSum = periodRooms[0] + periodRooms[1] + periodRooms[2]
      if (periodSum != 0) {
        periodRooms[0] /= periodSum;
        periodRooms[1] /= periodSum;
        periodRooms[2] /= periodSum;
      }
      // console.log(periodRooms[0])
      // console.log(periodRooms);
      // console.log(this.state.selectedPeriod);
      // console.log(progressChartData.data);
      const chartConfigProgress = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => color(periodSum).replace(')', `, ${opacity})`).replace('rgb', 'rgba'),
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
      };
      const progressChartData = {
        labels: ['Room I', "Room II", "Room III"], // optional
        data: [periodRooms[0], periodRooms[1], periodRooms[2]]
      }

      // const pieChartData = [
      //   {
      //     name: 'Room I',
      //     power: periodRooms[0],
      //     color: color(periodRooms[0]),
      //     legendFontColor: '#7F7F7F',
      //     legendFontSize: 15,
      //   },
      //   {
      //     name: 'Room II',
      //     power: periodRooms[1],
      //     color: color(periodRooms[1]),
      //     legendFontColor: '#7F7F7F',
      //     legendFontSize: 15,
      //   },
      //   {
      //     name: 'Room III',
      //     power: periodRooms[2],
      //     color: color(periodRooms[2]),
      //     legendFontColor: '#7F7F7F',
      //     legendFontSize: 15,
      //   },
      // ]
      // const chartConfigPie = {
      //   backgroundColor: '#fff',
      //   decimalPlaces: 2,
      //   color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      //   style: {
      //     borderRadius: 16,
      //   },
      // }

      return (
        <ScrollView horizontal={false}
          ref={ref => this.scrollView = ref}
          onContentSizeChange={() => {
            this.scrollView.scrollToEnd({ animated: true });
          }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {/* YAxis Label */}
            <Svg
              key={'ylabelTitle'}
              height={((rectHeight + innerPadding) * rows) / 2}
              width={'20'}>
              <G y={((rectHeight + innerPadding) * rows) / 2} rotation={-90}>
                <Text
                  fill="black"
                  stroke="black"
                  fontSize="15"
                  x={10}
                  y={10}
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
                      y={(rectHeight + innerPadding) * num + rectHeight * 0.65}
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
                        x={(rectWidth + innerPadding) * num + rectWidth / 2}
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
          <Svg key={'total'}
            height={40}
            width={screenWidth}>
            <Text
              fill="black"
              stroke="black"
              fontSize="20"
              x={200}
              y={20}
              textAnchor="middle">
              {`Total Consumption: ${periodSum} W`} 
          </Text></Svg>
          <ProgressChart
            data={progressChartData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfigProgress}
            hideLegend={false}
          />
          {/* <PieChart
            data={pieChartData}
            width={screenWidth}
            height={220}
            chartConfig={chartConfigPie}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            accessor="power"
            backgroundColor="transparent"
            paddingLeft="15"
          /> */}
        </ScrollView>
      );
    }
  }
}

export default HeatMap;
