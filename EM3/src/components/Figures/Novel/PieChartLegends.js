import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
class PieChartLegends extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  render() {
    let legendData = [];
    // means I am getting called from piechart figure.
    for (let i = 0; i < this.props.data.length; i++) {
      legendData[i] = {
        key: this.props.data[i].key + `  ${(Math.round(this.props.data[i].value * 1000)/10).toString()}%`,
        color: this.props.data[i].svg.fill,
      };
    }

    return (
      <ScrollView>
        {legendData.map(legendObj => {
          return (
            <View style={styles.legendItem} key={legendObj.key}>
              <View
                style={[styles.symbol, { backgroundColor: legendObj.color }]}
              />
              <Text>{legendObj.key}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  legendItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 3,
  },
  symbol: {
    width: 10,
    backgroundColor: 'red',
    padding: 5,
    margin: 5,
  },
});

export default PieChartLegends;
