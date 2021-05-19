import {isAllOf} from '@reduxjs/toolkit';
import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicatorProps,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';

import {Colors} from '../../resources/color';
import FlatlistNews from './modules/flatlistNews';
import FlatlistSports from './modules/flatlistSports';
import FlatlistFashions from './modules/flatlistFashions';
const NewsScreen = props => {
  console.log('news', props);
  return (
    <ScrollView>
      <View style={Styles.container}>
        <View>
          <FlatlistFashions {...props} />
        </View>
        <View>
          <FlatlistNews {...props} />
        </View>
        <View>
          <FlatlistSports {...props} />
        </View>
      </View>
    </ScrollView>
  );
};
const StatusStateFromProps = (state: any) => {
  return {
    allFashions: state.news.allFashions,
    allSports: state.news.allSports,
    allNews: state.news.allNews,
  };
};
export default connect(StatusStateFromProps)(NewsScreen);
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    fontSize: wp(6),
    color: Colors.rose,
    fontWeight: 'bold',
  },
  text_title: {
    fontSize: wp(3.5),
    fontWeight: 'bold',
  },
});
