import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, Image, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CodePush from 'react-native-code-push';
import {connect} from 'react-redux';
import lodash from 'lodash';
import {Colors} from '../../resources/color';
import LinearGradient from 'react-native-linear-gradient';
import {fashionAction, newsAction, sportAction} from '../../redux/News/action';
import {useNetInfo} from '@react-native-community/netinfo';
import {ButtonRetry} from '../../components/buttonRetry';
const Splash = props => {
  const [isActiveItem, setActiveItem] = useState(0);
  const [syncMessage, setSyncMessage] = useState('');
  const [codePushSuccess, setCodePushSuccess] = useState(false);
  const [cacheActive, setCacheActive] = useState(false);
  const netInfo = useNetInfo();
  const {
    getALLNews,
    getALLFashions,
    getALLSports,
    allNews,
    allSports,
    allFashions,
    retry,
  } = props;

  const fiveDots = ['one', 'two', 'three', 'four', 'five'];

  useEffect(() => {
    if (cacheActive) {
      return;
    }
    setTimeout(() => {
      if (isActiveItem === 4) {
        return setActiveItem(0);
      }
      setActiveItem(isActiveItem + 1);
    }, 100);
  }, [isActiveItem]);

  const getDataFirst = () => {
    getALLFashions();
    getALLNews();
    getALLSports();
  };
  useEffect(() => {
    if (netInfo.isConnected) {
      getDataFirst();
      CodePush.sync(
        {
          installMode: CodePush.InstallMode.IMMEDIATE,
        },
        codePushStatusDidChange,
      );
    } else if (netInfo.isConnected === false) {
      Alert.alert('Err', 'Not Internet');
    }
  }, [netInfo.isConnected]);
  useEffect(() => {
    console.log(
      'dataSuccess',
      lodash.isEmpty(allNews),
      lodash.isEmpty(allSports),
      lodash.isEmpty(allFashions),
      codePushSuccess,
    );
    if (
      !lodash.isEmpty(allNews) &&
      !lodash.isEmpty(allSports) &&
      !lodash.isEmpty(allFashions) &&
      codePushSuccess
    ) {
      setCacheActive(true);
      props.navigation.navigate('News App');
    }
  }, [allNews, allSports, allFashions, codePushSuccess]);

  const codePushStatusDidChange = (syncStatus: any) => {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        setSyncMessage('');
        break;
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        setSyncMessage('downloading package');
        break;
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        setSyncMessage('awaiting user action');
        break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        setSyncMessage('installing update');
        break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
        setSyncMessage('update cancelled by user');
        loadingApp();
        break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        setSyncMessage('update installed and will be applied on restart');
        setTimeout(() => {
          CodePush.restartApp();
        }, 1000);
        break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        console.log('messege', syncMessage);
        setSyncMessage('an unknown error occurred');
        loadingApp();
        break;
      case CodePush.SyncStatus.UP_TO_DATE:
      default:
        setSyncMessage('ɚ 2.0');
        loadingApp();
        break;
    }
  };
  const loadingApp = () => {
    setCodePushSuccess(true);
  };
  const renderFiveDots = ({index}) => {
    let isLastItem = index === fiveDots.length - 1;
    let isActive = index == isActiveItem;
    return (
      <View
        style={[
          isActive ? Styles.dotViewActive : Styles.dotView,
          isLastItem ? undefined : {marginRight: wp('1')},
        ]}
      />
    );
  };
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1.5}}
      colors={['#31034F', '#C87DFF']}
      style={Styles.container}>
      <View style={Styles.viewCenter}>
        <View style={Styles.viewRow}>
          <Image
            resizeMode={'cover'}
            source={require('../../assets/images/news.png')}
            style={{height: wp(20), width: wp(20)}}
          />
        </View>
        <Text style={Styles.name_app}>News App</Text>
        <View style={Styles.viewFlatlist}>
          <FlatList
            data={fiveDots}
            renderItem={renderFiveDots}
            horizontal={true}
          />
        </View>
        {retry && <ButtonRetry onPress={getDataFirst} />}
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginBottom: hp('1'),
            marginLeft: wp('3'),
          }}>
          <Text style={Styles.type}>
            Connected: {netInfo.isConnected?.toString().toUpperCase()}
          </Text>
          <Text style={Styles.type}>Type: {netInfo.type.toUpperCase()}</Text>
        </View>
        <Text style={Styles.version}>{syncMessage}</Text>
      </View>
    </LinearGradient>
  );
};
const mapStateFromProps = (state: any) => {
  return {
    allNews: state.news.allNews,
    allSports: state.news.allSports,
    allFashions: state.news.allFashions,
    retry: state.news.retry,
  };
};
export default connect(mapStateFromProps, {
  ...newsAction,
  ...sportAction,
  ...fashionAction,
})(Splash);
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  name_app: {
    fontSize: wp(7),
    fontWeight: 'bold',
    color: Colors.white,
  },
  viewCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  viewRow: {
    alignItems: 'center',
    marginVertical: hp(1),
  },
  sStyle: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('10'),
    color: '#FC8419',
  },
  imageStyle: {
    marginLeft: wp('-1.5'),
  },

  dotView: {
    width: wp('2'),
    height: wp('2'),
    borderWidth: 1.8,
    borderColor: 'white',
    borderRadius: wp('1'),
    alignSelf: 'center',
  },
  dotViewActive: {
    width: wp('2'),
    height: wp('2'),
    borderRadius: wp('1'),
    backgroundColor: '#ED2121',
    marginTop: hp('-1'),
    alignSelf: 'center',
  },
  viewFlatlist: {
    height: hp('3'),
    marginTop: hp('0.5'),
  },
  version: {
    fontSize: wp('4'),
    color: Colors.white,
    alignSelf: 'flex-end',
    marginBottom: hp('1'),
    marginRight: wp('3'),
    fontWeight: 'bold',
  },
  type: {
    fontSize: wp('2.5'),
    color: Colors.white,
    fontWeight: 'bold',
  },
});
