import React, { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

import useBookDetail from '../../hooks/useBookDetail';
import Section from './section';
import { AppLayoutSpacing, Spacing } from '@app/theme/metric';
import Spacer from '@app/features/commons/spacer';

const BookDetailSection = () => {
  const { book } = useBookDetail();

  const authorText = useMemo(() => {
    return book.authors.reduce<string>((prev, current) => {
      if (prev === '') {
        return current;
      }

      return `${prev}\n${current}`;
    }, '');
  }, [book.authors]);

  return (
    <Animated.View
      style={styles.container}
      entering={FadeInUp.delay(100).springify()}
    >
      <Section categoryName="Autor" value={authorText} />
      <Spacer size={Spacing.xxl} />
      <Section categoryName="Editorial" value={book.publisher} />
      <Spacer size={Spacing.xxl} />
      <Section categoryName="Año de publicacón" value={book.released} />
      <Spacer size={Spacing.xxl} />
      <Section categoryName="Numero de páginas" value={book.numberOfPages} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: AppLayoutSpacing.paddingHorizontal,
    flex: 1,
  },
});

export default BookDetailSection;
