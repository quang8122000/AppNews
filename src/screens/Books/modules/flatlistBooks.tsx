import React, {Component, useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ItemBooks} from './itemBooks';
import {connect} from 'react-redux';
import {booksAction} from '../../../redux/Books/action';

const FlatlistBooks = props => {
  useEffect(() => {
    props.getALLBooks();
  }, []);
  const onPress = item => {
    props.navigation.navigate('DetailsBooks', {item});
  };

  const renderItem = ({item, index}) => {
    return (
      <ItemBooks
        url={{uri: item.book_image}}
        title={item.title}
        onPress={() => onPress(item)}
      />
    );
  };
  return (
    <View style={Styles.container}>
      <FlatList
        data={props.allBooks}
        renderItem={renderItem}
        keyExtractor={item => item.primary_isbn10}
        horizontal={false}
        numColumns={3}
      />
    </View>
  );
};
const StatusStateFromProps = (state: any) => {
  return {
    allBooks: state.books.allBooks,
  };
};

export default connect(StatusStateFromProps, booksAction)(FlatlistBooks);
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
