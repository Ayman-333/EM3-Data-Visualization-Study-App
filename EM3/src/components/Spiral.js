/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';

class Spiral extends React.Component {
  render() {
    return (
      <>
        <WebView style={styles.container}
        source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/em3app.appspot.com/o/spiral%2Findex.html?alt=media&token=2e3eacb1-7ae0-4697-92d8-77f7c44f0ff4' }}/>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    width: 650,
    height: 800,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  }
});

export default Spiral;
