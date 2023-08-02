import { useContext } from 'react';
import {
  RecentsVisitedBooksContext,
  RecentsVisitedBooksContextProps,
} from '..';

export function useRecentsVisitedBooks(): RecentsVisitedBooksContextProps {
  const context = useContext(RecentsVisitedBooksContext);

  if (!context) {
    throw new Error(
      'useRecentsVisitedBooks must be used within a RecentsVisitedBooksProvider',
    );
  }

  return context;
}
