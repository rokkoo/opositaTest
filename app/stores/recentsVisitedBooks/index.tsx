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
      // Check if the book already exists in the array.
      const bookExists = prevMode.some(prevBook => prevBook.isbn === book.isbn);

      if (bookExists) {
        // If the book exists, filter out the duplicate book and add the new book at the beginning.
        const filteredBooks = prevMode.filter(
          prevBook => prevBook.isbn !== book.isbn,
        );
        return [book, ...filteredBooks];
      }

      // If the book doesn't exist, create a new array with the new book at the beginning.
      return [book, ...prevMode];
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
