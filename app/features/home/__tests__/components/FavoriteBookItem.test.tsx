import React from 'react';
import { screen, waitFor } from '@testing-library/react-native';

import { mockBooksData } from '@app/services/__mocks__/bookService';
import { BooksDTO } from '@app/services/dtos/booksDTO';
import { renderWithReactQuery } from '@app/helpers/tests/renderWithReactQuery';
import { AppTheProvider } from '@app/helpers/tests/appTheProvider';
import FavoriteBookItem from '../../components/favoritesBooksSection/favoriteBooksList/FavoriteBookItem';

const mockBook = BooksDTO.getArray(mockBooksData)[0];

describe('Favorite Book item', () => {
  test('it should render correctly', async () => {
    renderWithReactQuery(
      <AppTheProvider>
        <FavoriteBookItem {...mockBook} index={0} />
      </AppTheProvider>,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('it should render book name', async () => {
    renderWithReactQuery(
      <AppTheProvider>
        <FavoriteBookItem {...mockBook} index={0} />
      </AppTheProvider>,
    );

    await waitFor(() => {
      const title = screen.queryByText(mockBook.name);
      expect(title).toBeTruthy();
    });
  });

  test('it should render book cover image', async () => {
    renderWithReactQuery(
      <AppTheProvider>
        <FavoriteBookItem {...mockBook} index={0} />
      </AppTheProvider>,
    );

    await waitFor(() => {
      const title = screen.queryByTestId(`img${mockBook.isbn}`);
      expect(title).toBeTruthy();
    });
  });

  test('it should render favorite icon', async () => {
    renderWithReactQuery(
      <AppTheProvider>
        <FavoriteBookItem {...mockBook} index={0} />
      </AppTheProvider>,
    );

    await waitFor(() => {
      const title = screen.queryByTestId('favoriteIcon');
      expect(title).toBeTruthy();
    });
  });
});
