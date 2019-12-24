/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

class Spiral extends Component {
  render() {
    return (
      <View style={styles.plotBody}>
        <WebView style={styles.container}
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/survey-274da.appspot.com/o/plots%2Fspiral_v3.html?alt=media&token=2665f6d4-0408-40a8-8201-ba75911ac51c' }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    width: 700,
    height: 400,
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  }
});

export default Spiral;
