export interface Book {
  readonly url: string;
  readonly name: string;
  readonly isbn: string;
  readonly authors: string[];
  readonly publisher: string;
  readonly country: string;
  readonly mediaType: string;
  readonly released: string;
  readonly characters: string[];
  readonly numberOfPages: number;
}

// https://anapioficeandfire.com/Documentation#books
export class BooksDTO {
  static getArray(data: any[]): Book[] {
    return data.map(book => {
      const dto: Book = {
        url: book.url,
        name: book.name,
        isbn: book.isbn,
        authors: book.authors,
        publisher: book.publisher,
        country: book.country,
        mediaType: book.mediaType,
        released: book.released,
        characters: book.characters,
        numberOfPages: book.numberOfPages,
      };

      return dto;
    });
  }
}
