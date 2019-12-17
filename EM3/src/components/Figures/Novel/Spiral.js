/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

class Spiral extends Component {
  render() {
    return (
      <View style={styles.plotBody}>
        <WebView style={styles.container}
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/em3app.appspot.com/o/spiral%2Findex.html?alt=media&token=2e3eacb1-7ae0-4697-92d8-77f7c44f0ff4' }}/>
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
