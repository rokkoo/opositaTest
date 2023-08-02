import React from 'react';
import LightTheme from '@app/theme/lightTheme';
import { AppThemeContext } from '@app/theme/themeContext';
import {
  FavoriteBooksContext,
  FavoriteBooksContextProps,
} from '@app/stores/favoriteBooks';
import {
  RecentsVisitedBooksContext,
  RecentsVisitedBooksContextProps,
} from '@app/stores/recentsVisitedBooks';

const contextMock = {
  theme: LightTheme,
  isDarkMode: false,
  toggleTheme: jest.fn(),
};

const favoriteContextMock = {
  books: [],
  addBook: jest.fn(),
  removeBook: jest.fn(),
  hasFavorireBooks: false,
};

const recentVisitedContextMock = {
  books: [],
  addBook: jest.fn(),
  removeBook: jest.fn(),
  hasRecentsVisitedBooks: false,
};

interface AppProvidersProps {
  children: React.ReactNode;
  favoriteContext?: FavoriteBooksContextProps;
  recentVisitedContext?: RecentsVisitedBooksContextProps;
}

export const AppProviders = ({
  children,
  favoriteContext = favoriteContextMock,
  recentVisitedContext = recentVisitedContextMock,
}: AppProvidersProps) => {
  return (
    <AppThemeContext.Provider value={contextMock}>
      <FavoriteBooksContext.Provider value={favoriteContext}>
        <RecentsVisitedBooksContext.Provider value={recentVisitedContext}>
          {children}
        </RecentsVisitedBooksContext.Provider>
      </FavoriteBooksContext.Provider>
    </AppThemeContext.Provider>
  );
};
