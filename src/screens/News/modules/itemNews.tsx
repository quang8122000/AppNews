import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../resources/color';

const ItemNews = props => {
  useEffect(() => {});
  const {url, title, updated_date, backgroundColor, onPress} = props;
  return (
    <TouchableOpacity
      style={[Styles.container, {backgroundColor}]}
      onPress={onPress}>
      <View style={Styles.viewImg}>
        <Image
          style={{height: wp(18), width: wp(18), borderRadius: 40}}
          source={url}
        />
      </View>
      <View style={{width: '70%'}}>
        <Text style={Styles.textTitle} numberOfLines={2}>
          {title}
        </Text>
        <View>
          <Text style={Styles.updated_date}>{updated_date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  container: {
    height: hp(12),
    width: wp(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp(2),
    borderRadius: wp(1.5),
    marginHorizontal: wp(2),
  },
  textTitle: {
    color: Colors.white,
    fontSize: wp(5),
    fontWeight: 'bold',
  },
  viewImg: {
    width: '30%',
    alignItems: 'center',
  },
  updated_date: {
    fontSize: wp(3),
    color: Colors.white,
  },
});
export default ItemNews;
