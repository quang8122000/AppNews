import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Flastlist from './modules/flastlistArticle';
const ResultsofSearch = props => {
  return (
    <View style={Styles.container}>
      <Flastlist {...props} />
    </View>
  );
};
export default ResultsofSearch;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
