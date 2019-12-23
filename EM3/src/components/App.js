import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './Screens/HomeScreen';
import FiguresScreen from './Screens/FiguresScreen';
import ThankYouScreen from './Screens/ThankYouScreen';
import NetInfo from '@react-native-community/netinfo';

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
    // NetInfo.fetch().then(state => {
    //   console.warn("Connection type", state.type);
    //   console.warn("Is connected?", state.isConnected);
    // });
    // NetInfo.addEventListener(state => {
    //   // Works on both Android and iOS
    //   while(state.isConnected != true)
    //     Alert.alert(
    //       'Warning',
    //       'To save your answers, internet connection is required',
    //       [
    //         {text: 'OK', onPress: () => console.log('Cancel Pressed')},
    //       ],
    //       {cancelable: false},
    //     );
    //   // alert('Hello, it is me')
    //   // console.warn("Connection type", state.type);
    //   // console.warn("Is connected?", state.isConnected);
    // });
    return <AppContainer />;
  }
}
