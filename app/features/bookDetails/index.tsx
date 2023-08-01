import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import Header from '../commons/header';
import BookDetailHeader from './components/BookDetailHeader';

const BookDetails = () => {
  return (
    <Animated.View style={styles.container}>
      <Header />
      <BookDetailHeader />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BookDetails;
