import React from 'react';

import Section from '@app/features/home/components/section';
import RecentsVisitedBooksList from './components/recentsVisitedBooksList';
import AppText from '@app/features/commons/core/text';
import Spacer from '@app/features/commons/spacer';
import { Spacing } from '@app/theme/metric';
import { useRecentsVisitedBooks } from '@app/stores/recentsVisitedBooks/hooks/useRecentsVisitedBooks';

const RecentsBooksSection = () => {
  const { hasRecentsVisitedBooks } = useRecentsVisitedBooks();

  if (!hasRecentsVisitedBooks) {
    return null;
  }

  return (
    <Section>
      <AppText bold>Tus libros favoritos</AppText>
      <Spacer size={Spacing.l} />
      <RecentsVisitedBooksList />
    </Section>
  );
};

export default React.memo(RecentsBooksSection);
