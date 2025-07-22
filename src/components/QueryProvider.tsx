import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a single QueryClient instance that will be reused
let queryClient: QueryClient | null = null;

const getQueryClient = () => {
  if (!queryClient) {
    queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5, // 5 minutes
          retry: 1,
          refetchOnWindowFocus: false,
        },
        mutations: {
          retry: 1,
        },
      },
    });
  }
  return queryClient;
};

interface QueryProviderProps {
  children: React.ReactNode;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  const client = getQueryClient();
  
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryProvider;
