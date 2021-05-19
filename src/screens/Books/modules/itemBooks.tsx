import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../resources/color';
export const ItemBooks = props => {
  useEffect(() => {});
  const {url, title, onPress} = props;

  return (
    <TouchableOpacity style={Styles.container} onPress={onPress}>
      <Image
        source={url}
        style={{height: hp(20), width: wp(30)}}
        resizeMode={'cover'}
      />
      <View style={Styles.view_content}>
        <Text style={Styles.textTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: hp(25),
    width: wp(30),
    backgroundColor: 'green',
    marginRight: wp(1),
    marginVertical: hp(1),
    borderRadius: wp(1),
  },
  textTitle: {
    fontSize: wp(3),
    color: Colors.white,
    fontWeight: 'bold',
  },
  view_content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    height: hp(5),
  },
});
