import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

// const HOST_API = process.env.NEXT_PUBLIC_HOST_API;
const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  res => res,
  error => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

/** 엔드포인트 정의 타입 */
interface EndpointConfig {
  url: string;
  method?: string;
}

/** fetcher 인자 타입 */
type FetcherArg = string | EndpointConfig | (() => EndpointConfig);

/**
 * React Query queryFn fetcher
 *
 * @description
 * 엔드포인트 설정을 받아서 React Query의 queryFn으로 사용할 수 있는 함수를 반환
 *
 * @example
 * queryFn: fetcher(API_ENDPOINT.profile.getProfile)
 * queryFn: fetcher('/profile.json')
 * queryFn: fetcher(API_ENDPOINT.profile.getProfile, { headers: { ... } })
 */
export const fetcher = <T>(endpoint: FetcherArg, config?: AxiosRequestConfig) => {
  // 함수를 반환 → React Query가 나중에 호출
  return async (): Promise<T> => {
    // 엔드포인트가 함수면 실행해서 설정 가져오기
    const endpointConfig = typeof endpoint === 'function' ? endpoint() : endpoint;

    // 문자열이면 GET 요청, 객체면 설정 사용
    const url = typeof endpointConfig === 'string' ? endpointConfig : endpointConfig.url;
    const method = typeof endpointConfig === 'string' ? 'GET' : (endpointConfig.method ?? 'GET');

    const res = await axiosInstance.request<T>({
      url,
      method,
      ...config,
    });

    return res.data;
  };
};
