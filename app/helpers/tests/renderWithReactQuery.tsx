import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react-native';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const renderWithReactQuery = (element: React.ReactElement) =>
  render(
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>,
  );
