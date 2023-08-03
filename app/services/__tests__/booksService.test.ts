import { mockBooksData } from '../__mocks__/bookService';
import { BooksService } from '../booksService';

describe('BooksService', () => {
  test('getBooks should fetch books from ApiClient and return BooksDTO', async () => {
    const books = await BooksService.getBooks();

    expect(books).toEqual(mockBooksData);
  });
});
