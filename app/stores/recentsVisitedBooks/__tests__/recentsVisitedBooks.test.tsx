import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import {
  RecentsVisitedBooksContext,
  RecentsVisitedBooksContextProps,
} from '..';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { mockBooksData } from '@app/services/__mocks__/bookService';

const TestComponent = () => {
  const context = useContext(RecentsVisitedBooksContext);

  const handleAddBook = () => {
    const book = mockBooksData[0];
    context?.addBook(book);
  };

  return (
    <View>
      {context?.books.map(book => {
        return (
          <Text testID="test-item" key={book.isbn}>
            {book.name}
          </Text>
        );
      })}
      {context?.hasRecentsVisitedBooks && (
        <Text testID="hasRecentsVisitedBooks">something</Text>
      )}
      <Button testID="test-button" onPress={handleAddBook} title="test" />
    </View>
  );
};

function RenderWithProvider(
  props: { providerProps?: RecentsVisitedBooksContextProps } | null,
) {
  return (
    <RecentsVisitedBooksContext.Provider value={props?.providerProps ?? null}>
      <TestComponent />
    </RecentsVisitedBooksContext.Provider>
  );
}

describe('RecentVisitedBooksContext', () => {
  test('it should not have any book as initial value', async () => {
    render(<RenderWithProvider />);

    const books = screen.queryAllByTestId('test-item');

    expect(books).toHaveLength(0);
  });

  test('it should not has hasRecentsVisitedBooks as inital value', async () => {
    render(<RenderWithProvider />);

    const text = screen.queryByTestId('hasRecentsVisitedBooks');

    expect(text).toBeFalsy();
  });

  test('it should add a new book', async () => {
    const mockAddBookFn = jest.fn();

    const providerProps: RecentsVisitedBooksContextProps = {
      books: [],
      addBook: mockAddBookFn,
      hasRecentsVisitedBooks: true,
    };

    render(<RenderWithProvider providerProps={providerProps} />);

    const button = await screen.findByTestId('test-button');
    fireEvent.press(button);

    expect(mockAddBookFn).toBeCalled();

    const book = mockBooksData[0];
    expect(mockAddBookFn).toBeCalledWith(book);
  });
});
