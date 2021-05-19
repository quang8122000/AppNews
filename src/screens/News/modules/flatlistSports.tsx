import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Animated} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {sportAction} from '../../../redux/News/action';
import {ItemSports} from './itemSports';
import moment from 'moment';
import {dateFormat} from '../../../utils/dateFormatAgo';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {isEmpty} from 'lodash';
import {Colors} from '../../../resources/color';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const FlatlistSports = props => {
  const avatarRef: any = React.createRef();
  const data = ['', ''];
  useEffect(() => {}, []);

  const renderItem_1 = ({item, index}) => {
    return (
      <ShimmerPlaceholder
        ref={avatarRef}
        stopAutoRun
        style={{
          height: hp(30),
          width: wp(90),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: wp(2),
          backgroundColor: Colors.gray1,
          flexDirection: 'row',
          marginHorizontal: wp(2),
          padding: wp(2),
        }}
        shimmerColors={['gray', 'gray']}
      />
    );
  };
  const Loading = () => {
    return <FlatList data={data} renderItem={renderItem_1} horizontal={true} />;
  };
  const onPress = item => {
    props.navigation.navigate('DetailNewAll', {item});
  };
  const renderItem = ({index, item}) => {
    return (
      <ItemSports
        onPress={() => onPress(item)}
        title={item.title}
        url={{uri: item.multimedia[0]?.url}}
        abstract={item.abstract}
        updated_date={dateFormat(
          moment(
            item.updated_date?.replace('-04:00', '+07:00'),
            'YYYY-MM-DDThh:mm:ssTZD',
          ).valueOf(),
        )}
      />
    );
  };

  return (
    <View style={Styles.container}>
      {isEmpty(props.allSports) ? (
        Loading()
      ) : (
        <FlatList
          data={props.allSports}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={item => item.abstract}
        />
      )}
    </View>
  );
};

export default FlatlistSports;
const Styles = StyleSheet.create({
  container: {height: hp(30), alignContent: 'center', marginVertical: hp(1)},
});
