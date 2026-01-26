import { useQuery } from '@tanstack/react-query';

import { fetcher } from '@/lib/axios';
import type { ProfileResponse } from '@/types/profile';

import { API_ENDPOINT } from './endpoint';

/**
 * 프로필 데이터 조회
 *
 * @example
 * const { data, isLoading } = useGetProfile();
 */
export function useGetProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: fetcher<ProfileResponse>(API_ENDPOINT.profile.getProfile),
  });
}
