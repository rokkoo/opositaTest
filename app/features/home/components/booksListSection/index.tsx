import React from 'react';

import BooksList from '@app/features/home/components/booksListSection/components/booksList';
import Section from '@app/features/home/components/section';
import Spacer from '@app/features/commons/spacer';
import { Spacing } from '@app/theme/metric';
import AppText from '@app/features/commons/core/text';

const BooksListSection = () => {
  return (
    <Section testID="bookListSection">
      <AppText bold>Libros</AppText>
      <Spacer size={Spacing.l} />
      <BooksList />
    </Section>
  );
};

export default React.memo(BooksListSection);
