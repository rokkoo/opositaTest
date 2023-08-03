import { Book } from '../dtos/booksDTO';

// should be that same as the book DTO
export const mockBooksData: Book[] = [
  {
    url: 'https://www.anapioficeandfire.com/api/books/1',
    name: 'A Game of Thrones',
    isbn: '978-0553103540',
    authors: ['George R. R. Martin'],
    publisher: 'Bantam Books',
    country: 'United States',
    mediaType: 'Hardcover',
    released: '1 agosto, 1996',
    characters: ['https://www.anapioficeandfire.com/api/characters/2'],
    numberOfPages: 694,
  },
];

export const mockFilterBooksData: Book[] = [
  {
    url: 'https://www.anapioficeandfire.com/api/books/3',
    name: 'A Feast for Crows',
    isbn: '978-0553801507',
    authors: ['George R. R. Martin'],
    publisher: 'Bantam Books',
    country: 'United States',
    mediaType: 'Hardcover',
    released: '22 septiembre, 2001',
    characters: ['https://www.anapioficeandfire.com/api/characters/1'],
    numberOfPages: 324,
  },
];

jest.mock('../booksService', () => {
  return {
    BooksService: {
      getBooks: jest.fn().mockResolvedValue(mockBooksData),
      findBookByName: jest.fn().mockResolvedValue(mockFilterBooksData),
    },
  };
});
