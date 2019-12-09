import React, {Component} from 'react';
import {
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {ContributionGraph} from 'react-native-chart-kit';
import {Svg, Rect} from 'react-native-svg';

class HeatMap extends Component {
  render() {
    const cols = 6,
      rows = 24,
      insidePadding = 3,
      rectHight = 20,
      rectWidth = 20;

    let rects = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        rects.push(
          // <TouchableOpacity >
          <Rect
            key={cols * i + j}
            x={(rectWidth + insidePadding) * j}
            y={(rectHight + insidePadding) * i}
            height={rectHight}
            width={rectWidth}
            fill={'blue'}
            onPress={e => {
              console.log('press1', cols * i + j);
            }}
          />,
          /* </TouchableOpacity>, */
        );
      }
    }
    // console.log(rects);
    return (
      <ScrollView horizontal={false}>
        <Svg height={600} width={300}>
          {rects}
        </Svg>
      </ScrollView>
    );
  }
}

export default HeatMap;
