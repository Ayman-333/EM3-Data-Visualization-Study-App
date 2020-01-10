import React, { Component } from 'react';
import { BackHandler, Alert } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './Screens/HomeScreen';
import FiguresScreen from './Screens/FiguresScreen';
import ThankYouScreen from './Screens/ThankYouScreen';
import EmptyScreen from './Screens/EmptyScreen';

export default class App extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton() {
    Alert.alert(
      'Exit App',
      'Are you sure? Exiting the application will remove all your progress?', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => BackHandler.exitApp()
      },], {
      cancelable: false
    }
    );
    return true;
  }
  render() {

    const RootStack = createStackNavigator(
      {
        Home: HomeScreen,
        Figures: FiguresScreen,
        Thanks: ThankYouScreen,
        Empty: EmptyScreen,
      },
      {
        initialRouteName: 'Home',
      },
    );
    const AppContainer = createAppContainer(RootStack);
    return <AppContainer />;
  }
}
