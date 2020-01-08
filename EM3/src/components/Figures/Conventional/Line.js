/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Svg, G, Text } from 'react-native-svg';
import { LineChart } from "react-native-chart-kit";
import { ScrollView } from 'react-native-gesture-handler';
class Line extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView persistentScrollbar={true}
          horizontal={true}>
          <Svg
            key={'ylabelTitle'}
            height={150}
            width={24}>
            <G y={(250) / 2} rotation={-90}>
              <Text
                fill="black"
                stroke="black"
                fontSize="15"
                fontWeight="lighter"
                x={-20}
                y={20}
                textAnchor="start">
                {"Energy (kWh)"}
              </Text>
            </G>
          </Svg>
          <LineChart
            data={{
              labels: ["Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"],
              datasets: [
                {// FrenchDataset 2007 energy consumption calculated and put as raw values
                  data: [465.285, 382.462, 455.892, 269.998, 377.317, 318.462, 253.6, 311.404, 354.493, 387.212, 424.179, 519.444]
                }
              ]
            }}
            width={Dimensions.get("window").width * 2} // from react-native
            height={250}
            formatYLabel={value => `$ ${value}`}
            chartConfig={{
              backgroundColor: "#000",
              backgroundGradientFrom: "#fff",
              backgroundGradientTo: "#eee",
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
            }}
            bezier
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    marginTop: 15
  }
});

export default Line;