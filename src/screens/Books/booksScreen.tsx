import React, {Component} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FlatlistBooks from './modules/flatlistBooks';
export const BooksScreen = props => {
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
      <FlatlistBooks {...props} />
    </View>
  );
};
