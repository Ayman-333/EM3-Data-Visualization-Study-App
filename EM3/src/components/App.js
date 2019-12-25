import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './Screens/HomeScreen';
import FiguresScreen from './Screens/FiguresScreen';
import ThankYouScreen from './Screens/ThankYouScreen';
import EmptyScreen from './Screens/EmptyScreen';
import HeatMap from './Figures/Novel/HeatMap';

export default class App extends Component {
  render() {

    const RootStack = createStackNavigator(
      {
        Home: HeatMap,
        Figures: FiguresScreen,
        Thanks: ThankYouScreen,
        Empty: EmptyScreen
      },
      {
        initialRouteName: 'Home',
      },
    );
    const AppContainer = createAppContainer(RootStack);
    return <AppContainer />;
  }
}
