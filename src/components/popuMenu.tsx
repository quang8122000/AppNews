import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const PopuMenu = props => {
  useEffect(() => {});
  const {renderMenuTrigger, onSelect} = props;

  return (
    <View>
      <Menu>
        <MenuTrigger>{renderMenuTrigger()}</MenuTrigger>
        <MenuOptions
          customStyles={{
            optionsContainer: {
              width: wp(20),
              height: hp(20),
              marginTop: hp(3),
              justifyContent: 'center',
              borderRadius: wp(2),
            },
          }}>
          <MenuOption onSelect={onSelect}>
            <View
              style={{
                flexDirection: 'row',
                height: hp(4),
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <FontAwesome name="search" size={wp(4.5)} color={'black'} />
              <Text
                style={{color: 'black', fontSize: wp(3), fontWeight: 'bold'}}>
                Search
              </Text>
            </View>
          </MenuOption>
          <MenuOption onSelect={() => alert(`Delete`)}>
            <View
              style={{
                flexDirection: 'row',
                height: hp(4),
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Feather name="help-circle" size={wp(4.5)} color={'black'} />
              <Text
                style={{color: 'black', fontSize: wp(3), fontWeight: 'bold'}}>
                Helps
              </Text>
            </View>
          </MenuOption>
          <MenuOption onSelect={() => alert(`Feedback`)}>
            <View
              style={{
                flexDirection: 'row',
                height: hp(4),
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <MaterialIcons name="feedback" size={wp(4.5)} color={'black'} />
              <Text
                style={{color: 'black', fontSize: wp(3), fontWeight: 'bold'}}>
                Feedback
              </Text>
            </View>
          </MenuOption>
        </MenuOptions>
      </Menu>
    </View>
  );
};
const Styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
