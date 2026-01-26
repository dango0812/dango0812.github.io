type FetchOptions = RequestInit & {
  /** ISR: 초 단위 재검증 주기 (예: 3600 = 1시간) */
  revalidate?: number | false;
  /** 요청별 태그 (선택적 캐시 무효화용) */
  tags?: string[];
};

class ApiError extends Error {
  constructor(status: number, statusText: string, message?: string) {
    super(message || `ERROR: API Error ${status} ${statusText}`);
    this.name = 'ApiError';
  }
}

async function request<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const { revalidate, tags, ...fetchOptions } = options;

  const response = await fetch(url, {
    ...fetchOptions,
    next: {
      ...(revalidate !== undefined && { revalidate }),
      ...(tags && { tags }),
    },
  });

  if (!response.ok) {
    throw new ApiError(response.status, response.statusText);
  }

  return response.json();
}

/**
 * @example
 * const data = await api.get<Profile>('/api/profile', { revalidate: 3600 });
 *
 * @example
 * // React Query 사용 시
 * const { data } = useQuery({
 *   queryKey: ['profile'],
 *   queryFn: () => api.get<Profile>(ENDPOINTS.profile),
 * });
 */
export const api = {
  get: <T>(url: string, options?: FetchOptions) => request<T>(url, { method: 'GET', ...options }),
  post: <T>(url: string, body: unknown, options?: FetchOptions) =>
    request<T>(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      ...options,
    }),
  put: <T>(url: string, body: unknown, options?: FetchOptions) =>
    request<T>(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      ...options,
    }),
  delete: <T>(url: string, options?: FetchOptions) => request<T>(url, { method: 'DELETE', ...options }),
} as const;
