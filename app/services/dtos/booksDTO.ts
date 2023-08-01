export interface Book {
  readonly url: string;
  readonly name: string;
  readonly isbn: string;
  readonly authors: string[];
  readonly publiser: string;
  readonly country: string;
  readonly mediaType: string;
  readonly released: string;
  readonly characters: string[];
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
        publiser: book.publiser,
        country: book.country,
        mediaType: book.mediaType,
        released: book.released,
        characters: book.characters,
      };

      return dto;
    });
  }
}
