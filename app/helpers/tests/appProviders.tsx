import React from 'react';
import LightTheme from '@app/theme/lightTheme';
import { AppThemeContext } from '@app/theme/themeContext';
import { FavoriteBooksContext } from '@app/stores/favoriteBooks';
import { RecentsVisitedBooksContext } from '@app/stores/recentsVisitedBooks';

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

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppThemeContext.Provider value={contextMock}>
      <FavoriteBooksContext.Provider value={favoriteContextMock}>
        <RecentsVisitedBooksContext.Provider value={recentVisitedContextMock}>
          {children}
        </RecentsVisitedBooksContext.Provider>
      </FavoriteBooksContext.Provider>
    </AppThemeContext.Provider>
  );
};
