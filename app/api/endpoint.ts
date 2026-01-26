/**
 * HTTP 메서드 타입
 */
const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;

type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

/** API 엔드포인트 */
export const API_ENDPOINT = {
  profile: {
    getProfile: () => ({
      url: '/profile.json',
      method: HttpMethod.GET,
    }),
  },
};
