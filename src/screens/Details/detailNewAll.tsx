import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {WebViewDetalls} from '../../components/webViewDetalls';
import {ButtonGoBack} from '../../components/buttonGoBack';
import {Colors} from '../../resources/color';
export const DetailNewAll = props => {
  const item = props?.route?.params?.item;
  useEffect(() => {});
  const goBack = () => {
    props.navigation.goBack();
  };
  return (
    <>
      <WebViewDetalls url={{uri: item.url || item.web_url}} />
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
const Styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
