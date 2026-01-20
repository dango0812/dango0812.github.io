'use client';

import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { getQueryClient } from './queryClient';

interface QueryProviderProps {
  children: React.ReactNode;
}

/**
 * QueryProvider
 *
 * TanStack Query를 위한 Provider 컴포넌트
 * SSR 지원을 위한 최적화된 설정 포함
 */
export default function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />
    </QueryClientProvider>
  );
}
