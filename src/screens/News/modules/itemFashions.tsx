import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../resources/color';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';

const ItemFashions = props => {
  const {urlbig, title, updated_date, onPress} = props;
  console.log('urlbig', urlbig);

  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        source={urlbig}
        style={Styles.container}
        imageStyle={{
          borderRadius: 20,
          resizeMode: 'cover',
        }}>
        <View style={Styles.view_content}>
          <Text style={Styles.text_title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={Styles.text_updated_date} numberOfLines={2}>
            {updated_date}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  container: {
    height: hp(30),
    width: wp(40),
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: hp(1),
  },
  view_content: {
    width: wp(40),
    height: hp(10),
    justifyContent: 'center',
    padding: wp(2),
  },
  text_title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 1,
    textShadowColor: Colors.black1,
    textShadowRadius: 15,
  },
  text_updated_date: {
    fontSize: wp(3),
    color: Colors.white,
    textShadowColor: Colors.black1,
    textShadowRadius: 15,
  },
});
export default ItemFashions;
