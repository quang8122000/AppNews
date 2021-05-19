import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../resources/color';

export const ItemArticle = props => {
  useEffect(() => {});
  const {main, url, abstract, onPress} = props;
  return (
    <TouchableOpacity style={Styles.container} onPress={onPress}>
      <Image source={url} style={Styles.img} resizeMode={'cover'} />
      <View
        style={{
          width: wp(30),
          padding: wp(2),
          backgroundColor: Colors.gray,
          marginLeft: wp(1),
          height: hp(18),
          borderRadius: wp(2),
        }}>
        <Text style={Styles.main} numberOfLines={3}>
          {main}
        </Text>
        <Text style={Styles.text_abstract} numberOfLines={7}>
          {abstract}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(20),
    width: wp(90),
    marginVertical: hp(2),
    backgroundColor: Colors.white,
    borderRadius: wp(2),
    flexDirection: 'row',
  },
  img: {
    height: hp(18),
    width: wp(55),
    borderRadius: wp(2),
  },
  main: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
    color: Colors.white,
  },
  text_abstract: {
    color: Colors.white,
    fontSize: wp(2),
  },
});
