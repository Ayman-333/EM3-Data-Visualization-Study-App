/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Animated } from 'react-native';
import WebView from 'react-native-webview';

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
  render() {
    return (
      <View style={styles.plotBody}>
        <WebView style={styles.container}
          source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/survey-274da.appspot.com/o/plots%2Fspiral_v4.html?alt=media&token=f0404602-0616-4a33-a2bd-f47b488cc285' }} />
        <Animated.View style={[styles.loading, { opacity: this.state.fadeAnim }]}>
          <Text>Loading...</Text>
        </Animated.View>
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
