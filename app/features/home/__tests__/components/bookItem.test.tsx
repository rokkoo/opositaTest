import React from 'react';
import { screen, waitFor } from '@testing-library/react-native';

import BookItem from '../../components/bookItem';
import { mockBooksData } from '@app/services/__mocks__/bookService';
import { renderWithReactQuery } from '@app/helpers/tests/renderWithReactQuery';
import { AppTheProvider } from '@app/helpers/tests/appTheProvider';

const mockBook = mockBooksData[0];

describe('Book item', () => {
  test('it should render correctly', async () => {
    renderWithReactQuery(
      <AppTheProvider>
        <BookItem {...mockBook} index={0} />
      </AppTheProvider>,
    );

    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('it should render book name', async () => {
    renderWithReactQuery(
      <AppTheProvider>
        <BookItem {...mockBook} index={0} />
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
        <BookItem {...mockBook} index={0} />
      </AppTheProvider>,
    );

    await waitFor(() => {
      const title = screen.queryByTestId(`img${mockBook.isbn}`);
      expect(title).toBeTruthy();
    });
  });
});
