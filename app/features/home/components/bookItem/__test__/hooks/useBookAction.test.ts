import { renderHook } from '@testing-library/react-hooks';
import { STACK_SCREENS } from '@app/navigation/types';
import useBookAction from '../../hooks/useBookAction';
import { BooksDTO } from '@app/services/dtos/booksDTO';
import { mockBooksData } from '@app/services/__mocks__/bookService';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

describe('useBookAction', () => {
  test('it should call navigation.navigate when handleBookPress is called', () => {
    const { result } = renderHook(() => useBookAction());

    const mockBook = BooksDTO.getArray(mockBooksData)[0];
    result.current.handleBookPress(mockBook);

    // Expect navigation.navigate to have been called with the correct screen name and book data
    expect(mockedNavigate).toHaveBeenCalledWith(STACK_SCREENS.BookDetails, {
      book: mockBook,
    });
  });
});
