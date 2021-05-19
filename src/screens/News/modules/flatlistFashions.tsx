import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Animated} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {fashionAction} from '../../../redux/News/action';
import ItemFashions from './itemFashions';
import {dateFormat} from '../../../utils/dateFormatAgo';
import moment from 'moment';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import {isEmpty} from 'lodash';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const FlatlistFashions = props => {
  const avatarRef: any = React.createRef();
  const data = ['', '', ''];

  useEffect(() => {
    const loop = async () => {
      const facebookAnimated = await Animated.stagger(400, [
        avatarRef?.current?.getAnimated(),
      ]);
      Animated.loop(facebookAnimated)?.start();
    };
    loop();
  }, []);

  const renderItem_1 = ({item, index}) => {
    return (
      <ShimmerPlaceholder
        ref={avatarRef}
        stopAutoRun
        style={{
          height: hp(30),
          width: wp(40),
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginHorizontal: hp(1),
        }}
        shimmerColors={['gray', 'gray']}
      />
    );
  };

  const Loading = () => {
    return (
      <View style={Styles.container}>
        <FlatList data={data} renderItem={renderItem_1} horizontal={true} />
      </View>
    );
  };
  const onPress = item => {
    props.navigation.navigate('DetailNewAll', {item});
  };
  const renderItem = ({item, index}) => {
    return (
      <ItemFashions
        onPress={() => onPress(item)}
        urlbig={{uri: item.multimedia[0].url}}
        title={item.title}
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
      {isEmpty(props.allFashions) ? (
        Loading()
      ) : (
        <FlatList
          data={props.allFashions}
          renderItem={renderItem}
          horizontal={true}
        />
      )}
    </View>
  );
};

export default FlatlistFashions;
const Styles = StyleSheet.create({
  container: {
    height: hp(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(2),
  },
});
