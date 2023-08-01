import { useCallback, useMemo } from 'react';

import useBookDetail from '@app/features/bookDetails/hooks/useBookDetail';
import { useFavoriteBooks } from '@app/stores/favoriteBooks/hooks/useFavoritesBooks';

const useHeaderBar = () => {
  const { addBook, books, removeBook } = useFavoriteBooks();
  const { book } = useBookDetail();

  const isFavoriteBook = useMemo(() => {
    return books.find(b => b.isbn === book.isbn);
  }, [book, books]);

  const handlePress = useCallback(() => {
    if (isFavoriteBook) {
      removeBook(book.isbn);
      return;
    }

    addBook(book);
  }, [addBook, book, isFavoriteBook, removeBook]);

  return {
    handlePress,
    isFavoriteBook,
  };
};

export default useHeaderBar;
