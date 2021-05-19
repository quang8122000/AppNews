import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../resources/color';

export const ButtonGoBack = props => {
  useEffect(() => {});
  const {onPress} = props;
  return (
    <TouchableOpacity style={Styles.container} onPress={onPress}>
      <Text style={Styles.text_goBack}>Go Back</Text>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(6),
    width: wp(50),
    backgroundColor: 'red',
    borderRadius: wp(2),
    marginVertical: hp(1),
  },
  text_goBack: {
    fontSize: wp(6),
    color: Colors.white,
    fontWeight: 'bold',
  },
});
