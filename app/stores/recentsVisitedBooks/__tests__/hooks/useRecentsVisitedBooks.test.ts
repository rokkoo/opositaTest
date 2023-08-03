import { renderHook, act } from '@testing-library/react-hooks';
import { RecentsVisitedBooksProvider } from '../..';
import { useRecentsVisitedBooks } from '../../hooks/useRecentsVisitedBooks';
import { mockBooksData } from '@app/services/__mocks__/bookService';

describe('useRecentsVisitedBooks', () => {
  test('it should add books to the context', () => {
    const { result } = renderHook(() => useRecentsVisitedBooks(), {
      wrapper: RecentsVisitedBooksProvider,
    });

    // the inital value
    expect(result.current.books).toHaveLength(0);
    const book = mockBooksData[0];

    act(() => {
      result.current.addBook(book);
    });

    expect(result.current.books[0]).toEqual(book);
    expect(result.current.books).toHaveLength(1);
  });

  test('should add books to the context and update hasRecentsVisitedBooks', () => {
    const { result } = renderHook(() => useRecentsVisitedBooks(), {
      wrapper: RecentsVisitedBooksProvider,
    });

    // the inital value
    expect(result.current.hasRecentsVisitedBooks).toBe(false);

    act(() => {
      const book = mockBooksData[0];
      result.current.addBook(book);
    });

    expect(result.current.books).toHaveLength(1);
    expect(result.current.hasRecentsVisitedBooks).toBe(true);
  });
});
