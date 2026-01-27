import { useQuery } from '@tanstack/react-query';

import { fetcher } from '@/lib/axios';
import type { CareersResponse } from '@/types/career';

import { API_ENDPOINT } from './endpoint';

/**
 * 경력 데이터 조회
 *
 * @example
 * const { data, isLoading } = useGetCareers();
 */
export function useGetCareers() {
  return useQuery({
    queryKey: ['career'],
    queryFn: fetcher<CareersResponse>(API_ENDPOINT.career.getCareers),
  });
}
