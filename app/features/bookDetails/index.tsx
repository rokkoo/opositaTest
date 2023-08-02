import React, { useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import BookDetailHeader from './components/BookDetailHeader';
import BookDetailSection from './components/BookDetailSection';
import Spacer from '../commons/spacer';
import { AppLayoutSpacing, Spacing } from '@app/theme/metric';
import HeaderBar from './components/headerBar';
import { useRecentsVisitedBooks } from '@app/stores/recentsVisitedBooks/hooks/useRecentsVisitedBooks';
import useBookDetail from './hooks/useBookDetail';

const BookDetails = () => {
  const insets = useSafeAreaInsets();
  const styles = styling(insets);
  const { book } = useBookDetail();
  const { addBook } = useRecentsVisitedBooks();

  useEffect(() => {
    addBook(book);
  }, [addBook, book]);

  return (
    <Animated.View style={styles.container}>
      <HeaderBar />
      <ScrollView style={styles.sectionContainer}>
        <BookDetailHeader />
        <Spacer size={Spacing.xxxl} />
        <BookDetailSection />
        <Spacer size={Spacing.xxxl} />
      </ScrollView>
    </Animated.View>
  );
};

const styling = (insets: EdgeInsets) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    sectionContainer: {
      paddingBottom: AppLayoutSpacing.paddingBottom + insets.bottom,
    },
  });
};

export default BookDetails;
