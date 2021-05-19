import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../resources/color';
import {CheckBox} from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-custom-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {itemState} from '../../utils/useHook';
import moment from 'moment';
export const ModalFilter = props => {
  const {visible, onPress, setVisible} = props;
  const [isBeginDatePickerVisible, setBeginDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);
  const [value, setValue] = useState(null);
  const [begin_date, setBegin_date] = useState(moment().format('YYYY-MM-DD'));
  const [end_date, setEnd_date] = useState(moment().format('YYYY-MM-DD'));
  const [active, setActive] = useState(0);
  const {items, setItems} = itemState();
  let controller;
  const showDatePickerBeginDate = dateNow => {
    setBeginDatePickerVisible(true);
  };
  const showDatePickerforEndDate = dateNow => {
    setEndDatePickerVisible(true);
  };
  const hideDatePickerBeginDate = () => {
    setBeginDatePickerVisible(false);
  };
  const hideDatePickerEndDate = () => {
    setEndDatePickerVisible(false);
  };
  const handleConfirm = date => {
    setBegin_date(moment(date).format('YYYY-MM-DD'));
    hideDatePickerBeginDate();
  };
  const handleConfirm1 = date => {
    setEnd_date(moment(date).format('YYYY-MM-DD'));
    hideDatePickerEndDate();
  };
  const checkActive = () => {
    if (active == 0) {
      return 'oldest';
    } else if (active == 1) {
      return 'newest';
    } else if (active == 2) {
      return 'relevance';
    }
  };

  const onPressDone = () => {
    if (value == null) {
      Alert.alert('Error !', 'Select News Desk ?');
    } else if (begin_date == end_date) {
      Alert.alert('Error !', 'Begin date and end date need different');
    } else {
      props.navigation.navigate('ResultsofSearch', {
        begin_date: begin_date,
        end_date: end_date,
        value: value,
        active: checkActive(),
        visible: setVisible(false),
      });
    }
  };
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <View style={Styles.container}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1.5}}
          colors={['#31034F', '#C87DFF']}
          style={Styles.modalView}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                width: wp(40),
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: Colors.white,
                  fontSize: wp(4),
                  marginBottom: wp(2),
                }}>
                Begin Date
              </Text>

              <TouchableOpacity
                onPress={showDatePickerBeginDate}
                style={Styles.view_Date}>
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: 'bold',
                    fontSize: wp(4),
                  }}>
                  {begin_date}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isBeginDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePickerBeginDate}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-around',
                alignItems: 'center',
                width: wp(40),
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: Colors.white,
                  fontSize: wp(4),
                  marginBottom: wp(2),
                }}>
                End Date
              </Text>
              <TouchableOpacity
                onPress={showDatePickerforEndDate}
                style={Styles.view_Date}>
                <Text
                  style={{
                    color: Colors.black,
                    fontWeight: 'bold',
                    fontSize: wp(4),
                  }}>
                  {end_date}
                </Text>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isEndDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm1}
                onCancel={hideDatePickerEndDate}
              />
            </View>
          </View>

          <DropDownPicker
            items={items}
            containerStyle={{height: 40, width: wp(70), marginVertical: hp(1)}}
            controller={instance => (controller = instance)}
            onChangeList={(items, callback) => {
              console.log('items', items);

              new Promise((resolve, reject) => resolve(setItems(items)))
                .then(() => callback())
                .catch(() => {});
            }}
            itemStyle={{
              justifyContent: 'center',
            }}
            labelStyle={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: wp(3),
            }}
            defaultValue={value}
            onChangeItem={item => setValue(item.value)}
          />
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              title={'Oldest'}
              checked={active == 0}
              containerStyle={Styles.check_box}
              textStyle={Styles.text_check}
              onPress={() => setActive(0)}
              checkedIcon={
                <MaterialIcons name="radio-button-checked" size={wp(4.5)} />
              }
              uncheckedIcon={
                <MaterialIcons name="radio-button-unchecked" size={wp(4.5)} />
              }
            />
            <CheckBox
              title={'Newest'}
              checked={active == 1}
              containerStyle={Styles.check_box}
              textStyle={Styles.text_check}
              onPress={() => setActive(1)}
              checkedIcon={
                <MaterialIcons name="radio-button-checked" size={wp(4.5)} />
              }
              uncheckedIcon={
                <MaterialIcons name="radio-button-unchecked" size={wp(4.5)} />
              }
            />
            <CheckBox
              title={'Relevance'}
              checked={active == 2}
              containerStyle={Styles.check_box}
              textStyle={Styles.text_check}
              onPress={() => setActive(2)}
              checkedIcon={
                <MaterialIcons name="radio-button-checked" size={wp(4.5)} />
              }
              uncheckedIcon={
                <MaterialIcons name="radio-button-unchecked" size={wp(4.5)} />
              }
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: wp(70),
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              style={[Styles.button, Styles.buttonDone]}
              onPress={onPressDone}>
              <Text style={Styles.textStyle}>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Styles.button, Styles.buttonClose]}
              onPress={onPress}>
              <Text style={Styles.textStyle}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  modalView: {
    justifyContent: 'space-around',
    height: hp(45),
    width: wp(80),
    margin: 20,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    // elevation: 2,
    width: wp(25),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(1),
  },

  buttonClose: {
    backgroundColor: Colors.primaryDark,
  },
  buttonDone: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  check_box: {
    height: hp(5),
    width: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_check: {
    fontSize: wp(2),
    fontWeight: 'bold',
  },
  view_Date: {
    height: hp(4),
    width: wp(30),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(2),
  },
});
