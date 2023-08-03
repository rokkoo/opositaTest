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
import { useAppTheme } from '@app/theme/hooks/useTheme';
import { AppTheme } from '@app/theme/types';

const BookDetails = () => {
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();
  const styles = styling(theme, insets);
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

const styling = (theme: AppTheme, insets: EdgeInsets) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    sectionContainer: {
      paddingBottom: AppLayoutSpacing.paddingBottom + insets.bottom,
    },
  });
};

export default BookDetails;
