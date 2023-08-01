import React, { createContext, useState, useMemo, useCallback } from 'react';

import { Book } from '@app/services/dtos/booksDTO';

export interface FavoriteBooksContextProps {
  books: Book[];
  addBook: (book: Book) => void;
  removeBook: (isbn: string) => void;
  hasFavorireBooks: boolean;
}

export const FavoriteBooksContext =
  createContext<FavoriteBooksContextProps | null>(null);

export function FavoriteBooksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = useCallback((book: Book) => {
    setBooks(prevMode => {
      return [...prevMode, book];
    });
  }, []);

  const removeBook = useCallback(
    (isbn: string) => {
      const newFavoritebooks = books.filter(book => book.isbn !== isbn);

      setBooks(newFavoritebooks);
    },
    [books],
  );

  const hasFavorireBooks = useMemo(() => {
    return books.length > 0;
  }, [books]);

  const contextValue: FavoriteBooksContextProps = useMemo(
    () => ({
      books,
      addBook,
      removeBook,
      hasFavorireBooks,
    }),
    [addBook, books, removeBook, hasFavorireBooks],
  );

  return (
    <FavoriteBooksContext.Provider value={contextValue}>
      {children}
    </FavoriteBooksContext.Provider>
  );
}
