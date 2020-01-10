/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Animated } from 'react-native';
import WebView from 'react-native-webview';
import Legends from './Legends';

class Spiral extends Component {
  state = {
    fadeAnim: new Animated.Value(1)
  }  // Initial value for opacity: 0

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 0,
        duration: 2000,
      }
    ).start();
  }

  legendsComponents = { 
    keys: ['Spring', 'Summer', 'Autumn', 'Winter'], 
    colors: [`#228B22`, `#DC143C`, `#FF8C00`, `#1E90FF`] }
  render() {
    return (
      <View style={styles.plotBody}>
        <WebView style={styles.container}
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/survey-274da.appspot.com/o/plots%2Fspiral_v5.html?alt=media&token=900fb5b8-97fb-4996-ac5f-2e798cfe9bb1' }} />
        <Animated.View style={[styles.loading, { opacity: this.state.fadeAnim }]}>
          <Text>Loading...</Text>
        </Animated.View>
        <Legends data={this.legendsComponents} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    width: Dimensions.get('window').width,
    height: 320,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  loading: {
    position: 'absolute',
    top: Dimensions.get('window').height / 5,
    left: Dimensions.get('window').width / 2.3,
  }
});

export default Spiral;
