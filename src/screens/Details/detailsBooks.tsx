import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../resources/color';
import {WebViewDetalls} from '../../components/webViewDetalls';
import {ButtonGoBack} from '../../components/buttonGoBack';
export const DetailsBooks = props => {
  const item = props?.route?.params?.item;
  useEffect(() => {}, []);
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <>
      <WebViewDetalls url={{uri: item.amazon_product_url}} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: hp(10),
          backgroundColor: Colors.gray,
        }}>
        <ButtonGoBack onPress={goBack} />
      </View>
    </>
  );
};
const Styles = StyleSheet.create({});
