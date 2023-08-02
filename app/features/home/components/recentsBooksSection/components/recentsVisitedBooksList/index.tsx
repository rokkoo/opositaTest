import React from 'react';

import AppList from '@app/features/commons/core/appList';
import { useRecentsVisitedBooks } from '@app/stores/recentsVisitedBooks/hooks/useRecentsVisitedBooks';
import BookItem from '../../../bookItem';

const RecentsVisitedBooksList = () => {
  const { books } = useRecentsVisitedBooks();

  return (
    <AppList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={books}
      keyExtractor={({ isbn }) => isbn}
      renderItem={({ item, index }) => (
        <BookItem {...item} index={index} testID={'recent-book-item'} />
      )}
    />
  );
};

export default React.memo(RecentsVisitedBooksList);
