import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {WebView} from 'react-native-webview';
import {Colors} from '../resources/color';
export const WebViewDetalls = props => {
  useEffect(() => {});
  const {url} = props;
  return (
    <View style={Styles.container}>
      <WebView source={url} style={Styles.web_view} />
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black1,
  },
  web_view: {
    marginTop: 20,
    height: hp(50),
    width: wp(90),
  },
});
