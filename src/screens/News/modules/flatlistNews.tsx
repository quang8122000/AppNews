import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Animated} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {dateFormat} from '../../../utils/dateFormatAgo';
import ItemNews from './itemNews';
import {getRamdomColor} from '../../../utils/randomcolor';
import moment from 'moment';

import {isEmpty} from 'lodash';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const FlatlistNews = props => {
  const avatarRef: any = React.createRef();
  const data = ['', ''];

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
          height: hp(12),
          width: wp(90),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: wp(2),
          borderRadius: wp(1.5),
          marginHorizontal: wp(2),
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
  const renderItem = ({item, index}) => {
    return (
      <ItemNews
        onPress={() => onPress(item)}
        backgroundColor={getRamdomColor()}
        title={item.title}
        url={{
          uri: item.multimedia[0]?.url,
        }}
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
      {isEmpty(props.allNews) ? (
        Loading()
      ) : (
        <FlatList
          data={props.allNews}
          renderItem={renderItem}
          horizontal={true}
        />
      )}
    </View>
  );
};

export default FlatlistNews;

const Styles = StyleSheet.create({
  container: {
    height: hp(13),
    alignContent: 'center',
    marginVertical: hp(1),
  },
});
