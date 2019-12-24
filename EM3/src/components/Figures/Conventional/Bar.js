/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Svg, G, Rect, Text } from 'react-native-svg';

import {
    BarChart
} from "react-native-chart-kit";
import { ScrollView } from 'react-native-gesture-handler';
class Bar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView persistentScrollbar={true}
                    horizontal={true}>
                    <Svg
                        key={'ylabelTitle'}
                        height={(250) / 2}
                        width={'20'}>
                        <G y={(250) / 2} rotation={-90}>
                            <Text
                                fill="black"
                                stroke="black"
                                fontSize="15"
                                x={0}
                                y={20}
                                textAnchor="start">
                                {"Power (kW)"}
                            </Text>
                        </G>
                    </Svg>
                    <BarChart
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
                                {
                                    data: [3.05, 1.17, 0.98, 1.18, 0.5, 1.18, 0.69, 0.59, 0.67, 0.76, 1.36, 1.04]
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

export default Bar;