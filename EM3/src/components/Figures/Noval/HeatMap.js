import React, {Component} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {Svg, G, Rect, Text} from 'react-native-svg';
import * as d3 from 'd3';
class HeatMap extends Component {
  state = {
    selectedPeriod: '',
  };
  render() {
    const cols = 6,
      innerPadding = 6,
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
      yAxisLabels = Array.from(Array(rows).keys()),
      minEnergy = 1,
      maxEnergy = 100;
    const color = d3
      .scaleLinear()
      .domain([minEnergy, (minEnergy + maxEnergy) / 2, maxEnergy])
      .interpolate(d3.interpolateHcl)
      .range([d3.rgb('#d73027'), d3.rgb('#fff200'), d3.rgb('#1a9850')]);
    console.log(color(40));
    //                 Green              Yellow              Red
    // const screenWidth = Dimensions.get('window').width;

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
            fill={color(
              Math.floor(Math.random() * (maxEnergy - minEnergy + 1)) +
                minEnergy,
            )}
            // fill={
            //   '#' +
            //   (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
            // }
            rx={borderRadius}
            onPress={() => {
              if (this.state.selectedPeriod !== cols * i + j) {
                this.setState({
                  selectedPeriod: cols * i + j,
                });
              } else {
                this.setState({
                  selectedPeriod: '',
                });
              }
            }}
          />,
        );
      }
    }

    return (
      <ScrollView horizontal={false}>
        <View style={{flex: 1, flexDirection: 'row'}}>
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
            style={{flex: 1, flexDirection: 'column'}}>
            {yAxisLabels.map(num => {
              return (
                <Svg
                  key={'label' + num.toString()}
                  height={rectWidth + innerPadding}
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
            <Svg style={{flex: 1, flexDirection: 'row'}}>
              {xAxisLabels.map(num => {
                return (
                  <Svg
                    key={num + 1}
                    height={'5'}
                    width={rectWidth + innerPadding}>
                    <Text
                      fill="black"
                      stroke="black"
                      fontSize="15"
                      x={(rectWidth + innerPadding) * num + rectWidth / 2}
                      y={15}
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
  }
}

export default HeatMap;
