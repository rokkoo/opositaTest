import React, { createContext, useState, useMemo, useCallback } from 'react';

import { Book } from '@app/services/dtos/booksDTO';

export interface RecentsVisitedBooksContextProps {
  books: Book[];
  addBook: (book: Book) => void;
  hasRecentsVisitedBooks: boolean;
}

export const RecentsVisitedBooksContext =
  createContext<RecentsVisitedBooksContextProps | null>(null);

export function RecentsVisitedBooksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [books, setBooks] = useState<Book[]>([]);

  const addBook = useCallback((book: Book) => {
    setBooks(prevMode => {
      // By spreading the prevMode array inside the new Set and adding the new book at the beginning,
      // the new book will be the first one in the array, giving it higher priority in the display.
      const uniqueBooks = new Set<Book>([book, ...prevMode]);

      return Array.from(uniqueBooks);
    });
  }, []);

  const hasRecentsVisitedBooks = useMemo(() => {
    return books.length > 0;
  }, [books]);

  const contextValue: RecentsVisitedBooksContextProps = useMemo(
    () => ({
      books,
      addBook,
      hasRecentsVisitedBooks,
    }),
    [books, addBook, hasRecentsVisitedBooks],
  );

  return (
    <RecentsVisitedBooksContext.Provider value={contextValue}>
      {children}
    </RecentsVisitedBooksContext.Provider>
  );
}
