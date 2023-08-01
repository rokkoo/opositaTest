import React from 'react';

import AppList from '@app/features/commons/core/appList';
import { useFavoriteBooks } from '@app/stores/favoriteBooks/hooks/useFavoritesBooks';
import FavoriteBookItem from './FavoriteBookItem';

const FavoriteBooksList = () => {
  const { books } = useFavoriteBooks();

  return (
    <AppList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={books}
      keyExtractor={({ isbn }) => isbn}
      renderItem={({ item, index }) => (
        <FavoriteBookItem {...item} index={index} />
      )}
    />
  );
};

export default React.memo(FavoriteBooksList);
