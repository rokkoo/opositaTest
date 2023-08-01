import React from 'react';

import AppList from '@app/features/commons/core/appList';
import useBooks from '@app/features/home/components/booksListSection/hooks/useBooks';
import BookItem from '@app/features/home/components/bookItem';

const BooksList = () => {
  const { data } = useBooks();

  return (
    <AppList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={({ isbn }) => isbn}
      renderItem={({ item, index }) => <BookItem {...item} index={index} />}
    />
  );
};

export default React.memo(BooksList);
