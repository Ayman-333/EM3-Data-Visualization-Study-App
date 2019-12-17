import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';
class ThankYouScreen extends Component {
  static navigationOptions = {
    // title: 'EM3',
    // headerStyle: {
    //   backgroundColor: 'green',
    //   textAlign: 'center',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
    header: null,
  };
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <Text>Thank you for completing the survey and pushing this research forward, please let someone else do the survey!</Text>
        <Button title="Do it again?" onPress={() => navigate('Home')} />
      </View>
    );
  }
}

export default ThankYouScreen;
