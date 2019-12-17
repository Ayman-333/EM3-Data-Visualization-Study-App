import React, {Component} from 'react';
import HomeScreen from './Screens/HomeScreen';
import FiguresScreen from './Screens/FiguresScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ThankYouScreen from './Screens/ThankYouScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Figures: FiguresScreen,
    Thanks: ThankYouScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
