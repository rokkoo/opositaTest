jest.mock('../booksService', () => {
  return {
    BooksService: {
      getBooks: jest.fn().mockResolvedValue([
        {
          url: 'https://www.anapioficeandfire.com/api/books/1',
          name: 'A Game of Thrones',
          isbn: '978-0553103540',
          authors: ['George R. R. Martin'],
          numberOfPages: 694,
          publisher: 'Bantam Books',
          country: 'United States',
          mediaType: 'Hardcover',
          released: '1996-08-01T00:00:00',
          characters: ['https://www.anapioficeandfire.com/api/characters/2'],
          povCharacters: [
            'https://www.anapioficeandfire.com/api/characters/148',
          ],
        },
      ]),
    },
  };
});
