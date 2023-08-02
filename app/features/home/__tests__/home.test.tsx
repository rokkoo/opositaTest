import * as React from 'react';
import { screen, waitFor } from '@testing-library/react-native';
import Home from '..';
import { renderWithReactQuery } from '@app/helpers/tests/renderWithReactQuery';
import { AppProviders } from '@app/helpers/tests/appProviders';
import { mockBooksData } from '@app/services/__mocks__/bookService';

describe('Home screen tests', () => {
  test('it should render correctly', async () => {
    renderWithReactQuery(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('it should show screen title', async () => {
    renderWithReactQuery(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    await waitFor(async () => {
      const output = await screen.findByTestId('HomeScreenTitle');

      expect(output).toHaveTextContent('OpositaTest');
    });
  });

  test('it should be Game of Thrones on the screen', async () => {
    renderWithReactQuery(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    await waitFor(async () => {
      const text = screen.queryByText('A Game of Thrones');
      expect(text).toBeTruthy();
    });
  });

  test('favorite section should not be displayed', async () => {
    renderWithReactQuery(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    await waitFor(async () => {
      const text = screen.queryByTestId('favoritesBooksSection');
      expect(text).toBeFalsy();
    });
  });

  test('recent book section should not be displayed', async () => {
    renderWithReactQuery(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    await waitFor(async () => {
      const text = screen.queryByTestId('recentsBooksSection');
      expect(text).toBeFalsy();
    });
  });

  test('should render favorite section', async () => {
    const favoriteContextMock = {
      books: mockBooksData,
      addBook: jest.fn(),
      removeBook: jest.fn(),
      hasFavorireBooks: true,
    };

    renderWithReactQuery(
      <AppProviders favoriteContext={favoriteContextMock}>
        <Home />
      </AppProviders>,
    );

    await waitFor(async () => {
      const text = screen.queryByTestId('favoritesBooksSection');
      expect(text).toBeTruthy();

      const bookItems = screen.getAllByTestId('book-item');
      expect(bookItems).toHaveLength(mockBooksData.length);
    });
  });

  test('should render recent visited section', async () => {
    const recentVisitedContext = {
      books: mockBooksData,
      addBook: jest.fn(),
      removeBook: jest.fn(),
      hasRecentsVisitedBooks: true,
    };

    renderWithReactQuery(
      <AppProviders recentVisitedContext={recentVisitedContext}>
        <Home />
      </AppProviders>,
    );

    await waitFor(async () => {
      const text = screen.queryByTestId('recentsBooksSection');
      expect(text).toBeTruthy();

      const bookItems = screen.getAllByTestId('recent-book-item');
      expect(bookItems).toHaveLength(mockBooksData.length);
    });
  });

  test('should render all books', async () => {
    renderWithReactQuery(
      <AppProviders>
        <Home />
      </AppProviders>,
    );

    await waitFor(async () => {
      const text = screen.queryByTestId('bookListSection');
      expect(text).toBeTruthy();

      const bookItems = screen.getAllByTestId('list-book-item');
      expect(bookItems).toHaveLength(mockBooksData.length);
    });
  });
});
