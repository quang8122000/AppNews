import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  ActivityIndicatorProps,
  TouchableOpacity,
  Text,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NewsScreen from '../screens/News/newsScreen';
import {BooksScreen} from '../screens/Books/booksScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../resources/color';
import {SearchBar, Header} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {PopuMenu} from '../components/popuMenu';
import {ModalFilter} from '../screens/searchArticle/modalFilter';

const Tab = createMaterialTopTabNavigator();

function App(props) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Header
        rightComponent={
          <PopuMenu
            onSelect={() => setVisible(true)}
            renderMenuTrigger={() => {
              return (
                <View
                  style={{
                    width: wp(7),
                    height: wp(7),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialIcons
                    name={'filter-vintage'}
                    size={wp(5)}
                    color={Colors.white}
                  />
                </View>
              );
            }}
          />
        }
        leftComponent={
          <TouchableOpacity onPress={() => props.navigation.navigate('News')}>
            <Entypo name={'home'} size={wp(5)} color={Colors.white} />
          </TouchableOpacity>
        }
        statusBarProps={{barStyle: 'light-content'}}
        barStyle="light-content" // or directly
        centerComponent={{
          text: 'News',
          style: {color: Colors.white, fontSize: wp(5), fontWeight: 'bold'},
        }}
        containerStyle={{
          alignItems: 'center',
          height: hp(11),
          justifyContent: 'center',
        }}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#31034F', '#C87DFF'],
          start: {x: 0, y: 0.5},
          end: {x: 1, y: 0.5},
        }}
      />
      <ModalFilter
        {...props}
        visible={visible}
        onPress={() => setVisible(false)}
        setVisible={setVisible}
      />

      <Tab.Navigator
        tabBarPosition={'bottom'}
        initialRouteName="News"
        tabBarOptions={{
          activeTintColor: '#039280',
          inactiveTintColor: Colors.black,
          labelStyle: {
            fontSize: wp('4'),
            fontWeight: 'bold',
          },

          tabStyle: {
            backgroundColor: Colors.white,
            height: hp(6),
          },
        }}>
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Books" component={BooksScreen} />
      </Tab.Navigator>
    </>
  );
}
export default App;
