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
import {Icon} from 'react-native-elements';
import * as data from './EnergyData';
import Legends from './Legends';

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
  state = {
    appliance: data.lamp,
    selectedApplianceId: 'lamp',
  };
  onPress = id => {
    // console.warn(data[id]);
    this.setState({
      appliance: data[id],
      selectedApplianceId: id,
    });
    this.scrollViewRef.scrollTo({x: 0, animated: false});
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
            data={this.DATA}
            renderItem={({item}) => (
              <ListItem
                style={styles.listItem}
                id={item.id}
                title={item.title}
                type={item.type}
                imageName={item.imageName}
                selectedKey={this.state.selectedApplianceId}
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
        <ScrollView
          persistentScrollbar={true}
          horizontal={true}
          ref={ref => {
            this.scrollViewRef = ref;
          }}>
          <View style={styles.chart}>
            <StackedBarChart
              style={{
                flex: 1,
                width: 100 * this.state.appliance.expenseData.length,
              }}
              keys={this.state.appliance.keys}
              colors={this.state.appliance.colors}
              data={this.state.appliance.expenseData}
              spacingInner={spacingInner}
              spacingOuter={spacingOuter}
              contentInset={contentInset}>
              <Labels />
            </StackedBarChart>
            <YAxis
              style={{position: 'absolute', left: -10, top: 0, bottom: 0}}
              data={StackedAreaChart.extractDataPoints(
                this.state.appliance.expenseData,
                this.state.appliance.keys,
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
              style={{
                marginTop: 10,
                width: 100 * this.state.appliance.expenseData.length,
              }}
              data={this.state.appliance.expenseData}
              formatLabel={(value, index) =>
                this.state.appliance.expenseData[index].date.format('HH:mm')
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
              style={{width: 100 * this.state.appliance.expenseData.length}}
              data={this.state.appliance.expenseData}
              formatLabel={(value, index) =>
                this.state.appliance.expenseData[index].date.format('D/M')
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
        </ScrollView>
        <Legends data={data[this.state.selectedApplianceId]} />
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
