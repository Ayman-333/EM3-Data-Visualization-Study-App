import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { rgb, radialLine } from 'd3';
class Legends extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    let {keys, colors} = this.props.data;
    let legendData = [];
    for (let i = 0; i < colors.length; i++) {
      legendData[i] = {
        key: keys[i],
        color: colors[i],
      };
    }
    return (
      <View style={styles.legendsContainer}>
        <ScrollView>
          {legendData.map(legendObj => {
            return (
              <View style={styles.legendItem} key={legendObj.key}>
                <View
                  style={[styles.symbol, {backgroundColor: legendObj.color}]}
                />
                <Text>{legendObj.key}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  legendsContainer: {
    fontSize: 50,
    position: 'absolute',
    right: 5,
    top: 5,

  },
  legendItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 3,
    backgroundColor: rgb(255, 255, 255, 0.7)

  },
  symbol: {
    width: 10,
    backgroundColor: 'red',
    padding: 5,
    margin: 5,
    borderWidth: 0.4,
    borderColor: "#000"
  },
});

export default Legends;
