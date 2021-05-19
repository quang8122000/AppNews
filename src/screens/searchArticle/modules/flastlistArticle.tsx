import React, {Component, useEffect, useMemo, useRef, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {connect} from 'react-redux';
import {archiveAction} from '../../../redux/SearchArticle/action';
import {ItemArticle} from '../modules/itemArticle';
import moment from 'moment';
import {isEmpty} from 'lodash';
import {ButtonGoBack} from '../../../components/buttonGoBack';
import {Colors} from '../../../resources/color';
const Height = Dimensions.get('window').height;

const Flastlist = props => {
  const {begin_date, value, active, end_date} = props.route.params;
  const [pageCurrent, setpageCurrent] = useState(1);
  const refFirstTime = useRef(0);
  const data = props.allArticle;

  const {isLoading, isStopLoadMore} = props;
  const url = 'https://static01.nyt.com/';

  useEffect(() => {
    props.setLoading(true);
    props.getALLArticle({
      begin_date: moment(begin_date).format('YYYYMMDD'),
      end_date: moment(end_date).format('YYYYMMDD'),
      nd: value,
      sort: active,
      page: pageCurrent,
      typeLoadMore: refFirstTime.current != 0,
    });

    refFirstTime.current = 1;
  }, [pageCurrent]);

  const onPress = item => {
    props.navigation.navigate('DetailNewAll', {item});
  };
  const renderItem = ({item}) => {
    return (
      <ItemArticle
        url={
          isEmpty(item?.multimedia[0]?.url)
            ? require('../../../assets/images/noimage.png')
            : {
                uri: `${url}${item?.multimedia[0]?.url}`,
              }
        }
        main={item?.headline.main}
        abstract={item?.abstract}
        onPress={() => onPress(item)}
      />
    );
  };

  const goBack = () => {
    props.navigation.goBack();
  };

  function handleLoadMore() {
    if (isStopLoadMore || isLoading) return;
    setpageCurrent(pageCurrent + 1);
  }
  const renderFooter = () => {
    return isLoading ? (
      <View style={{alignItems: 'center', height: hp(10)}}>
        <Text
          style={{fontSize: wp(4), color: Colors.white, fontWeight: 'bold'}}>
          Just waiting
        </Text>
        <ActivityIndicator size="large" color={'white'} />
      </View>
    ) : null;
  };

  return (
    <>
      <FlatList
        style={Styles.flatlist}
        renderItem={renderItem}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        data={props.allArticle}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0}
        onEndReached={({distanceFromEnd}) => {
          console.log('distanceFromEnd', distanceFromEnd);
          handleLoadMore();
        }}
      />
      {renderFooter()}
      <ButtonGoBack onPress={goBack} />
    </>
  );
};
const StatusStateFromProps = (state: any) => {
  return {
    allArticle: state.search.allArticle,
    isLoading: state.search.isLoading,
    isStopLoadMore: state.search.isStopLoadMore,
  };
};

const Styles = StyleSheet.create({
  flatlist: {
    height: Height,
    backgroundColor: '#C87DFF',
    width: wp(100),
  },
});
export default connect(StatusStateFromProps, archiveAction)(Flastlist);
