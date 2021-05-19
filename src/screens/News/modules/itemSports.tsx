import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../resources/color';

export const ItemSports = props => {
  useEffect(() => {});
  const {url, title, abstract, updated_date, onPress} = props;
  return (
    <TouchableOpacity style={[Styles.container]} onPress={onPress}>
      <View>
        <Image source={url} style={Styles.img} />
      </View>
      <View
        style={{
          width: wp(26),
          height: hp(10),
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'flex-start',
          padding: wp(2),
        }}>
        <Text style={Styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={Styles.abstract}>{abstract}</Text>
        <Text style={Styles.updated_date}> Time: {updated_date}</Text>
      </View>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  container: {
    height: hp(30),
    width: wp(90),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
    backgroundColor: Colors.gray1,
    flexDirection: 'row',
    marginHorizontal: wp(2),
    padding: wp(2),
  },
  img: {
    width: wp(60),
    height: hp(25),
    borderRadius: 5,
  },
  title: {
    fontSize: wp(3),
    fontWeight: 'bold',
    color: '#3E006B',
  },
  abstract: {
    fontSize: wp(2),
    color: Colors.dask,
    fontWeight: 'bold',
  },
  updated_date: {
    fontSize: wp(2),
    fontWeight: 'bold',
  },
});
