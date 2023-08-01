import ApiClient from './apiClient';
import { Book, BooksDTO } from './dtos/booksDTO';

const getBooks = async (): Promise<Book[]> => {
  try {
    const response = await ApiClient.get<any[]>('/books');

    return BooksDTO.getArray(response);
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

export const BooksService = {
  getBooks,
};
