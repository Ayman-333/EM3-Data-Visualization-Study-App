import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './Screens/HomeScreen';
import FiguresScreen from './Screens/FiguresScreen';
import ThankYouScreen from './Screens/ThankYouScreen';
import EmptyScreen from './Screens/EmptyScreen';

export default class App extends Component {
  render() {

    const RootStack = createStackNavigator(
      {
        Home: HomeScreen,
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
