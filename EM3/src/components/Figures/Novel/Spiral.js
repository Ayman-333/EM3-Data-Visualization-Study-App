/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import WebView from 'react-native-webview';

class Spiral extends Component {
  render() {
    return (
      <View style={styles.plotBody}>
        <WebView style={styles.container}
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/survey-274da.appspot.com/o/plots%2Fspiral_v4.html?alt=media&token=f0404602-0616-4a33-a2bd-f47b488cc285' }}/>
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
  }
});

export default Spiral;
