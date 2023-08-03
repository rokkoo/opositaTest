import { useState, useEffect, useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BooksService } from '@app/services/booksService';
import { Book } from '@app/services/dtos/booksDTO';
import useDebounce from '@app/features/commons/hooks/useDebounce';

const useFilter = () => {
  const [filterText, setFilterText] = useState<string | null>(null);
  const debouncedSearchTerm = useDebounce<string | null>(filterText, 500);
  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (text: string | null) => {
      if (text) {
        // Normalize the text by removing leading and trailing spaces
        const normalizeText = text.trim();

        const books = await BooksService.findBookByName(normalizeText);
        return books;
      }

      // if the text is emty we should get all books
      if (text === '') {
        const allBoks = await BooksService.getBooks();
        return allBoks;
      }

      return [];
    },
    {
      onSuccess: async (data: Book[]) => {
        // if we dont have data we dont need to communicate it
        if (data.length > 0) {
          queryClient.setQueryData(['books'], data);
        }
      },
    },
  );

  const handleTextChange = useCallback((text: string) => {
    setFilterText(text);
  }, []);

  useEffect(() => {
    mutation.mutate(debouncedSearchTerm);

    // debouncedSearchTerm is require in order to make the side effect
    // every X ms
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return {
    filterText,
    handleTextChange,
  };
};

export default useFilter;
