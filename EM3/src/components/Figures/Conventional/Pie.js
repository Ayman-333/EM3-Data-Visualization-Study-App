/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Svg, G, Rect, Text } from 'react-native-svg';
import { PieChart } from "react-native-chart-kit";

class Pie extends Component {
    render() {

        const data = [
            {
                name: "Laundry Room",
                population: 6000,
                color: "#6d0d26",
                legendFontColor: "#7F7F7F",
                legendFontSize: 13
            },
            {
                name: "Kitchen",
                population: 36000,
                color: "#59A96A",
                legendFontColor: "#7F7F7F",
                legendFontSize: 13
            },
            {
                name: "Heater Room",
                population: 16000,
                color: "#3B5ECE",
                legendFontColor: "#7F7F7F",
                legendFontSize: 13
            },
        ];


        return (
            <View style={styles.container}>
                <Svg
                    key={'ylabelTitle'}
                    height={22}
                    width={330}>
                    <G y={0}>
                        <Text
                            fill="black"
                            stroke="black"
                            fontSize="15"
                            x={170}
                            y={15}
                            textAnchor="middle">
                            {"Household Power Consumption by Room"}
                        </Text>
                    </G>
                </Svg>
                <PieChart
                    data={data}
                    width={Dimensions.get("window").width * 0.85} // from react-native
                    height={200}
                    accessor="population"
                    backgroundColor="transparent"
                    chartConfig={{
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
                    }}

                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        marginTop: 15,
        flex: 0.6,
    },
    headingText: {
        fontSize: 20,
        fontFamily: "Arial",
        color: "#000",
    }
});

export default Pie;