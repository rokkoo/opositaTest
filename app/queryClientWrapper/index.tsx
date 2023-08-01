import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface QueryClientWrapperProps {
  children: React.ReactNode;
}

export const QueryClientWrapper: React.FC<QueryClientWrapperProps> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
