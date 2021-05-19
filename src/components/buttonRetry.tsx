import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../resources/color';
export const ButtonRetry = props => {
  const {onPress} = props;
  return (
    <TouchableOpacity style={Styles.container} onPress={onPress}>
      <Text style={Styles.text_retry}> Retry</Text>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(5),
    width: wp(30),
    backgroundColor: Colors.rose,
    borderRadius: wp(2),
    marginVertical: hp(2),
  },
  text_retry: {
    color: Colors.white,
    fontSize: wp(5),
    fontWeight: 'bold',
  },
});
