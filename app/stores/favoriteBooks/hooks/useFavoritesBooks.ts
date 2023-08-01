import { useContext } from 'react';
import { FavoriteBooksContext, FavoriteBooksContextProps } from '..';

export function useFavoriteBooks(): FavoriteBooksContextProps {
  const context = useContext(FavoriteBooksContext);

  if (!context) {
    throw new Error(
      'useFavoriteBooks must be used within a FavoriteBooksProvider',
    );
  }

  return context;
}
