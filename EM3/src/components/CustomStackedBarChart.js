import React from 'react';
import {
  StackedBarChart,
  StackedAreaChart,
  YAxis,
  XAxis,
  Grid,
} from 'react-native-svg-charts';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import ListItem from './ListItem';
import {Text} from 'react-native-svg';
import * as scale from 'd3-scale';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import * as data from './EnergyData';

const spacingInner = 0.5;
const spacingOuter = 0.5;
const contentInset = {top: 20};

const Labels = props => {
  const {x, y, data} = props;
  return data.map((value, index) => {
    const sum = value.Nespresso + value.Supermatik + value.Krups;
    const pX = x(index) + x.bandwidth() / 2;
    const pY = y(sum) - 10;
    return (
      <Text
        key={index}
        x={pX}
        y={pY}
        fontSize={13}
        fill="red"
        alignmentBaseline={'middle'}
        textAnchor={'middle'}>
        {sum}
      </Text>
    );
  });
};

class CustomStackedBarChart extends React.Component {
  state = data.data1;
  onPress = id => {
    console.warn(data[id]);
    this.setState({
      expenseData: data[id].expenseData,
      selectedApplianceKey: id,
    });
  };

  DATA = [
    {
      id: 'lamp',
      onPressAction: this.onPress,
      title: 'Lamp',
      imageName: 'lamp',
    },
    {
      id: 'television',
      onPressAction: this.onPress,
      title: 'Television',
      imageName: 'television',
    },
    {
      id: 'fan',
      onPressAction: this.onPress,
      title: 'Fan',
      imageName: 'fan',
    },
    {
      id: 'gaming_console',
      onPressAction: this.onPress,
      title: 'Gaming Console',
      imageName: 'gaming_console',
    },
    {
      id: 'oven',
      onPressAction: this.onPress,
      title: 'Oven',
      imageName: 'oven',
    },
    {
      id: 'boiler',
      onPressAction: this.onPress,
      title: 'Boiler',
      imageName: 'boiler',
    },
    {
      id: 'computer',
      onPressAction: this.onPress,
      title: 'Computer',
      imageName: 'computer',
    },
  ];

  render() {
    return (
      <View style={styles.stackedBarChartContainer}>
        <View style={styles.list}>
          <TouchableOpacity style={styles.caret}>
            <Icon
              name="caret-up"
              type="font-awesome"
              color="#000"
              size={15}
              onPress={() =>
                this.flatListRef.scrollToIndex({
                  index: 0,
                  animated: true,
                })
              }
            />
          </TouchableOpacity>
          <FlatList
            ref={ref => {
              this.flatListRef = ref;
            }}
            initialScrollIndex={0}
            data={this.DATA}
            renderItem={({item}) => (
              <ListItem
                style={styles.listItem}
                id={item.id}
                title={item.title}
                type={item.type}
                imageName={item.imageName}
                selectedKey={this.state.selectedApplianceKey}
                onPressAction={item.onPressAction}
              />
            )}
            keyExtractor={item => item.id}
          />
          <TouchableOpacity style={styles.caret}>
            <Icon
              name="caret-down"
              type="font-awesome"
              color="#000"
              size={15}
              onPress={() =>
                this.flatListRef.scrollToIndex({
                  index: this.DATA.length - 1,
                  animated: true,
                })
              }
            />
          </TouchableOpacity>
        </View>
        <View style={styles.chart}>
          <StackedBarChart
            style={{flex: 1}}
            keys={this.state.keys}
            colors={this.state.colors}
            data={this.state.expenseData}
            spacingInner={spacingInner}
            spacingOuter={spacingOuter}
            contentInset={contentInset}>
            <Labels />
          </StackedBarChart>
          <YAxis
            style={{position: 'absolute', left: -10, top: 0, bottom: 0}}
            data={StackedAreaChart.extractDataPoints(
              this.state.expenseData,
              this.state.keys,
            )}
            contentInset={{top: 10, bottom: 10}}
            svg={{
              fontSize: 10,
              fill: 'black',
              stroke: 'black',
              strokeWidth: 0.1,
              alignmentBaseline: 'baseline',
              baselineShift: '3',
            }}
          />
          <XAxis
            style={{marginTop: 10}}
            data={this.state.expenseData}
            formatLabel={(value, index) =>
              this.state.expenseData[index].date.format('HH:mm')
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
          <XAxis
            data={this.state.expenseData}
            formatLabel={(value, index) =>
              this.state.expenseData[index].date.format('D/M')
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  stackedBarChartContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  caret: {
    height: '6%',
    borderWidth: 0.5,
  },
  list: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    //   borderColor: '#000',
    //   borderWidth: 0.5,
  },
  listItem: {
    fontSize: 10,
  },
  chart: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    height: '90%',
    width: '70%',
  },
});

export default CustomStackedBarChart;
