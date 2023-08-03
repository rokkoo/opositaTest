import { BooksDTO } from '@app/services/dtos/booksDTO';

describe('BooksDTO', () => {
  test('getArray should format released date and return array of Book objects', () => {
    const data = [
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
        povCharacters: ['https://www.anapioficeandfire.com/api/characters/148'],
      },
    ];

    // Call the getArray method to get formatted books
    const formattedBooks = BooksDTO.getArray(data);

    const book = data[0];

    expect(formattedBooks).toEqual([
      {
        url: book.url,
        name: book.name,
        isbn: book.isbn,
        authors: book.authors,
        publisher: book.publisher,
        country: book.country,
        mediaType: book.mediaType,
        released: '1 agosto, 1996', // The date should be formatted in 'd MMMM, yyyy' format in Spanish locale
        characters: book.characters,
        numberOfPages: book.numberOfPages,
      },
    ]);
  });
});
