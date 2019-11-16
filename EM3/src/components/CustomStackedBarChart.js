import React from 'react';
import {
  StackedBarChart,
  StackedAreaChart,
  YAxis,
  XAxis,
  Grid,
} from 'react-native-svg-charts';
import {View, StyleSheet, Button, FlatList, ScrollView} from 'react-native';
import ListItem from './ListItem';
import {Text} from 'react-native-svg';
import * as scale from 'd3-scale';
import moment from 'moment';

const spacingInner = 0.5;
const spacingOuter = 0.5;
const contentInset = {top: 20};

const Labels = props => {
  const {x, y, data} = props;
  return data.map((value, index) => {
    const sum = value.travel + value.food + value.utility;
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
  constructor(props) {
    super(props);
    this.state = {
      expenseData: [
        {
          date: moment('2018-06-01', 'YYYY-MM-DD'),
          travel: 100,
          food: 200,
          utility: 50,
        },
        {
          date: moment('2018-07-01', 'YYYY-MM-DD'),
          travel: 120,
          food: 300,
          utility: 40,
        },
        {
          date: moment('2018-08-01', 'YYYY-MM-DD'),
          travel: 200,
          food: 250,
          utility: 80,
        },
      ],
      keys: ['travel', 'food', 'utility'],
      colors: ['#B5E1F4', '#F8BDC2', '#FDF287'],
    };
  }

  onPress1 = () => {
    this.setState({
      expenseData: [
        {
          date: moment('2018-06-01', 'YYYY-MM-DD'),
          travel: 100,
          food: 200,
          utility: 50,
        },
      ],
    });
  };

  onPress2 = () => {
    this.setState({
      expenseData: [
        {
          date: moment('2018-06-01', 'YYYY-MM-DD'),
          travel: 100,
          food: 200,
          utility: 50,
        },
        {
          date: moment('2018-07-01', 'YYYY-MM-DD'),
          travel: 120,
          food: 300,
          utility: 40,
        },
      ],
    });
  };

  onPress3 = () => {
    this.setState({
      expenseData: [
        {
          date: moment('2018-06-01', 'YYYY-MM-DD'),
          travel: 100,
          food: 200,
          utility: 50,
        },
        {
          date: moment('2018-07-01', 'YYYY-MM-DD'),
          travel: 120,
          food: 300,
          utility: 40,
        },
        {
          date: moment('2018-08-01', 'YYYY-MM-DD'),
          travel: 200,
          food: 250,
          utility: 80,
        },
      ],
    });
  };
  DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      onPressAction: this.onPress1,
      type: 'lamp',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      onPressAction: this.onPress2,
      type: 'television',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      onPressAction: this.onPress3,
      type: 'fan',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e2972',
      title: 'Third Item',
      onPressAction: this.onPress3,
      type: 'gaming_console',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14551e29d72',
      title: 'Third Item',
      onPressAction: this.onPress3,
      type: 'oven',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14551e29d72',
      title: 'Third Item',
      onPressAction: this.onPress3,
      type: 'boiler',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14551e29d72',
      title: 'Third Item',
      onPressAction: this.onPress3,
      type: 'computer',
    },
  ];
  render() {
    return (
      <View style={styles.stackedBarChartContainer}>
        <ScrollView
          style={styles.scrollView}
          scrollEnabled={this.state.enableScrollViewScroll}>
          <View>
            <FlatList
              style={styles.list}
              data={this.DATA}
              renderItem={({item}) => (
                <ListItem
                  style={styles.listItem}
                  id={item.id}
                  title={item.title}
                  type={item.type}
                  onPressAction={item.onPressAction}
                />
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
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
              this.state.expenseData[index].date.format('MMM')
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
              this.state.expenseData[index].date.format('YYYY')
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
    /*
    <View style={styles.footer}>
      <Button title='1' onPress={this.onPress1} />
      <Button title='2' onPress={this.onPress2} />
      <Button title='3' onPress={this.onPress3} />
    </View>
    */
  }
}

const styles = StyleSheet.create({
  stackedBarChartContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  scrollView: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  list: {
    borderColor: '#000',
    borderWidth: 1,
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
